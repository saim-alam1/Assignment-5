document.getElementById('box-one').addEventListener('click', function () {
  const navNumber = toGetText('nav-number');
  const convertedNavNum = convertToNum(navNumber);

  const taskNumber = toGetText('tasks-number');

  const convertedTaskNum = convertToNum(taskNumber);

  const increaseConvertedNum = convertedNavNum + 1;
  const decreseCovertedTaskNum = convertedTaskNum - 1;

  alert('Board updated Successfully');

  changeText('nav-number', increaseConvertedNum);
  changeText('tasks-number', decreseCovertedTaskNum);

  document.getElementById('box-one').disabled = true;
  document.getElementById('box-one').style.backgroundColor = 'gray';
  document.getElementById('box-one').style.cursor = 'not-allowed';
})