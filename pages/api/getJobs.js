import { getJobs, getMoreJobs} from "../../util/Fauna";

export default async function handler(req, res) {
    if(req.method !== 'GET'){
        return res.status(405)
    }
    try {
        if (req.query.cursor !== null){
            const jobs = await getMoreJobs(req.query.cursor)
            return res.status(200).json(jobs)
            console.log("REep")
        }
        else{
            const jobs = await getJobs();
            return res.status(200).json(jobs)
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({msg: "Something went wrong."});
    }
}