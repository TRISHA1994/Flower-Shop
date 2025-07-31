function renderCart() {
   
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const container = document.getElementById('cartCont');
    
    const mainContainer = document.getElementById('cartMain');
    const cartTemplate = document.getElementById('cartValue');
    const cartSubTotal = document.getElementById('cartSubtotal');
    const cartTotal = document.getElementById('cartTotal');
    const summeryTemplate = document.getElementById('summery-template');
    let subTotal = 0;
    let shipping = 0;
    let total = 0;
    if (cart.length === 0) {
      mainContainer.innerHTML = '<div class="text-center"><h2>Your cart is empty.</h2><a href="shop.html"><button class="prod-btn">Shop Now</button></a></div>';
      return;
    }
 
    cart.forEach((product, index) => {
      const cartClone = cartTemplate.content.cloneNode(true);
 
      cartClone.getElementById('cartTitle').textContent = product.name;
      cartClone.getElementById('cartPrice').textContent = product.price;
      cartClone.getElementById('cartsubPrice').textContent = product.price;
      cartClone.getElementById('cartImg').src = product.image;
      const subPrice = parseFloat(product.price.replace(/[$,]/g, ''));
      const removeBtn = cartClone.getElementById('cartRemove');
      removeBtn.setAttribute('data-index', index);
      removeBtn.addEventListener('click', () => {
        removeItem(index);
      });
      function removeItem(index) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
        window.location.reload();
      }
 
     
      total += subPrice;
      container.appendChild(cartClone);
 
    });
    cartSubTotal.textContent= `$${total.toFixed(2)}` ;
    cartTotal.textContent= `$${total.toFixed(2)}`;
    
  }
 
  renderCart();