document.querySelector(".advice-update").addEventListener('click', gerarConselho);
const adviceNumber = document.querySelector(".advice-id")
const adviseDescription = document.querySelector(".advice-description")

async function gerarConselho(){
    const url = await fetch("https://api.adviceslip.com/advice")
    const json = await url.json()
    const idConselho = `Advice #${json.slip.id}`
    const conteudoConselho = json.slip.advice

    adviceNumber.innerHTML = idConselho
    adviseDescription.innerHTML = conteudoConselho
}

gerarConselho();