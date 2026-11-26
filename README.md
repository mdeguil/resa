# Résa

Application web de réservation des salles du campus.

## Prérequis

- Git
- Docker + Compose v2
- Node.js 26 (pour les hooks Git du Lab 2 et pour développer hors conteneur)
- PostgreSQL 17 : fourni par Docker (image `postgres:17-alpine`), rien à installer

## Démarrer en 3 commandes

```bash
git clone https://github.com/PROPRIETAIRE/resa.git
cd resa
cp .env.example .env
docker compose up --build
```

## Développer sans reconstruire l'image

```bash
nvm use
npm ci
docker compose up -d db
npm run dev
```

## Dépannage

- **Port déjà utilisé** : changer `PORT` ou `PGPORT` dans `.env`.
- **Réinitialiser la base** : `docker compose down -v` (`init.sql` ne s'exécute que sur un volume vide).
- **Linux : `permission denied` sur Docker** : `sudo usermod -aG docker $USER`, puis se déconnecter et se reconnecter.

## Équipe
Enzo (@LOGIN)
