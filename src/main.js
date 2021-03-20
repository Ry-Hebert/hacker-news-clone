const connect = "https://hacker-news.firebaseio.com/v0/"

console.log('Hello Console World!')

let counter = 0
let insertContent = document.querySelector('.top-news-items')

const getTopArt = () =>{
    let topStoriesID
    let getArtID = new Promise( (resolve, reject) =>{
        fetch(`${connect}topstories.json?print=pretty`, {
            method: 'GET'
        }).then( value => {
            resolve(value.json())
        })
    })
    // .then(valArray =>{

    //      valArray.slice(0, 30)

    //     // let topThirty = valArray.slice(0, 30)
    //     // let fetchedData = topThirty.map(x =>{
    //     //     fetchHNArt(x)
    //     // })
        
    //     // let fetchedData = Promise.all(topThirty).then(x=>{
    //     //     let fRes = fetchHNArt(x)
    //     //     console.log(fRes)
    //     // })

    //     // console.log(fetchedData)

    //     // Promise.all(fetchedData).then( (articleData) =>{
    //     //     console.log(articleData)
    //     // })

    //     // Promise.all(valArray).then( pleaseWork =>{
    //     //     let fetchedData = pleaseWork.map(x =>{
    //     //         // console.log(x)
    //     //         fetchHNArt(x)
    //     //     })
    //     //     Promise.all(fetchedData).then( x =>{
    //     //         console.log(x)
    //     //     })
    //     // })

    // })

    let topThirtyStories = Promise.all([getArtID]).then( values =>{
        console.log(values[0])
        let topThirty = values[0].slice(0, 30)
        console.log(topThirty)
        return topThirty
    })

    Promise.all([topThirtyStories]).then( values =>{
        // let tryThisContent = values[0].map(x =>{fetchHNArt(x)})
        
        let tryThisContent = new Promise((resolve, reject) =>{
            // console.log(values[0].map(x =>{return fetchHNArt(x)}))
            let loopCount = 0
            let workWork = values[0].map(x =>{return fetchHNArt(x)})
            Promise.all([workWork]).then( xy =>{
                console.log(xy[0])
            }
                
            )
        })

        Promise.all([tryThisContent]).then( y =>{
            console.log(y[0])
        })
    })
}

window.onload = getTopArt()

const fetchHNArt = (idNum) =>{
    console.log(idNum)
    let fHNArtPromise = new Promise((resolve, reject) =>{
        fetch(`${connect}item/${idNum}.json?print=pretty`, {
            method: 'GET'
        }).then( value => {
            let resolvedValue = value.json()
            let returnedValues = Promise.all([resolvedValue]).then( funcPromiseReturn =>{
                console.log(funcPromiseReturn[0])
                countPlus(counter)
                insertContent.innerHTML += `<div class="article-item"><div class="rank">${counter}. <i class="fas fa-caret-up"></i></div> <div class="art-title-details"><div class="art-title">${funcPromiseReturn[0].title}</div><div class="art-details">${funcPromiseReturn[0].score} Points by ${funcPromiseReturn[0].by} | Hide | Comments: ${funcPromiseReturn[0].kids.length}</div></div></div>`
            })

            return returnedValues
            // resolve(Promise.all([resolvedValue]).then( funcPromiseReturn =>{
            //     console.log(funcPromiseReturn[0])
            // }))

            // resolve(resolvedValue)
            // resolve(value.json())
            // console.log(value.json())
        })
    })
}

const countPlus = (count) =>{
    return (count = count + 1)
}