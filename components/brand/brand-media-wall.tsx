"use client"

import { useState } from "react"
import { Grid, List, ImageIcon, Video, Heart, MessageCircle, Repeat } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import SectionHeader from "@/components/section-header"
import { ChannelIcon, getChannelColor } from "@/components/channel-icons"

interface BrandMediaWallProps {
  timeRange: "hour" | "day" | "week" | "month" | "year"
}

interface MediaItem {
  id: string
  type: "image" | "video"
  platform: "twitter" | "facebook" | "instagram" | "youtube" | "linkedin"
  mediaUrl?: string
  author: {
    name: string
    avatar: string
  }
  date: string
  engagement: {
    likes: number
    comments: number
    shares: number
  }
  sentiment: "positive" | "negative" | "neutral"
}

export default function BrandMediaWall({ timeRange }: BrandMediaWallProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [filterType, setFilterType] = useState<"all" | "image" | "video">("all")

  // Mock media data - only images and videos
  const mediaItems: MediaItem[] = [
    {
      id: "1",
      type: "image",
      platform: "instagram",
      mediaUrl: "/placeholder.svg?height=300&width=300",
      author: {
        name: "Design Lover",
        avatar: "/avatars/user1.png",
      },
      date: "2 hours ago",
      engagement: { likes: 245, comments: 32, shares: 18 },
      sentiment: "positive",
    },
    {
      id: "2",
      type: "video",
      platform: "youtube",
      mediaUrl: "/placeholder.svg?height=300&width=300",
      author: {
        name: "TechReviewer Pro",
        avatar: "/avatars/user2.png",
      },
      date: "5 hours ago",
      engagement: { likes: 1200, comments: 89, shares: 156 },
      sentiment: "positive",
    },
    {
      id: "3",
      type: "image",
      platform: "facebook",
      mediaUrl: "/placeholder.svg?height=300&width=300",
      author: {
        name: "Brand Official",
        avatar: "/avatars/user3.png",
      },
      date: "1 day ago",
      engagement: { likes: 456, comments: 67, shares: 89 },
      sentiment: "positive",
    },
    {
      id: "4",
      type: "video",
      platform: "instagram",
      mediaUrl: "/placeholder.svg?height=300&width=300",
      author: {
        name: "Brand Official",
        avatar: "/avatars/user4.png",
      },
      date: "3 days ago",
      engagement: { likes: 567, comments: 123, shares: 234 },
      sentiment: "positive",
    },
    {
      id: "5",
      type: "image",
      platform: "twitter",
      mediaUrl: "/placeholder.svg?height=300&width=300",
      author: {
        name: "Tech Analyst",
        avatar: "/avatars/user5.png",
      },
      date: "2 days ago",
      engagement: { likes: 234, comments: 45, shares: 78 },
      sentiment: "neutral",
    },
    {
      id: "6",
      type: "video",
      platform: "youtube",
      mediaUrl: "/placeholder.svg?height=300&width=300",
      author: {
        name: "Happy Customer",
        avatar: "/avatars/user6.png",
      },
      date: "4 days ago",
      engagement: { likes: 890, comments: 156, shares: 203 },
      sentiment: "positive",
    },
  ]

  const filteredItems = filterType === "all" ? mediaItems : mediaItems.filter((item) => item.type === filterType)

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "image":
        return <ImageIcon className="h-4 w-4" />
      case "video":
        return <Video className="h-4 w-4" />
      default:
        return null
    }
  }

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

  return (
    <div className="space-y-6">
      <SectionHeader
        title="Media Wall"
        description="Visual collection of all brand mentions with media content"
        icon={<Grid className="h-5 w-5" />}
      />

      {/* Controls */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Tabs value={filterType} onValueChange={(v) => setFilterType(v as any)}>
          <TabsList>
            <TabsTrigger value="all">All Media</TabsTrigger>
            <TabsTrigger value="image">Images</TabsTrigger>
            <TabsTrigger value="video">Videos</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex gap-2">
          <Button variant={viewMode === "grid" ? "default" : "outline"} size="sm" onClick={() => setViewMode("grid")}>
            <Grid className="h-4 w-4" />
          </Button>
          <Button variant={viewMode === "list" ? "default" : "outline"} size="sm" onClick={() => setViewMode("list")}>
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Media Grid/List */}
      <div className={viewMode === "grid" ? "grid gap-4 md:grid-cols-2 lg:grid-cols-3" : "space-y-4"}>
        {filteredItems.map((item) => (
          <Card key={item.id} className={`hover:shadow-md transition-shadow ${viewMode === "list" ? "flex" : ""}`}>
            {item.mediaUrl && (
              <div className={viewMode === "list" ? "w-48 flex-shrink-0" : "aspect-square"}>
                <img
                  src={item.mediaUrl || "/placeholder.svg"}
                  alt="Media content"
                  className="h-full w-full object-cover rounded-t-lg"
                />
              </div>
            )}
            <CardContent className={`p-4 ${viewMode === "list" ? "flex-1" : ""}`}>
              <div className="flex items-center gap-3 mb-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={item.author.avatar || "/placeholder.svg"} alt={item.author.name} />
                  <AvatarFallback>{item.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-medium text-sm">{item.author.name}</div>
                  <div className="text-xs text-muted-foreground">{item.date}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                <Badge
                  variant="outline"
                  className="text-xs flex items-center gap-1 text-white border-0"
                  style={{ backgroundColor: getChannelColor(item.platform) }}
                >
                  <ChannelIcon channel={item.platform} className="h-3 w-3" />
                  {item.platform.charAt(0).toUpperCase() + item.platform.slice(1)}
                </Badge>
                <Badge variant="outline" className="text-xs flex items-center gap-1">
                  {getTypeIcon(item.type)}
                  <span>{item.type}</span>
                </Badge>
                <Badge className={`${getSentimentColor(item.sentiment)} text-xs`}>
                  {item.sentiment.charAt(0).toUpperCase() + item.sentiment.slice(1)}
                </Badge>
              </div>

              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Heart className="h-3 w-3" /> {item.engagement.likes.toLocaleString()}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="h-3 w-3" /> {item.engagement.comments}
                </span>
                <span className="flex items-center gap-1">
                  <Repeat className="h-3 w-3" /> {item.engagement.shares}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
