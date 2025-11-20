# Errori e Soluzioni

> **PROMEMORIA AI:** Aggiornare ogni volta che si riscontra un errore o si trova una soluzione. Consultare REMINDERS.md per checklist completa.

## Errori Riscontrati

### 2025-01-XX - TypeScript: Property 'env' does not exist on type 'ImportMeta'
**Ambiente:** Sviluppo
**Stack:** TypeScript 5.3.3, Vite 5.0.8, React 18.2.0, Windows 11
**Errore:** 
```
src/lib/api.ts(3,29): error TS2339: Property 'env' does not exist on type 'ImportMeta'.
```
**Causa:** TypeScript non riconosce `import.meta.env` che è una feature specifica di Vite. Il file `tsconfig.json` non includeva i tipi di Vite.
**Soluzione:** Aggiunto `"types": ["vite/client"]` nella sezione `compilerOptions` del file `frontend/tsconfig.json`. Questo permette a TypeScript di riconoscere le variabili d'ambiente di Vite tramite `import.meta.env`.
**Prevenzione:** Quando si usa Vite con TypeScript, assicurarsi sempre di includere `"types": ["vite/client"]` nel `tsconfig.json` per avere il supporto completo alle feature di Vite.
**Note:** Questo errore viene rilevato dal protocollo di avvio durante il controllo TypeScript.

---

### 2025-01-XX - PostCSS: The `border-border` class does not exist
**Ambiente:** Sviluppo
**Stack:** Tailwind CSS 3.4.0, PostCSS, Vite 5.0.8, Windows 11
**Errore:**
```
[postcss] D:/Andrea/Progetti/Meetdrip/Meetdrip_Data/frontend/src/index.css:1:1: The `border-border` class does not exist. If `border-border` is a custom class, make sure it is defined within a `@layer` directive.
```
**Causa:** Il file `frontend/src/index.css` conteneva un riferimento a una classe Tailwind `border-border` che non era definita nella configurazione di Tailwind. Probabilmente era un residuo di un template shadcn/ui che non era stato configurato correttamente.
**Soluzione:** Rimosso il riferimento `@apply border-border;` dal file `frontend/src/index.css`. La classe non era necessaria per il funzionamento dell'app.
**Prevenzione:** Quando si copia codice da template o librerie UI, verificare che tutte le classi personalizzate siano definite nella configurazione di Tailwind o rimuoverle se non necessarie. **ATTENZIONE:** Questo errore si è ripresentato durante l'aggiornamento dello stile premium - assicurarsi di non re-inserire `border-border` quando si modifica `index.css`.
**Note:** Questo errore impediva l'avvio del frontend durante `npm run dev`. Si è verificato due volte: inizialmente e durante l'implementazione dello stile premium.

---

### 2025-01-XX - PostCSS: Classi personalizzate Tailwind non riconosciute in @apply
**Ambiente:** Sviluppo
**Stack:** Tailwind CSS 3.4.0, PostCSS, Vite 5.0.8, Windows 11
**Errore:**
```
[postcss] The `shadow-premium` class does not exist. If `shadow-premium` is a custom class, make sure it is defined within a `@layer` directive.
[postcss] The `bg-gradient-gold` class does not exist...
[postcss] The `shadow-glow-gold` class does not exist...
```
**Causa:** Le classi personalizzate definite in `tailwind.config.js` (come `shadow-premium`, `bg-gradient-gold`, `shadow-glow-gold`) non vengono sempre riconosciute correttamente quando usate con la direttiva `@apply` in file CSS. Questo è un problema noto con Tailwind quando si usano classi personalizzate estese in `@apply`.
**Soluzione:** Invece di usare `@apply` con classi personalizzate, usare direttamente le proprietà CSS corrispondenti. Ad esempio:
- `@apply shadow-premium` → `box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);`
- `@apply bg-gradient-gold` → `background-image: linear-gradient(135deg, #FFD700 0%, #FFB800 50%, #FFA500 100%);`
- `@apply shadow-glow-gold` → `box-shadow: 0 0 20px rgba(255, 215, 0, 0.3), 0 0 40px rgba(255, 215, 0, 0.1);`
**Prevenzione:** Quando si definiscono classi personalizzate in `tailwind.config.js` e si vogliono usare in `@apply`, verificare se funzionano. Se non funzionano, usare direttamente le proprietà CSS invece di `@apply`. Le classi personalizzate funzionano correttamente quando usate direttamente nei componenti React/TSX.
**Note:** Questo errore si è verificato durante l'implementazione dello stile premium. Le classi personalizzate funzionano correttamente quando usate direttamente nei componenti (es. `className="shadow-premium"`), ma non sempre con `@apply` in file CSS.

