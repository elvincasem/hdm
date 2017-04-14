

////////////////////////////////////////////////////////SAVING DATA///////////////////////////////////////////////////
////////////////////////////////////////////////////////SAVING DATA///////////////////////////////////////////////////
////////////////////////////////////////////////////////SAVING DATA///////////////////////////////////////////////////

function saverestaurant(){

	var restaurantname = document.getElementById("restaurantname").value;
	var resstreet = document.getElementById("resstreet").value;
	var resbarangay = document.getElementById("resbarangay").value;
	var resmunicipality = document.getElementById("resmunicipality").value;
	var rescontact = document.getElementById("rescontact").value;
	var resemail = document.getElementById("resemail").value;
	var resshfromday = document.getElementById("resshfromday").value;
	var resshtoday = document.getElementById("resshtoday").value;
	var resshfromtime = document.getElementById("resshfromtime").value;
	var resshtotime = document.getElementById("resshtotime").value;
	var reslogo = document.getElementById("reslogo").value;
	var rescoverphoto = document.getElementById("rescoverphoto").value;

	$.ajax({
		url: "localhost/fc/functions/saverestaurant",
		type: 'post',
		data: {restaurantname:restaurantname, street:resstreet, barangay:resbarangay, municipality:resmunicipality, contact:rescontact, email:resemail, shdayfrom:resshfromday, shdayto:resshtoday, shtimefrom:resshfromtime, shtimeto:resshtotime, logo:reslogo, coverphoto:rescoverphoto},
		success: function(response) {
			console.log(response);
			window.location.reload();;
		}
	});
}

function savedish(){
 
	var restaurantid = document.getElementById("restaurantid").value;
	var dname = document.getElementById("dishname").value;
	var dprice = document.getElementById("price").value;
	var ddescription = document.getElementById("description").value;
	var dimage = document.getElementById("image").value;

	$.ajax({
		url: "functions/savedish",
		type: 'post',
		data: {rid:restaurantid, dishname:dname, price:dprice, description:ddescription, image:dimage},
		success: function(response) {
			console.log(response);
			window.location.reload();;
		}
	});
}

/////////////////////////////////////////////////////////////UPDATE DATA////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////UPDATE DATA////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////UPDATE DATA////////////////////////////////////////////////////
function disableupdate(){
	
	$('#savebtn').prop("disabled", false);
	$('#updatebtn').prop("disabled", true);
	
	//$$('#resshfromdayoption').append('<option value="Monday">Monday</option><option value="Tuesday">Tuesday</option><option value="Wednesday">Wednesday</option><option value="Thursday">Thursday</option><option value="Friday">Friday</option><option value="Saturday">Saturday</option><option value="Sunday">Sunday</option>');
	//$$('#resshtodayoption').append('<option value="Monday">Monday</option><option value="Tuesday">Tuesday</option><option value="Wednesday">Wednesday</option><option value="Thursday">Thursday</option><option value="Friday">Friday</option><option value="Saturday">Saturday</option><option value="Sunday">Sunday</option>');
	
}

function updaterestaurantmodal(rid){
	
	$('#savebtn').prop("disabled", true);
	$('#updatebtn').prop("disabled", false);
	
	$.ajax({
		url: 'functions/updaterestaurantmodal/'+rid,
		type: 'post',
		success: function(response) {
			var data = JSON.parse(response);
			console.log(response);
			document.getElementById("restaurantid").value = data.rid;
			document.getElementById("restaurantname").value = data.restaurantname;
			document.getElementById("resstreet").value = data.street;
			document.getElementById("resbarangay").value = data.barangay;
			//document.getElementById("resmunicipality").value = data.municipality;
			document.getElementById("rescontact").value = data.contact;
			document.getElementById("resemail").value = data.email;
			//document.getElementById("resshfromday").value = data.storehoursfromday;
			//document.getElementById("resshtoday").value = data.storehourstoday;
			
			$('#resmunicipality').append('<option value='+data.municipality+' selected>'+data.municipality+'</option>');
			$('#resshfromday').append('<option value='+data.storehoursfromday+' selected>'+data.storehoursfromday+'</option>');
			$('#resshtoday').append('<option value='+data.storehourstoday+' selected>'+data.storehourstoday+'</option>');
			
			document.getElementById("resshfromtime").value = data.storehoursfromtime;
			document.getElementById("resshtotime").value = data.storehourstotime;
			document.getElementById("reslogo").value = data.logo;
			document.getElementById("rescoverphoto").value = data.coverphoto;
		}
	});
}

