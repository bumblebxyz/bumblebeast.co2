let dropArea = document.getElementById('drop-area');

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false)
});
  
function preventDefaults (e) {
    e.preventDefault( )
    e.stopPropagation()
};

['dragenter', 'dragover'].forEach(eventName => {
dropArea.addEventListener(eventName, highlight, false)
});

['dragleave', 'drop'].forEach(eventName => {
dropArea.addEventListener(eventName, unhighlight, false)
});

function highlight(e) {
dropArea.classList.add('highlight')
};

function unhighlight(e) {
dropArea.classList.remove('highlight')
};

$('.drop-area').click(function() {
    $('#uploadfile').click();
    return false;
}) 



