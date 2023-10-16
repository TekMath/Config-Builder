import fs from "fs";

export default function readFiles(path: string): string[] {
  const filesPaths: string[] = [];
  const files = fs.readdirSync(path);

  files.map((file) => {
    if (fs.lstatSync(`${path}/${file}`).isDirectory()) {
      readFiles(`${path}/${file}`).map((f) => filesPaths.push(f));
      return;
    }
    filesPaths.push(`${path}/${file}`);
  });
  return filesPaths;
}
