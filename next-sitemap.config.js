/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://lamlarctic.eu',
  generateRobotsTxt: true, // (optional) generate robots.txt
  sitemapSize: 5000,       // max URLs per sitemap file
  changefreq: 'daily',     // default for all pages
  priority: 0.7,           // default priority
  exclude: ['/admin/*', '/private/*'], // pages to exclude
};
