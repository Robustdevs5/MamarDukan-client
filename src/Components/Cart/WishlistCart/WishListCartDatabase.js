// use local storage as your db for now
const AddWishlistToDb = id => {
    const exists = getDb();
    let Wishlist_cart = {};
    if (!exists) {
      Wishlist_cart[id] = 1;
    }
    else {
      Wishlist_cart = JSON.parse(exists);
      if (Wishlist_cart[id]) {
        const newCount = Wishlist_cart[id] + 1;
        Wishlist_cart[id] = newCount;
      }
      else {
        Wishlist_cart[id] = 1;
      }
    }
    updateDb(Wishlist_cart);
  }
  
  const getDb = () => localStorage.getItem('Wishlist_cart');
  const updateDb = cart => {
    localStorage.setItem('Wishlist_cart', JSON.stringify(cart));
  }
  
  const removeWishlistToDb = id => {
    const exists = getDb();
    if (!exists) {
  
    }
    else {
      const Wishlist_cart = JSON.parse(exists);
      delete Wishlist_cart[id];
      updateDb(Wishlist_cart);
    }
  }
  
  const getWishlistToDb = () => {
    const exists = getDb();
    return exists ? JSON.parse(exists) : {};
  }
  
  const clearWishlistToDb = () => {
    localStorage.removeItem('Wishlist_cart');
  }
  
  export { AddWishlistToDb, removeWishlistToDb, clearWishlistToDb, getWishlistToDb }