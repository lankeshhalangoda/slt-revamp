"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Hash } from "lucide-react"
import SectionHeader from "@/components/section-header"

interface WordCloudProps {
  type: "brand" | "competitor"
}

interface WordData {
  text: string
  value: number
  sentiment: "positive" | "negative" | "neutral"
}

export default function WordCloud({ type }: WordCloudProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Mock data - in a real app, this would come from an API
  const words: WordData[] = [
    { text: "innovation", value: 64, sentiment: "positive" },
    { text: "technology", value: 58, sentiment: "positive" },
    { text: "service", value: 52, sentiment: "positive" },
    { text: "quality", value: 48, sentiment: "positive" },
    { text: "product", value: 44, sentiment: "neutral" },
    { text: "design", value: 40, sentiment: "positive" },
    { text: "customer", value: 38, sentiment: "neutral" },
    { text: "experience", value: 36, sentiment: "neutral" },
    { text: "support", value: 32, sentiment: "positive" },
    { text: "price", value: 30, sentiment: "negative" },
    { text: "expensive", value: 28, sentiment: "negative" },
    { text: "reliable", value: 26, sentiment: "positive" },
    { text: "issue", value: 24, sentiment: "negative" },
    { text: "feature", value: 22, sentiment: "positive" },
    { text: "update", value: 20, sentiment: "neutral" },
  ]

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "#4CAF50"
      case "negative":
        return "#F44336"
      case "neutral":
        return "#9E9E9E"
      default:
        return "#017ABF"
    }
  }

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = 400

    // Sort words by value (descending)
    const sortedWords = [...words].sort((a, b) => b.value - a.value)

    // Calculate positions for words
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const maxSize = 48
    const minSize = 14
    const maxValue = sortedWords[0].value
    const minValue = sortedWords[sortedWords.length - 1].value

    // Function to calculate font size based on word value
    const calculateFontSize = (value: number) => {
      return minSize + ((value - minValue) / (maxValue - minValue)) * (maxSize - minSize)
    }

    // Function to check if a new word overlaps with existing words
    const positions: Array<{ x: number; y: number; width: number; height: number }> = []
    const checkOverlap = (x: number, y: number, width: number, height: number) => {
      for (const pos of positions) {
        if (x < pos.x + pos.width && x + width > pos.x && y < pos.y + pos.height && y + height > pos.y) {
          return true
        }
      }
      return false
    }

    // Draw words
    sortedWords.forEach((word) => {
      const fontSize = calculateFontSize(word.value)
      ctx.font = `${fontSize}px Arial`
      ctx.fillStyle = getSentimentColor(word.sentiment)

      const textMetrics = ctx.measureText(word.text)
      const textWidth = textMetrics.width
      const textHeight = fontSize

      // Try to find a position for the word
      let placed = false
      let attempts = 0
      const maxAttempts = 100

      while (!placed && attempts < maxAttempts) {
        // Calculate random position within canvas
        const angle = Math.random() * 2 * Math.PI
        const radius = Math.random() * Math.min(centerX, centerY) * 0.8

        const x = centerX + radius * Math.cos(angle) - textWidth / 2
        const y = centerY + radius * Math.sin(angle) + textHeight / 2

        // Check if position is valid
        if (
          x >= 0 &&
          y >= 0 &&
          x + textWidth <= canvas.width &&
          y + textHeight <= canvas.height &&
          !checkOverlap(x, y, textWidth, textHeight)
        ) {
          ctx.fillText(word.text, x, y)
          positions.push({ x, y, width: textWidth, height: textHeight })
          placed = true
        }

        attempts++
      }

      // If we couldn't place the word after max attempts, place it anyway
      if (!placed) {
        const x = Math.random() * (canvas.width - textWidth)
        const y = Math.random() * (canvas.height - textHeight) + textHeight
        ctx.fillText(word.text, x, y)
      }
    })
  }, [words])

  return (
    <div>
      <SectionHeader
        title="Word Cloud"
        description="Most frequently mentioned words and phrases"
        icon={<Hash className="h-5 w-5" />}
      />

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Trending Words</CardTitle>
        </CardHeader>
        <CardContent>
          <canvas ref={canvasRef} className="h-[400px] w-full" />
          <div className="mt-4 flex items-center justify-center gap-4">
            <div className="flex items-center gap-1">
              <div className="h-3 w-3 rounded-full bg-positive" />
              <span className="text-xs">Positive</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-3 w-3 rounded-full bg-neutral" />
              <span className="text-xs">Neutral</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-3 w-3 rounded-full bg-negative" />
              <span className="text-xs">Negative</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
