// use local storage as your db for now
const AddCompareToDb = id => {
  const exists = getDb();
  let compare_cart = {};
  if (!exists) {
    compare_cart[id] = 1;
  }
  else {
    compare_cart = JSON.parse(exists);
    if (compare_cart[id]) {
      const newCount = compare_cart[id] + 1;
      compare_cart[id] = newCount;
    }
    else {
      compare_cart[id] = 1;
    }
  }
  updateDb(compare_cart);
}

const getDb = () => localStorage.getItem('compare_cart');

const updateDb = cart => {
  localStorage.setItem('compare_cart', JSON.stringify(cart));
}

const removeCompareToDb = id => {
  const exists = getDb();
  if (!exists) {

  }
  else {
    const compare_cart = JSON.parse(exists);
    delete compare_cart[id];
    updateDb(compare_cart);
  }
}

const getCompareToDb = () => {
  const exists = getDb();
  return exists ? JSON.parse(exists) : {};
}

const clearCompareToDb = () => {
  localStorage.removeItem('compare_cart');
}

// export { AddCompareToDb, removeCompareToDb, clearCompareToDb, getCompareToDb }
  export { AddCompareToDb, removeCompareToDb, clearCompareToDb, getCompareToDb }