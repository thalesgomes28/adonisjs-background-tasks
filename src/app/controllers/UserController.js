//import Mail from '../lib/Mail';
import Queue from '../lib/Queue'

export default {
async store (req, res){
    const {name, email, password} = req.body;
    const user = {
        name,
        email,
        password,
    };
    
/*    await Mail.sendMail({
        from:'Queue Teste <teste@gmail.com>?',
        to: `${name} <${email}>`,
        subject: 'Cadastro de usuário',
        html: `Olá, ${name}, bem-vindo ao sistema de filas `
    }); */

    await Queue.add({user});

    return res.json(user);
}
};