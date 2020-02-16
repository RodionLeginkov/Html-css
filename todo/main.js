// Создать три константы с формой добавления. поиска и туду листа
//  Вывод значение инпута из формы добавления тудухи по нажатию на интер

const findInTodoForm = document.querySelector("#search");

const addTodoForm = document.querySelector("#addTodoForm");

const Todolist = document.querySelector("#todolist");

const Deletebuttom = document.querySelector(".newlist");

const SelectButton = document.querySelector(".newlist")
console.log(Deletebuttom);

findInTodoForm.addEventListener("keyup", e => {
  e.preventDefault();
  const Newform = findInTodoForm.searching.value;
  globalsearch(Newform);
});

const List = document.querySelectorAll("#todolist li");

addTodoForm.addEventListener("submit", e => {
  e.preventDefault();
  if (addTodoForm.newstring.value != "") {
    Todolist.innerHTML += `
    <li>
    <div class="mainlistitem">
      <div class="listitem">
        <div class="changecolorselect">
          <span class="iconcircle">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="check"
              class="svg-inline--fa fa-check fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
              class="Seclect-icon"
                fill="currentColor"
                d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
              ></path>
            </svg>
          </span>
        </div>
        <div class="text">
        ${addTodoForm.newstring.value}
        </div>
        </div>
        <div class="changecolordelete delete" name="del">
          <span class="icondelete"
            ><svg
              
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="times"
              class="svg-inline--fa fa-times fa-w-11"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 352 512"
            >
              <path
              class="delete-icon"
                fill="currentColor"
                d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </li>
`;
  }
  addTodoForm.newstring.value = "";
});

function globalsearch(word) {
  findInTodoForm.addEventListener("submit", e => e.preventDefault());
  const Mass = Array.from(Todolist.children);

  Mass.forEach(current => {
    // current.preventDefault();
    const content = current.querySelector(".text").innerText;
    /*console.log(content);
    console.log(word);*/
    if (content.includes(word)) current.classList.remove("hide");
    //current.classList.add("hide");
    else current.classList.add("hide");
  });
}

/*Deletebuttom.addEventListener("mousedown", e => {
  e.preventDefault();
  console.log(Deletebuttom.parentNode.parentNode);
});*/

Deletebuttom.addEventListener("click", e => {
  if (e.target.classList.contains("delete-icon")) {
    const DelList = e.target;
    //console.log(DelList.parentNode.parentNode.parentNode.parentNode);
    DelList.parentNode.parentNode.parentNode.parentNode.remove();
    //console.log(DelList);
    //console.log(DelList.parentNode.parentNode);
    //DelList = DelList.parentNode;
    // DelList.parentNode.parentNode.remove();
    // console.log(DelList.parentNode.parentNode);
  }
});

SelectButton.addEventListener("click", e => {
  if (e.target.classList.contains("Seclect-icon")) {
    const Allchoice = [];
    let Yourchoice = e.target;
    Yourchoice = Yourchoice.parentNode.parentNode.parentNode;
    Yourchoice.classList.add("PutonSelect");
    //if(Yourchoice.classList.)
    //console.log("hello");
    console.log(Yourchoice.classList);
   // Allchoice.push(Yourchoice);
   // console.log(Allchoice.length);
  }});