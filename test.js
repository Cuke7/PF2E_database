const {
  getDataSet,
  getDataEn,
  translateToFr,
  getDescriptionFr,
} = require("./index.js");

const testDataBase = async () => {
  const set = await getDataSet("classes");
  console.log(
    "getDataSet:",
    set.alchemist._id == "XwfcJuskrhI9GIjX" ? true : false
  );

  let descriptionEN = await getDataEn("Xg57qG1rOfSSobke");
  console.log(
    "getDataEn:",
    descriptionEN._id == "Xg57qG1rOfSSobke" ? true : false
  );

  let nameFR = translateToFr("Breath Weapon");
  console.log("translateToFr:", nameFR == "Arme de souffle" ? true : false);

  let descriptionFR = await getDescriptionFr("GUnw9YXaW3YyaCAU");
  console.log(
    "getDataEn:",
    descriptionFR.nameFR == "Auto-adaptation" ? true : false
  );
};

testDataBase();
