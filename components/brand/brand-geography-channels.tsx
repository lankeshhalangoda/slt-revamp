"use client"

import { useState } from "react"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionHeader from "@/components/section-header"
import ModernChartContainer from "@/components/modern-chart-container"
import ChartLegend from "@/components/chart-legend"
import WorldMap from "@/components/world-map"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell, PieChart, Pie, LabelList } from "recharts"

interface BrandGeographyChannelsProps {
  timeRange: "hour" | "day" | "week" | "month" | "year"
}

export default function BrandGeographyChannels({ timeRange }: BrandGeographyChannelsProps) {
  const [geographyChartType, setGeographyChartType] = useState<"bar" | "pie">("bar")

  // Mock geographic data with proper coordinates
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

  // Convert geographic data for pie chart
  const geographicPieData = geographicData.map((item, index) => ({
    ...item,
    fill: ["#017ABF", "#E91E63", "#4CAF50", "#FF9800", "#9C27B0", "#F44336", "#2196F3", "#795548"][index],
  }))

  const geographyLegend = geographicPieData.slice(0, 5).map((item) => ({
    color: item.fill,
    label: item.country,
  }))

  const customTooltipStyle = {
    backgroundColor: "white",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
    padding: "12px",
  }

  return (
    <div className="space-y-8">
      {/* Geography Section */}
      <section>
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
            legend={geographyChartType === "pie" ? <ChartLegend items={geographyLegend} /> : undefined}
          >
            <div className="space-y-4">
              <div className="flex gap-2">
                <Button
                  variant={geographyChartType === "bar" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setGeographyChartType("bar")}
                >
                  Bar Chart
                </Button>
                <Button
                  variant={geographyChartType === "pie" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setGeographyChartType("pie")}
                >
                  Pie Chart
                </Button>
              </div>
              <ResponsiveContainer width="100%" height={320}>
                {geographyChartType === "bar" ? (
                  <BarChart data={geographicData} margin={{ left: 20, right: 20, top: 20, bottom: 60 }}>
                    <XAxis
                      dataKey="country"
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
                      {geographicData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={geographicPieData[index].fill} />
                      ))}
                    </Bar>
                  </BarChart>
                ) : (
                  <PieChart>
                    <Pie
                      data={geographicPieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={2}
                      dataKey="mentions"
                      stroke="white"
                      strokeWidth={2}
                      label={({ country, percent }) => `${country}: ${(percent * 100).toFixed(0)}%`}
                      labelLine={false}
                    >
                      {geographicPieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={customTooltipStyle} />
                  </PieChart>
                )}
              </ResponsiveContainer>
            </div>
          </ModernChartContainer>
        </div>
      </section>
    </div>
  )
}
