let data;
let ctr;
let subject = document.body.id;
let video = document.getElementById("video");
let notes = document.getElementById("notes");

function preload() {
  data = loadJSON("/links.json");
}

function setup() {
  noCanvas();
  let unitHeader = document.getElementsByClassName("unitHeader");
  let lessonContainer = document.getElementsByClassName("lesson-container");
  ctr = 0;
  for (let i = 0; i < unitHeader.length; i++) {
    let unit = getUnit(i);
    console.log("Unit " + (i + 1) + ": " + unit.length);
    unitHeader[i].addEventListener("mousedown", dropdown, false);
    for (let j = 0; j < unit.length; j++) {
      let node = document.createElement("A");
      let textNode = document.createTextNode(unit[j].name);
      node.appendChild(textNode);
      node.classList.add("lesson");
      node.id = "lesson" + ctr;
      node.addEventListener("mousedown", change, false);
      lessonContainer[i].appendChild(node);
      ctr++;
    }
  }
}

function getUnit(i) {
  return data.subjects[subject].filter(obj => {
    return obj.unit === i + 1;
  });
}

function dropdown() {
  let next = this.nextElementSibling;
  if (next.style.display === "block") next.style.display = "none";
  else next.style.display = "block";
}

function change(event) {
  let id = event.target.id;
  let lessonNum = parseInt(id.substring(6, id.length));

  video.src =
    "https://www.youtube.com/embed/" +
    data.subjects[subject][lessonNum].videoLink +
    "?rel=0";
  notes.src =
    "https://docs.google.com/document/d/e/2PACX-" +
    data.subjects[subject][lessonNum].docLink +
    "/pub?embedded=true";
}
