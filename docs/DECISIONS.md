# Decisioni

## Decisioni Prese

### 2025-01-XX - Stack Tecnologico: TypeScript + Express + React
**Contesto:** Scelta dello stack tecnologico per il gestionale Meetdrip
**Decisione:** Utilizzare TypeScript per tutto il progetto, Express.js per backend, React per frontend
**Motivazione:** 
- TypeScript offre type safety e migliore developer experience
- Express.js è maturo, semplice e adatto a REST API
- React è standard de facto per UI moderne e ha ecosistema ricco
**Alternativa scartata:** 
- JavaScript puro: meno type safety e più errori runtime
- Next.js: troppo complesso per le esigenze iniziali, preferita separazione frontend/backend
- NestJS: troppo enterprise per le esigenze attuali
**Impatto:** 
- Codice più robusto e manutenibile
- Onboarding più facile per sviluppatori con esperienza React/Express
- Build process più complesso ma gestibile
**Stato:** Implementata

### 2025-01-XX - Database: Neon PostgreSQL Serverless
**Contesto:** Scelta del database per il gestionale
**Decisione:** Utilizzare Neon (PostgreSQL serverless) come database
**Motivazione:** 
- Gratuito e senza limiti (requisito fondamentale)
- PostgreSQL è robusto e adatto a gestionale
- Serverless significa gestione automatica, no server da mantenere
- Accesso remoto garantito (requisito)
**Alternativa scartata:** 
- SQLite: non adatto per accesso remoto/multi-utente
- MongoDB: preferito SQL per dati strutturati di un gestionale
- Database self-hosted: richiede gestione server, non gratuito
**Impatto:** 
- Database sempre disponibile senza gestione
- Connessione remota garantita
- Scalabilità automatica
**Stato:** Implementata

### 2025-01-XX - Build Tool Frontend: Vite
**Contesto:** Scelta del build tool per il frontend React
**Decisione:** Utilizzare Vite invece di Create React App o altri bundler
**Motivazione:** 
- Vite è molto più veloce in sviluppo (HMR istantaneo)
- Configurazione semplice e moderna
- Supporto nativo TypeScript
- Build ottimizzata per produzione
**Alternativa scartata:** 
- Create React App: più lento, configurazione meno flessibile
- Webpack: configurazione complessa, più lento
**Impatto:** 
- Sviluppo più veloce e fluido
- Hot Module Replacement istantaneo
- Build production ottimizzata
**Stato:** Implementata

### 2025-01-XX - Styling: Tailwind CSS + shadcn/ui
**Contesto:** Scelta del sistema di styling per il frontend
**Decisione:** Utilizzare Tailwind CSS per utility-first styling e shadcn/ui per componenti
**Motivazione:** 
- Tailwind CSS permette sviluppo rapido e coerente
- Supporto nativo dark mode
- shadcn/ui offre componenti accessibili e personalizzabili
- Design premium facilmente raggiungibile
**Alternativa scartata:** 
- CSS modules: più verboso, meno rapido
- Styled Components: runtime overhead, meno performante
- Material-UI: troppo pesante, meno personalizzabile
**Impatto:** 
- Sviluppo UI più rapido
- Design system coerente
- Componenti accessibili out-of-the-box
**Stato:** Implementata

### 2025-01-XX - State Management: Zustand
**Contesto:** Scelta della libreria per gestione stato globale
**Decisione:** Utilizzare Zustand per state management
**Motivazione:** 
- Leggero e semplice da usare
- TypeScript-first
- Meno boilerplate rispetto a Redux
- Perfetto per stato globale semplice (es. autenticazione)
**Alternativa scartata:** 
- Redux: troppo complesso per le esigenze attuali
- Context API: può causare re-render non necessari
- Jotai: meno maturo, ecosistema più piccolo
**Impatto:** 
- Codice più pulito e manutenibile
- Performance ottimali
- Facile da testare
**Stato:** Implementata

### 2025-01-XX - Data Fetching: React Query
**Contesto:** Scelta della libreria per fetching dati e cache
**Decisione:** Utilizzare React Query (TanStack Query) per gestione dati
**Motivazione:** 
- Cache automatica e sincronizzazione
- Gestione loading/error states automatica
- Ottimistic updates
- Refetching intelligente
**Alternativa scartata:** 
- Fetch nativo: troppa logica da gestire manualmente
- SWR: React Query è più completo e maturo
- Apollo Client: troppo complesso, non serve GraphQL
**Impatto:** 
- Meno codice boilerplate
- Migliore UX con cache e sincronizzazione
- Gestione errori più robusta
**Stato:** Implementata

### 2025-01-XX - Hosting: Render
**Contesto:** Scelta della piattaforma di hosting per deploy
**Decisione:** Utilizzare Render per hosting backend e frontend
**Motivazione:** 
- Piano gratuito disponibile
- Deploy automatico da GitHub
- Supporto Node.js e static sites
- SSL incluso
**Alternativa scartata:** 
- Vercel: più orientato a frontend, backend meno flessibile
- Heroku: non più gratuito
- AWS/GCP: troppo complesso e costoso
**Impatto:** 
- Deploy semplice e automatico
- App accessibile da remoto
- Costo zero
**Stato:** Da implementare

### 2025-01-XX - Protocollo di Avvio con Controlli Pre-Avvio
**Contesto:** Necessità di automatizzare controlli prima di avviare il progetto
**Decisione:** Implementare script di avvio che eseguono controlli (porte, TypeScript) prima di avviare backend/frontend
**Motivazione:** 
- Evita errori comuni (porte occupate, errori TypeScript)
- Migliora developer experience
- Riduce tempo speso in troubleshooting
**Alternativa scartata:** 
- Avvio manuale senza controlli: più propenso a errori
- Script separati: meno integrato
**Impatto:** 
- Avvio più affidabile
- Errori catturati prima
- Workflow più fluido
**Stato:** Implementata

### 2025-01-XX - Porta Fissa Frontend (3000)
**Contesto:** Vite di default cerca porte alternative se quella configurata è occupata
**Decisione:** Configurare Vite con `strictPort: true` per forzare porta 3000
**Motivazione:** 
- URL sempre consistente
- Facilita configurazione proxy e bookmark
- Evita confusione con porte diverse
**Alternativa scartata:** 
- Porta dinamica: meno prevedibile, più difficile da configurare
**Impatto:** 
- URL sempre `http://localhost:3000`
- Configurazione più semplice
- Script di avvio libera automaticamente la porta se occupata
**Stato:** Implementata

