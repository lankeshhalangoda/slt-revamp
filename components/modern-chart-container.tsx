import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Info } from "lucide-react"
import type { ReactNode } from "react"

interface ModernChartContainerProps {
  title: string
  children: ReactNode
  tooltip?: string
  className?: string
  legend?: ReactNode
}

export default function ModernChartContainer({
  title,
  children,
  tooltip,
  className = "",
  legend,
}: ModernChartContainerProps) {
  return (
    <Card className={`h-full border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow ${className}`}>
      <CardHeader className="flex flex-row items-center justify-between pb-4 border-b border-gray-100">
        <CardTitle className="text-lg font-semibold text-gray-900">{title}</CardTitle>
        {tooltip && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-4 w-4 text-gray-400 hover:text-gray-600 transition-colors cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs text-xs">{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </CardHeader>
      <CardContent className="pt-6">
        {children}
        {legend && <div className="mt-6 pt-4 border-t border-gray-100">{legend}</div>}
      </CardContent>
    </Card>
  )
}
