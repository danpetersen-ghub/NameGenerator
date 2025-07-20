
function createName() {
    let year = document.getElementById("0A").value
    let month = document.getElementById("0B").value
    let day = document.getElementById("0B").value
    let clientSelectNameInput = document.getElementById("0C").value;
    let _0D = document.getElementById("0D").value;
    let _0E = document.getElementById("0E").value;
    let projectNameInput = document.getElementById("0F").value;
    let fileNameInput = document.getElementById("0G").value;

    let cleanfileName = fileNameInput.replace(" ", "-")
    let cleanProjectName = projectNameInput.replace(" ", "-")

    console.log("File Name is: ", cleanfileName);
    console.log("Project Name is: ", cleanProjectName)

    if (document.getElementById("output").innerHTML != "") {
        document.getElementById("output").innerHTML = "";
    }
    let projectNameType = document.getElementById("00");

    if (projectNameType.checked) {
        let outputNameStructure = year + "_" + month + "-" + clientSelectNameInput + "_" + _0D + "_" + _0E + "_" + cleanProjectName + "_" + cleanfileName;
    } else outputNameStructure = year + "_" + month + "_" + day + "-" + clientSelectNameInput + "_" + cleanProjectName + "_" + cleanfileName;

    console.log("output is: ", outputNameStructure);

    function displayName() {
        let title = document.createElement("H1");
        document.getElementById("output").appendChild(title);
        title.innerText = outputNameStructure;
    }
    displayName();
}

const nowDateTime = new Date();
document.getElementById("0A").value = nowDateTime.getFullYear();

//Prepopulate Month
let fullMonth = nowDateTime.getMonth();
let _0B = fullMonth;
if (_0B < 9) {
    _0B = "0" + (_0B + 1);
} else {
    _0B = (_0B + 1);
}
console.log(_0B);
document.getElementById("0B").value = _0B;


//Prepopulate Day
let fullDay = nowDateTime.getDate();
console.log(fullDay);
let _0H = fullDay;
if (_0H < 10) {
    let _0H = "0" + _0H;
}
document.getElementById("0H").value = _0H;

function File() {
    console.log("TYPE: file");
    //Clear excess hiddens
    clearExcessHiddens();
    //add one hidden
    addOneHidden();
}

document.getElementById("01").onchange = function () {
    File();
};

//Clear excess hiddens
function clearExcessHiddens() {
    let x = document.querySelectorAll('.projectOnly,.hidden');
    for (let i = 0; i < x.length; i++) {
        x[i].className = "projectOnly";
    }
}
function addOneHidden() {
    let x = document.querySelectorAll(".projectOnly");
    for (let i = 0; i < x.length; i++) {
        x[i].className += " hidden";
    }

}

document.getElementById("00").onchange = function () {
    console.log("TYPE: Project");
    let x = document.querySelectorAll(".hidden");
    for (let i = 0; i < x.length; i++) {
        x[i].className = "projectOnly";
    };
};

//Modal - function
function modal(command) {
    console.log(command);
    let modalBox = document.getElementById("modal-area");
    if (command === "Hide") {
        modalBox.style.display = "none";
    }
    else if (command === "Show") {
        modalBox.style.display = "block";
    }
}

//Modal - on load
modal("Hide");
let editClient = document.getElementById("edit_client");

let modalClose = document.getElementById("modal-close");
modalClose.addEventListener("click", function () {
    modal("Hide");
    MainUIUpdate();
});
MainUIUpdate();
File();


//Client List Events
editClient.addEventListener("click", function () {

    modal("Show");

    //Client List
    let ModalContent = document.getElementById("modal-content");

    //Templates
    ModalContent.innerHTML = `
    <h5>Client List</h5>
    <label  for="ClientList" >Client List</label>
    <input   type="text" id="ClientList" outputNameStructure="ClientList" placeholder="A;B;C">
    <p id="Save">Save 
     <i  class="far fa-save"></i> 
    </p>`;

    showExistingConfig();
    Save();


});

function Save() {
    let Save = document.getElementById("Save");
    Save.addEventListener("click", function () {
        saveTolocalStoragefn();
        modal("Hide");
        MainUIUpdate();
    });
}


function saveTolocalStoragefn() {

    let ClientListValue = document.getElementById("ClientList").value;
    window.localStorage.setItem('ClientList', ClientListValue);


}


function MainUIUpdate() {
    clientListLS = window.localStorage.getItem('ClientList');
    console.log(clientListLS);
    if (clientListLS) {
        result = clientListLS.split(';');
        console.log(result);
        //id="0C"
        document.getElementById('0C').innerHTML = "";
        for (let i = 0; i < result.length; i++) {
            let OPTION = `<option value="${result[i]}">${result[i]}</option>`;
            document.getElementById('0C').innerHTML += OPTION;

        }
    }
}

function showExistingConfig() {
    let Save = document.getElementById("Save");
    if (!window.localStorage['ClientList'] || window.localStorage['ClientList'] === null || undefined) {
        currentList = `<br><p style="font-size:9px;"> No Saved Records, Please Provide a List 
                       <br><em>i.e. a;b;c</em> 
                       <p>`;
        Save.innerHTML += currentList;
    } else {
        document.getElementById("ClientList").value = window.localStorage['ClientList'];
    }
}


function copyToClipboard() {
    // Get the text field
    let copyText = document.getElementById("output");

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.innerText);

    // Alert the copied text
    console.log("Copied the text: " + copyText.innerText);
}


//document.getElementById('01').click();