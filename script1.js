
let addCardBtn = document.getElementById("addCard")
let todoContainer = document.getElementById("todo")

addCardBtn.addEventListener("click", addingtask)

function addingtask() {
    
   
     let card = document.createElement("div")
     card.className = "card"
     card.id = "card-"+Date.now()
     todoContainer.append(card)
     card.setAttribute("contenteditable", "true")
     card.setAttribute("draggable", "true")
     card.focus()

     card.addEventListener("blur", (eventDetails)=>{
          let targetCard = eventDetails.target 
          let parentCard = targetCard.parentNode
          console.log(parentCard)
          console.log(targetCard)
       
          if(!targetCard.innerHTML.trim()){
              parentCard.remove() // remove the card if it is empty
          }
     })
     
     card.addEventListener("dragstart", (eventDetails)=>{
        let cardDragged  = eventDetails.target
        eventDetails.dataTransfer.setData("text/plain" ,  cardDragged.id)
        cardDragged.style.opacity = "0.5"

    })

    card.addEventListener("dragend", (eventDetails)=>{
        let cardDragged  = eventDetails.target
        cardDragged.style.opacity = 1 // resetting the opacity when drag is complete
    })

    let dragEvents = ["dragover", "dragenter", "drop"]
    dragEvents.forEach(dropEvent=>{
           document.querySelectorAll(".column").forEach(column =>{
                 column.addEventListener(dropEvent, (eventDetails)=>{
                      eventDetails.preventDefault()

                      if(dropEvent == "drop"){
                          const cardId = eventDetails.dataTransfer.getData("text/plain")
                          const card = document.getElementById(cardId)
                          column.append(card)
                      }
                 })
           })
    })
//    let arr = ["dragover", "dragenter", "drop"]
    // arr.forEach(dropEvent=>{
    //     console.log(dropEvent)
    // })

    // let dragEvents = ["dragover", "dragenter", "drop"]

    // for(let t of dragEvents){
    //     let columns = document.querySelectorAll(".column") // [todo, inProgress, done]

    //     for(let col of columns){
    //         col.addEventListener(t, (eventDetails)=>{
    //             eventDetails.preventDefault()
    //             if(t == "drop"){
    //                 const cardId = eventDetails.dataTransfer.getData("text/plain")
    //                 const card = document.getElementById(cardId)
    //                 col.append(card)
    //             }
    //         })
    //     } 
    // }

}











