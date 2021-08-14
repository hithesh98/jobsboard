import faunadb from 'faunadb';
const faunaClient = new faunadb.Client({secret: process.env.FAUNA_SECRET});
const q = faunadb.query

// Variables used for queries
const jobsByCategoryAscTitle = 'jobs_by_category_asc_title'
// The number of jobs shown on home page.
const homeSize = 5
// The number of jobs shown per category page.
const size = 2

// JOBS FOR HOME PAGE
export const getHomeEngineeringJobs = async() => {
  const data = await faunaClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index(jobsByCategoryAscTitle), "engineering"), {
          size: homeSize
        }),
        (x, ref) => q.Select(["data"], q.Get(ref))
      )
    )
    
    return data;
  }
  
  

export const getHomeCommercialJobs = async() => {
  const data = await faunaClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index(jobsByCategoryAscTitle), "commercial"), {
          size: homeSize
        }),
        (x, ref) => q.Select(["data"], q.Get(ref))
      )
    )
    
    return data;
  }
  
export const getHomeProductJobs = async() => {
  const data = await faunaClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index(jobsByCategoryAscTitle), "product"), {
          size: homeSize
        }),
        (x, ref) => q.Select(["data"], q.Get(ref))
      )
    )
    
    return data;
  }
  
export const getHomeClinicalJobs = async() => {
  const data = await faunaClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index(jobsByCategoryAscTitle), "clinical"), {
          size: homeSize
        }),
        (x, ref) => q.Select(["data"], q.Get(ref))
      )
    )
    
    return data;
  }
  
export const getHomeMarketingJobs = async() => {
  const data = await faunaClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index(jobsByCategoryAscTitle), "marketing"), {
          size: homeSize
        }),
        (x, ref) => q.Select(["data"], q.Get(ref))
      )
    )
    
    return data;
  }
  
export const getHomeCustomerSupportOpsJobs = async() => {
  const data = await faunaClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index(jobsByCategoryAscTitle), "customersupportops"), {
          size: homeSize
        }),
        (x, ref) => q.Select(["data"], q.Get(ref))
      )
    )
    
    return data;
  }
  
export const getHomeDataJobs = async() => {
  const data = await faunaClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index(jobsByCategoryAscTitle), "data"), {
          size: homeSize
        }),
        (x, ref) => q.Select(["data"], q.Get(ref))
      )
    )
    
    return data;
  }
  
export const getHomeLegalHrFinJobs = async() => {
  const data = await faunaClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index(jobsByCategoryAscTitle), "legalhrfin"), {
          size: homeSize
        }),
        (x, ref) => q.Select(["data"], q.Get(ref))
      )
    )
    
    return data;
  }
  
