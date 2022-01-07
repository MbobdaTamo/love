<?php

// ------------- connexion à la base de données --------------------------

require("connexion_bd.php") ;
$bdd = connexion_bd() ;

//--------------------- vérifions si le compte existe déja -----------------------
$req = $bdd->query('SELECT id_publication FROM `Publication` ORDER by dat_p desc');
$result = $req->fetch();
$data = Array() ;
while ($donnees = $req->fetch())
{
	array_push($data, $donnees['id_publication']);
}
$data = json_encode($data);
print_r($data);

$req->closeCursor();
?>