# Rapport QA — Intelligent Operations

Date : 8 septembre 2026

## Correctif ultérieur — cartes, crew et certification

La version corrigée rétablit les formes arrondies, ajoute les chiffres de contexte et remplace la présentation du fondateur par celle du crew. TypeScript, ESLint, build de production et **11/11 tests** passent. Six routes et le badge répondent en HTTP 200 ; l’accueil et À propos rendent le crew et la certification, sans nom de dirigeant ni erreur SSR. Le badge intégré est identique à l’original fourni (SHA-256 identique).

Le serveur local a été relancé pour vider une erreur de résolution conservée pendant la création des nouveaux composants. Aucun changement de stack ni déploiement.

Les captures et mesures de navigateur ci-dessous concernent la version précédente ; elles n’ont pas été relancées pour ce correctif. Voir `DA_CREW_CREDENTIALS.md` pour les décisions et fichiers concernés.

## Contrôles techniques

| Contrôle | Résultat |
| --- | --- |
| TypeScript | réussi |
| ESLint | réussi |
| Build de production | réussi |
| Tests de gouvernance éditoriale | 9/9 réussis |
| QA navigateur | réussie |

Le build conserve le preset Cloudflare existant. L’avertissement Vite sur `vite-tsconfig-paths` est informatif et antérieur à cette mise à jour de contenu.

## QA navigateur

- 1 `h1` et 1 `main` sur chaque page contrôlée ;
- aucune image sans texte alternatif ;
- aucun lien vide ni contrôle de formulaire sans label ;
- aucune animation résiduelle avec `prefers-reduced-motion` ;
- aucun débordement horizontal à 1440, 820 et 390 px ;
- sélection des trois exemples à la souris et au clavier ;
- ouverture exclusive des récits de cas d’usage ;
- données structurées Organization présentes ;
- anciennes routes de capabilities redirigées vers `/methode`.

Dimensions de la homepage :

| Vue | Largeur | Hauteur | Débordement |
| --- | ---: | ---: | --- |
| desktop | 1440 px | 3217 px | aucun |
| tablette | 820 px | 3511 px | aucun |
| mobile | 390 px | 4785 px | aucun |

L’accueil est regroupé en sept séquences. Le modèle est expliqué par des exemples opérationnels ; les récits complets restent dans les pages de détail. Voir `UX_COMPOSITION.md` pour le diagnostic et la nouvelle hiérarchie.

## Gouvernance de contenu

Les tests vérifient notamment :

- la centralisation du nom de marque ;
- la présence du nouveau positionnement, de la thèse et des deux modèles ;
- l’absence des anciennes promesses publiques ;
- la non-publication des métriques QBR sous gate ;
- les statuts explicites des preuves ;
- la structure en six étapes des cas d’usage ;
- la convergence des anciennes routes de services.

## Restant avant publication

Les décisions de domaine, d’hébergement, de destination du formulaire, de mentions légales et de levée des gates de preuve restent listées dans `TODO_PUBLICATION.md`.
