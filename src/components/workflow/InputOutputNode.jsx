import { memo } from 'react'
import { Handle, Position } from 'reactflow'
import { Card } from '@/components/ui/Card'
import { Input as InputIcon, Output } from 'lucide-react'
import { cn } from '@/lib/utils'

function InputOutputNode({ data, selected }) {
  const isInput = data.type === 'input'

  return (
    <Card
      className={cn(
        "min-w-[220px] transition-all duration-200",
        selected && "ring-2 ring-primary shadow-lg",
        isInput ? "border-l-4 border-l-green-500" : "border-r-4 border-r-blue-500"
      )}
    >
      <div className="p-4">
        <div className="flex items-center gap-3">
          <div className={cn(
            "p-2 rounded-lg",
            isInput ? "bg-green-500/10 text-green-600" : "bg-blue-500/10 text-blue-600"
          )}>
            {isInput ? <InputIcon size={18} /> : <Output size={18} />}
          </div>
          <div>
            <h3 className="font-semibold text-sm">{data.label}</h3>
            <p className="text-xs text-muted-foreground">
              {isInput ? 'Input Field' : 'Output Field'}
            </p>
          </div>
        </div>

        <div className="mt-3 text-xs">
          <span className="text-muted-foreground">Type:</span>
          <span className="ml-2 font-mono text-[10px] bg-secondary px-1.5 py-0.5 rounded">
            {data.fieldType || 'string'}
          </span>
        </div>
      </div>

      {isInput ? (
        <Handle
          type="source"
          position={Position.Right}
          className="w-3 h-3 !bg-green-500"
        />
      ) : (
        <Handle
          type="target"
          position={Position.Left}
          className="w-3 h-3 !bg-blue-500"
        />
      )}
    </Card>
  )
}

export default memo(InputOutputNode)
