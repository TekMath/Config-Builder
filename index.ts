import readFiles from "./src/readFiles";
import createConfig from "./src/createConfig";

const path = "./config";
const template = "/template";
const env = "production";
const filesPaths = readFiles(`${path}${template}`);

await createConfig(filesPaths, path, env);
console.log(
  `✔️ Build ${filesPaths.length} config files in ${path}${template} directory with success.`
);
