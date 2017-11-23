<?php
namespace face;
interface icontrole_responsavel{

  public function insert($cpf,$nome,$email,$celular,$senha,$cnpj_empresa,$id_eventos);
  public function select($cpf);
  public function selectAll();
  public function alter($cpf,$nome,$email,$celular,$senha,$cnpj_empresa,$id_eventos);
  public function delete($cpf);
}
?>
