// Store the data in local storage
// Store the data in local storage
function storeData() {
  localStorage.setItem('box1', document.getElementById('box1').innerHTML);
  localStorage.setItem('box2', document.getElementById('box2').innerHTML);
  localStorage.setItem('box3', document.getElementById('box3').innerHTML);
  localStorage.setItem('box4', document.getElementById('box4').innerHTML);
  localStorage.setItem('box5', document.getElementById('box5').innerHTML);
  localStorage.setItem('box6', document.getElementById('box6').innerHTML);
  localStorage.setItem('box7', document.getElementById('box7').innerHTML);
  localStorage.setItem('box8', document.getElementById('box8').innerHTML);
}

// Load the data from local storage
function loadData() {
  document.getElementById('box1').innerHTML = localStorage.getItem('box1');
  document.getElementById('box2').innerHTML = localStorage.getItem('box2');
  document.getElementById('box3').innerHTML = localStorage.getItem('box3');
  document.getElementById('box4').innerHTML = localStorage.getItem('box4');
  document.getElementById('box5').innerHTML = localStorage.getItem('box5');
  document.getElementById('box6').innerHTML = localStorage.getItem('box6');
  document.getElementById('box7').innerHTML = localStorage.getItem('box7');
  document.getElementById('box8').innerHTML = localStorage.getItem('box8');
}

// Rest of the code remains the same...


// Clear the data in local storage and boxes
function clearData() {
  localStorage.clear();

  var boxes = document.getElementsByClassName('box');
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = '';
  }
}

// Load data when the page is loaded
window.onload = function () {
  loadData();
};

// Save data when the page is unloaded
window.onbeforeunload = storeData;

// Check for ad blocker presence
var adBlockerDetected = false;

function checkAdBlocker() {
  var adContainer = document.createElement('div');
  adContainer.innerHTML = '&nbsp;';
  adContainer.className = 'ad';

  document.body.appendChild(adContainer);

  // If the ad container gets hidden, it indicates the presence of an ad blocker
  if (adContainer.offsetHeight === 0) {
    adBlockerDetected = true;
  }

  document.body.removeChild(adContainer);
}

setInterval(function () {
  if (!adBlockerDetected) {
    checkAdBlocker();
  }
}, 1000);

function copyToClipboard(boxId) {
  var box = document.getElementById("box" + boxId);
  var range = document.createRange();
  range.selectNodeContents(box);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
}

function eraseAllBoxes() {
  var boxes = document.getElementsByClassName('box');
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].textContent = '';
  }
}

function copyToClipboard(boxNumber) {
  var box = document.getElementById("box" + boxNumber);
  var text = box.textContent || box.innerText;
  if (text) {
    navigator.clipboard.writeText(text)
      .then(function() {
        console.log("Text copied to clipboard");
      })
      .catch(function(error) {
        console.error("Unable to copy text: ", error);
      });
  }
}
