 <!--PHP-->
             <?php
                int x=1;
                    session_start();
                    $_SESSION['adult'] = $adultval;
                    $_SESSION['child'] = $childval;
                  
                  if (x=1){
  //You need to redirect
  header("Hotel.html"); 
  exit();
 }

             ?>
<!-- php ends-->
