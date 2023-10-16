/**
 * Get the content of a file & fill the content with credentials (env variables)
 * @param filePath Path of the config file
 */
export default async function fillConfigFile(filePath: string) {
  const content = await Bun.file(filePath).text();
  const parseContent = content.split("${");
  let newContent = parseContent[0];

  for (let i = 1; i < parseContent.length; i++) {
    const parseVariable = parseContent[i].split("}");

    if (parseVariable.length < 1) {
      throw new Error(`Error during fill of ${filePath} at ${i} variable.`);
    }

    newContent = `${newContent}${Bun.env[parseVariable[0]]}`;
    parseVariable.shift();
    newContent = `${newContent}${parseVariable[0]}`;
    parseVariable.shift();
    parseVariable.map((content) => {
      newContent = `${newContent}}${content}`;
    });
  }

  return newContent;
}
