# Site vitrine

Site éditorial consacré à l’ingénierie des processus, de la donnée et de l’IA. Le nom
commercial, l’entité juridique et les éléments de positionnement stables sont centralisés
dans `src/content/brand.config.json`.

## Développement local

```sh
npm install
npm run dev
```

Commandes de validation :

```sh
npm run typecheck
npm test
npm run lint
npm run build
npm run preview
```

Avec un serveur local déjà lancé, `npm run qa:browser` produit les diagnostics et captures
responsive dans `docs/site-rebuild/`.

Le formulaire a besoin d’une destination serveur réelle. Copier `.env.example` vers un
fichier d’environnement local et renseigner `CONTACT_WEBHOOK_URL`. Aucune réussite n’est
simulée lorsque cette variable est absente.

## Gouvernance éditoriale

Les sources éditoriales validées se trouvent dans le brand kit adjacent au dépôt. Les
décisions de migration, claims bloqués et vérifications sont consignés dans
`docs/site-rebuild/`.

Le projet reste synchronisable avec Lovable. Ne pas réécrire l’historique Git de la branche
principale.
