import { TrendingUp, Lock, ExternalLink, CheckCircle2, Copy } from 'lucide-react';

export function DonorDashboard() {
  const txHash = '0x7a9f3c2e1b8d4f6a5e9c2d1b8a7f3e4c5d6b9a8e7f6c5d4b3a2e1f0d9c8b7a6e5d4';

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Donor Dashboard</h2>
        <p className="text-slate-400">Track your contribution with complete transparency</p>
      </div>

      {/* Main Stats Card */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl opacity-20 blur-xl"></div>
        <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-teal-500/50 shadow-2xl">
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-sm text-slate-400 mb-2">Total Donated</p>
              <h3 className="text-5xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                ₹2,50,000
              </h3>
            </div>
            <div className="p-3 rounded-xl bg-teal-500/20 border border-teal-500/50">
              <TrendingUp className="w-8 h-8 text-teal-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoCard label="Disaster Name" value="Kerala Floods 2024" />
            <InfoCard label="Fund Status" value="Locked in Escrow" icon={<Lock className="w-4 h-4" />} />
          </div>
        </div>
      </div>

      {/* Blockchain Transaction Card */}
      <div className="bg-slate-900 rounded-xl p-6 border border-cyan-500/30 shadow-lg hover:border-cyan-500/60 transition-all">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold text-cyan-400">Blockchain Transaction</h4>
          <CheckCircle2 className="w-5 h-5 text-green-400" />
        </div>
        
        <div className="space-y-3">
          <div>
            <p className="text-xs text-slate-400 mb-1">Transaction Hash</p>
            <div className="flex items-center gap-2 p-3 bg-slate-950 rounded-lg border border-slate-700 font-mono text-sm">
              <span className="flex-1 truncate text-cyan-300">{txHash}</span>
              <button className="p-1 hover:bg-slate-800 rounded transition-colors">
                <Copy className="w-4 h-4 text-slate-400" />
              </button>
              <button className="p-1 hover:bg-slate-800 rounded transition-colors">
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-xs text-slate-400 mb-1">Block Number</p>
              <p className="text-sm text-white">18,945,672</p>
            </div>
            <div>
              <p className="text-xs text-slate-400 mb-1">Confirmations</p>
              <p className="text-sm text-green-400">256</p>
            </div>
            <div>
              <p className="text-xs text-slate-400 mb-1">Gas Used</p>
              <p className="text-sm text-white">21,000</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tagline Banner */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-teal-500/20 via-cyan-500/20 to-green-500/20 border border-teal-500/30 p-6">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        <div className="relative flex items-center gap-4">
          <div className="p-3 rounded-full bg-teal-500/30 border border-teal-500">
            <CheckCircle2 className="w-6 h-6 text-teal-400" />
          </div>
          <div>
            <h4 className="text-xl font-semibold text-white mb-1">Complete Transparency</h4>
            <p className="text-slate-300">Every rupee is traceable on the blockchain</p>
          </div>
        </div>
      </div>

      {/* Fund Allocation Preview */}
      <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
        <h4 className="text-lg font-semibold mb-4">Fund Allocation</h4>
        <div className="space-y-3">
          <AllocationBar category="Food & Water" amount="₹1,00,000" percentage={40} color="teal" />
          <AllocationBar category="Medical Supplies" amount="₹75,000" percentage={30} color="cyan" />
          <AllocationBar category="Shelter & Clothing" amount="₹50,000" percentage={20} color="green" />
          <AllocationBar category="Emergency Services" amount="₹25,000" percentage={10} color="teal" />
        </div>
      </div>
    </div>
  );
}

function InfoCard({ label, value, icon }: { label: string; value: string; icon?: React.ReactNode }) {
  return (
    <div className="bg-slate-950/50 rounded-lg p-4 border border-slate-700">
      <p className="text-xs text-slate-400 mb-1">{label}</p>
      <div className="flex items-center gap-2">
        <p className="text-lg text-white">{value}</p>
        {icon && <span className="text-teal-400">{icon}</span>}
      </div>
    </div>
  );
}

function AllocationBar({ category, amount, percentage, color }: { category: string; amount: string; percentage: number; color: string }) {
  const colorClasses = {
    teal: 'bg-teal-500',
    cyan: 'bg-cyan-500',
    green: 'bg-green-500',
  };

  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-slate-300">{category}</span>
        <span className="text-white">{amount}</span>
      </div>
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <div
          className={`h-full ${colorClasses[color as keyof typeof colorClasses]} rounded-full transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
