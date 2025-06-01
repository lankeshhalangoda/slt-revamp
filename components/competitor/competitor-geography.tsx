"use client"

import { Globe } from "lucide-react"
import SectionHeader from "@/components/section-header"
import ChartContainer from "@/components/chart-container"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell, PieChart, Pie } from "recharts"

interface CompetitorGeographyProps {
  timeRange: "hour" | "day" | "week" | "month" | "year"
}

export default function CompetitorGeography({ timeRange }: CompetitorGeographyProps) {
  // Mock geographic data for competitors
  const geographicComparison = [
    { country: "United States", yourBrand: 450, competitorA: 380, competitorB: 320, competitorC: 280 },
    { country: "United Kingdom", yourBrand: 280, competitorA: 250, competitorB: 220, competitorC: 180 },
    { country: "Canada", yourBrand: 220, competitorA: 180, competitorB: 160, competitorC: 140 },
    { country: "Australia", yourBrand: 180, competitorA: 160, competitorB: 140, competitorC: 120 },
    { country: "Germany", yourBrand: 160, competitorA: 140, competitorB: 180, competitorC: 100 },
    { country: "France", yourBrand: 140, competitorA: 120, competitorB: 160, competitorC: 90 },
    { country: "Japan", yourBrand: 120, competitorA: 100, competitorB: 80, competitorC: 110 },
    { country: "Brazil", yourBrand: 100, competitorA: 90, competitorB: 70, competitorC: 85 },
  ]

  const marketShare = [
    { region: "North America", yourBrand: 28, competitorA: 22, competitorB: 18, competitorC: 15, others: 17 },
    { region: "Europe", yourBrand: 25, competitorA: 20, competitorB: 22, competitorC: 12, others: 21 },
    { region: "Asia Pacific", yourBrand: 18, competitorA: 15, competitorB: 12, competitorC: 20, others: 35 },
    { region: "Latin America", yourBrand: 22, competitorA: 18, competitorB: 15, competitorC: 16, others: 29 },
  ]

  const regionalTrends = [
    { month: "Jan", "North America": 850, Europe: 620, "Asia Pacific": 380, "Latin America": 240 },
    { month: "Feb", "North America": 920, Europe: 680, "Asia Pacific": 420, "Latin America": 280 },
    { month: "Mar", "North America": 1100, Europe: 750, "Asia Pacific": 480, "Latin America": 320 },
    { month: "Apr", "North America": 980, Europe: 720, "Asia Pacific": 450, "Latin America": 300 },
    { month: "May", "North America": 1200, Europe: 820, "Asia Pacific": 520, "Latin America": 380 },
    { month: "Jun", "North America": 1050, Europe: 780, "Asia Pacific": 490, "Latin America": 350 },
  ]

  const competitorRegionalDistribution = [
    { region: "North America", value: 45, fill: "#017ABF" },
    { region: "Europe", value: 30, fill: "#E91E63" },
    { region: "Asia Pacific", value: 15, fill: "#4CAF50" },
    { region: "Latin America", value: 7, fill: "#FF9800" },
    { region: "Others", value: 3, fill: "#9E9E9E" },
  ]

  return (
    <div className="space-y-8">
      <SectionHeader
        title="Geographic Analysis"
        description="Compare competitor performance across different regions"
        icon={<Globe className="h-5 w-5" />}
      />

      {/* Geographic Comparison */}
      <div className="grid gap-6 md:grid-cols-2">
        <ChartContainer title="Mentions by Country" tooltip="Compare mention volumes by country">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={geographicComparison} layout="vertical">
              <XAxis type="number" />
              <YAxis type="category" dataKey="country" width={100} />
              <Tooltip />
              <Bar dataKey="yourBrand" fill="#017ABF" name="Your Brand" />
              <Bar dataKey="competitorA" fill="#E91E63" name="Competitor A" />
              <Bar dataKey="competitorB" fill="#4CAF50" name="Competitor B" />
              <Bar dataKey="competitorC" fill="#FF9800" name="Competitor C" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>

        <ChartContainer title="Regional Market Share" tooltip="Market share distribution by region">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={marketShare}>
              <XAxis dataKey="region" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="yourBrand" fill="#017ABF" name="Your Brand" />
              <Bar dataKey="competitorA" fill="#E91E63" name="Competitor A" />
              <Bar dataKey="competitorB" fill="#4CAF50" name="Competitor B" />
              <Bar dataKey="competitorC" fill="#FF9800" name="Competitor C" />
              <Bar dataKey="others" fill="#9E9E9E" name="Others" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>

      {/* Regional Trends */}
      <ChartContainer title="Regional Trends Over Time" tooltip="How mentions have changed by region over time">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={regionalTrends}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="North America" stackId="a" fill="#017ABF" />
            <Bar dataKey="Europe" stackId="a" fill="#E91E63" />
            <Bar dataKey="Asia Pacific" stackId="a" fill="#4CAF50" />
            <Bar dataKey="Latin America" stackId="a" fill="#FF9800" />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>

      {/* Competitor Regional Focus */}
      <ChartContainer title="Competitor A Regional Distribution" tooltip="Where Competitor A is most active">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={competitorRegionalDistribution}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
              label={({ region, percent }) => `${region}: ${(percent * 100).toFixed(0)}%`}
            >
              {competitorRegionalDistribution.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
}
