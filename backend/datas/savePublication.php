<?php

session_id(2022);
session_start();

// getting datas from post
$rp = json_decode(file_get_contents('php://input'), true);
$_SESSION['publication'] = $rp;
print_r($rp);

// ------------- connexion à la base de données --------------------------

require("connexion_bd.php") ;
$bdd = connexion_bd() ;

// --------------- enregistrement du commentaire dans la BD ---------------------------
 if(!isset($_SESSION['image_name'])) {
 	$_SESSION['image_name']='' ;
 }
$req = $bdd->prepare('INSERT INTO Publication(image, titre,texte, type, personne_publication, dat_p)
	VALUES (?,?,?,?,?,?)');
	$req->execute(array($_SESSION['image_name'], $_SESSION['publication']['publiTitle'], $_SESSION['publication']['publiContent'], $_SESSION['publication']['type'], $_SESSION['publication']['userId'], date('d-m-y h:i:s')));

	
	$_SESSION['image_name']='' ; // vidage...


	$req->closeCursor();
?>