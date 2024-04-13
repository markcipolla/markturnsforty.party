import { Cookie } from 'next/font/google';
const font = Cookie({ weight: "400", subsets: ['latin'] });

interface SectionTitleProps {
  children: React.ReactNode
}

export const SectionTitle = ({children}: SectionTitleProps) => {
  return (
    <div 
      className='border-l-8 border-white -left-2 pt-[11px] mb-2 pb-[10px] relative' 
      style={{borderLeftWidth: '36px'}}
    >
      <h2 className={`py-[8px] bg-white inline text-5xl text-yellow-800 ${font.className}`}>
        <strong className='relative -left-5 z-10'>
          {children}
        </strong>
      </h2>
    </div>
  )
}

export default SectionTitle