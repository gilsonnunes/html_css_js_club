<?php
require_once("config.php");

class controle_responsavel implements face\icontrole_responsavel{
  public $conexao;
  public $lik;
  public function __construct(){
    $this->conexao = new conn();
    $this->lik = $this->conexao->getConn();
  }

  public function insert($cpf,$nome,$email,$celular,$senha,$cnpj_empresa,$id_eventos){
    if($result = $this->lik->query("INSERT INTO responsavel(cpf,nome,email,celular,senha,cnpj_empresa,id_eventos) VALUES ('$cpf','$nome','$email','$celular','$senha','$cnpj_empresa',$id_eventos)")){/*valores dependentes $cnpj_empresa',$id_eventos*/
       return mysqli_affected_rows($this->lik);//retorna valores maior que 0 quando alterado
    }
    $this->conexao->sair();
  }

  public function select($id_eventos){
    if($result = $this->lik->query("SELECT * FROM responsavel WHERE id_eventos=$id_eventos")){
       $json = mysqli_fetch_all ($result, MYSQLI_ASSOC);
       return $json;
    }
    $this->conexao->sair();
  }

  public function selectAll(){
    if($result = $this->lik->query("SELECT * FROM responsavel")){
       $json = mysqli_fetch_all ($result, MYSQLI_ASSOC);
       return $json;
    }
    $this->conexao->sair();
  }

  public function alter($cpf,$nome,$email,$celular,$senha,$cnpj_empresa,$id_eventos){
    if($this->lik->query("UPDATE responsavel SET titulo=$titulo, telefone=$telefone, local_evento=$local_evento, img=$img, sobre=$sobre, data_evento=$data_evento, valor_evento=$valor_evento where id_eventos = $id_eventos")){
       return mysqli_affected_rows($this->lik);//retorna valores maior que 0 quando alterado
    }
    $this->conexao->sair();
  }

  public function delete($cpf){
    if($this->lik->query("DELETE FROM responsavel WHERE cpf = '$cpf'")){
       return mysqli_affected_rows($this->lik);//retorna valores maior que 0 quando alterado
      }
    $this->conexao->sair();
  }

}
?>
