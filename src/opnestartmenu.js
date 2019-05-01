

function Openstartmenu() {
        [].map.call(document.querySelectorAll('.startup-container'), function(el) {
            el.classList.toggle('d-flex');
    });
}
export default Openstartmenu;