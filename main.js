// API
const fetchItems = () => {
  return fetch('https://mysterious-mesa-00016.herokuapp.com/items')
    .then(response => response.json())
    .then(data => data);
}

// how do I move the renderScreen outside of fetch fn?
const itemsPromise = fetchItems();

// QUERY SELECTORS
const totalCostText = document.querySelector('span');
const tableBody = document.querySelector('tbody');

// FUNCTIONS
const renderRows = (items) => {
  tableBody.innerHTML = '';
  items.forEach(item => {
    tableBody.innerHTML += `
    <tr>
      <td>${item.recipient}</td>
      <td>${item.name}</td>
      <td>$ ${item.priceInDollars}</td>
      <td><input type="checkbox"></td>
    </tr>
    `
  })

}

const calculateTotalCost = (items) => {
  return items.reduce((acc, item) => {
    acc += item.priceInDollars;
    return acc;
  }, 0);
}

const renderTotalCost = (items) => {
  const totalCost = calculateTotalCost(items);
  totalCostText.innerText = `$ ${totalCost}`;
}

const renderScreen = (items) => {
  renderRows(items)
  renderTotalCost(items);
}

itemsPromise.then(data => renderScreen(data));
