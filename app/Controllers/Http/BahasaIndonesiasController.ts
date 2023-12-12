// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import BahasaIndonesia from "App/Models/BahasaIndonesia";

export default class BahasaIndonesiasController {
  async index({ request, view }) {
    const page = request.input("page", 1);
    const limit = 1;

    const puisis = await BahasaIndonesia.query().paginate(page, limit);
    puisis.baseUrl("/cerpen");
    return view.render("puisi/index", { puisis });
  }

  create({ view }) {
    return view.render("puisi/create");
  }

  async store({ request, response, session }) {
    const puisi = new BahasaIndonesia();

    puisi.title = request.input("title");
    puisi.content = request.input("content");
    await puisi.save();

    session.flash({ notification: "Data Berhasil Disimpan!" });
    return response.redirect().toRoute("cerpen.index");
  }
  async edit({ view, params }) {
    const id    = params.id
    const puisi  = await BahasaIndonesia.find(id)

    return view.render('puisi.edit', { puisi })
  }

  async update({ request, response, view, params, session }) {
    const id    = params.id
    const puisi  = await BahasaIndonesia.find(id)

    puisi.title    = request.input('title')
    puisi.content  = request.input('content')
    await puisi.save()

    session.flash({ notification: 'Data Berhasil Diupdate!' })
    return response.redirect().toRoute('cerpen.index')
  }
  
async delete({ response, params, session}) {
const id = params.id
const puisi = await BahasaIndonesia.find(id)
await puisi.delete()

session.flash({ notification: 'Data Berhasil Dihapus!' })
return response.redirect().toRoute('cerpen.index')
}
}
