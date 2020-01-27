// The question is given an object / dictionary where the keys are strings,
// and the values are either strings or another object / dictionary, can you
// return a new object / dictionary with the keys flattened.

// For example, { a: "b", c: { d: "e", "f": {g: "e"} } }, would become { a: "b", "c.d": "e", c.f.g: "e" }.
// Notice that this function will remove any of the nested objects / dictionaries,
// and will combine the keys in the nested objects / dictionaries to be joined by a period.

const dict1 = { a: "b", c: { d: "e", f: { g: "e" } } };
const dict2 = { a: "b", c: { d: "e", f: "g" } };

function flatten(dict) {
  const flat = {};
  for (const key in dict) {
    //base
    const current = dict[key];
    const parent = key;
    if (typeof current === "string") {
      flat[parent] = current;
    } else {
      flattenHelper(parent, current, flat);
    }
  }
  return flat;
}

function flattenHelper(parent, dictionary, flattened) {
  /*
 parent: c
 dictionary: {d:e, f:g}
 flattened: flat{}
 */
  for (let key in dictionary) {
    const newParent = `${parent}.${key}`;
    const current = dictionary[key];
    if (typeof current === "string") {
      flattened[newParent] = current;
    } else {
      flattenHelper(newParent, current, flattened);
    }
  }
}
/*
if the value is NOT an obj, use the value as value
if the value is an obj, append those keys with the prior key key1.key2
*/

console.log(flatten(dict1));
console.log(flatten(dict2)); // {a: "b", c.d: "e", c.f: "g"}
