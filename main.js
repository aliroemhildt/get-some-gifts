// returns the promise object
async function fetchItems() { // difference b/w making this a normal vs async func?
  const items = fetch("https://mysterious-mesa-00016.herokuapp.com/items")
    .then(response => response.json())
    .then(data => data) // what is this line doing exactly?
    .catch(error => console.log(error))

    const allItems = await items; //why does this return just the data? not the entire promise object? const allItems = fetchItems() returns the whole object when it is outside of this function

    console.log(allItems);
}

fetchItems();
