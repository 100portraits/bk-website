import { createClient } from '@sanity/client'

export default createClient({
    projectId: 'lk97210w',
    dataset: 'production',
  useCdn: true,
  apiVersion: '2024-03-19',
  token: import.meta.env.VITE_SANITY_TOKEN,
})
