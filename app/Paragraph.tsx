import { Enriqueta } from 'next/font/google';
const font = Enriqueta({ weight: "400", subsets: ['latin'] });

interface ParagraphProps {
  children: React.ReactNode
  className?: string
}

export const Paragraph = ({children, className}: ParagraphProps) => {
  return (
    <div 
      className='border-l-8 border-white -left-2 py-[6px] relative' 
      style={{borderLeftWidth: '36px'}}
    >
      <p className={`pt-[5px] pb-[8px] leading-6 bg-white inline text-xl ${font.className}`}>
        <strong className={`relative -left-5 z-10 ${className}`}>
          {children}
        </strong>
      </p>
    </div>
  )
}

export default Paragraph