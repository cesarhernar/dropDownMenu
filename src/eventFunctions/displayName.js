export default function displayName(e) {
  let div = e.target.parentElement;
  if (div.nextSibling) {
    div.nextSibling.classList.contains("Child") ? show(div) : hide(div);
  }
}

function show(div) {
   for (let i = div.nextSibling; i !== null; i = i.nextSibling) {
    i.classList.remove("Child");
    i.classList.add("Padded");
  } 
}

function hide(div) {
  Array.prototype.forEach.call(div.parentElement.getElementsByClassName("Padded"), (elem) => {
    elem.classList.remove("Padded");
    elem.classList.add("Child");
    hide(elem);
  });
}