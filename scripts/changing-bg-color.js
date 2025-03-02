const colors = ['#e67e22', '#34495e', '#eb3b5a', '#c7ecee'];


document.getElementById('change-bg').addEventListener('click', function () {
  const pageBody = getTheId('page-body');
  const colorSelection = Math.round(Math.random() * colors.length);
  pageBody.style.backgroundColor = colors[colorSelection];
})