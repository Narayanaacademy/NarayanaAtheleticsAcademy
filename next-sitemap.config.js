const siteUrl = "https://www.narayanaathletics.in"; // ✅ make sure domain is correct — no trailing slash

export default {
  siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,

  // ✅ Add this section to make homepage appear first and highest priority
  additionalPaths: async (config) => [
    await config.transform(config, {
      loc: "/", // homepage
      changefreq: "daily",
      priority: 1.0,
    }),
  ],

  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
