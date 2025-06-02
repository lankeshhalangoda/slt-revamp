"use client"

import { useState } from "react"
import { Menu, X, Megaphone, Users } from "lucide-react"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import BrandDashboard from "@/components/brand-dashboard"
import CompetitorDashboard from "@/components/competitor-dashboard"
import TimeFilter from "@/components/time-filter"

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState<"hour" | "day" | "week" | "month" | "year">("week")
  const [activeTab, setActiveTab] = useState<"brand" | "competitor">("brand")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-20 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={() => setSidebarOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex flex-col gap-2 p-4">
          <button
            className={`text-left px-4 py-2 rounded hover:bg-gray-100 ${
              activeTab === "brand" ? "bg-blue-50 text-blue-700 font-semibold" : ""
            }`}
            onClick={() => {
              setActiveTab("brand")
              setSidebarOpen(false)
            }}
          >
            Brand Analysis
          </button>
          <button
            className={`text-left px-4 py-2 rounded hover:bg-gray-100 ${
              activeTab === "competitor" ? "bg-blue-50 text-blue-700 font-semibold" : ""
            }`}
            onClick={() => {
              setActiveTab("competitor")
              setSidebarOpen(false)
            }}
          >
            Competitor Analysis
          </button>
        </nav>
      </div>

      {/* Overlay when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-10 bg-black bg-opacity-25"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-gray-200 bg-white shadow-sm">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <button
              className="text-gray-700 hover:text-black focus:outline-none"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="text-2xl font-bold text-gray-900">Social Listening Tracker</h1>
          </div>
          <TimeFilter value={timeRange} onChange={setTimeRange} />
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-8">
        {/* Dynamic Page Heading with Icon */}
        <div className="flex items-center gap-3 mb-6">
          {activeTab === "brand" ? (
            <Megaphone className="h-7 w-7 text-blue-600" />
          ) : (
            <Users className="h-7 w-7 text-green-600" />
          )}
          <h2 className="text-2xl font-semibold text-gray-800">
            {activeTab === "brand" ? "Brand Analysis" : "Competitor Analysis"}
          </h2>
        </div>

        <Tabs value={activeTab} className="w-full">
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
