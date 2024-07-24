const printCheckDirectoryPathStructions = (basePath = 'src/components') => {
  console.log(`🧐 🧐 🧐 Oops !!! Please check your path : like : ${basePath}/your new folder`);
  console.log("0️⃣ . cd ~");
  console.log(`1️⃣ . cd ${basePath.split("/")[0]}`);
  console.log(`2️⃣ . mkdir ${basePath.split("/")[1]}`);
  console.log(`3️⃣ . cd ${basePath.split("/")[1]}`);
  console.log(
    `Now you should stay at ${
      basePath.split("/")[1]
    } folder. Try changing directory again please`
  );
  console.log(`4️⃣ . nextinit`);
  console.log(`5️⃣ . Folder name is: your folder name...`);
};

export { printCheckDirectoryPathStructions };
