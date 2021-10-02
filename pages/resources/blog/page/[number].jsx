import React, {useState, useEffect} from 'react'
import Layout from '../../../../components/Layout'
import { getPagePosts } from '../../../../lib/posts'
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import styles from '../../../styles/blogpage.module.css'
import Image from 'next/image';


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
      props: { posts, lastPage },
      revalidate: 1

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
        <>
          <Head>
            <title>Health Tech Careers Blog</title>
            <meta name="description" content='The Jobs in Health Tech blog aims to provide the best resources for developing your career in health technology.'/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content='Health Tech Careers Blog'/>
            <meta property="og:description"  content='The Jobs in Health Tech blog aims to provide the best resources for developing your career in health technology.'/>

            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content='Health Tech Careers Blog'/>
            <meta name="twitter:description" content='The Jobs in Health Tech blog aims to provide the best resources for developing your career in health technology.'/>
          </Head>
          <Layout>
              <div className={styles.hero}>
                  <h1 className={styles.heroTitle}>JHT Blog</h1>
              </div>
              <div className={styles.blogsWrapper}>
                  {posts.map(post => (
                        <div key={post.id} className={styles.blog}>
                          <Link href={`/resources/blog/${post.slug}`}>
                          <a>
                            <div className={styles.imageWrapper}>
                              <Image className={styles.coverImage} src={post.feature_image} alt={post.feature_image_alt} layout='fill' objectFit='cover' />
                            </div>
                            <div className={styles.blogCopy}>
                              <p className={styles.tag}>{post.primary_tag.name}</p>
                              <h3 className={styles.blogTitle}>{post.title}</h3>
                            </div>
                          </a>
                          </Link>
                      </div>
                  ))}
              </div>

              {pageNum !== 1 ? <button onClick={onPrevious} className={styles.button}> Previous </button> : null}
              {pageNum !== lastPage ? <button onClick={onNext} className={styles.button}> Next </button> : null}
          </Layout>
        </>
    )
}
