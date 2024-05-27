function handleClickINU() {
    fetch('http://localhost:3001/web')
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('handleClickINU', JSON.stringify(data));
            printData();
        })
        .catch(err => console.log(err));
}

function printData() {
    const showData = document.getElementById('showData');
    const storageData = localStorage.getItem('handleClickINU');
    
    if (!storageData) {
        showData.innerHTML = 'There is no data';
    } else {
        const data = JSON.parse(storageData);
        showData.innerHTML = JSON.stringify(data, null, 2);
    }
}

document.addEventListener('DOMContentLoaded', printData);
