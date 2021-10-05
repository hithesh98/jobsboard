import React from "react";

const Sitemap = () => {};

export const getServerSideProps = ({ res }) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
              http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->
  
  
  <url>
    <loc>https://jobsinhealthtech.com/</loc>
    <lastmod>2021-10-05T11:56:23+00:00</lastmod>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>https://jobsinhealthtech.com/resources/blog/page/1</loc>
    <lastmod>2021-10-05T11:56:23+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://jobsinhealthtech.com/search</loc>
    <lastmod>2021-10-05T11:56:23+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://jobsinhealthtech.com/post</loc>
    <lastmod>2021-10-05T11:56:23+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://jobsinhealthtech.com/terms</loc>
    <lastmod>2021-10-05T11:56:23+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://jobsinhealthtech.com/privacy</loc>
    <lastmod>2021-10-05T11:56:23+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://jobsinhealthtech.com/resources/blog/secure-a-role-in-one-of-the-fastest-growing-industries</loc>
    <lastmod>2021-10-05T11:56:23+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  
  
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;