"use client"

import SocialFeed from "@/components/social-feed"
import InfluencerList from "@/components/influencer-list"

interface CompetitorFeedsInfluencersProps {
  timeRange: "hour" | "day" | "week" | "month" | "year"
}

export default function CompetitorFeedsInfluencers({ timeRange }: CompetitorFeedsInfluencersProps) {
  return (
    <div className="space-y-8">
      <SocialFeed type="competitor" />
      <InfluencerList type="competitor" />
    </div>
  )
}
