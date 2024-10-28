# ShaderSandbox

Bienvenue sur ShaderSandbox, un projet réalisé pendant une période de 4 jours dans le cadre de deux projets à HETIC.

**Les consignes étaient les suivantes :**
- Création d'un CRUD en Typescript ✅
- Création d'une API qui génère un fichier PDF, puis création d'une application Frontend qui consomme cette API. ✅
- Intégration d'une base de données ✅
- Dockerisation de l'application ✅
- Déploiement continu de l'application ✅

L'application web permet de générer des shaders utilisant un bruit de perlin et de les enregistrer.

## Technologies :

### Global :
![global](https://skillicons.dev/icons?i=docker,github,git,typescript,vercel)

### [Frontend](./frontend/README.md) :
![frontend](https://skillicons.dev/icons?i=vite,react,threejs,sass)

### [Backend](./backend/README.md) :
![backend](https://skillicons.dev/icons?i=nodejs,express)

### Base de données :
![database](https://skillicons.dev/icons?i=postgres,supabase)

## Déploiement :
**Frontend :** https://shader-sandbox-frontend.vercel.app/  
**Backend :** https://shader-sandbox-backend-5cjutoyzo-lebenjos-projects.vercel.app/

## Initialisation de l'application en local avec Docker

1. **Cloner le repository :**
```bash
git clone https://github.com/LeBenjos/ShaderSandbox.git
```

2. **Créer un fichier `.env` dans le dossier `backend` :**
```bash
CLIENT_ORIGIN=http://localhost:5173

DB_HOST=database
DB_NAME=shader_sandbox
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
```

3. **Créer un fichier `.env` dans le dossier `frontend` :**
```bash
VITE_PUBLIC_API_URL=http://localhost:3000/shaders/
VITE_PUBLIC_FRONTEND_URL=http://localhost:5173/sandbox/
```

4. **Ouvrer votre application Docker.**

5. **Ouvrer un terminal et naviguer jusqu'à la racine du projet.**

6. **Insérer la commande pour générer les images et lancer les conteneurs en local :**
```bash
Docker compose up
```

7. **Explorez ShaderSandbox!**
    - Lien du Backend : http://localhost:3000/
    - Lien du Frontend : http://localhost:5173/

## Devlog

### Mardi - 13/02/2024
- Création de la maquette sur Figma.

### Samedi - 17/02/2024
- Initialisation du projet.
- CI/CD frontend.
- Makefile.
- Dockerisation du Frontend / Backend & de la base de données.

### Dimanche - 18/02/2024
- Backend : Mise en place des routes, CRUD.

### Lundi - 19/02/2024
- Frontend : Page d'accueil, bibliothèque, CRUD lié à l'API.

### Mardi - 20/02/2024
- Gestion des erreurs.
- Envoi de l'image courante du shader à la base de données.
- Génération du PDF.
- CI/CD backend.

### Mercredi - 21/02/2024
- Documentation.  

---

### Mise à jour - 28/10/2024
- Migration de la database de ElephantSQL 🪦 vers Supabase.
- Migration des données.

### TODO - XX/XX/20XX
- Migration du back et du front de Vercel vers un serveur en FTP.
- Reconfiguration du CI/CD avec les nouveaux services.

## Crédits

[LeBenjos](https://github.com/LeBenjos)