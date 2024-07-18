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
    const projectName = await askQuestion('Project name: ');
    const useTypeScript = await askQuestion('Use TypeScript? (yes/no): ');

    const projectPath = path.join(process.cwd(), projectName);
    const isTypeScript = useTypeScript.toLowerCase() === 'yes';

    if (!fs.existsSync(projectPath)) {
      fs.mkdirSync(projectPath, { recursive: true });
    } else {
      console.log('Project directory already exists.');
      process.exit(1);
    }

    createFiles(projectPath, isTypeScript);

    if (isTypeScript) {
      execSync('npm install typescript @types/react @types/node', { cwd: projectPath, stdio: 'inherit' });
    }

    execSync('npm install react react-dom next', { cwd: projectPath, stdio: 'inherit' });

    console.log('Project setup complete!');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    rl.close();
  }
})();
