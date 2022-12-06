# System Requirements
* PHP: 8
* Laravel: 9
* Vue: 2.7.14
* OS: macos, linux
* Docker

# Getting started

## Installation
Clone the repository

    git clone git@github.com:hakibackend/haki.git

Switch to the repo folder

    cd haki

Copy the example env file and make the required configuration changes in the .env file

    cp .env.example .env

Modify hosts file

    127.0.0.1 haki.loc

## Docker
    
    docker-compose build
    docker-compose up -d
    docker-compose exec app composer install
    docker-compose exec app php artisan migrate
    docker-compose exec app php artisan db:seed

# Frontend
- `yarn install`
- `yarn watch`
- `yarn prod`

### Deployment

### Check CI
    docker compose exec app bash
    ./vendor/bin/phpcs or composer-check
    ./vendor/bin/phpcbf or composer-fix
    ./vendor/bin/phpstan analyse --memory-limit=2G or composer analyse
    ./vendor/bin/phpunit