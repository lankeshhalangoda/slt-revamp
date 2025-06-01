"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface TimeFilterProps {
  value: string
  onChange: (value: any) => void
}

export default function TimeFilter({ value, onChange }: TimeFilterProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium">Time Range:</span>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder="Select time range" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="hour">Hour</SelectItem>
          <SelectItem value="day">Day</SelectItem>
          <SelectItem value="week">Week</SelectItem>
          <SelectItem value="month">Month</SelectItem>
          <SelectItem value="year">Year</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
