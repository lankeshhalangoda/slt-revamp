"use client"

import { useState } from "react"
import {
  MessageSquare,
  Users,
  Globe,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionHeader from "@/components/section-header"
import PlatformFeed from "@/components/platform-feed"
import PlatformInfluencers from "@/components/platform-influencers"
import { getChannelColor } from "@/components/channel-icons"

interface BrandFeedsInfluencersProps {
  timeRange: "hour" | "day" | "week" | "month" | "year"
}

export default function BrandFeedsInfluencers({ timeRange }: BrandFeedsInfluencersProps) {
  const [sentimentFilter, setSentimentFilter] = useState<"all" | "positive" | "negative" | "neutral">("all")
  const [activeTab, setActiveTab] = useState("all") // ✅ Start with "all" selected

  const platforms = [
    { id: "all", name: "All", icon: <Globe className="h-4 w-4" /> }, // ✅ NEW platform
    { id: "web", name: "Web", icon: <Globe className="h-4 w-4" /> },
    { id: "twitter", name: "Twitter", icon: <Twitter className="h-4 w-4" /> },
    { id: "facebook", name: "Facebook", icon: <Facebook className="h-4 w-4" /> },
    { id: "instagram", name: "Instagram", icon: <Instagram className="h-4 w-4" /> },
    { id: "youtube", name: "YouTube", icon: <Youtube className="h-4 w-4" /> },
    { id: "linkedin", name: "LinkedIn", icon: <Linkedin className="h-4 w-4" /> },
    { id: "other", name: "Other", icon: <Globe className="h-4 w-4" /> },
  ]

  return (
    <div className="space-y-8">
      <SectionHeader
        title="Feeds & Influencers"
        description="Platform-specific feeds and influencer analysis with sentiment filtering"
        icon={<MessageSquare className="h-5 w-5" />}
      />

      {/* Sentiment Filter */}
      <div className="flex gap-2">
        {["all", "positive", "negative", "neutral"].map((sentiment) => (
          <Button
            key={sentiment}
            variant={sentimentFilter === sentiment ? "default" : "outline"}
            size="sm"
            onClick={() => setSentimentFilter(sentiment as typeof sentimentFilter)}
          >
            {sentiment.charAt(0).toUpperCase() + sentiment.slice(1)}
          </Button>
        ))}
      </div>

      {/* Platform Tabs */}
      <div className="border-b">
        <div className="flex space-x-8 overflow-x-auto">
          {platforms.map((platform) => (
            <button
              key={platform.id}
              onClick={() => setActiveTab(platform.id)}
              className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeTab === platform.id
                  ? ""
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300"
              }`}
              style={
                activeTab === platform.id
                  ? {
                      borderBottomColor: getChannelColor(platform.id),
                      color: getChannelColor(platform.id),
                    }
                  : {}
              }
            >
              {platform.icon}
              <span>{platform.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content for active tab */}
      <div className="space-y-8">
        {/* Feed Section - Full Width */}
        <div>
          <SectionHeader
            title={`${platforms.find((p) => p.id === activeTab)?.name ?? "All"} Feed`}
            description={`Recent ${platforms.find((p) => p.id === activeTab)?.name ?? "All"} mentions with ${sentimentFilter} sentiment`}
            icon={<MessageSquare className="h-4 w-4" />}
          />
          <PlatformFeed platform={activeTab} sentiment={sentimentFilter} type="brand" layout="grid" />
        </div>

        {/* Influencers Section - Full Width */}
        <div>
          <SectionHeader
            title={`${platforms.find((p) => p.id === activeTab)?.name ?? "All"} Influencers`}
            description={`Key influencers on ${platforms.find((p) => p.id === activeTab)?.name ?? "All"} with ${sentimentFilter} sentiment`}
            icon={<Users className="h-4 w-4" />}
          />
          <PlatformInfluencers platform={activeTab} sentiment={sentimentFilter} type="brand" />
        </div>
      </div>
    </div>
  )
}
