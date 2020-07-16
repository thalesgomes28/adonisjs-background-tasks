import Mail from '../lib/Mail';

import emails from '../emails/reset'

export default {
  key: 'RegistrationMail',
  async handle({ data }) {
    const { user } = data;


const html = emails(user)


    await Mail.sendMail({
      from: 'Queue Test <queue@queuetest.com.br>',
      to: `${user.name} <${user.email}>`,
      subject: 'Cadastro de usuário',
      html: html
     
    });
  },
};