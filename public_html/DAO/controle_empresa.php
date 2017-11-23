<?php
require_once("config.php");

class controle_empresa implements face\icontrole_empresa{
  public $conexao;
  public $lik;
  public function __construct(){
    $this->conexao = new conn();
    $this->lik = $this->conexao->getConn();
  }

  public function insert($cnpj,  $nome_fantasia, $estado, $senha, $endereco, $cidade, $complemento){
    if($result = $this->lik->query("INSERT INTO empresa(cnpj, nome_fantasia, estado, senha, endereco, cidade, complemento) VALUES ('$cnpj',  '$nome_fantasia', '$estado', '$senha', '$endereco', '$cidade', '$complemento')")){
       return mysqli_affected_rows($this->lik);//retorna valores maior que 0 quando alterado

    }
    $this->conexao->sair();
  }

  public function select($cnpj){
    if($result = $this->lik->query("SELECT * FROM empresa WHERE cnpj=$cnpj")){
       $json = mysqli_fetch_all ($result, MYSQLI_ASSOC);
       return $json;
    }
    $this->conexao->sair();
  }

  public function selectAll(){
    if($result = $this->lik->query("SELECT * FROM empresa")){
       $json = mysqli_fetch_all ($result, MYSQLI_ASSOC);
       return $json;
    }
    $this->conexao->sair();
  }

  public function alter($cnpj,  $nome_fantasia, $estado, $senha, $endereco, $cidade, $complemento){
    if($this->lik->query("UPDATE empresa SET nome_fantasia = '$nome_fantasia', estado = '$estado', senha='$senha', endereco='$endereco', cidade='$cidade', complemento='$complemento' where cnpj = $cnpj")){
       return mysqli_affected_rows($this->lik);//retorna valores maior que 0 quando alterado
    }
    $this->conexao->sair();
  }

  public function delete($cnpj){
    if($this->lik->query("DELETE FROM empresa WHERE cnpj= $cnpj")){
       return mysqli_affected_rows($this->lik);//retorna valores maior que 0 quando alterado
      }
    $this->conexao->sair();
  }

}

?>
