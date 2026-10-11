import { mkdir, copyFile, writeFile } from "node:fs/promises";

const outputDir = new URL("./dist/", import.meta.url);

await mkdir(outputDir, { recursive: true });

await copyFile(
  new URL("./src/index.html", import.meta.url),
  new URL("./dist/index.html", import.meta.url)
);

await writeFile(
  new URL("./dist/uri.txt", import.meta.url),
  "https://github.com/davidperyro-stack/Lightweight-minesweeper\n",
  "utf8"
);

console.log("Build completed successfully!");
console.log("Output: dist/index.html");
console.log("Output: dist/uri.txt");
