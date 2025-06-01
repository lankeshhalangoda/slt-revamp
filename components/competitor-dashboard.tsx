"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CompetitorOverviewSelection from "@/components/competitor/competitor-overview-selection"
import CompetitorSentimentTopics from "@/components/competitor/competitor-sentiment-topics"
import CompetitorTimeAnalysis from "@/components/competitor/competitor-time-analysis"
import CompetitorChannelPerformance from "@/components/competitor/competitor-channel-performance"
import CompetitorGeography from "@/components/competitor/competitor-geography"
import CompetitorFeedsInfluencers from "@/components/competitor/competitor-feeds-influencers"

interface CompetitorDashboardProps {
  timeRange: "hour" | "day" | "week" | "month" | "year"
}

export default function CompetitorDashboard({ timeRange }: CompetitorDashboardProps) {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="overview-selection" className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview-selection">Overview & Selection</TabsTrigger>
          <TabsTrigger value="sentiment-topics">Sentiment & Topics</TabsTrigger>
          <TabsTrigger value="time-analysis">Time Analysis</TabsTrigger>
          <TabsTrigger value="channel-performance">Channel Performance</TabsTrigger>
          <TabsTrigger value="geography">Geography</TabsTrigger>
          <TabsTrigger value="feeds-influencers">Feeds & Influencers</TabsTrigger>
        </TabsList>

        <TabsContent value="overview-selection" className="mt-6">
          <CompetitorOverviewSelection timeRange={timeRange} />
        </TabsContent>

        <TabsContent value="sentiment-topics" className="mt-6">
          <CompetitorSentimentTopics timeRange={timeRange} />
        </TabsContent>

        <TabsContent value="time-analysis" className="mt-6">
          <CompetitorTimeAnalysis timeRange={timeRange} />
        </TabsContent>

        <TabsContent value="channel-performance" className="mt-6">
          <CompetitorChannelPerformance timeRange={timeRange} />
        </TabsContent>

        <TabsContent value="geography" className="mt-6">
          <CompetitorGeography timeRange={timeRange} />
        </TabsContent>

        <TabsContent value="feeds-influencers" className="mt-6">
          <CompetitorFeedsInfluencers timeRange={timeRange} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
