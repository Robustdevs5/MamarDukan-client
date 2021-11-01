// use local storage as your db for now
const addToDbUser = id => {
    const exists = getDb();
    let user = {};
    if (!exists) {
      user[id] = 1;
    }
    else {
      user = JSON.parse(exists);
      if (user[id]) {
        const newCount = user[id] + 1;
        user[id] = newCount;
      }
      else {
        user[id] = 1;
      }
    }
    updateDb(user);
  }
  
  const getDb = () => localStorage.getItem('user');
  
  const updateDb = cart => {
    localStorage.setItem('user', JSON.stringify(cart));
  }
  
  const removeFromDbUser = id => {
    const exists = getDb();
    if (!exists) {
  
    }
    else {
      const user = JSON.parse(exists);
      delete user[id];
      updateDb(user);
    }
  }
  
  const getStoredCartUser = () => {
    const exists = getDb();
    return exists ? JSON.parse(exists) : {};
  }
  
  const clearTheUser = () => {
    localStorage.removeItem('user');
  }
  
  export { addToDbUser, removeFromDbUser, clearTheUser, getStoredCartUser }