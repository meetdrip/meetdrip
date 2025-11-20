# Note Tecniche

> **PROMEMORIA AI:** Aggiornare quando si documentano nuove API, configurazioni o pattern. Consultare REMINDERS.md per checklist completa.

## API
### Endpoint Health Check
- **Metodo:** GET
- **Path:** `/api/health`
- **Parametri:** Nessuno
- **Response:** 
  ```json
  {
    "status": "ok",
    "message": "Meetdrip API is running"
  }
  ```
- **Note:** Endpoint per verificare che il backend sia attivo

### Endpoint Autenticazione - Login con PIN
- **Metodo:** POST
- **Path:** `/api/auth/login`
- **Parametri (body):**
  - `pin`: string (PIN numerico)
- **Response success (200):**
  ```json
  {
    "token": "jwt_token_string",
    "authenticated": true
  }
  ```
- **Response error (400):**
  - Validazione fallita: `{ "errors": [...] }`
- **Response error (401):**
  - PIN invalido: `{ "error": "Invalid PIN" }`
- **Response error (500):**
  - PIN_HASH non configurato: `{ "error": "Server configuration error" }`
  - JWT secret non configurato: `{ "error": "JWT secret not configured" }`
  - Errore server: `{ "error": "Internal server error" }`
- **Note:** 
  - PIN viene hashato con SHA-256 e confrontato con PIN_HASH da variabile d'ambiente
  - JWT token valido per 7 giorni
  - Sistema ad utente singolo, non richiede database per autenticazione
  - Il PIN originale non è mai salvato, solo l'hash SHA-256 

## Configurazioni Specifiche
### Vite - Porta Fissa Frontend
- **File:** `frontend/vite.config.ts`
- **Parametro:** `server.port` e `server.strictPort`
- **Valore:** `port: 3000, strictPort: true`
- **Descrizione:** Frontend sempre sulla porta 3000, non cerca altre porte se occupata

### Vite - Proxy API
- **File:** `frontend/vite.config.ts`
- **Parametro:** `server.proxy`
- **Valore:** `/api` → `http://localhost:5000`
- **Descrizione:** Tutte le richieste a `/api/*` vengono inoltrate al backend su porta 5000

### TypeScript - Vite Client Types
- **File:** `frontend/tsconfig.json`
- **Parametro:** `compilerOptions.types`
- **Valore:** `["vite/client"]`
- **Descrizione:** Permette a TypeScript di riconoscere `import.meta.env` e altre feature Vite

### TypeScript - Path Alias
- **File:** `frontend/vite.config.ts` e `frontend/tsconfig.json`
- **Parametro:** `resolve.alias` (Vite) e `compilerOptions.paths` (TypeScript)
- **Valore:** `@` → `./src`
- **Descrizione:** Permette import con `@/` invece di path relativi (es. `@/lib/api`)

### Express - CORS
- **File:** `backend/src/index.ts`
- **Parametro:** `app.use(cors())`
- **Valore:** Configurazione default (permette tutte le origini in sviluppo)
- **Descrizione:** Abilita CORS per permettere richieste dal frontend

### Express - JSON Parser
- **File:** `backend/src/index.ts`
- **Parametro:** `app.use(express.json())` e `app.use(express.urlencoded({ extended: true }))`
- **Valore:** Default
- **Descrizione:** Permette parsing di JSON e URL-encoded nei body delle richieste 

## Middleware Autenticazione
### authenticateToken
- **File:** `backend/src/middleware/auth.ts`
- **Scopo:** Verifica JWT token nelle richieste
- **Utilizzo:** Applicare a route protette con `authenticateToken`
- **Comportamento:**
  - Estrae token da header `Authorization: Bearer <token>`
  - Verifica token con JWT_SECRET
  - Aggiunge `authenticated: true` a `req` se valido
  - Restituisce 401 se token mancante
  - Restituisce 403 se token invalido/scaduto
- **Interfaccia:** `AuthRequest` estende `Request` con `authenticated?: boolean`

## Database Connection
### Pool Configuration
- **File:** `backend/src/config/database.ts`
- **Libreria:** `pg` (node-postgres)
- **Configurazione:**
  - Connection string da `DATABASE_URL` env var
  - SSL configurato con `rejectUnauthorized: false` (per Neon)
- **Eventi:**
  - `connect`: Log "✅ Database connected"
  - `error`: Log errore connessione

### Schema Database
#### Tabella users
- **File migrazione:** `backend/src/db/migrations/001_create_users_table.sql`
- **Campi:**
  - `id`: SERIAL PRIMARY KEY
  - `email`: VARCHAR(255) UNIQUE NOT NULL
  - `password`: VARCHAR(255) NOT NULL (hashata con bcrypt)
  - `name`: VARCHAR(255) NOT NULL
  - `created_at`: TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  - `updated_at`: TIMESTAMP DEFAULT CURRENT_TIMESTAMP
- **Indici:**
  - `idx_users_email`: Indice su email per lookup veloci

## Frontend State Management
### Auth Store (Zustand)
- **File:** `frontend/src/store/authStore.ts`
- **Libreria:** Zustand con persist middleware
- **Stato:**
  - `token`: string | null
