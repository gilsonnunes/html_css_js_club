<?php
namespace face;
interface icontrole_eventos{

  public function insert($titulo, $telefone, $local_evento, $img, $sobre, $valor_evento);
  public function select($id_eventos);
  public function selectAll();
  public function alter($id_eventos, $titulo, $telefone, $local_evento, $img, $sobre, $data_evento, $valor_evento);
  public function delete($id_eventos);
}
?>
