const key = "0366786c9848f1ba54efb139bc04aee5"
function getlatestnews() {
    const url = `https://gnews.io/api/v4/top-headlines?token=${key}&lang=en&max=8`
    const recievedNews = (newsdata) => {
        const articlesDiv = document.querySelector(".row")
        newsdata.articles.forEach((article) => {
            const div = document.createElement("div")
            div.className = "col-sm-3"
            div.innerHTML = `
                    <div class="thumbnail">
                        <img src="${article.image}" width="100%" alt="gbr">
                        <div class="caption">
                            <h3>${article.title}</h3>
                            <p>${article.description}</p>
                            <p><a href="${article.url}" class="btn btn-light btn-block" role="button">Read Article</a></p> 
                        </div>
                    </div>`
        articlesDiv.appendChild(div)
        })
    }

    fetch(url)
    .then(response => response.json())
    .then(recievedNews)
}

function searching() {
    const searchFrom = document.querySelector('.search');
    const input = document.querySelector('.input');
    const newsList = document.querySelector('.row');
    searchFrom.addEventListener('submit', retrieve)
    function retrieve(e){
        if (input.value == '') {
            alert('Input field is empty!')
            return
        }
        newsList.innerHTML = ''
        e.preventDefault()
        let topic = input.value;
        let url = `https://gnews.io/api/v4/search?q=${topic}&lang=en&token=0366786c9848f1ba54efb139bc04aee5`
        fetch(url).then((res)=>{
            return res.json()
        }).then((data)=>{
            console.log(data)
            data.articles.forEach(article =>{
                const div = document.createElement("div")
                div.className = "col-sm-3"
                div.innerHTML = `
                        <div class="thumbnail">
                            <img src="${article.image}" width="100%" alt="gbr">
                            <div class="caption">
                                <h3>${article.title}</h3>
                                <p>${article.description}</p>
                                <p><a href="${article.url}" class="btn btn-light btn-block" role="button">Read Article</a></p> 
                            </div>
                        </div>`
            newsList.appendChild(div)
            })
        }).catch((error)=>{
            console.log(error)
        })
    }
}
function tech() {
    const url = `https://gnews.io/api/v4/top-headlines?token=${key}&lang=en&max=8&topic=technology`
    const recievedNews = (newsdata) => {
        const articlesDiv = document.querySelector(".row")
        newsdata.articles.forEach((article) => {
            const div = document.createElement("div")
            div.className = "col-sm-3"
            div.innerHTML = `
                    <div class="thumbnail">
                        <img src="${article.image}" width="100%" alt="gbr">
                        <div class="caption">
                            <h3>${article.title}</h3>
                            <p>${article.description}</p>
                            <p><a href="${article.url}" class="btn btn-light btn-block" role="button">Read Article</a></p> 
                        </div>
                    </div>`
        articlesDiv.appendChild(div)
        })
    }

    fetch(url)
    .then(response => response.json())
    .then(recievedNews)
}

function sports() {
    const url = `https://gnews.io/api/v4/top-headlines?token=${key}&lang=en&max=8&topic=sports`
    const recievedNews = (newsdata) => {
        const articlesDiv = document.querySelector(".row")
        newsdata.articles.forEach((article) => {
            const div = document.createElement("div")
            div.className = "col-sm-3"
            div.innerHTML = `
                    <div class="thumbnail">
                        <img src="${article.image}" width="100%" alt="gbr">
                        <div class="caption">
                            <h3>${article.title}</h3>
                            <p>${article.description}</p>
                            <p><a href="${article.url}" class="btn btn-light btn-block" role="button">Read Article</a></p> 
                        </div>
                    </div>`
        articlesDiv.appendChild(div)
        })
    }

    fetch(url)
    .then(response => response.json())
    .then(recievedNews)
}

function health() {
    const url = `https://gnews.io/api/v4/top-headlines?token=${key}&lang=en&max=8&topic=health`
    const recievedNews = (newsdata) => {
        const articlesDiv = document.querySelector(".row")
        newsdata.articles.forEach((article) => {
            const div = document.createElement("div")
            div.className = "col-sm-3"
            div.innerHTML = `
                    <div class="thumbnail">
                        <img src="${article.image}" width="100%" alt="gbr">
                        <div class="caption">
                            <h3>${article.title}</h3>
                            <p>${article.description}</p>
                            <p><a href="${article.url}" class="btn btn-light btn-block" role="button">Read Article</a></p> 
                        </div>
                    </div>`
        articlesDiv.appendChild(div)
        })
    }

    fetch(url)
    .then(response => response.json())
    .then(recievedNews)
}