function zeigeZeit() {
  const now = new Date()
  const currTime = now.toLocaleTimeString("de-CH")

  document.title = currTime
  
  const h1 = document.getElementById('title')
  h1.innerText = currTime
 
  setTimeout(zeigeZeit, 1000); 
} 

zeigeZeit();

