window.onload=()=>{
    const arrow = document.getElementById("arrow")
    const videoArrow = document.getElementById("videoArrow")
    const menu = document.getElementById("menu")
    const home = document.getElementById("menuhome")
    const principle = document.getElementById("menuprinciple")
    const conclusion = document.getElementById("menuconclusion")
    const homeTexth1 = document.getElementById("homeTexth1")
    const homeTexta = document.getElementById("homeTexta")
    const homeTexth3 = document.getElementById("homeTexth3")
    const Quantum = document.getElementById("Quantum")
    const Computer = document.getElementById("Computer")
    const Outlook = document.getElementById("Outlook")    
    const videoElement = document.getElementById("videoElement")
    const QuantumRight = document.querySelector("#Quantum > #RightArrowBox > #RightArrow")
    const ComputerRight = document.querySelector("#Computer > #RightArrowBox > #RightArrow")
    const ComputerLeft = document.querySelector("#Computer > #LeftArrowBox > #LeftArrow")
    const OutlookLeft = document.querySelector("#Outlook > #LeftArrowBox > #LeftArrow")
    const conclusionText1 = document.getElementById("conclusionText1")
    const conclusionText2 = document.getElementById("conclusionText2")
    const conclusionText3 = document.getElementById("conclusionText3")
    const conclusionText4 = document.getElementById("conclusionText4")

    Computer.style.display = "none"
    Outlook.style.display = "none"
    arrow.style.opacity= 0
    videoArrow.style.opacity= 0

    setInterval(()=>{    
        switch(window.location.hash){
            case "#principle":
                    window.location.hash = "#explanation"
                    arrow.style.opacity= null
                    arrow.style.animation= "hello 1s forwards"
                    setTimeout(()=>{arrow.style.animation=null},1000)
                    break
            case "#video":
                    window.location.hash = "#videoDiv"
                    videoArrow.style.opacity= null
                    videoArrow.style.animation= "hello 1s forwards "
                    setTimeout(()=>{videoArrow.style.animation=null},1000)
                    break
        }

        arrow.addEventListener("click",()=>{
            arrow.style.animation= "opacity .5s forwards"  
            menu.style.animation = "navup 1s forwards"   
            videoElement.style.animation = "hello 1.5s forwards" 
        })
    
        videoArrow.addEventListener("click",()=>{
            videoArrow.style.animation= "opacity .5s forwards" 
            menu.style.animation = "navdown 1s forwards"   
            videoElement.style.animation= "opacity .5s forwards"  
            setTimeout(()=>{menu.style.animation = null},999)
        })

        home.addEventListener("click",()=>{
            homeTexth1.style.animation = "hello 3s ease forwards" 
            homeTexth3.style.animation = "hello 3s ease forwards" 
            homeTexta.style.animation = "hello 3s ease forwards" 
            Quantum.style.animation = "opacity .7s ease forwards"
            conclusionText1.style.animation ="opacity .7s ease forwards"
            conclusionText2.style.animation ="opacity .7s ease forwards"
            conclusionText3.style.animation ="opacity .7s ease forwards"
            conclusionText4.style.animation ="opacity .7s ease forwards"
            setTimeout(()=>{           
                homeTexth1.style.animation = null
                homeTexth3.style.animation = null 
                homeTexta.style.animation = null
            },699)
        })

        principle.addEventListener("click",()=>{
            Quantum.style.animation = "hello 3s ease forwards"
            homeTexth1.style.animation = "opacity .7s ease forwards" 
            homeTexth3.style.animation = "opacity .7s ease forwards" 
            homeTexta.style.animation = "opacity .7s ease forwards" 
            conclusionText1.style.animation ="opacity .7s ease forwards"
            conclusionText2.style.animation ="opacity .7s ease forwards"
            conclusionText3.style.animation ="opacity .7s ease forwards"
            conclusionText4.style.animation ="opacity .7s ease forwards"
            setTimeout(() => {
                Quantum.style.animation =null
            }, 699);

        })

        conclusion.addEventListener("click",()=>{
            conclusionText1.style.animation ="hello 3s ease forwards"
            conclusionText2.style.animation ="hello 3s ease forwards"
            conclusionText3.style.animation ="hello 3s ease forwards"
            conclusionText4.style.animation ="hello 3s ease forwards"            
            homeTexth1.style.animation = "opacity .7s ease forwards" 
            homeTexth3.style.animation = "opacity .7s ease forwards" 
            homeTexta.style.animation = "opacity .7s ease forwards" 
            Quantum.style.animation = "opacity .7s ease forwards"
            setTimeout(() => {
                conclusionText1.style.animation =null
                conclusionText2.style.animation =null
                conclusionText3.style.animation =null
                conclusionText4.style.animation =null
            }, 699);
        })


        QuantumRight.addEventListener("click",()=>{
            Quantum.style.display = "none"
            Computer.style.display = null
            Computer.style.animation = "hello 2.5s ease"
            console.log("Q")
        })
        ComputerLeft.addEventListener("click",()=>{
            Quantum.style.display = null
            Computer.style.display = "none"
            Computer.style.animation = "hello 2.5s ease"
            console.log("CL")
        })
        ComputerRight.addEventListener("click",()=>{
            Computer.style.display = "none"
            Outlook.style.display = null
            Outlook.style.animation = "hello 2.5s ease"
            console.log("CR")
        })
        OutlookLeft.addEventListener("click",()=>{
            Computer.style.display = null
            Outlook.style.display = "none"
            Computer.style.animation = "hello 2.5s ease"
            console.log("O")
        })

    },100)

    switch(window.location.hash){
        case "#explanation":
                arrow.style.opacity= null
                arrow.style.animation= "hello 1s forwards"
                setTimeout(()=>{arrow.style.animation=null},1000)                
                break
        case "#videoDiv":
                videoArrow.style.opacity= null
                menu.style.animation = "display 0 forwards"
                videoArrow.style.animation= "hello 1s forwards "
                setTimeout(()=>{videoArrow.style.animation=null},1000)
                break
    }
}