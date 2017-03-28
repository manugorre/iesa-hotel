#!/bin/bash

ssh -v circleci@45.55.167.35 << EOF

echo '1. Updating sources'
cd /var/www/lokisalle.xyz
mkdir michelrodriguez

#echo "2. Restart apache"
#sudo apache2ctl graceful

echo 'Done!'

EOF
