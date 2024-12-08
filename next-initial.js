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
  const folderPaths = process.cwd().split("/");
  const projectName = folderPaths[folderPaths.length - index];
  return projectName;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

(async () => {
  try {
    // Project name
    const projectName = getProjectName(1);
    console.log(`🚀 🚀 🚀 NEXT.js ${projectName} project.`);

    // Ask question
    const widgetName = await askQuestion(
      "💻 Enter the name for your widget folder: "
    );

    const srcPath = path.join(process.cwd(), "src");
    const componentsPath = path.join(srcPath, "components");
    const widgetPath = path.join(componentsPath, widgetName);

    updateTailwindConfig(process.cwd(), 'foreground: "var(--foreground)",', `${contentTailwindConfig}`)
      .then(() => {
        updateNextConfig(
          process.cwd(),
          "/* config options here */",
          `${contentNextConfig}`
        )
          .then(() => {
            fs.promises.mkdir(widgetPath, { recursive: true }).then(() => {
              console.log(
                `✨ Directory struction src/components/${widgetName} created successfully`
              );
              createFiles(widgetPath);
            });
          })
          .catch((err) =>
            console.log(`Could not update next.config.mjs file. \n ${err}`)
          );
      })
      .catch((err) => console.log(`Could not update tailwind.config.ts file.`));
  } catch (error) {
    console.error("😖 😖 😖 Error:", error);
  } finally {
    rl.close();
  }
})();
