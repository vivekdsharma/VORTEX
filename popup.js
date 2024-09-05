const rulebook = document.getElementById('rulebook');

function togglePopup(phase) {
    const popup = document.getElementById(`popup-${phase}`);
    popup.classList.toggle("active");

    // Update the inner text of the rulebook with the popup's content
    
}

function showrulebook(phase){
  const popup = document.getElementById(`rulebook-${phase}`);
  rulebook.innerText = popup.innerText;
}

