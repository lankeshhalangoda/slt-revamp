import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, MessageCircle, Share } from "lucide-react"

interface SocialFeedItemProps {
  author: {
    name: string
    username: string
    avatar: string
  }
  platform: string
  content: string
  timestamp: string
  sentiment: "positive" | "negative" | "neutral"
  engagement: {
    likes: number
    comments: number
    shares: number
  }
}

export default function SocialFeedItem({
  author,
  platform,
  content,
  timestamp,
  sentiment,
  engagement,
}: SocialFeedItemProps) {
  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "bg-green-500 text-white"
      case "negative":
        return "bg-red-500 text-white"
      case "neutral":
        return "bg-yellow-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  return (
    <Card className="border border-gray-200 shadow-sm">
      <CardContent className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={author.avatar || "/placeholder.svg"} alt={author.name} />
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="font-medium text-sm">{author.name}</div>
            <div className="text-xs text-gray-500">{author.username}</div>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className="text-xs">
              {platform}
            </Badge>
            <Badge className={`${getSentimentColor(sentiment)} text-xs`}>
              {sentiment.charAt(0).toUpperCase() + sentiment.slice(1)}
            </Badge>
          </div>
        </div>
        <div className="text-sm text-gray-700 mb-3">{content}</div>
        <div className="text-xs text-gray-500 mb-3">{timestamp}</div>
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Heart className="h-3 w-3" /> {engagement.likes}
          </span>
          <span className="flex items-center gap-1">
            <MessageCircle className="h-3 w-3" /> {engagement.comments}
          </span>
          <span className="flex items-center gap-1">
            <Share className="h-3 w-3" /> {engagement.shares}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
