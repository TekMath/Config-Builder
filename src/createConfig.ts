import createConfigFile from "./createConfigFile";
import fillConfigFile from "./fillConfigFile";

/**
 * Create a new config in a `/[path]/[env]` folder with files content and credentials
 * @param filesPaths Paths of all template files
 * @param path Path of the config global directory
 * @param env Env name for folder & names of the config (`config.[env].json`)
 */
export default async function createConfig(
  filesPaths: string[],
  path: string,
  env: string
): Promise<void> {
  await Promise.all(
    filesPaths.map(async (file) => {
      const newConfig = await fillConfigFile(file);

      await createConfigFile(path, env, file, newConfig);
    })
  );
}
