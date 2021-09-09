import { getClinicalJobs, getCustomerSupportOpsJobs, getLegalHrFinJobs, getMarketingJobs, getProductJobs, getDataJobs, getCommercialJobs, getEngineeringJobs, getOtherJobs  } from "../../../../util/Fauna";

const getJobsFunction = (category) =>{
    if(category === 'clinical'){
        return getClinicalJobs
    } else if (category === 'commercial'){
        return getCommercialJobs
    } else if (category === 'customersupportops'){
        return getCustomerSupportOpsJobs
    } else if (category === 'data'){
        return getDataJobs
    } else if (category === 'engineering'){
        return getEngineeringJobs
    } else if (category === 'legalhrfin'){
        return getLegalHrFinJobs
    } else if (category === 'marketing'){
        return getMarketingJobs
    }  else if (category === 'other'){
        return getOtherJobs
    } else if (category === 'product'){
        return getProductJobs
    } else {
        return null
    }
}

export default async function handler(req, res) {
    if(req.method !== 'GET'){
        return res.status(405)
    }
    try {
        const {category} = req.query
        const categoryFunction = getJobsFunction(category);
        const jobs = await categoryFunction();
        return (jobs ? res.status(200).json(jobs) : res.status(500).json({msg: "Something went wrong."}));

    } catch (error) {
        console.log(error)
        res.status(500).json({msg: "Something went wrong."});
    }
}