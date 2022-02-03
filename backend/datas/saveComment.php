<?php

session_id(2022);
session_start();

// getting datas from post
$rp = json_decode(file_get_contents('php://input'), true);

// ------------- connexion à la base de données --------------------------

require("connexion_bd.php") ;
$bdd = connexion_bd() ;

// --------------- enregistrement du commentaire dans la BD ---------------------------
 if(!isset($_SESSION['image_name'])) {
 	$_SESSION['image_name']='' ;
 }
$req = $bdd->prepare('INSERT INTO Commentaire(image, texte, type, publication, personne,dat_commentaire)
	VALUES (?,?,?,?,?,?)');
$req->execute(array($_SESSION['image_name'], $rp['texte'], $rp['type'], $rp['publication'], $rp['personne'], date('d-m-y h:i:s')));

$_SESSION['image_name']='' ; // vidage...

	echo 'done';
	$req->closeCursor();
?>