window.onload=()=>{
    const arrow = document.getElementById("arrow")
    const videoArrow = document.getElementById("videoArrow")

    arrow.style.opacity= 0
    videoArrow.style.opacity= 0

    setInterval(()=>{    
        switch(window.location.hash){
            case "#principle":
                    window.location.hash = "#explanation"
                    arrow.style.opacity= null
                    arrow.style.animation= "hello 1s forwards"
                    setTimeout(()=>{arrow.style.animation=null},1500)
                    break
            case "#video":
                    window.location.hash = "#videoDiv"
                    videoArrow.style.opacity= null
                    videoArrow.style.animation= "hello 1s forwards "
                    setTimeout(()=>{videoArrow.style.animation=null},1500)
                    break
        }
    },1000)

    switch(window.location.hash){
        case "#explanation":
                arrow.style.opacity= null
                arrow.style.animation= "hello 1s forwards"
                setTimeout(()=>{arrow.style.animation=null},1500)                
                break
        case "#videoDiv":
                videoArrow.style.opacity= null
                videoArrow.style.animation= "hello 1s forwards "
                setTimeout(()=>{videoArrow.style.animation=null},1500)
                break
    }

    arrow.addEventListener("click",()=>{
        arrow.style.animation= "opacity .5s forwards"        
    })

    arrow.addEventListener("click",()=>{
        videoArrow.style.animation= "opacity .5s forwards"        
    })
}