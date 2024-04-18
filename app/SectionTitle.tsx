import { Silkscreen } from 'next/font/google';
const font = Silkscreen({ weight: "400", subsets: ['latin'] });

interface SectionTitleProps {
  children: React.ReactNode
}

export const SectionTitle = ({children}: SectionTitleProps) => {
  return (
    <h2 className={`mb-8 text-5xl font-bold text-blue-900 ${font.className}`}>
      {children}
    </h2>
  )
}

export default SectionTitle