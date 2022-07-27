import React from "react";
import { useSWRInfinite } from "swr";
import JobList from "./JobList";
import styles from "../pages/styles/jobPage.module.css";
import { useState } from "react";
import RemoteSwitch from "./RemoteSwitch";
import Link from "next/link";

export default function JobPage({ category }) {
  const [remoteOnly, setRemote] = useState(false);
  const getKey = (pageIndex, previousPageData) => {
    // reached the end
    if (previousPageData && !previousPageData.data) return null;
    // first page, we don't have `previousPageData`
    if (pageIndex === 0) return `/api/category/${category}`;
    // add the cursor to the API endpoint
    return `/api/category/${category}/${previousPageData.after[0]}/${previousPageData.after[1]}/${previousPageData.after[2]["@ref"].id}`;
  };
  const { data, size, setSize } = useSWRInfinite(getKey);
  if (!data) return "Loading...";
  // checks the length of data array to know if its empty
  const isEmpty = !("after" in data[data.length - 1]);
  let pageSize;
  // gets the number of jobs per page
  if (!isEmpty) {
    pageSize = data?.[0]?.data.length;
  }
  const reachedEnd = isEmpty || data?.[data.length - 1]?.data.length < pageSize;

  return (
    <div>
      <h3>Sign-up below to get curated job alerts every week.</h3>
      <section className="email-wrapper">
        <div id="mc_embed_signup">
          <form
            action="https://jobsinhealthtech.us6.list-manage.com/subscribe/post?u=30087181452091fa46daaef74&amp;id=13a887731e"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate
          >
            <div id={styles.mc_embed_signup_scroll}>
              <input
                type="email"
                name="EMAIL"
                className="email"
                id={styles.mceEMAIL}
                placeholder="Email Address"
                required
              />
              <div className={styles.mcFieldGroup}>
                <label htmlFor="mce-ALERT">
                  Job Alert Frequency <span className="semi-colon">: </span>
                </label>
                <select name="ALERT" className="required" id={styles.mceALERT}>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                </select>
              </div>
              <div className={styles.clear}>
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id={styles.mcEmbeddedSubscribe}
                  className="button"
                />
              </div>
            </div>
          </form>
        </div>
      </section>
      <RemoteSwitch
        remoteOnly={remoteOnly}
        onToggle={() => setRemote(!remoteOnly)}
      />
      {data.map((pages) => {
        console.log(pages);
        return pages.data?.map((job) => {
          const title = job.jobTitle.toLowerCase().replace(/[(), /]/g, "-");
          const company = job.companyName
            .toLowerCase()
            .replace(/[(), /]/g, "-");
          return (
            <Link
              key={job.id["@ref"].id}
              href={`/job-id/${job.id["@ref"].id}-${title}-${company}`}
            >
              <a>
                <JobList job={job} />
              </a>
            </Link>
          );
        });
      })}
      {reachedEnd ? (
        <p className={styles.noMore}>No more jobs here right now.</p>
      ) : (
        <button className={styles.loadMore} onClick={() => setSize(size + 1)}>
          Load More...
        </button>
      )}
    </div>
  );
}
