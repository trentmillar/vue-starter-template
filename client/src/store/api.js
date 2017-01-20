import request from 'request'
import moment from 'moment'
import { eventBus } from './EventBus.js'

let cachedProducts = [];
var lastUpdate;

if(!lastUpdate){
  warmCache();
}

function warmCache () {
  fetch('products', lastUpdate).then(json => {
    if(!json || json.products.length === 0) return;
    // TOOD ensure only unique products are pushed
    cachedProducts = cachedProducts.concat(json.products || []);
    eventBus.$emit('productsUpdated', cachedProducts);
  })
  setTimeout(warmCache, 1000 * 60 * 1)
}

function fetch (child) {

  let payload = {};

  if(arguments.length === 2){
    payload.lastUpdate = arguments[1];
  }

  return new Promise( (resolve, reject) => {
    request.post({
      url: 'http://localhost:8081/api/' + child,
      form: payload
    }, function(err, res, body) {
      if(err) return reject(err);
      if(res.statusCode !== 200) {
        err = new Error('Status code, ' + res.statusCode)
        err.res = res;
        return reject(err);
      }
      resolve(JSON.parse(body));
    });
  });
}

export function fetchCategories () {
  return fetch(`categories`)
}

export function fetchProducts () {
  return Promise.resolve(cachedProducts);
}