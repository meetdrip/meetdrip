# Preferenze

> **PROMEMORIA AI:** Aggiornare quando cambiano preferenze utente, approccio sviluppo o convenzioni. Consultare REMINDERS.md per checklist completa.

## Checklist Pre-Modifica (CONSULTARE PRIMA DI OGNI MODIFICA)

Prima di modificare qualsiasi file o codice, verificare:

- [ ] Ho chiesto esplicitamente il permesso all'utente?
- [ ] Ho aspettato una chiara conferma dell'utente?
- [ ] Sto modificando SOLO la parte richiesta e i componenti strettamente necessari?
- [ ] Non sto toccando altre parti non correlate?
- [ ] Ho consultato REMINDERS.md per aggiornare i documenti se necessario?

**Se anche solo una risposta è NO, NON procedere con la modifica.**

## Stile di Comunicazione
- Parlare solo italiano dove possibile
- Spiegazioni semplici, senza gergo tecnico
- L'utente non ha conoscenze informatiche o di programmazione

## Documentazione
- I documenti devono essere scritti per l'AI, non per l'utente
- Scrivere i documenti nel modo che l'AI capisce meglio, anche se tecnico
- I documenti servono come riferimento per l'AI durante il lavoro

## Convenzioni di Codice
- 

## Struttura File/Cartelle
- 

## Approccio allo Sviluppo
- Chiedere sempre esplicitamente il permesso prima di modificare qualsiasi cosa
- Aspettare una chiara conferma dell'utente prima di procedere
- Se il permesso non viene dato o non c'è conferma, non toccare niente
- Quando si modifica una parte specifica, modificare SOLO quella parte e i componenti strettamente necessari
- Non toccare altre parti del codice non correlate alla modifica richiesta
- Modifiche mirate, non refactoring globale quando non richiesto

## Principio di Indipendenza Utente (Web App)
- Rendere l'utente il più indipendente possibile dall'AI per la gestione dell'app
- NON hardcodare dati configurabili (tipi, categorie, elementi di vista, configurazioni)
- Creare SEMPRE interfacce di gestione/admin per tutto ciò che può essere gestito dall'utente
- L'app deve avere due livelli:
  - Vista utente: uso normale dell'applicazione
  - Vista gestione/admin: dove l'utente può creare/modificare tipi, elementi, configurazioni, ecc.
- L'utente deve poter gestire tutto dall'app senza bisogno di modifiche al codice
- Pensare all'app come se avesse sempre una parte "amministrativa" o "gestione" integrata
- Esempi: se creo una tabella prodotti con "Tipi", devo creare un manager per gestire i tipi; se creo una vista con elementi, devo permettere la gestione degli elementi dall'app

## Design Responsive (Web App)
- Le web app devono funzionare su PC, tablet e telefoni
- Devono adattarsi sia a schermo intero che a finestra normale
- Tutte le dimensioni devono essere dinamiche e flessibili
- Usare unità relative (%, rem, em, vw, vh) invece di valori fissi (px) quando possibile
- Implementare media queries per breakpoint diversi
- Layout che si adattano automaticamente alle dimensioni dello schermo
- Testare su diverse risoluzioni e dispositivi

