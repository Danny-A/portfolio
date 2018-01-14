<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

define('URI_SCHEME', (isset($_SERVER['HTTPS'])) ? "https://" : "http://");
define('SITE_URL', URI_SCHEME . $_SERVER['SERVER_NAME']);

return array(

  '*' => array(
    'siteUrl' => SITE_URL,
    'overridePhpSessionLocation' => false,
    'useSecureCookies' => true,
    'defaultWeekStartDay' => 1,
    'enableCsrfProtection' => true,
    'omitScriptNameInUrls' => true,
    'addTrailingSlashesToUrls'=> false,
    'sendPoweredByHeader' => false,
    'cpTrigger' => 'admin',
    'environmentVariables' => array(
      'baseUrl' => SITE_URL,
      'basePath' => '/public_html',
    ),
  ),

  '.dev' => array(
    'devMode' => true,
    'environmentVariables' => array(
      'baseUrl' => SITE_URL,
    ),
  )
);
