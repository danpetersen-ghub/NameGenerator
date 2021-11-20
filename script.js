
function createName() {
    var _0C = document.getElementById("0C").value;
    var _0D = document.getElementById("0D").value;
    var _0E = document.getElementById("0E").value;
    var _0F = document.getElementById("0F").value;
    var _0G = document.getElementById("0G").value;

    if (document.getElementById("output").innerHTML != "") {
        document.getElementById("output").innerHTML = "";
}
    var _00 = document.getElementById("00");

    if ( _00.checked) {
        var name =_0A +"_"+_0B+"-"+_0C+"_"+_0D+"_"+_0E+"_"+_0F+"_"+_0G;
    } else var name =_0A +"_"+_0B+"_"+_0H +"-"+_0C+"_"+_0F+"_"+_0G;


    console.log(name);

    function displayName() {
            var title = document.createElement("H1");
            document.getElementById("output").appendChild(title);
            title.innerText = name;
        } 
    displayName();
}

var nowDateTime = new Date();

//Prepopulate Year
var fullYear = nowDateTime.getFullYear();
console.log(fullYear);
var _0A = fullYear;
document.getElementById("0A").value = _0A;

//Prepopulate Month
var fullMonth = nowDateTime.getMonth();
var _0B = fullMonth;
if (_0B < 10) {
    _0B = "0"+ (_0B + 1) ; 
} else {
    _0B = (_0B + 1) ; 
}
console.log(_0B);
document.getElementById("0B").value = _0B; 


//Prepopulate Day
var fullDay = nowDateTime.getDate();
console.log(fullDay);
var _0H = fullDay;
if (_0H < 10) {
    var _0H = "0"+ _0H; 
} 
document.getElementById("0H").value = _0H; 

function File() {
    console.log("TYPE: file");
    //Clear excess hiddens
    clearExcessHiddens();
    //add one hidden
    addOneHidden();
}

document.getElementById("01").onchange = function(){
    File();
};

//Clear excess hiddens
function clearExcessHiddens() {
    var x = document.querySelectorAll('.projectOnly,.hidden');
    for (var i = 0; i < x.length; i++) {
        x[i].className = "projectOnly";
    }
}
function addOneHidden() {
    var x = document.querySelectorAll(".projectOnly");
    for (var i = 0; i < x.length; i++) {
        x[i].className += " hidden";
    }

}
    
document.getElementById("00").onchange = function(){
    console.log("TYPE: Project");
    var x = document.querySelectorAll(".hidden");
    for (var i = 0; i < x.length; i++) {
        x[i].className = "projectOnly";
    };
};

//Modal - function
function modal(command) {
    console.log(command);
    let modalBox = document.getElementById("modal-area");
    if (command === "Hide" ){ 
           modalBox.style.display = "none"; 
          } 
    else if (command === "Show"){ 
         modalBox.style.display = "block";
              } 
}

//Modal - on load
modal("Hide");
let editClient = document.getElementById("edit_client");

let modalClose =  document.getElementById("modal-close");
    modalClose.addEventListener("click", function(){
        modal("Hide");
        MainUIUpdate();
});
MainUIUpdate();
File();


//Client List Events
editClient.addEventListener("click", function(){
    
    modal("Show");

    //Client List
    let ModalContent = document.getElementById("modal-content");

    //Templates
    ModalContent.innerHTML =  `
    <h5>Client List</h5>
    <label  for="ClientList" >Client List</label>
    <input   type="text" id="ClientList" name="ClientList" placeholder="A;B;C">
    <p id="Save">Save 
     <i  class="far fa-save"></i> 
    </p>`;
    
    showExistingConfig();
    Save();


});

function Save() {
    let Save = document.getElementById("Save"); 
    Save.addEventListener("click", function(){  
        saveTolocalStoragefn();
        modal("Hide");
        MainUIUpdate();
    });
} 


function saveTolocalStoragefn(){
      
    let ClientListValue = document.getElementById("ClientList").value;
    window.localStorage.setItem('ClientList', ClientListValue );
    
   
}
 

function MainUIUpdate() {
    clientListLS = window.localStorage.getItem('ClientList'); 
    console.log(clientListLS);
    if(clientListLS !== "" || null || undefined ) {
        result = clientListLS.split(';');
        console.log(result);
        //id="0C"
        document.getElementById('0C').innerHTML="";
        for (var i = 0; i < result.length;i++) {
            let OPTION = `<option value="${result[i]}">${result[i]}</option>`;
            document.getElementById('0C').innerHTML += OPTION ;

        }
    }
}

function showExistingConfig() {
    let Save = document.getElementById("Save"); 
    if(!window.localStorage['ClientList'] || window.localStorage['ClientList'] === null || undefined ){
        currentList = `<br><p style="font-size:9px;"> No Saved Records, Please Provide a List 
                       <br><em>i.e. a;b;c</em> 
                       <p>`;
        Save.innerHTML += currentList;
    } else {
        document.getElementById("ClientList").value = window.localStorage['ClientList'];
    }
}



//document.getElementById('01').click();