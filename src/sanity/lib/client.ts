import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,  // e.g., '2025-08-26'
  useCdn: process.env.NODE_ENV === 'production', // use CDN in production for better performance
  perspective: 'published', // Ensure we get published content in production
  stega: {
    enabled: false, // Disable stega in production
  },
})

// Create a function to test the connection
export const testSanityConnection = async () => {
  try {
    const result = await client.fetch('*[_type == "homepage"][0]');
    console.log('Sanity connection test successful');
    return { success: true, result };
  } catch (error) {
    console.error('Sanity connection test failed:', error);
    return { success: false, error };
  }
}