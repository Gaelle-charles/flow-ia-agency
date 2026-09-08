# Éléments à valider avant publication définitive

Dernière mise à jour : 7 septembre 2026

Ce fichier contient les éléments volontairement tenus hors de la surface publique. Une gate n'est levée qu'après validation explicite et mise à jour du registre de claims.

## Nom et domaine

- [ ] Vérifier la disponibilité juridique du nom de travail `Sway Ops`.
- [ ] Vérifier et réserver le domaine retenu.
- [ ] Valider les comptes sociaux pertinents.
- [ ] Remplacer la formulation « marque de travail » uniquement après sécurisation du nom.
- [ ] Définir l'URL canonique avant d'ajouter canonical, sitemap et métadonnées absolues.

## Réalisation QBR

Gate actuelle : `contract_review_and_anonymization`

- [ ] Relire le contrat, le NDA et les clauses de communication.
- [ ] Confirmer que le descriptif anonymisé peut être publié.
- [ ] Autoriser ou refuser séparément les quatre claims suivants :
  - `11/11` mises à jour mensuelles conformes ;
  - moins de cinq minutes par exécution ;
  - `33/33` présentations historiques conformes ;
  - `285/285` graphiques reliés à la bonne source et à la bonne période.
- [ ] Conserver le badge `RECETTE TECHNIQUE INTERNE` si les chiffres deviennent publics.
- [ ] Conserver la note indiquant que ces résultats ne constituent pas un ROI financier.
- [ ] Préparer trois à cinq captures anonymisées après autorisation.
- [ ] Retirer des captures tous noms, emails, logos, identifiants, données métier et chemins internes.

## Produits et ventures

### AlphaLens

Gate actuelle : `founder_status_confirmation`

- [ ] Confirmer le statut public exact : bêta, R&D ou dormance.
- [ ] Vérifier l'URL publique au moment de la publication.
- [ ] Autoriser le wording avant d'afficher le produit.
- [ ] Ne publier aucune promesse de performance de trading.

### Le Bon Rebond / RebondPro / Emploi’Ton

Gate actuelle : `legal_relationship_review`

- [ ] Clarifier la cofondation et l'entité juridique porteuse.
- [ ] Confirmer les noms pouvant être associés à OptiQuant IA ou à la marque de services.
- [ ] Confirmer le statut de RebondPro.
- [ ] Autoriser les liens et captures avant affichage.

### Export-to-Insight

- [ ] Ajouter un claim vérifié dans le registre.
- [ ] Confirmer le nom public et le statut `PROTOTYPE FONCTIONNEL`.
- [ ] Préparer un asset réel ou un schéma abstrait explicitement identifié.

### The Pricing Library

- [x] Vérifier que le site public répond — contrôlé le 7 septembre 2026.
- [ ] Refaire un contrôle juste avant le déploiement définitif.
- [ ] Confirmer qu'aucun compteur, leaderboard ou chiffre de démonstration n'est repris comme métrique d'usage.
- [ ] Préparer des captures réelles optimisées si une présentation visuelle est souhaitée.

## Gen Lead

- [ ] Conserver exclusivement dans `/journal`.
- [ ] Conserver les statuts `PILOTE INTERNE SUPERVISÉ` et `AUDIT LIVE`.
- [ ] Ne pas transformer les volumes bruts en leads qualifiés.
- [ ] Ne pas présenter le pilote comme autonome ou comme réalisation commerciale.

## Fondateur et équipe

- [ ] Choisir et fournir un portrait professionnel de Dorian.
- [ ] Fournir un texte alternatif descriptif pour le portrait retenu.
- [ ] Vérifier une dernière fois les dates et intitulés depuis le CV définitif.
- [ ] Conserver les banques et assureurs en texte comme expériences professionnelles, sans logo client.
- [ ] Valider la formulation du modèle d'équipe et les spécialistes réellement mobilisables.

## Formulaire

- [ ] Configurer `CONTACT_WEBHOOK_URL` vers une destination contrôlée.
- [ ] Configurer `CONTACT_WEBHOOK_BEARER_TOKEN` si la destination exige une authentification.
- [ ] Réaliser un test réel de réception sur la destination définitive.
- [ ] Définir le canal d'exercice des droits.
- [ ] Définir et appliquer la durée de conservation.
- [ ] Vérifier le contrat et la localisation du fournisseur destinataire.
- [ ] Vérifier que la destination ne journalise pas le corps des demandes au-delà de la politique validée.

Le parcours technique a été testé avec un webhook local contrôlé : erreur explicite sans
destination, puis succès uniquement après une réponse HTTP positive. Ce test ne remplace pas
la recette sur la destination définitive.

Le formulaire ne renvoie aucun succès tant que la destination ne confirme pas la réception.

## Mentions légales et confidentialité

- [ ] Valider l'adresse devant figurer dans les mentions légales.
- [ ] Ne pas publier une adresse personnelle sans décision explicite sur la solution d'affichage.
- [ ] Renseigner l'identité et les coordonnées de l'hébergeur après choix du déploiement final.
- [ ] Faire relire les mentions légales et la politique de confidentialité.
- [x] Vérifier la cohérence de la raison sociale, de la forme SAS et du SIREN dans l'Annuaire
      des Entreprises — contrôlé le 7 septembre 2026.
- [ ] Revalider la fiche publique d'OptiQuant IA juste avant mise en ligne.
- [ ] Vérifier les licences de la police, des icônes et de chaque futur asset.

## SEO et assets

- [x] Générer et intégrer trois illustrations éditoriales abstraites, sans les présenter comme
      des captures produit.
- [ ] Créer ou fournir une image sociale lorsque la marque et le domaine sont stabilisés.
- [ ] L'ancien visuel social FLOW est archivé et n'est plus référencé.
- [x] Archiver le pointeur d'asset historique `crm-laptop.jpg.asset.json`, non importé dans le
      site refondu.
- [ ] Ajouter canonical et sitemap après validation du domaine.
- [ ] Préparer les diagrammes et captures listés dans `assets/ASSETS_A_PREPARER.md` si une version plus visuelle est souhaitée.

## Validation finale de Dorian

- [ ] Nom et signature.
- [ ] Positionnement Intelligent Operations et modèle Context → Execution → Intelligence.
- [ ] Cas QBR anonymisé.
- [ ] Produits visibles.
- [ ] Parcours fondateur.
- [ ] Destination du formulaire.
- [ ] Mentions et politique de confidentialité.
- [ ] URL de production.
