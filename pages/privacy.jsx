import Head from 'next/head'
import Layout from '../components/Layout'
import styles from './styles/privacyAndTerms.module.css'

export default function Privacy() {
  return (
      <>  
        <Head>
          <title>Privacy</title>
        </Head>
          <Layout>
          <div className={styles.content}>
            <h1>Privacy Policy</h1>
            <p>Last updated: 22/09/2021</p>
            <p>Your privacy is important to us. It is the policy of Jobsinhealthtech.com,, which owns and operates JobsinHealthTech.com, to respect your privacy regarding any information we may collect from you on our website, <a href="https://jobsinhealthtech.com">https://jobsinhealthtech.com</a>.</p>
            <p>We only ask for personal information when we need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
            <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</p>
            <p>We don’t share any personally identifying information publicly or with third-parties without your consent, except when required to by law.</p>
            <p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>
            <p>You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.</p>
            <p>Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.</p>
            <h3>Questions</h3>
            <p>Have any questions, comments, or concerns about this privacy policy, your data, or your rights with respect to your information? Please get in touch by emailing us at brian@jobsinhealthtech.com and we’ll be happy to answer them.**</p>
        </div>
          </Layout>
      </>
  )
}
