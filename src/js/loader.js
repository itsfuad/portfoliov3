
const load_home = () => {
  document.getElementsByTagName("header")[0].classList.add("loaded");
    agent();
}

const load = () => {
    document.getElementById("load").classList.toggle("done");
    load_home();
}
