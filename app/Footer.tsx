import { Cookie } from 'next/font/google';
const font = Cookie({ weight: "400", subsets: ['latin'] });

interface FooterProps {
  children: React.ReactNode
}

export const Footer = ({children}: FooterProps) => {
  return (
    <h2 className={`p-4 text-teal-800 text-3xl text-center ${font.className}`}>
      {children}
    </h2>

  )
}

export default Footer