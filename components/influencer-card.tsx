import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface InfluencerCardProps {
  name: string
  username: string
  avatar: string
  platform: string
  followers: string
  posts: number
  engagement: string
  sentiment: "positive" | "negative" | "neutral"
}

export default function InfluencerCard({
  name,
  username,
  avatar,
  platform,
  followers,
  posts,
  engagement,
  sentiment,
}: InfluencerCardProps) {
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
          <Avatar className="h-12 w-12">
            <AvatarImage src={avatar || "/placeholder.svg"} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="font-medium text-sm">{name}</div>
            <div className="text-xs text-gray-500">{username}</div>
            <div className="flex gap-2 mt-1">
              <Badge variant="outline" className="text-xs">
                {platform}
              </Badge>
              <Badge className={`${getSentimentColor(sentiment)} text-xs`}>
                {sentiment.charAt(0).toUpperCase() + sentiment.slice(1)}
              </Badge>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="font-bold text-lg">{followers}</div>
            <div className="text-xs text-gray-500">Followers</div>
          </div>
          <div>
            <div className="font-bold text-lg">{posts}</div>
            <div className="text-xs text-gray-500">Posts</div>
          </div>
          <div>
            <div className="font-bold text-lg">{engagement}</div>
            <div className="text-xs text-gray-500">Engagement</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
