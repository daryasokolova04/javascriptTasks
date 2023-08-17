async function showList() {
    let list = await fetch('https://jsonplaceholder.typicode.com/todos')
    let commits = await list.json();

    let html = '<ul>'
    for (object of commits) {
        html += '<li>'
        html += object.title; 
        html += '</li>'
    }
    html += '</ul>'
    return html;
}

showList()
.then( (result) => document.body.innerHTML = result )
