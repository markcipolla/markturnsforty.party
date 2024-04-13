import Footer from './Footer'
import PageTitle from './PageTitle'
import Paragraph from './Paragraph'
import SectionTitle from './SectionTitle';
import RSVP from './RSVP';
import VideoBackground from './VideoBackground';

export default function Home() {
  return (
    <>
      <main className='min-h-device flex flex-col lg:flex-row '>
        <div
          className="flex min-h-device w-full overflow-hidden relative flex-col justify-end p-8 lg:p-12 bg-cover bg-center"
        >
          <VideoBackground videoUrl='/ruby.mp4' />

          <PageTitle>
            <>
              <span className='text-yellow-600'>Help us celebrate!</span>
            </>
          </PageTitle>
        </div>

        <div 
          className='border-8 border-[#312a2c] p-8 lg:min-w-[450px] lg:p-12 flex bg-contain bg-center flex-col gap-12 justify-items-stretch content-between justify-between items-stretch' 
          style={{backgroundImage: 'url(/tiles.jpg)'}}
        >
          <div className='flex flex-col'> 
            <SectionTitle>Dear family and friends,</SectionTitle>

            <Paragraph>
              What a year! We&apos;ve started a family, welcomed little Ruby and moved into our home. We couldn&apos;t have done it without you.
            </Paragraph>

            <Paragraph>
              So please join us to celebrate (albeit belatedly) Ruby&apos;s first birthday party, and while we&apos;re at it, a house warming!
            </Paragraph>
          </div>

          <div className='flex flex-col'> 
            <SectionTitle>When & Where</SectionTitle>

            <Paragraph>Sunday 19th November 2023, 12pm—4pm</Paragraph>
            <Paragraph>116 Wungan Street, Macleod</Paragraph>
            <Paragraph>There will be food and some drinks provided. No presents (unless pre-loved), your presence is plenty. </Paragraph>
            <Paragraph>You can park on-street (even with the bike lane), in the nearby side-streets (we recommend Glenmore street) or the YMCA Macleod Recreation & Fitness Centre car-park.</Paragraph>
          </div>

          <RSVP>Click here to RSVP</RSVP>
        </div>
      </main>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.9053928850058!2d145.06664007583268!3d-37.72189847199872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6461f2e63ba67%3A0x3cdac865ad1720ee!2s116%20Wungan%20St%2C%20Macleod%20VIC%203085!5e0!3m2!1sen!2sau!4v1696294402401!5m2!1sen!2sau" 
        className='w-full h-[450px]'
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <Footer>❤️ Created by Ju-Lin, Mark, Remy and Ruby</Footer>
    </>
  )
}
