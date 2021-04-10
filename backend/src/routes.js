const express = require('express')

const routes = express.Router();

const agenda = [
  {
    horario: '09:00',
    marcado: false
  },
  {
    horario: '09:15',
    marcado: true,
    cliente: 'Valdemir da Silva'
  },
  {
    horario: '09:30',
    marcado: false
  },
]

routes.post('/agenda', (req, res) => {
  const body = req.body;

  console.log(body)

  res.send(agenda)
})

module.exports = routes;