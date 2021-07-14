import faunadb from 'faunadb';
const faunaClient = new faunadb.Client({secret: process.env.FAUNA_SECRET});
const q = faunadb.query

export const getJobs = async() => {
    const {data} = await faunaClient.query(
        q.Map(
            q.Paginate(q.Documents(q.Collection('jobs'))),
            q.Lambda('ref', {
                companyName: q.Select(['data','companyName'], q.Get(q.Var('ref'))),
                jobTitle: q.Select(['data','jobTitle'], q.Get(q.Var('ref'))),
                jobLocation: q.Select(['data','jobLocation'], q.Get(q.Var('ref'))),
                jobType: q.Select(['data','jobType'], q.Get(q.Var('ref'))),
                link: q.Select(['data','applyUrl'], q.Get(q.Var('ref'))),
                id: q.Select(['ref','id'], q.Get(q.Var('ref'))) 
               })
        )
    )
   
    return data;
}

