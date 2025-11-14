import { useCallback, useState } from 'react'
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Panel,
} from 'reactflow'
import 'reactflow/dist/style.css'
import { Button } from '@/components/ui/Button'
import { Plus, Save, Play } from 'lucide-react'
import WorkflowNode from './WorkflowNode'
import InputOutputNode from './InputOutputNode'

const nodeTypes = {
  workflow: WorkflowNode,
  input: InputOutputNode,
  output: InputOutputNode,
}

const initialNodes = [
  {
    id: '1',
    type: 'workflow',
    position: { x: 250, y: 100 },
    data: { 
      label: 'Agent Workflow',
      description: 'Main agent logic',
      hasInput: true,
      hasOutput: true,
    },
  },
]

const initialEdges = []

export default function WorkflowCanvas() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const [selectedNode, setSelectedNode] = useState(null)

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  const addWorkflowNode = () => {
    const newNode = {
      id: `node-${nodes.length + 1}`,
      type: 'workflow',
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: {
        label: `Workflow ${nodes.length + 1}`,
        description: 'New workflow step',
        hasInput: Math.random() > 0.5,
        hasOutput: Math.random() > 0.5,
      },
    }
    setNodes((nds) => [...nds, newNode])
  }

  const onNodeClick = (event, node) => {
    setSelectedNode(node)
  }

  return (
    <div className="w-full h-full relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        fitView
        className="bg-background"
      >
        <Background color="#aaa" gap={16} />
        <Controls />
        <MiniMap />
        <Panel position="top-right" className="flex gap-2">
          <Button onClick={addWorkflowNode} size="sm" className="gap-2">
            <Plus size={16} />
            Add Node
          </Button>
          <Button variant="secondary" size="sm" className="gap-2">
            <Save size={16} />
            Save
          </Button>
          <Button variant="default" size="sm" className="gap-2">
            <Play size={16} />
            Run
          </Button>
        </Panel>
      </ReactFlow>
    </div>
  )
}
