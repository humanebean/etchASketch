function makeGrid(size){
    let grid=document.querySelector("#myGrid")
    let ratio=100/size
    for(let i = 1; i<size+1;i++){
        for(let j=1;j<size+1;j++){
            let gridBlock=document.createElement("div")
            gridBlock.id=(i)+"x"+(j)
            gridBlock.className="block"
            gridBlock.style.minWidth="1px"
            gridBlock.style.minHeight="1px"
            gridBlock.style.flexBasis=ratio+"%"
            gridBlock.addEventListener('mouseover',()=>{
                gridBlock.style.backgroundColor='red'
            })
            grid.appendChild(gridBlock)
        }
        let newLine =document.createElement("div")
        newLine.id='break'
        grid.appendChild(newLine)
    }
}
function clearGrid(){
    let grid=document.querySelector("#myGrid")
    while(grid.firstChild){grid.removeChild(grid.firstChild)}
}
let defaultVal=16
let clearBtn=document.querySelector("#clear")
clearBtn.addEventListener('click',()=>{
    clearGrid()
    makeGrid(defaultVal)
})
let newGrid=document.querySelector('#newGrid')
newGrid.addEventListener('click',()=>{
    defaultVal=parseInt(prompt("What size grid do you want? Please pick a number from 1-100."))
    while (defaultVal>100 || defaultVal<0){defaultVal=parseInt(prompt("That is not a valid number. Please pick a number from 1-100."))}
    clearGrid()
    makeGrid(defaultVal)
})

makeGrid(defaultVal)