window.onload=()=>{
    const arrow = document.getElementById("arrow")
    const videoArrow = document.getElementById("videoArrow")
    const menu = document.getElementById("menu")
    const car = document.getElementById("car")
    const Quantum = document.getElementById("Quantum")
    const Computer = document.getElementById("Computer")
    const Outlook = document.getElementById("Outlook")
    const QuantumRight = document.querySelector("#Quantum > #RightArrowBox > #RightArrow")
    const ComputerRight = document.querySelector("#Computer > #RightArrowBox > #RightArrow")
    const ComputerLeft = document.querySelector("#Computer > #LeftArrowBox > #LeftArrow")
    const OutlookLeft = document.querySelector("#Outlook > #LeftArrowBox > #LeftArrow")
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
            car.style.animation = "hello .8s forwards" 
        })
    
        videoArrow.addEventListener("click",()=>{
            videoArrow.style.animation= "opacity .5s forwards" 
            menu.style.animation = "navdown 1s forwards"   
            car.style.animation= "opacity .8s forwards"  
            setTimeout(()=>{menu.style.animation = null},999)
        })

        QuantumRight.addEventListener("click",()=>{
            Quantum.style.display = "none"
            Computer.style.display = null
            console.log("Q")
        })
        ComputerLeft.addEventListener("click",()=>{
            Quantum.style.display = null
            Computer.style.display = "none"
            console.log("CL")
        })
        ComputerRight.addEventListener("click",()=>{
            Computer.style.display = "none"
            Outlook.style.display = null
            console.log("CR")
        })
        OutlookLeft.addEventListener("click",()=>{
            Computer.style.display = null
            Outlook.style.display = "none"
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