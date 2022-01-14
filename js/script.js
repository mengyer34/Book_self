// CHECK DUPLICATE BOOK ================================
function no_duplicate() {
    sameWord = false;
    for (let i=0;i<localStorage.length;i++){
        if (localStorage.getItem("name"+i)==valueFromInput.value){
            return sameWord = true;
        }
    }
    return sameWord;
}



// ADD BOOK ===============================
var storageData = [];
var listOfName = [];
var listToAppear = [];
for (i=0;i<localStorage.length;i++){
    var value = "name"+i
    var nameInLocal = localStorage.getItem(value);
    listToAppear.push(nameInLocal)
    // listToAppear.sort()
    listToAppear.sort();
    listOfName.push(nameInLocal);
    listOfName.sort();
    console.log(listToAppear);
    console.log(listOfName);
}

function deleteItem(name) {
    for (let i in listToAppear){
        if(name === listToAppear[i]){
            listToAppear.splice(i, 1)
        }
    }
    // for (let i = 0; i<localStorage.length;i++){
    //     let keyOflocalStorage = "name"+i
    //     let valueOflocal = localStorage.getItem(keyOflocalStorage);
    //     if (name === valueOflocal){
    //         localStorage.removeItem(keyOflocalStorage);
    //     }
    //     console.log(localStorage);
    //     if (listToAppear.length === 0){
    //         localStorage.clear();
    //     }
    // }
    // Object.values(localStorage).forEach(function (value) {
    // if (name===value){
    //     localStorage.removeItem(value);
    //     console.log(localStorage);
    // }
    // });
    // Object.keys(localStorage).forEach(function (key) {
    // if (name===value){
    //     localStorage.removeItem(key);
    //     console.log(localStorage);
    // }
    // });

    // To LOOP LOCALSTORAGE IN JS+++++++++++++++++++++++++++++++++++
    for (let i = 0; i < localStorage.length; i++){        
        let key = localStorage.key(i);
        if (name===localStorage.getItem(key)){
            console.log(localStorage.getItem(key));
            localStorage.removeItem(key);
        }
     }
    console.log(listToAppear)
    return listToAppear
}
// let test = ["h","j","k"];
// console.log(deleteItem("k",test));


function add_book() {
    if (valueFromInput.value.length!=0 && !no_duplicate()){
        numberId = localStorage.length
        localStorage.setItem("name"+numberId, valueFromInput.value);
    }
    valueFromInput.value = "";
}
// let numOfName = 0;
// for (let i in listToAppear){
//     if(listToAppear[i]===null){
//         listToAppear = [];
//     }
// }

// appearBook++++++++++++++++++++++++++
function  appearBook() {
    for (let i=0;i<localStorage.length;i++){
        let newBook = document.createElement("span")
        let newBookBtn = document.createElement("span")
        let list = document.createElement("li")
        let listToApp = document.querySelector("#book-list ul")
        newBook.classList.add("name");
        newBookBtn.classList.add("delete");
        newBookBtn.textContent = "delete";
        listToApp.appendChild(list);
        list.appendChild(newBook);
        list.appendChild(newBookBtn);
        newBook.textContent = listToAppear[i]
        storageData.push(localStorage.getItem("name"+i))
        
    }
}

// DELETE BOOK =============================================
function deleteBook(event) {
	let bookToDelete = event.target.className;
    // let keyOfLocalStorage = keyOfLocalStorage.clear("name"+)
  // 1- Check the event if raised on the button delete 
  if (bookToDelete === "delete"){
      var target = event.target;
      target.parentNode.parentNode.removeChild(target.parentNode);

      var target1 = event.target;
      var nameToDel = target1.previousElementSibling.textContent;
        console.log(nameToDel);
      deleteItem(nameToDel, listToAppear)
  }
 //  2  if yes, get the parent and remove it from the  bookList
}

// GET TEXT FROM INPUT ++++++++++++++++++++++++++++++++++
var valueFromInput = document.getElementsByTagName("input")[1]
var getAccept = document.getElementById("add_book");
// Delete btn 
let bookList = document.querySelector("#book-list ul");
bookList.addEventListener("click", deleteBook);



appearBook();
// ADD EVENT ++++++++++++++++++++++++++

getAccept.addEventListener('click', add_book)


