import { IBM_Plex_Mono } from 'next/font/google'
import localFont from 'next/font/local'

// Google Font - IBM Plex Mono
export const ibmPlexMono = IBM_Plex_Mono({
  weight: ['500'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
})

// Local Font - Salmanazar (Medium weight for primary usage)
export const salmanazar = localFont({
  src: [
    {
      path: '../../public/fonts/SalmanazarTrial-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SalmanazarTrial-LightItalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/SalmanazarTrial-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SalmanazarTrial-Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/SalmanazarTrial-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SalmanazarTrial-MediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/SalmanazarTrial-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SalmanazarTrial-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-salmanazar',
  display: 'swap',
})
