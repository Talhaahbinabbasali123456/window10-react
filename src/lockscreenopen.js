function Lockopen() {
    [].map.call(document.querySelectorAll('.login-container'), function(el) {
        el.classList.toggle('d-none');
});
}
export default Lockopen;