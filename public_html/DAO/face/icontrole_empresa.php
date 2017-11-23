<?php
namespace face;
interface icontrole_empresa{
public function __construct();
public function insert($cnpj,  $nome_fantasia, $estado, $senha, $endereco, $cidade, $complemento);
public function select($cnpj);
public function selectAll();
public function alter($cnpj,  $nome_fantasia, $estado, $senha, $endereco, $cidade, $complemento);
public function delete($cnpj);
}
 ?>
