import fs from "fs/promises";
import path from "path";

const methodReadWrite = async (configPath, marker, contentToInsert) => {

    try {
      const data = await fs.readFile(configPath, 'utf8');
      const updateData = data.replace(marker, `${marker}\n${contentToInsert}`);
      await fs.writeFile(configPath, updateData, 'utf8');
      console.log(`🛠️ 🛠️ 🛠️ Configuration inserted successfully into ${path.basename(configPath)}`);
    } catch (error) {
      console.error(`Oops !!! : Error processing file: ${err}`);
    }
  
}
export {methodReadWrite};