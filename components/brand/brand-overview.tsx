"use client"

import { useState } from "react"
import { Activity, Heart, Eye, MessageCircle, Users, TrendingUp, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionHeader from "@/components/section-header"
import ModernChartContainer from "@/components/modern-chart-container"
import ChartLegend from "@/components/chart-legend"
import MetricsCard from "@/components/metrics-card"
import InfluencerCard from "@/components/influencer-card"
import SocialFeedItem from "@/components/social-feed-item"
import WordCloudComponent from "@/components/word-cloud-component"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
  LabelList,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
} from "recharts"

interface BrandOverviewPageProps {
  timeRange: "hour" | "day" | "week" | "month" | "year"
}

export default function BrandOverviewPage({ timeRange }: BrandOverviewPageProps) {
  // Chart type states
  const [mentionsChannelChartType, setMentionsChannelChartType] = useState<"bar" | "pie">("pie")
  const [engagementChannelChartType, setEngagementChannelChartType] = useState<"bar" | "pie">("pie")
  const [reachChannelChartType, setReachChannelChartType] = useState<"bar" | "pie">("pie")
  const [sentimentChartType, setSentimentChartType] = useState<"bar" | "pie">("pie")
  const [emotionChartType, setEmotionChartType] = useState<"bar" | "pie">("pie")
  const [ageGroupChartType, setAgeGroupChartType] = useState<"bar" | "pie">("bar")
  const [genderChartType, setGenderChartType] = useState<"bar" | "pie">("pie")
  const [wordCloudFilter, setWordCloudFilter] = useState<"all" | "positive" | "negative" | "neutral">("all")
  const [topicChartType, setTopicChartType] = useState<"bar" | "pie">("bar")

  // Data from existing files - matching brand-overview.tsx
  const mentionsTrendData = [
    { date: "Jan", Twitter: 850, Facebook: 520, Instagram: 320, YouTube: 80, LinkedIn: 80 },
    { date: "Feb", Twitter: 980, Facebook: 620, Instagram: 380, YouTube: 90, LinkedIn: 30 },
    { date: "Mar", Twitter: 1150, Facebook: 740, Instagram: 420, YouTube: 100, LinkedIn: 40 },
    { date: "Apr", Twitter: 1020, Facebook: 680, Instagram: 380, YouTube: 90, LinkedIn: 30 },
    { date: "May", Twitter: 1300, Facebook: 820, Instagram: 480, YouTube: 120, LinkedIn: 80 },
    { date: "Jun", Twitter: 1220, Facebook: 780, Instagram: 450, YouTube: 120, LinkedIn: 80 },
  ]

  const engagementTrendData = [
    { date: "Jan", Twitter: 8500, Facebook: 4200, Instagram: 2100, YouTube: 450, LinkedIn: 250 },
    { date: "Feb", Twitter: 9800, Facebook: 5200, Instagram: 2400, YouTube: 320, LinkedIn: 80 },
    { date: "Mar", Twitter: 11500, Facebook: 6100, Instagram: 2800, YouTube: 520, LinkedIn: 180 },
    { date: "Apr", Twitter: 10200, Facebook: 5800, Instagram: 2600, YouTube: 780, LinkedIn: 220 },
    { date: "May", Twitter: 13000, Facebook: 7200, Instagram: 3200, YouTube: 820, LinkedIn: 280 },
    { date: "Jun", Twitter: 12200, Facebook: 6800, Instagram: 2900, YouTube: 980, LinkedIn: 220 },
  ]

  const socialReachTrendData = [
    { date: "Jan", reach: 1800000 },
    { date: "Feb", reach: 2100000 },
    { date: "Mar", reach: 2450000 },
    { date: "Apr", reach: 2200000 },
    { date: "May", reach: 2800000 },
    { date: "Jun", reach: 2650000 },
  ]

  // Channel-wise data matching brand-overview.tsx
  const channelSocialReachTimeline = [
    { date: "Jan", Twitter: 850000, Facebook: 620000, Instagram: 280000, YouTube: 50000 },
    { date: "Feb", Twitter: 980000, Facebook: 720000, Instagram: 320000, YouTube: 80000 },
    { date: "Mar", Twitter: 1150000, Facebook: 840000, Instagram: 380000, YouTube: 80000 },
    { date: "Apr", Twitter: 1020000, Facebook: 760000, Instagram: 340000, YouTube: 80000 },
    { date: "May", Twitter: 1300000, Facebook: 960000, Instagram: 440000, YouTube: 100000 },
    { date: "Jun", Twitter: 1220000, Facebook: 900000, Instagram: 410000, YouTube: 120000 },
  ]

  // Top Channel Data
  const topMentionsChannelData = [
    { channel: "Twitter", mentions: 1220, fill: "#1DA1F2" },
    { channel: "Facebook", mentions: 600, fill: "#4267B2" },
    { channel: "Instagram", mentions: 580, fill: "#E1306C" },
    { channel: "YouTube", mentions: 170, fill: "#FF0000" },
    { channel: "LinkedIn", mentions: 80, fill: "#0077B5" },
  ]

  const topEngagementChannelData = [
    { channel: "Twitter", engagement: 10600, fill: "#1DA1F2" },
    { channel: "Facebook", engagement: 7200, fill: "#4267B2" },
    { channel: "Instagram", engagement: 3800, fill: "#E1306C" },
    { channel: "YouTube", engagement: 1300, fill: "#FF0000" },
    { channel: "LinkedIn", engagement: 200, fill: "#0077B5" },
  ]

  const topReachChannelData = [
    { channel: "Twitter", reach: 1220000, fill: "#1DA1F2" },
    { channel: "Facebook", reach: 900000, fill: "#4267B2" },
    { channel: "Instagram", reach: 410000, fill: "#E1306C" },
    { channel: "YouTube", reach: 120000, fill: "#FF0000" },
  ]

  // Sentiment data matching brand-sentiment-topics.tsx
  const sentimentTrendData = [
    { date: "Jan", positive: 60, neutral: 30, negative: 10 },
    { date: "Feb", positive: 62, neutral: 28, negative: 10 },
    { date: "Mar", positive: 65, neutral: 25, negative: 10 },
    { date: "Apr", positive: 63, neutral: 27, negative: 10 },
    { date: "May", positive: 67, neutral: 23, negative: 10 },
    { date: "Jun", positive: 65, neutral: 25, negative: 10 },
  ]

  const topSentimentData = [
    { name: "Positive", value: 65, fill: "#10B981" },
    { name: "Neutral", value: 25, fill: "#F59E0B" },
    { name: "Negative", value: 10, fill: "#EF4444" },
  ]

  // Emotion data
  const emotionTrendData = [
    { date: "Jan", joy: 35, trust: 25, anticipation: 20, surprise: 10, fear: 5, sadness: 3, anger: 2 },
    { date: "Feb", joy: 38, trust: 27, anticipation: 18, surprise: 9, fear: 4, sadness: 2, anger: 2 },
    { date: "Mar", joy: 40, trust: 28, anticipation: 17, surprise: 8, fear: 4, sadness: 2, anger: 1 },
    { date: "Apr", joy: 37, trust: 26, anticipation: 19, surprise: 10, fear: 4, sadness: 2, anger: 2 },
    { date: "May", joy: 42, trust: 30, anticipation: 15, surprise: 7, fear: 3, sadness: 2, anger: 1 },
    { date: "Jun", joy: 40, trust: 28, anticipation: 17, surprise: 8, fear: 4, sadness: 2, anger: 1 },
  ]

  const topEmotionData = [
    { emotion: "Joy", value: 40, fill: "#10B981" },
    { emotion: "Trust", value: 28, fill: "#34D399" },
    { emotion: "Anticipation", value: 17, fill: "#6EE7B7" },
    { emotion: "Surprise", value: 8, fill: "#3B82F6" },
    { emotion: "Fear", value: 4, fill: "#8B5CF6" },
    { emotion: "Sadness", value: 2, fill: "#EF4444" },
    { emotion: "Anger", value: 1, fill: "#F59E0B" },
  ]

  // Gender data
  const genderTrendData = [
    { date: "Jan", Male: 48, Female: 52 },
    { date: "Feb", Male: 47, Female: 53 },
    { date: "Mar", Male: 46, Female: 54 },
    { date: "Apr", Male: 48, Female: 52 },
    { date: "May", Male: 45, Female: 55 },
    { date: "Jun", Male: 47, Female: 53 },
  ]

  const topGenderData = [
    { gender: "Female", value: 53, fill: "#E91E63" },
    { gender: "Male", value: 47, fill: "#3B82F6" },
  ]

  // Age Group data
  const ageGroupTrendData = [
    { date: "Jan", "18-24": 25, "25-34": 35, "35-44": 20, "45-54": 12, "55+": 8 },
    { date: "Feb", "18-24": 27, "25-34": 33, "35-44": 22, "45-54": 11, "55+": 7 },
    { date: "Mar", "18-24": 30, "25-34": 32, "35-44": 21, "45-54": 10, "55+": 7 },
    { date: "Apr", "18-24": 28, "25-34": 34, "35-44": 20, "45-54": 11, "55+": 7 },
    { date: "May", "18-24": 32, "25-34": 31, "35-44": 19, "45-54": 11, "55+": 7 },
    { date: "Jun", "18-24": 30, "25-34": 32, "35-44": 20, "45-54": 11, "55+": 7 },
  ]

  const topAgeGroupData = [
    { ageGroup: "25-34", value: 32, fill: "#3B82F6" },
    { ageGroup: "18-24", value: 30, fill: "#10B981" },
    { ageGroup: "35-44", value: 20, fill: "#F59E0B" },
    { ageGroup: "45-54", value: 11, fill: "#8B5CF6" },
    { ageGroup: "55+", value: 7, fill: "#EF4444" },
  ]

  // Bubble chart data matching brand-time-analysis.tsx
  const timeOfDayData = [
    { hour: 9, day: 0, mentions: 45, engagement: 520, reach: 25000, sentiment: 75, dayName: "Monday" },
    { hour: 12, day: 0, mentions: 78, engagement: 890, reach: 42000, sentiment: 80, dayName: "Monday" },
    { hour: 15, day: 0, mentions: 65, engagement: 720, reach: 37000, sentiment: 70, dayName: "Monday" },
    { hour: 18, day: 0, mentions: 52, engagement: 580, reach: 31000, sentiment: 65, dayName: "Monday" },
    { hour: 9, day: 1, mentions: 52, engagement: 580, reach: 28000, sentiment: 72, dayName: "Tuesday" },
    { hour: 12, day: 1, mentions: 85, engagement: 980, reach: 45000, sentiment: 82, dayName: "Tuesday" },
    { hour: 15, day: 1, mentions: 72, engagement: 820, reach: 40000, sentiment: 75, dayName: "Tuesday" },
    { hour: 18, day: 1, mentions: 58, engagement: 650, reach: 34000, sentiment: 68, dayName: "Tuesday" },
    { hour: 9, day: 2, mentions: 68, engagement: 720, reach: 32000, sentiment: 78, dayName: "Wednesday" },
    { hour: 12, day: 2, mentions: 95, engagement: 1180, reach: 48000, sentiment: 85, dayName: "Wednesday" },
    { hour: 15, day: 2, mentions: 82, engagement: 980, reach: 43000, sentiment: 80, dayName: "Wednesday" },
    { hour: 18, day: 2, mentions: 65, engagement: 780, reach: 37000, sentiment: 72, dayName: "Wednesday" },
  ]

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  // Topic Insights Data matching brand-sentiment-topics.tsx
  const topicInsightsData = [
    { topic: "Product Features", positive: 120, negative: 30, neutral: 50, total: 200 },
    { topic: "Customer Support", positive: 80, negative: 70, neutral: 40, total: 190 },
    { topic: "User Experience", positive: 90, negative: 40, neutral: 35, total: 165 },
    { topic: "Brand Image", positive: 110, negative: 25, neutral: 45, total: 180 },
    { topic: "Pricing", positive: 50, negative: 100, neutral: 30, total: 180 },
  ]

  // Top Topics Data
  const topTopicsData = [
    { topic: "Product Features", mentions: 450, sentiment: 85 },
    { topic: "Customer Support", mentions: 320, sentiment: 65 },
    { topic: "User Experience", mentions: 280, sentiment: 78 },
    { topic: "Brand Image", mentions: 240, sentiment: 82 },
    { topic: "Pricing", mentions: 180, sentiment: 45 },
    { topic: "Innovation", mentions: 160, sentiment: 88 },
  ]

  // Competitor data
  const competitorData = [
    { competitor: "Your Brand", mentions: 2650, sentiment: 78, engagement: 23100, shareOfVoice: 42.1 },
    { competitor: "Competitor A", mentions: 1200, sentiment: 72, engagement: 8500, shareOfVoice: 28.5 },
    { competitor: "Competitor B", mentions: 980, sentiment: 68, engagement: 7200, shareOfVoice: 18.1 },
    { competitor: "Competitor C", mentions: 750, sentiment: 65, engagement: 5800, shareOfVoice: 11.3 },
  ]

  // Top Influencers Data
  const topInfluencersData = [
    {
      name: "Business Analyst David",
      username: "@bizanalyst",
      avatar: "/placeholder.svg",
      platform: "Web",
      followers: "95.0K",
      posts: 15,
      engagement: "5.8%",
      sentiment: "neutral" as const,
    },
    {
      name: "Tech Critic John",
      username: "@techcritic",
      avatar: "/placeholder.svg",
      platform: "Web",
      followers: "92.0K",
      posts: 14,
      engagement: "6.5%",
      sentiment: "negative" as const,
    },
    {
      name: "Innovation Expert Sarah",
      username: "@innovationsarah",
      avatar: "/placeholder.svg",
      platform: "Twitter",
      followers: "87.5K",
      posts: 22,
      engagement: "7.2%",
      sentiment: "positive" as const,
    },
    {
      name: "Product Reviewer Mike",
      username: "@productmike",
      avatar: "/placeholder.svg",
      platform: "YouTube",
      followers: "156K",
      posts: 8,
      engagement: "9.1%",
      sentiment: "positive" as const,
    },
  ]

  // Social Feed Data
  const socialFeedData = [
    {
      author: {
        name: "Michael Chen",
        username: "@michaelchen",
        avatar: "/placeholder.svg",
      },
      platform: "Web",
      content:
        "Had some issues with the latest update. The app keeps crashing and it's really frustrating. Hope they fix this soon.",
      timestamp: "5 hours ago",
      sentiment: "negative" as const,
      engagement: { likes: 23, comments: 28, shares: 5 },
    },
    {
      author: {
        name: "Emma Wilson",
        username: "@emmawilson",
        avatar: "/placeholder.svg",
      },
      platform: "Web",
      content:
        "Absolutely love the customer service! They responded within minutes and solved my problem immediately. This is how you do business right!",
      timestamp: "3 hours ago",
      sentiment: "positive" as const,
      engagement: { likes: 89, comments: 24, shares: 18 },
    },
    {
      author: {
        name: "David Rodriguez",
        username: "@davidr",
        avatar: "/placeholder.svg",
      },
      platform: "Twitter",
      content:
        "The new features are interesting but still evaluating if they're worth the upgrade cost. Mixed feelings so far.",
      timestamp: "1 hour ago",
      sentiment: "neutral" as const,
      engagement: { likes: 45, comments: 12, shares: 8 },
    },
  ]

  // Current metrics matching brand-overview.tsx
  const currentMetrics = {
    totalMentions: 2650,
    totalEngagement: 23100,
    totalSocialReach: "2.65M",
    sentimentScore: 7.8,
  }

  // Legend configurations
  const channelLegend = [
    { color: "#1DA1F2", label: "Twitter" },
    { color: "#4267B2", label: "Facebook" },
    { color: "#E1306C", label: "Instagram" },
    { color: "#FF0000", label: "YouTube" },
    { color: "#0077B5", label: "LinkedIn" },
  ]

  const sentimentLegend = [
    { color: "#10B981", label: "Positive" },
    { color: "#F59E0B", label: "Neutral" },
    { color: "#EF4444", label: "Negative" },
  ]

  const emotionLegend = [
    { color: "#10B981", label: "Joy" },
    { color: "#34D399", label: "Trust" },
    { color: "#6EE7B7", label: "Anticipation" },
    { color: "#3B82F6", label: "Surprise" },
    { color: "#8B5CF6", label: "Fear" },
    { color: "#EF4444", label: "Sadness" },
    { color: "#F59E0B", label: "Anger" },
  ]

  const genderLegend = [
    { color: "#E91E63", label: "Female" },
    { color: "#3B82F6", label: "Male" },
  ]

  const ageGroupLegend = [
    { color: "#3B82F6", label: "25-34" },
    { color: "#10B981", label: "18-24" },
    { color: "#F59E0B", label: "35-44" },
    { color: "#8B5CF6", label: "45-54" },
    { color: "#EF4444", label: "55+" },
  ]

  const customTooltipStyle = {
    backgroundColor: "white",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
    padding: "12px",
  }

  const BubbleTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="rounded-lg border bg-white p-4 shadow-lg border-gray-200">
          <div className="font-semibold text-gray-900 mb-2">{`${data.dayName} at ${data.hour}:00`}</div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-sm text-gray-700">
                Mentions: <span className="font-medium">{data.mentions}</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-700">
                Engagement: <span className="font-medium">{data.engagement.toLocaleString()}</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-pink-500"></div>
              <span className="text-sm text-gray-700">
                Reach: <span className="font-medium">{data.reach.toLocaleString()}</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <span className="text-sm text-gray-700">
                Sentiment: <span className="font-medium">{data.sentiment}%</span>
              </span>
            </div>
          </div>
          <div className="text-xs text-gray-500 mt-2">Bubble size represents volume</div>
        </div>
      )
    }
    return null
  }

  // Replace the Sentiment Analysis section with Topics
  const topTopicsAnalysis = [
    { topic: "Product Features", mentions: 450, sentiment: 85, trend: "+12%" },
    { topic: "Customer Support", mentions: 320, sentiment: 65, trend: "-5%" },
    { topic: "User Experience", mentions: 280, sentiment: 78, trend: "+8%" },
    { topic: "Brand Image", mentions: 240, sentiment: 82, trend: "+15%" },
    { topic: "Pricing", mentions: 180, sentiment: 45, trend: "-18%" },
    { topic: "Innovation", mentions: 160, sentiment: 88, trend: "+22%" },
  ]

  // Update button styling throughout the component
  const buttonClass = "bg-[#017ABF] hover:bg-[#015a8f] text-white"

  return (
    <div className="space-y-8">
      <SectionHeader
        title="Brand Overview"
        description="Get an overview of your brand's social listening metrics"
        icon={<Activity className="h-5 w-5" />}
      />

      {/* Key Metrics - matching brand-overview.tsx exactly */}
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
          icon={<Brain className="h-4 w-4" />}
          trend={0.8}
          color="#8B5CF6"
        />
      </div>

      {/* Social Media Analytics */}
      <SectionHeader title="Social Media Analytics" description="" icon={<TrendingUp className="h-5 w-5" />} />

      {/* Mentions Trend & Top Channel */}
      <div className="grid gap-6 md:grid-cols-2">
        <ModernChartContainer title="Mentions Trend" tooltip="Daily mentions across all social media channels">
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={mentionsTrendData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
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
          <div className="flex justify-center mt-4">
            <ChartLegend items={channelLegend} />
          </div>
        </ModernChartContainer>

        <ModernChartContainer title="Top Channel" tooltip="Channel distribution for mentions">
          <div className="space-y-4">
            <div className="flex gap-2">
              <Button
                variant={mentionsChannelChartType === "bar" ? "default" : "outline"}
                size="sm"
                onClick={() => setMentionsChannelChartType("bar")}
                className={mentionsChannelChartType === "bar" ? buttonClass : ""}
              >
                Bar Chart
              </Button>
              <Button
                variant={mentionsChannelChartType === "pie" ? "default" : "outline"}
                size="sm"
                onClick={() => setMentionsChannelChartType("pie")}
                className={mentionsChannelChartType === "pie" ? buttonClass : ""}
              >
                Pie Chart
              </Button>
            </div>
            <ResponsiveContainer width="100%" height={240}>
              {mentionsChannelChartType === "bar" ? (
                <BarChart data={topMentionsChannelData} margin={{ left: 20, right: 20, top: 20, bottom: 60 }}>
                  <XAxis
                    dataKey="channel"
                    tick={{ fontSize: 10, fill: "#6b7280" }}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                    interval={0}
                  />
                  <YAxis tick={{ fontSize: 12, fill: "#6b7280" }} />
                  <Tooltip contentStyle={customTooltipStyle} />
                  <Bar dataKey="mentions" fill="#017ABF" radius={[4, 4, 0, 0]}>
                    <LabelList dataKey="mentions" position="top" fontSize={10} />
                    {topMentionsChannelData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              ) : (
                <PieChart>
                  <Pie
                    data={topMentionsChannelData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={2}
                    dataKey="mentions"
                    stroke="white"
                    strokeWidth={2}
                    label={({ channel, percent }) => `${channel}: ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {topMentionsChannelData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={customTooltipStyle} />
                </PieChart>
              )}
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center mt-4">
            <ChartLegend items={channelLegend} />
          </div>
        </ModernChartContainer>
      </div>

      {/* Engagement Trend & Top Channel */}
      <div className="grid gap-6 md:grid-cols-2">
        <ModernChartContainer title="Engagement Trend" tooltip="Daily engagement across all social media channels">
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={engagementTrendData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
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
          <div className="flex justify-center mt-4">
            <ChartLegend items={channelLegend} />
          </div>
        </ModernChartContainer>

        <ModernChartContainer title="Top Channel" tooltip="Channel distribution for engagement">
          <div className="space-y-4">
            <div className="flex gap-2">
              <Button
                variant={engagementChannelChartType === "bar" ? "default" : "outline"}
                size="sm"
                onClick={() => setEngagementChannelChartType("bar")}
                className={engagementChannelChartType === "bar" ? buttonClass : ""}
              >
                Bar Chart
              </Button>
              <Button
                variant={engagementChannelChartType === "pie" ? "default" : "outline"}
                size="sm"
                onClick={() => setEngagementChannelChartType("pie")}
                className={engagementChannelChartType === "pie" ? buttonClass : ""}
              >
                Pie Chart
              </Button>
            </div>
            <ResponsiveContainer width="100%" height={240}>
              {engagementChannelChartType === "bar" ? (
                <BarChart data={topEngagementChannelData} margin={{ left: 20, right: 20, top: 20, bottom: 60 }}>
                  <XAxis
                    dataKey="channel"
                    tick={{ fontSize: 10, fill: "#6b7280" }}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                    interval={0}
                  />
                  <YAxis tick={{ fontSize: 12, fill: "#6b7280" }} />
                  <Tooltip
                    contentStyle={customTooltipStyle}
                    formatter={(value: number) => [value.toLocaleString(), "Engagement"]}
                  />
                  <Bar dataKey="engagement" fill="#017ABF" radius={[4, 4, 0, 0]}>
                    <LabelList
                      dataKey="engagement"
                      position="top"
                      formatter={(value: number) => value.toLocaleString()}
                      fontSize={10}
                    />
                    {topEngagementChannelData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              ) : (
                <PieChart>
                  <Pie
                    data={topEngagementChannelData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={2}
                    dataKey="engagement"
                    stroke="white"
                    strokeWidth={2}
                    label={({ channel, percent }) => `${channel}: ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {topEngagementChannelData.map((entry, index) => (
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
          <div className="flex justify-center mt-4">
            <ChartLegend items={channelLegend} />
          </div>
        </ModernChartContainer>
      </div>

      {/* Social Reach Trend & Top Channel */}
      <div className="grid gap-6 md:grid-cols-2">
        <ModernChartContainer title="Social Reach Trend" tooltip="Daily reach across all social media channels">
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
          <div className="flex justify-center mt-4">
            <ChartLegend items={channelLegend.slice(0, 4)} />
          </div>
        </ModernChartContainer>

        <ModernChartContainer title="Top Channel" tooltip="Channel distribution for social reach">
          <div className="space-y-4">
            <div className="flex gap-2">
              <Button
                variant={reachChannelChartType === "bar" ? "default" : "outline"}
                size="sm"
                onClick={() => setReachChannelChartType("bar")}
                className={reachChannelChartType === "bar" ? buttonClass : ""}
              >
                Bar Chart
              </Button>
              <Button
                variant={reachChannelChartType === "pie" ? "default" : "outline"}
                size="sm"
                onClick={() => setReachChannelChartType("pie")}
                className={reachChannelChartType === "pie" ? buttonClass : ""}
              >
                Pie Chart
              </Button>
            </div>
            <ResponsiveContainer width="100%" height={240}>
              {reachChannelChartType === "bar" ? (
                <BarChart data={topReachChannelData} margin={{ left: 20, right: 20, top: 20, bottom: 60 }}>
                  <XAxis
                    dataKey="channel"
                    tick={{ fontSize: 10, fill: "#6b7280" }}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                    interval={0}
                  />
                  <YAxis tick={{ fontSize: 12, fill: "#6b7280" }} />
                  <Tooltip
                    contentStyle={customTooltipStyle}
                    formatter={(value: number) => [value.toLocaleString(), "Reach"]}
                  />
                  <Bar dataKey="reach" fill="#017ABF" radius={[4, 4, 0, 0]}>
                    <LabelList
                      dataKey="reach"
                      position="top"
                      formatter={(value: number) => value.toLocaleString()}
                      fontSize={10}
                    />
                    {topReachChannelData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              ) : (
                <PieChart>
                  <Pie
                    data={topReachChannelData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={2}
                    dataKey="reach"
                    stroke="white"
                    strokeWidth={2}
                    label={({ channel, percent }) => `${channel}: ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {topReachChannelData.map((entry, index) => (
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
          <div className="flex justify-center mt-4">
            <ChartLegend items={channelLegend.slice(0, 4)} />
          </div>
        </ModernChartContainer>
      </div>

      {/* Sentiment Analysis */}
      <SectionHeader title="Sentiment Analysis" description="" icon={<Brain className="h-5 w-5" />} />

      {/* Sentiment Trend & Top Sentiment */}
      <div className="grid gap-6 md:grid-cols-2">
        <ModernChartContainer title="Sentiment Trend" tooltip="Daily sentiment analysis across all channels">
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={sentimentTrendData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
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
              <Area type="monotone" dataKey="positive" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.8} />
              <Area type="monotone" dataKey="neutral" stackId="1" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.8} />
              <Area type="monotone" dataKey="negative" stackId="1" stroke="#EF4444" fill="#EF4444" fillOpacity={0.8} />
            </AreaChart>
          </ResponsiveContainer>
          <div className="flex justify-center mt-4">
            <ChartLegend items={sentimentLegend} />
          </div>
        </ModernChartContainer>

        <ModernChartContainer title="Top Sentiment" tooltip="Overall sentiment distribution">
          <div className="space-y-4">
            <div className="flex gap-2">
              <Button
                variant={sentimentChartType === "pie" ? "default" : "outline"}
                size="sm"
                onClick={() => setSentimentChartType("pie")}
                className={sentimentChartType === "pie" ? buttonClass : ""}
              >
                Pie Chart
              </Button>
              <Button
                variant={sentimentChartType === "bar" ? "default" : "outline"}
                size="sm"
                onClick={() => setSentimentChartType("bar")}
                className={sentimentChartType === "bar" ? buttonClass : ""}
              >
                Bar Chart
              </Button>
            </div>
            <ResponsiveContainer width="100%" height={240}>
              {sentimentChartType === "pie" ? (
                <PieChart>
                  <Pie
                    data={topSentimentData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={2}
                    dataKey="value"
                    stroke="white"
                    strokeWidth={2}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {topSentimentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={customTooltipStyle}
                    formatter={(value: number) => [`${value}%`, "Percentage"]}
                  />
                </PieChart>
              ) : (
                <BarChart data={topSentimentData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#6b7280" }} />
                  <YAxis tick={{ fontSize: 12, fill: "#6b7280" }} />
                  <Tooltip contentStyle={customTooltipStyle} />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    <LabelList dataKey="value" position="top" formatter={(value: number) => `${value}%`} />
                    {topSentimentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center mt-4">
            <ChartLegend items={sentimentLegend} />
          </div>
        </ModernChartContainer>
      </div>

      {/* Emotion Analysis */}
      <SectionHeader title="Emotion Analysis" description="" icon={<Heart className="h-5 w-5" />} />

      {/* Emotion Trend & Top Emotion */}
      <div className="grid gap-6 md:grid-cols-2">
        <ModernChartContainer title="Emotion Trend" tooltip="Daily emotion analysis across all channels">
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={emotionTrendData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
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
              <Area type="monotone" dataKey="joy" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.8} />
              <Area type="monotone" dataKey="trust" stackId="1" stroke="#34D399" fill="#34D399" fillOpacity={0.8} />
              <Area
                type="monotone"
                dataKey="anticipation"
                stackId="1"
                stroke="#6EE7B7"
                fill="#6EE7B7"
                fillOpacity={0.8}
              />
              <Area type="monotone" dataKey="surprise" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.8} />
              <Area type="monotone" dataKey="fear" stackId="1" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.8} />
            </AreaChart>
          </ResponsiveContainer>
          <div className="flex justify-center mt-4">
            <ChartLegend items={emotionLegend} />
          </div>
        </ModernChartContainer>

        <ModernChartContainer title="Top Emotion" tooltip="Emotion distribution analysis">
          <div className="space-y-4">
            <div className="flex gap-2">
              <Button
                variant={emotionChartType === "pie" ? "default" : "outline"}
                size="sm"
                onClick={() => setEmotionChartType("pie")}
                className={emotionChartType === "pie" ? buttonClass : ""}
              >
                Pie Chart
              </Button>
              <Button
                variant={emotionChartType === "bar" ? "default" : "outline"}
                size="sm"
                onClick={() => setEmotionChartType("bar")}
                className={emotionChartType === "bar" ? buttonClass : ""}
              >
                Bar Chart
              </Button>
            </div>
            <ResponsiveContainer width="100%" height={240}>
              {emotionChartType === "pie" ? (
                <PieChart>
                  <Pie
                    data={topEmotionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={2}
                    dataKey="value"
                    stroke="white"
                    strokeWidth={2}
                    label={({ emotion, percent }) => `${emotion}: ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {topEmotionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={customTooltipStyle}
                    formatter={(value: number) => [`${value}%`, "Percentage"]}
                  />
                </PieChart>
              ) : (
                <BarChart data={topEmotionData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                  <XAxis
                    dataKey="emotion"
                    tick={{ fontSize: 11, fill: "#6b7280" }}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis tick={{ fontSize: 12, fill: "#6b7280" }} />
                  <Tooltip contentStyle={customTooltipStyle} />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    <LabelList dataKey="value" position="top" formatter={(value: number) => `${value}%`} />
                    {topEmotionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center mt-4">
            <ChartLegend items={emotionLegend} />
          </div>
        </ModernChartContainer>
      </div>

      {/* Gender Analysis */}
      <SectionHeader title="Gender Analysis" description="" icon={<Users className="h-5 w-5" />} />

      {/* Gender Trend & Top Gender */}
      <div className="grid gap-6 md:grid-cols-2">
        <ModernChartContainer title="Gender Trend" tooltip="Daily gender breakdown across all channels">
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={genderTrendData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
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
              <Area type="monotone" dataKey="Female" stackId="1" stroke="#E91E63" fill="#E91E63" fillOpacity={0.8} />
              <Area type="monotone" dataKey="Male" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.8} />
            </AreaChart>
          </ResponsiveContainer>
          <div className="flex justify-center mt-4">
            <ChartLegend items={genderLegend} />
          </div>
        </ModernChartContainer>

        <ModernChartContainer title="Top Gender" tooltip="Gender distribution">
          <div className="space-y-4">
            <div className="flex gap-2">
              <Button
                variant={genderChartType === "pie" ? "default" : "outline"}
                size="sm"
                onClick={() => setGenderChartType("pie")}
                className={genderChartType === "pie" ? buttonClass : ""}
              >
                Pie Chart
              </Button>
              <Button
                variant={genderChartType === "bar" ? "default" : "outline"}
                size="sm"
                onClick={() => setGenderChartType("bar")}
                className={genderChartType === "bar" ? buttonClass : ""}
              >
                Bar Chart
              </Button>
            </div>
            <ResponsiveContainer width="100%" height={240}>
              {genderChartType === "pie" ? (
                <PieChart>
                  <Pie
                    data={topGenderData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={2}
                    dataKey="value"
                    stroke="white"
                    strokeWidth={2}
                    label={({ gender, percent }) => `${gender}: ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {topGenderData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={customTooltipStyle} />
                </PieChart>
              ) : (
                <BarChart data={topGenderData} margin={{ bottom: 40 }}>
                  <XAxis dataKey="gender" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 12, fill: "#6b7280" }} />
                  <Tooltip contentStyle={customTooltipStyle} />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    <LabelList dataKey="value" position="top" fontSize={10} />
                    {topGenderData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center mt-4">
            <ChartLegend items={genderLegend} />
          </div>
        </ModernChartContainer>
      </div>

      {/* Age Analysis */}
      <SectionHeader title="Age Analysis" description="" icon={<Users className="h-5 w-5" />} />

      {/* Age Group Trend & Top Age Group */}
      <div className="grid gap-6 md:grid-cols-2">
        <ModernChartContainer title="Age Group Trend" tooltip="Daily age group breakdown across all channels">
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={ageGroupTrendData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
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
              <Area type="monotone" dataKey="25-34" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.8} />
              <Area type="monotone" dataKey="18-24" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.8} />
              <Area type="monotone" dataKey="35-44" stackId="1" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.8} />
              <Area type="monotone" dataKey="45-54" stackId="1" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.8} />
              <Area type="monotone" dataKey="55+" stroke="#EF4444" fill="#EF4444" fillOpacity={0.8} />
            </AreaChart>
          </ResponsiveContainer>
          <div className="flex justify-center mt-4">
            <ChartLegend items={ageGroupLegend} />
          </div>
        </ModernChartContainer>

        <ModernChartContainer title="Top Age Group" tooltip="Age group distribution">
          <div className="space-y-4">
            <div className="flex gap-2">
              <Button
                variant={ageGroupChartType === "bar" ? "default" : "outline"}
                size="sm"
                onClick={() => setAgeGroupChartType("bar")}
                className={ageGroupChartType === "bar" ? buttonClass : ""}
              >
                Bar Chart
              </Button>
              <Button
                variant={ageGroupChartType === "pie" ? "default" : "outline"}
                size="sm"
                onClick={() => setAgeGroupChartType("pie")}
                className={ageGroupChartType === "pie" ? buttonClass : ""}
              >
                Pie Chart
              </Button>
            </div>
            <ResponsiveContainer width="100%" height={240}>
              {ageGroupChartType === "bar" ? (
                <BarChart data={topAgeGroupData} margin={{ bottom: 40 }}>
                  <XAxis dataKey="ageGroup" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 12, fill: "#6b7280" }} />
                  <Tooltip contentStyle={customTooltipStyle} />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    <LabelList dataKey="value" position="top" fontSize={10} />
                    {topAgeGroupData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              ) : (
                <PieChart>
                  <Pie
                    data={topAgeGroupData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={2}
                    dataKey="value"
                    stroke="white"
                    strokeWidth={2}
                    label={({ ageGroup, percent }) => `${ageGroup}: ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {topAgeGroupData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={customTooltipStyle} />
                </PieChart>
              )}
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center mt-4">
            <ChartLegend items={ageGroupLegend} />
          </div>
        </ModernChartContainer>
      </div>

      {/* Metrics by Time of Day - Interactive Bubble Chart */}
      <ModernChartContainer
        title="Metrics by Time of Day"
        tooltip="Interactive bubble chart showing brand performance throughout the day (Mentions/Engagement/Social Reach/Sentiments)"
      >
        <ResponsiveContainer width="100%" height={350}>
          <ScatterChart data={timeOfDayData} margin={{ top: 20, right: 30, left: 80, bottom: 20 }}>
            <XAxis
              type="number"
              dataKey="hour"
              domain={[8, 20]}
              tickCount={7}
              tickFormatter={(value) => `${value}:00`}
              tick={{ fontSize: 11, fill: "#6b7280" }}
              axisLine={{ stroke: "#e5e7eb", strokeWidth: 1 }}
              tickLine={{ stroke: "#e5e7eb" }}
              label={{
                value: "Hour of Day",
                position: "bottom",
                offset: -5,
                style: { textAnchor: "middle", fontSize: "12px", fill: "#6b7280" },
              }}
            />
            <YAxis
              type="number"
              dataKey="day"
              domain={[0, 2]}
              tickCount={3}
              tickFormatter={(value) => daysOfWeek[value] || ""}
              tick={{ fontSize: 11, fill: "#6b7280" }}
              axisLine={{ stroke: "#e5e7eb", strokeWidth: 1 }}
              tickLine={{ stroke: "#e5e7eb" }}
              width={70}
              label={{
                value: "Day of Week",
                angle: -90,
                position: "insideLeft",
                style: { textAnchor: "middle", fontSize: "12px", fill: "#6b7280" },
              }}
            />
            <ZAxis type="number" dataKey="mentions" range={[100, 800]} />
            <Tooltip content={<BubbleTooltip />} />
            <Scatter dataKey="mentions" fill="#017ABF" fillOpacity={0.8} stroke="#0056b3" strokeWidth={2} />
          </ScatterChart>
        </ResponsiveContainer>
      </ModernChartContainer>

      {/* Brand Analytics */}
      <SectionHeader title="Topic Analytics" description="" icon={<Activity className="h-5 w-5" />} />

      {/* Sentiment Analysis & Top Topics */}
      <div className="grid gap-6 md:grid-cols-2">
        <ModernChartContainer title="Topics Analysis" tooltip="Most discussed topics and their performance">
          <div className="space-y-4">
            {topTopicsAnalysis.map((topic, index) => (
              <div
                key={topic.topic}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
              >
                <div className="flex-1">
                  <div className="font-medium text-sm text-gray-900">{topic.topic}</div>
                  <div className="text-xs text-gray-500 mt-1">{topic.mentions} mentions</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-900">{topic.sentiment}%</div>
                    <div className="text-xs text-gray-500">Sentiment</div>
                  </div>
                  <div className="text-center">
                    <div
                      className={`text-sm font-medium ${topic.trend.startsWith("+") ? "text-green-600" : "text-red-600"}`}
                    >
                      {topic.trend}
                    </div>
                    <div className="text-xs text-gray-500">Trend</div>
                  </div>
                  <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${
                        topic.sentiment >= 80 ? "bg-green-500" : topic.sentiment >= 60 ? "bg-yellow-500" : "bg-red-500"
                      }`}
                      style={{ width: `${topic.sentiment}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ModernChartContainer>

        <ModernChartContainer title="Topics Performance Radar" tooltip="Multi-dimensional view of topic performance">
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={topTopicsData.slice(0, 5)} margin={{ top: 20, right: 80, bottom: 20, left: 80 }}>
              <PolarGrid />
              <PolarAngleAxis dataKey="topic" tick={{ fontSize: 10, fill: "#6b7280" }} />
              <PolarRadiusAxis angle={90} domain={[0, 500]} tick={{ fontSize: 10, fill: "#6b7280" }} tickCount={4} />
              <Radar
                name="Mentions"
                dataKey="mentions"
                stroke="#017ABF"
                fill="#017ABF"
                fillOpacity={0.3}
                strokeWidth={2}
              />
              <Radar
                name="Sentiment"
                dataKey="sentiment"
                stroke="#10B981"
                fill="#10B981"
                fillOpacity={0.2}
                strokeWidth={2}
              />
              <Tooltip
                contentStyle={customTooltipStyle}
                formatter={(value, name) => [
                  name === "mentions" ? value : `${value}%`,
                  name === "mentions" ? "Mentions" : "Sentiment Score",
                ]}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </ModernChartContainer>
      </div>

      {/* Word Cloud & Topic Insights */}
      <div className="grid gap-6 md:grid-cols-2">
        <ModernChartContainer
          title="Word Cloud Analysis"
          tooltip="Most frequently mentioned words and phrases with sentiment filtering"
        >
          <div className="space-y-4">
            <div className="flex gap-2">
              <Button
                variant={wordCloudFilter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setWordCloudFilter("all")}
                className={wordCloudFilter === "all" ? buttonClass : ""}
              >
                All Words
              </Button>
              <Button
                variant={wordCloudFilter === "positive" ? "default" : "outline"}
                size="sm"
                onClick={() => setWordCloudFilter("positive")}
                className={wordCloudFilter === "positive" ? buttonClass : ""}
              >
                Positive Words
              </Button>
              <Button
                variant={wordCloudFilter === "negative" ? "default" : "outline"}
                size="sm"
                onClick={() => setWordCloudFilter("negative")}
                className={wordCloudFilter === "negative" ? buttonClass : ""}
              >
                Negative Words
              </Button>
              <Button
                variant={wordCloudFilter === "neutral" ? "default" : "outline"}
                size="sm"
                onClick={() => setWordCloudFilter("neutral")}
                className={wordCloudFilter === "neutral" ? buttonClass : ""}
              >
                Neutral Words
              </Button>
            </div>
            <WordCloudComponent filter={wordCloudFilter} type="brand" />
          </div>
        </ModernChartContainer>

        <ModernChartContainer title="Sentiment by Topic Category" tooltip="Analyze key topics and sentiment patterns">
          <div className="space-y-4">
            <div className="flex gap-2 justify-start">
              <Button
                variant={topicChartType === "bar" ? "default" : "outline"}
                size="sm"
                onClick={() => setTopicChartType("bar")}
                className={topicChartType === "bar" ? buttonClass : ""}
              >
                Bar Chart
              </Button>
              <Button
                variant={topicChartType === "pie" ? "default" : "outline"}
                size="sm"
                onClick={() => setTopicChartType("pie")}
                className={topicChartType === "pie" ? buttonClass : ""}
              >
                Pie Chart
              </Button>
            </div>
            <ResponsiveContainer width="100%" height={320}>
              {topicChartType === "bar" ? (
                <BarChart
                  data={topicInsightsData}
                  layout="vertical"
                  margin={{ left: 100, right: 40, top: 20, bottom: 20 }}
                >
                  <XAxis
                    type="number"
                    tick={{ fontSize: 12, fill: "#6b7280" }}
                    axisLine={{ stroke: "#e5e7eb" }}
                    tickLine={{ stroke: "#e5e7eb" }}
                  />
                  <YAxis
                    type="category"
                    dataKey="topic"
                    width={100}
                    tick={{ fontSize: 11, fill: "#6b7280" }}
                    axisLine={{ stroke: "#e5e7eb" }}
                    tickLine={{ stroke: "#e5e7eb" }}
                  />
                  <Tooltip
                    contentStyle={customTooltipStyle}
                    formatter={(value, name) => [
                      value,
                      name === "positive" ? "Positive" : name === "neutral" ? "Neutral" : "Negative",
                    ]}
                  />
                  <Bar dataKey="positive" stackId="a" fill="#10B981" radius={[0, 0, 0, 0]} />
                  <Bar dataKey="neutral" stackId="a" fill="#F59E0B" radius={[0, 0, 0, 0]} />
                  <Bar dataKey="negative" stackId="a" fill="#EF4444" radius={[0, 4, 4, 0]} />
                </BarChart>
              ) : (
                <div className="grid grid-cols-1 gap-4">
                  {topicInsightsData.map((item, index) => (
                    <div key={item.topic} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="font-medium text-sm">{item.topic}</div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          <span className="text-xs">{item.positive}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <span className="text-xs">{item.neutral}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <span className="text-xs">{item.negative}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ResponsiveContainer>
            <div className="flex justify-center mt-4">
              <ChartLegend items={sentimentLegend} />
            </div>
          </div>
        </ModernChartContainer>
      </div>

      {/* Social Feed & Top Influencers */}
      <div className="grid gap-6 md:grid-cols-2">
        <ModernChartContainer title="Social Feed" tooltip="Recent brand mentions across platforms">
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {socialFeedData.map((item, index) => (
              <SocialFeedItem key={index} {...item} />
            ))}
          </div>
        </ModernChartContainer>

        <ModernChartContainer title="Top Influencers" tooltip="Key influencers mentioning your brand">
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {topInfluencersData.map((influencer, index) => (
              <InfluencerCard key={index} {...influencer} />
            ))}
          </div>
        </ModernChartContainer>
      </div>

      {/* Competitor Quick View */}
      <ModernChartContainer title="Competitor Analysis" tooltip="Comprehensive competitive landscape overview">
        <div className="space-y-8">
          {/* Header with overall metrics */}
          <div className="grid grid-cols-4 gap-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">4</div>
              <div className="text-sm text-gray-600">Competitors</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">42.1%</div>
              <div className="text-sm text-gray-600">Market Share</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">78%</div>
              <div className="text-sm text-gray-600">Your Sentiment</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">#1</div>
              <div className="text-sm text-gray-600">Market Position</div>
            </div>
          </div>

          {/* Detailed competitor cards */}
          <div className="grid gap-4">
            {competitorData.map((competitor, index) => (
              <div
                key={competitor.competitor}
                className={`p-6 rounded-lg border-2 transition-all duration-200 hover:shadow-lg ${
                  competitor.competitor === "Your Brand"
                    ? "bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200"
                    : "bg-white border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                        competitor.competitor === "Your Brand" ? "bg-blue-500" : "bg-gray-400"
                      }`}
                    >
                      {competitor.competitor === "Your Brand" ? "YOU" : `C${index}`}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">{competitor.competitor}</h3>
                      <p className="text-sm text-gray-500">{competitor.mentions.toLocaleString()} mentions</p>
                    </div>
                  </div>
                  {competitor.competitor === "Your Brand" && (
                    <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Market Leader
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Share of Voice</span>
                      <span className="text-sm font-bold text-gray-900">{competitor.shareOfVoice}%</span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ${
                          competitor.competitor === "Your Brand" ? "bg-blue-500" : "bg-gray-400"
                        }`}
                        style={{ width: `${competitor.shareOfVoice}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Sentiment Score</span>
                      <span className="text-sm font-bold text-gray-900">{competitor.sentiment}%</span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ${
                          competitor.sentiment >= 75
                            ? "bg-green-500"
                            : competitor.sentiment >= 65
                              ? "bg-yellow-500"
                              : "bg-red-500"
                        }`}
                        style={{ width: `${competitor.sentiment}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Engagement Rate</span>
                      <span className="text-sm font-bold text-gray-900">
                        {((competitor.engagement / competitor.mentions) * 100).toFixed(1)}%
                      </span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ${
                          competitor.competitor === "Your Brand" ? "bg-purple-500" : "bg-gray-400"
                        }`}
                        style={{ width: `${Math.min((competitor.engagement / competitor.mentions) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ModernChartContainer>
    </div>
  )
}
