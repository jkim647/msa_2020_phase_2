

const deleteUser = (id:any) => {
    fetch("http://msaburgergame.azurewebsites.net//api/Users/" +id,{method:"DELETE"}).then(()=>{
    alert("Successfully deleted")
    })
}



export default deleteUser