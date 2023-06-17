let button = document.querySelectorAll("#questions a");
let addSvg = document.querySelectorAll("#questions svg");
let n = button.length;

for(let i = 0; i<n; i++) {
  button[i].onclick = () => {
    addSvg.forEach(el => {
      if(el != addSvg[i]) el.classList.remove("add-rotate");
    })
    addSvg[i].classList.toggle("add-rotate");
  }
}