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

export const getEngineeringJobs = async() => {
  const data = await faunaClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index("jobs_by_category"), "engineering"), {
          size: 5
        }),
        q.Lambda("X", q.Select(['data'] ,q.Get(q.Var("X"))))
      )
    )
    
    return data;
  }
  
  
  export const getMoreEngineeringJobs = async(id) => {
      const data = await faunaClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index("jobs_by_category"), "engineering"), {
            size: 5,
            after: [q.Ref(q.Collection("jobs"), id)]
          }),
          q.Lambda("X", q.Select(['data'] ,q.Get(q.Var("X"))))
        )
      )
      
      return data;
  }
export const getCommercialJobs = async() => {
  const data = await faunaClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index("jobs_by_category"), "commercial"), {
          size: 5
        }),
        q.Lambda("X", q.Select(['data'] ,q.Get(q.Var("X"))))
      )
    )
    
    return data;
  }
  
  
  export const getMoreCommercialJobs = async(id) => {
      const data = await faunaClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index("jobs_by_category"), "commercial"), {
            size: 5,
            after: [q.Ref(q.Collection("jobs"), id)]
          }),
          q.Lambda("X", q.Select(['data'] ,q.Get(q.Var("X"))))
        )
      )
      
      return data;
  }