function updaterestaurant(){
 
	var restaurantid = document.getElementById("restaurantid").value;
	var restaurantname = document.getElementById("restaurantname").value;
	var resstreet = document.getElementById("resstreet").value;
	var resbarangay = document.getElementById("resbarangay").value;
	var resmunicipality = document.getElementById("resmunicipality").value;
	var rescontact = document.getElementById("rescontact").value;
	var resemail = document.getElementById("resemail").value;
	var resshfromday = document.getElementById("resshfromday").value;
	var resshtoday = document.getElementById("resshtoday").value;
	var resshfromtime = document.getElementById("resshfromtime").value;
	var resshtotime = document.getElementById("resshtotime").value;
	var reslogo = document.getElementById("reslogo").value;
	var rescoverphoto = document.getElementById("rescoverphoto").value;
	
	alert(resshfromday);
	alert(resshtoday);
	
	$.ajax({
		url: "functions/updaterestaurant",
		type: 'post',
		data: {rid:restaurantid, restaurantname:restaurantname, street:resstreet, barangay:resbarangay, municipality:resmunicipality, contact:rescontact, email:resemail, shdayfrom:resshfromday, shdayto:resshtoday, shtimefrom:resshfromtime, shtimeto:resshtotime, logo:reslogo, coverphoto:rescoverphoto},
		success: function(response) {
			console.log(response);
			window.location.reload();;
		}
	});
}

function updatedishmodal(bsid){
	
	$('#savebtn').prop("disabled", true);
	$('#updatebtn').prop("disabled", false);
	
	$.ajax({
		url: 'functions/updatedishmodal/'+bsid,
		type: 'post',
		success: function(response) {
			var data = JSON.parse(response);
			console.log(response); 
			document.getElementById("bsid").value = data.bsid;
			$('#restaurantid').append('<option value='+data.rid+' selected>'+data.restaurantname+'</option>');
			document.getElementById("dishname").value = data.dishname;
			document.getElementById("price").value = data.price;
			document.getElementById("dishdescription").value = data.dishdescription;
			document.getElementById("dishphoto").value = data.dishphoto;
			
			
		}
	});
}

function updatedish(){
 
	var bsid = document.getElementById("bsid").value;
	var rid = document.getElementById("restaurantid").value;
	var dishname = document.getElementById("dishname").value;
	var price = document.getElementById("price").value;
	var photo = document.getElementById("dishphoto").value;
	var description = document.getElementById("dishdescription").value;
	
	$.ajax({
		url: "functions/updatedish",
		type: 'post',
		data: {bsid:bsid, rid:rid, dishname:dishname, price:price, photo:photo, description:description},
		success: function(response) {
			console.log(response);
			window.location.reload();;
		}
	});
}


//////////////////////////////////////////////////////////////////////DELETE DATA///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////DELETE DATA///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////DELETE DATA///////////////////////////////////////////////
function deleterestaurant(rid){
	
	var r = confirm("Are your sure you want to delete this restaurant?");
    if (r == true) {
		var person = prompt("Please enter Administrator Password");
    
		if (person == 'superadmin') {
			$.ajax({
                    url: 'functions/deleterestaurant/'+rid,
                    type: 'post',
                    success: function(response) {
						window.location.reload();
                    }
                });
			
		}else{
			alert("Invalid Password");
		}
		
    } if(r == false) {
		
    }
	
}

function deletedish(bsid){
	
	var r = confirm("Are your sure you want to delete this dish?");
    if (r == true) {
		var person = prompt("Please enter Administrator Password");
    
		if (person == 'superadmin') {
			$.ajax({
                    url: 'functions/deletedish/'+bsid,
                    type: 'post',
                    success: function(response) {
						window.location.reload();
                    }
                });
			
		}else{
			alert("Invalid Password");
		}
		
    } if(r == false) {
		
    }
	
	
}

function deletereview(reviewid){
	
	var r = confirm("Are your sure you want to delete this review?");
    if (r == true) {
		var person = prompt("Please enter Administrator Password");
    
		if (person == 'superadmin') {
			$.ajax({
                    url: 'functions/deletereview/'+reviewid,
                    type: 'post',
                    success: function(response) {
						window.location.reload();
                    }
                });
			
		}else{
			alert("Invalid Password");
		}
		
    } if(r == false) {
		
    }
	
	
}



























function savecontact(instcode){
	//alert(instcode);
	
	var contactname = document.getElementById("contactname").value;
	var position = document.getElementById("position").value;
	var email = document.getElementById("email").value;
	var telno = document.getElementById("telno").value;
	var address = document.getElementById("address").value;
	
	$.ajax({
		url: "../../functions/savecontact",
		type: 'post',
		data: { instcode:instcode,position:position,contactname: contactname, email: email, telno:telno,address:address},
		success: function(response) {
			console.log(response);
			//document.getElementById("userusername").value = "";
			//document.getElementById("userpassword").value = "";
			

			//$('#success-alert').show("slow");
			//$('#success-alert').removeClass("hide");
			//setTimeout(function(){$('#success-alert').hide("slow");},1500);
			window.location.reload();;

			//return "valid";
		}
	});
}

function saveaccount(){
	//alert(instcode);
	
	var accountname = document.getElementById("accountname").value;
	var email = document.getElementById("email").value;
	var telno = document.getElementById("telno").value;
	var address = document.getElementById("address").value;
	
	
	$.ajax({
		url: "functions/saveaccount",
		type: 'post',
		data: {accountname: accountname, email: email, telno:telno,address:address},
		success: function(response) {
			console.log(response);
			//document.getElementById("userusername").value = "";
			//document.getElementById("userpassword").value = "";
			

			//$('#success-alert').show("slow");
			//$('#success-alert').removeClass("hide");
			//setTimeout(function(){$('#success-alert').hide("slow");},1500);
			window.location.reload();;

			//return "valid";
		}
	});
}

