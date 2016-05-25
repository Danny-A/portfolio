<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return array(

    '*' => array(
        // ...
    ),

    'http://dev.dannyarntz.nl' => array(
        // ...

        'environmentVariables' => array(
            'baseUrl'  => 'http://dev.dannyarntz.nl',
        )
    ),

    'http://www.dannyarntz.nl' => array(
        // ...

        'environmentVariables' => array(
            'baseUrl'  => 'http://www.dannyarntz.nl',
        )
    )
);
