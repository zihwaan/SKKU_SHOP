

const firebaseConfig = {
  apiKey: "AIzaSyA_3eilGBk8lKu_t7v20cpGswrGkK1aqp4",
  authDomain: "skku-shop.firebaseapp.com",
  projectId: "skku-shop",
  storageBucket: "skku-shop.appspot.com",
  messagingSenderId: "30939389629",
  appId: "1:30939389629:web:7b1319dae4587791a861d4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let database = firebase.firestore();

//Return current time
function get_date() {
  let date = new Date();
  let year = date.getFullYear().toString();
  let month = (date.getMonth() + 1).toString();
  let day = date.getDate().toString();
  let hour = date.getHours().toString();
  let min = date.getMinutes().toString();
  let date_data = year + "/" + month + "/" + day + " " + hour + ":" + min;
  return date_data;
}

const buy_items = () => {
  var user_name = prompt('Enter your name.', 'Your Name');
	alert(user_name+', You successfully bought your items!');

  var item_list = JSON.parse(localStorage.getItem("item") || "[]");

  database
  .collection('Buy_items')   
  .doc(user_name)
  .set(
    {     
      time: get_date(),
      name: user_name,
      itemList: item_list,
    },
    { merge: true }
  )
  .then(function () {
    alert('You successfully bought them!');
    localStorage.clear();
    window.location.reload();
  });
}

const check_buy = async () => {
  var user_name = prompt('Enter your name.', 'Your Name');
  alert(user_name+", Checking your puchased items...");

  database
  .collection('Buy_items')   
  .doc(user_name)
  .get()
  .then((result) => {
    var purchased_time = result.data().time;
    var itemList = result.data().itemList;
    console.log("구매시각 : "+purchased_time);
    const i = document.getElementById('buy_list');
    i.innerHTML += '<p>Your name : '+user_name + '<br><br></p>';
    i.innerHTML += '<p>The time of purchase : '+purchased_time + '<br><br></p>';
    i.innerHTML += '<p>Purchased Item List : ' + '<br></p>';
    for(let element of itemList){
        const i = document.getElementById('buy_list');
        console.log(element);
        i.innerHTML += '<p>'+element + '<br></p>';
    }
  });
  
}

const join_event = () => {

  const email = document.getElementById('EMAIL').value;

  database
  .collection('Event_email')   
  .doc(email)
  .set(
    {     
      User_email: email,
    },
    { merge: true }
  )
  .then(function () {
    alert('You successfully joined Event!');
  });
}
