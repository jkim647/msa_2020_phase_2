
const editScore = (id:Number,score:any,name:any) => {
    console.log(id)
    console.log(score)
    console.log(name)
    let changeToString = score.toString()
    fetch("http://msaburgergame.azurewebsites.net//api/Users/"+ id, {
    body: JSON.stringify({
        "userId":id,
        "name":name,
         "score":changeToString
        }),
          headers: {'cache-control': 'no-cache','Content-Type': 'application/json'},
          method: 'PUT'
        })
        
        .then((response : any) => {
      if (!response.ok) {
        alert("Something went wrong")
    
      } else {
        alert("Done")
      }
      })
}

export default editScore