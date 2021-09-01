import React from 'react'
import Layout from '../../components/Layout'
import { InstantSearch, SearchBox, Hits} from 'react-instantsearch-dom'
import algoliasearch from 'algoliasearch/lite';
import { useRouter } from 'next/router'
import JobList from '../../components/JobList';


const Hit = ({ hit }) => <JobList key={hit.applyUrl} job={hit} />;
const searchClient = algoliasearch('VLJVAJ9ZX8', '0fddb2ff13078cbddcd2cec602fedc76')

export default function Search() {
    const router = useRouter()
    const {input} = router.query
    return (
        <Layout>
            <h1>Search</h1> 
            <InstantSearch indexName='jobs' searchClient={searchClient} searchState={{query:`${input}`}}>
              <SearchBox searchAsYouType={false}/>
              <Hits hitComponent={Hit}/>
            </InstantSearch>
        </Layout>
    )
}
