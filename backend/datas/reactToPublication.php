<?php


// getting datas from post
$rp = json_decode(file_get_contents('php://input'), true);

// ------------- connexion à la base de données --------------------------

require("connexion_bd.php") ;
$bdd = connexion_bd() ;
require("biblio.php") ;
$point = pointForReaction($rp['reactionType']);

//--------------------- vérifions si le compte existe déja -----------------------
$req = $bdd->prepare('SELECT id FROM ReactionCommentaire WHERE commentaire = ? AND personne = ?');
$req->execute(array($rp['commentaire'],$rp['personne']));
$result = $req->fetch();
if(!$result) {
	//------------------ ajout de la réaction -------------------------------------------------
	$req = $bdd->prepare('INSERT INTO ReactionCommentaire(commentaire, personne, reactionType, point, date)
	VALUES (?,?,?,?,?)');
	$req->execute(array($rp['commentaire'],$rp['personne'],$rp['reactionType'],$point,date('d-m-y h:i:s')));
}
else {
	//------------------ mis à jour de la réaction ------------------------------
	$req = $bdd->prepare('UPDATE ReactionCommentaire SET reactionType = :rtype, point = :pt WHERE id = :identif');
	$req->execute(array(
		'rtype' => $rp['reactionType'], 
		'pt' => $point, 
		'identif' => $result['id'],
	));
}


$req->closeCursor();
?>