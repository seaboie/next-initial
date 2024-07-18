#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { execSync } from 'child_process';
import { createFiles } from './fileContents.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

(async () => {
  try {
    const projectName = await askQuestion('Folder name is: ');
    // const useTypeScript = await askQuestion('Use TypeScript? (yes/no): ');

    const folderPath = path.join(process.cwd(), projectName);
    // const isTypeScript = useTypeScript.toLowerCase() === 'yes';

    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    } else {
      console.log('Project directory already exists.');
      process.exit(1);
    }

    createFiles(folderPath);

    console.log('Project setup complete!');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    rl.close();
  }
})();
