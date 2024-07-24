#!/usr/bin/env node

import fs from "fs";
import path from "path";
import readline from "readline";
import { createFiles } from "./fileContents.js";
import { updateTailwindConfig } from "./updateTailwindConfig.js";
import { updateNextConfig } from "./updateNextConfig.js";
import { contentNextConfig } from "./contentNextConfig.js";
import { contentTailwindConfig } from "./contentTailwindConfig.js";

// Find folder name of project
const getProjectName = (index) => {
  const folderPaths = process.cwd().split('/');
  const projectName = folderPaths[folderPaths.length - index];
  return projectName;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

(async () => {
  try {
    const folderName = await askQuestion(
      `🚀 🚀 🚀 NEXT.js ${getProjectName(3)} project. \n💻 Folder name is: `
    );

    const folderPath = path.join(process.cwd(), folderName);

    if (!fs.existsSync(folderPath)) {
      updateTailwindConfig(folderPath, "extend: {", `${contentTailwindConfig}`)
        .then(() => {
          updateNextConfig(folderPath, "nextConfig = {", `${contentNextConfig}`)
            .then(() => {
              fs.promises.mkdir(folderPath, { recursive: true }).then(() => {
                console.log(`✨ Directory ${folderName} created successfully`);
                createFiles(folderPath);
              });
            })
            .catch((err) =>
              console.log(`Could not update next.config.mjs file.`)
            );
        })
        .catch((err) =>
          console.log(`Could not update tailwind.config.ts file.`)
        );
      
    }
  } catch (error) {
    console.error("😖 😖 😖 Error:", error);
  } finally {
    rl.close();
  }
})();
