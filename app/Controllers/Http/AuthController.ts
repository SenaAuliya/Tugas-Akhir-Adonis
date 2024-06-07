import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";
import { schema, rules } from '@ioc:Adonis/Core/Validator';

export default class AuthController {
  public async login({ auth, request, response }: HttpContextContract) {
    const email = request.input("email");
    const password = request.input("password");

    try {
      // Menggunakan metode attempt untuk melakukan otentikasi
      await auth.use("web").attempt(email, password);

      // Jika otentikasi berhasil, redirect ke halaman dashboard
      response.redirect("/");
    } catch (error) {
      // Handle error
      console.error(error);
      return response.badRequest("Invalid credentials");
    }
  }

  public async register({ request, response }: HttpContextContract) {
    try {
      // Validasi input
      const validationSchema = schema.create({
        email: schema.string({}, [
          rules.email(),
          rules.unique({ table: 'users', column: 'email' }),
        ]),
        password: schema.string({}, [rules.minLength(6)]),
      });

      const validatedData = await request.validate({
        schema: validationSchema,
      });

      const user = new User();
      user.email = validatedData.email;
      user.password = validatedData.password;
      await user.save();

      return response.redirect().toRoute("login");
    } catch (error) {
      // Handle error
      console.error(error);
      return response.badRequest("Registration failed. Please check your input.");
    }
  }

  public async logout({ auth, response }: HttpContextContract) {
    // Mengecek apakah user sudah login
    if (auth.isAuthenticated) {
      // Melakukan logout
      await auth.logout();
      response.redirect("/berhasillogout"); // Ganti dengan URL yang sesuai setelah logout
    } else {
      // Jika user belum login, redirect ke halaman login
      return response.badRequest('Anda belum login');
    }
  }
}
