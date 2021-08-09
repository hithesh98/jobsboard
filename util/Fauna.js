import faunadb from 'faunadb';
const faunaClient = new faunadb.Client({secret: process.env.FAUNA_SECRET});
const q = faunadb.query

// ALL JOBS
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


// JOBS FOR HOME PAGE
export const getHomeEngineeringJobs = async() => {
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
  
  

export const getHomeCommercialJobs = async() => {
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
  
export const getHomeProductJobs = async() => {
  const data = await faunaClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index("jobs_by_category"), "product"), {
          size: 5
        }),
        q.Lambda("X", q.Select(['data'] ,q.Get(q.Var("X"))))
      )
    )
    
    return data;
  }
  
export const getHomeClinicalJobs = async() => {
  const data = await faunaClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index("jobs_by_category"), "clinical"), {
          size: 5
        }),
        q.Lambda("X", q.Select(['data'] ,q.Get(q.Var("X"))))
      )
    )
    
    return data;
  }
  
export const getHomeMarketingJobs = async() => {
  const data = await faunaClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index("jobs_by_category"), "marketing"), {
          size: 5
        }),
        q.Lambda("X", q.Select(['data'] ,q.Get(q.Var("X"))))
      )
    )
    
    return data;
  }
  
export const getHomeCustomerSupportOpsJobs = async() => {
  const data = await faunaClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index("jobs_by_category"), "customersupportops"), {
          size: 5
        }),
        q.Lambda("X", q.Select(['data'] ,q.Get(q.Var("X"))))
      )
    )
    
    return data;
  }
  
export const getHomeDataJobs = async() => {
  const data = await faunaClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index("jobs_by_category"), "data"), {
          size: 5
        }),
        q.Lambda("X", q.Select(['data'] ,q.Get(q.Var("X"))))
      )
    )
    
    return data;
  }
  
export const getHomeLegalHrFinJobs = async() => {
  const data = await faunaClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index("jobs_by_category"), "legalhrfin"), {
          size: 5
        }),
        q.Lambda("X", q.Select(['data'] ,q.Get(q.Var("X"))))
      )
    )
    
    return data;
  }
  
export const getHomeMiscJobs = async() => {
  const data = await faunaClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index("jobs_by_category"), "misc"), {
          size: 5
        }),
        q.Lambda("X", q.Select(['data'] ,q.Get(q.Var("X"))))
      )
    )
    
    return data;
  }
  
  // JOBS BY CATEGORIES 
  export const getEngineeringJobs = async() => {
    const data = await faunaClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index("jobs_by_category"), "engineering"), {
            size: 10
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
          size: 10,
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
            size: 10
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
            size: 10,
            after: [q.Ref(q.Collection("jobs"), id)]
          }),
          q.Lambda("X", q.Select(['data'] ,q.Get(q.Var("X"))))
        )
      )
      
      return data;
  }
  
  export const getProductJobs = async() => {
    const data = await faunaClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index("jobs_by_category"), "product"), {
            size: 10
          }),
          q.Lambda("X", q.Select(['data'] ,q.Get(q.Var("X"))))
        )
      )
      
      return data;
    }
  
  export const getMoreProductJobs = async(id) => {
    const data = await faunaClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index("jobs_by_category"), "product"), {
          size: 10,
          after: [q.Ref(q.Collection("jobs"), id)]
        }),
        q.Lambda("X", q.Select(['data'] ,q.Get(q.Var("X"))))
      )
    )
    
    return data;
  }

  export const getClinicalJobs = async() => {
    const data = await faunaClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index("jobs_by_category"), "clinical"), {
            size: 10
          }),
          q.Lambda("X", q.Select(['data'] ,q.Get(q.Var("X"))))
        )
      )
      
      return data;
    }

  export const getMoreClinicalJobs = async(id) => {
      const data = await faunaClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index("jobs_by_category"), "clinical"), {
            size: 10,
            after: [q.Ref(q.Collection("jobs"), id)]
          }),
          q.Lambda("X", q.Select(['data'] ,q.Get(q.Var("X"))))
        )
      )
      
      return data;
  }
  
  export const getDataJobs = async() => {
    const data = await faunaClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index("jobs_by_category"), "data"), {
            size: 10
          }),
          q.Lambda("X", q.Select(['data'] ,q.Get(q.Var("X"))))
        )
      )
      
      return data;
    }
  
  export const getMoreDataJobs = async(id) => {
    const data = await faunaClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index("jobs_by_category"), "data"), {
          size: 10,
          after: [q.Ref(q.Collection("jobs"), id)]
        }),
        q.Lambda("X", q.Select(['data'] ,q.Get(q.Var("X"))))
      )
    )
    
    return data;
  }

  export const getMarketingJobs = async() => {
    const data = await faunaClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index("jobs_by_category"), "marketing"), {
            size: 10
          }),
          q.Lambda("X", q.Select(['data'] ,q.Get(q.Var("X"))))
        )
      )
      
      return data;
    }

  export const getMoreMarketingJobs = async(id) => {
      const data = await faunaClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index("jobs_by_category"), "marketing"), {
            size: 10,
            after: [q.Ref(q.Collection("jobs"), id)]
          }),
          q.Lambda("X", q.Select(['data'] ,q.Get(q.Var("X"))))
        )
      )
      
      return data;
  }
  
  export const getLegalHrFinJobs = async() => {
    const data = await faunaClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index("jobs_by_category"), "legalhrfin"), {
            size: 10
          }),
          q.Lambda("X", q.Select(['data'] ,q.Get(q.Var("X"))))
        )
      )
      
      return data;
    }
  
  export const getMoreLegalHrFinJobs = async(id) => {
    const data = await faunaClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index("jobs_by_category"), "legalhrfin"), {
          size: 10,
          after: [q.Ref(q.Collection("jobs"), id)]
        }),
        q.Lambda("X", q.Select(['data'] ,q.Get(q.Var("X"))))
      )
    )
    
    return data;
  }

  export const getCustomerSupportOpsJobs = async() => {
    const data = await faunaClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index("jobs_by_category"), "customersupportops"), {
            size: 10
          }),
          q.Lambda("X", q.Select(['data'] ,q.Get(q.Var("X"))))
        )
      )
      
      return data;
    }

  export const getMoreCustomerSupportOpsJobs = async(id) => {
      const data = await faunaClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index("jobs_by_category"), "customersupportops"), {
            size: 10,
            after: [q.Ref(q.Collection("jobs"), id)]
          }),
          q.Lambda("X", q.Select(['data'] ,q.Get(q.Var("X"))))
        )
      )
      
      return data;
  }

  export const getMiscJobs = async() => {
    const data = await faunaClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index("jobs_by_category"), "misc"), {
            size: 10
          }),
          q.Lambda("X", q.Select(['data'] ,q.Get(q.Var("X"))))
        )
      )
      
      return data;
    }

  export const getMoreMiscJobs = async(id) => {
      const data = await faunaClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index("jobs_by_category"), "misc"), {
            size: 10,
            after: [q.Ref(q.Collection("jobs"), id)]
          }),
          q.Lambda("X", q.Select(['data'] ,q.Get(q.Var("X"))))
        )
      )
      
      return data;
  }
  