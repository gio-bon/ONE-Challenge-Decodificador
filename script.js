// ao carregar dá o foco no txtarea para começar a digitar
document.addEventListener("DOMContentLoaded", function() {
    var textarea = document.getElementById("entrada-txt");
    textarea.focus();
    textarea.setSelectionRange(textarea.value.length, textarea.value.length);
});