import React from 'react'
import Layout from '../../components/Layout'
import { InstantSearch, SearchBox, Hits} from 'react-instantsearch-dom'
import algoliasearch from 'algoliasearch/lite';
import { useRouter } from 'next/router'



const Hit = ({ hit }) => <p>{hit.jobTitle}</p>;
const searchClient = algoliasearch('VLJVAJ9ZX8', '0fddb2ff13078cbddcd2cec602fedc76')

export default function Search() {
    const router = useRouter()
    const {input} = router.query
    return (
        <Layout>
            <h1> I am Search</h1> 
            <InstantSearch indexName='jobs' searchClient={searchClient}>
              <SearchBox searchAsYouType={false}/>
              <Hits hitComponent={Hit}/>
            </InstantSearch>
        </Layout>
    )
}
