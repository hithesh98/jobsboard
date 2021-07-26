import Head from 'next/head'
import styles from './styles/home.module.css'
import Layout from '../components/Layout'
import JobPage from '../components/JobPage'
import Image from 'next/image'
import background from '../public/herobackground.svg'
import Subscribe from '../components/Subscribe'

export default function Home() {
  return (
      <div className={styles.container}>
        <Head>
          <title>HealthTech Jobs</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap" rel="stylesheet"/>
          <meta name="description" content="Find health tech jobs at innovative startup companies."/>
        </Head>
        <main>
          <Layout>
            <div className={styles.landing}>
              <section className={styles.heroWrapper}>
                <article className={styles.copyWrapper}> 
                  <h1 className={styles.header}>The community for healthcare and lifesciences startup jobs</h1>
                  <h3>Find work at an innovative startup. Sign-up below to get notifications for remote jobs at the most innovative companies in the healthcare and life sciences industry.</h3>
                </article> 
                <div className={styles.background}>
                  <Image src ={background} />
                </div>
              </section>
            </div>
            <Subscribe />
            <div className={styles.jobPage}>
              <JobPage />
            </div>
          </Layout>
        </main>
      </div>
  )
}
