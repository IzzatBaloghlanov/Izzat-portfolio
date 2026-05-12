import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Izzat Baloghlanov - Frontend Developer';
export const size = { width: 1200, height: 630 };

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #0f172a, #1e293b)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 60, fontWeight: 'bold', marginBottom: 20 }}>
          Izzat Baloghlanov
        </div>
        <div style={{ fontSize: 30, color: '#3b82f6' }}>
          Frontend Developer & React Specialist
        </div>
        <div style={{ fontSize: 24, color: '#94a3b8', marginTop: 10 }}>
          Javascript · React · TypeScript · Next.js
        </div>
      </div>
    ),
    { ...size }
  );
}