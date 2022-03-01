const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames */
const arrays = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Looping through images */
for (const array of arrays) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", `images/${array}`);
  console.log(array);
  thumbBar.appendChild(newImage);

  newImage.addEventListener("mouseover", () =>
    displayedImage.setAttribute("src", `images/${array}`)
  );
}

/* Wiring up the Darken/Lighten button */
function clicker() {
  if (btn.textContent === 'Darken') {
   btn.setAttribute('class', 'light');
   overlay.style.backgroundColor = "rgba(0,0,0,0.5)"
   return  btn.textContent = "Lighten";
  } else if (btn.textContent === 'Lighten'){
    btn.setAttribute('class', 'dark');
    overlay.style.backgroundColor = "rgba(0,0,0,0)"
    return  btn.textContent = "Darken";
    }
  
}

btn.addEventListener('click',clicker)


