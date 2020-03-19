#!/bin/sh
# Fix the timestamp
# https://stackoverflow.com/questions/21735435/git-clone-changes-file-modification-time
# https://gist.github.com/HackingGate/9e8169c7645b074b2f40c959ca20d738



mkdir -p _tmp
mkdir -p _jekyllHome
docker run --rm -it \
  --volume="$PWD/docs:/srv/jekyll" \
  --volume="$PWD/_tmp:/tmp" \
  --volume="$PWD/_jekyllHome:/home/jekyll" \
  --volume="$PWD/vendor/bundle:/usr/local/bundle" \
  -p 4321:4321 jekyll/jekyll:3.8.5 \
  /bin/bash -c "bundle install && jekyll serve --trace --port 4321 --host 0.0.0.0"
