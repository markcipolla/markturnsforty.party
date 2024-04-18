import Footer from './Footer'
import { Link } from './Link';
import PageTitle from './PageTitle'
import Paragraph from './Paragraph'
import RSVP from './RSVP';
import SectionTitle from './SectionTitle';
import VideoBackground from './VideoBackground';

export default function Home() {
  return (
    <>
      <main className='min-h-device flex flex-col lg:flex-row '>
        <div
          className="flex min-h-device w-full overflow-hidden relative flex-col justify-end p-8 lg:p-12 bg-cover bg-center"
        >
          <VideoBackground videoUrl='/young-to-old.mp4' />

          <PageTitle>
            <>
              <span className='text-orange-600'>Mark's turning 40!</span>
            </>
          </PageTitle>
        </div>

        <div 
          className='bg-blue-100 p-8 lg:min-w-[400px] lg:p-12 flex bg-contain bg-center flex-col gap-12 justify-items-stretch content-between justify-between items-stretch' 
        >
          <div className='flex flex-col'> 
            <SectionTitle>Dear friends & fam</SectionTitle>

            <Paragraph>
              Guess what? The big 4-0 is just around the corner, and I'm throwing a party to mark the occasion! It would be fantastic to have you join in on the fun.
            </Paragraph>
            
            <Paragraph>
              Come on over to <Link href="https://www.welcometothornbury.com/">Welcome to Thornbury</Link> for an afternoon of good vibes, laughter, and maybe a little bit of mischief. Your presence would make this celebration complete.
            </Paragraph>

            <Paragraph>
              There will be some food and drinks provided, and you can order extra from food trucks and a full menu available. No presents, just your presence. 
            </Paragraph>
            
            <Paragraph>
              They have an arcade of pinball and arcade machines, so it's like a TimeZone party, but with alcohol and adults.
            </Paragraph>

            <Paragraph>
              Kids very much welcome!
            </Paragraph>
          </div>

          <div className='flex flex-col'> 
            <SectionTitle>When & Where</SectionTitle>

            <Paragraph>
              Saturday 25th May 2024, 2pm—7pm
              <br />(and we can kick on after that if we're still standing / not in bed by then)
            </Paragraph>
            <Paragraph>
              <Link href="https://www.welcometothornbury.com/">www.welcometothornbury.com</Link><br />
              On the Deck, near the front<br />
              520 High Street, Northcote
            </Paragraph>
          </div>

          <RSVP>Click here to RSVP <br />by the 13th of May</RSVP>
        </div>
      </main>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.0909940927245!2d144.99719277627398!3d-37.764464531222785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad64483fe6674f9%3A0x90868b18a1664653!2sWelcome%20to%20Thornbury!5e0!3m2!1sen!2sau!4v1713005079394!5m2!1sen!2sau" 
        className='w-full h-[450px]'
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <Footer>❤️ Created by Mark, Ju-Lin, Remy and Ruby</Footer>
    </>
  )
}
