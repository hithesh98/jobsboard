import Head from 'next/head'
import styles from './styles/home.module.css'
import Layout from '../components/Layout'
import HomeJobPage from '../components/HomeJobPage'
import Image from 'next/image'
import background from '../public/herobackground.svg'

export default function Home() {
  return (
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap" rel="stylesheet"/>

          <title>JobsinHealthTech | Discover jobs at innovative healthcare and lifesciences companies.</title>
          <meta name="description" content="JobsinHealthTech helps you find jobs at the most innovative healthcare and lifesciences companies. Get weekly job alerts by signing up to our newsletter."/>

          <meta itemProp="name" content="JobsinHealthTech | Discover jobs at innovative healthcare and lifesciences companies."/>
          <meta itemProp="description" content="JobsinHealthTech helps you find jobs at the most innovative healthcare and lifesciences companies. Get weekly job alerts by signing up to our newsletter."/>
          <meta itemProp="image" content="https://remoteok.io/assets/logo.png"/>

          <meta property="og:url" content="https://jobsinhealthtech.com"/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="JobsinHealthTech | Discover jobs at innovative healthcare and lifesciences companies."/>
          <meta property="og:description" content="JobsinHealthTech helps you find jobs at the most innovative healthcare and lifesciences companies. Get weekly job alerts by signing up to our newsletter."/>
          <meta property="og:image" content="https://remoteok.io/assets/logo.png"/>

          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:title" content="JobsinHealthTech | Discover jobs at innovative healthcare and lifesciences companies."/>
          <meta name="twitter:description" content="JobsinHealthTech helps you find jobs at the most innovative healthcare and lifesciences companies. Get weekly job alerts by signing up to our newsletter."/>
          <meta name="twitter:image" content="https://remoteok.io/assets/logo.png"/>
        </Head>
        <main>
          <Layout>
            <div className={styles.landing}>
              <section className={styles.heroWrapper}>
                <article className={styles.copyWrapper}> 
                  <h1 className={styles.header}>Discover jobs at innovative healthcare and lifesciences companies.</h1>
                  <h3>Sign-up below to get curated job alerts every week.</h3>
                  <section className="email-wrapper">
                  <div id="mc_embed_signup">
                    <form action="https://jobsinhealthtech.us6.list-manage.com/subscribe/post?u=30087181452091fa46daaef74&amp;id=13a887731e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                        <div id={styles.mc_embed_signup_scroll}>
                          <input type="email" name="EMAIL" className="email" id={styles.mceEMAIL} placeholder="Email Address" required/>
                          <div className={styles.clear}><input type="submit" value="Subscribe" name="subscribe" id={styles.mcEmbeddedSubscribe} className="button"/></div>
                        </div>
                    </form>
                  </div>
                </section>
                </article> 
                <div className={styles.background}>
                  <Image src ={background} />
                </div>
              </section>
            </div>
            <div className={styles.jobPage}>
              <h2 className={styles.categoryTitle}>Engineering Jobs</h2>
              <HomeJobPage category={'engineering'}/>
              
              <h2 className={styles.categoryTitle}>Commercial Jobs</h2>
              <HomeJobPage category={'commercial'}/>

              <h2 className={styles.categoryTitle}>Clinical Jobs</h2>
              <HomeJobPage category={'clinical'}/>

              <h2 className={styles.categoryTitle}>Product Jobs</h2>
              <HomeJobPage category={'product'}/>

              <h2 className={styles.categoryTitle}>Data Jobs</h2>
              <HomeJobPage category={'data'}/>

              <h2 className={styles.categoryTitle}>Marketing Jobs</h2>
              <HomeJobPage category={'marketing'}/>

              <h2 className={styles.categoryTitle}>Legal/HR/Finance Jobs</h2>
              <HomeJobPage category={'legalhrfin'}/>

              <h2 className={styles.categoryTitle}>Customer Success/Operation Jobs</h2>
              <HomeJobPage category={'customersupportops'}/>

              <h2 className={styles.categoryTitle}>Other Jobs</h2>
              <HomeJobPage category={'other'}/>
            </div>
          </Layout>
        </main>
      </div>
  )
}
