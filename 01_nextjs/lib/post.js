// 取り出す為のpathが必要(directoryを取得することが可能)
import path from "path";
import fs from "fs";
// meta dataを取り出すためのlibrary
import matter from "gray-matter";

// path.join()第一引数がcurrent directory(process.cdw()で表せる)。第二引数が取得してくるdirectory。
const postsDirectory = path.join(process.cwd(), "posts");

// mdファイルのデータを取り出す
export function getPostsData() {
  // ファイル名を取り出す
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // replace()第一引数に(/\$/, "")$の前に省きたい文字列を入れ、第二引数を空にすると$前に文字列を省いたものを格納する。
    //ファイル名
    const id = fileName.replace(/\.md$/, ""); 

    // ファイルの中身を取り出す
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    // idとdataを返す
    return {
      id,
      ...matterResult.data,
    };
  });

  return allPostsData;
}


// getStaticPathでreturnで使うpathを取得する