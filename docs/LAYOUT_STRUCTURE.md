# Struttura Layout Gestionale

> **PROMEMORIA AI:** Documento che descrive la struttura completa del layout del gestionale Meetdrip, basato su analisi di gestionali moderni 2024/2025 e best practices. Consultare REMINDERS.md per checklist completa.

## Analisi Gestionali Moderni (2024/2025)

### Pattern Comuni Identificati

Dall'analisi di gestionali moderni (Odoo, NetSuite, Quire, TeamSystem, Vectorworks 2025) emergono pattern comuni:

1. **Layout Standard a Tre Zone**
   - Sidebar sinistra (navigazione principale)
   - Header superiore (informazioni utente, azioni globali)
   - Main Content Area (contenuto dinamico della pagina corrente)

2. **Design Minimalista e Pulito**
   - Interfacce semplici senza elementi superflui
   - Focus sulle funzionalità essenziali
   - Spazi bianchi generosi per respirabilità

3. **Modularità e Personalizzazione**
   - Dashboard personalizzabile con widget
   - Possibilità di mostrare/nascondere sezioni
   - Layout adattabile alle esigenze dell'utente

4. **Responsività Completa**
   - Adattamento automatico a PC, tablet, smartphone
   - Sidebar collassabile su mobile
   - Menu hamburger su schermi piccoli

## Struttura Layout Meetdrip

### Layout Principale a Tre Zone

```
┌─────────────────────────────────────────────────────────┐
│ HEADER BAR (Fixed Top)                                  │
│ ┌─────────┬─────────────────────────────────────────┐  │
│ │ LOGO    │ Breadcrumbs | Search | User Menu        │  │
│ └─────────┴─────────────────────────────────────────┘  │
├──────┬──────────────────────────────────────────────────┤
│      │                                                   │
│ SIDE │ MAIN CONTENT AREA                                │
│ BAR  │                                                   │
│ (Left│ ┌─────────────────────────────────────────────┐ │
│ Nav) │ │ Dashboard / Pagina Corrente                 │ │
│      │ │                                             │ │
│      │ │ Content dinamico qui                        │ │
│      │ │                                             │ │
│      │ └─────────────────────────────────────────────┘ │
│      │                                                   │
└──────┴──────────────────────────────────────────────────┘
```

### 1. HEADER BAR (Barra Superiore)

**Posizione:** Fixed top, sempre visibile
**Altezza:** ~64px
**Funzioni principali:**
- Logo/Marca dell'app (sinistra)
- Breadcrumb navigation (mostra percorso attuale)
- Barra di ricerca globale (centro/opzionale)
- Menu utente e impostazioni (destra)
- Notifiche/alert (destra, opzionale)
- Toggle sidebar mobile (solo mobile)

**Caratteristiche:**
- Sfondo scuro premium con trasparenza leggera
- Bordo inferiore sottile per separazione visiva
- Sticky/fixed durante lo scroll
- Shadow leggero per profondità

**Elementi specifici:**
- Logo Meetdrip (link alla dashboard)
- "Home" | "Prodotti" | "Clienti" | ... (breadcrumb)
- Icona ricerca (opzionale, per ricerca globale)
- Avatar/Icona utente + dropdown menu:
  - Profilo
  - Impostazioni
  - Logout

### 2. SIDEBAR (Navigazione Principale)

**Posizione:** Fixed left, larghezza ~240-280px
**Comportamento:**
- Desktop: sempre visibile (collassabile opzionale)
- Tablet: collassabile, icona per aprire
- Mobile: hidden di default, menu hamburger

**Struttura:**
```
┌─────────────────────┐
│ Logo (piccolo)      │
├─────────────────────┤
│ 📊 Dashboard        │
│ 📦 Prodotti         │
│   └─ Lista          │
│   └─ Categorie      │
│   └─ Gestione       │
│ 👥 Clienti          │
│   └─ Lista          │
│   └─ Gestione       │
│ 📋 Magazzino        │
│   └─ Inventario     │
│   └─ Movimenti      │
│   └─ Gestione       │
│ 💰 Cassa            │
│   └─ Flussi         │
│   └─ Gestione       │
│ 📈 Report           │
│ ⚙️  Gestione        │ ← Admin/Setup
│   └─ Tipi           │
│   └─ Config         │
└─────────────────────┘
```

