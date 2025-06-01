"use client"

import { Clock } from "lucide-react"
import SectionHeader from "@/components/section-header"
import ChartContainer from "@/components/chart-container"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Bar, BarChart, Area, AreaChart } from "recharts"

interface CompetitorTimeAnalysisProps {
  timeRange: "hour" | "day" | "week" | "month" | "year"
}

export default function CompetitorTimeAnalysis({ timeRange }: CompetitorTimeAnalysisProps) {
  // Mock data for competitor time analysis
  const hourlyData = [
    { hour: "00", competitorA: 35, competitorB: 28, competitorC: 22 },
    { hour: "01", competitorA: 25, competitorB: 20, competitorC: 18 },
    { hour: "02", competitorA: 20, competitorB: 18, competitorC: 15 },
    { hour: "03", competitorA: 18, competitorB: 15, competitorC: 12 },
    { hour: "04", competitorA: 22, competitorB: 18, competitorC: 15 },
    { hour: "05", competitorA: 28, competitorB: 25, competitorC: 20 },
    { hour: "06", competitorA: 42, competitorB: 38, competitorC: 32 },
    { hour: "07", competitorA: 58, competitorB: 52, competitorC: 45 },
    { hour: "08", competitorA: 72, competitorB: 65, competitorC: 58 },
    { hour: "09", competitorA: 88, competitorB: 82, competitorC: 75 },
    { hour: "10", competitorA: 95, competitorB: 88, competitorC: 82 },
    { hour: "11", competitorA: 105, competitorB: 98, competitorC: 88 },
    { hour: "12", competitorA: 125, competitorB: 115, competitorC: 105 },
    { hour: "13", competitorA: 115, competitorB: 108, competitorC: 98 },
    { hour: "14", competitorA: 105, competitorB: 95, competitorC: 88 },
    { hour: "15", competitorA: 95, competitorB: 88, competitorC: 82 },
    { hour: "16", competitorA: 88, competitorB: 82, competitorC: 75 },
    { hour: "17", competitorA: 78, competitorB: 72, competitorC: 65 },
    { hour: "18", competitorA: 68, competitorB: 62, competitorC: 55 },
    { hour: "19", competitorA: 58, competitorB: 52, competitorC: 48 },
    { hour: "20", competitorA: 52, competitorB: 48, competitorC: 42 },
    { hour: "21", competitorA: 48, competitorB: 42, competitorC: 38 },
    { hour: "22", competitorA: 42, competitorB: 38, competitorC: 32 },
    { hour: "23", competitorA: 38, competitorB: 32, competitorC: 28 },
  ]

  const weeklyData = [
    { day: "Monday", competitorA: 650, competitorB: 580, competitorC: 520 },
    { day: "Tuesday", competitorA: 720, competitorB: 650, competitorC: 580 },
    { day: "Wednesday", competitorA: 850, competitorB: 780, competitorC: 720 },
    { day: "Thursday", competitorA: 780, competitorB: 720, competitorC: 650 },
    { day: "Friday", competitorA: 920, competitorB: 850, competitorC: 780 },
    { day: "Saturday", competitorA: 580, competitorB: 520, competitorC: 480 },
    { day: "Sunday", competitorA: 520, competitorB: 480, competitorC: 420 },
  ]

  const monthlyTrend = [
    { month: "Jan", competitorA: 15500, competitorB: 14200, competitorC: 12800 },
    { month: "Feb", competitorA: 16200, competitorB: 15000, competitorC: 13500 },
    { month: "Mar", competitorA: 17800, competitorB: 16200, competitorC: 14800 },
    { month: "Apr", competitorA: 16800, competitorB: 15500, competitorC: 14200 },
    { month: "May", competitorA: 18500, competitorB: 17200, competitorC: 15800 },
    { month: "Jun", competitorA: 17200, competitorB: 16000, competitorC: 14500 },
  ]

  return (
    <div className="space-y-8">
      <SectionHeader
        title="Competitor Time Analysis"
        description="Analyze competitor activity patterns over time"
        icon={<Clock className="h-5 w-5" />}
      />

      {/* Hourly Analysis */}
      <div className="grid gap-6 md:grid-cols-2">
        <ChartContainer title="Hourly Mentions Pattern" tooltip="Competitor mentions throughout the day">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={hourlyData}>
              <XAxis dataKey="hour" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="competitorA" stroke="#E91E63" strokeWidth={2} />
              <Line type="monotone" dataKey="competitorB" stroke="#4CAF50" strokeWidth={2} />
              <Line type="monotone" dataKey="competitorC" stroke="#FF9800" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>

        <ChartContainer title="Peak Activity Hours" tooltip="When competitors are most active">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={hourlyData}>
              <XAxis dataKey="hour" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="competitorA"
                stackId="1"
                stroke="#E91E63"
                fill="#E91E63"
                fillOpacity={0.3}
              />
              <Area
                type="monotone"
                dataKey="competitorB"
                stackId="1"
                stroke="#4CAF50"
                fill="#4CAF50"
                fillOpacity={0.3}
              />
              <Area
                type="monotone"
                dataKey="competitorC"
                stackId="1"
                stroke="#FF9800"
                fill="#FF9800"
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>

      {/* Weekly Analysis */}
      <div className="grid gap-6 md:grid-cols-2">
        <ChartContainer title="Weekly Mentions Volume" tooltip="Competitor mentions by day of the week">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="competitorA" fill="#E91E63" />
              <Bar dataKey="competitorB" fill="#4CAF50" />
              <Bar dataKey="competitorC" fill="#FF9800" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>

        <ChartContainer title="Weekly Activity Comparison" tooltip="Comparative weekly activity levels">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="competitorA" stroke="#E91E63" strokeWidth={2} />
              <Line type="monotone" dataKey="competitorB" stroke="#4CAF50" strokeWidth={2} />
              <Line type="monotone" dataKey="competitorC" stroke="#FF9800" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>

      {/* Monthly Trend */}
      <ChartContainer title="Monthly Performance Trend" tooltip="Long-term competitor performance trends">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={monthlyTrend}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="competitorA" stroke="#E91E63" strokeWidth={2} />
            <Line type="monotone" dataKey="competitorB" stroke="#4CAF50" strokeWidth={2} />
            <Line type="monotone" dataKey="competitorC" stroke="#FF9800" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
}
