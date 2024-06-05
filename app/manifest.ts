import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Syed Ali Hassan's Portfolio",
    short_name: "Ali's Portfolio",
    icons: [
      { src: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/favicon/png' },
      { src: '/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    background_color: '#ffffff',
    display: 'standalone',
  };
}
