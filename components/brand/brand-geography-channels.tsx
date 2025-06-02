"use client"

import { useState } from "react"
import { Globe, Users, Smile, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionHeader from "@/components/section-header"
import ModernChartContainer from "@/components/modern-chart-container"
import ChartLegend from "@/components/chart-legend"
import WorldMap from "@/components/world-map"
import {
  Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell,
  PieChart, Pie, LabelList, Legend, Area, AreaChart
} from "recharts"

interface BrandGeographyChannelsProps {
  timeRange: "hour" | "day" | "week" | "month" | "year"
}

export default function BrandGeographyChannels({ timeRange }: BrandGeographyChannelsProps) {
  const [geographyChartType, setGeographyChartType] = useState<"bar" | "pie">("bar")
  const [ageChartType, setAgeChartType] = useState<"bar" | "pie">("bar")
  const [emotionChartType, setEmotionChartType] = useState<"bar" | "pie">("pie")
    const [ageGroupChartType, setAgeGroupChartType] = useState<"bar" | "pie">("bar")
  const [genderChartType, setGenderChartType] = useState<"bar" | "pie">("pie")

  // Mock data
  const geographicData = [
    { country: "United States", mentions: 450, lat: 39.8283, lng: -98.5795 },
    { country: "United Kingdom", mentions: 280, lat: 55.3781, lng: -3.436 },
    { country: "Canada", mentions: 220, lat: 56.1304, lng: -106.3468 },
    { country: "Australia", mentions: 180, lat: -25.2744, lng: 133.7751 },
    { country: "Germany", mentions: 160, lat: 51.1657, lng: 10.4515 },
    { country: "France", mentions: 140, lat: 46.2276, lng: 2.2137 },
    { country: "Japan", mentions: 120, lat: 36.2048, lng: 138.2529 },
    { country: "Brazil", mentions: 100, lat: -14.235, lng: -51.9253 },
  ]

  const genderData = [
    { gender: "Male", mentions: 540 },
    { gender: "Female", mentions: 460 },
    { gender: "Other", mentions: 80 },
  ]

  const ageData = [
    { ageGroup: "13-17", mentions: 150 },
    { ageGroup: "18-24", mentions: 320 },
    { ageGroup: "25-34", mentions: 400 },
    { ageGroup: "35-44", mentions: 280 },
    { ageGroup: "45-54", mentions: 190 },
    { ageGroup: "55+", mentions: 140 },
  ]

  const chartColors = ["#017ABF", "#E91E63", "#4CAF50", "#FF9800", "#9C27B0", "#F44336", "#2196F3", "#795548"]

  const addColor = <T extends object>(data: T[], key: keyof T = "mentions" as keyof T) =>
    data.map((item, index) => ({ ...item, fill: chartColors[index % chartColors.length] }))

  const geographicPieData = addColor(geographicData)
  const genderPieData = addColor(genderData)
  const agePieData = addColor(ageData)

  const tooltipStyle = {
    backgroundColor: "white",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
    padding: "12px",
  }

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

  
  // Update button styling throughout the component
  const buttonClass = "bg-[#017ABF] hover:bg-[#015a8f] text-white"

  return (
    <div className="space-y-8">
      <SectionHeader
        title="Geographic Distribution"
        description="Analyze mentions distribution across different regions"
        icon={<Globe className="h-5 w-5" />}
      />

      <div className="grid gap-6 md:grid-cols-2">
        <ModernChartContainer
          title="Global Mentions Map"
          tooltip="Interactive world map showing mention density by country"
        >
          <WorldMap data={geographicData} />
        </ModernChartContainer>

        <ModernChartContainer
          title="Top Countries by Mentions"
          tooltip="Countries with highest mention volume"
          legend={geographyChartType === "pie" ? <ChartLegend items={geographicPieData.slice(0, 5).map(item => ({ color: item.fill, label: item.country }))} /> : undefined}
        >
          <div className="space-y-4">
            <div className="flex gap-2">
              <Button variant={geographyChartType === "bar" ? "default" : "outline"} size="sm" onClick={() => setGeographyChartType("bar")}>Bar Chart</Button>
              <Button variant={geographyChartType === "pie" ? "default" : "outline"} size="sm" onClick={() => setGeographyChartType("pie")}>Pie Chart</Button>
            </div>
            <ResponsiveContainer width="100%" height={320}>
              {geographyChartType === "bar" ? (
                <BarChart data={geographicData} margin={{ left: 20, right: 20, top: 20, bottom: 60 }}>
                  <XAxis dataKey="country" tick={{ fontSize: 10, fill: "#6b7280" }} angle={-45} textAnchor="end" height={80} interval={0} />
                  <YAxis tick={{ fontSize: 12, fill: "#6b7280" }} />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Bar dataKey="mentions" radius={[4, 4, 0, 0]}>
                    <LabelList dataKey="mentions" position="top" fontSize={10} />
                    {geographicData.map((_, index) => (
                      <Cell key={index} fill={geographicPieData[index].fill} />
                    ))}
                  </Bar>
                </BarChart>
              ) : (
                <PieChart>
                  <Pie
                    data={geographicPieData}
                    cx="50%" cy="50%" innerRadius={60} outerRadius={120}
                    paddingAngle={2} dataKey="mentions"
                    stroke="white" strokeWidth={2}
                    label={({ country, percent }) => `${country}: ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {geographicPieData.map((entry, index) => (
                      <Cell key={index} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={tooltipStyle} />
                </PieChart>
              )}
            </ResponsiveContainer>
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
    </div>
  )
}
