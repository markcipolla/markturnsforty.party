import { FontHead } from "./FontHead"

interface SectionTitleProps {
  children: React.ReactNode
}

export const SectionTitle = ({children}: SectionTitleProps) => {
  return (
    <h2 className={`mb-8 text-5xl font-bold text-blue-900 ${FontHead.className}`}>
      {children}
    </h2>
  )
}

export default SectionTitle