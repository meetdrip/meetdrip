import MainContent from '../components/layout/MainContent';

export default function Dashboard() {
  return (
    <MainContent>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gradient-gold mb-2">
              Dashboard
            </h1>
            <p className="text-gray-400">Benvenuto nella tua area riservata</p>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Metric Card 1 */}
          <div className="glass-card p-6 hover:shadow-premium-lg 
                          transition-all duration-300 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-400 text-sm font-medium">Vendite Oggi</h3>
              <div className="w-10 h-10 rounded-lg bg-primary/10 
                              flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            <p className="text-3xl font-bold text-white mb-1">€1,234</p>
            <p className="text-sm text-green-400">+12% dal mese scorso</p>
          </div>

          {/* Metric Card 2 */}
          <div className="glass-card p-6 hover:shadow-premium-lg 
                          transition-all duration-300 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-400 text-sm font-medium">Prodotti in Magazzino</h3>
              <div className="w-10 h-10 rounded-lg bg-secondary/10 
                              flex items-center justify-center">
                <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
            </div>
            <p className="text-3xl font-bold text-white mb-1">156</p>
            <p className="text-sm text-gray-400">Prodotti disponibili</p>
          </div>

          {/* Metric Card 3 */}
          <div className="glass-card p-6 hover:shadow-premium-lg 
                          transition-all duration-300 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-400 text-sm font-medium">Clienti Attivi</h3>
              <div className="w-10 h-10 rounded-lg bg-primary/10 
                              flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
            <p className="text-3xl font-bold text-white mb-1">42</p>
            <p className="text-sm text-gray-400">Clienti registrati</p>
          </div>
        </div>

        {/* Recent Activity Card */}
        <div className="glass-card overflow-hidden animate-fade-in">
          <div className="p-6 border-b border-white/10">
            <h2 className="text-2xl font-bold text-white">Attività Recenti</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">Nuova vendita</p>
                  <p className="text-sm text-gray-400">€125.00 - 5 minuti fa</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">Prodotto aggiunto</p>
                  <p className="text-sm text-gray-400">Cannabis Premium - 15 minuti fa</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium">Nuovo cliente registrato</p>
                  <p className="text-sm text-gray-400">1 ora fa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainContent>
  );
}

