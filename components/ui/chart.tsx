"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof Card> & {
    config?: Record<string, any>
    children: React.ReactNode
  }
>(({ className, config, children, ...props }, ref) => {
  return (
    <Card ref={ref} className={className} {...props}>
      <CardContent className="p-6">{children}</CardContent>
    </Card>
  )
})
ChartContainer.displayName = "ChartContainer"

const ChartTooltip = ({ children }: { children: React.ReactNode }) => {
  return <div className="rounded-lg border bg-background p-2 shadow-sm">{children}</div>
}

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    active?: boolean
    payload?: Array<{
      dataKey: string
      value: any
      payload: any
      color?: string
    }>
    label?: string
    labelKey?: string
    nameKey?: string
    hideLabel?: boolean
    hideIndicator?: boolean
    indicator?: "line" | "dot" | "dashed"
    labelFormatter?: (value: any, payload: any[]) => React.ReactNode
    formatter?: (value: any, name: string, item: any, index: number, payload: any[]) => React.ReactNode
  }
>(({ active, payload, label, className, ...props }, ref) => {
  if (!active || !payload?.length) {
    return null
  }

  return (
    <div ref={ref} className="rounded-lg border bg-background p-2 shadow-sm" {...props}>
      {label && <div className="font-medium text-foreground">{label}</div>}
      <div className="grid gap-1">
        {payload.map((item, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            {item.color && <div className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />}
            <span className="text-muted-foreground">{item.dataKey}:</span>
            <span className="font-medium text-foreground">
              {typeof item.value === "number" ? item.value.toLocaleString() : item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
})
ChartTooltipContent.displayName = "ChartTooltipContent"

const ChartLegend = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center justify-center gap-4 pt-4">{children}</div>
}

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    payload?: Array<{
      value: string
      type?: string
      color?: string
    }>
    nameKey?: string
    hideIcon?: boolean
  }
>(({ payload, className, ...props }, ref) => {
  if (!payload?.length) {
    return null
  }

  return (
    <div ref={ref} className="flex items-center justify-center gap-4" {...props}>
      {payload.map((item, index) => (
        <div key={index} className="flex items-center gap-2 text-sm">
          {item.color && <div className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />}
          <span className="text-muted-foreground">{item.value}</span>
        </div>
      ))}
    </div>
  )
})
ChartLegendContent.displayName = "ChartLegendContent"

export { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent }
