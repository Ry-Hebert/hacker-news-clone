const connect = "https://hacker-news.firebaseio.com/v0/"

console.log('Hello Console World!')

const getTopArt = () =>{
    
    let topStoriesID
    let getArtID = new Promise( (resolve, reject) =>{
        fetch(`${connect}topstories.json?print=pretty`, {
            method: 'GET'
        }).then( value => {
            resolve(value.json())
        })
    }).then( value => topStoriesID = value)
    .then(valArray =>{
        Promise.all(valArray).then( pleaseWork =>{
            let fetchedData = pleaseWork.map(x =>{
                // console.log(x)
                fetchHNArt(x)
            })
            Promise.all(fetchedData).then( x =>{
                console.log(x)
            })
        })

    })

    
}

window.onload = getTopArt()

const fetchHNArt = (idNum) =>{
    fetch(`${connect}item/${idNum}.json?print=pretty`, {
        method: 'GET'
    }).then( value => {
        return value.json()
    })
}