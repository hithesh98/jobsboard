import { useState } from "react"
import useSWR from 'swr'

export const useData = (ref) => {
    const [jobstate, setState] = useState([])
    const { data: jobsinit, mutate } = useSWR('/api/getJob');
    if(after == null){
        let tempjobs = []
        jobsinit && jobsinit.data.map((job)=>(
            tempjobs.push(<JobList key={job.id} job={job} />)
        ))
        return tempjobs
    }
    else {
        const { data: jobs, mutate } = useSWR(`/api/getJobs?cursor=${after}`);
        let tempjobs = []
        jobs && jobs.data.map((job)=>(
            tempjobs.push(<JobList key={job.id} job={job} />)
        ))
        useEffect(() => {
            setState(...jobstate, ...tempjobs)
            setRef(jobs.after[0])
            return () => {
            }
        }, [])
        return (
            <div>
                {tempjobs}
            </div>
        )

    }
}