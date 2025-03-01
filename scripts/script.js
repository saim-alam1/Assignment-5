document.getElementById('box-one').addEventListener('click', function () {
  const navNumber = toGetText('nav-number');
  const convertedNavNum = convertToNum(navNumber);

  const taskNumber = toGetText('tasks-number');

  const convertedTaskNum = convertToNum(taskNumber);

  const increaseConvertedNum = convertedNavNum + 1;
  const decreseCovertedTaskNum = convertedTaskNum - 1;

  // alert('Board updated Successfully');

  changeText('nav-number', increaseConvertedNum);
  changeText('tasks-number', decreseCovertedTaskNum);

  const titleText = toGetText('box-one-title');

  const container = getTheId('history-box');

  const p = document.createElement('p');
  p.innerText = `You have Complete The Task ${titleText} at ${new Date().toLocaleTimeString()}`;
  p.style.marginTop = '50px';
  p.style.color = '#00303C';
  p.style.backgroundColor = '#ebf8ff';
  p.style.padding = '15px';
  p.style.borderRadius = '16px';
  p.style.fontWeight = 'bold';

  container.appendChild(p);

  document.getElementById('box-one').disabled = true;
  document.getElementById('box-one').style.backgroundColor = 'gray';
  document.getElementById('box-one').style.cursor = 'not-allowed';
})