$(document).ready(function() {
    var cartItems = [];
  
    // Add to Cart button click event handler
    $('.add-to-cart').click(function() {
      var menuId = $(this).data('menu-id');
      var menuName = $(this).data('menu-name');
      var menuPrice = $(this).data('menu-price');
  
      var itemExists = false;
      for (var i = 0; i < cartItems.length; i++) {
        if (cartItems[i].menuId == menuId) {
          cartItems[i].quantity++;
          itemExists = true;
          break;
        }
      }
  
      if (!itemExists) {
        cartItems.push({
          menuId: menuId,
          menuName: menuName,
          quantity: 1,
          price: menuPrice
        });
      }
  
      updateCart();
    });
  
    // Update cart display function
    function updateCart() {
      $('.cart-items').empty();
      var total = 0;
      for (var i = 0; i < cartItems.length; i++) {
        var item = cartItems[i];
        var itemPrice = item.quantity * item.price;
        total += itemPrice;
  
        $('.cart-items').append('<li>' + item.menuName + ' x' + item.quantity + ' = ' + itemPrice + '</li>');
      }
      $('.total').text(total);
    }
  });