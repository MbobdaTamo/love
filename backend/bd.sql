-- Adminer 4.8.0 MySQL 5.5.5-10.3.27-MariaDB-0+deb10u1 dump nom bd:id16986823_love, password:DDngc]87Mpj2S<za

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `Commentaire`;
CREATE TABLE `Commentaire` (
  `id_commentaire` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(255) DEFAULT NULL,
  `texte` varchar(10000) NOT NULL,
  `type` varchar(255) NOT NULL,
  `dat_commentaire` datetime DEFAULT NULL,
  `publication` int(11) DEFAULT NULL,
  `personne` int(11) NOT NULL,
  `point` int(11) DEFAULT 0,
  PRIMARY KEY (`id_commentaire`),
  KEY `publication` (`publication`),
  KEY `personne` (`personne`),
  CONSTRAINT `Commentaire_ibfk_2` FOREIGN KEY (`publication`) REFERENCES `Publication` (`id_publication`),
  CONSTRAINT `Commentaire_ibfk_3` FOREIGN KEY (`personne`) REFERENCES `Personne` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `Commentaire` (`id_commentaire`, `image`, `texte`, `type`, `dat_commentaire`, `publication`, `personne`, `point`) VALUES
(1,	'',	'bonjour monsieur j\'ai vraiment beaucoup aimé votre publication c\'est pour ca que je commente',	'Football',	'2031-01-22 00:00:00',	42,	12,	20),
(9,	'pulication_img/1643628068Cameroon_240-animated-flag-gifs.gif',	'juste un petit teste',	'Football',	'2031-01-22 00:00:00',	42,	12,	0),
(10,	'',	'sfvbsbvgfsgfvbsbgv   christophe',	'Football',	'2031-01-22 00:00:00',	42,	12,	0),
(11,	'',	'bonjour les amis tout vas tres bien',	'Football',	'2001-02-22 00:00:00',	42,	12,	0),
(12,	'',	'Nous réuissirons à batir un cameroun nouveau par la force de nos esprits et par notre caractère qui est en meme temps une identité comune et ce qui fait en sorte que l\'on, se démarque des autres peuples. Nous sommes le camerounet nous vaincrons. Et s\'il faut verser du sang, nous le verserons j\'usqu\'a la dernière goute',	'Football',	'2001-02-22 00:00:00',	42,	12,	0),
(13,	'pulication_img/1643699403Cameroon flag-XXL-anim.gif',	'Nous réuissirons à batir un cameroun nouveau par la force de nos esprits et par notre caractère qui est en meme temps une identité comune et ce qui fait en sorte que l\'on, se démarque des autres peuples. Nous sommes le camerounet nous vaincrons. Et s\'il faut verser du sang, nous le verserons j\'usqu\'a la dernière goute',	'Football',	'2001-02-22 08:10:05',	42,	12,	-5),
(14,	'',	'Un nouveau commentaire, il va surement apparaitre en tete pour latest',	'Football',	'2002-02-22 08:33:57',	42,	12,	0),
(15,	'',	'ce commentaire apparaitra meme commme on a pas réagit à lyu',	'Football',	'2002-02-22 09:55:01',	42,	12,	0),
(16,	'',	'Juste un commentaire pour ajouter une 3 eme page',	'Football',	'2002-02-22 10:40:19',	42,	12,	0),
(17,	'',	'Seul et unique commentaire',	'Football',	'2002-02-22 02:18:36',	42,	12,	0),
(18,	'',	'Juste un commentaire comme ca pour tester. et on verra ce que ca donne les amis, hahahahahahaha',	'Football',	'2002-02-22 02:23:40',	41,	12,	0),
(19,	'',	'---> <PublicationComment> at src/components/global/publicationComment/PublicationComment.vue\n       <Publication> at src/components/publication/Publication.vue\n         <App> at src/App.vue',	'Football',	'2003-02-22 08:44:03',	42,	12,	20),
(20,	'',	'Biensur que ca fonctionne gros jnull et toi que fait tu pour gagner de l\'argent ? hahahahaha',	'Football',	'2004-02-22 09:31:33',	42,	12,	0),
(21,	'',	'ezpfo,ergfergfrzzp',	'Football',	'2004-02-22 05:59:30',	42,	12,	0),
(22,	'',	'encore un commentaire',	'Football',	'2005-02-22 03:48:41',	42,	1,	0),
(23,	'',	'juste un commentaire comme ca',	'Football',	'2007-02-22 02:17:54',	48,	3,	0),
(24,	'',	'juste un commentaire comme ca',	'Football',	'2007-02-22 02:19:35',	48,	3,	20),
(25,	'',	'un commentaire comme ca',	'Philosophy',	'2007-02-22 02:20:53',	51,	3,	0),
(26,	'',	'blbablablablabla',	'Philosophy',	'2007-02-22 02:23:29',	51,	1,	0),
(27,	'',	'passe platform',	'Football',	'2007-02-22 02:31:02',	50,	1,	-20),
(28,	'',	'new comment',	'Football',	'2007-02-22 04:55:09',	50,	1,	0),
(29,	'',	'something to have few point and be part of the ranking',	'Beauty',	'2008-02-22 10:08:37',	56,	2,	5),
(30,	'',	'Comment com but right date',	'Football',	'2022-02-08 18:54:24',	57,	20,	-10)
ON DUPLICATE KEY UPDATE `id_commentaire` = VALUES(`id_commentaire`), `image` = VALUES(`image`), `texte` = VALUES(`texte`), `type` = VALUES(`type`), `dat_commentaire` = VALUES(`dat_commentaire`), `publication` = VALUES(`publication`), `personne` = VALUES(`personne`), `point` = VALUES(`point`);

DROP TABLE IF EXISTS `CommentOfComment`;
CREATE TABLE `CommentOfComment` (
  `id_commentaire` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(255) DEFAULT NULL,
  `texte` varchar(10000) NOT NULL,
  `type` varchar(255) NOT NULL,
  `dat_commentaire` datetime DEFAULT NULL,
  `parent_comment` int(11) DEFAULT NULL,
  `personne` int(11) NOT NULL,
  `point` int(11) DEFAULT 0,
  PRIMARY KEY (`id_commentaire`),
  KEY `personne` (`personne`),
  KEY `auther_comment` (`parent_comment`),
  CONSTRAINT `CommentOfComment_ibfk_1` FOREIGN KEY (`parent_comment`) REFERENCES `Commentaire` (`id_commentaire`),
  CONSTRAINT `CommentOfComment_ibfk_2` FOREIGN KEY (`personne`) REFERENCES `Personne` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `CommentOfComment` (`id_commentaire`, `image`, `texte`, `type`, `dat_commentaire`, `parent_comment`, `personne`, `point`) VALUES
(1,	'',	'Le premier commentaire d\'un commentaire',	'Football',	'2003-02-22 00:00:00',	13,	12,	0),
(2,	'',	'En réalité on peut etre satifait du résultat c\'est exactement ce qu\'on attendait.\nLe premier commentaire d\'un commentaire',	'Football',	'2003-02-22 00:00:00',	13,	12,	0),
(3,	'',	'Et un 3 ème commentaire juste pour tester les comOfCom !',	'Football',	'2003-02-22 00:00:00',	13,	12,	0),
(4,	'',	'Et un 3 ème commentaire juste pour tester les comOfCom ! Mais cette foi ci dans un autre commentaire',	'Football',	'2003-02-22 00:00:00',	19,	12,	0),
(5,	'',	'Et un autre cmmentaire pour la rout',	'Football',	'2003-02-22 00:00:00',	13,	12,	0),
(6,	'',	'Jute un autre commentaire pour mieux tester la pagination. Pour voir comment gerer le retour en haut de la page',	'Football',	'2003-02-22 00:00:00',	13,	12,	0),
(7,	'',	'Jute un autre commentaire pour mieux tester la pagination. Pour voir comment gerer le retour en haut de la page',	'Football',	'2003-02-22 00:00:00',	13,	12,	0),
(8,	'',	'aractère qui est en meme temps une identité comune et ce qui fait en sorte que l\'on, se démarque des autres peuples. Nous sommes le camerounet nous vaincrons. Et s\'il faut verser du sang, nous le verserons j\'usqu\'a la dernière goute\nread more...',	'Football',	'2003-02-22 00:00:00',	12,	12,	0),
(9,	'',	'pour chrisistophe Piatek un jour tu comprendra pourquo ca na pas marvché, j espere',	'Football',	'2003-02-22 00:00:00',	10,	12,	0),
(10,	'',	'another',	'Football',	'2003-02-22 00:00:00',	10,	12,	0),
(11,	'',	'third comment for test',	'Football',	'2003-02-22 00:00:00',	10,	12,	0),
(12,	'',	'pas mal pour un singe',	'Football',	'2004-02-22 00:00:00',	19,	12,	0),
(13,	'',	'your are right my dear',	'Football',	'2004-02-22 00:00:00',	18,	12,	0),
(14,	'',	'un nouveau commentaire',	'Football',	'2004-02-22 00:00:00',	10,	12,	0),
(15,	'',	'et un dernier pour la route et pzar ailleur on peut pas faire de testee parfait juste faore de notre mieux pour que ca donne quelque chose qui ssemble fonctionner à la fin nous ne somme pas des robje te juere tup eux mez croire ou pas mais je dis la vérité ca c\'est suer  mon ami',	'Football',	'2004-02-22 00:00:00',	10,	12,	0),
(16,	'',	'Et encore un autre pour la route',	'Football',	'2004-02-22 00:00:00',	13,	12,	0),
(17,	'',	'un commentaire dans un commentaire juste pour tester',	'Football',	'2007-02-22 05:22:04',	23,	1,	0),
(18,	'',	'NOM18979 PRENOM1879 | 2007-02-22 05:22:04\nun commentaire dans un commentaire juste pour tester ',	'Football',	'2007-02-22 05:23:48',	23,	4,	0),
(19,	'',	'Radington\nRENOM1879 | 2007-02-22 05:22:04\nun commentaire dans un commentaire juste pour tester ',	'Football',	'2007-02-22 05:25:47',	23,	4,	0),
(20,	'',	'Radington\nRENOM1879 | 2007-02-22 05:22:04\nun commentaire dans un commentaire juste pour tester ',	'Football',	'2007-02-22 05:25:47',	23,	4,	0),
(21,	'',	'Radington\nRENOM1879 | 2007-02-22 05:22:04\nun commentaire dans un commentaire juste pour tester ',	'Football',	'2007-02-22 05:26:05',	23,	4,	0),
(22,	'',	'Another test for today',	'Football',	'2007-02-22 05:52:17',	24,	4,	5),
(23,	'',	'Another test for today',	'Football',	'2007-02-22 06:00:20',	24,	4,	20),
(24,	'',	'getting in the ranking',	'Football',	'2008-02-22 10:12:51',	13,	15,	10),
(25,	'',	'getting in tooooooouooouo',	'Football',	'2008-02-22 10:14:26',	12,	16,	-5),
(26,	'',	'I wanna get into toooooo',	'Football',	'2008-02-22 10:15:28',	12,	17,	0),
(27,	'',	'Something like that dude',	'Football',	'2008-02-22 10:16:26',	1,	18,	-30),
(28,	'',	'Ok bu am gonna be the last in the ranking',	'Football',	'2008-02-22 10:17:10',	1,	19,	-20),
(29,	'',	'pour la santé',	'Football',	'2008-02-22 10:18:39',	1,	20,	-10),
(30,	'',	'Commm of com but right date',	'Football',	'2022-02-08 18:56:01',	30,	20,	15)
ON DUPLICATE KEY UPDATE `id_commentaire` = VALUES(`id_commentaire`), `image` = VALUES(`image`), `texte` = VALUES(`texte`), `type` = VALUES(`type`), `dat_commentaire` = VALUES(`dat_commentaire`), `parent_comment` = VALUES(`parent_comment`), `personne` = VALUES(`personne`), `point` = VALUES(`point`);

DROP TABLE IF EXISTS `Personne`;
CREATE TABLE `Personne` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `sexe` varchar(255) NOT NULL,
  `age` varchar(255) NOT NULL,
  `nation` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `pseudo` varchar(255) NOT NULL,
  `photo_couverture` varchar(255) NOT NULL,
  `photo_profile` varchar(255) NOT NULL,
  `date_inscription` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `Personne` (`id`, `nom`, `prenom`, `password`, `sexe`, `age`, `nation`, `image`, `pseudo`, `photo_couverture`, `photo_profile`, `date_inscription`) VALUES
(1,	'nom18979',	'prenom1879',	'password114578',	'F',	'45',	'senegal_1',	'pulication_img/dembouz.jpg',	'_pnom__',	'couverture123456',	'photo_789',	NULL),
(2,	'nom18980',	'prenom1880',	'password114578',	'F',	'45',	'senegal_1',	'pulication_img/dembouz.jpg',	'_pnom__',	'couverture123456',	'photo_789',	NULL),
(3,	'nom18981',	'prenom1881',	'password114578',	'F',	'45',	'senegal_1',	'pulication_img/dembouz.jpg',	'_pnom__',	'couverture123456',	'photo_789',	NULL),
(4,	'nom1',	'prenom1',	'password1',	'M',	'24',	'senegal',	'pulication_img/dembouz.jpg',	'pnom',	'couverture78451',	'photo_45',	NULL),
(5,	'nom1',	'prenom1',	'password1',	'M',	'24',	'senegal',	'pulication_img/dembouz.jpg',	'pnom',	'couverture78451',	'photo_45',	NULL),
(6,	'nom1',	'prenom1',	'password1',	'M',	'24',	'senegal',	'pulication_img/dembouz.jpg',	'pnom',	'couverture78451',	'photo_45',	NULL),
(7,	'nom1',	'prenom1',	'password',	'male',	'',	'Afghanistan (‫افغانستان‬‎)',	'pulication_img/dembouz.jpg',	'sssssssssssssssssssssssssssssssssssssssss',	'',	'',	NULL),
(8,	'nom1',	'prenom1',	'passwordy',	'male',	'',	'Afghanistan (‫افغانستان‬‎)',	'pulication_img/dembouz.jpg',	'sssssssssssssssssssssssssssssssssssssssss',	'',	'',	'2002-01-22 00:00:00'),
(9,	'nom1',	'prenom1',	'passwordky',	'male',	'',	'Afghanistan (‫افغانستان‬‎)',	'pulication_img/dembouz.jpg',	'sssssssssssssssssssssssssssssssssssssssss',	'',	'',	'2003-01-22 00:00:00'),
(10,	'nom1',	'prenom1',	'passwordkk',	'male',	'',	'Afghanistan (‫افغانستان‬‎)',	'pulication_img/dembouz.jpg',	'sssssssssssssssssssssssssssssssssssssssss',	'',	'',	'2003-01-22 12:55:42'),
(11,	'dzd',	'azdszd',	'dzdzdd',	'male',	'',	'Afghanistan (‫افغانستان‬‎)',	'pulication_img/dembouz.jpg',	'',	'',	'',	'2002-01-22 08:30:59'),
(12,	'Tamo',	'Eric',	'tamo',	'male',	'22',	'Afghanistan (‫افغانستان‬‎)',	'pulication_img/dembouz.jpg',	'ledraguer',	'',	'',	'2002-01-22 08:36:40'),
(13,	'efefe',	'gregrtgrgr',	'AAAA',	'male',	'22',	'Cameroon (Cameroun)',	'pulication_img/dembouz.jpg',	'je dois',	'',	'',	'2003-01-22 08:16:51'),
(14,	'Taric',	'gomal',	'gome',	'male',	'14',	'Afghanistan (‫افغانستان‬‎)',	'pulication_img/dembouz.jpg',	'czscsczsc',	'',	'',	'2003-01-22 08:17:36'),
(15,	'Thanos',	'the king',	'password',	'male',	'88',	'Afghanistan (‫افغانستان‬‎)',	'pulication_img/dembouz.jpg',	'le pseudo',	'',	'',	'2003-01-22 09:06:40'),
(16,	'Jean',	'le grand',	'pass',	'male',	'22',	'Afghanistan (‫افغانستان‬‎)',	'pulication_img/dembouz.jpg',	'',	'',	'',	'2003-01-22 09:09:36'),
(17,	'kjzdjkzd',	'zdzjdjkz',	'aaaa',	'male',	'22',	'Afghanistan (‫افغانستان‬‎)',	'pulication_img/dembouz.jpg',	'',	'',	'',	'2003-01-22 09:19:24'),
(18,	'TamoO',	'dscdsd',	'OOOO',	'male',	'13',	'Afghanistan (‫افغانستان‬‎)',	'pulication_img/dembouz.jpg',	'',	'',	'',	'2003-01-22 09:20:27'),
(19,	'LOLOLO',	'zdzzdz',	'LLLL',	'male',	'99',	'Afghanistan (‫افغانستان‬‎)',	'pulication_img/dembouz.jpg',	'',	'',	'',	'2003-01-22 09:25:08'),
(20,	'PPPP',	'IYIU',	'AAAA',	'male',	'14',	'Afghanistan (‫افغانستان‬‎)',	'pulication_img/dembouz.jpg',	'',	'',	'',	'2003-01-22 09:26:09'),
(21,	'OOOO',	'hjhjh',	'5555',	'male',	'14',	'Afghanistan (‫افغانستان‬‎)',	'pulication_img/dembouz.jpg',	'letueur',	'',	'',	'2003-01-22 09:28:39'),
(22,	'Natsu',	'dragon',	'sala',	'male',	'21',	'Japan (日本)',	'pulication_img/dembouz.jpg',	'',	'',	'',	'2007-01-22 07:17:35'),
(23,	'Tamo',	'Eric',	'mbobda',	'male',	'88',	'Afghanistan (‫افغانستان‬‎)',	'pulication_img/dembouz.jpg',	'',	'',	'',	'2011-01-22 01:52:46')
ON DUPLICATE KEY UPDATE `id` = VALUES(`id`), `nom` = VALUES(`nom`), `prenom` = VALUES(`prenom`), `password` = VALUES(`password`), `sexe` = VALUES(`sexe`), `age` = VALUES(`age`), `nation` = VALUES(`nation`), `image` = VALUES(`image`), `pseudo` = VALUES(`pseudo`), `photo_couverture` = VALUES(`photo_couverture`), `photo_profile` = VALUES(`photo_profile`), `date_inscription` = VALUES(`date_inscription`);

DROP TABLE IF EXISTS `Publication`;
CREATE TABLE `Publication` (
  `id_publication` int(11) NOT NULL AUTO_INCREMENT,
  `texte` varchar(5000) NOT NULL,
  `image` varchar(255) NOT NULL,
  `titre` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `personne_publication` int(11) NOT NULL,
  `dat_p` datetime DEFAULT NULL,
  `point` int(11) DEFAULT 0,
  PRIMARY KEY (`id_publication`),
  KEY `personne_publication` (`personne_publication`),
  CONSTRAINT `Publication_ibfk_1` FOREIGN KEY (`personne_publication`) REFERENCES `Personne` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `Publication` (`id_publication`, `texte`, `image`, `titre`, `type`, `personne_publication`, `dat_p`, `point`) VALUES
(1,	'something',	'just for test',	'title',	'Football',	1,	'2004-01-22 00:00:00',	30),
(2,	'something',	'just for test',	'title',	'Football',	1,	'2004-01-22 00:00:00',	0),
(3,	'Contenu de la publicatio ',	'just for test',	'Le titre',	'Social problems',	1,	'2004-01-22 00:00:00',	0),
(4,	'Contenu de la publicatio ',	'just for test',	'Le titre',	'Social problems',	1,	'2004-01-22 00:00:00',	0),
(5,	'Contenu de la publicatio ',	'pulication_img/1641333034Arsenal-1280x640.jpg',	'Le titre',	'Social problems',	1,	'2004-01-22 00:00:00',	0),
(6,	'qzdzd',	'pulication_img/1641333034Arsenal-1280x640.jpg',	'qadaq',	'Other',	1,	'2004-01-22 00:00:00',	0),
(7,	'qzdzdqd',	'pulication_img/1641333034Arsenal-1280x640.jpg',	'qadaqq',	'Other',	1,	'2004-01-22 00:00:00',	0),
(8,	'qzdzdqd',	'',	'qadaqq',	'Other',	1,	'2004-01-22 00:00:00',	0),
(11,	'sdzads',	'pulication_img/16413742712.png',	'sasas',	'Football',	1,	'2005-01-22 00:00:00',	0),
(12,	'Eric arnaud dfskldkf',	'pulication_img/164137467428529875-beauté-country-road-vue-latérale-et-fond-de-montagne.jpg',	'TAMO',	'Football',	1,	'2005-01-22 00:00:00',	0),
(13,	'Eric arnaud dfskldkf',	'pulication_img/164137488428529875-beauté-country-road-vue-latérale-et-fond-de-montagne.jpg',	'TAMO',	'Football',	1,	'2005-01-22 00:00:00',	0),
(14,	'',	'',	'',	'Football',	1,	'2005-01-22 00:00:00',	0),
(15,	'efeff',	'',	'efef',	'Football',	1,	'2005-01-22 00:00:00',	0),
(16,	'efeff',	'pulication_img/16413750113_greedy.jpg',	'efef',	'Football',	1,	'2005-01-22 00:00:00',	0),
(17,	'quelque chose d\'effectif',	'pulication_img/16413902971.png',	'le titre',	'Football',	1,	'2005-01-22 02:45:00',	0),
(18,	'quelque chose d\'effectif, quelque chose d\'effectif quelque chose dquelque chose d\'effectif quelque chose d\'effectifquelque chose d\'effectif quelque chose d\'effectif\'effectif',	'pulication_img/16413904161.png',	'le meilleur arcticle',	'Football',	1,	'2005-01-22 02:46:58',	0),
(19,	'encore une autre publication\nencore une autre publication\nencore une autre publication\nencore une autre publication\nencore une autre publication\nencore une autre publication\nencore une autre publication',	'pulication_img/16413905091.png',	'another one you should trust me this time',	'Football',	1,	'2005-01-22 02:48:30',	0),
(20,	'blablablablab\nblablablablab\nblablablablab\nblablablablab\nblablablablab',	'',	'Un nouveau titre',	'Football',	1,	'2005-01-22 03:15:57',	0),
(21,	'Tamo a enfin reuissi la fonctionalité principale\nTamo a enfin reuissi la fonctionalité principale\nTamo a enfin reuissi la fonctionalité principale\nTamo a enfin reuissi la fonctionalité principale',	'',	'Tamo a enfin reuissi la fonctionalité principale',	'Football',	1,	'2005-01-22 08:02:40',	0),
(22,	'Tamo a enfin reuissi la fonctionalité principale\nTamo a enfin reuissi la fonctionalité principale\nTamo a enfin reuissi la fonctionalité principale\nTamo a enfin reuissi la fonctionalité principale',	'',	'Tamo a enfin reuissi la fonctionalité principale',	'Football',	1,	'2005-01-22 08:02:40',	0),
(23,	'et cet un nouvelle article',	'',	'Tamo a enfin reuissi la fonctionalité principale',	'Football',	1,	'2005-01-22 08:03:17',	0),
(24,	'je suis vraiment content de poster dans mon site.\nEn effet c\'est une très bone chose et je sens que ca va s\'ameliorer',	'',	'je suis vraiment content de poster dans mon site',	'Football',	12,	'2005-01-22 08:13:19',	0),
(25,	'bon voyons vooir ce que ca donnne ne\naaaaaaaaaaaaaaalooowa',	'',	'Le hero',	'Football',	12,	'2005-01-22 08:13:50',	0),
(26,	'un jour je regardais un match et j\'ai compris que le Barca e',	'',	'le meilleur club de l\'histoir c\'est le barca',	'Football',	12,	'2006-01-22 07:33:12',	0),
(27,	'la blague de commandant bobo sur shakira',	'',	'Un grand joueur',	'Football',	22,	'2007-01-22 07:20:42',	0),
(28,	'The text-align property is used to set the horizontal alignment of a text.\n\nA text can be left or right aligned, centered, or justified.\n\nThe following example shows center aligned, and left and right aligned text (left alignment is default if text direction is left-to-right, and right alignment is default if text direction is right-to-left):',	'',	'Text Alignment',	'Football',	12,	'2007-01-22 10:32:06',	0),
(29,	'Interestingly, the final line break is not honored. As per the CSS 2.1 spec: “Lines are broken at preserved newline characters, and as necessary to fill line boxes.” so perhaps that makes sense.\n\nHere is a table to understand the behaviors of all the different values:',	'',	'white space',	'Other',	12,	'2007-01-22 10:33:21',	0),
(30,	'azkldfejkflkeklfkl,e\nfelm,f,e',	'',	'kqx,;ls,cx',	'Philosophy',	12,	'2007-01-22 10:35:01',	0),
(31,	'zdzdzdzdqdxsd',	'',	'qzdzdzd',	'Football',	12,	'2007-01-22 10:39:05',	0),
(32,	'et cet nouvell article apparaitra directement .\nHAhAhAhA\nInterestingly, the final line break is not honored. As per the CSS 2.1 spec: “Lines are broken at preserved newline characters, and as necessary to fill line boxes.” so perhaps that makes sense.\n\nHere is a table to understand the behaviors of all the different values:',	'',	'Un nouvelle article',	'Football',	12,	'2007-01-22 10:41:39',	0),
(33,	'ici c\'est mon nouveel article et ke vais tester sit tous fonctionne bien',	'',	'Un nouvelle article sera publié',	'Football',	12,	'2007-01-22 06:20:51',	0),
(34,	'quelqu\'un de biennnnnnnnnnnnnnnnnnnnnnnn',	'',	'Tamo est quekqu\'un de vien',	'Football',	12,	'2007-01-22 06:22:00',	0),
(35,	'something more detailed',	'',	'something',	'Football',	12,	'2007-01-22 06:27:20',	-20),
(36,	'Pour inaugure ce petit changement j\'ai décidé de trier par id et non par date car l\'id est incrementé pour une nouvelle pubication donc une publi enciene ne peut avoir un id supérieur ou égal a une publi recente. ainsi va la vie',	'',	'Pour inogurer ce petit changement',	'Football',	12,	'2008-01-22 07:51:51',	-5),
(37,	'input:focus, textarea:focus, select:focus{\n    outline: none;\n}\n.lPblicationForm {\n    position: fixed;\n    top:50%;\n    left: 50%;\n    width: 500px;\n    height: 520px;\n    overflow: scroll;\n    margin-left: -250px;\n    margin-top: -260px;\n    border: solid 1px silver;\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n    background-color: white;\n}\n.lPBFCTitle {\n    font-weight: bold;\n    font-size: 19px;\n    padding: 20px;\n    position: relative;\n    border-bottom: solid 1px silver;\n}\n.lPBFCCross {\n    position:absolute;\n    width: 32px;\n    height: 32px;\n    right: 0%;  \n    top: 50%;\n    margin-right: 10px;\n    margin-top: -15px;\n    border-radius: 5em;\n    background-color: lightgrey;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.lPBFCCross img {\n    width: 55%;\n}\n\n\n.lPBFCBody {\n    padding: 15px;\n}\n.lPBFCBody > div {\n    margin-top: 20px;\n}\n.lPBFCType {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    text-align: justify;\n}\n.lPBFCType > div {\n    margin-left: 10px;\n}\n.lPBFCType + div {\n    box-sizing: border-box;\n}\n.lPBFCType + div textarea {\n    box-sizing: border-box;\n    width: 100%;\n    height: 50px;\n    padding: 10px;\n    font-weight: bold;\n    border: solid 2px rgb(223, 225, 230);\n    color: rgb(40,40,40);\n    border-radius: 0.1em;\n    font-size: 15px;\n    resize: none;\n}\n.lPBFCType + div + div textarea {\n    box-sizing: border-box;\n    width: 100%;\n    height: 150px;\n    padding: 10px;\n    border: solid 2px #DFE1E6;\n    color: rgb(40,40,40);\n    border-radius: 0.1em;\n    font-size: 15px;\n    resize: none;\n}\n.lPBFCType + div + div + div label {\n    display: flex;\n    justify-content: left;\n    align-items: center ;\n}\n.lPBFCType + div + div + div input {\n    display: none;\n}\n.lPBFCType + div + div + div img {\n    width: 20px;\n    margin-left: 10px;\n}\n.custom-file-upload {\n  margin-bottom: 5px;  \n}\n#lPbblah {\n    width: 100%;\n}\n.lPBFCType + div + div + div + div {\n    background-color: #E2E4E6;\n    border-radius:0.4em;\n    padding: 10px;',	'',	'New article',	'Football',	12,	'2010-01-22 01:16:42',	0),
(38,	'Perhaps the easiest way to offer that to the user is a link that targets an ID on the <html> element. So like…\n\n<html id=\"top\">\n  <body>\n     <!-- the entire document -->\n     <a href=\"#top\">Jump to top of page</a>\n  </body>\n</html>\n\nBut we’ve got a few options here.\n\nIf you want it to smooth scroll up to the top, you can do that in CSS if you like:\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nNote that placing a property on the HTML element like that is all-encompassing behavior you don’t have much control over.\n\nIn this case, we aren’t linking to a focusable element either, which means that focus won’t change. That’s probably important, so this would be better:\n\n<html>\n  <body>\n     <a id=\"top\"></a>\n     <!-- the entire document -->\n     <a href=\"#top\">Jump to top of page</a>\n  </body>\n</html>\n\nIt’s better because the focus will move to that anchor tag, which is good for people using the keyboard or assistive technology.',	'',	'Need to scroll to the top of the page? ',	'Football',	12,	'2010-01-22 02:01:44',	0),
(39,	'blablabala',	'',	'nouvelle article',	'Football',	12,	'2011-01-22 11:18:19',	0),
(40,	'J\'annonce aujourd\'hui la création de ce nouveau site de gateau. Ca fera plaisir certainement aux fans de l\'ar culinaire. mais le plus important est de garder ce moment familiale car nous somme ddes etres humain et nous avons besoin des uns et des autres pour survivre.\n\n2. dauxièmement ce sera donc une grande faite. \"La fete du football africain\". Dite la CAN.\n\n                     \n                    Merci pour votre attention',	'pulication_img/1641897006cake.png',	'Un super site de gateau !!!',	'Football',	12,	'2011-01-22 11:30:08',	15),
(41,	'le match algerie guineen',	'pulication_img/1642411186acknoledgment.png',	'super match hier',	'Physics',	12,	'2017-01-22 10:19:49',	0),
(42,	'Nous réuissirons à batir un cameroun nouveau par la force de nos esprits et par notre caractère qui est en meme temps une identité comune et ce qui fait en sorte que l\'on, se démarque des autres peuples. Nous sommes le camerounet nous vaincrons. Et s\'il faut verser du sang, nous le verserons j\'usqu\'a la dernière goute',	'pulication_img/16427783352.png',	'Nous Réussirons',	'Philosophy',	12,	'2021-01-22 04:18:57',	10),
(43,	'je cherche des étudians pour....',	'pulication_img/16438089912.png',	'Recherche d\'etudiants',	'Football',	12,	'2002-02-22 02:36:33',	0),
(44,	'On va battre l\'Egypte, doublé de toko  et triplé d\'Aboubakar',	'',	'Victoire ce soir',	'Football',	12,	'2003-02-22 11:42:30',	0),
(45,	'Juste pour tester si ca compte bien les points',	'',	'Un nouvelle',	'Football',	1,	'2006-02-22 09:11:57',	5),
(46,	'Points pour établir ce putain de classement de merde dont je m\'en fou réelllemrnt oohhh',	'',	'Juste pour avpoir des',	'Football',	2,	'2006-02-22 10:00:47',	0),
(47,	'En effet un autre putain de teste',	'',	'JUste pour un teste',	'Football',	1,	'2007-02-22 07:12:00',	25),
(48,	'Pour voir l\'incrementatio, juste pour voir une incrementation progressive',	'',	'Pour voir l\'incrementatio',	'Football',	1,	'2007-02-22 07:22:42',	45),
(49,	'deflkzeklfklzekleflkezf\nefjzefzekfk',	'',	'Jutes dvdvd',	'Football',	3,	'2007-02-22 10:00:44',	0),
(50,	'another test',	'',	'Another one',	'Football',	3,	'2007-02-22 10:02:08',	20),
(51,	'another testsdds',	'',	'Another onefef',	'Philosophy',	3,	'2007-02-22 10:02:50',	-35),
(52,	'Ce commentaire permettra d\'evaluer comment Taric sera le premier sur le critère beauté',	'',	'Un commentaire pour la beauté',	'Football',	14,	'2008-02-22 09:26:33',	-5),
(53,	'Ce commentaire permettra d\'evaluer comment Taric sera le premier sur le critère beauté',	'',	'Un commentaire pour la beauté',	'Football',	14,	'2008-02-22 09:26:38',	10),
(54,	'Ce commentaire permettra d\'evaluer comment Taric sera le premier sur le critère beauté',	'',	'Un commentaire pour la beauté',	'Football',	14,	'2008-02-22 09:26:42',	0),
(55,	'Evaluer Mon cher taric qui sera le premier dans le domainze',	'',	'Pour beauté',	'Beauty',	14,	'2008-02-22 09:29:45',	20),
(56,	'Evaluer Mon cher taric qui sera le premier dans le domainze',	'',	'Pour beauté',	'Beauty',	14,	'2008-02-22 09:29:47',	20),
(57,	'pour un test',	'',	'ppefpe',	'Football',	20,	'2022-02-08 18:52:41',	-10),
(58,	'image mis en valeur',	'pulication_img/164441466928529875-beauté-country-road-vue-latérale-et-fond-de-montagne.jpg',	'pour tester image',	'Football',	20,	'2022-02-09 14:51:12',	0),
(59,	'des image qui son cool',	'pulication_img/164442866028529875-beauté-country-road-vue-latérale-et-fond-de-montagne.jpg',	'testonts la fonctionalité image',	'Football',	20,	'2022-02-09 18:44:23',	0),
(60,	'try another fucking test',	'pulication_img/1644429073Cameroon_240-animated-flag-gifs.gif',	'lets ',	'Football',	20,	'2022-02-09 18:51:15',	20)
ON DUPLICATE KEY UPDATE `id_publication` = VALUES(`id_publication`), `texte` = VALUES(`texte`), `image` = VALUES(`image`), `titre` = VALUES(`titre`), `type` = VALUES(`type`), `personne_publication` = VALUES(`personne_publication`), `dat_p` = VALUES(`dat_p`), `point` = VALUES(`point`);

DROP TABLE IF EXISTS `Reaction`;
CREATE TABLE `Reaction` (
  `id_reaction` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `point` int(11) NOT NULL,
  `dat_reaction` datetime DEFAULT NULL,
  `personne` int(11) NOT NULL,
  PRIMARY KEY (`id_reaction`),
  KEY `personne` (`personne`),
  CONSTRAINT `Reaction_ibfk_1` FOREIGN KEY (`personne`) REFERENCES `Personne` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `ReactionCommentaire`;
CREATE TABLE `ReactionCommentaire` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `commentaire` int(11) NOT NULL,
  `personne` int(11) NOT NULL,
  `reactionType` varchar(30) NOT NULL,
  `point` int(11) NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `commentaire` (`commentaire`),
  KEY `reaction` (`reactionType`),
  KEY `personne` (`personne`),
  CONSTRAINT `ReactionCommentaire_ibfk_2` FOREIGN KEY (`commentaire`) REFERENCES `Commentaire` (`id_commentaire`),
  CONSTRAINT `ReactionCommentaire_ibfk_3` FOREIGN KEY (`personne`) REFERENCES `Personne` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `ReactionCommentaire` (`id`, `commentaire`, `personne`, `reactionType`, `point`, `date`) VALUES
(1,	13,	12,	'laughing',	15,	'2001-02-22 04:36:48'),
(2,	12,	12,	'laughing',	15,	'2001-02-22 04:37:29'),
(3,	13,	11,	'laughing',	15,	'2002-02-22 07:29:24'),
(4,	13,	10,	'laughing',	15,	'2002-02-22 07:29:46'),
(5,	12,	10,	'laughing',	15,	'2002-02-22 07:29:57'),
(6,	11,	10,	'sad',	-5,	'2002-02-22 07:30:05'),
(7,	10,	10,	'laughing',	15,	'2002-02-22 07:30:12'),
(8,	13,	9,	'heart',	20,	'2002-02-22 07:30:27'),
(9,	12,	9,	'laughing',	15,	'2002-02-22 07:30:34'),
(10,	11,	9,	'sick',	-10,	'2002-02-22 07:30:45'),
(11,	10,	9,	'heart',	20,	'2002-02-22 07:30:49'),
(12,	10,	12,	'laughing',	15,	'2002-02-22 07:31:18'),
(13,	11,	12,	'heart',	20,	'2002-02-22 07:31:22'),
(14,	14,	12,	'heart',	20,	'2002-02-22 08:35:49'),
(15,	16,	12,	'heart',	20,	'2002-02-22 01:34:50'),
(16,	18,	12,	'heart',	20,	'2002-02-22 02:23:57'),
(17,	13,	1,	'sad',	-5,	'2007-02-22 07:42:07'),
(18,	19,	1,	'heart',	20,	'2007-02-22 08:17:19'),
(19,	1,	1,	'heart',	20,	'2007-02-22 08:17:58'),
(20,	26,	1,	'heart',	20,	'2007-02-22 04:55:52'),
(21,	25,	1,	'handshake',	0,	'2007-02-22 05:01:52'),
(22,	27,	4,	'angry',	-20,	'2007-02-22 05:32:07'),
(23,	24,	4,	'heart',	20,	'2007-02-22 05:59:47'),
(24,	29,	2,	'like',	5,	'2008-02-22 10:08:57'),
(25,	30,	20,	'sick',	-10,	'2022-02-08 19:02:50')
ON DUPLICATE KEY UPDATE `id` = VALUES(`id`), `commentaire` = VALUES(`commentaire`), `personne` = VALUES(`personne`), `reactionType` = VALUES(`reactionType`), `point` = VALUES(`point`), `date` = VALUES(`date`);

DROP TABLE IF EXISTS `ReactionComOfCom`;
CREATE TABLE `ReactionComOfCom` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `comOfCom` int(11) NOT NULL,
  `personne` int(11) NOT NULL,
  `reactionType` varchar(30) NOT NULL,
  `point` int(11) NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `personne` (`personne`),
  KEY `comOfCom` (`comOfCom`),
  CONSTRAINT `ReactionComOfCom_ibfk_1` FOREIGN KEY (`personne`) REFERENCES `Personne` (`id`),
  CONSTRAINT `ReactionComOfCom_ibfk_2` FOREIGN KEY (`comOfCom`) REFERENCES `CommentOfComment` (`id_commentaire`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `ReactionComOfCom` (`id`, `comOfCom`, `personne`, `reactionType`, `point`, `date`) VALUES
(1,	1,	12,	'sick',	-10,	'2004-02-22 08:18:40'),
(4,	2,	12,	'sick',	-10,	'2004-02-22 08:24:33'),
(5,	3,	12,	'impressed',	10,	'2004-02-22 08:24:39'),
(6,	5,	12,	'angry',	-20,	'2004-02-22 08:24:48'),
(7,	1,	11,	'heart',	20,	'2004-02-22 08:25:39'),
(8,	2,	11,	'heart',	20,	'2004-02-22 08:25:44'),
(9,	3,	11,	'heart',	20,	'2004-02-22 08:25:49'),
(10,	5,	11,	'heart',	20,	'2004-02-22 08:25:54'),
(11,	9,	12,	'heart',	20,	'2004-02-22 08:36:34'),
(12,	7,	12,	'sick',	-10,	'2004-02-22 08:55:03'),
(13,	13,	12,	'heart',	20,	'2004-02-22 10:54:52'),
(14,	22,	4,	'like',	5,	'2007-02-22 05:52:30'),
(15,	23,	4,	'heart',	20,	'2007-02-22 06:00:30'),
(16,	24,	16,	'impressed',	10,	'2008-02-22 10:13:33'),
(17,	25,	17,	'sad',	-5,	'2008-02-22 10:15:15'),
(18,	27,	19,	'sick',	-10,	'2008-02-22 10:16:48'),
(19,	28,	19,	'angry',	-20,	'2008-02-22 10:17:50'),
(20,	29,	20,	'sick',	-10,	'2008-02-22 10:19:09'),
(21,	27,	20,	'angry',	-20,	'2008-02-22 10:19:24'),
(22,	30,	20,	'laughing',	15,	'2022-02-08 19:04:16')
ON DUPLICATE KEY UPDATE `id` = VALUES(`id`), `comOfCom` = VALUES(`comOfCom`), `personne` = VALUES(`personne`), `reactionType` = VALUES(`reactionType`), `point` = VALUES(`point`), `date` = VALUES(`date`);

DROP TABLE IF EXISTS `ReactionPublication`;
CREATE TABLE `ReactionPublication` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `publication` int(11) NOT NULL,
  `personne` int(11) NOT NULL,
  `reactionType` varchar(30) NOT NULL,
  `point` int(11) NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `publication` (`publication`),
  KEY `reaction` (`personne`),
  CONSTRAINT `ReactionPublication_ibfk_1` FOREIGN KEY (`publication`) REFERENCES `Publication` (`id_publication`),
  CONSTRAINT `ReactionPublication_ibfk_2` FOREIGN KEY (`personne`) REFERENCES `Personne` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `ReactionPublication` (`id`, `publication`, `personne`, `reactionType`, `point`, `date`) VALUES
(1,	42,	12,	'heart',	20,	'2030-01-22 08:46:41'),
(19,	41,	12,	'angry',	-20,	'2030-01-22 09:48:46'),
(20,	40,	12,	'heart',	20,	'2030-01-22 12:05:21'),
(21,	39,	12,	'sick',	-10,	'2030-01-22 02:43:24'),
(22,	40,	11,	'heart',	20,	'2030-01-22 03:03:55'),
(23,	39,	11,	'angry',	-20,	'2030-01-22 03:04:09'),
(24,	42,	11,	'like',	5,	'2030-01-22 03:04:38'),
(25,	40,	10,	'impressed',	10,	'2030-01-22 03:07:00'),
(26,	38,	10,	'angry',	-20,	'2030-01-22 03:07:31'),
(27,	37,	12,	'angry',	-20,	'2030-01-22 04:01:15'),
(28,	30,	12,	'heart',	20,	'2030-01-22 06:25:03'),
(29,	42,	1,	'sick',	-10,	'2030-01-22 06:28:11'),
(30,	42,	2,	'like',	5,	'2030-01-22 06:28:42'),
(31,	41,	2,	'angry',	-20,	'2030-01-22 06:28:53'),
(32,	40,	2,	'heart',	20,	'2030-01-22 06:29:10'),
(33,	42,	3,	'like',	5,	'2030-01-22 06:29:57'),
(34,	42,	13,	'like',	5,	'2030-01-22 06:30:16'),
(35,	29,	12,	'sick',	-10,	'2030-01-22 08:05:47'),
(36,	43,	12,	'angry',	-20,	'2003-02-22 11:38:11'),
(37,	43,	1,	'heart',	20,	'2005-02-22 06:51:34'),
(38,	44,	1,	'heart',	20,	'2006-02-22 09:08:04'),
(39,	41,	1,	'heart',	20,	'2006-02-22 09:09:01'),
(40,	39,	1,	'heart',	20,	'2006-02-22 09:09:14'),
(41,	40,	1,	'heart',	20,	'2006-02-22 09:09:18'),
(42,	37,	1,	'heart',	20,	'2006-02-22 09:09:28'),
(43,	38,	1,	'heart',	20,	'2006-02-22 09:09:31'),
(44,	45,	1,	'sad',	-5,	'2006-02-22 09:12:24'),
(45,	45,	2,	'laughing',	15,	'2006-02-22 09:59:46'),
(46,	46,	2,	'sad',	-5,	'2006-02-22 10:01:02'),
(47,	46,	1,	'laughing',	15,	'2007-02-22 06:43:46'),
(48,	36,	1,	'sad',	-5,	'2007-02-22 07:01:55'),
(49,	35,	1,	'angry',	-20,	'2007-02-22 07:02:52'),
(50,	47,	1,	'heart',	20,	'2007-02-22 07:12:13'),
(51,	48,	1,	'heart',	20,	'2007-02-22 07:55:15'),
(52,	47,	3,	'like',	5,	'2007-02-22 09:38:59'),
(53,	48,	3,	'heart',	20,	'2007-02-22 09:49:52'),
(54,	51,	1,	'angry',	-20,	'2007-02-22 02:25:49'),
(55,	50,	1,	'heart',	20,	'2007-02-22 02:32:09'),
(56,	53,	1,	'impressed',	10,	'2008-02-22 09:27:26'),
(57,	54,	1,	'heart',	20,	'2008-02-22 09:27:31'),
(58,	52,	1,	'sad',	-5,	'2008-02-22 09:27:37'),
(59,	56,	14,	'heart',	20,	'2008-02-22 09:30:00'),
(60,	55,	14,	'heart',	20,	'2008-02-22 09:30:03'),
(61,	54,	14,	'angry',	-20,	'2008-02-22 09:51:27'),
(62,	57,	20,	'sick',	-10,	'2022-02-08 18:59:59'),
(63,	40,	20,	'laughing',	15,	'2022-02-09 11:18:04'),
(64,	60,	20,	'heart',	20,	'2022-02-09 18:55:18')
ON DUPLICATE KEY UPDATE `id` = VALUES(`id`), `publication` = VALUES(`publication`), `personne` = VALUES(`personne`), `reactionType` = VALUES(`reactionType`), `point` = VALUES(`point`), `date` = VALUES(`date`);

DROP TABLE IF EXISTS `userStat`;
CREATE TABLE `userStat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `personne` int(11) NOT NULL,
  `type` varchar(100) NOT NULL,
  `point` int(11) NOT NULL DEFAULT 0,
  `number_published` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `userStat` (`id`, `personne`, `type`, `point`, `number_published`) VALUES
(1,	1,	'Football',	45,	3),
(2,	3,	'Football',	40,	3),
(3,	3,	'Philosophy',	-35,	2),
(4,	1,	'Philosophy',	0,	1),
(5,	4,	'Football',	25,	6),
(6,	14,	'Football',	5,	3),
(7,	14,	'Beauty',	40,	2),
(8,	2,	'Beauty',	5,	1),
(9,	15,	'Football',	10,	1),
(10,	16,	'Football',	-5,	1),
(11,	17,	'Football',	0,	1),
(12,	18,	'Football',	-30,	1),
(13,	19,	'Football',	-20,	1),
(14,	20,	'Football',	5,	7),
(15,	12,	'Football',	15,	0)
ON DUPLICATE KEY UPDATE `id` = VALUES(`id`), `personne` = VALUES(`personne`), `type` = VALUES(`type`), `point` = VALUES(`point`), `number_published` = VALUES(`number_published`);

-- 2022-02-09 20:38:23
