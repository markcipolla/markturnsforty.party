import { DM_Serif_Display } from 'next/font/google';
const font = DM_Serif_Display({ weight: "400", subsets: ['latin'] });

interface ParagraphProps {
  children: React.ReactNode
  className?: string
}

export const Paragraph = ({children, className}: ParagraphProps) => {
  return (
    <p className={`pt-[5px] pb-[8px] leading-6 text-xl ${font.className}`}>
      <strong className={`relative -left-5 z-10 ${className}`}>
        {children}
      </strong>
    </p>
  )
}

export default Paragraph