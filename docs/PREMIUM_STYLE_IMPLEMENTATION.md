# Implementazione Stile Premium per Layout

> **PROMEMORIA AI:** Documento che descrive come applicare lo stile premium ai componenti del layout (Header, Sidebar, Main Content). Consultare REMINDERS.md per checklist completa.

## Panoramica

Lo stile premium è già definito in:
- `frontend/tailwind.config.js` - Colori, ombre, animazioni
- `frontend/src/index.css` - Classi CSS personalizzate (glass-card, premium-button, ecc.)

Questo documento descrive come applicare lo stile premium ai componenti del layout a tre zone.

## Stile Premium Disponibile

### Classi CSS Personalizzate (index.css)

1. **`.glass-card`** - Card con glassmorphism
   - Sfondo trasparente (`bg-white/5`)
   - Backdrop blur (`backdrop-blur-xl`)
   - Bordo sottile (`border-white/10`)
   - Shadow premium (`shadow-premium`)

2. **`.glass-card-hover`** - Card con hover effect
   - Estende `.glass-card`
   - Hover: sfondo più chiaro, bordo più visibile
   - Shadow più pronunciata su hover

3. **`.premium-input`** - Input field premium
   - Sfondo trasparente con blur
   - Focus glow con colore primary
   - Hover effects

4. **`.premium-button`** - Bottone principale
   - Gradiente oro (gradient-gold)
   - Glow effect dorato
   - Hover scale effect

5. **`.premium-button-secondary`** - Bottone secondario
   - Glass effect
   - Bordo sottile
   - Hover effects

6. **`.text-gradient-gold`** - Testo con gradiente oro
7. **`.text-gradient-blue`** - Testo con gradiente blu

### Colori Tailwind (tailwind.config.js)

- **`primary`**: #FFD700 (oro), varianti dark/light
- **`secondary`**: #00BFFF (blu), varianti dark/light
- **`background`**: #0F0F0F (scuro), card (#1A1A1A), elevated (#252525)

### Shadow Personalizzate

- **`shadow-premium`**: Ombra card standard
- **`shadow-premium-lg`**: Ombra card grande
- **`shadow-glow-gold`**: Glow dorato
- **`shadow-glow-blue`**: Glow blu
- **`shadow-inner-premium`**: Ombra interna

### Animazioni

- **`animate-fade-in`**: Fade in semplice
- **`animate-slide-up`**: Slide up con fade
- **`animate-glow-pulse`**: Pulse per effetti glow
- **`animate-shimmer`**: Shimmer effect per loading

## Applicazione al Layout

### 1. HEADER BAR (Barra Superiore)

#### Struttura Base
```tsx
<header className="fixed top-0 left-0 right-0 h-16 z-50 
                   bg-background/80 backdrop-blur-xl 
                   border-b border-white/10 
                   shadow-premium">
  {/* Contenuto header */}
</header>
```

#### Stile Dettagliato

**Container Header:**
- `fixed top-0 left-0 right-0` - Fixed position
- `h-16` - Altezza 64px
- `z-50` - Z-index alto per stare sopra tutto
- `bg-background/80` - Sfondo scuro con opacità 80% (semi-trasparente)
- `backdrop-blur-xl` - Blur dello sfondo (glassmorphism)
- `border-b border-white/10` - Bordo inferiore sottile
- `shadow-premium` - Ombra premium per profondità

**Logo Area (Sinistra):**
```tsx
<div className="flex items-center h-full px-6">
  <img src="/logoint.png" alt="Meetdrip" 
       className="h-10 w-auto" />
</div>
```

**Breadcrumb Area (Centro):**
```tsx
<nav className="flex items-center gap-2 text-sm text-gray-300">
  <a href="/dashboard" className="hover:text-primary transition-colors">Home</a>
  <span className="text-gray-500">/</span>
  <span className="text-white">Prodotti</span>
</nav>
```

