'use client'

interface VideoBackgroundProps {
  videoUrl?: string
  videoFile?: string
}

export default function VideoBackground({ videoUrl, videoFile }: VideoBackgroundProps) {
  const videoSrc = videoFile || videoUrl

  if (!videoSrc) return null

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      overflow: 'hidden',
    }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  )
}

