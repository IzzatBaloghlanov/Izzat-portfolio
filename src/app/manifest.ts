import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Izzat Baloghlanov | Frontend Developer',
    short_name: 'Izzat Portfolio',
    description: 'Frontend Developer specializing in React, TypeScript, and Next.js.',
    start_url: '/',
    display: 'standalone',
    background_color: '#09090b',
    theme_color: '#09090b',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
