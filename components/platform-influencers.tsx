"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ChannelIcon, getChannelColor } from "@/components/channel-icons"

interface PlatformInfluencersProps {
  platform: string
  sentiment: "all" | "positive" | "negative" | "neutral"
  type: "brand" | "competitor"
}

interface Influencer {
  id: string
  name: string
  handle: string
  avatar: string
  engagement: {
    followers: number
    posts: number
    engagement: number
  }
  sentiment: "positive" | "negative" | "neutral"
}

export default function PlatformInfluencers({ platform, sentiment, type }: PlatformInfluencersProps) {
  // Mock data with real avatars
  const influencers: Influencer[] = [
    {
      id: "1",
      name: "Tech Influencer Sarah",
      handle: "@techsarah",
      avatar: "/placeholder.svg?height=40&width=40&text=TS",
      engagement: {
        followers: 125000,
        posts: 12,
        engagement: 8.5,
      },
      sentiment: "positive",
    },
    {
      id: "2",
      name: "Industry Expert Mike",
      handle: "@industryexpert",
      avatar: "/placeholder.svg?height=40&width=40&text=IE",
      engagement: {
        followers: 85000,
        posts: 8,
        engagement: 6.2,
      },
      sentiment: "neutral",
    },
    {
      id: "3",
      name: "Product Reviewer Alex",
      handle: "@productreviewer",
      avatar: "/placeholder.svg?height=40&width=40&text=PR",
      engagement: {
        followers: 250000,
        posts: 5,
        engagement: 9.1,
      },
      sentiment: "positive",
    },
    {
      id: "4",
      name: "Critical Voice Emma",
      handle: "@criticvoice",
      avatar: "/placeholder.svg?height=40&width=40&text=CV",
      engagement: {
        followers: 75000,
        posts: 18,
        engagement: 7.3,
      },
      sentiment: "negative",
    },
    {
      id: "5",
      name: "Business Analyst David",
      handle: "@bizanalyst",
      avatar: "/placeholder.svg?height=40&width=40&text=BA",
      engagement: {
        followers: 95000,
        posts: 15,
        engagement: 5.8,
      },
      sentiment: "neutral",
    },
    {
      id: "6",
      name: "Content Creator Lisa",
      handle: "@contentlisa",
      avatar: "/placeholder.svg?height=40&width=40&text=CC",
      engagement: {
        followers: 180000,
        posts: 22,
        engagement: 8.9,
      },
      sentiment: "positive",
    },
    {
      id: "7",
      name: "Digital Marketing Pro",
      handle: "@digitalmarketer",
      avatar: "/placeholder.svg?height=40&width=40&text=DM",
      engagement: {
        followers: 145000,
        posts: 28,
        engagement: 7.8,
      },
      sentiment: "positive",
    },
    {
      id: "8",
      name: "Tech Critic John",
      handle: "@techcritic",
      avatar: "/placeholder.svg?height=40&width=40&text=TC",
      engagement: {
        followers: 92000,
        posts: 14,
        engagement: 6.5,
      },
      sentiment: "negative",
    },
    {
      id: "9",
      name: "Innovation Blogger",
      handle: "@innovationblog",
      avatar: "/placeholder.svg?height=40&width=40&text=IB",
      engagement: {
        followers: 110000,
        posts: 19,
        engagement: 7.2,
      },
      sentiment: "neutral",
    },
    {
      id: "10",
      name: "Brand Advocate Maria",
      handle: "@brandadvocate",
      avatar: "/placeholder.svg?height=40&width=40&text=BM",
      engagement: {
        followers: 165000,
        posts: 31,
        engagement: 8.4,
      },
      sentiment: "positive",
    },
  ].filter((influencer) => sentiment === "all" || influencer.sentiment === sentiment)

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "bg-green-500 text-white"
      case "negative":
        return "bg-red-500 text-white"
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
    return num.toString()
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {influencers.length === 0 ? (
        <Card className="md:col-span-2 lg:col-span-3">
          <CardContent className="flex h-32 items-center justify-center">
            <p className="text-sm text-muted-foreground">
              No {sentiment} influencers found for {platform}
            </p>
          </CardContent>
        </Card>
      ) : (
        influencers.map((influencer) => (
          <Card key={influencer.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4 pb-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src={influencer.avatar || "/placeholder.svg"} alt={influencer.name} />
                <AvatarFallback>{influencer.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col flex-1">
                <div className="flex items-center gap-2">
                  <CardTitle className="text-sm font-medium">{influencer.name}</CardTitle>
                </div>
                <Badge variant="outline" className="text-xs w-fit">
                  {influencer.handle}
                </Badge>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                  <Badge
                    variant="outline"
                    className="text-xs flex items-center gap-1 text-white border-0"
                    style={{ backgroundColor: getChannelColor(platform) }}
                  >
                    <ChannelIcon channel={platform} className="h-3 w-3" />
                    {platform.charAt(0).toUpperCase() + platform.slice(1)}
                  </Badge>
                  <Badge className={`${getSentimentColor(influencer.sentiment)} text-xs`}>
                    {influencer.sentiment.charAt(0).toUpperCase() + influencer.sentiment.slice(1)}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
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
        ))
      )}
    </div>
  )
}
