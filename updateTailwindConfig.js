import path from "path";
import { methodReadWrite } from "./method-read-write.js";

const updateTailwindConfig = (currentPath, marker, contentToInsert) => {
  const configPath = path.join(currentPath, "tailwind.config.ts");

  return methodReadWrite(configPath, marker, contentToInsert);
};

export { updateTailwindConfig };
