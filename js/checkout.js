const form = document.querySelector("form");
 
    form.addEventListener("submit", function (e) {
      e.preventDefault();
 
      const fields = {
        firstName: document.querySelector("input[name='firstName']"),
        
        lastName: document.querySelector("input[name='lastName']"),
        
        phone: document.querySelector("input[name='phone']"),
        
        email:document.querySelector("input[name='email']"),
        
        country: document.querySelector("input[name='country']"),
        
        state: document.querySelector("input[name='state']"),
       
        city: document.querySelector("input[name='city']"),
        
        zip: document.querySelector("input[name='zip']"),
        
        address: document.querySelector("textarea[name='address']"),
        
        cardType:document.querySelector("select[name='cardType']"),
        cardNumber: document.querySelector("input[name='card']"),
        expiryMonth: document.querySelector("select[name='expiryMonth']"),
        expiryYear: document.querySelector("select[name='expiryYear']"),
        cvv: document.querySelector("input[name='cvv']"),
        terms: document.querySelector("input[name='terms']")
      };
 
      let isValid = true;
      let messages = [];
 
      Object.values(fields).forEach(field => field.style.borderColor = "");
 
      for (const key in fields) {
        if (!fields[key].value.trim()) {
          isValid = false;
          messages.push(`${key} is required`);
          fields[key].style.borderColor = "red";
        }
      }
 
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (fields.email && !emailPattern.test(fields.email.value)) {
        isValid = false;
        messages.push("Invalid email format");
        fields.email.style.borderColor = "red";
      }
      
 
     
      const phonePattern = /^[0-9]{10}$/;
      if (fields.phone && !phonePattern.test(fields.phone.value)) {
        isValid = false;
        messages.push("Phone must be 10 digits");
        fields.phone.style.borderColor = "red";
      }
      
     
      if (fields.cvv && !/^\d{3,4}$/.test(fields.cvv.value)) {
        isValid = false;
        messages.push("CVV must be 3 or 4 digits");
        fields.cvv.style.borderColor = "red";
      }
 
     
      if (fields.cardNumber && !/^\d{16}$/.test(fields.cardNumber.value.replace(/\s+/g, ''))) {
        isValid = false;
        messages.push("Card Number must be 16 digits");
        fields.cardNumber.style.borderColor = "red";
      }
      if (!fields.terms.checked ) {
        isValid = false;
        messages.push("Please agree with all the terms & conditions");
        fields.terms.style.outline = "2px solid red";
      }
 
      if (!isValid) {
        alert("Please Fill-Up the following:\n" + messages.join("\n"));
      } else {
        alert("Order Successfully Processed!!");
        form.submit();
        window.location.href = 'thankyou.html';
      }
    });
 
     // passing cart to checkout
 
    function renderSummery(){
      const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      const cartSubTotal = document.getElementById('cartSubtotal');
      const cartTotal = document.getElementById('cartTotal');
      let subTotal = 0;
      let shipping = 0;
      let total = 0;
     
      cartItems.forEach((product) => {
        const summeryContainer = document.getElementById('checkout-container');
        const summeryTemplate = document.getElementById('checkout-summery');
        const subPrice = parseFloat(product.price.replace(/[$,]/g, ''));
 
        const summeryClone = summeryTemplate.content.cloneNode(true);
        summeryClone.getElementById('summeryPic').src = product.image;
        summeryClone.getElementById('summeryName').textContent = product.name;
        
        summeryClone.getElementById('summeryPrice').textContent = `$${subPrice}`;
        summeryContainer.appendChild(summeryClone);
        
        total += subPrice;
 
      });
      cartSubTotal.textContent= `$${total.toFixed(2)}` ;
        cartTotal.textContent= `$${total.toFixed(2)}`;
    }
    renderSummery();