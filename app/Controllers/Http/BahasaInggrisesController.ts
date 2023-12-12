// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import BahasaInggri from "App/Models/BahasaInggri";

export default class BahasaInggrisesController {
  async index({ request, view }) {
    const page = request.input("page", 1);
    const limit = 5;
    const inggriss = await BahasaInggri.query().paginate(page, limit);
    inggriss.baseUrl('/inggris')
    return view.render("inggris/index", { inggriss });
  }

  create({ view }) {
    return view.render("inggris/create");
  }

  async store({ request, response, session }) {
    const inggris = new BahasaInggri();

    inggris.name = request.input("name");
    inggris.formula = request.input("formula");
    inggris.example = request.input("example");
    await inggris.save();

    session.flash({ notification: "Data Berhasil Disimpan!" });
    return response.redirect().toRoute("inggris.index");
  }

  async edit({ view, params }) {
    const id    = params.id
    const inggris  = await BahasaInggri.find(id)

    return view.render('inggris.edit', { inggris })
  }

  async update({ request, response, params, session }) {
    const id    = params.id
    const inggris  = await BahasaInggri.find(id)

    inggris.name = request.input("name");
    inggris.formula = request.input("formula");
    inggris.example = request.input("example");

    await inggris.save()

    session.flash({ notification: 'Data Berhasil Diupdate!' })
    return response.redirect().toRoute('inggris.index')
  }
  
async delete({ response, params, session}) {
const id = params.id
const inggris = await BahasaInggri.find(id)
await inggris.delete()

session.flash({ notification: 'Data Berhasil Dihapus!' })
return response.redirect().toRoute('inggris.index')
}
}
