let data;
let subject = document.body.id;
let video  = document.getElementById('video');

function preload()
{
  data = loadJSON('/links.json');
}

function setup()
{
  noCanvas();
  let unitHeader = document.getElementsByClassName('unitHeader');
  let lessons = document.getElementsByClassName('lesson');
  for(let i = 0; i < unitHeader.length; i++)
  {
     unitHeader[i].addEventListener('click', dropdown, false);
  }
  for(let i = 0; i < lessons.length; i++)
  {
     lessons[i].addEventListener('click', change, false);
  }
  
  console.log(lessons.length);
}

function dropdown()
{
  let next = this.nextElementSibling;
  if(next.style.display === "block")
    next.style.display = "none";
  else
    next.style.display = "block";
}

function change(event)
{
  let id = event.target.id;
  let lessonNum = parseInt(id.substring(6, id.length));
  
  video.src = "https://www.youtube.com/embed/" + data.subjects[subject][lessonNum].videoLink;
  notes.src = "https://docs.google.com/document/d/e/2PACX-" + data.subjects[subject][lessonNum].docLink + "/pub?embedded=true";
}
