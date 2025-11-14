# Agentic AI Builder

A modern, prompt-based AI agent builder with visual workflow management. Create intelligent agents through simple prompts and manage complex workflows with an intuitive drag-and-drop interface.

![Agentic AI Builder](https://via.placeholder.com/1200x600/4F46E5/FFFFFF?text=Agentic+AI+Builder)

## 🚀 Features

- **Prompt-Based Agent Creation**: Build AI agents using natural language prompts
- **Visual Workflow Builder**: Drag-and-drop canvas for creating complex workflows
- **Dynamic Input/Output Fields**: Automatically show/hide I/O components based on workflow requirements
- **Modern UI**: Clean, minimalist design inspired by Reflect.app
- **Dark Mode**: Beautiful dark theme support
- **Responsive Design**: Works seamlessly on desktop and tablet devices
- **Real-time Collaboration**: (Coming soon)

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **ReactFlow** - Powerful workflow visualization
- **Radix UI** - Accessible component primitives
- **Lucide Icons** - Beautiful, consistent icons

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd agentic-ai-builder

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:3000`

## 🏗️ Project Structure

```
agentic-ai-builder/
├── src/
│   ├── components/
│   │   ├── ui/              # Base UI components
│   │   ├── layout/          # Layout components (Sidebar, Header)
│   │   ├── workflow/        # Workflow canvas and nodes
│   │   └── features/        # Feature-specific components
│   ├── lib/                 # Utility functions
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── public/                  # Static assets
└── package.json
```

## 🎨 Components

### Workflow Canvas
- Drag-and-drop node editor
- Multiple node types (Workflow, Input, Output)
- Connection management
- Real-time updates

### Agent Builder
- Prompt configuration
- System prompt customization
- Template variables
- Export/import capabilities

### Dashboard
- Agent overview
- Usage statistics
- Recent activity
- Quick actions

## 🚀 Usage

### Creating an Agent

1. Navigate to the "Agents" tab
2. Click "Create Agent"
3. Enter your prompt describing the agent's purpose
4. Configure system prompts and parameters
5. Save and deploy

### Building Workflows

1. Go to the "Workflows" tab
2. Drag nodes from the toolbar onto the canvas
3. Connect nodes to define the workflow logic
4. Configure input/output fields
5. Save and run the workflow

## 🧩 Key Features Explained

### Dynamic Input/Output Fields

Workflows automatically detect when input or output fields are needed:
- **Input fields** appear when the workflow requires user data
- **Output fields** show when the workflow produces results
- Fields are conditionally rendered based on workflow configuration

### Workflow Components

- **Workflow Nodes**: Main processing units
- **Input Nodes**: Data entry points
- **Output Nodes**: Result display
- **Connection Lines**: Data flow visualization

## 🎯 Roadmap

- [ ] Agent marketplace
- [ ] Template library
- [ ] Real-time collaboration
- [ ] Version control for agents
- [ ] Advanced analytics
- [ ] API integrations
- [ ] Custom node types
- [ ] Workflow automation triggers

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Created as a Final Year Project - Agentic AI Builder

## 🙏 Acknowledgments

- Design inspired by [Reflect.app](https://reflect.app)
- Built with modern React ecosystem
- UI components based on Radix UI primitives

---

**Happy Building! 🚀**
