"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BrandDashboard from "@/components/brand-dashboard"
import CompetitorDashboard from "@/components/competitor-dashboard"
import TimeFilter from "@/components/time-filter"

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState<"hour" | "day" | "week" | "month" | "year">("week")

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 border-b border-gray-200 bg-white shadow-sm">
        <div className="flex h-16 items-center justify-between px-6">
          <h1 className="text-2xl font-bold text-gray-900">Social Listening Tracker</h1>
          <TimeFilter value={timeRange} onChange={setTimeRange} />
        </div>
      </header>

      <main className="px-6 py-8">
        <Tabs defaultValue="brand" className="w-full">
          <TabsList className="mb-8 grid w-full max-w-md grid-cols-2 bg-white border border-gray-200 shadow-sm">
            <TabsTrigger
              value="brand"
              className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 data-[state=active]:border-blue-200"
            >
              Brand Analysis
            </TabsTrigger>
            <TabsTrigger
              value="competitor"
              className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 data-[state=active]:border-blue-200"
            >
              Competitor Analysis
            </TabsTrigger>
          </TabsList>

          <TabsContent value="brand">
            <BrandDashboard timeRange={timeRange} />
          </TabsContent>

          <TabsContent value="competitor">
            <CompetitorDashboard timeRange={timeRange} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
