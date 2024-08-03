console.log("Hello!");
console.log("world!");

import router from './routes';
window.addEventListener('load',router);
window.addEventListener('hashchange', router);

//const fancyFunc = () => {
//    return [1, 2];
//  };
  
//  const [a, b] = fancyFunc();