const dataDados = new Date()
const data = dataDados.toLocaleDateString()

const diasDaSemana = [
    'domingo', 
    'segunda-feira', 
    'terça-feira', 
    'quarta-feira', 
    'quinta-feira', 
    'sexta-feira', 
    'sábado'
  ];

  const meses = [
    'janeiro', 
    'fevereiro', 
    'março', 
    'abril', 
    'maio', 
    'junho', 
    'julho', 
    'agosto', 
    'setembro', 
    'outubro', 
    'novembro', 
    'dezembro'
  ];

  const diaDaSemana = diasDaSemana[dataDados.getDay()]
  const mesAtual = meses[dataDados.getMonth()]
  const anoAtual = dataDados.getFullYear()
  const dataAtual = dataDados.getDate()

  const subtitulo = document.querySelector("h4")
  subtitulo.innerText = `${diaDaSemana}, ${dataAtual} de ${mesAtual} de ${anoAtual}`