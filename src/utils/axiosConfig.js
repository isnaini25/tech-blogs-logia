import axios from 'axios';

export const fetch = axios.create({
  baseURL: `https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_SPACEID}/environments/master/`,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
  },
});
