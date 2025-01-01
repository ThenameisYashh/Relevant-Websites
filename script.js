const gitdes = document.getElementById('git-des')
const linkdes = document.getElementById('link-des')
const github = document.querySelector('.github')
const linkedin = document.querySelector('.linkedin')
const ab = document.querySelector('.all-boxes')

linkedin.addEventListener('click',()=>{
    let url18= "https://www.linkedin.com/in/yash-sonii";
    window.open(url18 , '_blank').focus()
})
github.addEventListener('click',()=>{
    let url19= "https://github.com/ThenameisYashh";
    window.open(url19 , '_blank').focus()
})

fetch(`https://mocki.io/v1/5ca104b3-dc09-4efe-a8b8-1ad43fa7b338`)
.then((res)=>res.json())
.then((data)=>{
    data.forEach(e => {
        const boxs = document.createElement('a')
        boxs.classList.add('boxes-theme')
        boxs.href = `${e.link}`
        boxs.innerHTML = `<img src="${e.banner}" alt=""></img><div class="des">${e.description}</div>`
        ab.append(boxs)
    });
})