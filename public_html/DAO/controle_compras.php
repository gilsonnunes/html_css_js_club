<?php
require_once("config.php");

class controle_compras implements face\icontrole_compras{
  public $conexao;
  public $lik;
  public function __construct(){
    $this->conexao = new conn();
    $this->lik = $this->conexao->getConn();
  }

  public function insert($cpf_cliente, $id_compra, $valor, $id_eventos){
    date_default_timezone_set('America/Recife');
    $date = date('Y-m-d H:i');
  //  echo $date."</br>";
    if($result = $this->lik->query("INSERT INTO compras (cpf_cliente, id_compra, valor, id_eventos, datahora) VALUES ('$cpf_cliente', $id_compra, $valor, $id_eventos, '$date')")){
       return mysqli_affected_rows($this->lik);//retorna valores maior que 0 quando alterado

    }
    $this->conexao->sair();
  }

  public function select($cpf_cliente){
    if($result = $this->lik->query("SELECT * FROM compras WHERE cpf_cliente=$cpf_cliente")){
       $json = mysqli_fetch_all ($result, MYSQLI_ASSOC);
       return $json;
    }
    $this->conexao->sair();
  }

  public function selectAll(){
    if($result = $this->lik->query("SELECT * FROM compras")){
       $json = mysqli_fetch_all ($result, MYSQLI_ASSOC);
       return $json;
    }
    $this->conexao->sair();
  }

  public function alter($cpf_cliente, $id_compra, $valor, $id_eventos, $datahora){
    if($this->lik->query("UPDATE compras SET cpf_cliente='$cpf_cliente', valor = $valor, id_eventos=$id_eventos, datahora='$datahora' where id_compra = $id_compra")){
       return mysqli_affected_rows($this->lik);//retorna valores maior que 0 quando alterado
    }
    $this->conexao->sair();
  }

  public function delete($id_compra){
    if($this->lik->query("DELETE FROM compras WHERE id_compra= $id_compra")){
       return mysqli_affected_rows($this->lik);//retorna valores maior que 0 quando alterado
      }
    $this->conexao->sair();
  }

}

?>
