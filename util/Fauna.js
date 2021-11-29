import faunadb from 'faunadb';
const faunaClient = new faunadb.Client({secret: process.env.FAUNA_SECRET});
const q = faunadb.query

// Variables used for queries
const jobsByCategoryLatestFeaturedFirst = 'jobs_by_category_latest_featured_first'
// The number of jobs shown on home page.
const homeSize = 5
// The number of jobs shown per category page.
const size = 25

// Boolean check 
function booleanParse(boolString){
  let featured;
    if(boolString==='true'){
      featured = true
    } else if (boolString==='false'){
      featured = false
    } else {
      featured = null
    }
    return featured
}

export const getJobDetails = async(id) => {
  const data = await faunaClient.query(
    q.Select(["data"], q.Get(q.Ref(q.Collection('jobs'), id)))
  )
  return data
}

export const getCompanyDetails = async(name) => {
  const data = await faunaClient.query(
    q.Select(["data"], q.Get(q.Match(q.Index("company_by_name"), name)))
  )
  return data;
}

// JOBS FOR HOME PAGE
export const getHomeEngineeringJobs = async() => {
  const data = await faunaClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index(jobsByCategoryLatestFeaturedFirst), "engineering"), {
          size: homeSize
        }),
        (featured, priority, ref) => q.Merge(q.Select(["data"], q.Get(ref)), {id: ref })
      )
    )
    
    return data;
  }
  
  

export const getHomeCommercialJobs = async() => {
  const data = await faunaClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index(jobsByCategoryLatestFeaturedFirst), "commercial"), {
          size: homeSize
        }),
        (featured, priority, ref) => q.Merge(q.Select(["data"], q.Get(ref)), {id: ref })
      )
    )
    
    return data;
  }
  
export const getHomeProductJobs = async() => {
  const data = await faunaClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index(jobsByCategoryLatestFeaturedFirst), "product"), {
          size: homeSize
        }),
        (featured, priority, ref) => q.Merge(q.Select(["data"], q.Get(ref)), {id: ref })
      )
    )
    
    return data;
  }
  
export const getHomeClinicalJobs = async() => {
  const data = await faunaClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index(jobsByCategoryLatestFeaturedFirst), "clinical"), {
          size: homeSize
        }),
        (featured, priority, ref) => q.Merge(q.Select(["data"], q.Get(ref)), {id: ref })
      )
    )
    
    return data;
  }
  
export const getHomeMarketingJobs = async() => {
  const data = await faunaClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index(jobsByCategoryLatestFeaturedFirst), "marketing"), {
          size: homeSize
        }),
        (featured, priority, ref) => q.Merge(q.Select(["data"], q.Get(ref)), {id: ref })
      )
    )
    
    return data;
  }
  
export const getHomeCustomerSupportOpsJobs = async() => {
  const data = await faunaClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index(jobsByCategoryLatestFeaturedFirst), "customersupportops"), {
          size: homeSize
        }),
        (featured, priority, ref) => q.Merge(q.Select(["data"], q.Get(ref)), {id: ref })
      )
    )
    
    return data;
  }
  
export const getHomeDataJobs = async() => {
  const data = await faunaClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index(jobsByCategoryLatestFeaturedFirst), "data"), {
          size: homeSize
        }),
        (featured, priority, ref) => q.Merge(q.Select(["data"], q.Get(ref)), {id: ref })
      )
    )
    
    return data;
  }
  
export const getHomeLegalHrFinJobs = async() => {
  const data = await faunaClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index(jobsByCategoryLatestFeaturedFirst), "legalhrfin"), {
          size: homeSize
        }),
        (featured, priority, ref) => q.Merge(q.Select(["data"], q.Get(ref)), {id: ref })
      )
    )
    
    return data;
  }
  
