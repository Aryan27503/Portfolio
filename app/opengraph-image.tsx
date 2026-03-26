import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#e0e7ff'
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 'bold' }}>Aryan Soni</div>
        <div style={{ fontSize: 40, marginTop: 20, color: '#a5b4fc' }}>
          Product Manager Portfolio
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630
    }
  )
}
