import matter from "gray-matter";
import fs from "fs";
import path from "path";

export function getContentFromFolder(folder: string) {
  const files = fs.readdirSync(path.resolve(process.cwd(), folder));

  return files.map((filename) => {
    const file = fs.readFileSync(
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
  const file = fs.readFileSync(path.resolve(process.cwd(), filepath), "utf8");
  const matterData = matter(file);

  return {
    ...matterData.data,
    body: matterData.content,
    slug: filepath.slice(filepath.lastIndexOf("/"), filepath.indexOf(".")),
  };
}
