let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve ter três parâmetros: o objeto a ser modificado, a chave a ser adicionada e o valor dela.

function turnChange(objeto,key,value) {
    objeto[key] = value;
}
turnChange(lesson2,"turno","noite")

console.log (lesson2)
// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

function listKeys(objeto) {
    return Object.keys(objeto)
};

console.log(listKeys(lesson1))
// Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.

function sizeObject(objeto) {
    return Object.keys(objeto).length;
}

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

function listValues(objeto) {
    return Object.values(objeto)
}

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas por meio do Object.assign. Cada chave desse novo objeto será uma aula, portanto essas chaves serão nomeadas lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

let allLessons = Object.assign({}, {
    lesson1: lesson1,
    lesson2: lesson2,
    lesson3: lesson3,
});

console.log(allLessons);

// Com base no objeto elaborado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.

function totalNumber(objeto) {
    let total = 0;
    let keys = Object.keys(objeto);

    for (let i = 0; i < keys.length; i += 1) {
        total += objeto[keys[i]].numeroEstudantes;
    } return total;
}
console.log(totalNumber(allLessons))

// Crie uma função que obtenha o valor da chave de acordo com sua posição no objeto.

function getValueByNumber(objeto,index) {
    
    return Object.values(objeto)[index]
}

console.log(getValueByNumber(lesson1,2))

// Crie uma função que verifique se o par chave/valor existe na função. Essa função deve possuir três parâmetros:o objeto, o nome da chave e o valor dela. Por exemplo:

function verifyPair (objeto,key,value) {
    let entries = Object.entries(objeto);
    let isEqual = false;

    for (let index in entries) {
        if (entries[index][0] === key && entries[index][1] === value) 
        isEqual = true;
    }
        return isEqual;
    }


console.log(verifyPair(lesson2,'professor','Carlos'));