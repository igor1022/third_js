let elem = document.querySelector('.block');

let coords = elem.getBoundingClientRect();
//let message = document.createElement('div');
//message.style.left = coords.left+ 300+ "px";
//console.log(coords.left);
  /*message.style.top = coords.bottom + 1000+ "px";
  console.log(message.style.top);

  message.innerHTML = 'bottom';
  document.body.append(message);*/

  //let centerX = document.documentElement.clientWidth / 2;
  //let centerY = document.documentElement.clientHeight / 2;

  //let elem1 = document.elementFromPoint(centerX, centerY);

  //elem1.style.background = "red";

  
  elem.style.left = coords.left + "px";
  elem.style.top = coords.top + "px";

  let el_left = document.querySelector('.arrow_left');  


  let x = 0;

  el_left.addEventListener('click', (ev) => {
    //const text = ev.target.value;
    //console.log(text);
    //const el1 = document.querySelector('.try');
    //el1.innerHTML = text;
    x = x + 10;
    elem.style.left = coords.left - x + z + "px";
    }
)


let el_top = document.querySelector('.arrow_top');  

let y = 0;

el_top.addEventListener('click', (ev) => {
  //const text = ev.target.value;
  //console.log(text);
  //const el1 = document.querySelector('.try');
  //el1.innerHTML = text;
  y = y + 10;
  elem.style.top = coords.top - y + k + "px";
  
  }
)

let el_right = document.querySelector('.arrow_right');  

let z = 0;

el_right.addEventListener('click', (ev) => {

  z = z + 10;
  elem.style.left = coords.left + z - x + "px";
  }
)

let el_bottom = document.querySelector('.arrow_bottom');  

let k = 0;

el_bottom.addEventListener('click', (ev) => {
  //const text = ev.target.value;
  //console.log(text);
  //const el1 = document.querySelector('.try');
  //el1.innerHTML = text;
  k = k + 10;
  elem.style.top = coords.top + k - y + "px";
  
  }
)
