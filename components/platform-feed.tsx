"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Heart, Share2 } from "lucide-react"
import { ChannelIcon, getChannelColor } from "@/components/channel-icons"

interface PlatformFeedProps {
  platform: string
  sentiment: "all" | "positive" | "negative" | "neutral"
  type: "brand" | "competitor"
  layout?: "grid" | "list"
}

interface Post {
  id: string
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

export default function PlatformFeed({ platform, sentiment, type, layout = "grid" }: PlatformFeedProps) {
  // Mock data with real avatars
  const posts: Post[] = [
    {
      id: "1",
      author: {
        name: "Sarah Johnson",
        handle: "@sarahjohnson",
        avatar: "/placeholder.svg?height=40&width=40&text=SJ",
      },
      content: `Amazing experience with the new ${type === "brand" ? "product" : "competitor product"}! The features are incredible and the design is so intuitive. Highly recommend!`,
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
      author: {
        name: "Michael Chen",
        handle: "@michaelchen",
        avatar: "/placeholder.svg?height=40&width=40&text=MC",
      },
      content: `Had some issues with the latest update. The app keeps crashing and it's really frustrating. Hope they fix this soon.`,
      date: "5 hours ago",
      engagement: {
        likes: 23,
        comments: 28,
        shares: 5,
      },
      sentiment: "negative",
    },
    {
      id: "3",
      author: {
        name: "Alex Rodriguez",
        handle: "@alexrodriguez",
        avatar: "/placeholder.svg?height=40&width=40&text=AR",
      },
      content: `Testing out the new features. So far, it's working as expected. Will post a detailed review after using it for a week.`,
      date: "1 day ago",
      engagement: {
        likes: 67,
        comments: 15,
        shares: 12,
      },
      sentiment: "neutral",
    },
    {
      id: "4",
      author: {
        name: "Emma Wilson",
        handle: "@emmawilson",
        avatar: "/placeholder.svg?height=40&width=40&text=EW",
      },
      content: `Absolutely love the customer service! They responded within minutes and solved my problem immediately. This is how you do business right!`,
      date: "3 hours ago",
      engagement: {
        likes: 89,
        comments: 24,
        shares: 18,
      },
      sentiment: "positive",
    },
    {
      id: "5",
      author: {
        name: "David Thompson",
        handle: "@davidthompson",
        avatar: "/placeholder.svg?height=40&width=40&text=DT",
      },
      content: `The pricing seems a bit high compared to competitors. Not sure if the extra features justify the cost difference.`,
      date: "6 hours ago",
      engagement: {
        likes: 34,
        comments: 42,
        shares: 7,
      },
      sentiment: "negative",
    },
    {
      id: "6",
      author: {
        name: "Lisa Park",
        handle: "@lisapark",
        avatar: "/placeholder.svg?height=40&width=40&text=LP",
      },
      content: `Just received my order. Packaging looks good, product seems fine. Will update after I've had time to test it properly.`,
      date: "8 hours ago",
      engagement: {
        likes: 56,
        comments: 8,
        shares: 14,
      },
      sentiment: "neutral",
    },
    {
      id: "7",
      author: {
        name: "James Miller",
        handle: "@jamesmiller",
        avatar: "/placeholder.svg?height=40&width=40&text=JM",
      },
      content: `Outstanding product quality! Been using it for months now and it still performs like new. Definitely worth the investment.`,
      date: "4 hours ago",
      engagement: {
        likes: 78,
        comments: 19,
        shares: 25,
      },
      sentiment: "positive",
    },
    {
      id: "8",
      author: {
        name: "Rachel Green",
        handle: "@rachelgreen",
        avatar: "/placeholder.svg?height=40&width=40&text=RG",
      },
      content: `The website interface could use some improvements. It's not very user-friendly and takes too long to load pages.`,
      date: "7 hours ago",
      engagement: {
        likes: 41,
        comments: 33,
        shares: 9,
      },
      sentiment: "negative",
    },
    {
      id: "9",
      author: {
        name: "Tom Anderson",
        handle: "@tomanderson",
        avatar: "/placeholder.svg?height=40&width=40&text=TA",
      },
      content: `Decent product overall. Has its pros and cons. The features work well but the design could be more modern.`,
      date: "12 hours ago",
      engagement: {
        likes: 52,
        comments: 16,
        shares: 11,
      },
      sentiment: "neutral",
    },
    {
      id: "10",
      author: {
        name: "Sophie Brown",
        handle: "@sophiebrown",
        avatar: "/placeholder.svg?height=40&width=40&text=SB",
      },
      content: `Incredible innovation! This product has completely changed how I work. The team behind this deserves all the recognition.`,
      date: "1 day ago",
      engagement: {
        likes: 156,
        comments: 47,
        shares: 38,
      },
      sentiment: "positive",
    },
  ].filter((post) => sentiment === "all" || post.sentiment === sentiment)

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

  const gridClass = layout === "grid" ? "grid gap-4 md:grid-cols-2" : "space-y-4"

  return (
    <div className={gridClass}>
      {posts.length === 0 ? (
        <Card className="md:col-span-2">
          <CardContent className="flex h-32 items-center justify-center">
            <p className="text-sm text-muted-foreground">
              No {sentiment} posts found for {platform}
            </p>
          </CardContent>
        </Card>
      ) : (
        posts.map((post) => (
          <Card key={post.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-start gap-4 pb-4 pt-6">
              <Avatar className="h-12 w-12 flex-shrink-0">
                <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <CardTitle className="text-base font-semibold truncate">{post.author.name}</CardTitle>
                  <Badge variant="outline" className="text-xs flex-shrink-0">
                    {post.author.handle}
                  </Badge>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <Badge
                    variant="outline"
                    className="text-xs flex items-center gap-1 text-white border-0"
                    style={{ backgroundColor: getChannelColor(platform) }}
                  >
                    <ChannelIcon channel={platform} className="h-3 w-3" />
                    {platform.charAt(0).toUpperCase() + platform.slice(1)}
                  </Badge>
                  <span className="text-muted-foreground">{post.date}</span>
                  <Badge className={`${getSentimentColor(post.sentiment)} text-xs flex-shrink-0`}>
                    {post.sentiment.charAt(0).toUpperCase() + post.sentiment.slice(1)}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <p className="text-sm mb-6 leading-relaxed text-gray-700">{post.content}</p>
              <div className="flex items-center gap-6 text-xs text-muted-foreground border-t pt-4">
                <div className="flex items-center gap-2 hover:text-red-500 transition-colors cursor-pointer">
                  <Heart className="h-4 w-4" />
                  <span className="font-medium">{post.engagement.likes}</span>
                </div>
                <div className="flex items-center gap-2 hover:text-blue-500 transition-colors cursor-pointer">
                  <MessageSquare className="h-4 w-4" />
                  <span className="font-medium">{post.engagement.comments}</span>
                </div>
                <div className="flex items-center gap-2 hover:text-green-500 transition-colors cursor-pointer">
                  <Share2 className="h-4 w-4" />
                  <span className="font-medium">{post.engagement.shares}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  )
}
