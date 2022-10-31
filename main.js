toastr.options = {
  "closeButton": true,
  "newestOnTop": true,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "preventDuplicates": true,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}


$(document).ready(function()
{    
$("#sub").click(function(event)
{            
  
event.preventDefault();
var row = 1;
var name = document.myform1.namee.value;
  var mail = document.myform1.email.value;
  var mobile = document.myform1.num.value;
  var pass = document.myform1.password1.value;
  var passtwo = document.myform1.password2.value;
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
  // var msg1 = "Name";
  // var msg2 = "Mail";
  // var msg3 = "Mobile";
  // var msg4 = "Password";
  // var msg5 = "Confirm Password";


  if (name == "" || mail == "" || mobile == "" || pass == "" || passtwo == "" || !filter.test(mail) ||
    isNaN(mobile) || mobile.length <= 10 || pass.length <= 4 || !validRegex.test(pass) || pass != passtwo) {
    
      
      if (name == "" && mail == "" && mobile == "" && pass == "" && passtwo == ""){
        // document.getElementById('toast').innerHTML = toastr.error("Please Fill " + msg1+ ", " +msg2+ ", " +msg3+ ", " +msg4+ ", " +msg5+ " Field");
      document.getElementById('toast').innerHTML = toastr.error("Please Fill Name, Mail, Mobile, Password, and Confirm Password");
    }
    if (name == "") {
      document.getElementById('toast').innerHTML = toastr.error("Please Fill the Name Field");
      var msg1 = "Name"
    }
    if (name != "" &&  mail == "" && mobile == "" && pass == "" && passtwo == ""){
      document.getElementById('toast').innerHTML = toastr.error("Please Fill Mail, Mobile, Password, and Confirm Password");
    }
    if (mail == "") {
      document.getElementById('toast').innerHTML = toastr.error("Please Fill the Email Field");
      var msg2 = "Mail";
      // alert("Please Fill all the required fields");
    }
    if (mail != "" && mobile == "" && pass == "" && passtwo == ""){
      document.getElementById('toast').innerHTML = toastr.error("Please Fill Mobile, Password, and Confirm Password");
    }
    if (mobile == "") {
      document.getElementById('toast').innerHTML = toastr.error("Please Fill the mobile Field");
      var msg3 = "Mobile";
      // alert("Please Fill all the required fields");
    }
    if (mobile != "" && pass == "" && passtwo == ""){
      document.getElementById('toast').innerHTML = toastr.error("Please Fill Password, and Confirm Password");
    }
    if (pass == "") {
      document.getElementById('toast').innerHTML = toastr.error("Please Fill the Password Field");
      var msg4 = "Password";
      // alert("Please Fill all the required fields"); 
    }
    if (pass == "" && passtwo != ""){
      document.getElementById('toast').innerHTML = toastr.error("Please Fill Password first");
    }
    
    
    if (!filter.test(mail)) {
      // alert("Please enter valid mail id");
      document.getElementById('toast').innerHTML = toastr.error("Please enter valid mail id");
    }
    
    if (isNaN(mobile)) {
      document.getElementById('toast').innerHTML = toastr.error("Only Numeric Values allowed");
      // alert("Only Numeric Values allowed");
    }
    if (mobile.length < 10) {
      document.getElementById('toast').innerHTML = toastr.error("Mobile Number should be minimum 10 numbers");
      // alert("Mobile Number should be minimum 10 numbers");  
    }
    
    if (pass.length <= 4) {
      document.getElementById('toast').innerHTML = toastr.error("Your password must be maximum 4 characters");
      // alert("Your password must include atleast 4 characters");  
    }
    if (!validRegex.test(pass)) {
      document.getElementById('toast').innerHTML = toastr.error("Password must contain Uppercase, Lowercase, Numbers, Symbols");
      // alert("Password must contain Uppercase, Lowercase, Numbers, Symbols"); 
    }
    if (passtwo == "") {
      document.getElementById('toast').innerHTML = toastr.error("Please Fill the Confirm Password Field");
      var msg5 = "Confirm Password";
      // alert("Please Fill all the required fields"); 
    }
    if (pass != passtwo) {
      document.getElementById('toast').innerHTML = toastr.error("Does not match with your Password");
      // alert("Your password should be same");  
    }
  }
  else {
    
    toastr.success("Submitted Successfully");
    
    // alert("Successfully signed up");  
  } 
  // var tex = 0;
  var display = document.getElementById("table1");
  var newRow= display.insertRow (row);
  var cell0 = newRow. insertCell(0);
  var cell1 = newRow. insertCell(1);
  var cell2 = newRow.insertCell (2);
  var cell3 = newRow. insertCell (3);
  // tex = tex + 1;
  
  // cell0.innerHTML = tex;
  cell1.innerHTML = name;
  cell2.innerHTML = mail;
  cell3.innerHTML = ("+91-" +mobile);
  row++;
  // tex++;
  // document.getElementById('hello').innerHTML = cell1;
  document.getElementById('myform1').reset();


});

});




var table = $(document).ready(function () {
  $('#table1').DataTable({
    dom: '<"pull-left"l><"pull-right"f>tip',
    oLanguage : {"sZeroRecords": "", "sEmptyTable": ""},
    infoCallback: function (settings, start, end, max, total, pre) {
      var api = this.api();
      var pageInfo = api.page.info();

      return 'Page ' + (pageInfo.page + 1) + ' of ' + pageInfo.pages;
    }
    
  });
});
 
