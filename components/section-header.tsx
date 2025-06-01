import type { ReactNode } from "react"

interface SectionHeaderProps {
  title: string
  description?: string
  icon?: ReactNode
}

export default function SectionHeader({ title, description, icon }: SectionHeaderProps) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        {icon && <div className="text-primary">{icon}</div>}
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </div>
      </div>
    </div>
  )
}
