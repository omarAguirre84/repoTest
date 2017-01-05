<?php 
#$uname = $_REQUEST['uname'];
#$msg = $_REQUEST['msg'];

require 'querys.php';

$con = mysqli_connect('localhost', 'root', 'cc') or die ();
mysqli_select_db($con, 'ANISDB');


#mysqli_query($con, $qPublicaciones);

$result1 = mysqli_query($con, $qPublicaciones);
echo "<table border=1>";
echo "<tr>
		<td>ID</td>
		<td>ANI</td>
		<td>OPERADOR</td>
		<td>CLIENTE</td>
	 </tr>";

while ($extract = mysqli_fetch_array($result1)){
	
	if ($extract['PROC'] == 0 && $extract['COBRADO'] == 0) {
		$error="style=color:red;";
	}else{
		$error="";
	}

	echo 
		"<tr ".$error.">
			<td>".$extract['id']."</td>
			<td>".$extract['ani']."</td>
			<td>".$extract['OPERADOR']."</td>
			<td>".$extract['CLIENTE']."</td>
		</tr>";
}

echo "</table>";
 ?>