export const getHomeOtherJobs = async() => {
  const data = await faunaClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index(jobsByCategoryLatestFeaturedFirst), "other"), {
          size: homeSize
        }),
        (featured, priority, ref) => q.Merge(q.Select(["data"], q.Get(ref)), {id: ref })
      )
    )
    
    return data;
  }
  
  // JOBS BY CATEGORIES 
  export const getEngineeringJobs = async() => {
    const data = await faunaClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index(jobsByCategoryLatestFeaturedFirst), "engineering"), {
            size: size,
          }),
          (featured, priority, ref) => q.Merge(q.Select(["data"], q.Get(ref)), {id: ref })
        )
      )
      
      return data;  
    }
  
  export const getMoreEngineeringJobs = async(id, priorityString, featuredString) => {
    const featured = booleanParse(featuredString)
    const priority = parseInt(priorityString)
    const data = await faunaClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index(jobsByCategoryLatestFeaturedFirst), "engineering"), {
          size: size,
          after: [featured, priority, q.Ref(q.Collection("jobs"), id)]
        }),
        (featured, priority, ref) => q.Merge(q.Select(["data"], q.Get(ref)), {id: ref })
      )
    )
    
    return data;
  }

  export const getCommercialJobs = async() => {
    const data = await faunaClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index(jobsByCategoryLatestFeaturedFirst), "commercial"), {
            size: size
          }),
          (featured, priority, ref) => q.Merge(q.Select(["data"], q.Get(ref)), {id: ref })
        )
      )
      
      return data;
    }

  export const getMoreCommercialJobs = async(id, priorityString, featuredString) => {
    const featured = booleanParse(featuredString)
    const priority = parseInt(priorityString)
      const data = await faunaClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index(jobsByCategoryLatestFeaturedFirst), "commercial"), {
            size: size,
            after: [featured, priority, q.Ref(q.Collection("jobs"), id)]
          }),
          (featured, priority, ref) => q.Merge(q.Select(["data"], q.Get(ref)), {id: ref })
        )
      )
      
      return data;
  }
  
  export const getProductJobs = async() => {
    const data = await faunaClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index(jobsByCategoryLatestFeaturedFirst), "product"), {
            size: size
          }),
          (featured, priority, ref) => q.Merge(q.Select(["data"], q.Get(ref)), {id: ref })
        )
      )
      
      return data;
    }
  
  export const getMoreProductJobs = async(id, priorityString, featuredString) => {
    const featured = booleanParse(featuredString)
    const priority = parseInt(priorityString)
    const data = await faunaClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index(jobsByCategoryLatestFeaturedFirst), "product"), {
          size: size,
          after: [featured, priority, q.Ref(q.Collection("jobs"), id)]
        }),
        (featured, priority, ref) => q.Merge(q.Select(["data"], q.Get(ref)), {id: ref })
      )
    )
    
    return data;
  }

  export const getClinicalJobs = async() => {
    const data = await faunaClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index(jobsByCategoryLatestFeaturedFirst), "clinical"), {
            size: size
          }),
          (featured, priority, ref) => q.Merge(q.Select(["data"], q.Get(ref)), {id: ref })
        )
      )
      
      return data;
    }

  export const getMoreClinicalJobs = async(id, priorityString, featuredString) => {
    const featured = booleanParse(featuredString)
    const priority = parseInt(priorityString)
      const data = await faunaClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index(jobsByCategoryLatestFeaturedFirst), "clinical"), {
            size: size,
            after: [featured, priority, q.Ref(q.Collection("jobs"), id)]
          }),
          (featured, priority, ref) => q.Merge(q.Select(["data"], q.Get(ref)), {id: ref })
        )
      )
      
      return data;
  }
  
  export const getDataJobs = async() => {
    const data = await faunaClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index(jobsByCategoryLatestFeaturedFirst), "data"), {
            size: size
          }),
          (featured, priority, ref) => q.Merge(q.Select(["data"], q.Get(ref)), {id: ref })
        )
      )
      
      return data;
    }
  
  export const getMoreDataJobs = async(id, priorityString, featuredString) => {
    const featured = booleanParse(featuredString)
    const priority = parseInt(priorityString)
    const data = await faunaClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index(jobsByCategoryLatestFeaturedFirst), "data"), {
          size: size,
          after: [featured, priority, q.Ref(q.Collection("jobs"), id)]
        }),
        (featured, priority, ref) => q.Merge(q.Select(["data"], q.Get(ref)), {id: ref })
      )
    )
    
    return data;
  }

  export const getMarketingJobs = async() => {
    const data = await faunaClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index(jobsByCategoryLatestFeaturedFirst), "marketing"), {
            size: size
          }),
          (featured, priority, ref) => q.Merge(q.Select(["data"], q.Get(ref)), {id: ref })
        )
      )
      
      return data;
    }

  export const getMoreMarketingJobs = async(id, priorityString, featuredString) => {
    const featured = booleanParse(featuredString)
    const priority = parseInt(priorityString)
      const data = await faunaClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index(jobsByCategoryLatestFeaturedFirst), "marketing"), {
            size: size,
            after: [featured, priority, q.Ref(q.Collection("jobs"), id)]
          }),
          (featured, priority, ref) => q.Merge(q.Select(["data"], q.Get(ref)), {id: ref })
        )
      )
      
      return data;
  }
  
  export const getLegalHrFinJobs = async() => {
    const data = await faunaClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index(jobsByCategoryLatestFeaturedFirst), "legalhrfin"), {
            size: size
          }),
          (featured, priority, ref) => q.Merge(q.Select(["data"], q.Get(ref)), {id: ref })
        )
      )
      
      return data;
    }
  
  export const getMoreLegalHrFinJobs = async(id, priorityString, featuredString) => {
    const featured = booleanParse(featuredString)
    const priority = parseInt(priorityString)
    const data = await faunaClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index(jobsByCategoryLatestFeaturedFirst), "legalhrfin"), {
          size: size,
          after: [featured, priority, q.Ref(q.Collection("jobs"), id)]
        }),
        (featured, priority, ref) => q.Merge(q.Select(["data"], q.Get(ref)), {id: ref })
      )
    )
    
    return data;
  }

  export const getCustomerSupportOpsJobs = async() => {
    const data = await faunaClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index(jobsByCategoryLatestFeaturedFirst), "customersupportops"), {
            size: size
          }),
          (featured, priority, ref) => q.Merge(q.Select(["data"], q.Get(ref)), {id: ref })
        )
      )
      
      return data;
    }

  export const getMoreCustomerSupportOpsJobs = async(id, priorityString, featuredString) => {
    const featured = booleanParse(featuredString)
    const priority = parseInt(priorityString)
      const data = await faunaClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index(jobsByCategoryLatestFeaturedFirst), "customersupportops"), {
            size: size,
            after: [featured, priority, q.Ref(q.Collection("jobs"), id)]
          }),
          (featured, priority, ref) => q.Merge(q.Select(["data"], q.Get(ref)), {id: ref })
        )
      )
      
      return data;
  }

  export const getOtherJobs = async() => {
    const data = await faunaClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index(jobsByCategoryLatestFeaturedFirst), "other"), {
            size: size
          }),
          (featured, priority, ref) => q.Merge(q.Select(["data"], q.Get(ref)), {id: ref })
        )
      )
      
      return data;
    }

  export const getMoreOtherJobs = async(id, priorityString, featuredString) => {
    const featured = booleanParse(featuredString)
    const priority = parseInt(priorityString)
      const data = await faunaClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index(jobsByCategoryLatestFeaturedFirst), "other"), {
            size: size,
            after: [featured, priority, q.Ref(q.Collection("jobs"), id)]
          }),
          (featured, priority, ref) => q.Merge(q.Select(["data"], q.Get(ref)), {id: ref })
        )
      )

      return data;
  }
  