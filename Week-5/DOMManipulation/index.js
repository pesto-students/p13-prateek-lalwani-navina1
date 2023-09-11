window.addEventListener("load", () => {
  const hElements = document.getElementsByTagName("h1");

  for (const h of hElements) {
    h.innerHTML = "haiiiiiiiiii";
  }
  const list = document.getElementsByTagName("ul")[0];
  const newChild = document.createElement("li");
  newChild.innerText = "new element";
    list.appendChild(newChild);
    let exsistingli=document.querySelector("li")
    let newli = document.createElement("li");
    newli.innerText="newwwwwwwwwwwwwww"
    list.replaceChild(newli, exsistingli);

    const helement = document.getElementsByTagName("h1")[0];
    helement.style.background = "red";
    helement.addEventListener("click", () => {
        helement.style.background = "blue";
    })
});
