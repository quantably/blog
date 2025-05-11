#!/bin/bash
set -e
set -x

npx gatsby build

npx gatsby serve &
SERVER_PID=$!

# Wait for the server to start (up to 60 seconds)
for i in {1..60}; do
  if nc -z localhost 9000; then
    echo "Gatsby server is up!"
    break
  fi
  sleep 1
done

if ! nc -z localhost 9000; then
  echo "Gatsby server did not start in time. Exiting."
  kill $SERVER_PID
  exit 1
fi

node src/scripts/generate-social-cards.js

kill $SERVER_PID

echo "Social cards generated and Gatsby server stopped."