const Item = item => {
  //A single shopping list item object
  return {
    key: item.key,
    name: item.name,
    style: item.style,
    colors: item.colors,
    color: item.colors[0],
    sizes: item.sizes,
    size: item.sizes[0],
    price: item.price,
    quantity: 1
  };
};

export default Item;
