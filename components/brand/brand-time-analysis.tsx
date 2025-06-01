"use client"

import { Clock } from "lucide-react"
import SectionHeader from "@/components/section-header"
import ModernChartContainer from "@/components/modern-chart-container"
import { Scatter, ScatterChart, ResponsiveContainer, XAxis, YAxis, ZAxis, Tooltip } from "recharts"

interface BrandTimeAnalysisProps {
  timeRange: "hour" | "day" | "week" | "month" | "year"
}

export default function BrandTimeAnalysis({ timeRange }: BrandTimeAnalysisProps) {
  // Days of the week mapping
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  // Generate bubble chart data: Day of week (y-axis) vs Hour (x-axis)
  const mentionsBubbleData = [
    // Monday
    { day: 0, hour: 9, mentions: 45, dayName: "Monday" },
    { day: 0, hour: 12, mentions: 78, dayName: "Monday" },
    { day: 0, hour: 15, mentions: 65, dayName: "Monday" },
    { day: 0, hour: 18, mentions: 52, dayName: "Monday" },
    // Tuesday
    { day: 1, hour: 9, mentions: 52, dayName: "Tuesday" },
    { day: 1, hour: 12, mentions: 85, dayName: "Tuesday" },
    { day: 1, hour: 15, mentions: 72, dayName: "Tuesday" },
    { day: 1, hour: 18, mentions: 58, dayName: "Tuesday" },
    // Wednesday
    { day: 2, hour: 9, mentions: 68, dayName: "Wednesday" },
    { day: 2, hour: 12, mentions: 95, dayName: "Wednesday" },
    { day: 2, hour: 15, mentions: 82, dayName: "Wednesday" },
    { day: 2, hour: 18, mentions: 65, dayName: "Wednesday" },
    // Thursday
    { day: 3, hour: 9, mentions: 58, dayName: "Thursday" },
    { day: 3, hour: 12, mentions: 88, dayName: "Thursday" },
    { day: 3, hour: 15, mentions: 75, dayName: "Thursday" },
    { day: 3, hour: 18, mentions: 62, dayName: "Thursday" },
    // Friday
    { day: 4, hour: 9, mentions: 72, dayName: "Friday" },
    { day: 4, hour: 12, mentions: 105, dayName: "Friday" },
    { day: 4, hour: 15, mentions: 92, dayName: "Friday" },
    { day: 4, hour: 18, mentions: 78, dayName: "Friday" },
    // Saturday
    { day: 5, hour: 12, mentions: 45, dayName: "Saturday" },
    { day: 5, hour: 15, mentions: 38, dayName: "Saturday" },
    { day: 5, hour: 18, mentions: 42, dayName: "Saturday" },
    // Sunday
    { day: 6, hour: 12, mentions: 35, dayName: "Sunday" },
    { day: 6, hour: 15, mentions: 32, dayName: "Sunday" },
    { day: 6, hour: 18, mentions: 38, dayName: "Sunday" },
  ]

  const engagementBubbleData = [
    // Monday
    { day: 0, hour: 9, engagement: 520, dayName: "Monday" },
    { day: 0, hour: 12, engagement: 890, dayName: "Monday" },
    { day: 0, hour: 15, engagement: 720, dayName: "Monday" },
    { day: 0, hour: 18, engagement: 580, dayName: "Monday" },
    // Tuesday
    { day: 1, hour: 9, engagement: 580, dayName: "Tuesday" },
    { day: 1, hour: 12, engagement: 980, dayName: "Tuesday" },
    { day: 1, hour: 15, engagement: 820, dayName: "Tuesday" },
    { day: 1, hour: 18, engagement: 650, dayName: "Tuesday" },
    // Wednesday
    { day: 2, hour: 9, engagement: 720, dayName: "Wednesday" },
    { day: 2, hour: 12, engagement: 1180, dayName: "Wednesday" },
    { day: 2, hour: 15, engagement: 980, dayName: "Wednesday" },
    { day: 2, hour: 18, engagement: 780, dayName: "Wednesday" },
    // Thursday
    { day: 3, hour: 9, engagement: 650, dayName: "Thursday" },
    { day: 3, hour: 12, engagement: 1050, dayName: "Thursday" },
    { day: 3, hour: 15, engagement: 880, dayName: "Thursday" },
    { day: 3, hour: 18, engagement: 720, dayName: "Thursday" },
    // Friday
    { day: 4, hour: 9, engagement: 820, dayName: "Friday" },
    { day: 4, hour: 12, engagement: 1350, dayName: "Friday" },
    { day: 4, hour: 15, engagement: 1120, dayName: "Friday" },
    { day: 4, hour: 18, engagement: 920, dayName: "Friday" },
    // Saturday
    { day: 5, hour: 12, engagement: 480, dayName: "Saturday" },
    { day: 5, hour: 15, engagement: 420, dayName: "Saturday" },
    { day: 5, hour: 18, engagement: 520, dayName: "Saturday" },
    // Sunday
    { day: 6, hour: 12, engagement: 380, dayName: "Sunday" },
    { day: 6, hour: 15, engagement: 320, dayName: "Sunday" },
    { day: 6, hour: 18, engagement: 420, dayName: "Sunday" },
  ]

  const socialReachBubbleData = [
    // Monday
    { day: 0, hour: 9, reach: 25000, dayName: "Monday" },
    { day: 0, hour: 12, reach: 42000, dayName: "Monday" },
    { day: 0, hour: 15, reach: 37000, dayName: "Monday" },
    { day: 0, hour: 18, reach: 31000, dayName: "Monday" },
    // Tuesday
    { day: 1, hour: 9, reach: 28000, dayName: "Tuesday" },
    { day: 1, hour: 12, reach: 45000, dayName: "Tuesday" },
    { day: 1, hour: 15, reach: 40000, dayName: "Tuesday" },
    { day: 1, hour: 18, reach: 34000, dayName: "Tuesday" },
    // Wednesday
    { day: 2, hour: 9, reach: 32000, dayName: "Wednesday" },
    { day: 2, hour: 12, reach: 48000, dayName: "Wednesday" },
    { day: 2, hour: 15, reach: 43000, dayName: "Wednesday" },
    { day: 2, hour: 18, reach: 37000, dayName: "Wednesday" },
    // Thursday
    { day: 3, hour: 9, reach: 30000, dayName: "Thursday" },
    { day: 3, hour: 12, reach: 46000, dayName: "Thursday" },
    { day: 3, hour: 15, reach: 41000, dayName: "Thursday" },
    { day: 3, hour: 18, reach: 35000, dayName: "Thursday" },
    // Friday
    { day: 4, hour: 9, reach: 35000, dayName: "Friday" },
    { day: 4, hour: 12, reach: 52000, dayName: "Friday" },
    { day: 4, hour: 15, reach: 47000, dayName: "Friday" },
    { day: 4, hour: 18, reach: 41000, dayName: "Friday" },
    // Saturday
    { day: 5, hour: 12, reach: 22000, dayName: "Saturday" },
    { day: 5, hour: 15, reach: 19000, dayName: "Saturday" },
    { day: 5, hour: 18, reach: 25000, dayName: "Saturday" },
    // Sunday
    { day: 6, hour: 12, reach: 17000, dayName: "Sunday" },
    { day: 6, hour: 15, reach: 15000, dayName: "Sunday" },
    { day: 6, hour: 18, reach: 20000, dayName: "Sunday" },
  ]

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="rounded-lg border bg-white p-4 shadow-lg border-gray-200">
          <div className="font-semibold text-gray-900 mb-2">{`${data.dayName} at ${data.hour}:00`}</div>
          <div className="space-y-1">
            {payload[0].dataKey === "mentions" && (
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-sm text-gray-700">
                  Mentions: <span className="font-medium">{data.mentions}</span>
                </span>
              </div>
            )}
            {payload[0].dataKey === "engagement" && (
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm text-gray-700">
                  Engagement: <span className="font-medium">{data.engagement.toLocaleString()}</span>
                </span>
              </div>
            )}
            {payload[0].dataKey === "reach" && (
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                <span className="text-sm text-gray-700">
                  Reach: <span className="font-medium">{data.reach.toLocaleString()}</span>
                </span>
              </div>
            )}
          </div>
          <div className="text-xs text-gray-500 mt-2">Bubble size represents volume</div>
        </div>
      )
    }
    return null
  }

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
        title="Time Analysis"
        description="Analyze mentions, engagement, and reach patterns by day of week and hour using bubble charts"
        icon={<Clock className="h-5 w-5" />}
      />

      {/* First row - 2 charts */}
      <div className="grid gap-6 md:grid-cols-2">
        <ModernChartContainer
          title="Mentions By Day & Hour"
          tooltip="Bubble size represents mention volume. Y-axis: Day of week, X-axis: Hour of day"
        >
          <ResponsiveContainer width="100%" height={350}>
            <ScatterChart data={mentionsBubbleData} margin={{ top: 20, right: 30, left: 80, bottom: 20 }}>
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
                domain={[0, 6]}
                tickCount={7}
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
              <Tooltip content={<CustomTooltip />} />
              <Scatter dataKey="mentions" fill="#017ABF" fillOpacity={0.8} stroke="#0056b3" strokeWidth={2} />
            </ScatterChart>
          </ResponsiveContainer>
        </ModernChartContainer>

        <ModernChartContainer
          title="Engagement By Day & Hour"
          tooltip="Bubble size represents engagement volume. Y-axis: Day of week, X-axis: Hour of day"
        >
          <ResponsiveContainer width="100%" height={350}>
            <ScatterChart data={engagementBubbleData} margin={{ top: 20, right: 30, left: 80, bottom: 20 }}>
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
                domain={[0, 6]}
                tickCount={7}
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
              <ZAxis type="number" dataKey="engagement" range={[100, 800]} />
              <Tooltip content={<CustomTooltip />} />
              <Scatter dataKey="engagement" fill="#10B981" fillOpacity={0.8} stroke="#059669" strokeWidth={2} />
            </ScatterChart>
          </ResponsiveContainer>
        </ModernChartContainer>
      </div>

      {/* Second row - 1 chart */}
      <div className="grid gap-6 md:grid-cols-2">
        <ModernChartContainer
          title="Social Reach By Day & Hour"
          tooltip="Bubble size represents reach volume. Y-axis: Day of week, X-axis: Hour of day"
        >
          <ResponsiveContainer width="100%" height={350}>
            <ScatterChart data={socialReachBubbleData} margin={{ top: 20, right: 30, left: 80, bottom: 20 }}>
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
                domain={[0, 6]}
                tickCount={7}
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
              <ZAxis type="number" dataKey="reach" range={[100, 800]} />
              <Tooltip content={<CustomTooltip />} />
              <Scatter dataKey="reach" fill="#E91E63" fillOpacity={0.8} stroke="#C2185B" strokeWidth={2} />
            </ScatterChart>
          </ResponsiveContainer>
        </ModernChartContainer>

        {/* Empty space for symmetry */}
        <div></div>
      </div>
    </div>
  )
}
