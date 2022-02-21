# !/bin/sh

find $(pwd)/* ! \( \
  -type d -name 'build' -prune -o \
  -type d -name 'node_modules' -prune -o \
  -type d -name 'src' -prune -o \
  -type d -name 'tests' -prune -o \
  -type f -name '.gitignore' -prune -o \
  -type f -name 'deploy-clean.sh' -prune -o \
  -type f -name 'deploy.sh' -prune -o \
  -type f -name 'docker-compose.yml' -prune -o \
  -type f -name 'LICENSE' -prune -o \
  -type f -name 'package-lock.json' -prune -o \
  -type f -name 'package.json' -prune -o \
  -type f -name 'preact.config.js' -prune -o \
  -type f -name 'prerender-urls.js' -prune -o \
  -type f -name 'README.md' -prune -o \
  -type f -name 'size-plugin.json' -prune \) -prune -exec rm -rf {} +

cat <<EOF 

Restoring to common files original list.

------------------
| Clean-up Done! |
------------------

EOF
