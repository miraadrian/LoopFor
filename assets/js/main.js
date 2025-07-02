const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' },
];

const lugarTxt = document.querySelector('#container')
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada);

    // lugarTxt.innerHTML += `<${elementos[i].tag}> ${elementos[i].texto} </${elementos[i].tag}>`;
};
lugarTxt.appendChild(div);


//Resolução do professor
/*

    const container = document.querySelector('#container');
    const div = document.createElement('div');

    for(let i = 0; i < elementos.length; i++){
        let {tag, texto} = elementos[i];
        let p = document.createElement('tag');
        let textoNode = document.createTextNode(texto);
        p.appendChild(textoNode);
        div.appendChild(p);
    }

*/
