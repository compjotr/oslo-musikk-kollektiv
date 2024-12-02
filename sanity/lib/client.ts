import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'your-project-id',
  dataset: 'your-dataset-name',
  apiVersion: '2021-05-21', // Update to the latest API version
  useCdn: true, // Enable CDN caching
});

export default client;