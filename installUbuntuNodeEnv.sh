#!/bin/bash

# Установка NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

# Загрузка NVM в текущую сессию
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Установка последней версии Node.js
nvm install node

# Установка PM2
npm install pm2@latest -g

# Проверка установок
echo "NVM version: $(nvm --version)"
echo "Node.js version: $(node --version)"
echo "npm version: $(npm --version)"
echo "PM2 version: $(pm2 --version)"
