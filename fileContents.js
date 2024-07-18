import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readTemplate = (templatePath) => {
  return fs.readFileSync(templatePath, 'utf-8').trim();
};

const createFiles = (projectPath) => {
  const packageJsonContent = readTemplate(path.join(__dirname, 'templates', 'package.json')).replace('PROJECT_NAME_PLACEHOLDER', path.basename(projectPath));


  const files = [
    { name: 'package.json', content: packageJsonContent },
    { name: 'layout/layout_card.tsx', content: readTemplate(path.join(__dirname, 'templates', 'layout/layout', 'layout_card.tsx'))},



    // { name: `pages/index.${isTypeScript ? 'tsx' : 'js'}`, content: readTemplate(path.join(__dirname, 'templates', isTypeScript ? 'ts' : 'js', `index.${isTypeScript ? 'tsx' : 'js'}`)) }
  ];

  // if (isTypeScript) {
    // files.push(
    //   { name: 'tsconfig.json', content: readTemplate(path.join(__dirname, 'templates', 'ts', 'tsconfig.json')) },
    //   { name: 'next-env.d.ts', content: readTemplate(path.join(__dirname, 'templates', 'ts', 'next-env.d.ts')) }
    // );
  // }

  files.forEach(file => {
    const filePath = path.join(projectPath, file.name);
    const dir = path.dirname(filePath);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(filePath, file.content);
  });
};

export { createFiles };
