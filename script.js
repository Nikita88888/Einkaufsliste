var number = 1;

document.getElementById('add_btn').onclick = function () {


    //einfügen von id's
    var input_field = document.getElementById('input_field').value;

    //id


    //Überprüfen ob das Feld leer ist.
    if (input_field === '') {

        alert("Eingabefeld ist Leer!!!")

        console.log("Input field is empty!!!")
    }
    else {

        console.log(number + '. ' + input_field)


        let br = document.createElement('br');

        document.body.appendChild(br);


        let div = document.createElement('div');

        div.innerHTML = number + ". " + input_field;

        document.body.appendChild(div);


        let br1 = document.createElement('br');

        document.body.appendChild(br1);
        

        number +=  1;
    }
}