function deleteaccount(accountid){
	//alert(accountid);
	
	var r = confirm("Are your sure you want to delete this Account?");
    if (r == true) {
        //alert ("You pressed OK!");
		 var person = prompt("Please enter Administrator Password");
    
		if (person =='superadmin') {
			$.ajax({
                    url: 'functions/deleteaccount/'+accountid,
                    type: 'post',
                    //data: {accountid: accountid},
                    success: function(response) {
						console.log(response);
						location.reload();
						//console.log(response);
                    }
                });
		}else{
			alert("Invalid Password");
		}
		
		
    } if(r == false) {
        //txt = "You pressed Cancel!";
		
    }
	
	
}


function savesinglecontact(){
	//alert(instcode);
	
	var contactname = document.getElementById("contactname").value;
	var email = document.getElementById("email").value;
	var telno = document.getElementById("telno").value;
	var address = document.getElementById("address").value;
	var instcode = document.getElementById("instcode").value;
	var accountid = document.getElementById("accountid").value;
	var position = document.getElementById("position").value;
	var fax = document.getElementById("fax").value;
	var website = document.getElementById("website").value;
	
	//alert(accountid);
	$.ajax({
		url: "functions/savesinglecontact",
		type: 'post',
		data: { instcode:instcode,contactname: contactname, email: email, telno:telno,address:address,accountid:accountid,position:position,fax:fax,website:website},
		success: function(response) {
			console.log(response);
			//document.getElementById("userusername").value = "";
			//document.getElementById("userpassword").value = "";
			

			//$('#success-alert').show("slow");
			//$('#success-alert').removeClass("hide");
			//setTimeout(function(){$('#success-alert').hide("slow");},1500);
			window.location.reload();;

			//return "valid";
		}
	});
}
function deletecontact(contactid){
	//alert(accountid);
	
	var r = confirm("Are your sure you want to delete this contact?");
    if (r == true) {
        //alert ("You pressed OK!");
		var person = prompt("Please enter Administrator Password");
    
		if (person =='superadmin') {
			$.ajax({
                    url: 'functions/deletecontact/'+contactid,
                    type: 'post',
                    //data: {accountid: accountid},
                    success: function(response) {
						window.location.reload();
						//console.log(response);
						
						//console.log(response);
                    }
                });
			
		}else{
			alert("Invalid Password");
		}
		
		
    } if(r == false) {
        //txt = "You pressed Cancel!";
		
    }
	
	
}


function generatespno(){
	//alert(instcode);
	
	var specialpermit = document.getElementById("specialpermit").value;
	
	
	
	$.ajax({
		url: "functions/generatepermitno",
		type: 'post',
		data: {specialpermit: specialpermit},
		success: function(response) {
			console.log(response);
			
			var lastnumber = parseInt(response);
			//console.log(lastnumber);
			var invalidresponse = response.length;
			if(invalidresponse >4){
				lastnumber=0;
			}
			
			var incrementlastnumber = lastnumber+1;
			var strinc = incrementlastnumber.toString();
		
			if(strinc.length==1){
				var zero ="00";
			}
			if(strinc.length==2){
				var zero ="0";
			}
			if(strinc.length==3){
				var zero ="";
			}
			var displayno = zero+incrementlastnumber;
			document.getElementById("permitno").value = displayno;


		}
	});
}

function savepermits(){
	//alert(instcode);
	
	var instcode = document.getElementById("instcode").value;
	var permitdate = document.getElementById("permitdate").value;
	var programname = document.getElementById("programname").value;
	var specialpermit = document.getElementById("specialpermit").value;
	
	var permitno = document.getElementById("permitno").value;
	var seriesyear = document.getElementById("seriesyear").value;
	var effectivitydate = document.getElementById("effectivitydate").value;
	var programlevel = document.getElementById("programlevel").value;
	
	//alert(accountid);
	$.ajax({
		url: "functions/savepermits",
		type: 'post',
		data: { instcode:instcode,permitdate:permitdate,programname:programname,specialpermit:specialpermit,permitno:permitno,seriesyear:seriesyear,effectivitydate:effectivitydate,programlevel:programlevel},
		success: function(response) {
			console.log(response);
			//document.getElementById("userusername").value = "";
			//document.getElementById("userpassword").value = "";
			

			//$('#success-alert').show("slow");
			//$('#success-alert').removeClass("hide");
			//setTimeout(function(){$('#success-alert').hide("slow");},1500);
			window.location.reload();;

			//return "valid";
		}
	});
}

function editcoordinates(){
	$('#latitude').prop("disabled", false);
	$('#longtitude').prop("disabled", false);
}
function savecoordinates(instcode){
	var latitude = document.getElementById("latitude").value;
	var longtitude = document.getElementById("longtitude").value;
	var institutionalcode = instcode;
	//alert(institutionalcode);
	//alert(longtitude);
	$.ajax({
		url: "../../functions/savecoordinates/"+instcode,
		type: 'post',
		data: {instcode:instcode, latitude:latitude,longtitude:longtitude},
		success: function(response) {
			console.log(response);
			window.location.reload();;
		}
	});
	
	
}

