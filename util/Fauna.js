import faunadb from 'faunadb';
const faunaClient = new faunadb.Client({secret: process.env.FAUNA_SECRET});
const q = faunadb.query


export const getJobs = async() => {
    const data = await faunaClient.query(
      q.Map(q.Paginate(q.Documents(q.Collection('jobs')), {size: 10}),
      x => q.Select(['data'], q.Get(x))
      )
    )

    return data;
}


export const getMoreJobs = async(id) => {
    const data = await faunaClient.query(
      q.Map(q.Paginate(q.Documents(q.Collection('jobs')), {size: 10, after: [q.Ref(q.Collection("jobs"), id)]}),
      x => q.Select(['data'], q.Get(x))
      )
    )

    return data;
}


