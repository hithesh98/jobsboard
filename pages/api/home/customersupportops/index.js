import { getHomeCustomerSupportOpsJobs } from "../../../../util/Fauna";


export default async function handler(req, res) {
    if(req.method !== 'GET'){
        return res.status(405)
    }
    try {
        const jobs = await getHomeCustomerSupportOpsJobs();
        return res.status(200).json(jobs)

    } catch (error) {
        console.log(error)
        res.status(500).json({msg: "Something went wrong."});
    }
}