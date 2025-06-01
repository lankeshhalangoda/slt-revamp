"use client"

import type React from "react"

import { useState } from "react"
import { Activity, Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import SectionHeader from "@/components/section-header"
import ChartContainer from "@/components/chart-container"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Line, LineChart, Legend } from "recharts"

interface CompetitorOverviewSelectionProps {
  timeRange: "hour" | "day" | "week" | "month" | "year"
}

interface Competitor {
  id: string
  name: string
  mentions: number
  engagement: number
  color: string
  selected: boolean
}

export default function CompetitorOverviewSelection({ timeRange }: CompetitorOverviewSelectionProps) {
  const [shareViewType, setShareViewType] = useState<"percentage" | "count">("percentage")
  const [engagementViewType, setEngagementViewType] = useState<"percentage" | "count">("percentage")

  const [competitors, setCompetitors] = useState<Competitor[]>([
    { id: "brand", name: "Your Brand", mentions: 1245, engagement: 18432, color: "#017ABF", selected: true },
    { id: "1", name: "Competitor A", mentions: 987, engagement: 15243, color: "#E91E63", selected: true },
    { id: "2", name: "Competitor B", mentions: 756, engagement: 12890, color: "#4CAF50", selected: true },
    { id: "3", name: "Competitor C", mentions: 623, engagement: 9876, color: "#FF9800", selected: false },
    { id: "4", name: "Competitor D", mentions: 445, engagement: 7654, color: "#9C27B0", selected: false },
  ])

  const [newCompetitor, setNewCompetitor] = useState("")

  const selectedCompetitors = competitors.filter((comp) => comp.selected)
  const totalMentions = selectedCompetitors.reduce((sum, comp) => sum + comp.mentions, 0)
  const totalEngagement = selectedCompetitors.reduce((sum, comp) => sum + comp.engagement, 0)

  const addCompetitor = () => {
    if (newCompetitor.trim()) {
      const newComp: Competitor = {
        id: Date.now().toString(),
        name: newCompetitor,
        mentions: Math.floor(Math.random() * 1000) + 200,
        engagement: Math.floor(Math.random() * 20000) + 5000,
        color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        selected: true,
      }
      setCompetitors([...competitors, newComp])
      setNewCompetitor("")
    }
  }

  const toggleCompetitor = (id: string) => {
    setCompetitors(competitors.map((comp) => (comp.id === id ? { ...comp, selected: !comp.selected } : comp)))
  }

  const shareOfMentionsData = selectedCompetitors.map((comp) => ({
    name: comp.name,
    value: shareViewType === "percentage" ? Math.round((comp.mentions / totalMentions) * 100) : comp.mentions,
    fill: comp.color,
  }))

  const shareOfEngagementData = selectedCompetitors.map((comp) => ({
    name: comp.name,
    value:
      engagementViewType === "percentage" ? Math.round((comp.engagement / totalEngagement) * 100) : comp.engagement,
    fill: comp.color,
  }))

  const timelineData = [
    {
      date: "Jan",
      ...Object.fromEntries(
        selectedCompetitors.map((comp) => [
          comp.name,
          shareViewType === "percentage"
            ? Math.round((Math.floor(Math.random() * 500) + 200) / 10)
            : Math.floor(Math.random() * 500) + 200,
        ]),
      ),
    },
    {
      date: "Feb",
      ...Object.fromEntries(
        selectedCompetitors.map((comp) => [
          comp.name,
          shareViewType === "percentage"
            ? Math.round((Math.floor(Math.random() * 500) + 200) / 10)
            : Math.floor(Math.random() * 500) + 200,
        ]),
      ),
    },
    {
      date: "Mar",
      ...Object.fromEntries(
        selectedCompetitors.map((comp) => [
          comp.name,
          shareViewType === "percentage"
            ? Math.round((Math.floor(Math.random() * 500) + 200) / 10)
            : Math.floor(Math.random() * 500) + 200,
        ]),
      ),
    },
    {
      date: "Apr",
      ...Object.fromEntries(
        selectedCompetitors.map((comp) => [
          comp.name,
          shareViewType === "percentage"
            ? Math.round((Math.floor(Math.random() * 500) + 200) / 10)
            : Math.floor(Math.random() * 500) + 200,
        ]),
      ),
    },
    {
      date: "May",
      ...Object.fromEntries(
        selectedCompetitors.map((comp) => [
          comp.name,
          shareViewType === "percentage"
            ? Math.round((Math.floor(Math.random() * 500) + 200) / 10)
            : Math.floor(Math.random() * 500) + 200,
        ]),
      ),
    },
    {
      date: "Jun",
      ...Object.fromEntries(
        selectedCompetitors.map((comp) => [
          comp.name,
          shareViewType === "percentage"
            ? Math.round((Math.floor(Math.random() * 500) + 200) / 10)
            : Math.floor(Math.random() * 500) + 200,
        ]),
      ),
    },
  ]

  const competitorSentimentComparison = [
    { date: "Jan", "Your Brand": 75, "Competitor A": 68, "Competitor B": 72, "Competitor C": 65 },
    { date: "Feb", "Your Brand": 78, "Competitor A": 70, "Competitor B": 74, "Competitor C": 67 },
    { date: "Mar", "Your Brand": 82, "Competitor A": 72, "Competitor B": 76, "Competitor C": 69 },
    { date: "Apr", "Your Brand": 79, "Competitor A": 69, "Competitor B": 73, "Competitor C": 66 },
    { date: "May", "Your Brand": 85, "Competitor A": 74, "Competitor B": 78, "Competitor C": 71 },
    { date: "Jun", "Your Brand": 83, "Competitor A": 73, "Competitor B": 77, "Competitor C": 70 },
  ]

  const crisisDetectionData = [
    { date: "Jan", "Your Brand": 2, "Competitor A": 5, "Competitor B": 3, "Competitor C": 4 },
    { date: "Feb", "Your Brand": 1, "Competitor A": 3, "Competitor B": 2, "Competitor C": 6 },
    { date: "Mar", "Your Brand": 0, "Competitor A": 2, "Competitor B": 1, "Competitor C": 3 },
    { date: "Apr", "Your Brand": 3, "Competitor A": 7, "Competitor B": 4, "Competitor C": 2 },
    { date: "May", "Your Brand": 1, "Competitor A": 1, "Competitor B": 2, "Competitor C": 5 },
    { date: "Jun", "Your Brand": 2, "Competitor A": 4, "Competitor B": 3, "Competitor C": 3 },
  ]

  const customTooltipStyle = {
    backgroundColor: "#fff",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  }

  const ModernChartContainer = ({
    title,
    tooltip,
    children,
  }: { title: string; tooltip: string; children: React.ReactNode }) => (
    <ChartContainer title={title} tooltip={tooltip}>
      <div className="space-y-4">{children}</div>
    </ChartContainer>
  )

  return (
    <div className="space-y-8">
      <SectionHeader
        title="Competitor Overview & Selection"
        description="Select competitors and analyze market share"
        icon={<Activity className="h-5 w-5" />}
      />

      {/* Competitor Selector */}
      <Card>
        <CardHeader>
          <CardTitle>Competitor Selector</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex flex-wrap gap-2">
            {competitors.map((competitor) => (
              <Badge
                key={competitor.id}
                variant={competitor.selected ? "default" : "outline"}
                className="flex cursor-pointer items-center gap-2"
                onClick={() => toggleCompetitor(competitor.id)}
              >
                <div className="h-3 w-3 rounded-full" style={{ backgroundColor: competitor.color }} />
                {competitor.name}
                {competitor.id !== "brand" && competitor.selected && <X className="h-3 w-3" />}
              </Badge>
            ))}
          </div>

          <div className="flex gap-2">
            <Input
              placeholder="Add competitor name..."
              value={newCompetitor}
              onChange={(e) => setNewCompetitor(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && addCompetitor()}
            />
            <Button onClick={addCompetitor}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Share Analysis */}
      <div className="grid gap-6 md:grid-cols-2">
        <ChartContainer title="Share of Mentions" tooltip="Market share based on mention volume">
          <div className="space-y-4">
            <div className="flex gap-2">
              <Button
                variant={shareViewType === "percentage" ? "default" : "outline"}
                size="sm"
                onClick={() => setShareViewType("percentage")}
              >
                Percentage
              </Button>
              <Button
                variant={shareViewType === "count" ? "default" : "outline"}
                size="sm"
                onClick={() => setShareViewType("count")}
              >
                Count
              </Button>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={shareOfMentionsData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  formatter={(value) => [
                    shareViewType === "percentage" ? `${value}%` : value,
                    shareViewType === "percentage" ? "Share" : "Mentions",
                  ]}
                />
                <Bar dataKey="value">
                  {shareOfMentionsData.map((entry, index) => (
                    <Bar key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartContainer>

        <ChartContainer title="Share of Engagements" tooltip="Market share based on engagement volume">
          <div className="space-y-4">
            <div className="flex gap-2">
              <Button
                variant={engagementViewType === "percentage" ? "default" : "outline"}
                size="sm"
                onClick={() => setEngagementViewType("percentage")}
              >
                Percentage
              </Button>
              <Button
                variant={engagementViewType === "count" ? "default" : "outline"}
                size="sm"
                onClick={() => setEngagementViewType("count")}
              >
                Count
              </Button>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={shareOfEngagementData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  formatter={(value) => [
                    engagementViewType === "percentage" ? `${value}%` : value,
                    engagementViewType === "percentage" ? "Share" : "Engagement",
                  ]}
                />
                <Bar dataKey="value">
                  {shareOfEngagementData.map((entry, index) => (
                    <Bar key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartContainer>
      </div>

      {/* Timeline */}
      <ChartContainer title="Timeline: Share of Mentions" tooltip="Track market share trends over time">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={timelineData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            {selectedCompetitors.map((competitor) => (
              <Line
                key={competitor.id}
                type="monotone"
                dataKey={competitor.name}
                stroke={competitor.color}
                strokeWidth={competitor.id === "brand" ? 3 : 2}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>

      {/* Sentiment Comparison */}
      <ModernChartContainer
        title="Sentiment Score Comparison"
        tooltip="Compare sentiment scores across competitors over time"
      >
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={competitorSentimentComparison}>
            <XAxis dataKey="date" tick={{ fontSize: 12, fill: "#6b7280" }} />
            <YAxis domain={[60, 90]} tick={{ fontSize: 12, fill: "#6b7280" }} />
            <Tooltip contentStyle={customTooltipStyle} />
            <Legend />
            {selectedCompetitors.map((competitor) => (
              <Line
                key={competitor.id}
                type="monotone"
                dataKey={competitor.name}
                stroke={competitor.color}
                strokeWidth={competitor.id === "brand" ? 4 : 2}
                dot={{ fill: competitor.color, strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: competitor.color, strokeWidth: 2, fill: "white" }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </ModernChartContainer>

      {/* Crisis Detection */}
      <ModernChartContainer
        title="Crisis Detection & Negative Spikes"
        tooltip="Monitor negative sentiment spikes that could indicate potential crises"
      >
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={crisisDetectionData}>
            <XAxis dataKey="date" tick={{ fontSize: 12, fill: "#6b7280" }} />
            <YAxis tick={{ fontSize: 12, fill: "#6b7280" }} />
            <Tooltip
              contentStyle={customTooltipStyle}
              formatter={(value: number) => [`${value} incidents`, "Crisis Incidents"]}
            />
            <Legend />
            {selectedCompetitors.map((competitor) => (
              <Bar key={competitor.id} dataKey={competitor.name} fill={competitor.color} fillOpacity={0.8} />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </ModernChartContainer>
    </div>
  )
}
