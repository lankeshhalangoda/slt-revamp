import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Info } from "lucide-react"
import type { ReactNode } from "react"

interface ChartContainerProps {
  title: string
  children: ReactNode
  tooltip?: string
  className?: string
}

export default function ChartContainer({ title, children, tooltip, className = "" }: ChartContainerProps) {
  return (
    <Card className={`h-full ${className}`}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {tooltip && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-4 w-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs text-xs">{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </CardHeader>
      <CardContent className="pt-4">{children}</CardContent>
    </Card>
  )
}
