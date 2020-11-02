function splitText(text) {
    let splitTextParent = document.getElementById("splitTextParent");
    const word = text;
    const wordArray = word.split("");

    if (splitTextParent !== null) {
      splitTextParent.style.display = "flex";
  
      for (let i = 0; i < wordArray.length; i++) {
        const span = document.createElement("span");
        span.innerText = wordArray[i];
        span.style.display = "block";
        span.style.fontSize = '100px'
        span.style.color = `#${i}00000`;
        span.style.opacity = "1";
        splitTextParent.appendChild(span);
      }
    }
  }

splitText("Hello splitText.js!");