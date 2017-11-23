<?php
namespace face;
interface icontrole_compras{

  public function insert($cpf_cliente, $id_compra, $valor, $id_eventos);
  public function select($cpf_cliente);
  public function selectAll();
  public function alter($cpf_cliente, $id_compra, $valor, $id_eventos, $datahora);
  public function delete($id_compra);
}
?>
