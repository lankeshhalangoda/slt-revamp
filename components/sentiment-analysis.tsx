"use client"

import { useState } from "react"
import {
  Bar,
  BarChart as RechartsBarChart,
  Cell,
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  XAxis,
  YAxis,
  LabelList,
} from "recharts"
import { Smile } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SectionHeader from "@/components/section-header"
import ChartContainer from "@/components/chart-container"

interface SentimentAnalysisProps {
  timeRange: "hour" | "day" | "week" | "month" | "year"
  type: "brand" | "competitor"
}

export default function SentimentAnalysis({ timeRange, type }: SentimentAnalysisProps) {
  const [sentimentView, setSentimentView] = useState<"basic" | "emotions">("basic")
  const [chartType, setChartType] = useState<"pie" | "bar">("pie")

  // Mock data - in a real app, this would come from an API based on the timeRange and type
  const basicSentimentData = [
    { name: "Positive", value: 65, fill: "#4CAF50" },
    { name: "Neutral", value: 25, fill: "#F59E0B" },
    { name: "Negative", value: 10, fill: "#F44336" },
  ]

  const emotionSentimentData = [
    { name: "Happy", value: 40, fill: "#4CAF50" },
    { name: "Satisfied", value: 25, fill: "#8BC34A" },
    { name: "Neutral", value: 15, fill: "#F59E0B" },
    { name: "Disappointed", value: 7, fill: "#FF9800" },
    { name: "Angry", value: 3, fill: "#F44336" },
    { name: "Surprised", value: 10, fill: "#2196F3" },
  ]

  const sentimentTrendData = [
    { date: "Jan", positive: 45, neutral: 30, negative: 25 },
    { date: "Feb", positive: 50, neutral: 25, negative: 25 },
    { date: "Mar", positive: 55, neutral: 25, negative: 20 },
    { date: "Apr", positive: 60, neutral: 25, negative: 15 },
    { date: "May", positive: 65, neutral: 25, negative: 10 },
    { date: "Jun", positive: 60, neutral: 30, negative: 10 },
  ]

  const currentData = sentimentView === "basic" ? basicSentimentData : emotionSentimentData

  return (
    <div>
      <SectionHeader
        title="Sentiment Analysis"
        description="Analyze the sentiment of social media mentions"
        icon={<Smile className="h-5 w-5" />}
      />

      <div className="grid gap-6 md:grid-cols-2">
        <ChartContainer title="Sentiment Distribution" tooltip="Breakdown of sentiment across all mentions">
          <div className="space-y-4">
            <Tabs value={sentimentView} onValueChange={(v) => setSentimentView(v as any)}>
              <TabsList className="mb-4">
                <TabsTrigger value="basic">Basic</TabsTrigger>
                <TabsTrigger value="emotions">Emotions</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex gap-2">
              <Button
                variant={chartType === "pie" ? "default" : "outline"}
                size="sm"
                onClick={() => setChartType("pie")}
              >
                Pie Chart
              </Button>
              <Button
                variant={chartType === "bar" ? "default" : "outline"}
                size="sm"
                onClick={() => setChartType("bar")}
              >
                Bar Chart
              </Button>
            </div>

            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                {chartType === "pie" ? (
                  <RechartsPieChart>
                    <Pie
                      data={currentData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      labelLine={false}
                    >
                      {currentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <RechartsTooltip
                      formatter={(value: number) => [`${value}%`, "Percentage"]}
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="rounded-lg border bg-background p-2 shadow-sm">
                              <div className="font-medium">{payload[0].name}</div>
                              <div className="text-sm text-muted-foreground">{`${payload[0].value}%`}</div>
                            </div>
                          )
                        }
                        return null
                      }}
                    />
                  </RechartsPieChart>
                ) : (
                  <RechartsBarChart data={currentData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <RechartsTooltip formatter={(value: number) => [`${value}%`, "Percentage"]} />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                      <LabelList dataKey="value" position="top" formatter={(value: number) => `${value}%`} />
                      {currentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </RechartsBarChart>
                )}
              </ResponsiveContainer>
            </div>
          </div>
        </ChartContainer>

        <ChartContainer title="Sentiment Trend" tooltip="How sentiment has changed over time">
          <ResponsiveContainer className="h-[300px]">
            <RechartsBarChart data={sentimentTrendData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="date" />
              <YAxis />
              <RechartsTooltip />
              <Bar dataKey="positive" stackId="a" fill="#4CAF50">
                <LabelList dataKey="positive" position="center" fill="white" fontSize={10} />
              </Bar>
              <Bar dataKey="neutral" stackId="a" fill="#F59E0B">
                <LabelList dataKey="neutral" position="center" fill="white" fontSize={10} />
              </Bar>
              <Bar dataKey="negative" stackId="a" fill="#F44336">
                <LabelList dataKey="negative" position="center" fill="white" fontSize={10} />
              </Bar>
            </RechartsBarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  )
}
