import { DateTime } from "luxon";

export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "public": "/" });
  eleventyConfig.addWatchTarget("public/css/tacit.css");

  eleventyConfig.addFilter("date", function(dateObj, format = "yyyy-LL-dd") {
    if (!dateObj) return "";
    let dt;
    if (typeof dateObj === "string") {
      dt = DateTime.fromISO(dateObj, { zone: "utc" });
      if (!dt.isValid) dt = DateTime.fromJSDate(new Date(dateObj), { zone: "utc" });
    } else if (dateObj instanceof Date) {
      dt = DateTime.fromJSDate(dateObj, { zone: "utc" });
    } else if (dateObj && typeof dateObj.toJSDate === "function") {
      try {
        dt = DateTime.fromJSDate(dateObj.toJSDate(), { zone: "utc" });
      } catch (e) {
        dt = DateTime.fromJSDate(new Date(dateObj), { zone: "utc" });
      }
    } else {
      dt = DateTime.fromJSDate(new Date(dateObj), { zone: "utc" });
    }
    return dt.isValid ? dt.toFormat(format) : "";
  });

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  eleventyConfig.addFilter("truncate", (value, length = 140) => {
    if (!value) return "";
    const str = String(value);
    return str.length > length ? `${str.slice(0, length).trimEnd()}…` : str;
  });

  eleventyConfig.addCollection("posts", (collection) => {
    return collection
      .getFilteredByGlob("content/blog/**/*.md")
      .filter((p) => !p.data.draft)
      .sort((a, b) => (a.date > b.date ? -1 : 1));
  });

  return {
    dir: {
      input: "content",
      includes: "_includes",
      layouts: "_layouts"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk"]
  };
}
