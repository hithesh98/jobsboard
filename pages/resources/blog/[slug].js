import { getSinglePost, getPosts } from '../../../lib/posts';
import Layout from '../../../components/Layout';
import styles from '../../styles/blog.module.css'
import Image from 'next/image';

// PostPage page component
export default function PostPage({post}) {
  // Render post title and content in the page from props
  console.log(post)
  return (
    <Layout>
      <header className={styles.header}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.excerpt}> {post.excerpt}</p>
      </header>
      <div className={styles.imageWrapper} >
        <Image src={post.feature_image} alt={post.feature_image_alt} width={700} height={500} layout='responsive'/>
      </div>
      <div className={styles.mainCopy} dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const posts = await getPosts()

  // Get the paths we want to create based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

  // { fallback: false } means posts not found should 404.
  return { paths, fallback: false }
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
    props: { post }
  }
}