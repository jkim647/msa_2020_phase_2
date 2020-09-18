import * as React from 'react';

const uploadScore = (idname:any, score:any) => {
        console.log(idname);
        let changeToString = score.toString()
       fetch('http://msaburgergame.azurewebsites.net//api/Users/', {
            body: JSON.stringify({
                "name":idname,
                "score":changeToString
            }),

            headers: {'Content-Type': 'application/json'},
            method: 'POST'
         
        })
        .then((response : any) => {
            if (!response.ok) {
                alert("Something went wrong")
            } else {
                alert("Done")
                getUserId()
            }
       })
}

const getUserId = () => {
    
}

export default uploadScore