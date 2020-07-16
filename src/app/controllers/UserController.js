import Queue from '../lib/Queue';

export default {
  async store(req, res) {
    const { name, email, token_reset} = req.body;

    const user = {
      name,
      email,
      token_reset     
    };

    //  filas
    await Queue.add('RegistrationMail', { user });

    await Queue.add('UserReport', { user });

    return res.json(user);
  }
};
