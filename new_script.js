var addtaskpopup=document.getElementById('addtaskpopup')
var cardContainer=document.getElementById('card_container')
var card_heading_Data=document.getElementById('card_heading_Data')
var sub_item_popup=document.getElementById('subitem_data')
let additempopup_container = document.getElementById("addItempopup-container")
var heading_container=document.getElementById('heading_container')
var no_items=document.getElementById('no_items')
function showAddTask(){
    addtaskpopup.classList.remove('hide')
    cardContainer.classList.add('blur')
    heading_container.classList.add('blur')
    no_items.classList.add('blur')
    //show pop up task button

}

function closeadditempopup(){
    additempopup.classList.add('hide')
}
function hideAddTask(){

    //close button  on add item popup
    addtaskpopup.classList.add('hide')
    cardContainer.classList.remove('blur')  
    heading_container.classList.remove('blur')
    card_heading_Data.value="" 
    no_items.classList.add('hide')
    // to make the input field empty
}

function addCard(){
    //adding pop up card details 
    var card=document.createElement("div")
    // card.classList="collection_of_card"
    // card
    var heading=document.createElement("h3")
    var hr=document.createElement("hr")
    var addButton=document.createElement("button")
    var removeButton=document.createElement("button")
    if(heading_container.value=='') alert("Please enter the value")
    heading.innerText=card_heading_Data.value
    no_items.classList.remove('blur')
    hideAddTask()
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

        if(document.getElementById("card_container").childElementCount==0){
            no_items.classList.remove('hide')
        }
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
    // card_heading_Data.value=""  // to make the input field empty
    // removeButton.addEventListener("click",functi on(){
    //     card.remove()
    
    //    })
    addButton.addEventListener('click',function(){
        additempopup_container.classList.remove('hide')
        additempopup=document.createElement('div')
        additempopup.classList.add('subtask')
        cardContainer.classList.add('blur')
        heading_container.classList.add('blur')
        console.log("add inner button clikced")
        let itemPopupheading=document.createElement('h3')
        let itemName=document.createElement('p')
        let adding_button=document.createElement('button')
        let removing_button=document.createElement('button')
        let input_item_data=document.createElement('input')
        input_item_data.style.display="block"
        input_item_data.placeholder="Enter the list "
        input_item_data.style.textAlign="center"
        input_item_data.style.marginLeft="7rem"
        additempopup_container.appendChild(additempopup)
        additempopup.appendChild(itemPopupheading)
        additempopup.appendChild(itemName)
        additempopup.appendChild(input_item_data)
        

        additempopup.appendChild(adding_button)
        additempopup.appendChild(removing_button)
        adding_button.classList.add('red_class')
        removing_button.classList.add('red_class')

        itemPopupheading.innerText="Add New Item"
        adding_button.innerText="Add "
        removing_button.innerText="Close"

        adding_button.addEventListener('click',()=>{
            
        })
        removing_button.addEventListener('click',()=>{
            cardContainer.classList.remove('blur')
            heading_container.classList.remove('blur')
            // additempopup.classList.add('hide')
            additempopup_container.remove(additempopup)
        })

    })

}


