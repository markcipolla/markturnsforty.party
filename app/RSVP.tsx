import { Enriqueta } from 'next/font/google';
const font = Enriqueta({ weight: "400", subsets: ['latin'] });

interface RSVPProps {
  children: React.ReactNode
}

export const RSVP = ({children}: RSVPProps) => {
  return (
    <a 
      className={`-mx-2 mt-2 text-2xl text-white bold shadow block p-4 rounded border-8 border-blue-200 bg-blue-600 hover:bg-blue-500 text-center ${font.className}`}
      href="https://docs.google.com/forms/d/e/1FAIpQLSfg5s9Nszmw4ty_MGUdShwLBhmmboFGzZGCn8-SQSnfMyy6LA/viewform?usp=sf_link"
    >{children}</a>
  )
}

export default RSVP