
function addingEventListener() {
    const input = document.getElementById('button');

    function clickAlert() {
    alert('click me');
    }

    input.addEventListener('click', clickAlert); 
}
