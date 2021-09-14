import { getMoreClinicalJobs, getMoreCustomerSupportOpsJobs, getMoreLegalHrFinJobs, getMoreMarketingJobs, getMoreProductJobs, getMoreDataJobs, getMoreCommercialJobs, getMoreEngineeringJobs, getMoreOtherJobs} from "../../../../../../util/Fauna";

const getMoreJobsFunction = (category) =>{
    if(category === 'clinical'){
        return getMoreClinicalJobs
    } else if (category === 'commercial'){
        return getMoreCommercialJobs
    } else if (category === 'customersupportops'){
        return getMoreCustomerSupportOpsJobs
    } else if (category === 'data'){
        return getMoreDataJobs
    } else if (category === 'engineering'){
        return getMoreEngineeringJobs
    } else if (category === 'legalhrfin'){
        return getMoreLegalHrFinJobs
    } else if (category === 'marketing'){
        return getMoreMarketingJobs
    }  else if (category === 'other'){
        return getMoreOtherJobs
    } else if (category === 'product'){
        return getMoreProductJobs
    } else {
        return null
    }
}

export default async function handler(req, res) {
    if(req.method !== 'GET'){
        return res.status(405)
    }
    try {
        if (req.query.id !== null){
            const {id, featured, priority, category } = req.query;
            const categoryFunction = getMoreJobsFunction(category);
            const jobs = await categoryFunction(id, priority, featured)
            return res.status(200).json(jobs)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: "Something went wrong."});
    }
}