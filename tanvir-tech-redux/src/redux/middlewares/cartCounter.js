const cartCounter = (store) => (next) => (action) => {
  console.log("store", store.getState());
  console.log("action", action);
  //   return next(action);
  return;
};

export default cartCounter;
