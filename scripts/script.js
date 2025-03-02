// Card - 1 Button
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
})

// Card - 2 Button
document.getElementById('box-two').addEventListener('click', function () {
  const navNumber = toGetText('nav-number');
  const convertedNavNum = convertToNum(navNumber);

  const taskNumber = toGetText('tasks-number');

  const convertedTaskNum = convertToNum(taskNumber);

  const increaseConvertedNum = convertedNavNum + 1;
  const decreseCovertedTaskNum = convertedTaskNum - 1;

  alert('Board updated Successfully');

  changeText('nav-number', increaseConvertedNum);
  changeText('tasks-number', decreseCovertedTaskNum);

  const titleText = toGetText('box-two-title');

  const container = getTheId('history-box');

  const p = document.createElement('p');
  p.innerText = `You have Complete The Task ${titleText} at ${new Date().toLocaleTimeString()}`;
  p.style.marginTop = '15px';
  p.style.color = '#00303C';
  p.style.backgroundColor = '#ebf8ff';
  p.style.padding = '15px';
  p.style.borderRadius = '16px';
  p.style.fontWeight = 'bold';

  container.appendChild(p);

  document.getElementById('box-two').disabled = true;
  document.getElementById('box-two').style.backgroundColor = 'gray';
})

// Card - 3 Button
document.getElementById('box-three').addEventListener('click', function () {
  const navNumber = toGetText('nav-number');
  const convertedNavNum = convertToNum(navNumber);

  const taskNumber = toGetText('tasks-number');

  const convertedTaskNum = convertToNum(taskNumber);

  const increaseConvertedNum = convertedNavNum + 1;
  const decreseCovertedTaskNum = convertedTaskNum - 1;

  alert('Board updated Successfully');

  changeText('nav-number', increaseConvertedNum);
  changeText('tasks-number', decreseCovertedTaskNum);

  const titleText = toGetText('box-three-title');

  const container = getTheId('history-box');

  const p = document.createElement('p');
  p.innerText = `You have Complete The Task ${titleText} at ${new Date().toLocaleTimeString()}`;
  p.style.marginTop = '15px';
  p.style.color = '#00303C';
  p.style.backgroundColor = '#ebf8ff';
  p.style.padding = '15px';
  p.style.borderRadius = '16px';
  p.style.fontWeight = 'bold';

  container.appendChild(p);

  document.getElementById('box-three').disabled = true;
  document.getElementById('box-three').style.backgroundColor = 'gray';
})

// Card - 4 Button
document.getElementById('box-four').addEventListener('click', function () {
  const navNumber = toGetText('nav-number');
  const convertedNavNum = convertToNum(navNumber);

  const taskNumber = toGetText('tasks-number');

  const convertedTaskNum = convertToNum(taskNumber);

  const increaseConvertedNum = convertedNavNum + 1;
  const decreseCovertedTaskNum = convertedTaskNum - 1;

  alert('Board updated Successfully');

  changeText('nav-number', increaseConvertedNum);
  changeText('tasks-number', decreseCovertedTaskNum);

  const titleText = toGetText('box-four-title');

  const container = getTheId('history-box');

  const p = document.createElement('p');
  p.innerText = `You have Complete The Task ${titleText} at ${new Date().toLocaleTimeString()}`;
  p.style.marginTop = '15px';
  p.style.color = '#00303C';
  p.style.backgroundColor = '#ebf8ff';
  p.style.padding = '15px';
  p.style.borderRadius = '16px';
  p.style.fontWeight = 'bold';

  container.appendChild(p);

  document.getElementById('box-four').disabled = true;
  document.getElementById('box-four').style.backgroundColor = 'gray';
})

// Card - 5 Button
document.getElementById('box-five').addEventListener('click', function () {
  const navNumber = toGetText('nav-number');
  const convertedNavNum = convertToNum(navNumber);

  const taskNumber = toGetText('tasks-number');

  const convertedTaskNum = convertToNum(taskNumber);

  const increaseConvertedNum = convertedNavNum + 1;
  const decreseCovertedTaskNum = convertedTaskNum - 1;

  alert('Board updated Successfully');

  changeText('nav-number', increaseConvertedNum);
  changeText('tasks-number', decreseCovertedTaskNum);

  const titleText = toGetText('box-five-title');

  const container = getTheId('history-box');

  const p = document.createElement('p');
  p.innerText = `You have Complete The Task ${titleText} at ${new Date().toLocaleTimeString()}`;
  p.style.marginTop = '15px';
  p.style.color = '#00303C';
  p.style.backgroundColor = '#ebf8ff';
  p.style.padding = '15px';
  p.style.borderRadius = '16px';
  p.style.fontWeight = 'bold';

  container.appendChild(p);

  document.getElementById('box-five').disabled = true;
  document.getElementById('box-five').style.backgroundColor = 'gray';
})

// Card - 6 Button
document.getElementById('box-six').addEventListener('click', function () {
  const navNumber = toGetText('nav-number');
  const convertedNavNum = convertToNum(navNumber);

  const taskNumber = toGetText('tasks-number');

  const convertedTaskNum = convertToNum(taskNumber);

  const increaseConvertedNum = convertedNavNum + 1;
  const decreseCovertedTaskNum = convertedTaskNum - 1;

  alert('Board updated Successfully');

  changeText('nav-number', increaseConvertedNum);
  changeText('tasks-number', decreseCovertedTaskNum);

  const titleText = toGetText('box-six-title');

  const container = getTheId('history-box');

  const p = document.createElement('p');
  p.innerText = `You have Complete The Task ${titleText} at ${new Date().toLocaleTimeString()}`;
  p.style.marginTop = '15px';
  p.style.color = '#00303C';
  p.style.backgroundColor = '#ebf8ff';
  p.style.padding = '15px';
  p.style.borderRadius = '16px';
  p.style.fontWeight = 'bold';

  container.appendChild(p);

  document.getElementById('box-six').disabled = true;
  document.getElementById('box-six').style.backgroundColor = 'gray';
})

// Clearing Activity Log
document.getElementById('clear-btn').addEventListener('click', function () {
  const historyBox = getTheId('history-box');
  historyBox.innerHTML = '';
});