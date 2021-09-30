import React from 'react'
import Layout from '../../components/Layout'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import DOMPurify from 'isomorphic-dompurify'



export default function Job() {
    const router = useRouter()
    const {id} = router.query
    const { data, error } = useSWR(`/api/job-id/${id}`)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return (
        <Layout>
            <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(data.description)}}></div>
        </Layout>
    )
}