function editinstitution(){
	$('#heitype').prop("disabled", false);
	$('#aprovince2').prop("disabled", false);
	
	
}
function saveheiinformation(instcode){
	//var latitude = document.getElementById("latitude").value;
	var heitype = document.getElementById("heitype").value;
	var province2 = document.getElementById("aprovince2").value;
	//var institutionalcode = instcode;
	//alert(latitude);
	//alert(longtitude);
	$.ajax({
		url: "../../functions/saveheiinfo/"+instcode,
		type: 'post',
		data: {instcode:instcode, heitype:heitype,province2:province2},
		success: function(response) {
			console.log(response);
			window.location.reload();;
		}
	});
	
	
}
function assignsupervisor(programid){
	
	
	document.getElementById('programid').value=programid;
	//$("#closesupervisor").click();
}
function editprogram(programid){
	
	
	document.getElementById('editprogramid').value=programid;
	//$("#closesupervisor").click();
	$.ajax({
		url: "../../functions/getprograminfo/"+programid,
		type: 'post',
		//data: {instcode:instcode, latitude:latitude,longtitude:longtitude},
		success: function(response) {
			console.log(response);
			var data = JSON.parse(response);
			console.log(data);
			document.getElementById('editprogramid').value = data.programid;
			document.getElementById('editprogramname').value = data.mainprogram;
			document.getElementById('editmajor').value = data.major;
			
			var supervisor = document.getElementById("editselectsupervisor");
				//supervisor.remove(0);
				var opt = document.createElement("option");
				opt.value = data.supervisor;
				opt.text = data.supervisor;
				opt.selected = "selected";
				supervisor.add(opt,  supervisor.options[0]);
				
			var discipline = document.getElementById("editselectdiscipline");
				//discipline.remove(0);
				var opt = document.createElement("option");
				opt.value = data.discipline;
				opt.text = data.discipline;
				opt.selected = "selected";
				discipline.add(opt,  discipline.options[0]);
				
			var discipline2 = document.getElementById("editselectdiscipline2");
				//discipline2.remove(0);
				var opt = document.createElement("option");
				opt.value = data.discipline2;
				opt.text = data.discipline2;
				opt.selected = "selected";
				discipline2.add(opt,  discipline2.options[0]);
			
		}
	});
}

function updateprogram(){
	
	//$("#tabinformation").load(location.href + " #tabinformation");
	var programid = document.getElementById('editprogramid').value;
	var supervisor = document.getElementById('editselectsupervisor').value;
	var discipline = document.getElementById('editselectdiscipline').value;
	var discipline2 = document.getElementById('editselectdiscipline2').value;
	
	$.ajax({
		url: "../../functions/updateprogram/"+programid,
		type: 'post',
		data: {supervisor:supervisor,discipline:discipline,discipline2:discipline2},
		success: function(response) {
			console.log(response);
			//window.location.reload();;
		}
	});
	
	
	document.getElementById('supervisorcolumn'+programid).innerHTML=supervisor;
	$("#closesupervisor").click();
	
	
}

function savesupervisorprogram(){
	
	//$("#tabinformation").load(location.href + " #tabinformation");
	var programid = document.getElementById('programid').value;
	var supervisor = document.getElementById('selectsupervisor').value;
	
	$.ajax({
		url: "../../functions/savesupervisorprogram/"+programid,
		type: 'post',
		data: {supervisor:supervisor},
		success: function(response) {
			console.log(response);
			//window.location.reload();;
		}
	});
	
	
	document.getElementById('supervisorcolumn'+programid).innerHTML=supervisor+"<br><button type='submit' class='btn btn-effect-ripple btn-primary'  href='#addsupervisor' data-toggle='modal' onclick='assignsupervisor("+programid+");'><i class='fa fa-user-plus'></i></button>";
	$("#closesupervisor").click();
	
	
}

