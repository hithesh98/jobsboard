import GhostContentAPI from "@tryghost/content-api";

const blogsPerPage = 6;

// API instance with site credentials
const api = new GhostContentAPI({
    url: 'https://jht-blog.herokuapp.com',
    key: process.env.GHOST_API_KEY,
    version: "v3"
  });


export async function getPosts() {
    return await api.posts
        .browse({
        include: "tags",
        limit: "all",
        })
        .catch(err => {
        console.error(err);
        });
}

export async function getPagePosts(n) {
  return await api.posts
      .browse({
      include: "tags,authors",
      limit: blogsPerPage,
      page: n,
      })
      .catch(err => {
      console.error(err);
      });
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      include: "tags,authors",
      slug: postSlug,
    })
    .catch(err => {
      console.error(err);
    });
}

export async function getPages() {
  return await api.pages
    .browse({
      limit: "all"
    })
    .catch(err => {
      console.error(err);
    });
}