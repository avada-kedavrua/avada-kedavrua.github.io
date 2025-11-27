document.addEventListener('DOMContentLoaded', () => {
    let name = localStorage.getItem("name") || promptForName();
    localStorage.setItem('name', name);
    document.querySelector('h1').textContent = `你好呀！${name}`;
});

function promptForName() {
    let name;
    while (!(name = window.prompt("你是谁呀？")?.trim())) {
    }
    return name;
}