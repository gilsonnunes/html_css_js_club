<?php
require_once("config.php");

class controle_clientes implements face\icontrole_clientes{
  public $conexao;
  public $lik;
  public function __construct(){
    $this->conexao = new conn();
    $this->lik = $this->conexao->getConn();
  }

  public function insert($cpf, $id_facebook, $nome, $email, $celular, $senha){
    if($result = $this->lik->query("INSERT INTO clientes(cpf, id_facebook, nome, email, celular, senha) VALUES ('$cpf', '$id_facebook', '$nome', '$email', '$celular', '$senha')")){
       return mysqli_affected_rows($this->lik);//retorna valores maior que 0 quando alterado
       //return $json;
    }
    $this->conexao->sair();
  }
  public function select($cpf){
    if($result = $this->lik->query("SELECT * FROM clientes WHERE cpf=$cpf")){
       $json = mysqli_fetch_all ($result, MYSQLI_ASSOC);
       return $json;
    }
    $this->conexao->sair();
  }

  public function selectAll(){
    if($result = $this->lik->query("SELECT * FROM clientes")){
       $json = mysqli_fetch_all ($result, MYSQLI_ASSOC);
       return $json;
    }
    $this->conexao->sair();
  }

  public function alter($cpf, $id_facebook, $nome, $email, $celular, $senha){
    if($this->lik->query("UPDATE clientes SET id_facebook = '$id_facebook', nome = '$nome', email = '$email', celular='$celular', senha='$senha' where cpf = $cpf")){
       return mysqli_affected_rows($this->lik);//retorna valores maior que 0 quando alterado
    }
    $this->conexao->sair();
  }

  public function delete($cpf){
    if($this->lik->query("DELETE FROM clientes WHERE cpf= $cpf")){
       return mysqli_affected_rows($this->lik);//retorna valores maior que 0 quando alterado
      }
    $this->conexao->sair();
  }

}

?>
