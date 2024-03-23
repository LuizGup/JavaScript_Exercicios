const span1 = document.getElementById("span");


function text(){
    document.getElementById('span').textContent = 'Hello World!';
}

function setupCounter(element) {
    let counter = 0
    const setCounter = (count) => {
      counter = count
      element.innerHTML = `count is ${counter}`
    }
    element.addEventListener('click', () => setCounter((counter + 1)*(counter + 1)))
    setCounter(0)
  }