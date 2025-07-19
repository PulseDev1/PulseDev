const services = [
  {
    title: "Roblox Builds",
    icon: "https://cdn-icons-png.flaticon.com/128/19006/19006716.png",
    desc: "High quality maps & environments."
  },
  {
    title: "Scripts & GUIs",
    icon: "https://cdn-icons-png.flaticon.com/128/14672/14672124.png",
    desc: "Efficient Roblox scripts with custom UIs."
  },
  {
    title: "Discord Bots",
    icon: "https://cdn-icons-png.flaticon.com/128/10506/10506960.png",
    desc: "Powerful bots for moderation and automation."
  },
  {
    title: "Server Templates",
    icon: "https://cdn-icons-png.flaticon.com/128/19005/19005177.png",
    desc: "Pre-made role & channel structures."
  }
];

const grid = document.querySelector(".service-grid");

services.forEach(service => {
  const div = document.createElement("div");
  div.className = "service";
  div.innerHTML = `
    <img src="${service.icon}" alt="${service.title}">
    <h3>${service.title}</h3>
    <p>${service.desc}</p>
  `;
  grid.appendChild(div);
});
