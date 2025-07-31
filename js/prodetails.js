const params = new URLSearchParams(window.location.search);
  const product = {
    id: params.get('id'),
    name: params.get('name'),
    price: params.get('price'),
    image: params.get('image'),
    description: params.get('description'),
    ingredients:params.get('ingredients')
  };
  const prodName = document.getElementById('prodName');
  const prodPrice = document.getElementById('prodPrice');
  const prodImage = document.getElementById('prodImg');
  
  const prodDesc = document.getElementById('prodDes');
  const prodCart = document.getElementById('cartBtn');

  if (prodName) prodName.textContent = product.name;
  if (prodImage) prodImage.src = product.image;
  if (prodPrice) prodPrice.textContent = product.price;
  if (prodDesc) prodDesc.textContent = product.description;
  
 

  prodCart.addEventListener('click', () => {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      const alreadyInCart = cart.some(item => item.id === product.id);
      if (alreadyInCart) {
        cart.pop();
        cart.push( product );
        localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        cart.push( product );
        localStorage.setItem('cart', JSON.stringify(cart));
        // alert('Product added to cart!');
      }
    });