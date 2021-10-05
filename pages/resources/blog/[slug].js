import { getSinglePost, getPosts } from '../../../lib/posts';
import Layout from '../../../components/Layout';
import styles from '../../styles/blog.module.css'
import Image from 'next/image';
import Skeleton from '../../../components/Skeleton';
import Head from 'next/head';
// PostPage page component
export default function PostPage({post}) {
  if(!post) return <Skeleton />
  // Render post title and content in the page from props
  return (
    <>
    <Head>  
            <title>{post.title}</title>
            <meta itemProp="name" content={`${post.title} - JobsinHealthTech`}/>
            <meta itemProp="description" content={`${post.excerpt} - JobsinHealthTech`}/>
            <meta itemProp="image" content={post.feature_image}/>

            <meta property="og:type" content="website"/>
            <meta property="og:title" content={`${post.title} - JobsinHealthTech`}/>
            <meta property="og:description"  content={`${post.excerpt} - JobsinHealthTech`}/>
            <meta property="og:image" content={post.feature_image}/>

            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content={`${post.title} - JobsinHealthTech`}/>
            <meta name="twitter:description" content={`${post.excerpt} - JobsinHealthTech`}/>
            <meta name="twitter:image" content={post.feature_image}/>
    </Head>
    <Layout>
      <header className={styles.header}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.excerpt}> {post.excerpt}</p>
        <div className={styles.authorWrapper}>
          <div className={styles.authorImage}>
            <Image className={styles.authorImage} src={post.primary_author.profile_image} width={200} height={200} layout='responsive' alt='author picture'/>
          </div>
          <p>by <strong>{post.primary_author.name} </strong> </p>
         </div>
      </header>
      <div className={styles.imageWrapper} >
        <Image src={post.feature_image} alt={post.feature_image_alt} layout='fill' objectFit='cover'/>
      </div>
      <div className={styles.mainCopy} dangerouslySetInnerHTML={{ __html: post.html }} />
      <div className={styles.authorFooter}>
        <div className={styles.authorImageFooter}>
              <Image className={styles.authorImage} src={post.primary_author.profile_image} width={200} height={200} layout='responsive' alt='author picture'/>
        </div>
        <h3 className={styles.authorName}>{post.primary_author.name}</h3>
        <p className={styles.authorBio}>{post.primary_author.bio}</p>
      </div>
    </Layout>
    </>
  )
}

export async function getStaticPaths() {
  const posts = await getPosts()

  // Get the paths we want to create based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

  // { fallback: false } means posts not found should 404.
  return { paths, fallback: true }
}


// Pass the page slug over to the "getSinglePost" function
// In turn passing it to the posts.read() to query the Ghost Content API
export async function getStaticProps(context) {
  const post = await getSinglePost(context.params.slug)

  if (!post) {
    return {
      notFound: true,
    }
  }
  
  return {
    props: { post },
    revalidate: 1
  }
}