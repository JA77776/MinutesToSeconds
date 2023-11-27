function convertMinutesToSeconds() {

    // This is to get the value from the input 
    let minutes = document.getElementById('minutes').value;
  
    // The Input and if no number is given then alert message,...
    if (isNaN (minutes) || minutes === "") {
      alert("Enter a number for the minutes.");
      return;
    }
  
    // Converting the minutes to seconds
    let seconds = minutes * 60;
  
    // The result to be displayed
    document.getElementById('result').innerText = `${minutes} minutes is equal to ${seconds} seconds.`;
  }
  