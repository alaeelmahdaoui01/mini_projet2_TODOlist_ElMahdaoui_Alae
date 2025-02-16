const todoslist = document.querySelector('.todos'); // liste des todos

// fonction pour creer un nouveau todo
function TodoAjout(todo) {
    const html =
        `<li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>`;
    todoslist.innerHTML += html;
}

const todosform = document.querySelector('.add'); // input form pour l'ajout des todos

// ajout du nouveau todo entré dans todosform dans la liste des todos en utilisant la fct precedente todoAjout
todosform.addEventListener('submit', function(event) {
    event.preventDefault(); // eviter d'actualiser la page en cliquent sur submit(entrer)

    const todo = todosform.add.value; // .add pour recuperer l'input (car on a <input name="add"/>) et . value : la valeur entrée par l'utilisateur
    if (todo.length !== 0) {
        TodoAjout(todo);
        todosform.reset(); // effacer la barre de input 
    }
});

// supprimer un todo en appuyant sur la corbeille 
todoslist.addEventListener("click", function(event) { // e.target : event on which we clicked 
    if (event.target.matches(".delete")) {
        event.target.parentElement.remove(); // suppression du li qui contient ce e.taregt sur lequel on a cliqué
    }
});

// fonction qui recoit ce que l'utilisateur a entré dans la barre de recherche 
function todosfiltre(todoPhrase) {
    const todos = document.querySelectorAll('.todos li'); // l'element li qui contient chaque todo, et sa corbeille
    todos.forEach(function(todo) {
        const todospan = todo.querySelector("span").textContent.toLowerCase(); // le texte de chaque todo de la liste des todos 
        // on rend tout en minuscule pour que si l'utilisateur entre le todo dans la barre de recherche en maj ou minuscule, on n'a aucune confusion

        if (todospan.includes(todoPhrase.toLowerCase())) { // si le todo dans la liste a la phrase entrée par l'utilisateur inclue dans son texte
            todo.style.setProperty("display", "block", "important"); // il apparait 
        } else {
            todo.style.setProperty("display", "none", "important"); // sinon on ne le display pas dans la liste 
        }
    });
}


// filtre des todos de la liste en fonction de l'input de l'utilisateur 
const todoInput = document.querySelector(".search input"); // la barre du input 
todoInput.addEventListener('input', function() { // on utilise 'input' pour que ceci ait lieu au fur et a mesure que l'utilisateur entre qq chose dans la barre de recherche
    const searchTodo = todoInput.value; // on obtient ce que l'utilisateur a entré dans la barre de recherche 
    todosfiltre(searchTodo);
});

document.querySelector(".search").addEventListener('submit', function(e) { // pour eviter d'actualiser la page quand on clique sur entrer 
    e.preventDefault();
});