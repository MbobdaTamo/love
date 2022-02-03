<?php


// getting datas from post
$rp = json_decode(file_get_contents('php://input'), true);

// ------------- connexion à la base de données --------------------------

require("connexion_bd.php") ;
$bdd = connexion_bd() ;

//--------------------- vérifions si le compte existe déja -----------------------
$req = $bdd->prepare('SELECT SUM(point) FROM ReactionCommentaire WHERE commentaire = ?');
$req->execute(array($rp['commentaire']));
$result = $req->fetch();
if (!$result['SUM(point)']) {
	echo 0;
}
else {
	echo json_encode($result['SUM(point)']);
}
$req->closeCursor()
?>