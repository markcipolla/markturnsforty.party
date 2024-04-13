import { Londrina_Outline } from 'next/font/google';
const font = Londrina_Outline({ weight: "400", subsets: ['latin'] });

interface SectionTitleProps {
  children: React.ReactNode
}

export const SectionTitle = ({children}: SectionTitleProps) => {
  return (
    <h2 className={`mb-8 text-5xl text-blue-800 ${font.className}`}>
      <strong className='relative -left-5 z-10'>
        {children}
      </strong>
    </h2>
  )
}

export default SectionTitle