const db = {
  dados: [
    {
      nome: "Paracetamol 500 Prati-Donaduzzi",
      preco: 15.88,
      imagem: "../img/paracetamol1.PNG",
      descricao:
        "Caixa com 20 comprimidos de Paracetamol, com 500 mg cada. Fabricante: Prati-Donaduzzi. Medicamento genérico. Indicado para tratamento de dores e febre. Em caso de dúvidas, consulte o seu Farmacêutico ou Médico. FARMÁCIA PAGUE BAIXO.",
    },
    {
      nome: "Paracetamol 750 EMS",
      preco: 14.88,
      imagem: "../img/paracetamol3.PNG",
      descricao:
        "Caixa com 20 comprimidos de Paracetamol, com 750 mg cada. Fabricante: EMS. Medicamento genérico. É indicado para a redução da febre e para o alívio de dores leves a moderadas, tais como: dores de cabeça, dores no corpo, dores de dente, entre outras. FARMÁCIA ALÉM DO PREÇO.",
    },
    {
      nome: "Paracetamol 750 Medquímica",
      preco: 13.88,
      imagem: "../img/paracetamol4.PNG",
      descricao:
        "Caixa com 20 comprimidos de Paracetamol, com 750 mg cada. Fabricante: Medquímica. Medicamento genérico. Medicamento com efeito analgésico e antipirético, indicado para a alívio de dores de intensidade leve a moderada, incluindo dor de cabeça, dor muscular e cólicas menstruais, por exemplo. FARMÁCIA BAIXÍSSIMO.",
    },
    {
      nome: "Dipirona 500 mg Prati-Donaduzzi",
      preco: 19.83,
      imagem: "../img/dipirona1.PNG",
      descricao:
        "Caixa com 20 comprimidos de Dipirona, com 500 mg cada. Fabricante: Prati-Donaduzzi. Medicamento genérico. Este medicamento é indicado como analgésico - medicamento para dor - e antitérmico - medicamento para febre. Uso adulto. FARMÁCIA PAGUE BAIXO.",
    },
    {
      nome: "Dipirona xarope 50 mg/ml Medley",
      preco: 21.83,
      imagem: "../img/dipirona2.PNG",
      descricao:
        "Xarope de uso infantil na concentração de 50 mg/ml. Fabricante: Medley. Medicamento genérico. Indicado para uso em crianças e adolescentes, para tratamento de dores diversas e febre. Evite o uso prolongado. FARMÁCIA SAÚDE MAIS FARMA.",
    },
    {
      nome: "Dipirona 1 g - 1000 mg - Neo-Química",
      preco: 20.83,
      imagem: "../img/dipirona3.PNG",
      descricao:
        "Caixa com 10 comprimidos de Dipirona, com 1000 mg cada. Fabricante: Neo-Química. Medicamento genérico. Medicamento indicado para uso adulto, para tratamento e alívio de dores fortes ou febre alta. FARMÁCIA PAGUE BAIXO.",
    },
       {
      nome: "Loratadina",
      preco: 16.89,
      imagem: "../img/loratadina1.PNG",
      descricao:
        "Caixa com 12 comprimidos com 10 mg cada. Fabricante: Biosintética. Medicamento genérico. Recomendamos o uso deste medicamento em caso de alergias ou hipersensibilidades, conforme indicação da bula. FARMÁCIA DROGACURA.",
    },
    {
      nome: "Loratadina",
      preco: 17.89,
      imagem: "../img/loratadina2.PNG",
      descricao:
        "Caixa com 12 comprimidos com 10 mg cada. Fabricante: Neo Química. Medicamento genérico. Este medicamento é indicado para o alívio dos sintomas associados com a rinite alérgica, como: coceira nasal, nariz escorrendo, espirros e coceira nos olhos. FARMÁCIA SAÚDE MAIS FARMA.",
    },
    {
      nome: "Loratadina",
      preco: 18.89,
      imagem: "../img/loratadina3.PNG",
      descricao:
        "Xarope de loratadina a 1 mg, contendo 100 mL no frasco. Sabor uva. Fabricante: Cimed. Nome do medicamento: Loratamed. Uso indicado para reduzir os sintomas de rinites alérgicas, coceiras e corizas. FARMÁCIA ALÉM DO PREÇO.",
    },
  ],
};
const buttonSearch = document.querySelector("button#search-button");
const inputSearch = document.querySelector("input#input-search");
const ulContent = document.querySelector("ul#content-result");

buttonSearch.addEventListener("click", (e) => {
  e.preventDefault();

  const search = inputSearch.value.toLowerCase();

  let content = "";
  for (let i = 0; i < db.dados.length; i++) {
    if (search === db.dados[i].nome.toLowerCase()) {
      content += `
            <li id="card-content" class="row">
                <div class="col-md-4">
                    <img id="card-content-image" src="${db.dados[i].imagem}" class="img-fluid" alt="${db.dados[i].nome}">
                </div>
                <div class="col-md-8">
                    <div id="card-content-body" class="card-body">
                        <h4 class="card-title">R$${db.dados[i].preco}</h4>
                        <h5 class="card-title">${db.dados[i].nome}</h5>
                        <p class="card-text">${db.dados[i].descricao}</p>
                    </div>
                </div>
            </li>`;
    }
  }

  if (content === "") {
    for (let i = 0; i < db.dados.length; i++) {
      content += `
            <li id="card-content" class="row">
                <div class="col-md-4">
                    <img id="card-content-image" src="${db.dados[i].imagem}" class="img-fluid" alt="${db.dados[i].nome}">
                </div>
                <div class="col-md-8">
                    <div id="card-content-body" class="card-body">
                        <h4 class="card-title">R$${db.dados[i].preco}</h4>
                        <h5 class="card-title">${db.dados[i].nome}</h5>
                        <p class="card-text">${db.dados[i].descricao}</p>
                    </div>
                </div>
            </li>`;
    }
  }

  ulContent.innerHTML = content;
  visuallyHidden("div#products", "visually-hidden");
});

function visuallyHidden(elem, mod) {
  const element = document.querySelector(elem);
  element.classList.add(mod);
}