function savesingleapplicant(){
	//alert(instcode);
	
	var lastname = document.getElementById("lastname").value;
	var firstname = document.getElementById("firstname").value;
	var middlename = document.getElementById("middlename").value;
	var extension = document.getElementById("extension").value;
	var dateofbirth = document.getElementById("dateofbirth").value;
	var placeofbirth = document.getElementById("placeofbirth").value;
	var gender = document.getElementById("gender").value;
	var civilstatus = document.getElementById("civilstatus").value;
	var citizenship = document.getElementById("citizenship").value;
	var contactno = document.getElementById("contactno").value;
	var email = document.getElementById("email").value;
	var barangay = document.getElementById("barangay").value;
	var towncity = document.getElementById("towncity").value;
	var province = document.getElementById("province").value;
	var congressionaldistrict = document.getElementById("congressionaldistrict").value;
	var zipcode = document.getElementById("zipcode").value;
	var heicode = document.getElementById("heicode").value;
	var course = document.getElementById("course").value;
	var father = document.getElementById("father").value;
	var foccupation = document.getElementById("foccupation").value;
	var mother = document.getElementById("mother").value;
	var moccupation = document.getElementById("moccupation").value;
	var siblingno = document.getElementById("siblingno").value;
	var disability = document.getElementById("disability").value;
	var yearofapplication = document.getElementById("yearofapplication").value;
	
	$('#savebutton').prop("disabled", true);
	
	//alert(accountid);
	$.ajax({
		url: "functions/savesingleapplicant",
		type: 'post',
		data: {lastname:lastname,firstname:firstname,middlename:middlename,extension:extension,dateofbirth:dateofbirth,placeofbirth:placeofbirth,gender:gender,civilstatus:civilstatus,citizenship:citizenship,contactno:contactno,email:email,barangay:barangay,towncity:towncity,province:province,congressionaldistrict:congressionaldistrict,zipcode:zipcode,heicode:heicode,course:course,father:father,foccupation:foccupation,mother:mother,moccupation:moccupation,siblingno:siblingno,disability:disability,yearofapplication:yearofapplication},
		success: function(response) {
			console.log(response);
			//document.getElementById("userusername").value = "";
			//document.getElementById("userpassword").value = "";
			

			//$('#success-alert').show("slow");
			//$('#success-alert').removeClass("hide");
			//setTimeout(function(){$('#success-alert').hide("slow");},1500);
			window.location.reload();;

			//return "valid";
		}
	});
}
function deleteapplicant(applicantid){
	//alert(accountid);
	
	var r = confirm("Are your sure you want to delete this applicant?");
    if (r == true) {
        //alert ("You pressed OK!");
		var person = prompt("Please enter Administrator Password");
    
		if (person =='superadmin') {
			$.ajax({
                    url: 'functions/deleteapplicant/'+applicantid,
                    type: 'post',
                    //data: {accountid: accountid},
                    success: function(response) {
						window.location.reload();
						//console.log(response);
						
						//console.log(response);
                    }
                });
			
		}else{
			alert("Invalid Password");
		}
		
		
    } if(r == false) {
        //txt = "You pressed Cancel!";
		
    }
	
	
}

function savepayment(scholarid){
	
	var semester = document.getElementById("semester").value;
	var schoolyear = document.getElementById("schoolyear").value;
	var fundcluster;// = document.getElementById("fundcluster").value;
	var paymentdate = document.getElementById("paymentdate").value;
	var checkno = document.getElementById("checkno").value;
	var amount = document.getElementById("amount").value;
	var remarks = document.getElementById("remarks").value;
	var cy = document.getElementById("cy").value;
	var status = document.getElementById("status").value;
	
	$.ajax({
		url: "../../functions/savepayment/"+scholarid,
		type: 'post',
		data: {semester:semester, schoolyear:schoolyear,checkno:checkno,amount:amount,remarks:remarks,cy:cy,status:status,fundcluster:fundcluster,paymentdate:paymentdate},
		success: function(response) {
			console.log(response);
			window.location.reload();;
		}
	});
	
	
}
function addpayment(){
	$('#savebutton').prop("disabled", false);    
	$('#updatebutton').prop("disabled", true); 
	document.getElementById('spaymentid').value="";
	document.getElementById('checkno').value = "";
	document.getElementById('amount').value = "";
	document.getElementById('remarks').value = "";
	var status = document.getElementById("status");
				//discipline2.remove(0);
		var opt = document.createElement("option");
		opt.value = "Available";
		opt.text ="Available";
		opt.selected = "selected";
		status.add(opt,  status.options[0]);
}
function editpayment(spaymentid){
	
	//clear fields
	document.getElementById('spaymentid').value="";
	document.getElementById('checkno').value = "";
	document.getElementById('amount').value = "";
	document.getElementById('remarks').value = "";
	//document.getElementById('semester').value = data.checkno;
	//document.getElementById('schoolyear').value = data.amount;
	//document.getElementById('cy').value = data.remarks;
	$('#savebutton').prop("disabled", true);    
	$('#updatebutton').prop("disabled", false);    
	//alert("test");
	
	document.getElementById('spaymentid').value=spaymentid;
	$.ajax({
		url: "../../functions/getpaymentinfo/"+spaymentid,
		type: 'post',
		//data: {instcode:instcode, latitude:latitude,longtitude:longtitude},
		success: function(response) {
			console.log(response);
			var data = JSON.parse(response);
			console.log(data);
			var semester = document.getElementById("semester");
				//discipline2.remove(0);
				var opt = document.createElement("option");
				opt.value = data.semester;
				opt.text = data.semester;
				opt.selected = "selected";
				semester.add(opt,  semester.options[0]);
			var schoolyear = document.getElementById("schoolyear");
				//discipline2.remove(0);
				var opt = document.createElement("option");
				opt.value = data.schoolyear;
				opt.text = data.schoolyear;
				opt.selected = "selected";
				schoolyear.add(opt,  schoolyear.options[0]);
			document.getElementById('checkno').value = data.checkno;
			document.getElementById('amount').value = data.amount;
			document.getElementById('remarks').value = data.remarks;
			var cy = document.getElementById("cy");
				//discipline2.remove(0);
				var opt = document.createElement("option");
				opt.value = data.cy;
				opt.text = data.cy;
				opt.selected = "selected";
				cy.add(opt,  cy.options[0]);
			var status = document.getElementById("status");
				//discipline2.remove(0);
				var opt = document.createElement("option");
				opt.value = data.status;
				opt.text = data.status;
				opt.selected = "selected";
				status.add(opt,  status.options[0]);
			/*
			
			document.getElementById('editprogramname').value = data.mainprogram;
			document.getElementById('editmajor').value = data.major;
			
			var supervisor = document.getElementById("editselectsupervisor");
				//supervisor.remove(0);
				var opt = document.createElement("option");
				opt.value = data.supervisor;
				opt.text = data.supervisor;
				opt.selected = "selected";
				supervisor.add(opt,  supervisor.options[0]);
				
			var discipline = document.getElementById("editselectdiscipline");
				//discipline.remove(0);
				var opt = document.createElement("option");
				opt.value = data.discipline;
				opt.text = data.discipline;
				opt.selected = "selected";
				discipline.add(opt,  discipline.options[0]);
				
			*/
			
		}
	});
}
function updatepayment(){
	
	//$("#tabinformation").load(location.href + " #tabinformation");
	var spaymentid = document.getElementById('spaymentid').value;
	var semester = document.getElementById("semester").value;
	var schoolyear = document.getElementById("schoolyear").value;
	var checkno = document.getElementById("checkno").value;
	var amount = document.getElementById("amount").value;
	var remarks = document.getElementById("remarks").value;
	var cy = document.getElementById("cy").value;
	var status = document.getElementById("status").value;
	
	$.ajax({
		url: "../../functions/updatepayment/"+spaymentid,
		type: 'post',
		data: {semester:semester, schoolyear:schoolyear,checkno:checkno,amount:amount,remarks:remarks,cy:cy,status:status},
		success: function(response) {
			console.log(response);
			window.location.reload();;
		}
	});
	
	
	//document.getElementById('supervisorcolumn'+programid).innerHTML=supervisor;
	//$("#closesupervisor").click();
	
	
}

