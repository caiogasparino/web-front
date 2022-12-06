export default function (req, res) {
  const express = require('express')

  const cors = require('cors')
  const app = express()
  app.use(cors())
  app.use(express.json())

  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    host: 'smtp.emailemnuvem.com.br',
    port: '465',
    auth: {
      user: 'falecom@lyndus.com.br',
      pass: 'b123456*',
    },
  })

  const mailData = {
    from: 'falecom@lyndus.com.br',
    to: 'falecom@lyndus.com.br',
    replyTo: req.body.email,
    subject: req.body.assunto,
    text: `${req.body.nome} gostaria de mais informações.`,
    html: `<b>Olá, me chamo ${req.body.nome}.</b><br/><br/>
      <p>Gostaria de mais informações sobre a Lyndus.</p>
      <p>Meu email é o ${req.body.email},
      trabalho na empresa ${req.body.empresa}, 
      em ${req.body.cidade}/${req.body.estado}</p><br/><br/>
      <p>Att, ${req.body.nome}.</p>`,
  }

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err)
      res.send('error' + JSON.stringify(err))
    } else {
      console.log('Email Enviado')
      res.send('sucesso')
    }
  })
}
