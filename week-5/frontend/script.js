//  start from here
function add(){

    const input =document.getElementById("task").value
    // const btn= document.getElementById("add-tasks")

    const divEl =document.createElement("div")
    const data = document.createElement("h1")
    const dltBtn= document.createElement("button")

    data.innerHTML =input
    dltBtn.innerHTML="Delete"

    divEl.setAttribute("style" ,"display : flex ; gap : 20px  ; justify-content:center")
    dltBtn.setAttribute("style","padding:2px")
    data.setAttribute("style","font-size: 30px")

    divEl.appendChild(data)
    divEl.appendChild(dltBtn)

    document.getElementById("todo-container").appendChild(divEl)

    dltBtn.addEventListener("click",()=>{
        divEl.remove();
    })

}


