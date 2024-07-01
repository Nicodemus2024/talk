function speak() {

    var demo =document.getElementById('demo').value;
    // Create a SpeechSynthesisUtterance
    const utterance = new SpeechSynthesisUtterance(demo);
   
    // Select a voice
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices[0]; // Choose a specific voice
  
    // Speak the text
    speechSynthesis.speak(utterance);
  }