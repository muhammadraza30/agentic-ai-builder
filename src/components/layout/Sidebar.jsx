import { Button } from '@/components/ui/Button'
import { 
  Home, 
  Workflow, 
  Bot, 
  Settings, 
  FileText,
  Zap,
  Users,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const menuItems = [
  { icon: Home, label: 'Dashboard', id: 'dashboard' },
  { icon: Workflow, label: 'Workflows', id: 'workflows' },
  { icon: Bot, label: 'Agents', id: 'agents' },
  { icon: Zap, label: 'Templates', id: 'templates' },
  { icon: FileText, label: 'History', id: 'history' },
  { icon: Users, label: 'Team', id: 'team' },
  { icon: Settings, label: 'Settings', id: 'settings' },
]

export default function Sidebar({ activeView, onViewChange }) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div
      className={cn(
        "bg-card border-r h-full transition-all duration-300 flex flex-col",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="p-4 border-b flex items-center justify-between">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Bot className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg">AI Builder</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </Button>
      </div>

      <nav className="flex-1 p-2 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = activeView === item.id

          return (
            <Button
              key={item.id}
              variant={isActive ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start gap-3",
                collapsed && "justify-center"
              )}
              onClick={() => onViewChange(item.id)}
            >
              <Icon size={18} />
              {!collapsed && <span>{item.label}</span>}
            </Button>
          )
        })}
      </nav>

      {!collapsed && (
        <div className="p-4 border-t">
          <div className="bg-secondary rounded-lg p-3">
            <p className="text-sm font-medium mb-1">Upgrade to Pro</p>
            <p className="text-xs text-muted-foreground mb-3">
              Unlock unlimited agents and workflows
            </p>
            <Button size="sm" className="w-full">
              Upgrade Now
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
