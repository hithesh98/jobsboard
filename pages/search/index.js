import React from 'react'
import Layout from '../../components/Layout'
import { InstantSearch, SearchBox} from 'react-instantsearch-dom'
import algoliasearch from 'algoliasearch/lite';
import Head from 'next/head'
import JobList from '../../components/JobList';
import styles from '../styles/search.module.css'
import { connectHits } from 'react-instantsearch-dom';


// To avoid getting bullet point when hits are listed.
const Hits = ({ hits }) => (<ol>
{hits.map(hit => (
  <JobList key={hit.applyUrl} job={hit} />
))}
</ol>);
const CustomHits = connectHits(Hits);

const searchClient = algoliasearch('VLJVAJ9ZX8', '0fddb2ff13078cbddcd2cec602fedc76')

export default function Search() {
    return (
        <>
        <Head>
            <title>Search</title>
        </Head>
        <Layout>
            <h1>Search</h1> 
            <InstantSearch indexName='jobs' searchClient={searchClient} >
              <SearchBox searchAsYouType={true}/>
              <div className={styles.bodyWrapper}>
                <div className={styles.refinement}>
                  Category
                  <p>Placeholder</p>
                </div>
                <div className={styles.hitsWrapper}>
                  <CustomHits />
                </div>
              </div>
            </InstantSearch>
        </Layout>
        </>
    )
}
