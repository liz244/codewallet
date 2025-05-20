// 📦 GESTION LOCALSTORAGE
export const getFragments = () => {
    return JSON.parse(localStorage.getItem('fragments')) || [];
  };
  
  export const saveFragments = (data) => {
    localStorage.setItem('fragments', JSON.stringify(data));
  };
  
  export const getTags = () => {
    return JSON.parse(localStorage.getItem('tags')) || [];
  };
  
  export const saveTags = (data) => {
    localStorage.setItem('tags', JSON.stringify(data));
  };
  