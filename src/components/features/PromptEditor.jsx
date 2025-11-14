import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Sparkles, Copy, RotateCcw } from 'lucide-react'

export default function PromptEditor({ onPromptChange }) {
  const [prompt, setPrompt] = useState('')
  const [systemPrompt, setSystemPrompt] = useState(
    'You are a helpful AI agent builder assistant.'
  )

  const handleGenerate = () => {
    if (onPromptChange) {
      onPromptChange(prompt, systemPrompt)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles size={20} className="text-primary" />
          Prompt Configuration
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-2 block">
            System Prompt
          </label>
          <textarea
            className="w-full min-h-[100px] p-3 rounded-md border border-input bg-background text-sm"
            value={systemPrompt}
            onChange={(e) => setSystemPrompt(e.target.value)}
            placeholder="Define the agent's behavior and role..."
          />
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">
            User Prompt Template
          </label>
          <textarea
            className="w-full min-h-[150px] p-3 rounded-md border border-input bg-background text-sm font-mono"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Create an agent that can {task} by analyzing {input_data}..."
          />
        </div>

        <div className="flex gap-2">
          <Button onClick={handleGenerate} className="gap-2">
            <Sparkles size={16} />
            Generate Agent
          </Button>
          <Button variant="outline" className="gap-2">
            <Copy size={16} />
            Copy
          </Button>
          <Button variant="ghost" className="gap-2">
            <RotateCcw size={16} />
            Reset
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
