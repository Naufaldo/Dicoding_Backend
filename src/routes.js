const {
  nambahbuku,
  dapatbuku,
  dapatbukuid,
  ubahbukuid,
  hapusbukuid
} = require('./handler')

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: nambahbuku
  },
  {
    method: 'GET',
    path: '/books',
    handler: dapatbuku
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: dapatbukuid
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: ubahbukuid
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: hapusbukuid
  }
]
module.exports = routes
