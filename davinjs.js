let input1 = document.getElementById('finput');      //getting elements by using id
let s1 = document.getElementById('fsubmit');
s1.onclick = saveText;      //adding event listener

function saveText() {       //creating function

    if (input1.value == "") {
        alert("Field can not be empty!!! Enter Some Value"); //additional alert message for the empty fields

    } else {

        let addText = document.querySelector('body');        //selecting body
        let div = document.createElement('div');        //creating div element
        addText.appendChild(div);

        let input2 = document.createElement('input'); //saving value in element created above
        input2.type = 'checkbox';                       //adding checkbox
        div.appendChild(input2);                        //adding checkbox to div

        let para = document.createElement('p');         //creating new element                                   
        para.innerText = document.getElementById('finput').value;        //getting value inserted
        div.appendChild(para);                           //adding para as a child to div

        let input3 = document.createElement('button');       //adding one more button as a delete button
        input3.setAttribute('class', 'delete')
        input3.innerHTML = ('Delete');
        div.appendChild(input3);                        //appending new element as a child to body

        input2.onclick = selectfn;                       //calling select function
        input3.onclick = deletefn;                          //calling delete function

        function selectfn(object) {                         //creating select function

            if (object.target.checked == true) {             //if else statement to check if checkbox is checked or not      
                object.target.parentNode.style.textDecoration = 'line-through';         // putting line through style on text
                object.target.parentNode.style.backgroundColor = 'red';         //changing color
                let add = object.target.parentNode;
                add.parentNode.appendChild(add);            //moving text to the last place


            } else {
                object.target.parentNode.style.textDecoration = 'none';         //removing style
                object.target.parentNode.style.backgroundColor = 'lightgreen';      //changing color back to light green
            }
        }

        function deletefn(object) { //creating delete function
            object.target.parentNode.parentNode.removeChild(object.target.parentNode); //removing item from the list
        }




    }

}