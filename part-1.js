const baseURL = 'http://numbersapi.com'

// Question 1

async function numFact(favNum) {
    let { data: fact } = await axios.get(`${baseURL}/${favNum}/?json`)

    console.log(fact.text)
}

// Question 2

async function multipleNumFacts(arrayOfNums) {
    const factsArr = []

    for (let num of arrayOfNums) {
        factsArr.push(axios.get(`${baseURL}/${num}/?json`))
    }

    let facts = await Promise.all(factsArr)


    for (let fact of facts) {
        console.log(fact.data.text)
        $('ul').append(`<li>${fact.data.text}</li>`)
    }
}

// Question 3

async function fourFacts(num) {
    const factsArr = []

    for (let i = 0; i < 4; i++) {
        factsArr.push(axios.get(`${baseURL}/${num}/?json`))
    }

    let facts = await Promise.all(factsArr)


    for (let fact of facts) {
        console.log(fact.data.text)
        $('ul').append(`<li>${fact.data.text}</li>`)
    }
}