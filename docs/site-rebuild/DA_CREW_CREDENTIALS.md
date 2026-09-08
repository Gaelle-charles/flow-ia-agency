# Correction DA, crew et crédibilité — 8 septembre 2026

## Correspondance constatée avant modification

| Élément existant | Décision |
| --- | --- |
| Navbar droite, introductions ouvertes, cartes remplacées par des lignes | Contradictoire avec la DA souhaitée : rétablir capsule et contours arrondis. |
| Textes plus courts, exemples à onglets, cas d’usage dépliables | Compatible : conserver l’allègement et la lecture progressive. |
| « Est dirigé par », titre de fondateur, CTA Dorian, schema `founder` | Contradictoire : remplacer par le modèle AI crew ; retirer le leadership nominatif. |
| Nom en direction de publication | Conserver séparément dans `legal.config.json`, uniquement pour les mentions légales existantes. |
| Context → Execution → Intelligence ; Embed → Build → Run | Compatible : conserver comme expertise et delivery, pas comme catalogue de profils. |
| Certification fournie par le propriétaire | Intégrer le badge original, préciser son caractère individuel. |
| Résultats QBR soumis à autorisation | Conserver les restrictions ; utiliser des études externes pour chiffrer la thèse. |

## Modification des surfaces

Navbar en capsule ; coque et introductions arrondies ; cartes d’accueil, offres, projets, réalisation et cas d’usage à nouveau arrondies. Les boutons retrouvent leur forme de pilule. Palette, typographies, stack et interactions existantes conservées. Les détails restent progressifs ; pas de retour aux six longs récits simultanés ni aux mini-logos décoratifs.

## Crew et certification

`FounderSection` est remplacé par `CrewSection`. Le nom et la fonction de dirigeant quittent l’accueil, À propos, le contenu de marque et le schema Organization. Les mentions légales existantes restent séparées.

Badge fourni : `C:/Users/Labry/Downloads/claude-certified-developer-foundations.png`, copié sans retouche dans `public/images/credentials/`. Le propriétaire déclare avoir obtenu cette certification. Le site reprend le titre exact du badge et sa portée individuelle, sans affirmer une certification collective, un partenariat ou un agrément Anthropic. Pas de faux lien de vérification. Badge visible dans la section crew de l’accueil et sur À propos ; renvoi textuel depuis le hero.

## Chiffres de contexte

Sources primaires vérifiées le 8 septembre 2026. Registre : `src/content/operational-evidence.json`.

- 62 % : difficulté déclarée liée au temps passé à chercher l’information. [Microsoft WTI 2023](https://www.microsoft.com/en-us/worklab/work-trend-index/will-ai-fix-work), 31 000 actifs à temps plein / 31 marchés.
- 95 % : difficultés à intégrer les données entre systèmes.
- 80 % : intégration des données citée comme obstacle majeur à l’adoption de l’IA.

Les deux derniers chiffres proviennent du [Connectivity Benchmark 2025, communiqué MuleSoft / Salesforce](https://www.salesforce.com/news/stories/connectivity-report-announcement-2025/) : 1 050 responsables IT dans des organisations d’au moins 1 000 salariés, neuf pays ; collecte octobre–novembre 2024. Ne pas extrapoler à toutes les PME. Les trois chiffres ne s’additionnent pas et ne constituent pas une promesse de performance.

La [référence Growth Wave](https://www.growth-wave.agency/) inspire uniquement la lecture rapide par chiffres ; aucun de ses résultats commerciaux n’est attribué au crew. Chaque carte lie sa source ; un détail consultable expose les populations et dates. Aucun résultat client sous restriction n’a été publié.

## Fichiers principaux

- Présentation : `SiteChrome`, `PageShell`, `Hero`, `styles.css`, cartes partagées.
- Crew : `brand.config.json`, `legal.config.json`, `site-content.ts`, `CrewSection`, `CrewCredential`, accueil, À propos et mentions légales.
- Preuves : `credentials.ts`, badge original, `operational-evidence.json`, `OperationalEvidence`.
- Gouvernance : tests, document d’identité principal et fichiers de marque correspondants du brand kit.

Travail local uniquement ; aucune mise en production, aucun push ni modification de l’hébergement Lovable.

## Vérification du correctif

- TypeScript, ESLint et build de production : réussis.
- Gouvernance : 11 tests réussis, dont périmètre des chiffres et séparation identité du crew / mentions légales.
- HTTP : accueil, À propos, cas d’usage, approche, réalisations et mentions légales en 200 sans erreur de rendu serveur ; certification et crew présents dans le HTML de l’accueil et À propos, sans nom de dirigeant.
- Badge PNG : HTTP 200 ; empreinte SHA-256 identique au fichier utilisateur.
- Pas de nouvelle campagne de captures navigateur ; les anciennes mesures de hauteur ne décrivent pas cette version.
