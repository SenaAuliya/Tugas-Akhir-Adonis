// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Matematika from "App/Models/Matematika";

export default class MatematikasController {
    async index({request, view}){
      const page = request.input('page', 1)
      const limit = 1

      const matematikas = await Matematika.query().paginate(page, limit)
      matematikas.baseUrl('/matematika')
    
    
        return view.render('matematika/index',{matematikas})
    }

    create({ view }) {
        return view.render('matematika/create')
      }
    
      async store({ request, response,  session }) {
        const matematika = new Matematika()
    
        matematika.title    = request.input('title')
        matematika.content  = request.input('content')
        await matematika.save()
    
        session.flash({ notification: 'Data Berhasil Disimpan!' })
        return response.redirect().toRoute('matematika.index')
    
      }

      async edit({ view, params }) {
        const id    = params.id
        const matematika  = await Matematika.find(id)
    
        return view.render('matematika.edit', { matematika })
      }

      async update({ request, response, view, params, session }) {
        const id    = params.id
        const matematika  = await Matematika.find(id)
    
        matematika.title    = request.input('title')
        matematika.content  = request.input('content')
        await matematika.save()
    
        session.flash({ notification: 'Data Berhasil Diupdate!' })
        return response.redirect().toRoute('matematika.index')
      }
      
  async delete({ response, params, session}) {
    const id = params.id
    const matematika = await Matematika.find(id)
    await matematika.delete()

    session.flash({ notification: 'Data Berhasil Dihapus!' })
    return response.redirect().toRoute('matematika.index')
  }
}
