# Audit initial de la vitrine

Date : 6 septembre 2026

Branche de travail : `codex/sway-ops-rebuild`

Commit de départ : `342a60d`

## Périmètre inspecté

- dépôt `flow-ia-agency` ;
- brand kit situé dans `../SWAY_OPS_BRAND_KIT_V2/sway_ops_brand_kit_v2` ;
- routes, composants, design tokens, dépendances et scripts ;
- formulaire, métadonnées, assets, contenus publics et claims ;
- état Git et qualité initiale ;
- rendu initial desktop et mobile.

Le brand kit et tous les fichiers structurés demandés ont été lus intégralement avant la première modification du produit.

## Stack conservée

- TanStack Start 1.168.32 ;
- TanStack Router 1.170.18 ;
- React 19.2 ;
- Vite 8.1.5 ;
- Tailwind CSS 4.2 ;
- TypeScript 5.8 en mode strict ;
- Radix UI et composants shadcn existants ;
- Lucide React ;
- Nitro avec cible Cloudflare fournie par la configuration Lovable.

Le dépôt contient `bun.lock`, mais Bun n'est pas installé dans l'environnement. Node 24.12.0 et npm 11.8.0 sont utilisés sans changer de stack ni de lockfile.

## État Git initial

Le dépôt était déjà modifié avant cette refonte.

Fichiers suivis modifiés :

- `src/components/ServicePage.tsx` ;
- `src/routes/__root.tsx` ;
- `src/routes/index.tsx` ;
- `src/styles.css`.

Fichiers non suivis présents :

- `src/components/SiteChrome.tsx` ;
- `public/favicon.svg` ;
- `public/og.png`.

Ces travaux existants sont conservés comme point de départ. Aucun reset, rebase, amend ou réécriture d'historique n'a été effectué. Le dépôt étant relié à Lovable, les consignes de `AGENTS.md` sont respectées.

## Architecture initiale

Routes publiques :

- `/` ;
- `/services/agentic` ;
- `/services/automatisation` ;
- `/services/crm`.

La page d'accueil est monolithique et comporte principalement les expertises, des objectifs illustratifs, une méthode courte et un formulaire `mailto:`.

Le fichier `src/routeTree.gen.ts` est généré automatiquement et ne doit pas être modifié manuellement.

## Direction visuelle initiale

Éléments à conserver :

- palette noire, ivoire et vert signal ;
- Archivo ;
- grands espaces ;
- cadres arrondis ;
- focus visibles ;
- prise en charge de `prefers-reduced-motion`.

Éléments à professionnaliser :

- presque tous les titres sont en capitales ;
- de nombreux labels utilisent une taille inférieure à 12 px ;
- le vert est utilisé comme grande surface plutôt que comme signal ;
- le motif actuel reste décoratif et n'explique pas le fonctionnement d'un système ;
- le rendu mobile initial présente un débordement horizontal visible ;
- le faux aperçu de pipeline ressemble à une interface produit sans preuve.

## Contenus à remplacer

Les occurrences publiques suivantes ont été identifiées :

- `FLOW` ;
- `Agence IA` ;
- `Agentic` comme offre principale ;
- agents autonomes et exécution 24/7 ;
- `Zéro ressaisie` ;
- CRM prédictif ;
- métriques illustratives `85 %`, `20 h` et `2 min` ;
- scénarios chiffrés non sourcés dans les trois routes de services ;
- `hello@flow.agency` ;
- métadonnées et image sociale associées à `flow.agency`.

Les anciennes routes de services ne seront pas laissées avec ces promesses. Elles seront remplacées ou redirigées de manière explicite, puis documentées dans le rapport d'implémentation.

## Claims et publication

Le registre `content/claims-register.json` prévaut sur le copywriting général.

### Publiable

- existence juridique d'OptiQuant IA dans le footer, la page À propos et les mentions légales ;
- description publique de The Pricing Library sans métrique d'usage ;
- parcours professionnel de Dorian en texte, sans logo ni statut de client ;
- Gen Lead uniquement dans le journal d'ingénierie, avec son statut et ses limites.

### Bloqué par une gate de publication

- les quatre métriques QBR, gate `contract_review_and_anonymization` ;
- AlphaLens, gate `founder_status_confirmation` ;
- Le Bon Rebond, gate `legal_relationship_review` ;
- Export-to-Insight, absent du registre de claims.

Les métriques QBR ne seront pas rendues dans la version publique tant que la gate reste fermée. Elles seront consignées dans `TODO_PUBLICATION.md`. La preuve principale peut rester anonymisée, sans chiffres, avec la mention que les résultats de recette interne ne constituent pas un ROI financier.

## Formulaire initial

Le formulaire actuel ouvre un message vers `hello@flow.agency` avec `mailto:`. Il ne possède :

- aucune soumission serveur ;
- aucune validation serveur ;
- aucun état de chargement ;
- aucune confirmation réelle ;
- aucune protection anti-spam ;
- aucun avertissement sur les données sensibles ;
- aucune intégration ou variable d'environnement existante.

La nouvelle version utilisera une fonction serveur et une destination configurable. Sans destination configurée, elle retournera une erreur explicite et ne simulera jamais un succès.

## SEO, accessibilité et légal

Éléments présents :

- langue française ;
- lien d'évitement ;
- focus visibles sur les principaux contrôles ;
- `robots.txt` ;
- gestion de la réduction des animations.

Éléments manquants ou obsolètes :

- titres et descriptions liés à l'ancien positionnement ;
- aucune donnée structurée ;
- aucune page de mentions légales ;
- aucune politique de confidentialité ;
- aucune mention d'OptiQuant IA ou du SIREN ;
- statut provisoire du nom absent ;
- image sociale et favicon encore associés à FLOW.

Aucun traceur analytics ou marketing n'a été détecté.

## Qualité initiale

Le serveur de développement répond sur la page d'accueil avec un statut HTTP 200.

Le lint initial échoue avec 4 972 problèmes, dont 4 966 erreurs. La majorité provient d'un conflit de fins de ligne entre CRLF et la règle Prettier. Aucun script de test ou de typecheck dédié n'existe dans le dépôt initial.

La stratégie retenue consiste à éviter une réécriture mécanique du catalogue UI, à corriger la configuration de fins de ligne, puis à traiter les erreurs réelles introduites ou conservées dans le code produit.

## Captures initiales

- [Accueil desktop](screenshots/initial/home-desktop.png)
- [Accueil mobile](screenshots/initial/home-mobile.png)

Ces captures servent de référence avant refonte. Elles ne constituent pas des assets publics du site.

## Décision de conception

Thèse visuelle : **un système lisible du déclencheur jusqu'à la trace**.

Le site conservera son contraste et son énergie, mais les effets décoratifs seront remplacés par un langage de lignes, de nœuds et de statuts. Les interfaces absentes ne seront pas inventées. La page montrera des schémas abstraits identifiés comme tels et utilisera uniquement les produits dont la publication est autorisée.
