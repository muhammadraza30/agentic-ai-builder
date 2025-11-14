import { useState, useEffect } from 'react'
import Sidebar from '@/components/layout/Sidebar'
import Header from '@/components/layout/Header'
import WorkflowCanvas from '@/components/workflow/WorkflowCanvas'
import PromptEditor from '@/components/features/PromptEditor'
import AgentList from '@/components/features/AgentList'
import { Card, CardContent } from '@/components/ui/Card'

function App() {
  const [activeView, setActiveView] = useState('workflows')
  const [isDark, setIsDark] = useState(false)
  const [selectedAgent, setSelectedAgent] = useState(null)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const handleThemeToggle = () => {
    setIsDark(!isDark)
  }

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome to your AI Agent Builder
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-sm text-muted-foreground">Active Agents</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold">1,234</div>
                  <p className="text-sm text-muted-foreground">Total Runs</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-sm text-muted-foreground">Workflows</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case 'workflows':
        return (
          <div className="h-full flex flex-col">
            <div className="mb-4">
              <h1 className="text-3xl font-bold mb-2">Workflow Builder</h1>
              <p className="text-muted-foreground">
                Create and manage your agent workflows visually
              </p>
            </div>
            <div className="flex-1 border rounded-lg overflow-hidden">
              <WorkflowCanvas />
            </div>
          </div>
        )

      case 'agents':
        return (
          <div className="space-y-6">
            <AgentList onSelectAgent={setSelectedAgent} />
            {selectedAgent && (
              <div className="mt-6">
                <PromptEditor />
              </div>
            )}
          </div>
        )

      case 'templates':
        return (
          <div>
            <h1 className="text-3xl font-bold mb-2">Templates</h1>
            <p className="text-muted-foreground">
              Pre-built agent templates to get started quickly
            </p>
          </div>
        )

      case 'history':
        return (
          <div>
            <h1 className="text-3xl font-bold mb-2">Execution History</h1>
            <p className="text-muted-foreground">
              View past agent runs and their results
            </p>
          </div>
        )

      case 'settings':
        return (
          <div>
            <h1 className="text-3xl font-bold mb-2">Settings</h1>
            <p className="text-muted-foreground">
              Configure your workspace and preferences
            </p>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="h-screen flex overflow-hidden bg-background">
      <Sidebar activeView={activeView} onViewChange={setActiveView} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onThemeToggle={handleThemeToggle} isDark={isDark} />

        <main className="flex-1 overflow-auto">
          <div className="p-6 h-full">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
