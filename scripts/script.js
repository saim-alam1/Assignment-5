const todaysDate = new Date();
const formate = new Intl.DateTimeFormat('en-us', {
  dateStyle: 'full',
})
const output = (formate.format(todaysDate));

const outputDateId = getTheId('today-date');
outputDateId.innerText = output;


const buttons = ['box-one', 'box-two', 'box-three', 'box-four', 'box-five', 'box-six'];

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

      if (button === 'box-one' && button === 'box-two' && button === 'box-three' && button === 'box-four' && button === 'box-five' && button === 'box-six') {
        alert('congrates!!! You have completed all the current task');
      }

      p.innerText = `You have Complete The Task ${titleTextSix} at ${new Date().toLocaleTimeString()}`;
    }

    p.style.marginTop = '50px';
    p.style.color = '#00303C';
    p.style.backgroundColor = '#ebf8ff';
    p.style.padding = '15px';
    p.style.borderRadius = '16px';
    p.style.fontWeight = 'bold';

    container.appendChild(p);

    document.getElementById(button).disabled = true;
    document.getElementById(button).style.backgroundColor = 'gray';
  })
}

// Clearing Activity Log
document.getElementById('clear-btn').addEventListener('click', function () {
  const historyBox = getTheId('history-box');
  historyBox.innerHTML = '';
});