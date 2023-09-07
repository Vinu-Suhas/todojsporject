var addtaskpopup=document.getElementById('addtaskpopup')
var cardContainer=document.getElementById('card_container')
var card_heading_Data=document.getElementById('card_heading_Data')
var sub_item_popup=document.getElementById('subitem_data')
let additempopup = document.getElementById("additempopup")
var heading_container=document.getElementById('heading_container')
function showAddTask(){
    addtaskpopup.classList.remove('hide')
    cardContainer.classList.add('blur')
    heading_container.classList.add('blur')
    //show pop up task button

}

function addCard(){
    //adding pop up card details 
    addtaskpopup.classList.add('hide')
    var card=document.createElement("div")
    var heading=document.createElement("h3")
    var hr=document.createElement("hr")
    var addButton=document.createElement("button")
    var removeButton=document.createElement("button")
    cardContainer.classList.remove('blur')  
    heading_container.classList.remove('blur')
    if(heading_container.value=='') alert("Please enter the value")
    heading.innerText=card_heading_Data.value
    // addButton.innerText=" +"
    // removeButton.innerText=" -"
    addButton.classList.add('red_class')
    heading.classList.add('red_font')
    removeButton.classList.add('red_class')
    removeButton.classList.add('fa-solid')
    removeButton.classList.add('fa-trash')
    // removeButton.classList.add('fa-bounce')
    addButton.classList.add('fa-solid')  
    addButton.classList.add('fa-plus')  
    // addButton.classList.add('fa-bounce')  
    removeButton.onclick= function() {
        //Removing card
        card.remove()
    }
    // addButton.onclick =function(){
    //     //add sublist to cards
    //     sub_item_popup.classList.remove("hide")
    //     cardContainer.classList.add("blur")
    //  let item =document.createElement("div")
    //  let itemtext = document.createElement("span")
    //  let markdone = document.createElement("button")
    
    //  item.appendChild(itemtext)
    //  item.appendChild(markdone)
    
    //  itemtext.innerText = card.value
    //  markdone.innerText = "Mark Done"
    
    //  card.appendChild(item)
    //  sub_item_popup.innerText = " "
    // }
    card.classList.add('card')
    heading.classList.add('title_container')
    cardContainer.append(card)
    card.append(heading)
    card.append(hr)
    card.append(addButton)
    card.append(removeButton)
    card_heading_Data.value=""
    // removeButton.addEventListener("click",functi on(){
    //     card.remove()
    
    //    })
    addButton.addEventListener('click',function(){
        additempopup.classList.remove('hide')
        console.log("add inner button clikced")
        let itemPopupheading=document.createElement('h3')
        let itemName=document.createElement('p')
        let adding_button=document.createElement('button')
        let removing_button=document.createElement('button')


        additempopup.appendChild(itemPopupheading)
        additempopup.appendChild(itemName)
        additempopup.appendChild(adding_button)
        additempopup.appendChild(removing)

        itemPopupheading.innerText="Add subtask to the list"
        adding_button.innerText="Add "
        removing_button.innerText="Close"

        adding_button.addEventListener('click',()=>{
            
        })

    })

}


