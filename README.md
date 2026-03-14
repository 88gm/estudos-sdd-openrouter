# Spec Agent

## 🎯 Project Objective

This project is dedicated to **studies and research** in the areas of:

- 🧠 **Artificial Intelligence** and language models
- 🔄 **Agentic workflows**
- 🛠️ **Tools, Rules, and Skills** for intelligent agents
- 📋 **Spec-Driven Development (SDD)** - Specification-driven development
- 🔌 **Model Context Protocol (MCP)** and tool integration
- ⚙️ Agent architectures and multi-agent systems

This is an **experimental/academic project** for exploring concepts, patterns, and practices in AI agent development.

## 🚀 Overview

Spec Agent is an intelligent system that processes natural language prompts using OpenRouter's AI models. The agent follows a set of configurable rules and can utilize various tools to perform complex tasks.

## ✨ Features
 
- Natural language processing with state-of-the-art AI models
- Rule-based system for guiding agent behavior
- Extensible tool system for custom functionality
- Step logging and monitoring
- Configurable step limits

## 📋 Prerequisites

- Node.js (v18 or higher)
- OpenRouter API key
- TypeScript

## 🛠️ Installation

```bash
# Install dependencies (if package.json exists)
npm install

# Compile TypeScript
npx tsc --noEmit

# Or run directly with ts-node
npx ts-node main.ts "your prompt here"
```

## 🔧 Configuration

Create a `.env` file in the root directory with the following variables:

```env
OPENROUTER_API_KEY=your_api_key_here
OPENROUTER_MODEL=openai/gpt-4o  # or any other supported model
```

## 📖 Usage

Run the agent from the command line:

```bash
node main.js "<prompt>" [step_limit]
```

**Parameters:**
- `prompt` (required): The instruction or question for the agent
- `step_limit` (optional): Maximum number of reasoning steps (default: 500)

**Example:**
```bash
node main.js "Analyze the current market trends for renewable energy" 100
```

## 📁 Project Structure

```
.
├── main.ts                 # Entry point
├── my-first-agent/
│   └── spec-agent.ts      # Core agent implementation
├── tools/
│   └── Index.ts           # Tool definitions
├── util/
│   ├── logger.ts          # Logging utilities
│   └── rulesLoader.ts     # Rules loading system
├── config/
│   └── dotenv.ts          # Environment configuration
├── .agents/               # Agent-specific data
├── .env                   # Environment variables (gitignored)
└── tests-*                # Test directories
```

## 🧩 System Rules

The agent operates based on rules that define its behavior, constraints, and operational guidelines. These rules are loaded automatically from the `.agents` directory or via the rules loader utility.

Rules are defined in separate `.rule` files and can be combined to create different agent behaviors.

## 🧠 Concepts Under Study

This project actively explores the following concepts and technologies:

### Spec-Driven Development (SDD)
- Development based on formal specifications
- Behavior definition through declarative rules
- Clear separation between specification and implementation

### Model Context Protocol (MCP)
- Standard for extending language model capabilities
- External tool integration via standard protocol
- Dynamic context for agents

### Multi-Agent Systems
- Architectures with multiple specialized agents
- Communication and coordination between agents
- Task and responsibility distribution

### Tool Calling & Function Execution
- Tool execution based on agent intent
- Tool schemas and parameter validation
- Error handling and fallbacks

### Prompt Engineering & Chain of Thought
- Step-by-step reasoning techniques
- Prompt templates and composition strategies
- Optimization of LLM interactions

### Observability & Monitoring
- Structured execution logging
- Tracking decisions and tools used
- Performance and reliability metrics

## 🛠️ Available Tools

The agent can use various tools defined in `tools/Index.ts`. Tools enable the agent to interact with external systems, perform calculations, search information, and more.

To add new tools:
1. Define the tool's schema and implementation
2. Export it from `tools/Index.ts`
3. The agent will automatically discover and use it

## 🧪 Testing

```bash
# Run unit tests (if using a test framework)
npm test
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

[Specify your license here]

---

## ⚠️ Disclaimer

This is a **research and study project**. Implementations may contain bugs, have not been optimized for production, and are constantly evolving. Use at your own risk in non-critical environments.

## 🔗 Resources

- [OpenRouter Documentation](https://openrouter.ai/docs)
- [AI SDK Documentation](https://sdk.vercel.ai/docs)
