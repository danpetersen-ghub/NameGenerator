
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

document.getElementById("01").onchange = function(){
    console.log("TYPE: file");
    //Clear excess hiddens
    clearExcessHiddens();
    //add one hidden
    addOneHidden();
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


// */
    