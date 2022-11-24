import matter from "gray-matter";

export function getContentFromFolder(folder: string) {
  const { readdirSync, readFileSync } = require("fs");
  const path = require("path");
  const files = readdirSync(path.resolve(process.cwd(), folder));

  return files.map((filename) => {
    const file = readFileSync(
      path.resolve(process.cwd(), `${folder}/${filename}`),
      "utf8"
    );
    const matterData = matter(file);

    return {
      ...matterData.data,
      body: matterData.content,
      slug: filename.slice(0, filename.indexOf(".")),
    };
  });
}

export function getContentFromFile(filepath: string) {
  const { readFileSync } = require("fs");
  const path = require("path");

  const file = readFileSync(path.resolve(process.cwd(), filepath), "utf8");
  const matterData = matter(file);

  return {
    ...matterData.data,
    body: matterData.content,
    slug: filepath.slice(filepath.lastIndexOf("/"), filepath.indexOf(".")),
  };
}

export function sortAlphabetically(field: string) {
  return (a, b) => {
    const flatA = a[field].toLowerCase();
    const flatB = b[field].toLowerCase();
    return flatA === flatB ? 0 : flatA < flatB ? -1 : 1;
  };
}

export function sortDate(field: string, oldest = false) {
  return (a, b) => {
    var dateA = new Date(a[field]).getTime();
    var dateB = new Date(b[field]).getTime();
    if (oldest) {
      return dateA === dateB ? 0 : dateA < dateB ? 1 : -1;
    } else {
      return dateA === dateB ? 0 : dateA > dateB ? 1 : -1;
    }
  };
}
