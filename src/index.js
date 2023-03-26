const loadingElement = document.querySelector("#loading")
const postContainer = document.querySelector("#posts-container")

// get app posts
const getPosts = async () => {
    const response = await fetch("https://engsoftbackend2023-1.onrender.com/posts/list")
    const data = await response.json()

    console.log(data)
    loadingElement.classList.add("hide")

    data.map((post) => {
        const div = document.createElement("div")
        const title = document.createElement("p")
        const text = document.createElement("p")
        const date = document.createElement("p")

        title.innerText = post.title
        text.innerText = post.text
        date.innerText = post.date

        div.appendChild(title)
        div.appendChild(text)
        div.appendChild(date)

        postContainer.appendChild(div)
    })
}

getPosts()

const postPosts = async () => {
    const text = document.getElementById("post-text")
    const title = document.getElementById("post-title")

    const post = {
        text: text,
        title: title,
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post)
    }

    const response = await fetch('https://engsoftbackend2023-1.onrender.com/posts/add', options)
}