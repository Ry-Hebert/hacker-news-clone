const connect = "https://hacker-news.firebaseio.com/v0/"

console.log('Hello Console World!')

const getTopArt = () =>{
 
    let getArtID = new Promise( (resolve, reject) =>{
        fetch(`${connect}topstories.json?print=pretty`, {
            method: 'GET'
        }).then( value => {
            resolve(value.json())
        })
    })

    let x = Promise.all([getArtID])

    console.log(getArtID)
    console.log(x)
}

window.onload = getTopArt()