<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */

return array(
	'*' => array(
		// The database server name or IP address. Usually this is 'localhost' or '127.0.0.1'.
		'server' => 'localhost',

		// The name of the database to select.
		'database' => 'dannya1q_craft_prod',

		// The database username to connect with.
		'user' => 'dannya1q_live',

		// The database password to connect with.
		'password' => '3110d3sign&Crime',

		// The prefix to use when naming tables. This can be no more than 5 characters.
		'tablePrefix' => 'craft',
	),

	'.dev' => array(
		// The database server name or IP address. Usually this is 'localhost' or '127.0.0.1'.
		'server' => 'localhost',

		// The name of the database to select.
		'database' => 'portfolio',

		// The database username to connect with.
		'user' => 'root',

		// The database password to connect with.
		'password' => '',

		// The prefix to use when naming tables. This can be no more than 5 characters.
		'tablePrefix' => 'craft',

	)

);
