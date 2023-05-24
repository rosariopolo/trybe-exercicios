window.onload = () => {
  
  // Cor de fundo da tela;

  const setBackgroundColor = (color) => {
     let background = document.querySelector(".content");
     background.style.backgroundColor = color;
     localStorage.setItem("background", color);
  }

  // Cor do texto;

  const setColorText = (color) => {
    let colorText = document.querySelectorAll(".paragraph")
    for(let index = 0; index < colorText.length; index += 1) {
      colorText[index].style.color = color;
      localStorage.setItem("colortext", color);
    }
  }

  // Tamanho da fonte;

  const setFontSize = (font) => {
    let fontSize = document.querySelectorAll(".paragraph")
    for(let index = 0; index < fontSize.length; index += 1) {
      fontSize[index].style.fontSize = font;
      localStorage.setItem("fontsize", font);
    }
  }

  //  Espaçamento entre as linhas do texto;

  const setLineHeight = (height) => {
    let lineHeight = document.querySelectorAll(".paragraph")
    for(let index = 0; index < lineHeight.length; index += 1) {
      lineHeight[index].style.lineHeight = height;
      localStorage.setItem("lineheight", height);
    }
  }

  // Tipo da fonte (Font family).

  const setFontFamily = (family) => {
    let fontFamily = document.querySelectorAll(".paragraph")
    for(let index = 0; index < fontFamily.length; index += 1) {
      fontFamily[index].style.fontFamily = family;
      localStorage.setItem("fontfamily", family);
    }
  }

  // Set Cor de fundo da tela;

  let backgroundColor = document.querySelectorAll("#background-color>button");
  for (let index = 0; index < backgroundColor.length; index += 1) {
    backgroundColor[index].addEventListener("click", (event) => {
        setBackgroundColor(event.target.innerHTML)
      })
    }
  

  // Set Cor do texto;

  let colorText = document.querySelectorAll("#font-color>button");
  for (let index = 0; index < colorText.length; index += 1) {
    colorText[index].addEventListener("click", (event) => {
      setColorText(event.target.innerHTML)
    })
  }

  // Set Tamanho da fonte;

  let fontSize = document.querySelectorAll("#font-size");
  for (let index = 0; index < fontSize.length; index += 1) {;
  fontSize[index].addEventListener("click", (event) => {
    setFontSize(event.target.innerHTML);
  })
 }

// Set Espaçamento entre as linhas do texto;

  let lineHeight = document.querySelectorAll("#line-height>button");
  for (let index = 0; index < lineHeight.length; index += 1) {
    lineHeight[index].addEventListener("click", (event) => {
      setLineHeight(event.target.innerHTML);
    })
  }

// Set Tipo da fonte (Font family).
  
  let fontFamily = document.querySelectorAll("#font-family");
  for (let index = 0; index < fontFamily.length; index += 1) {
    fontFamily[index].addEventListener("click", (event) => {
      setFontFamily(event.target.innerHTML);
    })
  }

  const initialized = () => {
    setBackgroundColor(localStorage.getItem("background"));
    setColorText(localStorage.getItem("colortext"));
    setFontSize(localStorage.getItem("fontsize"));
    setLineHeight(localStorage.getItem("lineheight"));
    setFontFamily(localStorage.getItem("fontfamily"));
  }

  initialized();
}
