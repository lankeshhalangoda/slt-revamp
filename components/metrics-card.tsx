import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { ReactNode } from "react"

interface MetricsCardProps {
  title: string
  value: string | number
  icon: ReactNode
  description?: string
  trend?: number
  color?: string
}

export default function MetricsCard({ title, value, icon, description, trend, color = "#017ABF" }: MetricsCardProps) {
  // Define 4 different colors for the top border lines
  const getTopBorderColor = (originalColor: string) => {
    const colorMap: { [key: string]: string } = {
      "#3B82F6": "#3B82F6", // Blue
      "#10B981": "#10B981", // Green
      "#F59E0B": "#F59E0B", // Orange
      "#8B5CF6": "#8B5CF6", // Purple
    }
    return colorMap[originalColor] || "#3B82F6"
  }

  const topBorderColor = getTopBorderColor(color)

  return (
    <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-200 border-0 relative overflow-hidden">
      {/* Thick colored top border line */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: topBorderColor }} />

      <CardHeader className="flex flex-row items-center justify-between pb-2 bg-white pt-4">
        <CardTitle className="text-sm font-medium text-foreground">{title}</CardTitle>
        <div className="h-4 w-4" style={{ color: topBorderColor }}>
          {icon}
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="text-2xl font-bold">{value}</div>
        {description && <p className="text-xs text-muted-foreground">{description}</p>}
        {trend !== undefined && (
          <div className={`mt-2 flex items-center text-xs ${trend >= 0 ? "text-positive" : "text-negative"}`}>
            {trend >= 0 ? "↑" : "↓"} {Math.abs(trend)}% from previous period
          </div>
        )}
      </CardContent>
    </Card>
  )
}
