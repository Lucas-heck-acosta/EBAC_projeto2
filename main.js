const form = document.getElementById('formContato')

const nomes = []
const numeros = []

let linhas = ''



form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
})

function adicionaLinha()
{
    const inputNome = document.getElementById('nomeCnt')
    const inputNumero = document.getElementById('numeroCnt')

    if (nomes.includes(inputNome.value))
    {
        alert(`Contato: ${inputNome.value} já foi inserido.`)
    }
    else if (numeros.includes(inputNumero.value))
    {
        alert(`Número: ${inputNumero.value} já foi inserido.`)
    }
    else
    {
        let linha = '<tr>'
        linha += `<td>${inputNome.value}</td>`
        linha += `<td>${inputNumero.value}</td>`
        linha += '</tr>'

        linhas += linha

        nomes.push(inputNome.value)
        numeros.push(inputNumero.value)
    }
    

    inputNome.value = ''
    inputNumero.value = ''
}

function atualizaTabela()
{
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}