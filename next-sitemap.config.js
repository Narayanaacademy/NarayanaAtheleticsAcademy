const siteUrl = "https://www.narayanaathletics.in"; // ✅ no trailing slash

export default {
  siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,

  // ✅ Force homepage to be first and highest priority
  additionalPaths: async (config) => {
    return [
      await config.transform(config, {
        loc: "/", // homepage
        changefreq: "daily",
        priority: 1.0,
      }),
    ];
  },

  // ✅ Generate robots.txt automatically with sitemap link
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSitemaps: [`${siteUrl}/sitemap.xml`],
  },
};
