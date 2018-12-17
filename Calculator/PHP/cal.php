 <!--PHP-->
 <?php
   session_start();
    if (!isset($_SESSION['adult']) && isset($_GET['adult'])){
    	 $_SESSION['adult'] = $_GET['adult'];
         header("Location: Attraction.php");                 
         exit();
 }
?>
<!-- php ends-->

