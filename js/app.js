const input = document.querySelector("#input")
const btn = document.querySelector("#btn")
const result = document.querySelector("#result")
const total = document.querySelector("#total")
const activeTotal = document.querySelector("#active-total")
let totalCount = 0
let totalActiveCount = 0

total.innerHTML = totalCount
activeTotal.innerHTML = totalActiveCount

btn.addEventListener("click", e => {
    if(input.value === "") {
        alert("input must not be empty")
    } else {
        createDeleteElements(input.value)
        input.value = ''
    }    
})

function createDeleteElements(value) {
    totalCount++
    const li = document.createElement("li")
    const btn = document.createElement("button")

    let liActiveClass = 'li-active'
    let done = li.classList.toggle(liActiveClass)

    li.className = "li"
    li.innerHTML = value

    btn.className = "btn"
    btn.innerHTML = 'delete'
    li.appendChild(btn)

    btn.addEventListener("click", () => {
        totalCount--
        total.innerHTML = totalCount
        if(li.classList == liActiveClass) {
            totalActiveCount--
            activeTotal.innerHTML = totalActiveCount
        }
        result.removeChild(li)
    })

    li.addEventListener("click", e => {
        done = li.classList.toggle(liActiveClass)
        if(done) {
            totalActiveCount++
            activeTotal.innerHTML = totalActiveCount
        } else {
            totalActiveCount--
            activeTotal.innerHTML = totalActiveCount
        }
    })

    total.innerHTML = totalCount

    result.appendChild(li)
}