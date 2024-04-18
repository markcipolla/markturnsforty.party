import { FontHead } from "./FontHead"

interface PageTitleProps {
  children: React.ReactNode
}

export const PageTitle = ({children}: PageTitleProps) => {
  return (
    <div 
      className='border-l-8 border-white -left-2 pt-[9px] pb-[16px] relative' 
      style={{borderLeftWidth: '36px'}}
    >
      <h1 className={`text-6xl leading-none pb-[8px] bg-white inline ${FontHead.className}`}>
        <strong className='relative -left-5 z-10'>
          {children}
        </strong>
      </h1>
    </div>
  )
}

export default PageTitle