- **Azioni:**
  - `setAuth(token)`: Imposta token, salva in localStorage
  - `logout()`: Rimuove token, pulisce localStorage
  - `isAuthenticated()`: Verifica se token esiste (utente autenticato)
- **Persistenza:** Salvataggio automatico in localStorage con chiave `auth-storage`
- **Note:** Sistema ad utente singolo, non richiede informazioni utente separate

## API Client
### Axios Configuration
- **File:** `frontend/src/lib/api.ts`
- **Libreria:** Axios
- **Base URL:** `import.meta.env.VITE_API_URL` o `http://localhost:5000/api`
- **Interceptors:**
  - **Request:** Aggiunge automaticamente header `Authorization: Bearer <token>` da localStorage
  - **Response:** Gestisce errori 401 (non autorizzato) rimuovendo token e reindirizzando a `/login`
- **Headers default:** `Content-Type: application/json`

## Appunti
- Note tecniche temporanee
- Pattern utilizzati
- Workaround implementati
- Considerazioni future

### Pattern Utilizzati
- **REST API:** Endpoint organizzati per risorsa (es. `/api/auth/*`)
- **Middleware Pattern:** Autenticazione come middleware riutilizzabile
- **Validation:** express-validator per validazione input
- **Error Handling:** Try-catch con risposte JSON standardizzate
- **PIN Hashing:** SHA-256 per hash del PIN (confronto con hash memorizzato)
- **JWT:** Token con scadenza 7 giorni
- **Single User System:** Autenticazione senza database, solo PIN hash in .env

### Workaround Implementati
- **PostCSS @apply con classi personalizzate:** Non sempre funziona, usare proprietà CSS dirette invece di `@apply` per classi custom Tailwind
- **TypeScript import.meta.env:** Richiede `"types": ["vite/client"]` in tsconfig.json

### Considerazioni Future
- Aggiungere rate limiting per API
- Implementare refresh token per JWT
- Aggiungere logging strutturato
- Implementare test automatizzati
- Aggiungere validazione più robusta per input

## Tailwind CSS Configuration
### Custom Colors
- **File:** `frontend/tailwind.config.js`
- **Colori personalizzati:**
  - `primary`: Giallo-oro (#FFD700) con varianti dark/light
  - `secondary`: Blu brillante (#00BFFF) con varianti dark/light
  - `background`: Sfondo scuro premium (#0A0A0A) con varianti card/elevated
- **Gradienti:**
  - `gradient-gold`: Gradiente oro per accenti
  - `gradient-premium`: Gradiente sfondo premium
  - `gradient-gold-subtle`: Gradiente oro sottile per effetti

### Custom Shadows
- `premium`: Ombra card premium
- `premium-lg`: Ombra grande per elementi elevati
- `glow-gold`: Glow dorato per accenti
- `glow-blue`: Glow blu per accenti secondari
- `inner-premium`: Ombra interna per profondità

### Custom Animations
- `fade-in`: Fade in semplice
- `slide-up`: Slide up con fade
- `glow-pulse`: Pulse per effetti glow
- `shimmer`: Shimmer effect per loading

### Dark Mode
- Configurato con `darkMode: 'class'`
- Colori ottimizzati per dark mode premium

## CSS Custom Components
### Componenti Personalizzati
- **File:** `frontend/src/index.css`
- **Componenti disponibili:**
  - `.glass-card`: Card con effetto glassmorphism (sfondo trasparente, blur, bordo sottile)
  - `.glass-card-hover`: Variante glass-card con hover effect
  - `.premium-input`: Input field con stile premium (sfondo trasparente, focus glow)
  - `.premium-button`: Bottone principale con gradiente oro e glow effect
  - `.premium-button-secondary`: Bottone secondario con stile glass
  - `.text-gradient-gold`: Testo con gradiente oro
  - `.text-gradient-blue`: Testo con gradiente blu

### Background Effects
- Sfondo body con gradienti radiali sottili (oro e blu)
- Background attachment fixed per effetto parallax
- Colori con opacità bassa per non interferire con contenuto

### Note CSS
- Le classi personalizzate usano `@apply` per utility Tailwind quando possibile
- Per classi custom complesse (shadow, gradient), si usano proprietà CSS dirette
- Tutti i componenti hanno transizioni smooth per interazioni

## Librerie UI Moderne (Best Practice 2025)
### Tailwind CSS
- Styling utility-first per sviluppo rapido e coerente
- Supporto nativo per dark mode
- Personalizzabile per design premium
- Ottimizzato per performance

### shadcn/ui
- Componenti UI moderni e accessibili
- Personalizzabili e adatti a design premium
- Supporto dark mode integrato
- Basato su Radix UI (accessibilità)

### React Query
- Gestione dati e cache automatica
- Sincronizzazione in tempo reale
- Ottimistic updates
- Gestione errori e loading states

### Zustand
- State management leggero e moderno
- TypeScript-first
- Meno boilerplate rispetto a Redux
- Perfetto per gestione stato globale dell'app

