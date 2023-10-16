FROM oven/bun:latest

# Create app directory
WORKDIR /usr/src/app

# Get project source
COPY . .

# Dependencies' installations
RUN bun install

# Application start command
CMD ["bun", "index.ts"]
