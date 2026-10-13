# Barème SEO Caraaios

Ce barème mesure la **préparation SEO du site et les résultats vérifiables dans Google** sur 100 points. Il ne reprend pas la seule note « SEO » de Lighthouse : celle-ci contrôle surtout des prérequis techniques. Le seuil de travail est **90/100**. Les sitelinks restent un résultat distinct, produit automatiquement par Google pour certaines recherches ; une bonne note ne garantit pas leur affichage.

Avant d'attribuer 90 points ou plus, quatre prérequis doivent être vrais : les sept pages proposées à l'index répondent en `200` avec du contenu HTML lisible ; aucune ne porte `noindex` ; le sitemap des pages est accessible et accepté dans la propriété Search Console confirmée ; la navigation vers les pages importantes est présente dans le HTML initial. Si l'un d'eux échoue, la note est plafonnée à 89 jusqu'à correction.

| Domaine et critère | Maximum | 13 octobre 2026 | Preuve ou manque |
| --- | ---: | ---: | --- |
| Exploration : sept pages HTML en `200`, indexables | 7 | 7 | `/`, `/work`, `/realisations`, `/methode`, `/a-propos`, `/journal`, `/contact` contrôlées sur le site public. |
| Exploration : `robots.txt` et sitemaps valides | 4 | 4 | Le sitemap des pages est lu par Search Console sans avertissement ni erreur. |
| Exploration : pages légales en `noindex`, vraie `404` | 3 | 3 | `/mentions-legales` et `/confidentialite` ont `noindex`; une route inconnue renvoie `404`. |
| Exploration : une URL canonique propre par page | 4 | 4 | Les sept réponses publiques ont chacune un `rel=canonical` absolu vers leur propre URL. |
| Exploration : variantes HTTP, `www` et slash redirigées | 2 | 2 | HTTP passe en HTTPS, `www` redirige vers le domaine nu et `/work/` vers `/work`. |
| Métadonnées : titres distincts, courts et descriptifs | 7 | 7 | Les sept titres nomment la destination ou le service et portent la marque Caraaios. |
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
| Performance : médiane de trois audits Lighthouse mobile / 10 | 10 | 8,6 | Après publication du correctif : notes 86, 95 et 85 ; médiane 86. SEO Lighthouse : 100, accessibilité : 100 sur les trois audits. LCP : 3,74 s, 2,62 s et 3,84 s ; CLS presque nul. |
| Google : propriété Search Console confirmée | 2 | 2 | Compte connecté avec permission `siteOwner`. |
| Google : deux sitemaps traités sans erreur | 2 | 2 | Index et sitemap des pages resoumis après le correctif du 13 octobre, puis téléchargés à 16:20 UTC : aucune erreur ni avertissement. |
| Google : sept pages indexées | 7 | 7 | Inspection d'URL du 13 octobre : sept verdicts `PASS`, exploration mobile réussie et URL canoniques reconnues. |
| Google : sitelinks observés sur la recherche de marque | 4 | 0 | Recherche contrôlée le 13 octobre : sept résultats Caraaios séparés avec l'orthographe exacte, aucun groupe de sitelinks Caraaios observé. |
| **Total** | **100** | **93,6** | **Seuil interne franchi sur le même barème ; aucun point attribué aux sitelinks non observés.** |

