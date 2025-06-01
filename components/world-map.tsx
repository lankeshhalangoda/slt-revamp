"use client"

interface WorldMapProps {
  data: Array<{
    country: string
    mentions: number
    lat: number
    lng: number
  }>
}

export default function WorldMap({ data }: WorldMapProps) {
  // Simple world map representation using CSS and positioning
  // In a real application, you would use libraries like react-simple-maps, @react-google-maps/api, or leaflet

  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-lg border bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Simplified world map using CSS shapes and absolute positioning */}
      <div className="absolute inset-0">
        {/* Continents as simplified shapes */}
        <div
          className="absolute top-16 left-12 w-32 h-20 bg-green-200 rounded-2xl transform -rotate-12"
          title="North America"
        />
        <div
          className="absolute top-32 left-28 w-16 h-32 bg-green-200 rounded-2xl transform rotate-12"
          title="South America"
        />
        <div className="absolute top-14 left-48 w-20 h-16 bg-green-200 rounded-xl" title="Europe" />
        <div className="absolute top-20 left-52 w-24 h-28 bg-green-200 rounded-2xl" title="Africa" />
        <div className="absolute top-12 left-72 w-40 h-24 bg-green-200 rounded-3xl transform -rotate-6" title="Asia" />
        <div className="absolute top-44 left-84 w-20 h-12 bg-green-200 rounded-xl" title="Australia" />
      </div>

      {/* Data points */}
      {data.map((point, index) => {
        const size = Math.max(8, (point.mentions / Math.max(...data.map((d) => d.mentions))) * 20)
        // Simple positioning based on rough geographic locations
        const positions: { [key: string]: { left: string; top: string } } = {
          "United States": { left: "20%", top: "35%" },
          "United Kingdom": { left: "48%", top: "25%" },
          Canada: { left: "18%", top: "20%" },
          Australia: { left: "85%", top: "70%" },
          Germany: { left: "52%", top: "30%" },
          France: { left: "50%", top: "35%" },
          Japan: { left: "88%", top: "40%" },
          Brazil: { left: "35%", top: "65%" },
        }

        const position = positions[point.country] || { left: "50%", top: "50%" }

        return (
          <div
            key={index}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full border-2 border-white shadow-lg hover:scale-110 transition-transform cursor-pointer"
            style={{
              left: position.left,
              top: position.top,
              width: `${size}px`,
              height: `${size}px`,
            }}
            title={`${point.country}: ${point.mentions} mentions`}
          />
        )
      })}

      <div className="absolute bottom-4 left-4 rounded-lg bg-white/90 p-3 text-xs backdrop-blur border shadow-sm">
        <div className="flex items-center gap-2 mb-1">
          <div className="h-3 w-3 rounded-full bg-blue-500"></div>
          <span className="font-medium">Mention Density</span>
        </div>
        <div className="text-gray-600">Circle size = mention volume</div>
      </div>
    </div>
  )
}
