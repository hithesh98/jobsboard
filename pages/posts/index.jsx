import React from 'react'
import Layout from '../../components/Layout'
import { getPosts } from '../../lib/posts'
import Link from 'next/link';


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

export default function index({posts}) {
    return (
        <Layout>
             <ul>
            {posts.map(post => (
                <li key={post.id}>
                    <Link href={`/posts/${post.slug}`}>
                    <a>{post.title}</a>
                    </Link>
                </li>
            ))}
            </ul>
        </Layout>
    )
}
