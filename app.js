const testimonials = [
  {
    id: 1,
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "Earlier, we delivered food orders to our known and repeat customers but now we have been able to create a completely new segment of repeat users - all because of the Hungry Beggar app.",
    name: "Susan Smith",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "We are immensely satisfied with the marketing push Hungry Beggar has provided us. We are now exclusive with Hungry Beggar and look forward to more growth in our delivery business through online orders.",
    name: "Jessy",
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Hungry Beggar delivery fleet saves considerable effort on our part resulting in more fulfilled orders for us. Also, it has now become much easier for customers to discover our brand on Hungry Beggar.",
    name: "Sandeep",
  },
];

const img = document.getElementById("person-img");
const info = document.getElementById("info");
const author = document.getElementById("author");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentState = 0;

window.addEventListener("load", function () {
  // console.log("sandeep");
  showPerson(currentState);
});

// show person baed on item
function showPerson(person) {
  const details = testimonials[person];
  img.src = details.img;
  info.textContent = details.text;
  author.textContent = details.name;
}

// // show next person

nextBtn.addEventListener("click", function () {
  currentState++;
  if (currentState > testimonials.length - 1) {
    currentState = 0;
  }

  showPerson(currentState);
});

prevBtn.addEventListener("click", function () {
  currentState--;
  if (currentState < 0) {
    currentState = testimonials.length - 1;
  }
  showPerson(currentState);
});

// login form

// const login = document.querySelector(".login");

// login.addEventListener("click", function () {
//   login.classList.toggle("login-container");
// });

// Fixed Navigation
const navbar = document.getElementById("nav");

window.addEventListener("scroll", function () {
  // console.log("sandeep");
  const scrollHeight = window.pageYOffset;
  // console.log(scrollHeight);
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
});

// Modal-login

const modalBtn = document.querySelector(".modal-login");
const modalBg = document.querySelector(".modal-bg");
const closeBtn = document.querySelector(".modal-close-btn");

modalBtn.addEventListener("click", () => {
  modalBg.style.visibility = "visible";
  modalBg.style.opacity = "1";
});

closeBtn.addEventListener("click", () => {
  modalBg.style.visibility = "hidden";
  modalBg.style.opacity = "0";
});
