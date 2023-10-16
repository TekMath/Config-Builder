import fs from "fs";

/**
 * Create a new config file in `[env]` folder with credentials
 * @param path Path of the config global directory
 * @param env Env name for folder & names of the config (`config.[env].json`)
 * @param filePath Path of the template file
 * @param content New content of the file with credentials
 */
export default async function createConfigFile(
  path: string,
  env: string,
  filePath: string,
  content: string
) {
  const fileName = filePath.split("/").slice(3);
  const parseFileName = fileName.join("/")?.split(".");
  if (!parseFileName || parseFileName.length < 3) {
    throw new Error(`Invalid name file: ${filePath}`);
  }

  const subFolders = parseFileName[0].split("/").slice(0, -1).join("/");
  if (subFolders && !fs.existsSync(`${path}/${env}/${subFolders}`)) {
    fs.mkdirSync(`${path}/${env}/${subFolders}`, { recursive: true });
  }

  const newFilePath = `${path}/${env}/${parseFileName[0]}.${env}.${parseFileName[2]}`;
  await Bun.write(newFilePath, content);
}
