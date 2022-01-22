const input = document.querySelector("#input")
const btn = document.querySelector("#btn")
const result = document.querySelector("#result")
const total = document.querySelector("#total")

btn.addEventListener("click", e => {
    console.log(input.value)

    result.innerHTML += `<p class="para">${input.value}</p>`
    input.value = ''
})

console.log(result);