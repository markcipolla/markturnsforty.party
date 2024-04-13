import { Cookie } from 'next/font/google';
const font = Cookie({ weight: "400", subsets: ['latin'] });

interface PageTitleProps {
  children: React.ReactNode
}

export const PageTitle = ({children}: PageTitleProps) => {
  return (
    <div 
      className='border-l-8 border-white -left-2 pt-[12px] pb-[13px] relative' 
      style={{borderLeftWidth: '36px'}}
    >
      <h1 className={`text-6xl md:text-7xl pt-2 pb-[9px] md:pb-[8px] bg-white inline ${font.className}`}>
        <strong className='relative -left-5 z-10'>
          {children}
        </strong>
      </h1>
    </div>
  )
}

export default PageTitle