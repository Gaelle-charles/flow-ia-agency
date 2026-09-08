# Composition et densité — 8 septembre 2026

> Historique : la suppression des contours décrite ci-dessous a été refusée par le propriétaire. Elle est remplacée par la correction documentée dans `DA_CREW_CREDENTIALS.md`. Les mesures et contrôles ci-dessous concernent uniquement la version précédente, pas la version corrigée.

## Diagnostic

L’accueil multipliait les sections conceptuelles avant la preuve. Le même modèle était expliqué deux fois : d’abord avec les trois couches, puis dans les cartes de capabilities. Les blocs arrondis et les marges intérieures successives concentraient le texte dans des colonnes étroites.

La page Cas d’usage ajoutait une grille à deux colonnes autour de cartes elles-mêmes divisées en deux colonnes. Le visiteur devait lire six récits complets en parallèle.

## Changements

- Accueil en sept séquences : introduction, exemples opérationnels, réalisation, delivery, builders, questions, contact.
- Trois exemples sélectionnables : demande client, reporting, décision métier. Le visiteur peut suivre Context → Execution → Intelligence, le résultat visé et le contrôle humain.
- Capabilities et modèle présentés ensemble ; thèse conservée dans la même séquence.
- Réalisation QBR remontée après les exemples, avec comparaison avant/système construit.
- Une image conservée au niveau du delivery, explicitement illustrative. Les autres assets sont préservés sur disque.
- Suppression des grands cadres imbriqués sur l’accueil, les introductions, les offres, les réalisations et la présentation du fondateur.
- Cas d’usage présentés comme six lignes dépliables. Un seul récit est développé à la fois.
- Navigation tablette corrigée : accès au menu entre 640 et 1023 px.

## Vérifications

| Accueil | Avant | Après |
| --- | ---: | ---: |
| Desktop, 1440 px | 5134 px | 3217 px |
| Mobile, 390 px | 9083 px | 4785 px |

La version tablette est également contrôlée à 820 px. Aucun débordement horizontal détecté. Les trois exemples changent à la souris et au clavier ; chaque scénario conserve les trois couches et le contrôle humain. Les disclosures des cas d’usage conservent un seul panneau ouvert.

Les pages Réalisations, Approche et À propos ont été inspectées à 1440 et 390 px. Typecheck, lint, build et les neuf tests existants de gouvernance réussissent. Les statuts et restrictions de publication des preuves sont conservés.

Fichiers centraux : `src/routes/index.tsx`, `src/styles.css`, `src/components/site/OperationWalkthrough.tsx`, `src/content/operation-examples.ts`, composants de présentation partagés et `scripts/browser-qa.mjs`.
