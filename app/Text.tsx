export const Text = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <div className='border-l-8 border-white -left-2 pt-3 pb-3 relative' style={{borderLeftWidth: '36px'}}>
      <h1 className="pt-2 pb-[9px] md:pb-[8px] bg-white inline">
        <strong className={`relative -left-5 z-10 ${className}`}>
          {children}
        </strong>
      </h1>
    </div>
  )
}