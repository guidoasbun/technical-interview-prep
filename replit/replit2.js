isValid = (stale, latest, otjson) => {
  // this is the part you will write!

  let staleNew;

  const parsedOtjson = JSON.parse(otjson);
  if (stale === latest && parsedOtjson.length === 0) {
    console.log(`true`);
    return
  } 

  for (let i = 0; i < parsedOtjson.length; i++) {
    console.log(parsedOtjson[i].op[0]);
  }
};

isValid(
  "Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.",
  "Repl.it uses operational transformations.",
  '[{"op": "skip", "count": 40}, {"op": "delete", "count": 47}]'
); // true

isValid(
  "Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.",
  "Repl.it uses operational transformations.",
  '[{"op": "skip", "count": 45}, {"op": "delete", "count": 47}]'
); // false, delete past end

isValid(
  "Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.",
  "Repl.it uses operational transformations.",
  '[{"op": "skip", "count": 40}, {"op": "delete", "count": 47}, {"op": "skip", "count": 2}]'
); // false, skip past end

isValid(
  "Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.",
  "We use operational transformations to keep everyone in a multiplayer repl in sync.",
  '[{"op": "delete", "count": 7}, {"op": "insert", "chars": "We"}, {"op": "skip", "count": 4}, {"op": "delete", "count": 1}]'
); // true

isValid(
  "Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.",
  "Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.",
  "[]"
); // true
