fetch('js/product.json')
    .then(res => res.json())
    .then(products => {
      const list = document.getElementById('product_lst');
      const template = document.getElementById('product');
 
      if (template) {
        products.slice(0, 3).forEach(product => {
          const clone = template.content.cloneNode(true);
 
          const img = clone.querySelector('img');
          const title = clone.querySelector('.prod_head');
          const price = clone.querySelector('.prod_price');
 
          if (img) img.src = product.image;
          if (img) img.alt = product.name;
          if (title) title.textContent = product.name;
          if (price) price.textContent = product.price;
 
 
          const params = new URLSearchParams({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            description: product.description,
            ingredients:product.ingredients
          });
 
          clone.querySelector('.prod_btn').href = `./product_details.html?${params.toString()}`;
 
          list.appendChild(clone);
        });
      }
    })
    .catch(err => console.error('Error loading products:', err));