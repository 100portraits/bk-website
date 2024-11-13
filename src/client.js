import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: 'lk97210w',
    dataset: 'production',
  useCdn: true,
})
