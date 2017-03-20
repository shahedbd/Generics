// JavaScript Document

$(document).ready(function() {
    
	
    $("input.search").focus(function() {
	
	
	var default_value = $(this).attr('fname');

        if(this.value == default_value) {
            this.value = '';
		
        }
    });

    $("input.search").blur(function() {
	
		var default_value = $(this).attr('fname');
        if(this.value == '') {
            this.value = default_value;
	
        }
    });
	
	
	
	
	
	
});


function RegValidator(theForm)
{
	 
	if(theForm.name.value == "")
	{
		alert("Please Enter Name.");
		theForm.name.focus();
		return (false);
	}	
	
	if(theForm.email.value == "")
	{
		alert("Please Enter your Email Address.");
		theForm.email.focus();
		return (false);
	}
	if(theForm.email.value != "")
	{   
		var eresult
		var str=theForm.email.value
		var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
		if (!filter.test(str))
		{
			alert("Please Enter a Valid Email address!")
			theForm.email.focus();
			eresult=false;
			return (eresult);
		}
	
	}
	
	/*if(theForm.password.value == "")
	{
		alert("Please Enter Password.");
		theForm.password.focus();
		return (false);
	}
	
	if(theForm.repassword.value == "")
	{
		alert("Please enter Re-type Password.");
		theForm.repassword.focus();
		return (false);
	}
	
	if(theForm.repassword.value != theForm.password.value)
	{
		alert("Re-type Password must match Password.");
		theForm.repassword.focus();
		return (false);
	}*/
	
	if(theForm.contactno.value == "")
	{
		alert("Please Enter Contact Number.");
		theForm.contactno.focus();
		return (false);
	}
	
	if(theForm.countryid.value == 0)
	{
		alert("Please Select Country.");
		theForm.countryid.focus();
		return (false);
	}
	
	if(theForm.spam.value == "")
	{
		alert("Please Type Security Code.");
		theForm.spam.focus();
		return (false);
	}
	
	if(!theForm.terms.checked) {
		alert("Please agree to Terms and Conditions.");
		return (false);
	}
  
  
  return true;
  
}


function LoginValidator(theForm) {

	
	if(theForm.username.value == "")
  {
    alert("Please Enter Email.");
    theForm.username.focus();
    return (false);
  }
   if(theForm.username.value != "")
  {   
	var eresult
	var str=theForm.username.value
  	var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
	if (!filter.test(str))
	  {
		alert("Please Enter a valid Username!")
		theForm.username.focus();
		eresult=false;
		return (eresult);
  	  }
  
  }  
  
  if(theForm.password.value == "")
  {
    alert("Please Enter Password.");
    theForm.password.focus();
    return (false);
  }
	
	return true;
}


function ForgotValidator(theForm)
{
	
	if(theForm.username.value == "")
  {
    alert("Please Enter Email.");
    theForm.username.focus();
    return (false);
  }
  
   if  (theForm.username.value != "")
  {   
	var eresult
	var str=theForm.username.value
  	var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
	if (!filter.test(str))
	  {
		alert("Please Enter a valid Username!")
		theForm.username.focus();
		eresult=false;
		return (eresult);
  	  }
  }
  
  	if(theForm.spam.value == "")
	{
		alert("Please Type Security Code.");
		theForm.spam.focus();
		return (false);
	}
  
 return true;
}



function ChangePwdValidator(theForm)
{

	if(theForm.oldpass.value == "")
	{
		alert("Please enter your Current Password.");
		theForm.oldpass.focus();
		return (false);
	}
	
	if(theForm.newpass.value == "")
	{
		alert("Please enter New Password.");
		theForm.newpass.focus();
		return (false);
	}
	
	if(theForm.repass.value == "")
	{
		alert("Please enter Re-type Password.");
		theForm.repass.focus();
		return (false);
	}
	
	if(theForm.repass.value != theForm.newpass.value)
	{
		alert("Re-type Password must match New Password.");
		theForm.repass.focus();
		return (false);
	}
  
  
 return true;
}


