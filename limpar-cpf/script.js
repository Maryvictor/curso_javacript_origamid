const cpfsList = document.querySelectorAll('.cpf li');

// const arrayCpfs = [...cpfs]  // coloca cpfs em um array

const elementsInnerText = ([...elements]) => {      //function express
  return elements.map(element => element.innerText);
}
const limparCPF = (cpf) => {
  return cpf.replace(/\D/g, '');
}

const construirCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
}

const formatarCPF  = (cpfs) => {
  return cpfs.map(limparCPF).map(construirCPF);
}

const substituiCPFS = (cpfsElements) => {
  const cpfs = elementsInnerText(cpfsElements);
  const cpfsFormatados = formatarCPF(cpfs)
  console.log(cpfsFormatados);

  cpfsElements.forEach((element, index) => {
    element.innerText = cpfsFormatados[index]
    
  });
}

substituiCPFS(cpfsList);