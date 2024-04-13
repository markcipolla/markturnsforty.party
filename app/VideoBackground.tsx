interface VideoBackgroundProps {
  videoUrl: string
}

export const VideoBackground = ({videoUrl}: VideoBackgroundProps) => {
  return (
    <video 
      autoPlay 
      playsInline
      muted 
      loop
      className='object-cover -translate-y-2/4 -translate-x-2/4 h-full w-full absolute top-[50%] left-[50%]'>
      <source src={videoUrl} />
    </video>
  )
}

export default VideoBackground