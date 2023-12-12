/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.get('/matematika', 'MatematikasController.index').as('matematika.index')
Route.get('/matematika/create', 'MatematikasController.create').as('matematika.create')
Route.post('/matematika/store', 'MatematikasController.store').as('matematika.store')
Route.get('/matematika/edit/:id', 'MatematikasController.edit').as('matematika.edit')
Route.post('/matematika/update/:id', 'MatematikasController.update').as('matematika.update')
Route.get('/matematika/delete/:id', 'MatematikasController.delete').as('matematika.delete')


Route.get('/sejarah', 'SejarahsController.index').as('sejarah.index')
Route.get('/sejarah/create', 'SejarahsController.create').as('sejarah.create')
Route.post('/sejarah/store', 'SejarahsController.store').as('sejarah.store')
Route.get('/sejarah/edit/:id', 'SejarahsController.edit').as('sejarah.edit')
Route.post('/sejarah/update/:id', 'SejarahsController.update').as('sejarah.update')
Route.get('/sejarah/delete/:id', 'SejarahsController.delete').as('sejarah.delete')

Route.get('/cerpen', 'BahasaIndonesiasController.index').as('cerpen.index')
Route.get('/cerpen/create', 'BahasaIndonesiasController.create').as('cerpen.create')
Route.post('/cerpen/store', 'BahasaIndonesiasController.store').as('cerpen.store')
Route.get('/cerpen/edit/:id', 'BahasaIndonesiasController.edit').as('cerpen.edit')
Route.post('/cerpen/update/:id', 'BahasaIndonesiasController.update').as('cerpen.update')
Route.get('/cerpen/delete/:id', 'BahasaIndonesiasController.delete').as('cerpen.delete')

Route.get('/inggris', 'BahasaInggrisesController.index').as('inggris.index')
Route.get('/inggris/create', 'BahasaInggrisesController.create').as('inggris.create')
Route.post('/inggris/store', 'BahasaInggrisesController.store').as('inggris.store')
Route.get('/inggris/edit/:id', 'BahasaInggrisesController.edit').as('inggris.edit')
Route.post('/inggris/update/:id', 'BahasaInggrisesController.update').as('inggris.update')
Route.get('/inggris/delete/:id', 'BahasaInggrisesController.delete').as('inggris.delete')

Route.get('/jawa', 'BahasaJawasController.index').as('jawa.index')
Route.get('/jawa/create', 'BahasaJawasController.create').as('jawa.create')
Route.post('/jawa/store', 'BahasaJawasController.store').as('jawa.store')
Route.get('/jawa/edit/:id', 'BahasaJawasController.edit').as('jawa.edit')
Route.post('/jawa/update/:id', 'BahasaJawasController.update').as('jawa.update')
Route.get('/jawa/delete/:id', 'BahasaJawasController.delete').as('jawa.delete')