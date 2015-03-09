<?php
/**
 * Baskonfiguration för WordPress.
 *
 * Denna fil innehåller följande konfigurationer: Inställningar för MySQL,
 * Tabellprefix, Säkerhetsnycklar, WordPress-språk, och ABSPATH.
 * Mer information på {@link http://codex.wordpress.org/Editing_wp-config.php 
 * Editing wp-config.php}. MySQL-uppgifter får du från ditt webbhotell.
 *
 * Denna fil används av wp-config.php-genereringsskript under installationen.
 * Du behöver inte använda webbplatsen, du kan kopiera denna fil direkt till
 * "wp-config.php" och fylla i värdena.
 *
 * @package WordPress
 */

// ** MySQL-inställningar - MySQL-uppgifter får du från ditt webbhotell ** //
/** Namnet på databasen du vill använda för WordPress */
define('DB_NAME', 'wu14-sellforce');

/** MySQL-databasens användarnamn */
define('DB_USER', 'root');

/** MySQL-databasens lösenord */
define('DB_PASSWORD', 'mysql');

/** MySQL-server */
define('DB_HOST', 'localhost');

/** Teckenkodning för tabellerna i databasen. */
define('DB_CHARSET', 'utf8');

/** Kollationeringstyp för databasen. Ändra inte om du är osäker. */
define('DB_COLLATE', '');

/**#@+
 * Unika autentiseringsnycklar och salter.
 *
 * Ändra dessa till unika fraser!
 * Du kan generera nycklar med {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * Du kan när som helst ändra dessa nycklar för att göra aktiva cookies obrukbara, vilket tvingar alla användare att logga in på nytt.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'B6y9:CNB8&OHnJ!(.R$*/.K{z1.BJRv$8*|t8XNi&/+F/OX!s[9?t+/sUT)4ZZR)');
define('SECURE_AUTH_KEY',  'aKVyW=G14b<u0Rz3PuA|Nugiz{Lrl *NY&fI`?*$#ctxLdm::j{+25X~;}y/.&Fz');
define('LOGGED_IN_KEY',    'nFPK<N7-n$BHcz2?^Z0dm*IGw-fG(^E/bU! kkdI`a4?*+FH~:d4I5i0ZR4Nb}!8');
define('NONCE_KEY',        '2.J#k|dyLs_GmX<xI8<EAtna9Y|{XfunKgH*`)Si.sM%+N:-N-9%M-zm*c>BjYmb');
define('AUTH_SALT',        '-I8,*Sis4SX+]@}LuvjQZ`h~$Yj[Xml{_bT<Rjce!BZQJF|3;lPcSO>~IK:n2r/(');
define('SECURE_AUTH_SALT', '4=|l-+Hc&G/j3*s>Dfh+1f*2_Z_wq4zK#-+Ng}u:of4w-lkf$i8jiK/z#agrzS0*');
define('LOGGED_IN_SALT',   ' R)3.qggre-.:ujn-#Y*|8/Eu2Z7&IqY)$1QBn-p(]woW2iI>%}=_*$dR8uA~z]3');
define('NONCE_SALT',       '+3RH]ndT#Q5GHJ4UIa<J%XvHU%%.S8/P|.+a0dAmf8$<(>Y-JZP|r<f@j,)UmkAR');

/**#@-*/

/**
 * Tabellprefix för WordPress Databasen.
 *
 * Du kan ha flera installationer i samma databas om du ger varje installation ett unikt
 * prefix. Endast siffror, bokstäver och understreck!
 */
$table_prefix  = 'wp_';

/** 
 * För utvecklare: WordPress felsökningsläge. 
 * 
 * Ändra detta till true för att aktivera meddelanden under utveckling. 
 * Det är rekommderat att man som tilläggsskapare och temaskapare använder WP_DEBUG 
 * i sin utvecklingsmiljö. 
 */ 
define('WP_DEBUG', false);

/* Det var allt, sluta redigera här! Blogga på. */

/** Absoluta sökväg till WordPress-katalogen. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Anger WordPress-värden och inkluderade filer. */
require_once(ABSPATH . 'wp-settings.php');