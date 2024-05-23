

function submitFun(){
    let txt = document.getElementById("name");
    let text = txt.value;
    if( text == ""){
        alert('Enter the mandatory details' );
    }else{
        alert('Hey '+ text +', Your form is submitted Successfully ! ');
        document.getElementById('survey-form').reset();
    }
}