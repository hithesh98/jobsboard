import React from 'react'
import Layout from '../components/Layout'
import { getPosts } from '../lib/posts'

export async function getStaticProps(context) {
    const posts = await getPosts()
  
    if (!posts) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { posts }
    }
  }

export default function blog({posts}) {
    return (
        <Layout>
             <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
            </ul>
        </Layout>
    )
}
