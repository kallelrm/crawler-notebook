#!/bin/sh
set -e           # Stop on any error
npx sequelize db:migrate  # Run migrations
exec "$@"        # Run the command as the main container process
