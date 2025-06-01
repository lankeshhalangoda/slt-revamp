"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, ThumbsUp, Share2, Twitter, Facebook, Instagram, Youtube, Linkedin } from "lucide-react"
import SectionHeader from "@/components/section-header"

interface SocialFeedProps {
  type: "brand" | "competitor"
}

interface SocialPost {
  id: string
  platform: "twitter" | "facebook" | "instagram" | "youtube" | "linkedin"
  author: {
    name: string
    handle: string
    avatar: string
  }
  content: string
  date: string
  engagement: {
    likes: number
    comments: number
    shares: number
  }
  sentiment: "positive" | "negative" | "neutral"
}

export default function SocialFeed({ type }: SocialFeedProps) {
  const [activePlatform, setActivePlatform] = useState<string>("all")

  // Mock data - in a real app, this would come from an API
  const posts: SocialPost[] = [
    {
      id: "1",
      platform: "twitter",
      author: {
        name: "John Smith",
        handle: "@johnsmith",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content:
        "Just tried the new features from @brandname and I'm impressed! The user interface is so intuitive. #greatproduct #userexperience",
      date: "2 hours ago",
      engagement: {
        likes: 45,
        comments: 12,
        shares: 8,
      },
      sentiment: "positive",
    },
    {
      id: "2",
      platform: "facebook",
      author: {
        name: "Sarah Johnson",
        handle: "sarahjohnson",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content:
        "Had an amazing customer service experience with Brand Name today. They resolved my issue in minutes! Highly recommend their support team.",
      date: "5 hours ago",
      engagement: {
        likes: 78,
        comments: 23,
        shares: 15,
      },
      sentiment: "positive",
    },
    {
      id: "3",
      platform: "instagram",
      author: {
        name: "Tech Reviewer",
        handle: "@techreviewer",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content:
        "Testing out the new product from Brand Name. So far, mixed feelings about the performance. Will post a full review soon. #productreview",
      date: "1 day ago",
      engagement: {
        likes: 120,
        comments: 45,
        shares: 12,
      },
      sentiment: "neutral",
    },
    {
      id: "4",
      platform: "twitter",
      author: {
        name: "Frustrated User",
        handle: "@angryuser",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content:
        "Second time my Brand Name app has crashed this week. Getting tired of these bugs! @brandname please fix this ASAP. #frustrated",
      date: "3 hours ago",
      engagement: {
        likes: 32,
        comments: 28,
        shares: 5,
      },
      sentiment: "negative",
    },
  ]

  const filteredPosts = activePlatform === "all" ? posts : posts.filter((post) => post.platform === activePlatform)

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "twitter":
        return <Twitter className="h-4 w-4" />
      case "facebook":
        return <Facebook className="h-4 w-4" />
      case "instagram":
        return <Instagram className="h-4 w-4" />
      case "youtube":
        return <Youtube className="h-4 w-4" />
      case "linkedin":
        return <Linkedin className="h-4 w-4" />
      default:
        return null
    }
  }

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

  return (
    <div>
      <SectionHeader
        title="Social Feeds"
        description="Recent mentions across social media platforms"
        icon={<MessageSquare className="h-5 w-5" />}
      />

      <Tabs defaultValue="all" value={activePlatform} onValueChange={setActivePlatform}>
        <TabsList className="mb-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="twitter">Twitter</TabsTrigger>
          <TabsTrigger value="facebook">Facebook</TabsTrigger>
          <TabsTrigger value="instagram">Instagram</TabsTrigger>
          <TabsTrigger value="youtube">YouTube</TabsTrigger>
          <TabsTrigger value="linkedin">LinkedIn</TabsTrigger>
        </TabsList>

        <div className="grid gap-4">
          {filteredPosts.map((post) => (
            <Card key={post.id}>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-sm font-medium">{post.author.name}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {post.author.handle}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Badge className={`${getPlatformColor(post.platform)} text-xs`}>
                      <span className="mr-1">{getPlatformIcon(post.platform)}</span>
                      {post.platform.charAt(0).toUpperCase() + post.platform.slice(1)}
                    </Badge>
                    <span>{post.date}</span>
                    <Badge className={`${getSentimentColor(post.sentiment)} text-xs`}>
                      {post.sentiment.charAt(0).toUpperCase() + post.sentiment.slice(1)}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{post.content}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="h-3 w-3" />
                    <span>{post.engagement.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageSquare className="h-3 w-3" />
                    <span>{post.engagement.comments}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Share2 className="h-3 w-3" />
                    <span>{post.engagement.shares}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Tabs>
    </div>
  )
}
