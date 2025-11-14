import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Bot, MoreVertical, Play, Edit, Trash2 } from 'lucide-react'
import { formatDate } from '@/lib/utils'

const mockAgents = [
  {
    id: 1,
    name: 'Data Analyzer',
    description: 'Analyzes CSV data and generates insights',
    status: 'active',
    created: new Date(Date.now() - 86400000 * 2),
    runs: 145,
  },
  {
    id: 2,
    name: 'Content Writer',
    description: 'Creates blog posts from outlines',
    status: 'draft',
    created: new Date(Date.now() - 86400000 * 5),
    runs: 89,
  },
  {
    id: 3,
    name: 'Code Reviewer',
    description: 'Reviews pull requests and suggests improvements',
    status: 'active',
    created: new Date(Date.now() - 86400000 * 10),
    runs: 234,
  },
]

export default function AgentList({ onSelectAgent }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">My Agents</h2>
        <Button className="gap-2">
          <Bot size={16} />
          Create Agent
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockAgents.map((agent) => (
          <Card key={agent.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Bot size={20} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-base">{agent.name}</CardTitle>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        agent.status === 'active'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {agent.status}
                    </span>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreVertical size={16} />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                {agent.description}
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{formatDate(agent.created)}</span>
                <span>{agent.runs} runs</span>
              </div>
              <div className="flex gap-2 pt-2">
                <Button size="sm" className="flex-1 gap-2">
                  <Play size={14} />
                  Run
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => onSelectAgent(agent)}
                >
                  <Edit size={14} />
                </Button>
                <Button size="sm" variant="ghost">
                  <Trash2 size={14} />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
