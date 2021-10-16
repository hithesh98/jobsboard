import { getCompanyDetails } from "../../../util/Fauna";


export default async function handler(req, res) {
    if(req.method !== 'GET'){
        return res.status(405)
    }
    try {
        const {name} = req.query
        const companyDetails = await getCompanyDetails(name);
        return res.status(200).json(companyDetails)

    } catch (error) {
        console.log(error)
        res.status(500).json({msg: "Something went wrong."});
    }
}