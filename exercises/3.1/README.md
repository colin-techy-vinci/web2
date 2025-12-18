| URI | Méthode HTTP | Auths? | Opération |
|---|---|---|---|
| **`films`** | GET | Non | READ ALL : Lire toutes les ressources de la collection |
| **`films/:id`** | GET | Non | READ ALL : Lire une ressource de la collection |
| **`films`** | POST | Oui | CREATE ONE : Créer une ressource de la collection basée sur un body au format `{title: string; director: string;  duration: number;  budget?: number;  description?: string;  imageUrl?: string;  }` |
| **`films/:id`** | PATCH | Oui | UPDATE ONE : Mettre à jour une ressource de la collection basée sur l'id de celle-ci|
| **`films/:id`** | DELETE | Oui | DELETE ONE : Supprimer une ressource de la collection basée sur l'id de celle-ci|
| **`comments`** | GET | JWT | READ ALL FILTERED : Lire toutes les ressources de la collection |
| **`comments`** | POST | JWT | CREATE ONE : Créer une ressource basée sur un body au format `{...}` |
| **`comments/:id`** | DELETE | JWT | DELETE ONE : Supprimer une ressource basée sur l'id de celle-ci |
| **`comments/:id`** | PATCH | JWT | UPDATE ONE : Mettre à jour une ressource basée sur l'id de celle-ci |