import React, {useState, useEffect} from 'react'
import Layout from '../../../../components/Layout'
import { getPagePosts } from '../../../../lib/posts'
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';


export async function getStaticPaths(context){
  const posts = await getPagePosts(1);
  const numberPages = posts.meta.pagination.pages
  let arPages = []
  for(let i=1; i<=numberPages; i++){
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
    const lastPage = posts.meta.pagination.pages

  
    if (!posts) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { posts, lastPage }
    }
  }

export default function Index({posts, lastPage}) {
    const router = useRouter()
    const { number } = router.query
    const [pageNum, setPageNum] = useState(parseInt(number))

    const onNext = () => {
      setPageNum(pageNum + 1)
    }
    
    const onPrevious = () => {
      setPageNum(pageNum - 1)
    }

    useEffect(() => {
      router.push(`/resources/blog/page/${pageNum}`)
    }, [pageNum])

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
            {pageNum !== 1 ? <button onClick={onPrevious}> Previous </button> : null}
            {pageNum !== lastPage ? <button onClick={onNext}> Next </button> : null}
        </Layout>
    )
}
