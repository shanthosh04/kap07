async function getQuote() {
  const response = await fetch("data.json")
  const data = await response.json()

  const h1 = document.getElementById('quote')
  const randomNumber = Math.floor(Math.random() * data.length)

  const randomeQuote = data[randomNumber]
  h1.innerText = randomeQuote
}

getQuote()