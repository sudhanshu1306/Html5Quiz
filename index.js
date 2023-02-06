const options=["Businness","Finance","Management","Communication","Customer Service","Hospitality",
                "Education","Entrepeneurship","Freelancing","Food","Agriculture","Graphic and Arts","Health"
                ,"Legal and HR","Manufacturing","Administrative Support"]

let option_text=""
options.forEach((option,index)=>{
    option_text+=`<div class="option-wrapper"><div class="option" id=${"option"+index} onclick='selectedOption(${"option"+index})' >${option}</div></div>`
})
document.getElementById("options").innerHTML = option_text

function selectedOption(element){
    // console.log("here",id)
    // const element = document.getElementById(id);
    element.classList.contains("option-selected")?element.classList.remove("option-selected"):element.classList.add("option-selected")
}