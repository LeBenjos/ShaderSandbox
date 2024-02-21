# SanderSandbox Backend

Bienvenue sur l'API de [ShaderSandbox](https://github.com/LeBenjos/ShaderSandbox).  
C'est une API Node utilisant Express et Kysely. Le code a été réalisé en Typescript. L'application est reliée à une base de données PostgreSQL hébergée sur [ElephantSQL](https://www.elephantsql.com/).

L'application est déployé sur [Vercel](https://shader-sandbox-iota.vercel.app/) et utilisé via un [frontend](../frontend/README.md).

## Technologies :

### Backend :
![backend](https://skillicons.dev/icons?i=nodejs,express)

### Base de données :
![database](https://skillicons.dev/icons?i=postgres)


## Routes

```ts
// Données attendues :

"createShader" : {
    "title": string,
    "password": string,
    "image_url": string,
    "author": string,
    "setting": {
        "s1": number,
        "s2": number,
        "s3": number
    }
}

"updateShader" : {
    "title": string,
    "password": string,
    "image_url": string,
    "author": string,
    "setting": {
        "s1": number,
        "s2": number,
        "s3": number
    }
}

"password" : string

// Données retournées :
Shader: {
    _id: number,
    _password: string,
    _title: string,
    _image_url: string, 
    _author: string,
    _setting: Setting | null
}

Setting: {
    _s1 : number,
    _s2 : number,
    _s3 : number,
}
```

| Routes | Méthode | Données attendues | Données retournées | Explication |
| --- | --- | --- | --- | --- |
| `/shaders` | GET | --- | `Shaders[]` | Récupérer tout les shaders |
| `/shaders` | POST | `createShader` | `id: number` | Poster un shader |
| `/shaders/:id` | GET | --- | `Shader` | Récupérer un shader via son `id` |
| `/shaders/:id` | PUT | `updateShader` | `boolean` | Mettre à jour les données d'un shader via son `id` |
| `/shaders/:id` | DELETE | `password` | `boolean` | Supprimer un shader via son `id` |
| `/shaders/:id/pdf` | GET | --- | `PDF` | Récupérer le PDF d'un shader via son `id` |

## Crédits

[LeBenjos](https://github.com/LeBenjos) 