function ContactUsValidation(theForm)
{
	 
	if(theForm.name.value == "")
	{
		alert("Please Enter Name.");
		theForm.name.focus();
		return (false);
	}	
	
	if(theForm.email.value == "")
	{
		alert("Please Enter your Email Address");
		theForm.email.focus();
		return (false);
	}
	if(theForm.email.value != "")
	{   
		var eresult
		var str=theForm.email.value
		var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
		if (!filter.test(str))
		{
			alert("Please Enter a Valid Email address!")
			theForm.email.focus();
			eresult=false;
			return (eresult);
		}
	
	}
	
	if(theForm.contactno.value == "")
	{
		alert("Please Enter Contact Number");
		theForm.contactno.focus();
		return (false);
	}
	
	if(theForm.city.value == "")
	{
		alert("Please Enter City.");
		theForm.city.focus();
		return (false);
	}
	
	if(theForm.message.value == "")
	{
		alert("Please Enter Message.");
		theForm.message.focus();
		return (false);
	}
	
	if(theForm.spam.value == "")
	{
		alert("Please Type Security Code.");
		theForm.spam.focus();
		return (false);
	}
  
  
  return true;
  
}

function ArticleValidator(theForm) {
	
	if(theForm.catid.value == 0)
	{
		alert("Please Select Category.");
		theForm.catid.focus();
		return (false);
	}
	
	/*if(theForm.subcatid.value == 0)
	{
		alert("Please Select Sub Category.");
		theForm.subcatid.focus();
		return (false);
	}*/
	
	if(theForm.title.value == "")
	{
		alert("Please Enter Title.");
		theForm.title.focus();
		return (false);
	}	
	
	if(theForm.keywords.value == "")
	{
		alert("Please Enter Keywords.");
		theForm.keywords.focus();
		return (false);
	}
	
	if(theForm.summary.value == "")
	{
		alert("Please Enter Summary.");
		theForm.summary.focus();
		return (false);
	}
	
	if(theForm.description.value == "")
	{
		alert("Please Enter Description.");
		theForm.description.focus();
		return (false);
	}
	
	return true;
}


function CommentValidator(theForm) {
	
	if(theForm.name.value == "")
	{
		alert("Please Enter Name.");
		theForm.name.focus();
		return (false);
	}	
	
	if(theForm.email.value == "")
	{
		alert("Please Enter your Email Address");
		theForm.email.focus();
		return (false);
	}
	if(theForm.email.value != "")
	{   
		var eresult
		var str=theForm.email.value
		var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
		if (!filter.test(str))
		{
			alert("Please Enter a Valid Email address!")
			theForm.email.focus();
			eresult=false;
			return (eresult);
		}
	
	}

	
	if(theForm.comment.value == "")
	{
		alert("Please Enter Comment.");
		theForm.comment.focus();
		return (false);
	}
	
	if(theForm.spam.value == "")
	{
		alert("Please Type Security Code.");
		theForm.spam.focus();
		return (false);
	}
	
	return true;
	
}


function FriendValidator(theForm)
{
	 
	if(theForm.urname.value == "")
	{
		alert("Please Enter Your Name.");
		theForm.urname.focus();
		return (false);
	}	
	
	if(theForm.uremail.value == "")
	{
		alert("Please Enter your Email Address");
		theForm.uremail.focus();
		return (false);
	}
	if(theForm.uremail.value != "")
	{   
		var eresult
		var str=theForm.uremail.value
		var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
		if (!filter.test(str))
		{
			alert("Please Enter a Valid Email address!")
			theForm.uremail.focus();
			eresult=false;
			return (eresult);
		}
	
	}
	
	if(theForm.fname.value == "")
	{
		alert("Please Enter Friend's Name.");
		theForm.fname.focus();
		return (false);
	}	
	
	if(theForm.femail.value == "")
	{
		alert("Please Enter Friend's Email Address");
		theForm.femail.focus();
		return (false);
	}
	if(theForm.femail.value != "")
	{   
		var eresult
		var str=theForm.femail.value
		var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
		if (!filter.test(str))
		{
			alert("Please Enter a Valid Friend's Email address!")
			theForm.femail.focus();
			eresult=false;
			return (eresult);
		}
	
	}
	
	if(theForm.message.value == "")
	{
		alert("Please Enter Message.");
		theForm.message.focus();
		return (false);
	}
	
	if(theForm.spam.value == "")
	{
		alert("Please Type Security Code.");
		theForm.spam.focus();
		return (false);
	}  
  
  return true;
  
}


function ValidateSearch(srchcityid) {
	if(srchcityid.value==0) {
		alert('Please Select a City.');
		srchcityid.focus();
		return false;
	}
	else {
		document.frmSearch.submit();
	}
	
	return true;
}