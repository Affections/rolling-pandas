// Sanity GROQ Queries

// Homepage query
export const homepageQuery = `*[_type == "homepage"][0]{
  title,
  backgroundColor,
  backgroundType,
  
  // Desktop Video
  videoSource,
  "videoFile": videoFile.asset->url,
  videoUrl,
  
  // Mobile Video
  mobileVideoSource,
  "mobileVideoFile": mobileVideoFile.asset->url,
  mobileVideoUrl,
  
  // Desktop Image
  imageSource,
  "backgroundImage": backgroundImage.asset->url,
  imageUrl,
  
  // Mobile Image
  mobileImageSource,
  "mobileBackgroundImage": mobileBackgroundImage.asset->url,
  mobileImageUrl,
  
  navigationItems,
  footerText
}`
