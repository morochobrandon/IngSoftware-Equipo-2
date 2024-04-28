import bcryptjs from "bcryptjs";
import jsonwebtoken from 'jsonwebtoken';

export const usuarios = [
  {
    user: 'a',
    email: 'a@a.com',
    password: '$2a$05$nLY2It8riku2vwwDIINdgO/XIyPXRg1Gn9LFgnhwKqC4TwcAwEUL2',
  },
];

async function login(req: { body: any }, res: any) {
    console.log(req.body);
    const user = req.body.user;
    const password = req.body.password;
    if (!user || !password) {
      return res
        .status(400)
        .send({ status: 'Error', message: 'Los campos están incompletos' });
    }
    const usuarioAResvisar = usuarios.find((usuario) => usuario.user === user);
    if (!usuarioAResvisar) {
      return res
        .status(400)
        .send({ status: 'Error', message: 'Error durante login' });
    }
    const loginCorrecto = await bcryptjs.compare(
      password,
      usuarioAResvisar.password
    );
    if (!loginCorrecto) {
      return res
        .status(400)
        .send({ status: 'Error', message: 'Error durante login' });
    }
    res.send({ status: 'ok', message: 'Usuario loggeado', redirect: '/admin' });

}

async function register(req: { body: any }, res: any) {
  console.log(req.body);
  const user = req.body.user;
  const password = req.body.password;
  const email = req.body.email;
  if (!user || !password || !email) {
    return res
      .status(400)
      .send({ status: 'Error', message: 'Los campos están incompletos' });
  }
  const usuarioAResvisar = usuarios.find((usuario) => usuario.user === user);
  if (usuarioAResvisar) {
    return res
      .status(400)
      .send({ status: 'Error', message: 'Este usuario ya existe' });
  }
   const salt = await bcryptjs.genSalt(5);
   const hashPassword = await bcryptjs.hash(password, salt);
   const nuevoUsuario = {
     user,
     email,
     password: hashPassword,
   };
   usuarios.push(nuevoUsuario);
   console.log(usuarios);
   return res
     .status(201)
     .send({
       status: 'ok',
       message: `Usuario ${nuevoUsuario.user} agregado`,
       redirect: '/',
     });

}

export const methods = {
  login,
  register,
};

