"use client"

import { useState } from "react"
import {
  Bar,
  BarChart as RechartsBarChart,
  Tooltip as RechartsTooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LabelList,
} from "recharts"
import { Hash } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionHeader from "@/components/section-header"
import ChartContainer from "@/components/chart-container"

interface TopicsAnalysisProps {
  timeRange: "hour" | "day" | "week" | "month" | "year"
  type: "brand" | "competitor"
}

export default function TopicsAnalysis({ timeRange, type }: TopicsAnalysisProps) {
  const [topicChartType, setTopicChartType] = useState<"bar" | "pie">("bar")
  const [hashtagChartType, setHashtagChartType] = useState<"bar" | "pie">("bar")

  // Mock data - in a real app, this would come from an API based on the timeRange and type
  const topicCategorization = [
    { name: "Product Features", positive: 120, negative: 30, total: 150, fill: "#4CAF50" },
    { name: "Customer Support", positive: 80, negative: 70, total: 150, fill: "#2196F3" },
    { name: "Price", positive: 50, negative: 100, total: 150, fill: "#FF9800" },
    { name: "User Experience", positive: 90, negative: 40, total: 130, fill: "#9C27B0" },
  ]

  const topHashtags = [
    { name: "#innovation", count: 245, fill: "#4CAF50" },
    { name: "#technology", count: 198, fill: "#2196F3" },
    { name: "#customerservice", count: 156, fill: "#FF9800" },
    { name: "#quality", count: 132, fill: "#9C27B0" },
    { name: "#newproduct", count: 98, fill: "#F44336" },
  ]

  return (
    <div>
      <SectionHeader
        title="Topics Analysis"
        description="Analyze the most discussed topics and hashtags"
        icon={<Hash className="h-5 w-5" />}
      />

      <div className="grid gap-6 md:grid-cols-2">
        <ChartContainer title="Topic Categorization" tooltip="Breakdown of mentions by topic category with sentiment">
          <div className="space-y-4">
            <div className="flex gap-2">
              <Button
                variant={topicChartType === "bar" ? "default" : "outline"}
                size="sm"
                onClick={() => setTopicChartType("bar")}
              >
                Bar Chart
              </Button>
              <Button
                variant={topicChartType === "pie" ? "default" : "outline"}
                size="sm"
                onClick={() => setTopicChartType("pie")}
              >
                Pie Chart
              </Button>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                {topicChartType === "bar" ? (
                  <RechartsBarChart
                    data={topicCategorization}
                    layout="vertical"
                    margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
                  >
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="name" width={100} />
                    <RechartsTooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="rounded-lg border bg-background p-2 shadow-sm">
                              <div className="font-medium">{payload[0].payload.name}</div>
                              <div className="text-sm text-positive">{`Positive: ${payload[0].value}`}</div>
                              <div className="text-sm text-negative">{`Negative: ${payload[1].value}`}</div>
                              <div className="text-sm text-muted-foreground">{`Total: ${payload[0].payload.total}`}</div>
                            </div>
                          )
                        }
                        return null
                      }}
                    />
                    <Bar dataKey="positive" stackId="a" fill="#4CAF50">
                      <LabelList dataKey="positive" position="center" fill="white" fontSize={10} />
                    </Bar>
                    <Bar dataKey="negative" stackId="a" fill="#F44336">
                      <LabelList dataKey="negative" position="center" fill="white" fontSize={10} />
                    </Bar>
                  </RechartsBarChart>
                ) : (
                  <PieChart>
                    <Pie
                      data={topicCategorization}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="total"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      labelLine={false}
                    >
                      {topicCategorization.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <RechartsTooltip formatter={(value: number) => [value, "Total Mentions"]} />
                  </PieChart>
                )}
              </ResponsiveContainer>
            </div>
          </div>
        </ChartContainer>

        <ChartContainer title="Top Hashtags" tooltip="Most frequently used hashtags in mentions">
          <div className="space-y-4">
            <div className="flex gap-2">
              <Button
                variant={hashtagChartType === "bar" ? "default" : "outline"}
                size="sm"
                onClick={() => setHashtagChartType("bar")}
              >
                Bar Chart
              </Button>
              <Button
                variant={hashtagChartType === "pie" ? "default" : "outline"}
                size="sm"
                onClick={() => setHashtagChartType("pie")}
              >
                Pie Chart
              </Button>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                {hashtagChartType === "bar" ? (
                  <RechartsBarChart
                    data={topHashtags}
                    layout="vertical"
                    margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
                  >
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="name" width={100} />
                    <RechartsTooltip />
                    <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                      <LabelList dataKey="count" position="right" fontSize={10} />
                      {topHashtags.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </RechartsBarChart>
                ) : (
                  <PieChart>
                    <Pie
                      data={topHashtags}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="count"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      labelLine={false}
                    >
                      {topHashtags.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <RechartsTooltip formatter={(value: number) => [value, "Count"]} />
                  </PieChart>
                )}
              </ResponsiveContainer>
            </div>
          </div>
        </ChartContainer>
      </div>
    </div>
  )
}