La partie « structure de sitelinks » mesure uniquement les signaux que le site contrôle. [Google explique](https://developers.google.com/search/docs/appearance/sitelinks) que les sitelinks sont choisis automatiquement selon la pertinence de la recherche, la structure du site, les titres et les libellés des liens. Le [balisage `WebSite`](https://developers.google.com/search/docs/appearance/site-names) aide Google à retenir le nom du site ; il ne commande pas les sitelinks.

Une demande d'indexation manuelle a été acceptée dans Search Console le 12 octobre pour `/realisations` et `/contact`. Google les a ensuite explorées le même jour, à 21:34 et 21:36 UTC, et l'API d'inspection les indique désormais indexées.

Après publication du correctif d'extraits le 13 octobre, Google a accepté quatre nouvelles demandes d'indexation pour `/work`, `/methode`, `/a-propos` et `/journal`. Le contrôle API de 16:36 UTC confirme leurs nouveaux crawls : respectivement **16:22:43**, **16:29:18**, **16:33:01** et **16:34:19 UTC**, tous postérieurs à la publication. Les quatre verdicts restent `PASS`. Les confirmations et le suivi sont enregistrés dans `outputs/caraaios-indexation-requests-20261013.json` et `caraaios-recrawl-followup-20261013.json`.

Contact affichait également le texte juridique commun dans les résultats et sa dernière exploration précédait le correctif du 13 octobre. Une cinquième demande a donc été acceptée pour `/contact` après cette modification réelle ; son nouveau crawl reste à confirmer. Aucune demande déjà acceptée pour la même version n'a été répétée.

Pour suivre la note, relancer les contrôles des sept réponses publiques, les trois audits Lighthouse mobile dans des sessions fraîches, puis les commandes `status`, `sitemaps` et `inspect` de l'outil Search Console local. Les rapports bruts sont conservés dans `outputs/` du workspace. La valeur d'indexation doit venir de l'inspection d'URL : le champ `contents[].indexed` de l'API des sitemaps est obsolète, et ne mesure pas les pages indexées.

Le contrôle du 13 octobre confirme une exploration de l'accueil le **12 octobre à 22:46:45 UTC**, après l'ajout du balisage `WebSite`. Réalisations et Contact ont également été réexplorées le 12 octobre. Expertise, Approche, À propos et Journal ont désormais été réexplorées le 13 octobre après le correctif. Une nouvelle observation de la recherche de marque, après actualisation du navigateur, montre encore les anciens titres et extraits ainsi que sept résultats séparés. Le crawl confirmé n'établit donc pas encore l'application des changements dans les résultats ni l'apparition de sitelinks.

La recherche `caraaios` est parfois corrigée vers `caraibos` ; les sitelinks de cette marque distincte ne sont pas comptés. Avec l'orthographe exacte, les sept pages de Caraaios sont visibles comme résultats séparés. Quatre extraits reprennent le pied de page juridique commun. Le 13 octobre, le correctif `b6832d0` ajoute `data-nosnippet` uniquement au texte juridique et au copyright répétés, sans changer leur affichage ni les liens. Le contrôle avant/après des sept pages indexables et des deux pages légales confirme les mêmes textes, liens, métadonnées et canoniques. La date `<lastmod>2026-10-13</lastmod>` correspond à cette modification réelle de l'extraction des extraits, pas à une date artificielle renouvelée automatiquement. Les deux sitemaps modifiés ont été relus par Google sans erreur à 16:20 UTC. [Instruction Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#data-nosnippet-attr).

Preuves du 13 octobre dans le workspace : `outputs/caraaios-public-validation-20261013.json`, `caraaios-snippets-public-validation-20261013.json`, `caraaios-google-validation-20261013.json`, `caraaios-sitemaps-after-snippets-20261013.json`, `caraaios-serp-observation-20261013.json`, `caraaios-final-score-20261013.json` et les trois audits `caraaios-lighthouse-mobile-snippets-20261013-{1,2,3}.json`. Prochain résultat à vérifier : nouvelle exploration des pages modifiées et affichage éventuel de sitelinks. Aucun code du site ni API Search Console ne peut forcer ce dernier résultat.

Hors barème Google, les sept URL modifiées ont été transmises le 12 octobre au protocole IndexNow pour Bing et les moteurs participants. La réponse `202` signifie que les URL ont été reçues mais que la validation de la clé publique est encore en attente ; elle ne prouve ni exploration ni indexation. Le fichier de vérification est accessible publiquement à `/indexnow-key.txt`.
