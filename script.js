const content = document.querySelector('.content')
const button = document.querySelector('.add')


button.addEventListener('click', () => {
    getPerso()
})

const getPerso = async () => {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then((res) => {

    character =res.data[0]

    createCharacter(character);

    })
}


const createCharacter = (perso) => {
    const infoPerso = `<div>
    <img src=${perso.image}/>
    <div>${perso.character}</div>
    <div>${perso.quote}</div>
    </div>`

    content.innerHTML += infoPerso
}