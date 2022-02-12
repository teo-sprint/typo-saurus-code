export function showTypo() {
  const terminal = document.querySelector('.terminal');
  terminal.innerHTML =
    "<div class='typo'>" +
      "<p class='prompt'> ____ _  _ ____ _____</p>" +
      "<p class='prompt'>(_  _( \\/ (  _ (  _  )</p>" +
      "<p class='prompt'> )(  \\  / )___/)(_)(</p>" +
      "<p class='prompt'> (__) (__)(__) (_____)</p>" +
      "<p class='prompt'> ___   __   __  __ ____ __  __ ___     ___ _____ ____ ____</p>" +
      "<p class='prompt'>/ __) /__\\ (  )(  (  _ (  )(  / __)   / __(  _  (  _ ( ___)</p>" +
      "<p class='prompt'>\\__ \\/(__)\\ )(__)( )   /)(__)(\\__ \\  ( (__ )(_)( )(_) )__) </p>" +
      "<p class='prompt'>(___(__)(__(______(_)\\_(______(___/   \\___(_____(____(____)</p>" +
      "<p class='prompt'>                                                              </p>\
    </div>";

  const lines = document.querySelectorAll('.typo p');
  lines.forEach(function (line, index) {
    setTimeout(function () {
      line.classList.add('show');

      textEffect(line);
    }, index * 100);
  });
}
function textEffect(line) {
  const alpha = [';', '.', ',', ':', ';', '~', '`'];
  const animationSpeed = 10;
  let index = 0;
  const string = line.innerText;
  const splitString = string.split('');
  const copyString = splitString.slice(0);

  let emptyString = copyString.map(function (_el) {
    return [alpha[Math.floor(Math.random() * alpha.length)], index++];
  });

  emptyString = shuffle(emptyString);

  [...copyString].map(function (_el, i) {
    const newChar = emptyString[i];
    toUnderscore(copyString, line, newChar);

    setTimeout(function () {
      fromUnderscore(copyString, splitString, newChar, line);
    }, i * animationSpeed);
  });
}

function toUnderscore(copyString, line, newChar) {
  copyString[newChar[1]] = newChar[0];
  line.innerText = copyString.join('');
}

function fromUnderscore(copyString, splitString, newChar, line) {
  copyString[newChar[1]] = splitString[newChar[1]];
  line.innerText = copyString.join('');
}

function shuffle(o) {
  for (let j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
}
