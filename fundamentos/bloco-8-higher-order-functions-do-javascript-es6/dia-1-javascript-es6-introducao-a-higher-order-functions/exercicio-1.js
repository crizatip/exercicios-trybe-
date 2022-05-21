// Entendendo o conceito de HOFs


const ola = () => {
  const quem = 'criz'
  return `olá ${quem}`
}

const oi = () => {
  const quem = 'criz'
  return `oi ${quem}`
}


const iai = () => {
  const quem = 'criz'
  return `iai ${quem}`
}


const geral = (func) => {
  const quem = 'criz'
  return func(quem)
}

module.exports = {ola, iai, oi, geral}