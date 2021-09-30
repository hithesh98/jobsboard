import { getJobDetails } from "../../../util/Fauna";


export default async function handler(req, res) {
    if(req.method !== 'GET'){
        return res.status(405)
    }
    try {
        const {id} = req.query
        const jobDetails = await getJobDetails(id);
        return res.status(200).json(jobDetails)

    } catch (error) {
        console.log(error)
        res.status(500).json({msg: "Something went wrong."});
    }
}