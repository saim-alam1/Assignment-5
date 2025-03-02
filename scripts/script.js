// Added Date
const date = new Date();
const options = {
  weekday: 'short',
  month: 'short',
  day: 'numeric',
  year: 'numeric',
}
const updatedDate = date.toLocaleString('en-us', options);
const outputDateId = getTheId('today-date');
outputDateId.innerText = updatedDate;

// Discover Card
document.getElementById('discover-btn').addEventListener('click', function () {
  window.location.href = './discover.html';
})

// Card Button Functions
const buttons = ['box-one', 'box-two', 'box-three', 'box-four', 'box-five', 'box-six'];

let buttonClick = 0;

for (const button of buttons) {
  document.getElementById(button).addEventListener('click', function () {
    const navNumber = toGetText('nav-number');
    const convertedNavNum = convertToNum(navNumber);

    const taskNumber = toGetText('tasks-number');

    const convertedTaskNum = convertToNum(taskNumber);

    const increaseConvertedNum = convertedNavNum + 1;
    const decreseCovertedTaskNum = convertedTaskNum - 1;

    alert('Board updated Successfully');

    changeText('nav-number', increaseConvertedNum);
    changeText('tasks-number', decreseCovertedTaskNum);

    // Title Texts
    const titleTextOne = toGetText('box-one-title');
    const titleTextTwo = toGetText('box-two-title');
    const titleTextThree = toGetText('box-three-title');
    const titleTextFour = toGetText('box-four-title');
    const titleTextFive = toGetText('box-five-title');
    const titleTextSix = toGetText('box-six-title');

    const container = getTheId('history-box');

    const p = document.createElement('p');
    // p.innerText = `You have Complete The Task ${titleText} at ${new Date().toLocaleTimeString()}`; // Here to work

    if (button === 'box-one') {
      p.innerText = `You have Complete The Task ${titleTextOne} at ${new Date().toLocaleTimeString()}`;
    } else if (button === 'box-two') {
      p.innerText = `You have Complete The Task ${titleTextTwo} at ${new Date().toLocaleTimeString()}`;
    } else if (button === 'box-three') {
      p.innerText = `You have Complete The Task ${titleTextThree} at ${new Date().toLocaleTimeString()}`;
    } else if (button === 'box-four') {
      p.innerText = `You have Complete The Task ${titleTextFour} at ${new Date().toLocaleTimeString()}`;
    } else if (button === 'box-five') {
      p.innerText = `You have Complete The Task ${titleTextFive} at ${new Date().toLocaleTimeString()}`;
    } else if (button === 'box-six') {
      p.innerText = `You have Complete The Task ${titleTextSix} at ${new Date().toLocaleTimeString()}`;
    }

    p.style.marginTop = '25px';
    p.style.color = '#00303C';
    p.style.backgroundColor = '#ebf8ff';
    p.style.padding = '15px';
    p.style.borderRadius = '16px';
    p.style.fontWeight = 'bold';

    container.appendChild(p);



    document.getElementById(button).disabled = true;
    document.getElementById(button).style.backgroundColor = 'gray';

    buttonClick++;

    if (buttonClick === buttons.length) {
      alert('congrates!!! You have completed all the current task');
    }
  })
}

// Clearing Activity Log
document.getElementById('clear-btn').addEventListener('click', function () {
  const historyBox = getTheId('history-box');
  historyBox.innerHTML = '';
});