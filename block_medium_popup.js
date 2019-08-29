var annoyingPopup = Array.from(document.querySelectorAll('h2')).find(x => x.innerText === "Get one more story in your member preview when you sign up. It’s free.");
if(annoyingPopup){
annoyingPopup.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
}
