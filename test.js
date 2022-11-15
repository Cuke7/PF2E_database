let db = require('./index.js')


// db.getDataSet("classes").then(res => console.log(res))

//console.log(db.translateToFr("Breath Weapon"))

// db.getItemById("feCnVrPPlKhl701x").then(res => console.log(res))


//db.getItemById("GUnw9YXaW3YyaCAU", "en").then(function (res) {
//    console.log(res)
//})

// db.getDataEn("Xg57qG1rOfSSobke").then(res => console.log(res))
db.geDescriptionFr("GUnw9YXaW3YyaCAU").then(res => console.log(res))