<?php

session_id(2022);
session_start();

// getting datas from post
$rp = json_decode(file_get_contents('php://input'), true);
$_SESSION['form1'] = $rp;

// ------------- connexion à la base de données --------------------------

require("connexion_bd.php") ;
$bdd = connexion_bd() ;

//--------------------- vérifions si le compte existe déja -----------------------
$req = $bdd->prepare('SELECT id FROM Personne WHERE nom = ? AND password = ?');
$req->execute(array($_SESSION['form']['surname'],$_SESSION['form']['password']));
$result = $req->fetch();
if(!$result) {
	//------------------ inscription du compte dans la bd -------------------------------------------------
	$req = $bdd->prepare('INSERT INTO Personne(nom, prenom, password, sexe, age, nation, pseudo,date_inscription, image,photo_couverture,photo_profile)
	VALUES (?,?,?,?,?,?,?,?,?,?,?)');
	$req->execute(array($_SESSION['form']['surname'],$_SESSION['form']['name'],$_SESSION['form']['password'],$_SESSION['form1']['sex'],$_SESSION['form1']['age'],$_SESSION['form1']['country'],$_SESSION['form1']['pseudo'],date('d-m-y h:i:s'),'','',''));

	//-------- récupérons l'identifiant du compte inscrit -------------------------------------------
	$req = $bdd->prepare('SELECT id FROM Personne WHERE nom = ? AND password = ?');
	$req->execute(array($_SESSION['form']['surname'],$_SESSION['form']['password']));
	$result = $req->fetch();
	echo $result['id'];
}
else {
	// inscription
	echo 'account existing';
}


$req->closeCursor();
?>