function startwidget(){
	var widgetChartPie      = $('#widget-chart-pie');
	var stronglyagree = document.getElementById("stronglyagree").value;
	var agree = document.getElementById("agree").value;
	// Pie Chart
            $.plot(widgetChartPie,
                [
                    {label: 'Strongly Agree', data: stronglyagree},
                    {label: 'Agree', data: agree}
                ],
                {
                    colors: ['#5cafde', '#5ccdde'],
                    legend: {show: false},
                    series: {
                        pie: {
                            show: true,
                            radius: 1,
                            label: {
                                show: true,
                                radius: 2/3,
                                formatter: function(label, pieSeries) {
                                    return '<div class="chart-pie-label">' + label + '<br>' + Math.round(pieSeries.percent) + '%</div>';
                                },
                                background: {opacity: .75, color: '#000000'}
                            }
                        }
                    }
                }
            );
			
		
		var widgetChartPie2      = $('#widget-chart-pie2');
	var stronglyagree2 = document.getElementById("cstronglyagree").value;
	var agree2 = document.getElementById("cagree").value;
	// Pie Chart
            $.plot(widgetChartPie2,
                [
                    {label: 'Strongly Agree', data: stronglyagree2},
                    {label: 'Agree', data: agree2}
                ],
                {
                    colors: ['#afde5c','#454e59'],
                    legend: {show: false},
                    series: {
                        pie: {
                            show: true,
                            radius: 1,
                            label: {
                                show: true,
                                radius: 2/3,
                                formatter: function(label, pieSeries) {
                                    return '<div class="chart-pie-label">' + label + '<br>' + Math.round(pieSeries.percent) + '%</div>';
                                },
                                background: {opacity: .75, color: '#000000'}
                            }
                        }
                    }
                }
            );
			
	
}

function savevoucher(scholarid){
	//alert($('#savevoucherbutton').prop("disabled"));
	$('#savevoucherbutton').prop("disabled", true);
	$('#updatevoucherbutton').prop("disabled", false);
	
	//alert($('#savevoucherbutton').prop("disabled"));
	//console.log($('#savevoucherbutton').prop("disabled"));
	var fundcluster = document.getElementById("fundcluster").value;
	var voucherdate = document.getElementById("voucherdate").value;
	var dvno = document.getElementById("dvno").value;
	var modeofpayment = document.getElementById("modeofpayment").value;
	var orsno = document.getElementById("orsno").value;
	var vouchersemester = document.getElementById("vouchersemester").value;
	var voucherschoolyear = document.getElementById("voucherschoolyear").value;
	//var particulars = document.getElementById("particulars").value;
	var responsibility = document.getElementById("responsibility").value;
	var mfopap = document.getElementById("mfopap").value;
	var voucheramount = document.getElementById("voucheramount").value;
	
	if(document.getElementById("certifiedcash").checked ==true){
		var certifiedcash = 1;
	}else{
		var certifiedcash = 0;
	}
	
	if(document.getElementById("certifiedsubject").checked ==true){
		var certifiedsubject = 1;
	}else{
		var certifiedsubject = 0;
	}
	
	if(document.getElementById("certifiedsupporting").checked ==true){
		var certifiedsupporting = 1;
	}else{
		var certifiedsupporting = 0;
	}
	//var certifiedcash = document.getElementById("certifiedcash").value;
	//var certifiedsubject = document.getElementById("certifiedsubject").value;
	//var certifiedsupporting = document.getElementById("certifiedsupporting").value;
	
	//alert(certifiedcash);
	
	$.ajax({
		url: "../../functions/savevoucher/"+scholarid,
		type: 'post',
		data: {fundcluster:fundcluster,voucherdate:voucherdate,dvno:dvno,modeofpayment:modeofpayment,orsno:orsno,responsibility:responsibility,mfopap:mfopap,voucheramount:voucheramount,certifiedcash:certifiedcash,certifiedsubject:certifiedsubject,certifiedsupporting:certifiedsupporting,vouchersemester:vouchersemester,voucherschoolyear:voucherschoolyear},
		success: function(response) {
			console.log(response);
			var data = JSON.parse(response);
			//setTimeout(function(){document.getElementById("voucherid").value = data.lastid;},1500);
			document.getElementById("voucherid").value = data.lastid;
			console.log(data.lastid);
			//alert(data.lastid);
			document.getElementById("voucherid").value = data.lastid;
			//window.location.reload();;
			
			//$('#general-table').load(document.URL +  '#general-table');
			$('#voucherlist-table').load(document.URL +  ' #voucherlist-table');
			//$( ".close" ).trigger( "click" );
			//$('#modaldiv').load(document.URL +  ' #modaldiv');
		}
	});
	
	
}


