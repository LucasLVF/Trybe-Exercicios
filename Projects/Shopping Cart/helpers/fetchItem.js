const fetchItem = async (param) => {
  const url = `https://api.mercadolibre.com/items/${param}`;
  const response = await fetch(url);
  const data = await response.json();  
  return data;
};
fetchItem('MLB1341706310');
if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
