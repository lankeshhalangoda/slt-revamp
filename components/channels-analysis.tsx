"use client"

import { useState } from "react"
import {
  Bar,
  BarChart as RechartsBarChart,
  Cell,
  Line,
  LineChart as RechartsLineChart,
  Tooltip as RechartsTooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  LabelList,
} from "recharts"
import { Radio } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionHeader from "@/components/section-header"
import ChartContainer from "@/components/chart-container"

interface ChannelsAnalysisProps {
  timeRange: "hour" | "day" | "week" | "month" | "year"
  type: "brand" | "competitor"
}

export default function ChannelsAnalysis({ timeRange, type }: ChannelsAnalysisProps) {
  const [distributionChartType, setDistributionChartType] = useState<"bar" | "pie">("bar")

  // Mock data - in a real app, this would come from an API based on the timeRange and type
  const channelDistribution = [
    { name: "Twitter", value: 45, fill: "#1DA1F2" },
    { name: "Facebook", value: 25, fill: "#4267B2" },
    { name: "Instagram", value: 15, fill: "#E1306C" },
    { name: "YouTube", value: 10, fill: "#FF0000" },
    { name: "LinkedIn", value: 5, fill: "#0077B5" },
  ]

  const channelEngagement = [
    { date: "Jan", twitter: 120, facebook: 80, instagram: 60, youtube: 30, linkedin: 20 },
    { date: "Feb", twitter: 140, facebook: 90, instagram: 70, youtube: 35, linkedin: 25 },
    { date: "Mar", twitter: 130, facebook: 100, instagram: 80, youtube: 40, linkedin: 30 },
    { date: "Apr", twitter: 150, facebook: 110, instagram: 90, youtube: 45, linkedin: 35 },
    { date: "May", twitter: 170, facebook: 120, instagram: 100, youtube: 50, linkedin: 40 },
    { date: "Jun", twitter: 160, facebook: 130, instagram: 110, youtube: 55, linkedin: 45 },
  ]

  return (
    <div>
      <SectionHeader
        title="Channels Analysis"
        description="Analyze mentions and engagement across different social channels"
        icon={<Radio className="h-5 w-5" />}
      />

      <div className="grid gap-6 md:grid-cols-2">
        <ChartContainer title="Channel Distribution" tooltip="Breakdown of mentions by social media channel">
          <div className="space-y-4">
            <div className="flex gap-2">
              <Button
                variant={distributionChartType === "bar" ? "default" : "outline"}
                size="sm"
                onClick={() => setDistributionChartType("bar")}
              >
                Bar Chart
              </Button>
              <Button
                variant={distributionChartType === "pie" ? "default" : "outline"}
                size="sm"
                onClick={() => setDistributionChartType("pie")}
              >
                Pie Chart
              </Button>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              {distributionChartType === "bar" ? (
                <RechartsBarChart data={channelDistribution} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <RechartsTooltip />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    <LabelList dataKey="value" position="top" formatter={(value: number) => `${value}%`} />
                    {channelDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </RechartsBarChart>
              ) : (
                <PieChart>
                  <Pie
                    data={channelDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {channelDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <RechartsTooltip formatter={(value: number) => [`${value}%`, "Percentage"]} />
                </PieChart>
              )}
            </ResponsiveContainer>
          </div>
        </ChartContainer>

        <ChartContainer title="Channel Engagement Over Time" tooltip="How engagement has changed across channels">
          <ResponsiveContainer width="100%" height={300}>
            <RechartsLineChart data={channelEngagement} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="date" />
              <YAxis />
              <RechartsTooltip />
              <Line type="monotone" dataKey="twitter" stroke="#1DA1F2" strokeWidth={2} />
              <Line type="monotone" dataKey="facebook" stroke="#4267B2" strokeWidth={2} />
              <Line type="monotone" dataKey="instagram" stroke="#E1306C" strokeWidth={2} />
              <Line type="monotone" dataKey="youtube" stroke="#FF0000" strokeWidth={2} />
              <Line type="monotone" dataKey="linkedin" stroke="#0077B5" strokeWidth={2} />
            </RechartsLineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  )
}
