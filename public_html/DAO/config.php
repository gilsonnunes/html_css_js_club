<?php
  spl_autoload_register(function($pagina){
  $caminho = $pagina.".php";
  //echo $caminho."</br>";
  if(file_exists($caminho))
  {
  //echo $caminho;
    require_once($caminho);
  }/*else{
    $novoCaminho = "face".DIRECTORY_SEPARATOR.$caminho;
    require_once($novoCaminho);
  //  echo "</br> -------- ".$novoCaminho;
}*/

});

 ?>
