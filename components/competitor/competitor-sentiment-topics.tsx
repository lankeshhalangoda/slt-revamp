"use client"

import SentimentAnalysis from "@/components/sentiment-analysis"
import TopicsAnalysis from "@/components/topics-analysis"
import WordCloud from "@/components/word-cloud"

interface CompetitorSentimentTopicsProps {
  timeRange: "hour" | "day" | "week" | "month" | "year"
}

export default function CompetitorSentimentTopics({ timeRange }: CompetitorSentimentTopicsProps) {
  return (
    <div className="space-y-8">
      <SentimentAnalysis timeRange={timeRange} type="competitor" />
      <TopicsAnalysis timeRange={timeRange} type="competitor" />
      <WordCloud type="competitor" />
    </div>
  )
}
