# pf2e-database

pf2e-database is a module alowing to access data from Pathfinder 2E.

The data comes from 2 github repositories:

- https://github.com/foundryvtt/pf2e
- https://github.com/pathfinder-fr/foundryvtt-pathfinder2-fr

_Disclaimer : the data doesn't belong to me and this project was purely made as an exercise._

## Installation

```bash
npm install pf2e-database
```

## Get datasets

### `getDataSet(dataSetName) -> promise`

Retrieve a whole dataset by providing its name. See the list of allowed **_dataSetName_** arguments [here](https://github.com/foundryvtt/pf2e/tree/master/packs). Returns a empty object if the dataset name is incorrect.

**Exemple:**

```javascript
import { getDataSet } from "pf2e-database";
let set = await getDataSet("classes");
console.log(set);
/*
{
  alchemist: {
    _id: 'XwfcJuskrhI9GIjX',
    data: {
      ancestryFeatLevels: [Object],
      attacks: [Object],
      classDC: 1,
      classFeatLevels: [Object],
      defenses: [Object],
      description: [Object],
      generalFeatLevels: [Object],
      hp: 8,
      items: [Object],
      keyAbility: [Object],
      perception: 1,
      rules: [Array],
      savingThrows: [Object],
      skillFeatLevels: [Object],
      skillIncreaseLevels: [Object],
      source: [Object],
      trainedSkills: [Object],
      traits: [Object]
    },
    img: 'systems/pf2e/icons/classes/alchemist.webp',
    name: 'Alchemist',
    type: 'class'
  },
  barbarian: {
    _id: 'YDRiP7uVvr9WRhOI',
    data: {
      ancestryFeatLevels: [Object],
      attacks: [Object],
      ...
*/
let set = await getDataSet("foo");
console.log(set);
/*
{}
*/
```

## Get item (english)

### `getDataEn(id) -> promise`

Retrieve the item by providing its **_id_**. Returns a empty object if the id is incorrect.

**Exemple:**

```javascript
import { getDataEn } from "pf2e-database";
let description = await getDataEn("Xg57qG1rOfSSobke");
console.log(description);
/*
{
  _id: 'Xg57qG1rOfSSobke',
  data: {
    actionCategory: { value: 'offensive' },
    actionType: { value: 'action' },
    actions: { value: 2 },
    description: {
      value: "<p>The riding drake breathes a @Template[type:cone|distance:30]{30-foot cone} of fire, dealing [[/r ((ceil(@actor.level/2))d6)[fire]]]{1d6 fire damage for every 2 levels the drake has} to all creatures in the area (basic Reflex save). This uses a trained DC using the drake's Constitution modifier or an expert DC if the drake is specialized.</p>"
    },
    requirements: { value: '' },
    rules: [],
    source: { value: "Pathfinder Advanced Player's Guide" },
    traits: { custom: '', rarity: 'common', value: [] },
    trigger: { value: '' },
    weapon: { value: '' }
  },
  img: 'systems/pf2e/icons/actions/TwoActions.webp',
  name: 'Breath Weapon (Riding Drake)',
  type: 'action'
}
*/
let description = await getDataEn("foo");
console.log(description);
/*
{}
*/
```

## French translation

### `translateToFr(item) -> string`

Get the french translation for the **_item_** provided. Returns a empty string if the id is incorrect.

**Exemple:**

```javascript
import { translateToFr } = from "pf2e-database";
let nameFR = await translateToFr("Breath Weapon");
console.log(nameFR);
// 'Arme de souffle'

let nameFR = await translateToFr("foo");
console.log(nameFR);
// ''
```

## Get item (french)

### `db.getDescriptionFr(id) -> promise`

Get the french description for an item by providing its **_id_**. Whenever the description makes a reference to another item, the item name and id is provided in the **_references_** field. Returns a empty object if the id is incorrect.

**Exemple:**

```javascript
import { getDescriptionFr } = from "pf2e-database";
let description = await getDescriptionFr("GUnw9YXaW3YyaCAU");
console.log(description);
/*
{
  nameFR: 'Auto-adaptation',
  descriptionFR: "<p>Vous vous modifiez subtilement pour vous adapter à une situation. Choisissez l'une des options suivantes qui s'applique à vous.</p>\r\n" +
    '<ul>\r\n' +
    "<li>Si vous êtes dans l'eau, vous gagnez une Vitesse de <b>Nage*</b> égale à la moitié de votre Vitesse.</li>\r\n" +
    "<li>Si vous êtes dans l'eau, vous pouvez respirer sous l'eau.</li>\r\n" +
    "<li>S'il fait trop sombre pour que vous puissiez voir, vous obtenez la <b>Vision dans le noir**</b>.</li>\r\n" +
    '<li>Si vous êtes dans un environnement de chaleur ou de froid intense, vous êtes protégé des effets de chaleur ou de froid intense, et le sort dure 10 minutes.</li>\r\n' +
    '</ul>\r\n',
  references: [
    { name: 'Nage', id: '2SWUzp4JuNK5EX0J' },
    { name: 'Vision dans le noir', id: '0gv9D5RlrF5cKA3I' }
  ]
}
*/

let description = await getDescriptionFr("foo");
console.log(description);
/*
{}
*/
```
