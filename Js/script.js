const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");

const maxPaletteBowes = 32;

const generatePallete = () => {
    container.innerHTML = "";  // limpando o container
    for (let i = 0; i<maxPaletteBowes; i++) {
        // Gerar uma cor hex random
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`;
        
        // Gerar um novo li e inserir no container
        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
                           <span class="hex-value">${randomHex}</span>`;
        // adicionando evento de copiar a cor    
        color.addEventListener("click", () => copyColor(color, randomHex));                  
        container.appendChild(color);    
    }
}
generatePallete();

const copyColor = ( elem, hexVal) => {
    const colorElement = elem.querySelector(".hex-value");
    // copiando o valor de Hex, e trocando o texto por copiado
    // Depois trocar o texto pro original depois de 1 segundo
    navigator.clipboard.writeText(hexVal).then(() => {
        colorElement.innerText = "Copiado"
        setTimeout(() => colorElement.innerText = hexVal, 1000);
    }).catch(() => alert("Erro em copiar o código da cor!"));  // Mostrando advertencia em caso da cor não ser copidada
}

refreshBtn.addEventListener("click", generatePallete);