import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";
import { Widget } from "@typeform/embed-react";
import styles from "./styles/post.module.css";

export default function post() {
  return (
    <>
      <Head>
        <title>Post a Job</title>
      </Head>
      <Layout>
        <div className={styles.contentWrapper}>
          <div className={styles.topCopy}>
            <h1>Thanks for your interest in posting a job!</h1>
            <p>
              The cost is €150 to publish a job listing for 30 days. This
              includes the following:
            </p>
            <ul>
              <li>A Featured post on our jobs board</li>
              <li>A unique and fully hosted page for the job</li>
              <li>Shared job post on socials</li>
              <li>Customer support from the Jobs in Health Tech Team</li>
              <li>Metrics from the job posting if requested</li>
            </ul>
            <p>
              We also offer discounts for posting multiple jobs. For 5 jobs the
              cost is €500, and for 10 it is €900. If you are interested in
              custom packages or have any questions, please reach out to us at
              Brian@jobsinhealthtech.com.
            </p>
            <p>
              Fill out the Typeform below and then pay with secure stripe
              checkout. Your post will then be live within 24 hours.
            </p>
          </div>
          <Widget id="Kbk7VlPw" className={styles.typeform} />
          <div className={styles.bottomCopy}></div>
        </div>
      </Layout>
    </>
  );
}