**User Menu (Destra):**
```tsx
<div className="flex items-center gap-4 px-6">
  {/* Notifiche (opzionale) */}
  <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 
                     border border-white/10 transition-all">
    <BellIcon className="w-5 h-5 text-gray-300" />
  </button>
  
  {/* User Avatar + Dropdown */}
  <div className="relative">
    <button className="flex items-center gap-2 p-2 rounded-lg 
                       bg-white/5 hover:bg-white/10 
                       border border-white/10 transition-all">
      <div className="w-8 h-8 rounded-full bg-gradient-gold 
                      flex items-center justify-center">
        <UserIcon className="w-5 h-5 text-black" />
      </div>
    </button>
  </div>
</div>
```

**Mobile Menu Toggle:**
```tsx
<button className="lg:hidden p-2 rounded-lg bg-white/5 
                   hover:bg-white/10 border border-white/10">
  <MenuIcon className="w-6 h-6 text-white" />
</button>
```

### 2. SIDEBAR (Navigazione Laterale)

#### Struttura Base
```tsx
<aside className="fixed left-0 top-16 bottom-0 w-64 z-40
                  bg-background-card/95 backdrop-blur-xl
                  border-r border-white/10
                  overflow-y-auto">
  {/* Contenuto sidebar */}
</aside>
```

#### Stile Dettagliato

**Container Sidebar:**
- `fixed left-0 top-16 bottom-0` - Fixed, sotto header
- `w-64` - Larghezza 256px (16rem)
- `z-40` - Z-index sotto header
- `bg-background-card/95` - Sfondo card con trasparenza
- `backdrop-blur-xl` - Blur per glassmorphism
- `border-r border-white/10` - Bordo destro sottile
- `overflow-y-auto` - Scroll verticale se necessario

**Logo Sidebar (Piccolo):**
```tsx
<div className="p-4 border-b border-white/10">
  <img src="/logoint.png" alt="Meetdrip" 
       className="h-8 w-auto mx-auto" />
</div>
```

**Menu Navigation:**
```tsx
<nav className="p-4 space-y-1">
  {/* Menu Item Standard */}
  <a href="/dashboard" 
     className="flex items-center gap-3 px-4 py-3 rounded-lg
                text-gray-300 hover:text-white hover:bg-white/10
                transition-all duration-200
                group">
    <DashboardIcon className="w-5 h-5 group-hover:text-primary 
                              transition-colors" />
    <span className="font-medium">Dashboard</span>
  </a>
  
  {/* Menu Item Attivo */}
  <a href="/prodotti" 
     className="flex items-center gap-3 px-4 py-3 rounded-lg
                text-white bg-gradient-gold-subtle
                border border-primary/30
                shadow-glow-gold/50">
    <ProductIcon className="w-5 h-5 text-primary" />
    <span className="font-semibold">Prodotti</span>
  </a>
  
  {/* Menu Item con Sottomenu */}
  <div>
    <button className="flex items-center justify-between w-full 
                       px-4 py-3 rounded-lg
                       text-gray-300 hover:text-white hover:bg-white/10
                       transition-all duration-200
                       group">
      <div className="flex items-center gap-3">
        <WarehouseIcon className="w-5 h-5 group-hover:text-primary 
                                   transition-colors" />
        <span className="font-medium">Magazzino</span>
      </div>
      <ChevronDownIcon className="w-4 h-4 transition-transform" />
    </button>
    
    {/* Sottomenu */}
    <div className="ml-8 mt-1 space-y-1">
      <a href="/magazzino/inventario"
         className="flex items-center gap-3 px-4 py-2 rounded-lg
                    text-gray-400 hover:text-white hover:bg-white/5
                    transition-all duration-200 text-sm">
        <span>Inventario</span>
      </a>
      {/* Altri sottomenu... */}
    </div>
  </div>
</nav>
```

**Scrollbar Personalizzata (CSS aggiuntivo):**
```css
aside::-webkit-scrollbar {
  width: 6px;
}

aside::-webkit-scrollbar-track {
  background: transparent;
}

aside::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}

aside::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.2);
}
```

