import { FastMCP } from "fastmcp";
import { z } from "zod";

const server = new FastMCP({
    name: "example-server",
    version: "1.0.0"
});

// Welcome Tool
server.addTool({
    name: "welcome-tool",
    description: "A simple welcome tool that greets the user",
    parameters: z.object({
        name: z.string().describe("Name of the person to greet")
    }),
    execute: async (args) => {
        const name = args.name || 'friend';
        return `Hello ${name}! Welcome to our MCP server.`;
    }
});

// Echo Tool
server.addTool({
    name: "echo-tool",
    description: "A tool that echoes back the input message",
    parameters: z.object({
        message: z.string().describe("Message to echo back")
    }),
    execute: async (args) => {
        return `Echo: ${args.message}`;
    }
});

// Start the server with stdio transport
server.start({
    transportType: "stdio"
});
