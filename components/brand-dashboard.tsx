"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BrandOverview from "@/components/brand/brand-overview"
import BrandTimeAnalysis from "@/components/brand/brand-time-analysis"
import BrandSentimentTopics from "@/components/brand/brand-sentiment-topics"
import BrandGeographyChannels from "@/components/brand/brand-geography-channels"
import BrandEngagementDetails from "@/components/brand/brand-engagement-details"
import BrandFeedsInfluencers from "@/components/brand/brand-feeds-influencers"
import BrandMediaWall from "@/components/brand/brand-media-wall"

interface BrandDashboardProps {
  timeRange: "hour" | "day" | "week" | "month" | "year"
}

export default function BrandDashboard({ timeRange }: BrandDashboardProps) {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="flex w-full border-b border-border bg-transparent p-0 mb-6 rounded-none">
          <TabsTrigger
            value="overview"
            className="flex items-center gap-2 border-b-2 border-transparent px-4 py-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-600 rounded-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-layout-dashboard"
            >
              <rect width="7" height="9" x="3" y="3" rx="1" />
              <rect width="7" height="5" x="14" y="3" rx="1" />
              <rect width="7" height="9" x="14" y="12" rx="1" />
              <rect width="7" height="5" x="3" y="16" rx="1" />
            </svg>
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="time-analysis"
            className="flex items-center gap-2 border-b-2 border-transparent px-4 py-2 data-[state=active]:border-green-500 data-[state=active]:text-green-600 rounded-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-clock"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Time Analysis
          </TabsTrigger>
          <TabsTrigger
            value="sentiment-topics"
            className="flex items-center gap-2 border-b-2 border-transparent px-4 py-2 data-[state=active]:border-yellow-500 data-[state=active]:text-yellow-600 rounded-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-smile"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 14s1.5 2 4 2 4-2 4-2" />
              <line x1="9" x2="9.01" y1="9" y2="9" />
              <line x1="15" x2="15.01" y1="9" y2="9" />
            </svg>
            Sentiment & Topics
          </TabsTrigger>
          <TabsTrigger
            value="geography-channels"
            className="flex items-center gap-2 border-b-2 border-transparent px-4 py-2 data-[state=active]:border-purple-500 data-[state=active]:text-purple-600 rounded-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-globe"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" x2="22" y1="12" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            Geography & Demographics
          </TabsTrigger>
          <TabsTrigger
            value="engagement"
            className="flex items-center gap-2 border-b-2 border-transparent px-4 py-2 data-[state=active]:border-red-500 data-[state=active]:text-red-600 rounded-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-heart"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            Engagement Details
          </TabsTrigger>
          <TabsTrigger
            value="feeds-influencers"
            className="flex items-center gap-2 border-b-2 border-transparent px-4 py-2 data-[state=active]:border-indigo-500 data-[state=active]:text-indigo-600 rounded-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-message-square"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Feeds & Influencers
          </TabsTrigger>
          <TabsTrigger
            value="media-wall"
            className="flex items-center gap-2 border-b-2 border-transparent px-4 py-2 data-[state=active]:border-pink-500 data-[state=active]:text-pink-600 rounded-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-grid"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <line x1="3" x2="21" y1="9" y2="9" />
              <line x1="3" x2="21" y1="15" y2="15" />
              <line x1="9" x2="9" y1="3" y2="21" />
              <line x1="15" x2="15" y1="3" y2="21" />
            </svg>
            Media Wall
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-0">
          <BrandOverview timeRange={timeRange} />
        </TabsContent>

        <TabsContent value="time-analysis" className="mt-0">
          <BrandTimeAnalysis timeRange={timeRange} />
        </TabsContent>

        <TabsContent value="sentiment-topics" className="mt-0">
          <BrandSentimentTopics timeRange={timeRange} />
        </TabsContent>

        <TabsContent value="geography-channels" className="mt-0">
          <BrandGeographyChannels timeRange={timeRange} />
        </TabsContent>

        <TabsContent value="engagement" className="mt-0">
          <BrandEngagementDetails timeRange={timeRange} />
        </TabsContent>

        <TabsContent value="feeds-influencers" className="mt-0">
          <BrandFeedsInfluencers timeRange={timeRange} />
        </TabsContent>

        <TabsContent value="media-wall" className="mt-0">
          <BrandMediaWall timeRange={timeRange} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