function addentry(){
	
	var dvno = document.getElementById("dvno").value;
	var accounttitle = document.getElementById("accounttitle").value;
	var uacscode = document.getElementById("uacscode").value;
	var columnentry = document.getElementById("columnentry").value;
	var accountentryamount = document.getElementById("accountentryamount").value;
	
	
	$.ajax({
		url: "../../functions/saveentry/"+dvno,
		type: 'post',
		data: {accounttitle:accounttitle,uacscode:uacscode,columnentry:columnentry,accountentryamount:accountentryamount},
		success: function(response) {
			console.log(response);
			//window.location.reload();;
		}
	});
	
	
}

function populateentry(scholarid){
	var dvno = document.getElementById("dvno").value;
	
	if(dvno!=''){
		//save voucher if update is enabled
		if($('#savevoucherbutton').prop("disabled")==false){
			alert("not yet saved");
			savevoucher(scholarid);
			
		}
		
			$.ajax({
			url: "../../functions/getentrydetails/"+dvno,
			type: 'post',
			
			success: function(response) {
				console.log(response);
				var data = JSON.parse(response);
				console.log(data);
				//alert(data.numberofentry);
				if(data.numberofentry==0){
					
					//start without data
					var voucherid = document.getElementById("voucherid").value;
					var fundcluster = document.getElementById("fundcluster").value;
					
						var dvno = document.getElementById("dvno").value;
						var accounttitle1 = "Donations";
						var uacscode1 = "5029908000";
						var columnentry1 = "Debit";
						var accountentryamount1 = document.getElementById("voucheramount").value;
						
						$.ajax({
							url: "../../functions/saveentry/"+dvno,
							type: 'post',
							data: {accounttitle:accounttitle1,uacscode:uacscode1,columnentry:columnentry1,accountentryamount:accountentryamount1,voucherid:voucherid},
							success: function(response) {
								console.log(response);
								//window.location.reload();;
								
				var table=document.getElementById("entryitems");
				$(table).append( "<tr><td><strong>"+accounttitle1+"</strong></td>"+
	"<td class='hidden-xs'>"+uacscode1+"</td>"+
	"<td class='hidden-xs'>"+accountentryamount1+"</td>"+
	"<td class='hidden-xs'>"+columnentry1+"</td>"+
	"<td class='text-center'>"+
	"<a href='javascript:void(0)' data-toggle='tooltip' title='Delete User' class='btn btn-effect-ripple btn-xs btn-danger'><i class='fa fa-times'></i></a></td></tr>");
				
				
				
							}
						});
						

		var voucherid = document.getElementById("voucherid").value;
		alert(voucherid);
		if(fundcluster =='101'){
			var accounttitle ="Cash - MDS, REGULAR ACCOUNT";
			var uacscode = "1010404000";
		}if(fundcluster =='151'){
			var accounttitle ="Cash - MDS, SPECIAL ACCOUNT";
			var uacscode = "1010405000";
		}
		
		var columnentry = "Credit";
		var accountentryamount = document.getElementById("voucheramount").value;		
	$.ajax({
		url: "../../functions/saveentry/"+dvno,
		type: 'post',
		data: {accounttitle:accounttitle,uacscode:uacscode,columnentry:columnentry,accountentryamount:accountentryamount,voucherid:voucherid},
		success: function(response) {
			console.log(response);
								//window.location.reload();;
								
				var table=document.getElementById("entryitems");
				$(table).append( "<tr><td><strong>"+accounttitle+"</strong></td>"+
	"<td class='hidden-xs'>"+uacscode+"</td>"+
	"<td class='hidden-xs'>"+accountentryamount+"</td>"+
	"<td class='hidden-xs'>"+columnentry+"</td>"+
	"<td class='text-center'>"+
	"<a href='javascript:void(0)' data-toggle='tooltip' title='Delete User' class='btn btn-effect-ripple btn-xs btn-danger'><i class='fa fa-times'></i></a></td></tr>");
	
							}
						});


					
					//end without data

					
				}else{
					//alert("with data");	
				}
				
				//window.location.reload();;
			}
		});
		
	}else{
		alert("Empty DV No.");
	}
	
	
	
	
	
	
	
	
	
}

