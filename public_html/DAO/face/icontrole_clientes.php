<?php
namespace face;
interface icontrole_clientes{
  public function insert($cpf, $id_facebook, $nome, $email, $celular, $senha);
  public function select($cpf);
  public function selectAll();
  public function alter($cpf, $id_facebook, $nome, $email, $celular, $senha);
  public function delete($cpf);
}
?>
