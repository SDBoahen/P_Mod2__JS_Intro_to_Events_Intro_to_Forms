const title = document.querySelector("h1")
    // title.textContent = ":)"


const grocerListDiv = document.querySelector("div")


    const newItemForList = document.createElement("p")
        newItemForList.innerText = "Vegetables"
        console.log("new pTag: " , newItemForList)

        newItemForList.addEventListener("mouseover", (event)=>{
            console.log(event.target.innerText)
        })

    grocerListDiv.append(newItemForList)


    const newItemForList2 = document.createElement("p")
    newItemForList2.innerText = "VitaMeataVegaMin"
    console.log("new pTag: " , newItemForList2)

    grocerListDiv.append(newItemForList2)




const groceryFormForNewItem = document.querySelector("form")
    groceryFormForNewItem.addEventListener("submit", (event)=>{
        // console.log("submitting form!: ", event)
        // console.log("event.taget: ", event.target[0].value)

        console.log("event.target: ", event.target["item-weight"].value)

        // Prevents the Form from Causing the Page from "Refreshing"
        event.preventDefault() 


        const newItemForList3 = document.createElement("p")

        // newItemForList3.innerText = event.target["item-weight"].value
        newItemForList3.innerText = event.target["item-name"].value
    
        
        grocerListDiv.append(newItemForList3)

        event.target.reset()
        // groceryFormForNewItem.reset()
        // event.target["item-name"].value = ""

        
    })














