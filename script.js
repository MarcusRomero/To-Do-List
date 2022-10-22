
//SELECTEURS
const inputForm = document.querySelector('form');
const ulTag = document.querySelector("ul");

//ECOUTEURS
inputForm.addEventListener("submit", addListItem);
//inputDelete.addEventListener("click", deleteButton);


// function deleteButton() {
//   const deleteText = itemDelete[0].value;

//   const accionInput = document.querySelector('buttonDelete');
//   accionInput.textContent = containerText;
//   accionInput.classList = "containerText";

//   console.log(deleteText, "ici");
// }




//FONCTIONS
function addListItem(e){
    e.preventDefault();
    const containerText = inputForm[0].value;
    
        //<li></li>
        //Je créer une variable 'liTag' qui serra (=) .
        const liTag = document.createElement('li');
          liTag.textContent = containerText;
          liTag.classList = "containerText";

            //<button></button>
            //Je créer une variable qui s'appelle 'buttonDelete', qui serra (=) Je créer une balise <bouton>.
            const buttonDelete = document.createElement('button');

              //<button>"🗑"</button>
              //Je mets un text.
              buttonDelete.textContent = "🗑";

              //<button class="buttonDelete">"🗑"</button>
              //Je créer une classe, qui va s'appeler: 'buttonDelete' (pour mon CSS)
              buttonDelete.classList = "buttonDelete";

              //<li><button class="buttonDelete">"🗑"</button></li>
              //Je specifie où serra son emplacement.
              liTag.appendChild(buttonDelete)

            //Je créer un autre bouton...
            //<li><button class="buttonDone">"👍🏼"</button><li>
            const buttonDone = document.createElement('button');
              buttonDone.textContent = "👍🏼";
              buttonDone.classList = "buttonDone";
              liTag.appendChild(buttonDone);

          //Je specifie où serra son emplacement.
          //<ul><li>...</li></ul>
          ulTag.appendChild(liTag);

    inputForm[0].value = "";
    inputForm[0].placeholder = "What else ?";
}




