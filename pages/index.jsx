import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap" rel="stylesheet"/>
      </Head>
      <main>
        <section className="hero-wrapper">
          <article className="copy-wrapper"> 
            <h1 className="header">The worlds largest community for healthcare and lifesciences startup jobs</h1>
            <h3 className="subtitle">Find a job doing important work. Sign-up below to get notifications for jobs at the most innovative companies in the healthcare and life sciences industry.</h3>
          </article> 
          <article className="wireframe-browser">
            <div className="browser">
              <Image src="/Browser.svg" width="702.96px" height="466.47px"/>
            </div>
            <div className="list1">
              <Image src="/list.svg" width="399.69" height="60.47"/>
            </div>
            <div className="list2">
              <Image src="/list.svg" width="399.69" height="60.47"/>
            </div>
            <div className="list3">
              <Image src="/list.svg" width="399.69" height="60.47"/>
            </div>
          </article> 
        </section>
      </main>
    </div>
  )
}
