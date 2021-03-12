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
    })
    .then(valArray =>{

        let topThirty = valArray.slice(0, 30)
        // let fetchedData = topThirty.map(x =>{
        //     fetchHNArt(x)
        // })
        let fetchedData = Promise.all(topThirty).then(x=>{fetchHNArt(x)})

        console.log(fetchedData)
        // Promise.all(fetchedData).then( (articleData) =>{
        //     console.log(articleData)
        // })

        // Promise.all(valArray).then( pleaseWork =>{
        //     let fetchedData = pleaseWork.map(x =>{
        //         // console.log(x)
        //         fetchHNArt(x)
        //     })
        //     Promise.all(fetchedData).then( x =>{
        //         console.log(x)
        //     })
        // })

    })

    
}

window.onload = getTopArt()

const fetchHNArt = (idNum) =>{
    console.log(idNum)
    let fHNArtPromise = new Promise((resolve, reject) =>{
        fetch(`${connect}item/${idNum}.json?print=pretty`, {
            method: 'GET'
        }).then( value => {
            resolve(value.json())
            // console.log(value.json())
        })
    })
}