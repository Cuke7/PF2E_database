let fs = require("fs");

writeFile().then((res) => console.log(res));

async function writeFile() {
  let idMap = [];
  const folderList = fs.readdirSync("./PF2E_DATA_EN");
  console.log(folderList);
  for (const folder of folderList) {
    console.log(folder);
    const files = fs.readdirSync("./PF2E_DATA_EN/" + folder);
    for (const file of files) {
      const data = await fs.promises.readFile(
        "./PF2E_DATA_EN/" + folder + "/" + file
      );
      let item = JSON.parse(data);
      idMap.push({ id: item._id, path: folder + "/" + file });
    }
  }
  fs.writeFileSync("./IDmap.json", JSON.stringify(idMap));
  return Promise.resolve(idMap);
}
