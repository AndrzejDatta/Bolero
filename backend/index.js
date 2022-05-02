const editJsonFile = require("edit-json-file");

const tasteInputValue = document.querySelector("input.taste").value;
const AniaInputValue = document.querySelector("input.Ania").value;
const AndrzejInputValue = document.querySelector("input.Andrzej").value;
const submitButton = document.querySelector("button.submit");

submitButton.addEventListener("click", () => {
  file.append("elements", {
    Taste: `${tasteInputValue}`,
    Ania: `${AniaInputValue}`,
    Andrzej: `${AndrzejInputValue}`,
  });
});

let file = editJsonFile(`${__dirname}/marks.json`);
file.append("elements", { Taste: "peach", Ania: "3", Andrzej: "4" });
file.append("elements", {
  Taste: `${tasteInputValue}`,
  Ania: `${AniaInputValue}`,
  Andrzej: `${AndrzejInputValue}`,
});

file.append("elements", {
  Taste: "asd",
  Ania: "4",
  Andrzej: "2",
});
file.save();
file = editJsonFile(`${__dirname}/filename.json`, {
  autosave: true,
});

const request = async () => {
  const response = await fetch("./marks.json");
  const json = await response.json();
  const data = json.elements;
  console.log(data);
  handleElements(data);
};

request();

const handleElements = (data) => {
  const main = document.querySelector(".main");

  data.map((element, index) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    wrapper.setAttribute("id", index);
    main.appendChild(wrapper);

    const taste = document.createElement("div");
    taste.classList.add("taste");
    taste.setAttribute("id", index);
    taste.innerHTML = "Smak: " + element.Taste;
    wrapper.appendChild(taste);

    const Ania = document.createElement("div");
    Ania.classList.add("Ania");
    Ania.setAttribute("id", index);
    Ania.innerHTML = "Ocena Ania: " + element.Ania;
    wrapper.appendChild(Ania);

    const Andrzej = document.createElement("div");
    Andrzej.classList.add("Andrzej");
    Andrzej.setAttribute("id", index);
    Andrzej.innerHTML = "Ocena Andrzej: " + element.Andrzej;
    wrapper.appendChild(Andrzej);
  });
};
