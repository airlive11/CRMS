//JS for SHOW PASSWORD

function myFunction() {
    var x = document.getElementById("txtPassword");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
   }
   
   //JS for Login Auth
     // Your web app's Firebase configuration
     var firebaseConfig = {
       apiKey: "AIzaSyCnbcOpPwZDdKvlSz-cVFfXAME-VIjaVV8",
       authDomain: "test-622c0.firebaseapp.com",
       databaseURL: "https://test-622c0.firebaseio.com",
       projectId: "test-622c0",
       storageBucket: "test-622c0.appspot.com",
       messagingSenderId: "81335831834",
       appId: "1:81335831834:web:816865eafc5607b19970a3"
     };
     // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
   
   
     //on auth state change
     firebase.auth().onAuthStateChanged(function(user) {
       if (user) 
       {
         // User is signed in.
         document.getElementById("user_div").style.display = "block";
         document.getElementById("login_div").style.display = "none";
         document.getElementById("btnLogout").style.display = "block";
         document.getElementById("loginbtn").style.display = "none";
       } 
       else 
       {
         // No user is signed in.
         document.getElementById("user_div").style.display = "none";
         document.getElementById("login_div").style.display = "block";
         document.getElementById("btnLogout").style.display = "none";
         document.getElementById("loginbtn").style.display = "block";
       }
     });
   
     //for login 
     function login()
     {
       var txtEmail = document.getElementById("txtEmail").value;
       var txtPass = document.getElementById("txtPassword").value;
   
       firebase.auth().signInWithEmailAndPassword(txtEmail, txtPass).catch(function(error) {
         // Handle Errors here.
         var errorCode = error.code;
         var errorMessage = error.message;
         window.alert(errorMessage);
         // ...
       });
     }
     
     //for logout
     function logout(){
       firebase.auth().signOut();
       location.reload(); 
     }
   
     //for add records authorisation
     function loginauth1()
       {
         var user = firebase.auth().currentUser;
         if (user)
         {
           location.replace("add.html");
         }
         else
         {
           window.alert("Login to Add in Criminal Record");
         }
       }
   //JS for LoginAuth Ends
   
   
   
   //search for table
       function searchTable() {
         var input, filter, table, tr, th, i, txtValue;
         input = document.getElementById("myInput");
         filter = input.value.toUpperCase();
         table = document.getElementById("myTable");
         tr = table.getElementsByTagName("tr");
         for (i = 0; i < tr.length; i++) {
           th = tr[i].getElementsByTagName("th")[0];
           if (th) {
             txtValue = th.textContent || th.innerText;
             if (txtValue.toUpperCase().indexOf(filter) > -1) {
               tr[i].style.display = "";
             } else {
               tr[i].style.display = "none";
             }
           }       
         }
       }