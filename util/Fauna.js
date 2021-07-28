import faunadb from 'faunadb';
const faunaClient = new faunadb.Client({secret: process.env.FAUNA_SECRET});
const q = faunadb.query


export const getJobs = async() => {
    const data = await faunaClient.query(
        q.Map(
            q.Map(
              q.Paginate(q.Distinct(q.Match(q.Index("primarykeyB"))), {
                size: 20, 
              }),
              x => q.Select("ref", q.Get(q.Match(q.Index("primarykeyIndexA"), x)))
            ),
            q.Lambda("ref", {
              companyName: q.Select(["data", "companyName"], q.Get(q.Var("ref"))),
              jobTitle: q.Select(["data", "jobTitle"], q.Get(q.Var("ref"))),
              jobLocation: q.Select(["data", "jobLocation"], q.Get(q.Var("ref"))),
              jobType: q.Select(["data", "jobType"], q.Get(q.Var("ref"))),
              link: q.Select(["data", "applyUrl"], q.Get(q.Var("ref"))),
              id: q.Select(["ref", "id"], q.Get(q.Var("ref")))
            })
          )
    )

    return data;
}


export const getMoreJobs = async(id) => {
    const data = await faunaClient.query(
        q.Map(
            q.Map(
              q.Paginate(q.Distinct(q.Match(q.Index("primarykeyB"))), {
                size: 20, 
                after: [
              q.Select(["data", "companyName"], q.Get(q.Ref(q.Collection("jobsdb"), id))),
              q.Select(["data", "jobTitle"], q.Get(q.Ref(q.Collection("jobsdb"), id))),
              q.Select(["data", "jobLocation"], q.Get(q.Ref(q.Collection("jobsdb"), id))),
              q.Select(["data", "jobType"], q.Get(q.Ref(q.Collection("jobsdb"), id))),
              q.Select(["data", "applyUrl"], q.Get(q.Ref(q.Collection("jobsdb"), id))),
              q.Select(["ref", "id"], q.Get(q.Ref(q.Collection("jobsdb"), id)))
            ]
              }),
              x => q.Select("ref", q.Get(q.Match(q.Index("primarykeyIndexA"), x)))
            ),
            q.Lambda("ref", {
              companyName: q.Select(["data", "companyName"], q.Get(q.Var("ref"))),
              jobTitle: q.Select(["data", "jobTitle"], q.Get(q.Var("ref"))),
              jobLocation: q.Select(["data", "jobLocation"], q.Get(q.Var("ref"))),
              jobType: q.Select(["data", "jobType"], q.Get(q.Var("ref"))),
              link: q.Select(["data", "applyUrl"], q.Get(q.Var("ref"))),
              id: q.Select(["ref", "id"], q.Get(q.Var("ref")))
            })
          )
    )

    return data;
}


