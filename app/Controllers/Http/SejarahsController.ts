// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Sejarah from "App/Models/Sejarah";

export default class SejarahsController {
  async index({ request, view }) {
    const page = request.input("page", 1);
    const limit = 1;

    const sejarahs = await Sejarah.query().paginate(page, limit);
    sejarahs.baseUrl("/sejarah");

    return view.render("sejarah/index", { sejarahs });
  }

  create({ view }) {
    return view.render("sejarah/create");
  }

  async store({ request, response, session }) {
    const sejarah = new Sejarah();

    sejarah.title = request.input("title");
    sejarah.content = request.input("content");
    await sejarah.save();

    session.flash({ notification: "Data Berhasil Disimpan!" });
    return response.redirect().toRoute("sejarah.index");
  }

  async edit({ view, params }) {
    const id = params.id;
    const sejarah = await Sejarah.find(id);

    return view.render("sejarah.edit", { sejarah });
  }

  async update({ request, response, view, params, session }) {
    const id = params.id;
    const sejarah = await Sejarah.find(id);

    sejarah.title = request.input("title");
    sejarah.content = request.input("content");
    await sejarah.save();

    session.flash({ notification: "Data Berhasil Diupdate!" });
    return response.redirect().toRoute("sejarah.index");
  }

  async delete({ response, params, session }) {
    const id = params.id;
    const sejarah = await Sejarah.find(id);
    await sejarah.delete();

    session.flash({ notification: "Data Berhasil Dihapus!" });
    return response.redirect().toRoute("sejarah.index");
  }
}
