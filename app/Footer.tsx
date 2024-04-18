import { FontHead } from "./FontHead"

interface FooterProps {
  children: React.ReactNode
}

export const Footer = ({children}: FooterProps) => {
  return (
    <h2 className={`p-4 text-teal-800 text-1xl text-center break-keep ${FontHead.className}`}>
      {children}
    </h2>

  )
}

export default Footer