import React from 'react'
import Layout from '../../../../components/Layout'
import { getPagePosts } from '../../../../lib/posts'
import Link from 'next/link';


export async function getStaticPaths(context){
  const posts = await getPagePosts(1);
  const numberPages = posts.meta.pagination.pages
  let arPages = []
  for(let i=1; i<numberPages; i++){
    arPages.push(i.toString())
  }
  const paths = arPages.map(page=>{
    return {
      params: {number: page}
    }
  })
  return {
    paths: paths,
    fallback: false
  }

}

export async function getStaticProps(context) {
    const posts = await getPagePosts(context.params.number)
  
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
                    <Link href={`/resources/blog/${post.slug}`}>
                    <a>{post.title}</a>
                    </Link>
                </li>
            ))}
            </ul>
            <button> Next </button>
        </Layout>
    )
}
