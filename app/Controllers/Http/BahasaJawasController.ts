// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import BahasaJawa from "App/Models/BahasaJawa";

export default class BahasaJawasController {
  async index({ request, view }) {
    const page = request.input("page", 1);
    const limit = 5;
    const jawas = await BahasaJawa.query().paginate(page, limit);
    jawas.baseUrl('/jawa')
    return view.render("jawa/index", { jawas });
  }

  create({ view }) {
    return view.render("jawa/create");
  }

  async store({ request, response, session }) {
    const jawa = new BahasaJawa();

    jawa.indonesia = request.input("indonesia");
    jawa.ngoko = request.input("ngoko");
    jawa.krama = request.input("krama");
    await jawa.save();

    session.flash({ notification: "Data Berhasil Disimpan!" });
    return response.redirect().toRoute("jawa.index");
  }

  async edit({ view, params }) {
    const id    = params.id
    const jawa  = await BahasaJawa.find(id)

    return view.render('jawa.edit', { jawa })
  }

  async update({ request, response, params, session }) {
    const id    = params.id
    const jawa  = await BahasaJawa.find(id)

    jawa.indonesia = request.input("indonesia");
    jawa.ngoko = request.input("ngoko");
    jawa.krama = request.input("krama");

    await jawa.save()

    session.flash({ notification: 'Data Berhasil Diupdate!' })
    return response.redirect().toRoute('jawa.index')
  }
  
async delete({ response, params, session}) {
const id = params.id
const jawa = await BahasaJawa.find(id)
await jawa.delete()

session.flash({ notification: 'Data Berhasil Dihapus!' })
return response.redirect().toRoute('jawa.index')
}
}
