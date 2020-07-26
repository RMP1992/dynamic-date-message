const output = document.querySelector('.output');
const button = document.querySelector('button');
button.addEventListener('click', showOutput = () =>{
    let date = new Date();
    let cur = date.getHours();
    let message;

    if(cur >= 17) {
        message = 'Good Evening'
        output.setAttribute('style','background-color: red; color: purple')
    }else if (cur >= 12){
        message = 'Good afternoon'
        output.setAttribute('style','background-color: blue; color: orange')
    }else if (cur >= 0) {
        message = 'Good morning'
        output.setAttribute('style','background-color: orange; color: yellow')
    } else {
        message = 'Something went wrong'
    }

    output.innerHTML = `<h1> ${message} </h1>`
})


