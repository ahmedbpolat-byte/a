const o = document.getElementById("o");
function update(){
    const i = document.getElementById("i");
    var val = i.value;
    if (val.includes("https://") == false){
        val = "https://" + val
    }
    console.log(val);
    o.href = val;
}