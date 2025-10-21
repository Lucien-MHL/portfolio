type SectionHeaderProps = {
  order: number
  title: string
}

export const SectionHeader = ({ order, title }: SectionHeaderProps) => {
  return (
    <h2 className="text-lightest-slate mb-8 space-x-4 text-3xl font-bold">
      <span className="text-green font-mono">
        {order.toString().padStart(2, '0')}.
      </span>
      <span>{title}</span>
    </h2>
  )
}
