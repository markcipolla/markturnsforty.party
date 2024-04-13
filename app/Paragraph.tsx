import { DM_Serif_Display } from 'next/font/google';
const font = DM_Serif_Display({ weight: "400", subsets: ['latin'] });

interface ParagraphProps {
  children: React.ReactNode
  className?: string
}

export const Paragraph = ({children, className}: ParagraphProps) => {
  return (
    <p className={`py-4 leading-6 text-xl ${font.className}`}>
      {children}
    </p>
  )
}

export default Paragraph