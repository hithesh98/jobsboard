import React from 'react'
import Layout from '../../components/Layout'
import { getPosts, getPagePosts } from '../../lib/posts'
import Link from 'next/link';


export const getStaticPaths = async () =>{
    const posts = await getPosts()
    const pages = posts.meta.pagination.pages 
    let pathAr = [];
    for(let i=2; i<= pages; i++){
        pathAr.push(i.toString())
    }
    const paths = pathAr.map(page=> {
        return {
            params: { pagenum: page}
        }
    })
    return {
        paths: paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const posts = await getPagePosts(context.params.pagenum)
  
    if (!posts) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { posts }
    }
  }


export default function Index({posts}) {
    return (
        <Layout>
             <ul>
            {posts.map(post => (
                <li key={post.id}>
                    <Link href={`/posts/blog/${post.slug}`}>
                    <a>{post.title}</a>
                    </Link>
                </li>
            ))}
            </ul>
            <button> Next </button>
        </Layout>
    )
}
