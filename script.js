let users = [
  {
    name: "Furqan",
    pic: "https://i.pinimg.com/1200x/8d/b6/fe/8db6fe0b07a79dbaf18feff57d077001.jpg",
    bio: "Professional corporate portrait of a Northern European male professional in their 34s.",
  },

  {
    name: "Safeer",
    pic: "https://i.pinimg.com/736x/e9/c5/1a/e9c51a0a6819c3b0032b44c46fd199b0.jpg",
    bio: "Senior UI/UX designer known for creating elegant, human-centered digital experiences.",
  },

  {
    name: "M. Adil",
    pic: "https://i.pinimg.com/736x/db/c5/82/dbc582cb4a5ef9df9fc7e82e283947b2.jpg",
    bio: "Creative marketing strategist focused on brand storytelling and audience engagement.",
  },

  {
    name: "Shehriyar",
    pic: "https://i.pinimg.com/736x/be/e7/69/bee769c3a95ce2ebd76a398d2f7e3c82.jpg",
    bio: "Tech entrepreneur passionate about product innovation and scalable business models.",
  },

  {
    name: "Muhammad Ali",
    pic: "https://i.pinimg.com/736x/61/31/4d/61314d055f92ca874a0f1b50d517ee28.jpg",
    bio: "Lifestyle content creator with expertise in photography, aesthetics, and digital branding.",
  },

  {
    name: "Nasir Hussain",
    pic: "https://i.pinimg.com/736x/3c/2b/ad/3c2badd0b9688bcb810ef699afc3f7c1.jpg",
    bio: "Digital illustrator with a passion for cinematic compositions and expressive visual art.",
  },
];

function showUser(arr) {
  arr.forEach(function (user) {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.className = "bg-img";
    img.src = user.pic;

    const blurredLayer = document.createElement("div");
    blurredLayer.style.backgroundImage = `url(${user.pic})`;
    blurredLayer.className = "blurred-layer";

    const content = document.createElement("div");
    content.className = "content";

    const name = document.createElement("h3");
    name.textContent = user.name;

    const bio = document.createElement("p");
    bio.textContent = user.bio;

    content.appendChild(name);
    content.appendChild(bio);

    card.appendChild(img);
    card.appendChild(blurredLayer);
    card.appendChild(content);

    let show = document.querySelector(".cards");
    show.append(card);
  });
}
showUser(users);

let show = document.querySelector(".cards");
let inp = document.querySelector("#inp");
inp.addEventListener("input", function () {
  let newUser = users.filter(function (user) {
    return user.name.toLowerCase().startsWith(inp.value.toLowerCase());
  });

  show.innerHTML = "*";
  showUser(newUser);
});
