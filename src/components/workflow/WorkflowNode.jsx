import { memo } from 'react'
import { Handle, Position } from 'reactflow'
import { Card } from '@/components/ui/Card'
import { Workflow, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

function WorkflowNode({ data, selected }) {
  return (
    <Card
      className={cn(
        "min-w-[280px] transition-all duration-200",
        selected && "ring-2 ring-primary shadow-lg"
      )}
    >
      {data.hasInput && (
        <Handle
          type="target"
          position={Position.Left}
          className="w-3 h-3 !bg-primary"
        />
      )}

      <div className="p-4 space-y-3">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            <Workflow size={20} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm truncate">{data.label}</h3>
            <p className="text-xs text-muted-foreground mt-1">
              {data.description}
            </p>
          </div>
          <ChevronRight size={16} className="text-muted-foreground flex-shrink-0" />
        </div>

        {(data.hasInput || data.hasOutput) && (
          <div className="pt-3 border-t space-y-2">
            {data.hasInput && (
              <div className="text-xs">
                <span className="text-muted-foreground">Input:</span>
                <span className="ml-2 font-mono text-[10px] bg-secondary px-1.5 py-0.5 rounded">
                  user_prompt
                </span>
              </div>
            )}
            {data.hasOutput && (
              <div className="text-xs">
                <span className="text-muted-foreground">Output:</span>
                <span className="ml-2 font-mono text-[10px] bg-secondary px-1.5 py-0.5 rounded">
                  result
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {data.hasOutput && (
        <Handle
          type="source"
          position={Position.Right}
          className="w-3 h-3 !bg-primary"
        />
      )}
    </Card>
  )
}

export default memo(WorkflowNode)
