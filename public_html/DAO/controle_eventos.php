<?php
require_once("config.php");

class controle_eventos implements face\icontrole_eventos{
  public $conexao;
  public $lik;
  public function __construct(){
    $this->conexao = new conn();
    $this->lik = $this->conexao->getConn();
  }

  public function insert($titulo, $telefone, $local_evento, $img, $sobre, $valor_evento){
    date_default_timezone_set('America/Recife');
    $date = date('Y-m-d');

    if($result = $this->lik->query("INSERT INTO eventos(titulo, telefone, local_evento, img, sobre, data_evento, valor_evento) VALUES ('$titulo', '$telefone', '$local_evento', '$img', '$sobre', '$date', $valor_evento)")){
       return mysqli_affected_rows($this->lik);//retorna valores maior que 0 quando alterado

    }
    $this->conexao->sair();
  }

  public function select($id_eventos){
    if($result = $this->lik->query("SELECT * FROM eventos WHERE id_eventos=$id_eventos")){
       $json = mysqli_fetch_all ($result, MYSQLI_ASSOC);
       return $json;
    }
    $this->conexao->sair();
  }

  public function selectAll(){
    if($result = $this->lik->query("SELECT * FROM eventos")){
       $json = mysqli_fetch_all ($result, MYSQLI_ASSOC);
       return $json;
    }
    $this->conexao->sair();
  }

  public function alter($id_eventos, $titulo, $telefone, $local_evento, $img, $sobre, $data_evento, $valor_evento){
    if($this->lik->query("UPDATE eventos SET titulo=$titulo, telefone=$telefone, local_evento=$local_evento, img=$img, sobre=$sobre, data_evento=$data_evento, valor_evento=$valor_evento where id_eventos = $id_eventos")){
       return mysqli_affected_rows($this->lik);//retorna valores maior que 0 quando alterado
    }
    $this->conexao->sair();
  }

  public function delete($id_eventos){
    if($this->lik->query("DELETE FROM eventos WHERE id_eventos= $id_eventos")){
       return mysqli_affected_rows($this->lik);//retorna valores maior que 0 quando alterado
      }
    $this->conexao->sair();
  }

}

?>