**Mobile Sidebar (Overlay):**
```tsx
{/* Mobile overlay quando sidebar aperta */}
{isMobileMenuOpen && (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 
                  lg:hidden"
       onClick={() => setIsMobileMenuOpen(false)} />
)}

{/* Sidebar mobile */}
<aside className={`
  fixed left-0 top-0 bottom-0 w-64 z-40
  bg-background-card backdrop-blur-xl
  border-r border-white/10
  transform transition-transform duration-300
  lg:hidden
  ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
`}>
  {/* Stesso contenuto della sidebar desktop */}
</aside>
```

### 3. MAIN CONTENT AREA (Area Contenuto)

#### Struttura Base
```tsx
<main className="ml-64 pt-16 min-h-screen
                 bg-background
                 transition-all duration-300">
  {/* Contenuto dinamico */}
</main>
```

#### Stile Dettagliato

**Container Main:**
- `ml-64` - Margine sinistro per sidebar (256px)
- `pt-16` - Padding top per header (64px)
- `min-h-screen` - Altezza minima schermo
- `bg-background` - Sfondo principale (con gradienti radiali dal body)
- Responsive: `lg:ml-64` e `lg:pt-16` (su mobile senza margini)

**Container Pagina:**
```tsx
<div className="p-6 lg:p-8 max-w-7xl mx-auto">
  {/* Contenuto pagina */}
</div>
```

**Dashboard - Grid Card:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Card Metrica */}
  <div className="glass-card p-6 hover:shadow-premium-lg 
                  transition-all duration-300 animate-fade-in">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-gray-400 text-sm font-medium">Vendite Oggi</h3>
      <div className="w-10 h-10 rounded-lg bg-primary/10 
                      flex items-center justify-center">
        <TrendingUpIcon className="w-5 h-5 text-primary" />
      </div>
    </div>
    <p className="text-3xl font-bold text-white mb-1">€1,234</p>
    <p className="text-sm text-green-400">+12% dal mese scorso</p>
  </div>
  
  {/* Altre card... */}
</div>
```

**Lista - Tabella:**
```tsx
<div className="glass-card overflow-hidden animate-fade-in">
  {/* Toolbar superiore */}
  <div className="p-6 border-b border-white/10 
                  flex items-center justify-between gap-4 flex-wrap">
    <h2 className="text-2xl font-bold text-white">Prodotti</h2>
    <div className="flex items-center gap-3">
      <button className="premium-button-secondary px-4 py-2">
        Filtri
      </button>
      <button className="premium-button px-4 py-2">
        + Nuovo Prodotto
      </button>
    </div>
  </div>
  
  {/* Tabella */}
  <div className="overflow-x-auto">
    <table className="w-full">
      <thead className="bg-white/5 border-b border-white/10">
        <tr>
          <th className="px-6 py-4 text-left text-sm font-semibold 
                         text-gray-300">Nome</th>
          <th className="px-6 py-4 text-left text-sm font-semibold 
                         text-gray-300">Prezzo</th>
          {/* Altre colonne... */}
        </tr>
      </thead>
      <tbody className="divide-y divide-white/5">
        <tr className="hover:bg-white/5 transition-colors cursor-pointer">
          <td className="px-6 py-4 text-white">Prodotto 1</td>
          <td className="px-6 py-4 text-white">€25.00</td>
          {/* Altre celle... */}
        </tr>
        {/* Altre righe... */}
      </tbody>
    </table>
  </div>
</div>
```

**Form - Dettagli:**
```tsx
<div className="glass-card p-8 animate-fade-in">
  {/* Header form */}
  <div className="flex items-center justify-between mb-6 pb-6 
                  border-b border-white/10">
    <h1 className="text-3xl font-bold text-gradient-gold">
      Nuovo Prodotto
    </h1>
    <div className="flex items-center gap-3">
      <button className="premium-button-secondary px-4 py-2">
        Annulla
      </button>
      <button className="premium-button px-4 py-2">
        Salva
      </button>
    </div>
  </div>
  
  {/* Form fields */}
  <div className="space-y-6">
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">
        Nome Prodotto
      </label>
      <input type="text" className="premium-input" />
    </div>
    
    {/* Altri campi... */}
  </div>
