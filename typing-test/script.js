const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p");
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
const accuracyText = document.querySelector("#accuracy-info p span");
const errorText = document.querySelectorAll("#accuracy-info p").item(1);
const chapterSelection = document.querySelector("#chapter");

const typingCourse = [
    "Touch typing is the ability to use muscle memory to find keys fast, without using the sense of sight, and with all the available fingers, just like piano players do. It significantly improves typing speed and eliminates errors. Touch typing simply makes you more productive and it is a skill worth learning. However, many people engage in the bad habit of ‘hunt-and-peck’ typing, even those seasoned professionals with years and decades of computer experience. It  is easy to understand, though, as touch typing requires dedicated practice to  learn it well",
    "A government policy advisory group has called for compulsory quotas to make company leadership a fairer reflection of society. The SER on Friday published its call for “firm rules” and a new approach to improve diversity to make it “the new normal” to have as many women as men in top roles, as well as plenty of people with a non-Western background. It proposed that the top 100 Dutch listed companies should be forced to make 30% of positions on their supervisory boards available for female candidates at risk of German-style sanctions, sacking other board members. Mariëtte Hamer, chairperson of the SER, told the NOS broadcaster that a 2013 law asking companies to ‘strive’ for a fairer reflection of society has not been successful. ‘It has had no discernible effect, the number of women is static and cultural diversity isn’t growing at all so something really needs to change,’ she said.",
    "Prime minister Mark Rutte has made few concessions to opposition parties during two days of debate on the government’s 2020 spending plans and dismissed calls for more money for education and the police. In addition, the prime minister said he is reluctant to use corporation tax cuts as a lever to encourage industry to put up wages – a threat he had made earlier this year. All parties were unanimous during the debate that industry should put up wages by 5% to reflect economic growth and the increase in dividend payments to shareholders. The two days of debate were overshadowed by the murder of lawyer Derk Wiersum, which Rutte described as an ‘attack on the rule of law’. But he refused to increase spending on the police, as demanded by opposition parties, and argued that more money had already been allocated to boosting the size of the police force and tackling organised crime. In addition, the cabinet has no more cash available for education, Rutte said. Talks on a new pay deal for teachers stalled in June and a new lump sum would only be on the table if agreement on salaries is reached, Rutte said. The government did agree to spend an additional structural €26m on specialist centres for youngsters with multiple problems, such as autism, addiction or self-harm."
];

var timer = [0, 0, 0, 0];
var interval;
var timerRunning = false;
var errorCount = 0;
// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;
    timer[0] = Math.floor((timer[3] / 100) / 60);
    timer[1] = Math.floor((timer[3] / 100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

// Match the text entered with the provided text on the page:

function spellCheck() {
    let textEntered = testArea.value;
    let originTextMatch = originText.innerHTML.substring(0, textEntered.length);
    if (textEntered == originText.innerHTML) {
        clearInterval(interval);
        timerRunning = false;
        testWrapper.style.borderColor = "#429890";
    } else {
        if (textEntered == originTextMatch)
            testWrapper.style.borderColor = "#65CCf3";
        else {
            errorCount++;
            testWrapper.style.borderColor = "#E95D0F";
            errorText.innerHTML = "Errors : <span>" + errorCount + "</span>";
        }
    }
    console.log(textEntered);
    console.log("Errors: ", errorCount);

}
// Start the timer:
function start() {
    let textEnteredLength = testArea.value.length;
    if (textEnteredLength === 0 && !timerRunning) {
        timerRunning = true;
        interval = setInterval(runTimer, 10);
    }
    console.log(textEnteredLength);
}

// Reset everything:
function reset() {
    clearInterval(interval);
    interval = null;
    timer = [0, 0, 0, 0]
    timerRunning = false;
    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
    testWrapper.style.borderColor = "grey";
    accuracyText.innerHTML = "0";
    errorText.innerHTML = "Errors : <span>" + 0 + "</span>";
}
//Words per minute
function wordsPerMin() {
    let wordsCount = testArea.value.split(" ").length;
    return wordsCount / timer[0];

}
// Strokes per second
function strokesPerSec() {
    if (timer[1] <= 0) {
        accuracyText.innerHTML = "0";
    } else {
        let strokesPerSecValue = Math.floor(testArea.value.length / (timer[3] / 100));
        accuracyText.innerHTML = strokesPerSecValue;
    }

}

//Selecting the chapter for typing
function selectChapter() {
    let selectedChapter = chapterSelection.options[chapterSelection.selectedIndex].text;
    if (selectedChapter === "Basic")
        originText.innerHTML = typingCourse[0];
    else if (selectedChapter === "Intermediate")
        originText.innerHTML = typingCourse[1];
    else if (selectedChapter === "Expert")
        originText.innerHTML = typingCourse[2];
    else
        originText.innerHTML = "Please select any chapter";
    console.log("Chapter changed");
}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
testArea.addEventListener("keypress", strokesPerSec, false);
resetButton.addEventListener("click", reset, false);
chapterSelection.addEventListener("change", selectChapter, false);

//TODOs

// Array of different text
// Highscore board