function replaceString(str) {
  const replacedStr = str
    .replace(/ä/g, "ae") // ä -> ae
    .replace(/ö/g, "oe") // ö -> oe
    .replace(/ü/g, "ue") // ü -> ue
  
  return replacedStr
}

const text = replaceString("Glücklich, öffnen, häufig")
const h1 = document.getElementById("title")
h1.innerText = text