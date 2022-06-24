var Promise = require('./promise.js')

let m = new Promise((resolve, reject) => {
  resolve(1);
}).then((value) => {
  return new Promise((resolve, reject) => {
    resolve(value);
  })
})