function updatestudentlist(typecode){
	//var filteredstud=document.getElementById("filteredstudent");
	$('#filteredstudent').empty().append('');
						
	$.ajax({
		url: "functions/getscholarfiltered/"+typecode,
		type: 'post',
		data: {typecode:typecode},
		success: function(response) {
			//console.log(response);
			var data = JSON.parse(response);
			var filteredstud=document.getElementById("filteredstudent");
								//window.location.reload();;
			for(var ctr=0;ctr<data.length; ctr++){
				
				
		$(filteredstud).append( "<option value='"+data[ctr].scholarid+"'>"+data[ctr].fullname+"</option>");
			}					
	
				
				
				
		}
		});
	
}

function updatedvno(){
	//alert('test');
	var dvyear = document.getElementById("dvyear").value;
	var dvmonth = document.getElementById("dvmonth").value;
	var fundcluster = document.getElementById("fundcluster").value;
	var dvnostart = document.getElementById("dvnostart").value;
	
	var fulldvno = dvyear+"-"+fundcluster+"-"+dvmonth+"-"+dvnostart;
	
	document.getElementById("dvno").value = fulldvno;
	
}

function addbatchvoucher(){
	//alert('test');
	
	var dvnostart = document.getElementById("dvnostart").value;
	
	var finaldvno = document.getElementById("dvno").value;
	var semester = document.getElementById("semester").value;
	var schoolyear = document.getElementById("schoolyear").value;
	var amount = document.getElementById("amount").value;
	var scholarid = document.getElementById("filteredstudent").value;

	var fundcluster = document.getElementById("fundcluster").value;
	var voucherdate = document.getElementById("voucherdate").value;
	var modeofpayment = "MDS Check";
	var orsno = document.getElementById("orsno").value;
	var responsibility = "StuFAP Unit";
	var mfopap = "3 02 020000";
	var certifiedcash = 1;
	var certifiedsubject = 0;
	var certifiedsupporting = 1;
	var currentbatch = document.getElementById("currentbatch").value;

	
//save voucher
	$.ajax({
		url: "functions/savevoucher/"+scholarid,
		type: 'post',
		data: {fundcluster:fundcluster,voucherdate:voucherdate,dvno:finaldvno,modeofpayment:modeofpayment,orsno:orsno,responsibility:responsibility,mfopap:mfopap,voucheramount:amount,certifiedcash:certifiedcash,certifiedsubject:certifiedsubject,certifiedsupporting:certifiedsupporting,vouchersemester:semester,voucherschoolyear:schoolyear,currentbatch:currentbatch},
		success: function(response) {
			console.log(response);
			var data = JSON.parse(response);
			//save entry
			var voucherid = data['lastid'];
			document.getElementById("lastvoucherid").value = voucherid;
			var accounttitle = document.getElementById("accounttitle").value;
			var amount = document.getElementById("amount").value;
			var columnentry = "Credit";
			var finaldvno = document.getElementById("dvno").value;
			$.ajax({
				url: "functions/saveentry/"+finaldvno,
				type: 'post',
				data: {accounttitle:accounttitle,amount:amount,columnentry:columnentry,accountentryamount:amount,voucherid,voucherid,finaldvno:finaldvno},
				success: function(response) {
					//console.log(response);
					var data = JSON.parse(response);
					console.log(data);
					
				
				}
				});
		
		}
		});
	
	
	
	
	//show in table
	$.ajax({
		url: "functions/getscholarfullname/"+scholarid,
		type: 'post',
		
		success: function(response) {
			
			var data = JSON.parse(response);
			var lastvoucher = document.getElementById("lastvoucherid").value;
			//console.log();
		var batchtable=document.getElementById("batchvouchertable");
			$(batchtable).append("<tr>"+
			"<td class='text-center'>"+finaldvno+"</td>"+
			"<td>"+data[0]['fullname']+"</td>"+
			"<td>"+semester+"</td>"+
			"<td>"+schoolyear+"</td>"+
			"<td class='text-center'>"+amount+"</td>"+
			"<td class='text-center'><a class='btn btn-effect-ripple btn-sm btn-primary' href='batchvoucher/printvoucher/"+lastvoucher+"' target='_blank'><i class='fa fa-print'></i></a><a href='#' data-toggle='tooltip' title='Cancel Voucher' class='btn btn-effect-ripple btn-sm btn-danger' ><i class='fa fa-times'></i></a> </td></tr>");
		}
		});
	
	
	//var fulldvno = dvyear+"-"+fundcluster+"-"+dvmonth+"-"+dvnostart;
	dvnostart++;
	document.getElementById("dvnostart").value = dvnostart;
	
	setTimeout(function(){updatedvno();},1500);
}



//startwidget();