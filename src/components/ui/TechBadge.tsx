interface TechBadgeProps {
  name: string
}

export default function TechBadge({ name }: TechBadgeProps) {
  return (
    <span className="inline-block px-3 py-1 text-xs font-mono font-medium bg-neutral-100 text-neutral-600 rounded-md border border-neutral-200">
      {name}
    </span>
  )
}
