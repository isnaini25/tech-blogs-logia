import { fetch } from '@/utils/axiosConfig';
import { ImageResponse } from 'next/server';

export const runtime = 'edge';

export async function Image({ params }) {
  const size = {
    width: 1200,
    height: 630,
  };

  const thumbnail = fetch(
    `entries?content_type=blog-post&fields.slug=${params.slug}`
  ).then((response) => {
    return response.data.items[0].fields.thumbnail;
  });

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%' }}>
        <img src={thumbnail} style={{ objectFit: 'cover' }} />
      </div>
    ),
    size
  );
}
