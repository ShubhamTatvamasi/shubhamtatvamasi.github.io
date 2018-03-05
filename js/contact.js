  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCKTVAkoT2ywll8LnRLW8jxmbx8VZ0bwgU",
    authDomain: "shubhamtatvamasi-4e00d.firebaseapp.com",
    databaseURL: "https://shubhamtatvamasi-4e00d.firebaseio.com",
    projectId: "shubhamtatvamasi-4e00d",
    storageBucket: "shubhamtatvamasi-4e00d.appspot.com",
    messagingSenderId: "755870484362"
  };
  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var subject = getInputVal('subject');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, subject, message);

  // Show alert
  document.querySelector('.w-form-done').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.w-form-done').style.display = 'none';
  },5000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, subject, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    subject:subject,
    message:message
  });
}