import React from 'react'
import Layout from '../../components/Layout'
import { InstantSearch, SearchBox, ClearRefinements, RefinementList,Panel,ToggleRefinement} from 'react-instantsearch-dom'
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
              <SearchBox searchAsYouType={false}/>
              <div className={styles.bodyWrapper}>
                <div className={styles.leftPanel}>
                  <div className={styles.filterHeader}>
                    <h2>Filters</h2>
                    <div className='clear-filters'>
                      <ClearRefinements
                        translations={{
                          reset: (
                            <>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="11"
                                height="11"
                                viewBox="0 0 11 11"
                              >
                                <g fill="none" fillRule="evenodd" opacity=".4">
                                  <path d="M0 0h11v11H0z" />
                                  <path
                                    fill="#000"
                                    fillRule="nonzero"
                                    d="M8.26 2.75a3.896 3.896 0 1 0 1.102 3.262l.007-.056a.49.49 0 0 1 .485-.456c.253 0 .451.206.437.457 0 0 .012-.109-.006.061a4.813 4.813 0 1 1-1.348-3.887v-.987a.458.458 0 1 1 .917.002v2.062a.459.459 0 0 1-.459.459H7.334a.458.458 0 1 1-.002-.917h.928z"
                                  />
                                </g>
                              </svg>
                              Clear filters
                            </>
                          ),
                        }}
                      />
                    </div>
                  </div>
                  <Panel header='Category'>
                    <RefinementList attribute='category'/>
                  </Panel>
                  <Panel header='Company'>
                    <RefinementList attribute='companyName' seachable={true} />
                  </Panel>
                  <Panel header="Remote Only">
                    <ToggleRefinement
                      attribute="remote"
                      label="Display only remote jobs"
                      value={true}
                    />
                  </Panel>
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
