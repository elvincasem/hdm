<?php 
header('Access-Control-Allow-Origin: *'); 
header('Content-Type: application/json');
?>

<?php
	include "db_connection.php";
	$conn = dbConnect();

	
	if($_POST['action']=="searchrestaurant"){

		$type = $_POST['type'];
		$municipality = $_POST['municipality'];
		
		$type = stripslashes($type);
		$municipality = stripslashes($municipality);
	
		$account = $conn->prepare("SELECT count(*) as numberofrestaurant FROM tblrestaurant, tbltype WHERE tblrestaurant.rid = tbltype.rid AND type= :type AND municipality= :municipality");
		$account->execute(array('type' => $type , 'municipality' => $municipality));
	
		$result = $account->fetch(PDO::FETCH_ASSOC);
	
		$test = $result;
		if($test['numberofrestaurant']!=0)
		{
			$restaurant = $conn->prepare("SELECT * FROM tblrestaurant WHERE municipality = '$municipality'");
			$restaurant->execute();
			$result = $restaurant->fetch(PDO::FETCH_ASSOC);
			echo json_encode($result);					
		} else{
			echo "0";
		}
	}

	function selectListSQL($q){
	
	$conn = dbConnect();
	$stmt = $conn->prepare($q);
	$stmt->execute();
	$rows = $stmt->fetchAll();
	return $rows;
	$conn = null;
	
}
	
?>