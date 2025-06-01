interface LegendItem {
  color: string
  label: string
}

interface ChartLegendProps {
  items: LegendItem[]
}

export default function ChartLegend({ items }: ChartLegendProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <div
            className="h-3 w-3 rounded-full shadow-sm border border-gray-200"
            style={{ backgroundColor: item.color }}
          />
          <span className="text-gray-700 font-medium">{item.label}</span>
        </div>
      ))}
    </div>
  )
}
