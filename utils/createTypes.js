const { getDataSet } = require("../index.js");
const fs = require("fs");
const prettier = require("prettier");

const main = async () => {
  const setNames = [
    "classes",
    "feats",
    "classfeatures",
    "spells",
    "backgrounds",
    "ancestries",
    "ancestryfeatures",
    "heritages",
    "feat-effects",
    "spell-effects",
  ];

  for (const setName of setNames) {
    console.log(setName);
    const set = await getDataSet(setName);
    const text = JSON.stringify(set);
    fs.writeFileSync(
      `./PREBUILD_DATA/${setName}.ts`,
      `const ${setName}_data = ${text}`
    );
  }
};

main();
