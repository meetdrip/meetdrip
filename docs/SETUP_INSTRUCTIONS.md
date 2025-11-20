# Istruzioni Setup Iniziale

## 1. Configurazione Database

### Crea il file .env nella cartella backend

Copia `.env.example` e rinominalo in `.env`, poi aggiungi:

```
DATABASE_URL=postgresql://neondb_owner:npg_thHcn1e7YwCu@ep-muddy-truth-ags9u8wb-pooler.c-2.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
JWT_SECRET=genera-una-chiave-segreta-qui
PORT=5000
NODE_ENV=development
```

**Importante**: Genera una chiave segreta per JWT_SECRET (puoi usare un generatore online o `openssl rand -base64 32`)

### Crea la tabella users nel database

Esegui la migrazione SQL nel tuo database Neon:

```sql
-- File: backend/src/db/migrations/001_create_users_table.sql
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
```

Puoi eseguirlo direttamente dal dashboard di Neon o usando un client PostgreSQL.

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
2. Dovresti vedere la pagina di login
3. Per testare, crea prima un utente tramite API o aggiungi direttamente nel database

## Note

- Il file `.env` è già nel `.gitignore` quindi non verrà committato
- Assicurati di avere Node.js 18+ installato
- Il frontend è configurato con proxy per le API su `/api`

