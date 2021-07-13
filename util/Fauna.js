import faunadb from 'faunadb';
const faunaClient = new faunadb.Client({secret: process.env.FAUNA_SECRET});
const q = faunadb.query

export const getJobs = async() => {
    const {data} = await faunaClient.query(
        q.Map(
            q.Paginate(q.Documents(q.Collection('jobs'))),
            q.Lambda('ref', {
                location: q.Select(['data','location'], q.Get(q.Var('ref'))),
                link: q.Select(['data','link'], q.Get(q.Var('ref'))) 
               })
        )
    )
   
    return data;
}

