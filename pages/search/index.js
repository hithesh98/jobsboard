import React from 'react'
import Layout from '../../components/Layout'
import { InstantSearch, SearchBox, Hits} from 'react-instantsearch-dom'
import algoliasearch from 'algoliasearch/lite';
import Head from 'next/head'



const Hit = ({ hit }) => <p>{hit.jobTitle}</p>;
const searchClient = algoliasearch('VLJVAJ9ZX8', '0fddb2ff13078cbddcd2cec602fedc76')

export default function Search() {
    return (
        <>
        <Head>
            <title>Search</title>
        </Head>
        <Layout>
            <h1>Search</h1> 
            <InstantSearch indexName='jobs' searchClient={searchClient} searchState={{query:''}}>
              <SearchBox searchAsYouType={false}/>
              <div className={'searchBody'}>

                <div className={'refinement'}>

                </div>
                <Hits hitComponent={Hit}/>
              </div>
            </InstantSearch>
        </Layout>
        </>
    )
}
