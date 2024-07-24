import path from "path";
import { methodReadWrite } from "./method-read-write.js";

const updateNextConfig = (currentPath, marker, contentToInsert) => {
  const configPath = path.join(currentPath, "next.config.mjs");

  return methodReadWrite(configPath, marker, contentToInsert);
};

export { updateNextConfig };
