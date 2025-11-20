# Istruzioni Setup Iniziale

## 1. Configurazione Backend

### Crea il file .env nella cartella backend

Crea il file `backend/.env` e aggiungi:

```
DATABASE_URL=postgresql://neondb_owner:npg_thHcn1e7YwCu@ep-muddy-truth-ags9u8wb-pooler.c-2.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
JWT_SECRET=genera-una-chiave-segreta-qui
PIN_HASH=c7e616822f366fb1b5e0756af498cc11d2c0862edcb32ca65882f622ff39de1b
PORT=5000
NODE_ENV=development
```

**Importante**: 
- Genera una chiave segreta per JWT_SECRET (puoi usare un generatore online o `openssl rand -base64 32`)
- Il PIN_HASH è l'hash SHA-256 del PIN di accesso (già configurato per il PIN predefinito)
- **NON modificare mai PIN_HASH a meno che tu non sappia come generare l'hash corretto**

## 2. Installazione Dipendenze

### Opzione A: Installazione dalla root (consigliata)
```bash
npm run install:all
```

Questo installerà le dipendenze di root, backend e frontend.

### Opzione B: Installazione separata

**Backend**
```bash
cd backend
npm install
```

**Frontend**
```bash
cd frontend
npm install
```

## 3. Avvio

### Opzione A: Avvio dalla root (consigliata)
Dalla cartella principale del progetto (`Meetdrip_Data`):
```bash
npm run dev
```

Questo avvierà automaticamente sia backend che frontend in un unico terminale.

**Protocollo di avvio automatico:**
- Libera automaticamente le porte 3000 (frontend) e 5000 (backend) se occupate
- Controlla errori TypeScript prima di avviare
- Se trova errori, si ferma e mostra gli errori da correggere
- Se tutto è ok, avvia backend e frontend

**URL sempre fissi:**
- Frontend: `http://localhost:3000` (sempre la stessa porta)
- Backend: `http://localhost:5000`

Per dettagli completi sul protocollo di avvio, vedi `docs/STARTUP_PROTOCOL.md`

### Opzione B: Avvio separato

**Terminale 1 - Backend**
```bash
cd backend
npm run dev
```

Il server partirà su `http://localhost:5000`

**Terminale 2 - Frontend**
```bash
cd frontend
npm run dev
```

Il frontend partirà su `http://localhost:3000` (porta fissa, non cambia)

## 4. Test

1. Apri `http://localhost:3000`
2. Dovresti vedere la pagina di login con campo PIN
3. Inserisci il PIN di accesso per entrare nel gestionale

## Note

- Il file `.env` è già nel `.gitignore` quindi non verrà committato
- Assicurati di avere Node.js 18+ installato
- Il frontend è configurato con proxy per le API su `/api`

