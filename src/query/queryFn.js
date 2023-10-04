import { fetch } from '@/utils/axiosConfig';

export const queryFn = async (parameter) => {
  try {
    const response = await fetch.get(
      `entries?content_type=blog-post&${parameter}`
    );

    return response.data.items;
  } catch (error) {
    console.log(`Error fetching data ${error}`);
  }
};
