let modal = document.getElementById("myModal"),
    btn = document.getElementById("openModalBtn"),
    closeBtn = document.getElementById("close");

btn.onclick = () => modal.style.display = "block";
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = event => {
    if (event.target == modal) modal.style.display = "none";
};