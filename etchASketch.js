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
makeGrid(100)