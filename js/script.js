const localStorageKey = 'toDolist'

function validateIfExistsNewTask()
{
    let values     = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let inputValue = document.getElementById('inputNewTask').value
    let exists     = values.find(x => x.name == inputValue)
    return !exists ? false : true
}

function newTask()
{
    let input = document.getElementById('inputNewTask')
    input.style.border = ''

    // validation
    if(!input.value)
    {
        input.style.border = '1px solid red'
        alert('Digite algo para inserir em sua lista')
    }
    else if(validateIfExistsNewTask())
    {
        alert('Já existe uma task com essa descrição')
    }
    else
    {
        // increment to localStorage
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        values.push({
            name: input.value
        })
        localStorage.setItem(localStorageKey,JSON.stringify(values))
        showValues()
    }
    input.value = ''
}

function showValues()
{
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let list = document.getElementById('toDoList')
    list.innerHTML = ''
    for(let i = 0; i < values.length; i++)
    {
       // list.innerHTML += `<li> ${values[i]['name']}<button id='btn-ok' onclick='removeItem("${values[i]['name']}")'>remover</button></li>`
       list.innerHTML += `<li> 
                            <div>
                                <input type="checkbox" id="${values[i]['name']}"/>
                                <label for="${values[i]['name']}">${values[i]['name']}</label>
                            </div>
                            <button id='btn-ok' class="btn-delete" onclick='removeItem("${values[i]['name']}")'>Remover</button>
                          </li>`
                        
    }
}

function removeItem(data)
{
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let index = values.findIndex(x => x.name == data)
    values.splice(index,1)
    localStorage.setItem(localStorageKey,JSON.stringify(values))
    showValues()
}

showValues()