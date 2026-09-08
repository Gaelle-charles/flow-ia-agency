# Rapport d’implémentation — Intelligent Operations

Date : 8 septembre 2026

Mise à jour UX : les principes ci-dessous sont maintenant regroupés en sept séquences sur l’accueil, avec des exemples opérationnels sélectionnables et une preuve plus proche du début de la page. La composition actuelle est documentée dans `UX_COMPOSITION.md`.

## Résultat

Le site ne présente plus Sway Ops comme une agence IA, une juxtaposition de services ou une équipe à mobiliser. La proposition est désormais la conception de systèmes opérationnels intelligents.

## Décisions éditoriales

- catégorie : **Systèmes opérationnels intelligents** ;
- promesse : **From disconnected tools to intelligent operations** ;
- thèse : **AI is only as useful as the operation it can act on** ;
- modèle d’expertise : **Context → Execution → Intelligence** ;
- capabilities : CRM, Automation et Agentic Systems comme couches d’un même système ;
- delivery : **Embed → Build → Run** ;
- équipe : builders seniors et complémentaires, présentés comme un asset de delivery ;
- cas : **Before → Context → Execution → Intelligence → Human Control → Outcome** ;
- CTA : discussion d’un problème opérationnel ou d’un workflow.

## Structure de la homepage

1. problème ;
2. thèse ;
3. expertise ;
4. modèle ;
5. capabilities ;
6. delivery ;
7. différence ;
8. preuve ;
9. builders ;
10. CTA.

## UX

La palette et les composants structurants ont été conservés. Newsreader remplace Archivo sur les grands titres, tandis qu’Archivo reste fonctionnel. Trois photographies documentaires montrent désormais les personnes, les preuves et les moments de contrôle à la place des objets 3D abstraits. La preuve de l’accueil reste volontairement abrégée ; le récit complet est réservé à la page Réalisations.

## Routes

- `/`, `/realisations`, `/cas-usage`, `/methode`, `/a-propos`, `/contact` et `/journal` sont alignées ;
- les anciennes routes `/services/crm`, `/services/automatisation` et `/services/agentic` redirigent vers `/methode` ;
- les routes légales et la logique du formulaire sont conservées.

## Gouvernance

Les statuts des preuves, les gates de publication, la confidentialité des métriques QBR et le contrôle humain restent inchangés. Aucun résultat ou client n’a été inventé.

Voir `STRATEGIC_POSITIONING_AUDIT.md` pour la correspondance entre l’ancien wording et le nouveau scaffold.
