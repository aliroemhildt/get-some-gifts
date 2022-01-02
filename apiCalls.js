const fetchItems = () => {
  fetch("https://mysterious-mesa-00016.herokuapp.com/items")
    .then(response => response.json())
    .then(data => data)
}

module.exports = fetchItems;
