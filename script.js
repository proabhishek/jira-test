
let addCardBtn = document.getElementById("addCard")
let todoContainer = document.getElementById("todo")

addCardBtn.addEventListener("click", addingtask)

function addingtask() {
     let divCard = document.createElement("div")
    divCard.className = "divCard"
     let card = document.createElement("div")
     card.className = "card"
    //  card.innerHTML = "click to Edit"
    // card.setAttribute("placeholder","click to edit");
     todoContainer.append(divCard)
     divCard.append(card)
     card.setAttribute("contenteditable", "true")
     card.focus()

     card.addEventListener("blur", (eventDetails)=>{
          let targetCard = eventDetails.target 
          let parentCard = targetCard.parentNode
          console.log(parentCard)
          console.log(targetCard)
        //   console.log(targetCard.innerHTML)
        //   console.log(targetCard.innerText)
        //   console.log(targetCard.textContent)
          if(!targetCard.innerHTML.trim()){
              parentCard.remove() // remove the card if it is empty
          }
     })

     const selector =  document.createElement("select")
    selector.innerHTML = `
        <option value="todo1">ToDo</option>  
        <option value="inProgress">InProgress</option>
        <option value="done">Done</option>
    `  
    divCard.append(selector)

   selector.addEventListener("change", (eventDetails)=>{

       const status = eventDetails.target.value // id

       let parentCard = eventDetails.target.parentNode

       document.getElementById(status).append(parentCard)
   })

}











