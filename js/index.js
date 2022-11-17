let items = []
function save(event){
   event.preventDefault()
   items.push(event.target.itemName.value)
   console.log(items)
}
