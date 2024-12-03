document.getElementById("quiz_eredmeny").addEventListener("click", ertekel);
document.getElementById("quiz_jo").addEventListener("click", jo_valsz);

function ertekel() {
    let pont_fr = 0;
    //frankenstein
    if (document.getElementById("adam").checked) {
        pont_fr = pont_fr + 1;
    };
    if (document.getElementById("narrator").value == 3) {
        pont_fr = pont_fr + 1;
    };
    if (!document.getElementById("justine").checked && document.getElementById("clerval").checked && document.getElementById("elizabeth").checked && !document.getElementById("victor").checked) {
        pont_fr = pont_fr + 1;
    };

    //drakula
    let pont_d = 0;
    if (document.getElementById("iro").selectedIndex == 4) {
        pont_d = pont_d + 1;
    };
    if (document.getElementById("viz").checked && document.getElementById("fej").checked && document.getElementById("hagyma").checked && !document.getElementById("arany").checked) {
        pont_d = pont_d + 1;
    };
    if (document.getElementById("ugyved").checked) {
        pont_d = pont_d + 1;
    };
    //jekyll es hyde
    let pont_j = 0;
    if (document.getElementById("gabriel").checked) {
        pont_j = pont_j + 1;
    };
    if (document.getElementById("gyilkos").checked) {
        pont_j = pont_j + 1;
    };
    if (!document.getElementById("gabriel2").checked && document.getElementById("jekyll2").checked && document.getElementById("lanyon").checked && document.getElementById("carew").checked) {
        pont_j = pont_j + 1;
    }

    document.getElementById("ertekeles").innerHTML = `<h3>Tudásod:</h3>
                    <p>Frankenstein:</p>
                    <progress value="${pont_fr}" max="3">${pont_fr}/3 pont</progress>
                    <p>Drakula:</p>
                    <progress value="${pont_d}"" max="3">${pont_d}/3 pont</progress>
                    <p>Jekyll és Hyde:</p>
                    <progress value="${pont_j}"" max="3">${pont_j}/3 pont</progress>
                    <p>Összesen:<p>
                    <progress value="${pont_fr + pont_d + pont_j}"" max="9">${pont_fr + pont_d + pont_j}/9 pont</progress>`;
};

function jo_valsz(){
    document.getElementById("adam").checked = true;
    document.getElementById("narrator").value = 3;
    document.getElementById("justine").checked = false;
    document.getElementById("clerval").checked = true;
    document.getElementById("elizabeth").checked = true;
    document.getElementById("victor").checked = false;

    document.getElementById("iro").selectedIndex = 4;
    document.getElementById("viz").checked = true;
    document.getElementById("fej").checked = true;
    document.getElementById("hagyma").checked = true;
    document.getElementById("arany").checked = false;
    document.getElementById("ugyved").checked = true;

    document.getElementById("gabriel").checked = true;
    document.getElementById("gyilkos").checked = true;
    document.getElementById("gabriel2").checked = false
    document.getElementById("jekyll2").checked = true;
    document.getElementById("lanyon").checked = true;
    document.getElementById("carew").checked = true;
}