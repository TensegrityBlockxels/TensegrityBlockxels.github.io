import * as fs from "fs";

const posts = [];

const staticFiles = fs.readdirSync("./static/");

staticFiles.forEach((post) => {
  if (post.startsWith("post")) {
    posts.push("/blog/" + post.replace(".md", ""));
  }
});


export { posts };
