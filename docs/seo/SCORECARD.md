# Barème SEO Caraaios

Ce barème mesure la **préparation SEO du site et les résultats vérifiables dans Google** sur 100 points. Il ne reprend pas la seule note « SEO » de Lighthouse : celle-ci contrôle surtout des prérequis techniques. Le seuil de travail est **90/100**. Les sitelinks restent un résultat distinct, produit automatiquement par Google pour certaines recherches ; une bonne note ne garantit pas leur affichage.

Avant d'attribuer 90 points ou plus, quatre prérequis doivent être vrais : les sept pages proposées à l'index répondent en `200` avec du contenu HTML lisible ; aucune ne porte `noindex` ; le sitemap des pages est accessible et accepté dans la propriété Search Console confirmée ; la navigation vers les pages importantes est présente dans le HTML initial. Si l'un d'eux échoue, la note est plafonnée à 89 jusqu'à correction.

| Domaine et critère | Maximum | 12 octobre 2026 | Preuve ou manque |
| --- | ---: | ---: | --- |
| Exploration : sept pages HTML en `200`, indexables | 7 | 7 | `/`, `/work`, `/realisations`, `/methode`, `/a-propos`, `/journal`, `/contact` contrôlées sur le site public. |
| Exploration : `robots.txt` et sitemaps valides | 4 | 4 | Le sitemap des pages est lu par Search Console sans avertissement ni erreur. |
| Exploration : pages légales en `noindex`, vraie `404` | 3 | 3 | `/mentions-legales` et `/confidentialite` ont `noindex`; une route inconnue renvoie `404`. |
| Exploration : une URL canonique propre par page | 4 | 4 | Les sept réponses publiques ont chacune un `rel=canonical` absolu vers leur propre URL. |
| Exploration : variantes HTTP, `www` et slash redirigées | 2 | 2 | HTTP passe en HTTPS, `www` redirige vers le domaine nu et `/work/` vers `/work`. |
| Métadonnées : titres distincts, courts et descriptifs | 7 | 7 | Les sept titres nomment la destination ou le service et finissent par Caraaios. |
| Métadonnées : descriptions uniques et utiles | 5 | 5 | Une description propre à chaque page dans le HTML initial. |
| Métadonnées : un H1 et la langue de page | 4 | 4 | Un H1 par page ; attribut `lang` rendu côté serveur. |
| Métadonnées : partage social cohérent | 4 | 4 | `og:title`, `og:description`, `og:url`, `og:site_name` et image sociale. |
| Sitelinks : menu principal vers les six destinations | 8 | 8 | Expertise, Réalisations, Approche, À propos, Journal et Contact accessibles depuis les pages. |
| Sitelinks : liens de pied de page et liens contextuels | 4 | 4 | Les pages clés ont plusieurs chemins internes, dont le pied de page. |
| Sitelinks : libellés de liens concis | 3 | 3 | Les libellés du menu désignent clairement chaque destination. |
| Sitelinks : identité structurée et stable | 5 | 5 | `WebSite` et `Organization` en JSON-LD sur l'accueil, nom Caraaios cohérent avec `og:site_name`. |
| Contenu : sept pages distinctes et substantielles | 7 | 6 | Les six pages éditoriales sont étoffées ; `/contact` reste une page fonctionnelle brève. |
| Contenu : résultats réels séparés des exemples | 3 | 3 | La page Réalisations distingue le cas déployé des situations illustratives. |
| Confiance : identité juridique et contact | 3 | 3 | OptiQuant IA, forme juridique, SIREN, mentions légales, confidentialité et contact visibles. |
| Confiance : méthode et limites exposées | 2 | 2 | Méthode de déploiement et limites des preuves publiées. |
| Performance : médiane de trois audits Lighthouse mobile / 10 | 10 | 9 | Notes 94, 85 et 90 ; médiane 90. SEO Lighthouse : 100, accessibilité : 100 sur les trois audits. |
| Google : propriété Search Console confirmée | 2 | 2 | Compte connecté avec permission `siteOwner`. |
| Google : deux sitemaps traités sans erreur | 2 | 1 | Sitemap des pages traité (0 erreur) ; l'index de sitemaps est encore en attente. |
| Google : sept pages indexées | 7 | 7 | Inspection d'URL du 12 octobre : sept verdicts `PASS`, exploration mobile réussie et URL canoniques reconnues. |
| Google : sitelinks observés sur la recherche de marque | 4 | 0 | Leur affichage n'est pas encore confirmé. |
| **Total** | **100** | **93** | **Seuil interne franchi ; apparition des sitelinks encore à vérifier.** |

La partie « structure de sitelinks » mesure uniquement les signaux que le site contrôle. [Google explique](https://developers.google.com/search/docs/appearance/sitelinks) que les sitelinks sont choisis automatiquement selon la pertinence de la recherche, la structure du site, les titres et les libellés des liens. Le [balisage `WebSite`](https://developers.google.com/search/docs/appearance/site-names) aide Google à retenir le nom du site ; il ne commande pas les sitelinks.

Une demande d'indexation manuelle a été acceptée dans Search Console le 12 octobre pour `/realisations` et `/contact`. Google les a ensuite explorées le même jour, à 21:34 et 21:36 UTC, et l'API d'inspection les indique désormais indexées.

Pour suivre la note, relancer les contrôles des sept réponses publiques, les trois audits Lighthouse mobile dans des sessions fraîches, puis les commandes `status`, `sitemaps` et `inspect` de l'outil Search Console local. Les rapports Lighthouse bruts du 12 octobre sont conservés dans `outputs/caraaios-lighthouse-mobile-fonts-{1,2,3}.json` du workspace. La valeur d'indexation doit venir de l'inspection d'URL ; le compteur du rapport Sitemap indique encore zéro malgré les sept verdicts positifs. Réexaminer la note après le traitement de l'index XML et le prochain crawl de Google.
