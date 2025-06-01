"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Users } from "lucide-react"
import SectionHeader from "@/components/section-header"

interface InfluencerListProps {
  type: "brand" | "competitor"
}

interface Influencer {
  id: string
  name: string
  handle: string
  avatar: string
  platform: "twitter" | "facebook" | "instagram" | "youtube" | "linkedin"
  engagement: {
    followers: number
    posts: number
    engagement: number
  }
  sentiment: "positive" | "negative" | "neutral"
}

export default function InfluencerList({ type }: InfluencerListProps) {
  // Mock data - in a real app, this would come from an API
  const influencers: Influencer[] = [
    {
      id: "1",
      name: "Tech Influencer",
      handle: "@techinfluencer",
      avatar: "/placeholder.svg?height=40&width=40",
      platform: "twitter",
      engagement: {
        followers: 125000,
        posts: 12,
        engagement: 8.5,
      },
      sentiment: "positive",
    },
    {
      id: "2",
      name: "Industry Expert",
      handle: "@industryexpert",
      avatar: "/placeholder.svg?height=40&width=40",
      platform: "linkedin",
      engagement: {
        followers: 85000,
        posts: 8,
        engagement: 6.2,
      },
      sentiment: "neutral",
    },
    {
      id: "3",
      name: "Product Reviewer",
      handle: "@productreviewer",
      avatar: "/placeholder.svg?height=40&width=40",
      platform: "youtube",
      engagement: {
        followers: 250000,
        posts: 5,
        engagement: 9.1,
      },
      sentiment: "positive",
    },
    {
      id: "4",
      name: "Critic Voice",
      handle: "@criticvoice",
      avatar: "/placeholder.svg?height=40&width=40",
      platform: "twitter",
      engagement: {
        followers: 75000,
        posts: 18,
        engagement: 7.3,
      },
      sentiment: "negative",
    },
  ]

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case "twitter":
        return "bg-twitter text-white"
      case "facebook":
        return "bg-facebook text-white"
      case "instagram":
        return "bg-instagram text-white"
      case "youtube":
        return "bg-youtube text-white"
      case "linkedin":
        return "bg-linkedin text-white"
      default:
        return "bg-primary text-white"
    }
  }

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "bg-positive text-white"
      case "negative":
        return "bg-negative text-white"
      case "neutral":
        return "bg-yellow-500 text-white"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M"
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K"
    }
    return num
  }

  return (
    <div>
      <SectionHeader
        title="Key Influencers"
        description="Top influencers mentioning your brand"
        icon={<Users className="h-5 w-5" />}
      />

      <div className="grid gap-4 md:grid-cols-2">
        {influencers.map((influencer) => (
          <Card key={influencer.id}>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Avatar className="h-12 w-12">
                <AvatarImage src={influencer.avatar || "/placeholder.svg"} alt={influencer.name} />
                <AvatarFallback>{influencer.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <CardTitle className="text-sm font-medium">{influencer.name}</CardTitle>
                  <Badge variant="outline" className="text-xs">
                    {influencer.handle}
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Badge className={`${getPlatformColor(influencer.platform)} text-xs`}>
                    {influencer.platform.charAt(0).toUpperCase() + influencer.platform.slice(1)}
                  </Badge>
                  <Badge className={`${getSentimentColor(influencer.sentiment)} text-xs`}>
                    {influencer.sentiment.charAt(0).toUpperCase() + influencer.sentiment.slice(1)}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-sm font-medium">{formatNumber(influencer.engagement.followers)}</div>
                  <div className="text-xs text-muted-foreground">Followers</div>
                </div>
                <div>
                  <div className="text-sm font-medium">{influencer.engagement.posts}</div>
                  <div className="text-xs text-muted-foreground">Posts</div>
                </div>
                <div>
                  <div className="text-sm font-medium">{influencer.engagement.engagement}%</div>
                  <div className="text-xs text-muted-foreground">Engagement</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
