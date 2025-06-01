"use client"

import { Heart } from "lucide-react"
import SectionHeader from "@/components/section-header"
import ModernChartContainer from "@/components/modern-chart-container"
import ChartLegend from "@/components/chart-legend"
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Area,
  AreaChart,
  Cell,
  PieChart,
  Pie,
  LabelList,
  Line,
  ComposedChart,
} from "recharts"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface BrandEngagementDetailsProps {
  timeRange: "hour" | "day" | "week" | "month" | "year"
}

export default function BrandEngagementDetails({ timeRange }: BrandEngagementDetailsProps) {
  const [channelEngagementChartType, setChannelEngagementChartType] = useState<"bar" | "pie">("bar")
  const [channelReachChartType, setChannelReachChartType] = useState<"bar" | "pie">("bar")

  // Channel engagement data with proper colors
  const channelEngagementData = [
    { channel: "Twitter", engagement: 12500, fill: "#1DA1F2" },
    { channel: "Facebook", engagement: 8900, fill: "#4267B2" },
    { channel: "Instagram", engagement: 6700, fill: "#E1306C" },
    { channel: "YouTube", engagement: 4200, fill: "#FF0000" },
    { channel: "LinkedIn", engagement: 2100, fill: "#0077B5" },
  ]

  // Channel reach data
  const channelReachData = [
    { channel: "Twitter", reach: 850000, fill: "#1DA1F2" },
    { channel: "Facebook", reach: 620000, fill: "#4267B2" },
    { channel: "Instagram", reach: 480000, fill: "#E1306C" },
    { channel: "YouTube", reach: 320000, fill: "#FF0000" },
    { channel: "LinkedIn", reach: 180000, fill: "#0077B5" },
  ]

  const engagementLegend = channelEngagementData.map((item) => ({
    color: item.fill,
    label: item.channel,
  }))

  const reachLegend = channelReachData.map((item) => ({
    color: item.fill,
    label: item.channel,
  }))

  // Enhanced engagement data with better styling
  const reactionsBreakdown = [
    { channel: "Twitter", likes: 8500, loves: 1200, laughs: 800, wows: 400, angry: 100 },
    { channel: "Facebook", likes: 6200, loves: 2100, laughs: 1200, wows: 600, angry: 200 },
    { channel: "Instagram", likes: 12000, loves: 800, laughs: 200, wows: 150, angry: 50 },
    { channel: "YouTube", likes: 3200, loves: 400, laughs: 300, wows: 200, angry: 100 },
    { channel: "LinkedIn", likes: 1800, loves: 200, laughs: 50, wows: 100, angry: 20 },
  ]

  const commentsBreakdown = [
    { channel: "Twitter", comments: 2400, replies: 1800, mentions: 600 },
    { channel: "Facebook", comments: 3200, replies: 2100, mentions: 400 },
    { channel: "Instagram", comments: 1800, replies: 1200, mentions: 300 },
    { channel: "YouTube", comments: 4500, replies: 2800, mentions: 200 },
    { channel: "LinkedIn", comments: 800, replies: 500, mentions: 150 },
  ]

  const sharesBreakdown = [
    { channel: "Twitter", shares: 1800, retweets: 1200, quotes: 600 },
    { channel: "Facebook", shares: 2100, reshares: 1400, crossPosts: 700 },
    { channel: "Instagram", shares: 900, stories: 600, reposts: 300 },
    { channel: "YouTube", shares: 1200, embeds: 800, playlists: 400 },
    { channel: "LinkedIn", shares: 400, reposts: 250, articles: 150 },
  ]

  const viralContentData = [
    { date: "Jan", viralPosts: 3, totalPosts: 45, viralEngagement: 15000 },
    { date: "Feb", viralPosts: 5, totalPosts: 52, viralEngagement: 28000 },
    { date: "Mar", viralPosts: 8, totalPosts: 48, viralEngagement: 45000 },
    { date: "Apr", viralPosts: 4, totalPosts: 51, viralEngagement: 22000 },
    { date: "May", viralPosts: 12, totalPosts: 58, viralEngagement: 67000 },
    { date: "Jun", viralPosts: 7, totalPosts: 55, viralEngagement: 38000 },
  ]

  const engagementRateTimeline = [
    { date: "Jan", twitter: 2.8, facebook: 1.9, instagram: 4.2, youtube: 3.1, linkedin: 1.5 },
    { date: "Feb", twitter: 3.1, facebook: 2.2, instagram: 4.8, youtube: 3.4, linkedin: 1.8 },
    { date: "Mar", twitter: 3.5, facebook: 2.6, instagram: 5.2, youtube: 3.8, linkedin: 2.1 },
    { date: "Apr", twitter: 3.2, facebook: 2.3, instagram: 4.9, youtube: 3.5, linkedin: 1.9 },
    { date: "May", twitter: 3.8, facebook: 2.8, instagram: 5.6, youtube: 4.1, linkedin: 2.3 },
    { date: "Jun", twitter: 3.6, facebook: 2.5, instagram: 5.3, youtube: 3.9, linkedin: 2.0 },
  ]

  const shareLegend = [
    { color: "#10B981", label: "Direct Shares" },
    { color: "#34D399", label: "Retweets/Reshares" },
    { color: "#6EE7B7", label: "Cross-posts/Quotes" },
  ]

  const engagementRateLegend = [
    { color: "#1DA1F2", label: "Twitter" },
    { color: "#4267B2", label: "Facebook" },
    { color: "#E1306C", label: "Instagram" },
    { color: "#FF0000", label: "YouTube" },
    { color: "#0077B5", label: "LinkedIn" },
  ]

  // Engagement timeline
  const engagementTimeline = [
    { date: "Jan", likes: 15000, comments: 3200, shares: 1800, saves: 900 },
    { date: "Feb", likes: 17500, comments: 3800, shares: 2100, saves: 1200 },
    { date: "Mar", likes: 21000, comments: 4500, shares: 2600, saves: 1500 },
    { date: "Apr", likes: 19200, comments: 4100, shares: 2300, saves: 1300 },
    { date: "May", likes: 24500, comments: 5200, shares: 3100, saves: 1800 },
    { date: "Jun", likes: 22800, comments: 4800, shares: 2900, saves: 1600 },
  ]

  // Engagement vs Reach comparison
  const engagementVsReach = [
    { channel: "Twitter", engagement: 12500, reach: 850000, rate: 1.47 },
    { channel: "Facebook", engagement: 8900, reach: 620000, rate: 1.44 },
    { channel: "Instagram", engagement: 6700, reach: 480000, rate: 1.4 },
    { channel: "YouTube", engagement: 4200, reach: 320000, rate: 1.31 },
    { channel: "LinkedIn", engagement: 2100, reach: 180000, rate: 1.17 },
  ]

  const reactionLegend = [
    { color: "#10B981", label: "Likes" },
    { color: "#EF4444", label: "Loves" },
    { color: "#F59E0B", label: "Laughs" },
    { color: "#3B82F6", label: "Wows" },
    { color: "#8B5CF6", label: "Angry" },
  ]

  const commentLegend = [
    { color: "#10B981", label: "Comments" },
    { color: "#34D399", label: "Replies" },
    { color: "#6EE7B7", label: "Mentions" },
  ]

  const timelineLegend = [
    { color: "#10B981", label: "Likes" },
    { color: "#3B82F6", label: "Comments" },
    { color: "#F59E0B", label: "Shares" },
    { color: "#8B5CF6", label: "Saves" },
  ]

  const customTooltipStyle = {
    backgroundColor: "white",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
    padding: "12px",
  }

  return (
    <div className="space-y-8">
      <SectionHeader
        title="Engagement Details"
        description="Comprehensive analysis of engagement patterns and user interactions"
        icon={<Heart className="h-5 w-5" />}
      />

      {/* First Row - Channel Performance Overview */}
      <div className="grid gap-6 md:grid-cols-2">
        <ModernChartContainer
          title="Channel Engagement Distribution"
          tooltip="Total engagement across all social media channels"
          legend={<ChartLegend items={engagementLegend} />}
        >
          <div className="space-y-4">
            <div className="flex gap-2">
              <Button
                variant={channelEngagementChartType === "bar" ? "default" : "outline"}
                size="sm"
                onClick={() => setChannelEngagementChartType("bar")}
              >
                Bar Chart
              </Button>
              <Button
                variant={channelEngagementChartType === "pie" ? "default" : "outline"}
                size="sm"
                onClick={() => setChannelEngagementChartType("pie")}
              >
                Pie Chart
              </Button>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              {channelEngagementChartType === "bar" ? (
                <BarChart data={channelEngagementData} margin={{ bottom: 40 }}>
                  <XAxis dataKey="channel" tick={{ fontSize: 12 }} angle={-45} textAnchor="end" height={60} />
                  <YAxis tick={{ fontSize: 12, fill: "#6b7280" }} />
                  <Tooltip
                    contentStyle={customTooltipStyle}
                    formatter={(value: number) => [value.toLocaleString(), "Engagement"]}
                  />
                  <Bar dataKey="engagement" radius={[4, 4, 0, 0]}>
                    <LabelList
                      dataKey="engagement"
                      position="top"
                      formatter={(value: number) => value.toLocaleString()}
                      fontSize={10}
                    />
                    {channelEngagementData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              ) : (
                <PieChart>
                  <Pie
                    data={channelEngagementData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="engagement"
                    stroke="white"
                    strokeWidth={2}
                    label={({ channel, percent }) => `${channel}: ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {channelEngagementData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={customTooltipStyle}
                    formatter={(value: number) => [value.toLocaleString(), "Engagement"]}
                  />
                </PieChart>
              )}
            </ResponsiveContainer>
          </div>
        </ModernChartContainer>

        <ModernChartContainer
          title="Channel Reach Distribution"
          tooltip="Total social reach across channels (excludes Web events)"
          legend={<ChartLegend items={reachLegend} />}
        >
          <div className="space-y-4">
            <div className="flex gap-2">
              <Button
                variant={channelReachChartType === "bar" ? "default" : "outline"}
                size="sm"
                onClick={() => setChannelReachChartType("bar")}
              >
                Bar Chart
              </Button>
              <Button
                variant={channelReachChartType === "pie" ? "default" : "outline"}
                size="sm"
                onClick={() => setChannelReachChartType("pie")}
              >
                Pie Chart
              </Button>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              {channelReachChartType === "bar" ? (
                <BarChart data={channelReachData} margin={{ bottom: 40 }}>
                  <XAxis dataKey="channel" tick={{ fontSize: 12 }} angle={-45} textAnchor="end" height={60} />
                  <YAxis tick={{ fontSize: 12, fill: "#6b7280" }} />
                  <Tooltip
                    contentStyle={customTooltipStyle}
                    formatter={(value: number) => [value.toLocaleString(), "Reach"]}
                  />
                  <Bar dataKey="reach" radius={[4, 4, 0, 0]}>
                    <LabelList
                      dataKey="reach"
                      position="top"
                      formatter={(value: number) => value.toLocaleString()}
                      fontSize={10}
                    />
                    {channelReachData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              ) : (
                <PieChart>
                  <Pie
                    data={channelReachData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="reach"
                    stroke="white"
                    strokeWidth={2}
                    label={({ channel, percent }) => `${channel}: ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {channelReachData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={customTooltipStyle}
                    formatter={(value: number) => [value.toLocaleString(), "Reach"]}
                  />
                </PieChart>
              )}
            </ResponsiveContainer>
          </div>
        </ModernChartContainer>
      </div>

      {/* Second Row - Detailed Engagement Breakdown */}
      <div className="grid gap-6 md:grid-cols-2">
        <ModernChartContainer
          title="Engagement Reactions by Channel"
          tooltip="Different types of reactions across social media channels"
          legend={<ChartLegend items={reactionLegend} />}
        >
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={reactionsBreakdown} margin={{ bottom: 40, left: 20, right: 20, top: 20 }}>
              <XAxis
                dataKey="channel"
                tick={{ fontSize: 11, fill: "#6b7280" }}
                angle={-45}
                textAnchor="end"
                height={60}
                axisLine={{ stroke: "#e5e7eb" }}
                tickLine={{ stroke: "#e5e7eb" }}
              />
              <YAxis
                tick={{ fontSize: 11, fill: "#6b7280" }}
                axisLine={{ stroke: "#e5e7eb" }}
                tickLine={{ stroke: "#e5e7eb" }}
              />
              <Tooltip contentStyle={customTooltipStyle} />
              <Bar dataKey="likes" stackId="a" fill="#10B981" radius={[0, 0, 0, 0]} />
              <Bar dataKey="loves" stackId="a" fill="#EF4444" radius={[0, 0, 0, 0]} />
              <Bar dataKey="laughs" stackId="a" fill="#F59E0B" radius={[0, 0, 0, 0]} />
              <Bar dataKey="wows" stackId="a" fill="#3B82F6" radius={[0, 0, 0, 0]} />
              <Bar dataKey="angry" stackId="a" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ModernChartContainer>

        <ModernChartContainer
          title="Engagement Shares Breakdown by Channels"
          tooltip="Different types of shares and reposts across channels"
          legend={<ChartLegend items={shareLegend} />}
        >
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={sharesBreakdown} margin={{ bottom: 40, left: 10, right: 10, top: 10 }}>
              <XAxis
                dataKey="channel"
                tick={{ fontSize: 10, fill: "#6b7280" }}
                angle={-45}
                textAnchor="end"
                height={60}
                axisLine={{ stroke: "#e5e7eb" }}
                tickLine={{ stroke: "#e5e7eb" }}
              />
              <YAxis
                tick={{ fontSize: 10, fill: "#6b7280" }}
                axisLine={{ stroke: "#e5e7eb" }}
                tickLine={{ stroke: "#e5e7eb" }}
              />
              <Tooltip contentStyle={customTooltipStyle} />
              <Bar dataKey="shares" stackId="a" fill="#10B981" radius={[0, 0, 0, 0]} />
              <Bar dataKey="retweets" stackId="a" fill="#34D399" radius={[0, 0, 0, 0]} />
              <Bar dataKey="quotes" stackId="a" fill="#6EE7B7" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ModernChartContainer>
      </div>

      {/* Third Row - Timeline and Comparison */}
      <div className="grid gap-6 md:grid-cols-2">
        <ModernChartContainer
          title="Engagement Timeline Trends"
          tooltip="How different engagement types have evolved over time"
          legend={<ChartLegend items={timelineLegend} />}
        >
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={engagementTimeline} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <XAxis
                dataKey="date"
                tick={{ fontSize: 11, fill: "#6b7280" }}
                axisLine={{ stroke: "#e5e7eb" }}
                tickLine={{ stroke: "#e5e7eb" }}
              />
              <YAxis
                tick={{ fontSize: 11, fill: "#6b7280" }}
                axisLine={{ stroke: "#e5e7eb" }}
                tickLine={{ stroke: "#e5e7eb" }}
              />
              <Tooltip contentStyle={customTooltipStyle} />
              <Area type="monotone" dataKey="likes" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.8} />
              <Area type="monotone" dataKey="comments" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.8} />
              <Area type="monotone" dataKey="shares" stackId="1" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.8} />
              <Area type="monotone" dataKey="saves" stackId="1" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.8} />
            </AreaChart>
          </ResponsiveContainer>
        </ModernChartContainer>

        <ModernChartContainer
          title="Engagement vs Reach Comparison"
          tooltip="Relationship between engagement and reach across channels"
        >
          <ResponsiveContainer width="100%" height={320}>
            <ComposedChart data={engagementVsReach} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
              <XAxis
                dataKey="channel"
                tick={{ fontSize: 10, fill: "#6b7280" }}
                angle={-45}
                textAnchor="end"
                height={60}
              />
              <YAxis yAxisId="left" tick={{ fontSize: 10, fill: "#6b7280" }} orientation="left" />
              <YAxis yAxisId="right" tick={{ fontSize: 10, fill: "#6b7280" }} orientation="right" />
              <Tooltip contentStyle={customTooltipStyle} />
              <Bar yAxisId="left" dataKey="engagement" fill="#3B82F6" name="Engagement" />
              <Line yAxisId="right" type="monotone" dataKey="reach" stroke="#EF4444" strokeWidth={3} name="Reach" />
            </ComposedChart>
          </ResponsiveContainer>
        </ModernChartContainer>
      </div>

      {/* Fourth Row - Advanced Analytics */}
      <div className="grid gap-6 md:grid-cols-2">
        <ModernChartContainer
          title="Viral Content Detection"
          tooltip="Track viral posts and their engagement impact over time"
        >
          <ResponsiveContainer width="100%" height={320}>
            <ComposedChart data={viralContentData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <XAxis
                dataKey="date"
                tick={{ fontSize: 11, fill: "#6b7280" }}
                axisLine={{ stroke: "#e5e7eb" }}
                tickLine={{ stroke: "#e5e7eb" }}
              />
              <YAxis yAxisId="left" tick={{ fontSize: 10, fill: "#6b7280" }} orientation="left" />
              <YAxis yAxisId="right" tick={{ fontSize: 10, fill: "#6b7280" }} orientation="right" />
              <Tooltip contentStyle={customTooltipStyle} />
              <Bar yAxisId="left" dataKey="viralPosts" fill="#8B5CF6" name="Viral Posts" />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="viralEngagement"
                stroke="#EF4444"
                strokeWidth={3}
                name="Viral Engagement"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </ModernChartContainer>

        <ModernChartContainer
          title="Engagement Rate Trends by Channel"
          tooltip="Track engagement rates across different social media channels"
          legend={<ChartLegend items={engagementRateLegend} />}
        >
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={engagementRateTimeline} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <XAxis
                dataKey="date"
                tick={{ fontSize: 11, fill: "#6b7280" }}
                axisLine={{ stroke: "#e5e7eb" }}
                tickLine={{ stroke: "#e5e7eb" }}
              />
              <YAxis
                tick={{ fontSize: 11, fill: "#6b7280" }}
                axisLine={{ stroke: "#e5e7eb" }}
                tickLine={{ stroke: "#e5e7eb" }}
              />
              <Tooltip contentStyle={customTooltipStyle} />
              <Area
                type="monotone"
                dataKey="instagram"
                stroke="#E1306C"
                fill="#E1306C"
                fillOpacity={0.3}
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="youtube"
                stroke="#FF0000"
                fill="#FF0000"
                fillOpacity={0.3}
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="twitter"
                stroke="#1DA1F2"
                fill="#1DA1F2"
                fillOpacity={0.3}
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="facebook"
                stroke="#4267B2"
                fill="#4267B2"
                fillOpacity={0.3}
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="linkedin"
                stroke="#0077B5"
                fill="#0077B5"
                fillOpacity={0.3}
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ModernChartContainer>
      </div>
    </div>
  )
}
