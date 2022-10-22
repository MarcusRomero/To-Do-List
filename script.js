
//SELECTEURS
const inputForm = document.querySelector('form');
const ulTag = document.querySelector('ul');

//ECOUTEURS
inputForm.addEventListener('submit', addListItem);
ulTag.addEventListener('click', actionContent);



function actionContent(event) {
  const content = event.target;
  if (content.classList[0] === "buttonDelete"){
    const anyEraseContent = content.parentElement;
    anyEraseContent.remove();
  }

  if (content.classList[0] === "buttonDone"){
    const addTrash = content.parentElement;
    addTrash.classList.toggle("trashContent");  
  }
  console.log(event.target);
}


//Je dois créer une alert pour le bouton '<input type="submit" value="🔄" alt="xxxxxx" />';
//Quand il serait declanger le bouton, (avant d'efectuer la tache, une alert va apaitre pour le prevenir que il va effacer tout son contenue ToDo List (creer une question, tu es sur: avec 'oui' ou 'non')).

function alertMessage(event) {
  let result = confirm('Are you sure you want to delete your entire to do list ?');
  if (result == false) {
    event.preventDefault();
  }
}


//FONCTIONS
function addListItem(event){
    event.preventDefault();
    const containerText = inputForm[0].value;
    
        //<li></li>
        //Je créer une variable 'liTag' qui serra (=) .
        const liTag = document.createElement('li');
          liTag.innerHTML = containerText;
          liTag.classList = "boxContainer";

            //<button></button>
            //Je créer une variable qui s'appelle 'buttonDelete', qui serra (=) Je créer une balise <bouton>.
            const buttonDelete = document.createElement('button');
            

              //<button>"🗑"</button>
              //Je mets un text.
              buttonDelete.innerHTML = "🗑";

              //<button class="buttonDelete">"🗑"</button>
              //Je créer une classe, qui va s'appeler: 'buttonDelete' (pour mon CSS)
              buttonDelete.classList = "buttonDelete";

              //<li><button class="buttonDelete">"🗑"</button></li>
              //Je specifie où serra son emplacement.
              liTag.appendChild(buttonDelete)

            //Je créer un autre bouton...
            //<li><button class="buttonDone">"👍🏼"</button><li>
            const buttonDone = document.createElement('button');
              buttonDone.innerHTML = "👍🏼";
              buttonDone.classList = "buttonDone";
              liTag.appendChild(buttonDone);

          //Je specifie où serra son emplacement.
          //<ul><li>...</li></ul>
          ulTag.appendChild(liTag);

    inputForm[0].value = "";
    inputForm[0].placeholder = "What else ?";
}

