const { exec } = require('child_process');
const { promisify } = require('util');
const { spawn } = require('child_process');

const execAsync = promisify(exec);

(async () => {
  try {
    // 1. Controllo porta 5000
    console.log('\n🔍 [BACKEND] Controllo porta 5000...');
    
    try {
      const { stdout, stderr } = await execAsync('npx kill-port 5000');
      if (stdout) console.log(stdout);
      if (stderr) console.error(stderr);
      console.log('✅ [BACKEND] Porta 5000 liberata (o già libera)');
    } catch (error) {
      console.log('✅ [BACKEND] Porta 5000 liberata (o già libera)');
    }
    
    // 2. Controllo TypeScript
    console.log('🔍 [BACKEND] Controllo TypeScript...');
    
    try {
      await execAsync('cd backend && npm run type-check');
      console.log('✅ [BACKEND] TypeScript: nessun errore\n');
    } catch (error) {
      console.error('\n❌ [BACKEND] TypeScript: errori trovati\n');
      console.error('═'.repeat(60));
      if (error.stdout) {
        console.error(error.stdout);
      }
      if (error.stderr) {
        console.error(error.stderr);
      }
      if (!error.stdout && !error.stderr) {
        console.error(error.message);
      }
      console.error('═'.repeat(60));
      console.error('\n⚠️  Correggere gli errori prima di riavviare\n');
      process.exit(1);
    }
    
    // 3. Avvio backend
    console.log('🚀 [BACKEND] Avvio server di sviluppo...\n');
    const express = spawn('npm', ['run', 'dev'], {
      cwd: './backend',
      stdio: 'inherit',
      shell: true
    });
    
    express.on('error', (error) => {
      console.error('❌ [BACKEND] Errore avvio:', error);
      process.exit(1);
    });
    
    express.on('exit', (code) => {
      process.exit(code);
    });
  } catch (error) {
    console.error('❌ [BACKEND] Errore durante i controlli:', error);
    process.exit(1);
  }
})();

