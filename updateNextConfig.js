import fs from "fs";
import path from "path";
import { methodReadWrite } from "./method-read-write.js";
import { printCheckDirectoryPathStructions } from "./utils.js";

const updateNextConfig = (projectPath, marker, contentToInsert) => {
  const configPath = path.join(projectPath, "../../../", "next.config.mjs");
  if (!fs.existsSync(configPath)) {
    printCheckDirectoryPathStructions();
    process.exit(1);
  } else {
    return methodReadWrite(configPath, marker, contentToInsert);
  }
};

export { updateNextConfig };
