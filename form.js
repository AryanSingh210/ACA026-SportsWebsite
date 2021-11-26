

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQJydhPMaU01wkEWE_ch1kJFfjBCtQHO0",
  authDomain: "ipl-result-e0fc6.firebaseapp.com",
  databaseURL: "https://ipl-result-e0fc6-default-rtdb.firebaseio.com",
  projectId: "ipl-result-e0fc6",
  storageBucket: "ipl-result-e0fc6.appspot.com",
  messagingSenderId: "652237180858",
  appId: "1:652237180858:web:e7aec30eabc120751bd783"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
  // first we will get ref from user input in database
  
  var UserInputRef = firebase.database().ref('UserInput')
  
  var form = document.querySelector('.iplresults')
  form.addEventListener('submit', (event)=>{
      event.preventDefault();
     var input = document.querySelector('.ipl-input').value;
    winningIpl(input);
     
  });

  function winningIpl(year){
    var centers;
    var ref = firebase.database().ref(year);
    ref.on('value', (data) => {
     centers = data.val();
     document.getElementById("results").innerHTML ="<br>"+centers.toUpperCase();
     document.getElementById("results").classList.add('view');
    })
}

  