</div>
```

**Empty State:**
```tsx
<div className="glass-card p-12 text-center animate-fade-in">
  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 
                  flex items-center justify-center">
    <EmptyIcon className="w-8 h-8 text-primary" />
  </div>
  <h3 className="text-xl font-semibold text-white mb-2">
    Nessun prodotto trovato
  </h3>
  <p className="text-gray-400 mb-6">
    Inizia creando il tuo primo prodotto
  </p>
  <button className="premium-button px-6 py-3">
    + Crea Prodotto
  </button>
</div>
```

**Loading State:**
```tsx
<div className="glass-card p-8 animate-pulse">
  <div className="space-y-4">
    <div className="h-4 bg-white/10 rounded w-3/4"></div>
    <div className="h-4 bg-white/10 rounded w-1/2"></div>
    <div className="h-4 bg-white/10 rounded w-5/6"></div>
  </div>
</div>
```

## Responsive Design

### Mobile (< 768px)
```tsx
{/* Header - mobile menu toggle */}
<button className="lg:hidden" onClick={() => setIsMobileMenuOpen(true)}>
  <MenuIcon />
</button>

{/* Sidebar - overlay mobile */}
{isMobileMenuOpen && <MobileSidebar />}

{/* Main - senza margine sinistro su mobile */}
<main className="lg:ml-64 pt-16">
  <div className="p-4 lg:p-8">
    {/* Contenuto con padding ridotto */}
  </div>
</main>
```

### Tablet (768px - 1024px)
- Sidebar collassabile
- Sidebar overlay quando aperta
- Main content full width quando sidebar chiusa

### Desktop (> 1024px)
- Sidebar sempre visibile
- Main content con margine sinistro fisso

## Pattern Riutilizzabili

### Card Metrica (Dashboard)
```tsx
function MetricCard({ title, value, change, icon: Icon }) {
  return (
    <div className="glass-card p-6 hover:shadow-premium-lg 
                    transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-400 text-sm font-medium">{title}</h3>
        <div className="w-10 h-10 rounded-lg bg-primary/10 
                        flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>
      </div>
      <p className="text-3xl font-bold text-white mb-1">{value}</p>
      {change && (
        <p className={`text-sm ${change > 0 ? 'text-green-400' : 'text-red-400'}`}>
          {change > 0 ? '+' : ''}{change}%
        </p>
      )}
    </div>
  );
}
```

### Breadcrumb Navigation
```tsx
function Breadcrumb({ items }) {
  return (
    <nav className="flex items-center gap-2 text-sm">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span className="text-gray-500">/</span>}
          {index === items.length - 1 ? (
            <span className="text-white font-medium">{item.label}</span>
          ) : (
            <a href={item.href} 
               className="text-gray-300 hover:text-primary transition-colors">
              {item.label}
            </a>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
```

## Best Practices

1. **Consistenza**: Usa sempre le classi premium definite invece di creare nuovi stili inline
2. **Glassmorphism**: Applica `backdrop-blur-xl` e `bg-*/opacity` per effetti glass
3. **Ombre**: Usa `shadow-premium` per card standard, `shadow-premium-lg` per elementi grandi
4. **Accenti**: Usa `primary` (oro) per azioni principali, `secondary` (blu) per azioni secondarie
5. **Transizioni**: Aggiungi sempre `transition-all duration-200/300` per smoothness
6. **Hover States**: Sempre hover effects su elementi interattivi
7. **Animazioni**: Usa `animate-fade-in` per elementi che appaiono, `animate-slide-up` per transizioni

## Note Implementazione

- Tutte le classi premium sono già definite in `index.css` e `tailwind.config.js`
- Non usare valori hardcodati per colori/ombre, usa sempre le classi Tailwind o CSS personalizzate
- Testa sempre su mobile/tablet/desktop per verificare responsive design
- Mantieni coerenza con lo stile della pagina Login esistente

