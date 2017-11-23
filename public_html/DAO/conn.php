<?php
 class conn
 {
   private $conexao;

   public function __construct(){
     $this->conexao = new mysqli("localhost","root","","clubvip");
     if ($this->conexao->connect_error) {
       echo 'Não foi possível conectar: ' . $this->conexao->connect_error;
     }
   }
   public function getConn(){
     return $this->conexao;
   }

   public function sair(){
     mysqli_close($this->conexao);
   }
 }

?>
