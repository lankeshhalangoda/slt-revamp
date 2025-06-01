"use client"

import { Activity, MessageCircle, Heart, Eye } from "lucide-react"
import SectionHeader from "@/components/section-header"
import MetricsCard from "@/components/metrics-card"
import ModernChartContainer from "@/components/modern-chart-container"
import ChartLegend from "@/components/chart-legend"
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

interface BrandOverviewProps {
  timeRange: "hour" | "day" | "week" | "month" | "year"
}

export default function BrandOverview({ timeRange }: BrandOverviewProps) {
  // Mock data for timelines
  const totalMentionsTimeline = [
    { date: "Jan", mentions: 1850 },
    { date: "Feb", mentions: 2100 },
    { date: "Mar", mentions: 2450 },
    { date: "Apr", mentions: 2200 },
    { date: "May", mentions: 2800 },
    { date: "Jun", mentions: 2650 },
  ]

  const totalEngagementTimeline = [
    { date: "Jan", engagement: 15400 },
    { date: "Feb", engagement: 17800 },
    { date: "Mar", engagement: 21200 },
    { date: "Apr", engagement: 19600 },
    { date: "May", engagement: 24500 },
    { date: "Jun", engagement: 23100 },
  ]

  const totalSocialReachTimeline = [
    { date: "Jan", reach: 1800000 },
    { date: "Feb", reach: 2100000 },
    { date: "Mar", reach: 2450000 },
    { date: "Apr", reach: 2200000 },
    { date: "May", reach: 2800000 },
    { date: "Jun", reach: 2650000 },
  ]

  const channelMentionsTimeline = [
    { date: "Jan", Twitter: 850, Facebook: 420, Instagram: 380, YouTube: 120, LinkedIn: 80 },
    { date: "Feb", Twitter: 980, Facebook: 480, Instagram: 440, YouTube: 140, LinkedIn: 60 },
    { date: "Mar", Twitter: 1150, Facebook: 560, Instagram: 520, YouTube: 160, LinkedIn: 60 },
    { date: "Apr", Twitter: 1020, Facebook: 520, Instagram: 460, YouTube: 140, LinkedIn: 60 },
    { date: "May", Twitter: 1300, Facebook: 640, Instagram: 600, YouTube: 180, LinkedIn: 80 },
    { date: "Jun", Twitter: 1220, Facebook: 600, Instagram: 580, YouTube: 170, LinkedIn: 80 },
  ]

  const channelEngagementTimeline = [
    { date: "Jan", Twitter: 7200, Facebook: 4800, Instagram: 2400, YouTube: 800, LinkedIn: 200 },
    { date: "Feb", Twitter: 8400, Facebook: 5600, Instagram: 2800, YouTube: 920, LinkedIn: 80 },
    { date: "Mar", Twitter: 9800, Facebook: 6600, Instagram: 3400, YouTube: 1200, LinkedIn: 200 },
    { date: "Apr", Twitter: 8800, Facebook: 6000, Instagram: 3200, YouTube: 1400, LinkedIn: 200 },
    { date: "May", Twitter: 11200, Facebook: 7600, Instagram: 4000, YouTube: 1500, LinkedIn: 200 },
    { date: "Jun", Twitter: 10600, Facebook: 7200, Instagram: 3800, YouTube: 1300, LinkedIn: 200 },
  ]

  const channelSocialReachTimeline = [
    { date: "Jan", Twitter: 850000, Facebook: 620000, Instagram: 280000, YouTube: 50000 },
    { date: "Feb", Twitter: 980000, Facebook: 720000, Instagram: 320000, YouTube: 80000 },
    { date: "Mar", Twitter: 1150000, Facebook: 840000, Instagram: 380000, YouTube: 80000 },
    { date: "Apr", Twitter: 1020000, Facebook: 760000, Instagram: 340000, YouTube: 80000 },
    { date: "May", Twitter: 1300000, Facebook: 960000, Instagram: 440000, YouTube: 100000 },
    { date: "Jun", Twitter: 1220000, Facebook: 900000, Instagram: 410000, YouTube: 120000 },
  ]

  // Current metrics
  const currentMetrics = {
    totalMentions: 2650,
    totalEngagement: 23100,
    totalSocialReach: "2.65M",
    sentimentScore: 7.8,
  }

  const channelLegend = [
    { color: "#1DA1F2", label: "Twitter" },
    { color: "#4267B2", label: "Facebook" },
    { color: "#E1306C", label: "Instagram" },
    { color: "#FF0000", label: "YouTube" },
    { color: "#0077B5", label: "LinkedIn" },
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
        title="Brand Overview"
        description="Key performance indicators and timelines for your brand's social presence"
        icon={<Activity className="h-5 w-5" />}
      />

      {/* Key Metrics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricsCard
          title="Total Mentions"
          value={currentMetrics.totalMentions.toLocaleString()}
          icon={<MessageCircle className="h-4 w-4" />}
          trend={5.2}
          color="#3B82F6"
        />
        <MetricsCard
          title="Total Engagement"
          value={currentMetrics.totalEngagement.toLocaleString()}
          icon={<Heart className="h-4 w-4" />}
          trend={-3.1}
          color="#10B981"
        />
        <MetricsCard
          title="Total Social Reach"
          value={currentMetrics.totalSocialReach}
          icon={<Eye className="h-4 w-4" />}
          trend={12.5}
          color="#F59E0B"
        />
        <MetricsCard
          title="Sentiment Score"
          value={currentMetrics.sentimentScore}
          icon={<Activity className="h-4 w-4" />}
          trend={0.8}
          color="#8B5CF6"
        />
      </div>

      {/* Total Metrics Timelines - 2 per row */}
      <div className="grid gap-6 md:grid-cols-2">
        <ModernChartContainer title="Total Mentions Timeline" tooltip="Overall mentions trend over time">
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={totalMentionsTimeline} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <XAxis
                dataKey="date"
                tick={{ fontSize: 12, fill: "#6b7280" }}
                axisLine={{ stroke: "#e5e7eb" }}
                tickLine={{ stroke: "#e5e7eb" }}
              />
              <YAxis
                tick={{ fontSize: 12, fill: "#6b7280" }}
                axisLine={{ stroke: "#e5e7eb" }}
                tickLine={{ stroke: "#e5e7eb" }}
              />
              <Tooltip contentStyle={customTooltipStyle} />
              <Area
                type="monotone"
                dataKey="mentions"
                stroke="#3B82F6"
                fill="#3B82F6"
                fillOpacity={0.2}
                strokeWidth={3}
                dot={{ fill: "#3B82F6", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: "#3B82F6", strokeWidth: 2, fill: "white" }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ModernChartContainer>

        <ModernChartContainer title="Total Engagement Timeline" tooltip="Overall engagement trend over time">
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={totalEngagementTimeline} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <XAxis
                dataKey="date"
                tick={{ fontSize: 12, fill: "#6b7280" }}
                axisLine={{ stroke: "#e5e7eb" }}
                tickLine={{ stroke: "#e5e7eb" }}
              />
              <YAxis
                tick={{ fontSize: 12, fill: "#6b7280" }}
                axisLine={{ stroke: "#e5e7eb" }}
                tickLine={{ stroke: "#e5e7eb" }}
              />
              <Tooltip contentStyle={customTooltipStyle} />
              <Area
                type="monotone"
                dataKey="engagement"
                stroke="#10B981"
                fill="#10B981"
                fillOpacity={0.2}
                strokeWidth={3}
                dot={{ fill: "#10B981", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: "#10B981", strokeWidth: 2, fill: "white" }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ModernChartContainer>
      </div>

      {/* Second row */}
      <div className="grid gap-6 md:grid-cols-2">
        <ModernChartContainer title="Total Social Reach Timeline" tooltip="Overall social reach trend over time">
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={totalSocialReachTimeline} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <XAxis
                dataKey="date"
                tick={{ fontSize: 12, fill: "#6b7280" }}
                axisLine={{ stroke: "#e5e7eb" }}
                tickLine={{ stroke: "#e5e7eb" }}
              />
              <YAxis
                tick={{ fontSize: 12, fill: "#6b7280" }}
                axisLine={{ stroke: "#e5e7eb" }}
                tickLine={{ stroke: "#e5e7eb" }}
              />
              <Tooltip contentStyle={customTooltipStyle} />
              <Area
                type="monotone"
                dataKey="reach"
                stroke="#F59E0B"
                fill="#F59E0B"
                fillOpacity={0.2}
                strokeWidth={3}
                dot={{ fill: "#F59E0B", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: "#F59E0B", strokeWidth: 2, fill: "white" }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ModernChartContainer>

        <ModernChartContainer
          title="Channel-wise Mentions Timeline"
          tooltip="Mentions trend by social media channel"
          legend={<ChartLegend items={channelLegend} />}
        >
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={channelMentionsTimeline} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <XAxis
                dataKey="date"
                tick={{ fontSize: 12, fill: "#6b7280" }}
                axisLine={{ stroke: "#e5e7eb" }}
                tickLine={{ stroke: "#e5e7eb" }}
              />
              <YAxis
                tick={{ fontSize: 12, fill: "#6b7280" }}
                axisLine={{ stroke: "#e5e7eb" }}
                tickLine={{ stroke: "#e5e7eb" }}
              />
              <Tooltip contentStyle={customTooltipStyle} />
              <Area type="monotone" dataKey="Twitter" stackId="1" stroke="#1DA1F2" fill="#1DA1F2" fillOpacity={0.8} />
              <Area type="monotone" dataKey="Facebook" stackId="1" stroke="#4267B2" fill="#4267B2" fillOpacity={0.8} />
              <Area type="monotone" dataKey="Instagram" stackId="1" stroke="#E1306C" fill="#E1306C" fillOpacity={0.8} />
              <Area type="monotone" dataKey="YouTube" stackId="1" stroke="#FF0000" fill="#FF0000" fillOpacity={0.8} />
              <Area type="monotone" dataKey="LinkedIn" stackId="1" stroke="#0077B5" fill="#0077B5" fillOpacity={0.8} />
            </AreaChart>
          </ResponsiveContainer>
        </ModernChartContainer>
      </div>

      {/* Third row */}
      <div className="grid gap-6 md:grid-cols-2">
        <ModernChartContainer
          title="Channel-wise Engagement Timeline"
          tooltip="Engagement trend by social media channel"
          legend={<ChartLegend items={channelLegend} />}
        >
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={channelEngagementTimeline} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <XAxis
                dataKey="date"
                tick={{ fontSize: 12, fill: "#6b7280" }}
                axisLine={{ stroke: "#e5e7eb" }}
                tickLine={{ stroke: "#e5e7eb" }}
              />
              <YAxis
                tick={{ fontSize: 12, fill: "#6b7280" }}
                axisLine={{ stroke: "#e5e7eb" }}
                tickLine={{ stroke: "#e5e7eb" }}
              />
              <Tooltip contentStyle={customTooltipStyle} />
              <Area type="monotone" dataKey="Twitter" stackId="1" stroke="#1DA1F2" fill="#1DA1F2" fillOpacity={0.8} />
              <Area type="monotone" dataKey="Facebook" stackId="1" stroke="#4267B2" fill="#4267B2" fillOpacity={0.8} />
              <Area type="monotone" dataKey="Instagram" stackId="1" stroke="#E1306C" fill="#E1306C" fillOpacity={0.8} />
              <Area type="monotone" dataKey="YouTube" stackId="1" stroke="#FF0000" fill="#FF0000" fillOpacity={0.8} />
              <Area type="monotone" dataKey="LinkedIn" stackId="1" stroke="#0077B5" fill="#0077B5" fillOpacity={0.8} />
            </AreaChart>
          </ResponsiveContainer>
        </ModernChartContainer>

        <ModernChartContainer
          title="Channel-wise Social Reach Timeline"
          tooltip="Social reach trend by channel (excludes Web events)"
          legend={<ChartLegend items={channelLegend.slice(0, 4)} />}
        >
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={channelSocialReachTimeline} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <XAxis
                dataKey="date"
                tick={{ fontSize: 12, fill: "#6b7280" }}
                axisLine={{ stroke: "#e5e7eb" }}
                tickLine={{ stroke: "#e5e7eb" }}
              />
              <YAxis
                tick={{ fontSize: 12, fill: "#6b7280" }}
                axisLine={{ stroke: "#e5e7eb" }}
                tickLine={{ stroke: "#e5e7eb" }}
              />
              <Tooltip contentStyle={customTooltipStyle} />
              <Area type="monotone" dataKey="Twitter" stackId="1" stroke="#1DA1F2" fill="#1DA1F2" fillOpacity={0.8} />
              <Area type="monotone" dataKey="Facebook" stackId="1" stroke="#4267B2" fill="#4267B2" fillOpacity={0.8} />
              <Area type="monotone" dataKey="Instagram" stackId="1" stroke="#E1306C" fill="#E1306C" fillOpacity={0.8} />
              <Area type="monotone" dataKey="YouTube" stackId="1" stroke="#FF0000" fill="#FF0000" fillOpacity={0.8} />
            </AreaChart>
          </ResponsiveContainer>
        </ModernChartContainer>
      </div>
    </div>
  )
}
