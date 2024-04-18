import { FontBody } from "./FontBody"

interface ParagraphProps {
  children: React.ReactNode
  className?: string
}

export const Paragraph = ({children, className}: ParagraphProps) => {
  return (
    <p className={`py-4 leading-6 text-xl ${FontBody.className}`}>
      {children}
    </p>
  )
}

export default Paragraph