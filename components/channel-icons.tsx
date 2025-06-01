import { Twitter, Facebook, Instagram, Youtube, Linkedin, Globe, Smartphone } from "lucide-react"

interface ChannelIconProps {
  channel: string
  className?: string
}

export function ChannelIcon({ channel, className = "h-4 w-4" }: ChannelIconProps) {
  switch (channel.toLowerCase()) {
    case "twitter":
    case "x":
      return <Twitter className={className} />
    case "facebook":
      return <Facebook className={className} />
    case "instagram":
      return <Instagram className={className} />
    case "youtube":
      return <Youtube className={className} />
    case "linkedin":
      return <Linkedin className={className} />
    case "web":
      return <Globe className={className} />
    default:
      return <Smartphone className={className} />
  }
}

export function getChannelColor(channel: string): string {
  switch (channel.toLowerCase()) {
    case "twitter":
    case "x":
      return "#1DA1F2"
    case "facebook":
      return "#4267B2"
    case "instagram":
      return "#E1306C"
    case "youtube":
      return "#FF0000"
    case "linkedin":
      return "#0077B5"
    case "web":
      return "#6B7280"
    default:
      return "#9CA3AF"
  }
}
