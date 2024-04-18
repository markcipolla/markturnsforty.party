import { FontBody } from "./FontBody"

interface RSVPProps {
  children: React.ReactNode
}

export const RSVP = ({children}: RSVPProps) => {
  return (
    <a 
      className={`-mx-2 mt-2 text-2xl text-white bold shadow block p-4 rounded border-8 border-blue-200 bg-blue-600 hover:bg-blue-500 text-center ${FontBody.className}`}
      href="https://forms.gle/EdwK7jpij2x4QEAa9"
    >{children}</a>
  )
}

export default RSVP