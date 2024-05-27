const dia = document.getElementById('dia')
const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')
const dia2 = document.getElementById('dia-2')
const horas2 = document.getElementById('horas-2')
const minutos2 = document.getElementById('minutos-2')
const segundos2 = document.getElementById('segundos-2')
const dia3 = document.getElementById('dia-3')
const horas3 = document.getElementById('horas-3')
const minutos3 = document.getElementById('minutos-3')
const segundos3 = document.getElementById('segundos-3')

const dataFinal = "25 dec 2024" 
const dataOlimpiadas = "26 jul 2024"
const dataAnoNovo = "1 jan 2025"


function countDown(){
  const dataDeTermino = new Date(dataFinal)
  const hoje = new Date()
  
  const segTotal = (dataDeTermino - hoje) / 1000
  
  const finalDias = Math.floor(segTotal / 60/60/24 );
  
  const finalHoras = Math.floor(segTotal /60/60)%24;
  
  const finalMinutos = Math.floor(segTotal/60)%60;
  
  const finalSegundos = Math.floor(segTotal)%60;

  
  dia.innerHTML = finalDias
  horas.innerHTML = formatoTempo(finalHoras)
  minutos.innerHTML = formatoTempo(finalMinutos)
  segundos.innerHTML = finalSegundos
  
}

function formatoTempo(tempo){
  return tempo < 10 ? `0${tempo}` : tempo
}



function countOlimp(){
    const dataDeTermino = new Date(dataOlimpiadas)
    const hoje = new Date()
    
    const segTotal = (dataDeTermino - hoje) / 1000
    
    const finalDias = Math.floor(segTotal / 60/60/24 );
    
    const finalHoras = Math.floor(segTotal /60/60)%24;
    
    const finalMinutos = Math.floor(segTotal/60)%60;
    
    const finalSegundos = Math.floor(segTotal)%60;
  
    
    dia2.innerHTML = finalDias
    horas2.innerHTML = formatoTempo(finalHoras)
    minutos2.innerHTML = formatoTempo(finalMinutos)
    segundos2.innerHTML = finalSegundos
    
  }
  
  function formatoTempo(tempo){
    return tempo < 10 ? `0${tempo}` : tempo
  }


  
  function countAnoNovo(){
    const dataDeTermino = new Date(dataAnoNovo)
    const hoje = new Date()
    
    const segTotal = (dataDeTermino - hoje) / 1000
    
    const finalDias = Math.floor(segTotal / 60/60/24 );
    
    const finalHoras = Math.floor(segTotal /60/60)%24;
    
    const finalMinutos = Math.floor(segTotal/60)%60;
    
    const finalSegundos = Math.floor(segTotal)%60;
  
    
    dia3.innerHTML = finalDias
    horas3.innerHTML = formatoTempo(finalHoras)
    minutos3.innerHTML = formatoTempo(finalMinutos)
    segundos3.innerHTML = finalSegundos
    
  }
  
  function formatoTempo(tempo){
    return tempo < 10 ? `0${tempo}` : tempo
  }

countOlimp()
setInterval(countOlimp,1000)
countDown()
setInterval(countDown, 1000)
countAnoNovo()
setInterval(countAnoNovo,1000)