export const getHomeMiscJobs = async() => {
  const data = await faunaClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index(jobsByCategoryAscTitle), "misc"), {
          size: homeSize
        }),
        (x, ref) => q.Select(["data"], q.Get(ref))
      )
    )
    
    return data;
  }
  
  // JOBS BY CATEGORIES 
  export const getEngineeringJobs = async() => {
    const data = await faunaClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index("jobs_by_category_asc_title"), "engineering"), {
            size: size,
          }),
          (x, ref) => q.Select(["data"], q.Get(ref))
        )
      )
      
      return data;
    }
  
  export const getMoreEngineeringJobs = async(id, title) => {
    const data = await faunaClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index("jobs_by_category_asc_title"), "engineering"), {
          size: size,
          after: [title, q.Ref(q.Collection("jobs"), id)]
        }),
        (x, ref) => q.Select(["data"], q.Get(ref))
      )
    )
    
    return data;
  }

  export const getCommercialJobs = async() => {
    const data = await faunaClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index(jobsByCategoryAscTitle), "commercial"), {
            size: size
          }),
          (x, ref) => q.Select(["data"], q.Get(ref))
        )
      )
      
      return data;
    }

  export const getMoreCommercialJobs = async(id, title) => {
      const data = await faunaClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index(jobsByCategoryAscTitle), "commercial"), {
            size: size,
            after: [title, q.Ref(q.Collection("jobs"), id)]
          }),
          (x, ref) => q.Select(["data"], q.Get(ref))
        )
      )
      
      return data;
  }
  
  export const getProductJobs = async() => {
    const data = await faunaClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index(jobsByCategoryAscTitle), "product"), {
            size: size
          }),
          (x, ref) => q.Select(["data"], q.Get(ref))
        )
      )
      
      return data;
    }
  
  export const getMoreProductJobs = async(id, title) => {
    const data = await faunaClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index(jobsByCategoryAscTitle), "product"), {
          size: size,
          after: [title, q.Ref(q.Collection("jobs"), id)]
        }),
        (x, ref) => q.Select(["data"], q.Get(ref))
      )
    )
    
    return data;
  }

  export const getClinicalJobs = async() => {
    const data = await faunaClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index(jobsByCategoryAscTitle), "clinical"), {
            size: size
          }),
          (x, ref) => q.Select(["data"], q.Get(ref))
        )
      )
      
      return data;
    }

  export const getMoreClinicalJobs = async(id, title) => {
      const data = await faunaClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index(jobsByCategoryAscTitle), "clinical"), {
            size: size,
            after: [title, q.Ref(q.Collection("jobs"), id)]
          }),
          (x, ref) => q.Select(["data"], q.Get(ref))
        )
      )
      
      return data;
  }
  
  export const getDataJobs = async() => {
    const data = await faunaClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index(jobsByCategoryAscTitle), "data"), {
            size: size
          }),
          (x, ref) => q.Select(["data"], q.Get(ref))
        )
      )
      
      return data;
    }
  
  export const getMoreDataJobs = async(id, title) => {
    const data = await faunaClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index(jobsByCategoryAscTitle), "data"), {
          size: size,
          after: [title, q.Ref(q.Collection("jobs"), id)]
        }),
        (x, ref) => q.Select(["data"], q.Get(ref))
      )
    )
    
    return data;
  }

  export const getMarketingJobs = async() => {
    const data = await faunaClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index(jobsByCategoryAscTitle), "marketing"), {
            size: size
          }),
          (x, ref) => q.Select(["data"], q.Get(ref))
        )
      )
      
      return data;
    }

  export const getMoreMarketingJobs = async(id, title) => {
      const data = await faunaClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index(jobsByCategoryAscTitle), "marketing"), {
            size: size,
            after: [title, q.Ref(q.Collection("jobs"), id)]
          }),
          (x, ref) => q.Select(["data"], q.Get(ref))
        )
      )
      
      return data;
  }
  
  export const getLegalHrFinJobs = async() => {
    const data = await faunaClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index(jobsByCategoryAscTitle), "legalhrfin"), {
            size: size
          }),
          (x, ref) => q.Select(["data"], q.Get(ref))
        )
      )
      
      return data;
    }
  
  export const getMoreLegalHrFinJobs = async(id, title) => {
    const data = await faunaClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index(jobsByCategoryAscTitle), "legalhrfin"), {
          size: size,
          after: [title, q.Ref(q.Collection("jobs"), id)]
        }),
        (x, ref) => q.Select(["data"], q.Get(ref))
      )
    )
    
    return data;
  }

  export const getCustomerSupportOpsJobs = async() => {
    const data = await faunaClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index(jobsByCategoryAscTitle), "customersupportops"), {
            size: size
          }),
          (x, ref) => q.Select(["data"], q.Get(ref))
        )
      )
      
      return data;
    }

  export const getMoreCustomerSupportOpsJobs = async(id, title) => {
      const data = await faunaClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index(jobsByCategoryAscTitle), "customersupportops"), {
            size: size,
            after: [title, q.Ref(q.Collection("jobs"), id)]
          }),
          (x, ref) => q.Select(["data"], q.Get(ref))
        )
      )
      
      return data;
  }

  export const getMiscJobs = async() => {
    const data = await faunaClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index(jobsByCategoryAscTitle), "misc"), {
            size: size
          }),
          (x, ref) => q.Select(["data"], q.Get(ref))
        )
      )
      
      return data;
    }

  export const getMoreMiscJobs = async(id, title) => {
      const data = await faunaClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index(jobsByCategoryAscTitle), "misc"), {
            size: size,
            after: [title, q.Ref(q.Collection("jobs"), id)]
          }),
          (x, ref) => q.Select(["data"], q.Get(ref))
        )
      )

      return data;
  }
  