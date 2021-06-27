// WARNING: as this is used both by auth and internal application there could be conflicts among names
// so please scope your storage keys and prepend with `sy-`.

// variable to access on browser's localstorage
const storage = window.localStorage;

// save data in localstorage
export const setLocalStorageValue = (key, value, _opts = {}) => {
  storage.setItem(key, JSON.stringify(value));
};

// get data from localstorage
export const getLocalStorageValue = key => JSON.parse(storage.getItem(key));

// clear data from localstorage
export const clearLocalStorage = () => storage.clear();
