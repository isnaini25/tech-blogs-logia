import { fetch } from '@/utils/axiosConfig';
import { ImageResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
  const size = {
    width: 1200,
    height: 630,
  };

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: 'white',
          backgroundSize: '150px 150px',
          height: '100%',
          width: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          flexWrap: 'nowrap',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            justifyItems: 'center',
          }}
        >
          <img
            alt='Vercel'
            height={200}
            src="data:image/svg+xml,%3Csvg width='24' height='24' fill='#000000' fillRule='evenodd' clipRule='evenodd' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5ZM5 4C4.44772 4 4 4.44772 4 5V10H20V5C20 4.44772 19.5523 4 19 4H5ZM4 12V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V12H4ZM14 13C14.2652 13 14.5196 13.1054 14.7071 13.2929L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L14 15.4142L11.7071 17.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L9.58579 17L9 16.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L8.29289 14.2929C8.48043 14.1054 8.73478 14 9 14C9.26522 14 9.51957 14.1054 9.70711 14.2929L11 15.5858L13.2929 13.2929C13.4804 13.1054 13.7348 13 14 13ZM11 7C11 6.44772 11.4477 6 12 6H17C17.5523 6 18 6.44772 18 7C18 7.55228 17.5523 8 17 8H12C11.4477 8 11 7.55228 11 7ZM7 8.75C7.9665 8.75 8.75 7.9665 8.75 7C8.75 6.0335 7.9665 5.25 7 5.25C6.0335 5.25 5.25 6.0335 5.25 7C5.25 7.9665 6.0335 8.75 7 8.75Z' /%3E%3C/svg%3E"
            style={{ margin: '0 30px' }}
            width={232}
          />
        </div>
        <div
          style={{
            fontSize: 60,
            fontWeight: 700,
            fontFamily: 'serif',
            letterSpacing: '-0.025em',
            color: 'black',
            marginTop: 30,
            padding: '0 120px',
            lineHeight: 1.4,
            whiteSpace: 'pre-wrap',
            fontStyle: 'normal',
          }}
        >
          L O G I A
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 32,
            fontStyle: 'normal',
            color: 'black',
            marginTop: 10,
            lineHeight: 1.8,
            whiteSpace: 'pre-wrap',
          }}
        >
          Latest Technology News
        </div>
      </div>
    ),
    size
  );
}
