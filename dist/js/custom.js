/* ===== variables === */
var global_url = "../../functions.php";


function testjs(){
	var type = document.getElementById("select_type").value;
    var municipality = document.getElementById("select_municipality").value;
	
	$.ajax({
		url: "functions.php",
		type: 'post',
		data: {action: "searchrestaurant", type:type, municipality:municipality},
		success: function(response) {
			console.log(response);
		}
	});
}
















