**Caratteristiche:**
- Sfondo scuro premium (#0A0A0A con leggera variazione)
- Navigazione gerarchica con sottomenu espandibili
- Icone + testo per ogni voce menu
- Stato attivo evidenziato (colore accent)
- Hover effects su voci menu
- Scrollbar personalizzata se contenuto lungo

**Sezioni principali:**
1. **Dashboard** - Home principale con metriche
2. **Prodotti** - Gestione prodotti cannabis
   - Lista prodotti
   - Categorie
   - Gestione (admin)
3. **Clienti** - Gestione clienti
   - Lista clienti
   - Gestione (admin)
4. **Magazzino** - Gestione magazzino
   - Inventario
   - Movimenti
   - Gestione (admin)
5. **Cassa** - Gestione flussi di cassa
   - Flussi
   - Gestione (admin)
6. **Report** - Report e statistiche
7. **Gestione** - Interfaccia admin/setup
   - Tipi configurabili
   - Configurazioni
   - Utenti (se multi-utente futuro)

**Pattern navigazione:**
- Gruppi logici separati da divider
- Voci attive con glow accent color
- Sottomenu con indentazione
- Animazioni smooth su expand/collapse

### 3. MAIN CONTENT AREA (Area Contenuto Principale)

**Posizione:** Centro-destra, area principale scrollabile
**Margini:** Padding generoso (24-32px)
**Comportamento:**
- Scroll indipendente dalla sidebar/header
- Adattamento automatico alla larghezza disponibile
- Responsive: padding ridotto su mobile

**Struttura tipica pagina:**
```
┌─────────────────────────────────────────────┐
│ TITOLO PAGINA                               │
│ ─────────────────────────────────────────── │
│ [Azioni: + Nuovo | Filtri | Esporta]       │
├─────────────────────────────────────────────┤
│                                             │
│ CONTENUTO DINAMICO                          │
│ (Tabelle, Card, Form, Dashboard, ecc.)     │
│                                             │
└─────────────────────────────────────────────┘
```

**Tipi di contenuto:**
1. **Dashboard** - Grid di card con metriche, grafici, quick actions
2. **Liste** - Tabelle con dati, filtri, paginazione
3. **Dettagli** - Form di visualizzazione/modifica
4. **Report** - Grafici, tabelle, esportazioni
5. **Gestione** - Interfacce admin per configurazioni

**Caratteristiche:**
- Background scuro premium con gradiente sottile
- Card con shadow premium e bordi sottili
- Animazioni fade-in per transizioni
- Loading states con shimmer effects
- Empty states con messaggi chiari

## Pattern Specifici per Sezioni

### Dashboard (Home)

**Layout:** Grid responsive di card
**Struttura:**
```
┌─────────────┬─────────────┬─────────────┐
│ Quick Stats │ Quick Stats │ Quick Stats │
│ (Card)      │ (Card)      │ (Card)      │
├─────────────┴─────────────┴─────────────┤
│ Chart/Graph (Large Card)                │
├─────────────┬─────────────┤
│ Recent Items│ Quick Actions│
│ (Table Card)│ (Card)       │
└─────────────┴─────────────┘
```

**Elementi:**
- Card metriche chiave (vendite oggi, prodotti in magazzino, ecc.)
- Grafici interattivi (trend vendite, movimento magazzino)
- Tabelle ultime attività
- Quick actions (azioni rapide comuni)

### Liste (Prodotti, Clienti, ecc.)

**Layout:** Tabella + toolbar superiore
**Struttura:**
```
┌─────────────────────────────────────────────┐
│ [+ Nuovo] [Filtri ▼] [Esporta] [Cerca]     │
├─────────────────────────────────────────────┤
│ Tabella con colonne                         │
│ ├─ Header (sortable)                        │
│ ├─ Rows (clickable, hover effects)         │
│ └─ Pagination                               │
└─────────────────────────────────────────────┘
```

**Caratteristiche:**
- Toolbar superiore con azioni principali
- Tabelle responsive con scroll orizzontale su mobile
- Row hover effects
- Click per aprire dettagli
- Filtri e ricerca in toolbar
- Paginazione in basso

### Dettagli/Form

**Layout:** Card singola con form organizzato
**Struttura:**
```
┌─────────────────────────────────────────────┐
│ TITOLO ENTE                                 │
│ [← Indietro] [Salva] [Elimina]            │
├─────────────────────────────────────────────┤
│ Sezione 1                                   │
│ ┌─────────────────────────────────────────┐ │
│ │ Campo 1: [____________]                 │ │
│ │ Campo 2: [____________]                 │ │
│ └─────────────────────────────────────────┘ │
│                                             │
│ Sezione 2                                   │
│ ┌─────────────────────────────────────────┐ │
│ │ Campo 3: [____________]                 │ │
│ └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
```

**Caratteristiche:**
- Form organizzato in sezioni logiche
- Validazione in tempo reale
- Salvataggio con feedback visivo
- Cancel/Save buttons sempre visibili

## Responsive Design

### Desktop (>1024px)
- Sidebar sempre visibile (240-280px)
- Header full width
- Main content con margini laterali

### Tablet (768px - 1024px)
- Sidebar collassabile (icona per aprire)
- Sidebar overlay quando aperta
- Main content full width quando sidebar chiusa

### Mobile (<768px)
- Sidebar hidden di default
- Menu hamburger in header per aprire sidebar
- Sidebar overlay full screen quando aperta
- Main content full width
- Padding ridotto (16px invece di 24-32px)

## Transizioni e Animazioni

### Transizioni Pagina
- Fade-in su cambio pagina (200-300ms)
- Slide effect leggero per sidebar
- Smooth scroll per anchor links

### Interazioni Elementi
- Hover effects su card e button (scale/glow)
- Loading states con shimmer
- Success/Error feedback con toast notifications
- Smooth expand/collapse per menu sidebar

## Best Practices Raccolte

1. **Accessibilità**
   - Contrasto colori WCAG 2.1 AA
   - Navigazione da tastiera completa
   - Screen reader friendly
   - Focus states visibili

2. **Performance**
   - Lazy loading per contenuti pesanti
   - Virtual scrolling per liste lunghe
   - Immagini ottimizzate e lazy loaded
   - Code splitting per route

3. **UX**
   - Feedback immediato su azioni
   - Messaggi di errore chiari
   - Conferme per azioni distruttive
   - Tooltip per funzionalità non ovvie

4. **Coerenza**
   - Design system unificato
   - Spaziature standardizzate (4px, 8px, 16px, 24px, 32px)
   - Palette colori consistente
   - Tipografia gerarchica chiara

## Applicazione a Meetdrip

### Stile Premium Dark Mode
- Sfondo scuro (#0A0A0A) con gradienti radiali sottili
- Accenti oro (#FFD700) per elementi importanti
- Accenti blu (#00BFFF) per elementi secondari
- Card con shadow premium e blur effects
- Glassmorphism per elementi sovrapposti

### Integrazione Principio Indipendenza Utente
- Tutte le sezioni "Gestione" nella sidebar per configurazioni
- Interfacce admin separate ma integrate
- Due livelli: Vista utente + Vista gestione
- Niente dati hardcodati, tutto configurabile

### Design Responsive
- Mobile-first approach
- Breakpoint: 768px (tablet), 1024px (desktop)
- Test su diverse risoluzioni
- Touch-friendly su mobile (bottoni grandi, spaziature ampie)

## Note Implementazione

### Componenti React Chiave
1. `Layout` - Wrapper principale con Header + Sidebar + Main
2. `Header` - Barra superiore con logo, breadcrumb, user menu
3. `Sidebar` - Navigazione laterale con menu gerarchico
4. `MainContent` - Area contenuto scrollabile
5. `Dashboard` - Pagina dashboard con grid di card
6. `DataTable` - Componente tabella riutilizzabile
7. `FormCard` - Card per form con validazione

### Routing
- React Router per navigazione
- Route protette con autenticazione
- Lazy loading per route pesanti
- Breadcrumb dinamico basato su route

### State Management
- Zustand per stato globale (auth, UI preferences)
- React Query per dati server (cache, sync)
- Local state per form e UI temporanee

