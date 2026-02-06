'use client'

import './BackgroundMedia.css'
import { useState, useEffect } from 'react'

interface BackgroundMediaProps {
  type: 'color' | 'video' | 'image'
  backgroundColor?: string
  // Desktop
  videoUrl?: string
  videoFile?: string
  imageUrl?: string
  // Mobile
  mobileVideoUrl?: string
  mobileVideoFile?: string
  mobileImageUrl?: string
}

export default function BackgroundMedia({ 
  type,
  backgroundColor,
  videoUrl, 
  videoFile, 
  imageUrl,
  mobileVideoUrl,
  mobileVideoFile,
  mobileImageUrl 
}: BackgroundMediaProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Determine which media to show
  const desktopVideoSrc = videoFile || videoUrl
  const mobileVideoSrc = mobileVideoFile || mobileVideoUrl || desktopVideoSrc
  const videoSrc = isMobile ? mobileVideoSrc : desktopVideoSrc

  const desktopImageSrc = imageUrl
  const mobileImageSrc = mobileImageUrl || desktopImageSrc
  const imageSrc = isMobile ? mobileImageSrc : desktopImageSrc

  return (
    <div 
      className="background-media"
      style={{ backgroundColor: backgroundColor || '#000000' }}
    >
      {type === 'video' && videoSrc && (
        <video
          key={videoSrc}
          className="background-media__video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
      
      {type === 'image' && imageSrc && (
        <img
          key={imageSrc}
          src={imageSrc}
          alt="Background"
          className="background-media__image"
        />
      )}
    </div>
  )
}
