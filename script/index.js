


// console.log("hello")

document.querySelector(".cross").style.display="none"
document.querySelector(".hemburger").addEventListener("click",()=>{
    document.querySelector(".sidebar").classList.toggle("sidebargo")
    if(document.querySelector(".sidebar").classList.contains("sidebargo")){
        document.querySelector(".hem").style.display='inline'
        document.querySelector(".cross").style.display="none"
    }
    else{
        document.querySelector(".hem").style.display="none"
        setTimeout(()=>{
            document.querySelector(".cross").style.display="inline"
        },400)
       
    }
})

let ResumeBtn=document.getElementById("resume-button-1")
ResumeBtn.onclick=()=>{
  window.open("https://drive.google.com/file/d/1Ky0ikHzGNiAjy-ZUpehxaUv_tno-3vUD/view?usp=sharing" )
}


let navResume=document.getElementById("resume-button-1")
navResume.onclick=()=>{
  window.open("https://drive.google.com/file/d/1Ky0ikHzGNiAjy-ZUpehxaUv_tno-3vUD/view?usp=sharing" )
}
let sideR=document.getElementById("sideResume")
sideR.onclick=()=>{
  window.open(".https://drive.google.com/file/d/1Ky0ikHzGNiAjy-ZUpehxaUv_tno-3vUD/view?usp=sharing" )
}
let aboutR=document.getElementById("resume-button-2")
aboutR.onclick=()=>{
  window.open("https://drive.google.com/file/d/1Ky0ikHzGNiAjy-ZUpehxaUv_tno-3vUD/view?usp=sharing" )
}