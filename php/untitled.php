<?php
if (ini_get('safe_mode')) {
    echo "safe mode on";
} else {
	echo "safe mode off";
}

var_dump(ini_get('safe_mode'));