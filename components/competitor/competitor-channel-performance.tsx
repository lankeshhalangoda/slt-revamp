"use client"

import ChannelsAnalysis from "@/components/channels-analysis"
import { Radio } from "lucide-react"
import SectionHeader from "@/components/section-header"
import ChartContainer from "@/components/chart-container"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Line, LineChart } from "recharts"

interface CompetitorChannelPerformanceProps {
  timeRange: "hour" | "day" | "week" | "month" | "year"
}

export default function CompetitorChannelPerformance({ timeRange }: CompetitorChannelPerformanceProps) {
  // Mock data for competitor channel performance
  const channelComparison = [
    { platform: "Twitter", competitorA: 380, competitorB: 320, competitorC: 280, yourBrand: 450 },
    { platform: "Facebook", competitorA: 220, competitorB: 280, competitorC: 180, yourBrand: 250 },
    { platform: "Instagram", competitorA: 150, competitorB: 120, competitorC: 200, yourBrand: 150 },
    { platform: "YouTube", competitorA: 80, competitorB: 60, competitorC: 90, yourBrand: 100 },
    { platform: "LinkedIn", competitorA: 45, competitorB: 55, competitorC: 35, yourBrand: 50 },
  ]

  const engagementRates = [
    { platform: "Twitter", competitorA: 3.2, competitorB: 2.8, competitorC: 3.5, yourBrand: 4.2 },
    { platform: "Facebook", competitorA: 2.1, competitorB: 2.5, competitorC: 1.8, yourBrand: 2.8 },
    { platform: "Instagram", competitorA: 5.8, competitorB: 4.9, competitorC: 6.2, yourBrand: 6.8 },
    { platform: "YouTube", competitorA: 4.5, competitorB: 3.8, competitorC: 5.1, yourBrand: 5.2 },
    { platform: "LinkedIn", competitorA: 1.8, competitorB: 2.2, competitorC: 1.5, yourBrand: 2.8 },
  ]

  const shareOfVoice = [
    { month: "Jan", competitorA: 22, competitorB: 18, competitorC: 15, yourBrand: 23, others: 22 },
    { month: "Feb", competitorA: 24, competitorB: 19, competitorC: 16, yourBrand: 25, others: 16 },
    { month: "Mar", competitorA: 21, competitorB: 20, competitorC: 17, yourBrand: 24, others: 18 },
    { month: "Apr", competitorA: 23, competitorB: 18, competitorC: 15, yourBrand: 26, others: 18 },
    { month: "May", competitorA: 25, competitorB: 21, competitorC: 18, yourBrand: 23, others: 13 },
    { month: "Jun", competitorA: 22, competitorB: 19, competitorC: 16, yourBrand: 25, others: 18 },
  ]

  return (
    <div className="space-y-8">
      <SectionHeader
        title="Channel Performance"
        description="Compare competitor performance across different social media channels"
        icon={<Radio className="h-5 w-5" />}
      />

      {/* Channel Mentions Comparison */}
      <div className="grid gap-6 md:grid-cols-2">
        <ChartContainer title="Mentions by Platform" tooltip="Compare mention volumes across platforms">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={channelComparison}>
              <XAxis dataKey="platform" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="yourBrand" fill="#017ABF" name="Your Brand" />
              <Bar dataKey="competitorA" fill="#E91E63" name="Competitor A" />
              <Bar dataKey="competitorB" fill="#4CAF50" name="Competitor B" />
              <Bar dataKey="competitorC" fill="#FF9800" name="Competitor C" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>

        <ChartContainer title="Engagement Rates by Platform" tooltip="Compare engagement rates across platforms">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={engagementRates}>
              <XAxis dataKey="platform" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="yourBrand" fill="#017ABF" name="Your Brand" />
              <Bar dataKey="competitorA" fill="#E91E63" name="Competitor A" />
              <Bar dataKey="competitorB" fill="#4CAF50" name="Competitor B" />
              <Bar dataKey="competitorC" fill="#FF9800" name="Competitor C" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>

      {/* Share of Voice */}
      <ChartContainer title="Share of Voice Over Time" tooltip="Market share comparison over time">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={shareOfVoice}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="yourBrand" stroke="#017ABF" strokeWidth={3} name="Your Brand" />
            <Line type="monotone" dataKey="competitorA" stroke="#E91E63" strokeWidth={2} name="Competitor A" />
            <Line type="monotone" dataKey="competitorB" stroke="#4CAF50" strokeWidth={2} name="Competitor B" />
            <Line type="monotone" dataKey="competitorC" stroke="#FF9800" strokeWidth={2} name="Competitor C" />
            <Line
              type="monotone"
              dataKey="others"
              stroke="#9E9E9E"
              strokeWidth={1}
              strokeDasharray="5 5"
              name="Others"
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>

      {/* Detailed Channel Analysis */}
      <ChannelsAnalysis timeRange={timeRange} type="competitor" />
    </div>
  )
}
