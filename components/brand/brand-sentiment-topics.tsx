"use client"

import { useState } from "react"
import { Smile } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionHeader from "@/components/section-header"
import ModernChartContainer from "@/components/modern-chart-container"
import ChartLegend from "@/components/chart-legend"
import {
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Area,
  AreaChart,
  Tooltip,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Scatter,
  ScatterChart,
  ZAxis,
  LabelList,
} from "recharts"
import WordCloudComponent from "@/components/word-cloud-component"

interface BrandSentimentTopicsProps {
  timeRange: "hour" | "day" | "week" | "month" | "year"
}

export default function BrandSentimentTopics({ timeRange }: BrandSentimentTopicsProps) {
  const [wordCloudFilter, setWordCloudFilter] = useState<"all" | "positive" | "negative" | "neutral">("all")
  const [sentimentChartType, setSentimentChartType] = useState<"bar" | "pie">("pie")
  const [topicChartType, setTopicChartType] = useState<"bar" | "pie">("bar")
  const [emotionChartType, setEmotionChartType] = useState<"bar" | "pie">("pie")

  // Enhanced sentiment data
  const sentimentBreakdown = [
    { name: "Positive", value: 65, fill: "#10B981" },
    { name: "Neutral", value: 25, fill: "#F59E0B" },
    { name: "Negative", value: 10, fill: "#EF4444" },
  ]

  const sentimentTimeline = [
    { date: "Jan", positive: 60, neutral: 30, negative: 10 },
    { date: "Feb", positive: 62, neutral: 28, negative: 10 },
    { date: "Mar", positive: 65, neutral: 25, negative: 10 },
    { date: "Apr", positive: 63, neutral: 27, negative: 10 },
    { date: "May", positive: 67, neutral: 23, negative: 10 },
    { date: "Jun", positive: 65, neutral: 25, negative: 10 },
  ]

  const sentimentTopicCategorization = [
    { topic: "Product Features", positive: 120, negative: 30, neutral: 50, total: 200 },
    { topic: "Customer Support", positive: 80, negative: 70, neutral: 40, total: 190 },
    { topic: "Price", positive: 50, negative: 100, neutral: 30, total: 180 },
    { topic: "User Experience", positive: 90, negative: 40, neutral: 35, total: 165 },
    { topic: "Brand Image", positive: 110, negative: 25, neutral: 45, total: 180 },
  ]

  // Convert topic data for pie chart
  const topicPieData = sentimentTopicCategorization.map((item) => ({
    name: item.topic,
    value: item.total,
    fill: ["#10B981", "#6B7280", "#EF4444", "#3B82F6", "#F59E0B"][sentimentTopicCategorization.indexOf(item)],
  }))

  const emotionBasedSentiment = [
    { emotion: "Joy", value: 35, fill: "#10B981" },
    { emotion: "Happy", value: 30, fill: "#34D399" },
    { emotion: "Neutral", value: 15, fill: "#6B7280" },
    { emotion: "Sad", value: 8, fill: "#F59E0B" },
    { emotion: "Angry", value: 5, fill: "#EF4444" },
    { emotion: "Surprised", value: 7, fill: "#3B82F6" },
  ]

  // New: Hourly sentiment distribution
  const hourlySentimentData = [
    { hour: "00", positive: 45, neutral: 35, negative: 20 },
    { hour: "03", positive: 40, neutral: 40, negative: 20 },
    { hour: "06", positive: 55, neutral: 30, negative: 15 },
    { hour: "09", positive: 70, neutral: 20, negative: 10 },
    { hour: "12", positive: 75, neutral: 18, negative: 7 },
    { hour: "15", positive: 68, neutral: 22, negative: 10 },
    { hour: "18", positive: 60, neutral: 25, negative: 15 },
    { hour: "21", positive: 50, neutral: 30, negative: 20 },
  ]

  // New: Sentiment vs Volume correlation
  const sentimentVolumeData = [
    { sentiment: 95, volume: 1200, topic: "Product Features" },
    { sentiment: 85, volume: 950, topic: "User Experience" },
    { sentiment: 75, volume: 800, topic: "Brand Image" },
    { sentiment: 65, volume: 1100, topic: "Customer Support" },
    { sentiment: 35, volume: 600, topic: "Price" },
    { sentiment: 25, volume: 400, topic: "Delivery" },
  ]

  // New: Emotion intensity radar
  const emotionIntensity = [
    { emotion: "Joy", intensity: 85, fullMark: 100 },
    { emotion: "Trust", intensity: 78, fullMark: 100 },
    { emotion: "Anticipation", intensity: 65, fullMark: 100 },
    { emotion: "Surprise", intensity: 45, fullMark: 100 },
    { emotion: "Fear", intensity: 15, fullMark: 100 },
    { emotion: "Sadness", intensity: 20, fullMark: 100 },
    { emotion: "Disgust", intensity: 12, fullMark: 100 },
    { emotion: "Anger", intensity: 18, fullMark: 100 },
  ]

  const sentimentLegend = sentimentBreakdown.map((item) => ({
    color: item.fill,
    label: item.name,
  }))

  const emotionLegend = emotionBasedSentiment.map((item) => ({
    color: item.fill,
    label: item.emotion,
  }))

  const topicSentimentLegend = [
    { color: "#10B981", label: "Positive" },
    { color: "#F59E0B", label: "Neutral" },
    { color: "#EF4444", label: "Negative" },
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
        title="Sentiment & Topics"
        description="Comprehensive sentiment analysis and topic categorization with advanced insights"
        icon={<Smile className="h-5 w-5" />}
      />

      {/* First row - Sentiment Analysis */}
      <div className="grid gap-6 md:grid-cols-2">
        <ModernChartContainer
          title="Sentiment Breakdown"
          tooltip="Overall sentiment distribution"
          legend={<ChartLegend items={sentimentLegend} />}
        >
          <div className="space-y-4">
            <div className="flex gap-2">
              <Button
                variant={sentimentChartType === "pie" ? "default" : "outline"}
                size="sm"
                onClick={() => setSentimentChartType("pie")}
              >
                Pie Chart
              </Button>
              <Button
                variant={sentimentChartType === "bar" ? "default" : "outline"}
                size="sm"
                onClick={() => setSentimentChartType("bar")}
              >
                Bar Chart
              </Button>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              {sentimentChartType === "pie" ? (
                <PieChart>
                  <Pie
                    data={sentimentBreakdown}
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
                    {sentimentBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={customTooltipStyle}
                    formatter={(value: number) => [`${value}%`, "Percentage"]}
                  />
                </PieChart>
              ) : (
                <BarChart data={sentimentBreakdown} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#6b7280" }} />
                  <YAxis tick={{ fontSize: 12, fill: "#6b7280" }} />
                  <Tooltip contentStyle={customTooltipStyle} />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    <LabelList dataKey="value" position="top" formatter={(value: number) => `${value}%`} />
                    {sentimentBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>
        </ModernChartContainer>

        <ModernChartContainer
          title="Sentiment Timeline"
          tooltip="Sentiment trends over time"
          legend={<ChartLegend items={sentimentLegend} />}
        >
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={sentimentTimeline} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
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
        </ModernChartContainer>
      </div>

      {/* Second row - Topic Analysis */}
      <div className="grid gap-6 md:grid-cols-2">
        <ModernChartContainer
          title="Sentiment by Topic Category"
          tooltip="Sentiment breakdown by topic category"
          legend={<ChartLegend items={topicSentimentLegend} />}
        >
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
            <ResponsiveContainer width="100%" height={280}>
              {topicChartType === "bar" ? (
                <BarChart
                  data={sentimentTopicCategorization}
                  layout="vertical"
                  margin={{ left: 120, right: 20, top: 20, bottom: 20 }}
                >
                  <XAxis type="number" tick={{ fontSize: 12, fill: "#6b7280" }} axisLine={{ stroke: "#e5e7eb" }} />
                  <YAxis
                    type="category"
                    dataKey="topic"
                    width={120}
                    tick={{ fontSize: 11, fill: "#6b7280" }}
                    axisLine={{ stroke: "#e5e7eb" }}
                  />
                  <Tooltip contentStyle={customTooltipStyle} />
                  <Bar dataKey="positive" stackId="a" fill="#10B981" radius={[0, 0, 0, 0]}>
                    <LabelList dataKey="positive" position="center" fill="white" fontSize={10} />
                  </Bar>
                  <Bar dataKey="neutral" stackId="a" fill="#F59E0B" radius={[0, 0, 0, 0]}>
                    <LabelList dataKey="neutral" position="center" fill="white" fontSize={10} />
                  </Bar>
                  <Bar dataKey="negative" stackId="a" fill="#EF4444" radius={[0, 4, 4, 0]}>
                    <LabelList dataKey="negative" position="center" fill="white" fontSize={10} />
                  </Bar>
                </BarChart>
              ) : (
                <PieChart>
                  <Pie
                    data={topicPieData}
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
                    {topicPieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={customTooltipStyle} />
                </PieChart>
              )}
            </ResponsiveContainer>
          </div>
        </ModernChartContainer>

        <ModernChartContainer
          title="Hourly Sentiment Pattern"
          tooltip="How sentiment changes throughout the day"
          legend={<ChartLegend items={sentimentLegend} />}
        >
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={hourlySentimentData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <XAxis
                dataKey="hour"
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
                dataKey="positive"
                stroke="#10B981"
                fill="#10B981"
                fillOpacity={0.3}
                strokeWidth={3}
                dot={{ fill: "#10B981", strokeWidth: 2, r: 4 }}
              />
              <Area
                type="monotone"
                dataKey="neutral"
                stroke="#F59E0B"
                fill="#F59E0B"
                fillOpacity={0.3}
                strokeWidth={2}
                dot={{ fill: "#F59E0B", strokeWidth: 2, r: 3 }}
              />
              <Area
                type="monotone"
                dataKey="negative"
                stroke="#EF4444"
                fill="#EF4444"
                fillOpacity={0.3}
                strokeWidth={2}
                dot={{ fill: "#EF4444", strokeWidth: 2, r: 3 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ModernChartContainer>
      </div>

      {/* Third row - Emotion Analysis */}
      <div className="grid gap-6 md:grid-cols-2">
        <ModernChartContainer
          title="Emotion-based Sentiment"
          tooltip="Detailed emotional sentiment analysis"
          legend={<ChartLegend items={emotionLegend} />}
        >
          <div className="space-y-4">
            <div className="flex gap-2">
              <Button
                variant={emotionChartType === "pie" ? "default" : "outline"}
                size="sm"
                onClick={() => setEmotionChartType("pie")}
              >
                Pie Chart
              </Button>
              <Button
                variant={emotionChartType === "bar" ? "default" : "outline"}
                size="sm"
                onClick={() => setEmotionChartType("bar")}
              >
                Bar Chart
              </Button>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              {emotionChartType === "pie" ? (
                <PieChart>
                  <Pie
                    data={emotionBasedSentiment}
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
                    {emotionBasedSentiment.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={customTooltipStyle}
                    formatter={(value: number) => [`${value}%`, "Percentage"]}
                  />
                </PieChart>
              ) : (
                <BarChart data={emotionBasedSentiment} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <XAxis
                    dataKey="emotion"
                    tick={{ fontSize: 11, fill: "#6b7280" }}
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis tick={{ fontSize: 12, fill: "#6b7280" }} />
                  <Tooltip contentStyle={customTooltipStyle} />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    <LabelList dataKey="value" position="top" formatter={(value: number) => `${value}%`} />
                    {emotionBasedSentiment.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>
        </ModernChartContainer>

        <ModernChartContainer
          title="Sentiment vs Volume Correlation"
          tooltip="Relationship between sentiment score and mention volume by topic"
        >
          <ResponsiveContainer width="100%" height={320}>
            <ScatterChart margin={{ top: 20, right: 20, bottom: 40, left: 40 }}>
              <XAxis
                type="number"
                dataKey="sentiment"
                name="Sentiment Score"
                domain={[0, 100]}
                tick={{ fontSize: 12, fill: "#6b7280" }}
                axisLine={{ stroke: "#e5e7eb" }}
                tickLine={{ stroke: "#e5e7eb" }}
                label={{
                  value: "Sentiment Score (%)",
                  position: "bottom",
                  offset: -10,
                  style: { textAnchor: "middle", fontSize: "12px", fill: "#6b7280" },
                }}
              />
              <YAxis
                type="number"
                dataKey="volume"
                name="Volume"
                tick={{ fontSize: 12, fill: "#6b7280" }}
                axisLine={{ stroke: "#e5e7eb" }}
                tickLine={{ stroke: "#e5e7eb" }}
                label={{
                  value: "Volume",
                  angle: -90,
                  position: "insideLeft",
                  style: { textAnchor: "middle", fontSize: "12px", fill: "#6b7280" },
                }}
              />
              <ZAxis type="number" range={[50, 200]} />
              <Tooltip
                cursor={{ strokeDasharray: "3 3" }}
                contentStyle={customTooltipStyle}
                formatter={(value, name) => [
                  name === "sentiment" ? `${value}%` : value,
                  name === "sentiment" ? "Sentiment Score" : "Volume",
                ]}
              />
              <Scatter data={sentimentVolumeData} fill="#017ABF" fillOpacity={0.7} stroke="#017ABF" strokeWidth={2} />
            </ScatterChart>
          </ResponsiveContainer>
        </ModernChartContainer>
      </div>

      {/* Fourth row - Emotion Radar and Word Cloud */}
      <div className="grid gap-6 md:grid-cols-2">
        <ModernChartContainer
          title="Emotion Intensity Radar"
          tooltip="Intensity levels of different emotions detected in mentions"
        >
          <ResponsiveContainer width="100%" height={320}>
            <RadarChart data={emotionIntensity}>
              <PolarGrid stroke="#e5e7eb" />
              <PolarAngleAxis dataKey="emotion" tick={{ fontSize: 11, fill: "#6b7280" }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 10, fill: "#6b7280" }} tickCount={5} />
              <Radar
                name="Intensity"
                dataKey="intensity"
                stroke="#017ABF"
                fill="#017ABF"
                fillOpacity={0.3}
                strokeWidth={2}
                dot={{ fill: "#017ABF", strokeWidth: 2, r: 4 }}
              />
              <Tooltip contentStyle={customTooltipStyle} formatter={(value: number) => [`${value}%`, "Intensity"]} />
            </RadarChart>
          </ResponsiveContainer>
        </ModernChartContainer>

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
              >
                All Words
              </Button>
              <Button
                variant={wordCloudFilter === "positive" ? "default" : "outline"}
                size="sm"
                onClick={() => setWordCloudFilter("positive")}
              >
                Positive Words
              </Button>
              <Button
                variant={wordCloudFilter === "negative" ? "default" : "outline"}
                size="sm"
                onClick={() => setWordCloudFilter("negative")}
              >
                Negative Words
              </Button>
              <Button
                variant={wordCloudFilter === "neutral" ? "default" : "outline"}
                size="sm"
                onClick={() => setWordCloudFilter("neutral")}
              >
                Neutral Words
              </Button>
            </div>
            <WordCloudComponent filter={wordCloudFilter} type="brand" />
          </div>
        </ModernChartContainer>
      </div>
    </div>
  )
}
