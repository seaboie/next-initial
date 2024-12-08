import path from "path";
import { methodReadWrite } from "./method-read-write.js";

const updateNextConfig = (currentPath, marker, contentToInsert) => {
  const configPath = path.join(currentPath, "next.config.ts");

  return methodReadWrite(configPath, marker, contentToInsert);
};

export { updateNextConfig };
