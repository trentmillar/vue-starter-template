import request from 'request';

function fetch (child) {
  return new Promise( (resolve, reject) => {
    request.get('http://localhost:8081/api/' + child, function(err, res, body) {
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
  return fetch(`products`)
}