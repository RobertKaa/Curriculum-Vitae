# CV numérique

CV numérique de Stéphane Bran, développeur frontend attentif à l'UX, l'UI, la stabilité et au détail visuel.

## Stack

- React 19
- TypeScript
- Vite
- CSS responsive sans framework
- Lucide React pour les icônes
- Vitest + Testing Library pour les tests de rendu
- ESLint pour la qualité statique

## Scripts

```bash
npm install
npm run dev
npm run lint
npm run test
npm run build
```

## Structure

- `src/cv-data.ts` contient le contenu éditable du CV, dont `photoUrl` pour le lien de la photo.
- `src/App.tsx` compose le contenu principal et la bande latérale.
- `src/App.css` porte le design responsive desktop/mobile.
- `src/App.test.tsx` vérifie que l'identité et les sections clés se rendent correctement.

## Organisation actuelle

- Bande latérale : photo, coordonnées, stack web dev, qualités, projets, hobbies.
- Contenu principal : nom, rôle, profil, expériences, étude.

## Personnalisation

- Ajouter une photo dans `public/`, puis renseigner `photoUrl`, par exemple `/ma-photo.jpg`.
- Remplacer LinkedIn et email par les vrais liens.
- Ajouter les expériences réelles, projets, technos maîtrisées et études.
- Ajouter une route ou une version imprimable PDF si le CV doit être partagé largement.
