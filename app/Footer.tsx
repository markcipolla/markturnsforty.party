import { DM_Serif_Display } from 'next/font/google';
const font = DM_Serif_Display({ weight: "400", subsets: ['latin'] });

interface FooterProps {
  children: React.ReactNode
}

export const Footer = ({children}: FooterProps) => {
  return (
    <h2 className={`p-4 text-teal-800 text-2xl text-center ${font.className}`}>
      {children}
    </h2>

  )
}

export default Footer