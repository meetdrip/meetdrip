const { exec } = require('child_process');
const { promisify } = require('util');
const { spawn } = require('child_process');

const execAsync = promisify(exec);

(async () => {
  try {
    // 1. Controllo porta 3000
    console.log('\n🔍 [FRONTEND] Controllo porta 3000...');
    
    try {
      const { stdout, stderr } = await execAsync('npx kill-port 3000');
      if (stdout) console.log(stdout);
      if (stderr) console.error(stderr);
      console.log('✅ [FRONTEND] Porta 3000 liberata (o già libera)');
    } catch (error) {
      console.log('✅ [FRONTEND] Porta 3000 liberata (o già libera)');
    }
    
    // 2. Controllo TypeScript
    console.log('🔍 [FRONTEND] Controllo TypeScript...');
    
    try {
      await execAsync('cd frontend && npm run type-check');
      console.log('✅ [FRONTEND] TypeScript: nessun errore\n');
    } catch (error) {
      console.error('\n❌ [FRONTEND] TypeScript: errori trovati\n');
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
    
    // 3. Avvio frontend
    console.log('🚀 [FRONTEND] Avvio server di sviluppo...\n');
    const vite = spawn('npm', ['run', 'dev'], {
      cwd: './frontend',
      stdio: 'inherit',
      shell: true
    });
    
    vite.on('error', (error) => {
      console.error('❌ [FRONTEND] Errore avvio:', error);
      process.exit(1);
    });
    
    vite.on('exit', (code) => {
      process.exit(code);
    });
  } catch (error) {
    console.error('❌ [FRONTEND] Errore durante i controlli:', error);
    process.exit(1);
  }
})();

