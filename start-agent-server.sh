LLM_MODEL="anthropic/claude-sonnet-4"
VERSION="0.47.1"
REGISTRY="ghcr.io/swebuild"

CONFIG_FILE="./openhands-config.toml"

if [ -z "$ANTHROPIC_API_KEY" ]; then
    echo "Please set the ANTHROPIC_API_KEY environment variable to your API key."
    exit 1
fi

# Function to clean up Docker container on script termination
cleanup() {
    echo "Script terminated. Stopping Docker container..."
    docker stop openhands-app 2>/dev/null || true
    docker rm openhands-app 2>/dev/null || true
    echo "Docker container stopped and removed."
    exit 0
}

# Set up signal traps to call cleanup function
trap cleanup SIGTERM SIGINT SIGQUIT

export SANDBOX_VOLUMES="$(pwd):/workspace:rw"
echo "Starting OpenHands with the following configuration:"
echo "LLM_MODEL: $LLM_MODEL"
#echo "ANTHROPIC_API_KEY: $ANTHROPIC_API_KEY"
echo "SANDBOX_VOLUMES: $SANDBOX_VOLUMES"

# Check if config file exists
if [ -f "$CONFIG_FILE" ]; then
    echo "CONFIG_FILE: $CONFIG_FILE"
    CONFIG_MOUNT="-v $(realpath $CONFIG_FILE):/app/config.toml"
else
    echo "Config file not found at $CONFIG_FILE - running without config file"
    CONFIG_MOUNT=""
fi

# Stop and remove existing container if it exists
echo "Checking for existing openhands-app container..."
if docker ps -a --format "table {{.Names}}" | grep -q "^openhands-app$"; then
    echo "Found existing openhands-app container. Stopping and removing..."
    docker stop openhands-app 2>/dev/null || true
    docker rm openhands-app 2>/dev/null || true
    echo "Existing container removed."
fi

docker pull $REGISTRY/openhands-runtime:$VERSION-nikolaik

docker run -it --rm --pull=always \
    -e SANDBOX_RUNTIME_CONTAINER_IMAGE=$REGISTRY/openhands-runtime:$VERSION-nikolaik \
    -e SANDBOX_USER_ID=$(id -u) \
    -e LLM_MODEL=$LLM_MODEL \
    -e LLM_API_KEY=$ANTHROPIC_API_KEY \
    -e SANDBOX_VOLUMES=$SANDBOX_VOLUMES \
    -e LOG_ALL_EVENTS=true \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v ./system_prompt_oneclick.j2:/app/openhands/agenthub/codeact_agent/prompts/system_prompt_oneclick.j2 \
    -v ../../.openhands:/.openhands \
    $CONFIG_MOUNT \
    -p 3000:3000 \
    --add-host host.docker.internal:host-gateway \
    --name openhands-app \
    $REGISTRY/openhands-app:$VERSION

# TODO: the LLM_API_KEY doesn't seem to set automatically, maybe need to spoof the .session file or write it into the config file?

# -v ~/.openhands:/.openhands \ # use user settings

cleanup