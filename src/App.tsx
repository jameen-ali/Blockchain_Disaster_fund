import { useState } from 'react';
import { DonorDashboard } from './components/DonorDashboard';
import { GovernmentPanel } from './components/GovernmentPanel';
import { BeneficiaryWallet } from './components/BeneficiaryWallet';
import { MerchantPayment } from './components/MerchantPayment';
import { PublicAudit } from './components/PublicAudit';
import { ArrowRight } from 'lucide-react';

export default function App() {
  const [activeScreen, setActiveScreen] = useState('donor');

  const screens = [
    { id: 'donor', label: 'Donor Dashboard' },
    { id: 'government', label: 'Authority Console' },
    { id: 'beneficiary', label: 'Beneficiary Wallet' },
    { id: 'merchant', label: 'Vendor Payment' },
    { id: 'audit', label: 'Public Audit' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                DisasterChain Relief
              </h1>
              <p className="text-sm text-slate-400 mt-1">
                Blockchain-Powered Transparent Relief Distribution
              </p>
            </div>
            <div className="px-4 py-2 rounded-lg border border-teal-500/30 bg-teal-500/10">
              <span className="text-xs text-teal-400">● Live on Blockchain</span>
            </div>
          </div>
          
          {/* Navigation Tabs */}
          <nav className="flex gap-2 overflow-x-auto">
            {screens.map((screen) => (
              <button
                key={screen.id}
                onClick={() => setActiveScreen(screen.id)}
                className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
                  activeScreen === screen.id
                    ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/50'
                    : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {screen.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {activeScreen === 'donor' && <DonorDashboard />}
        {activeScreen === 'government' && <GovernmentPanel />}
        {activeScreen === 'beneficiary' && <BeneficiaryWallet />}
        {activeScreen === 'merchant' && <MerchantPayment />}
        {activeScreen === 'audit' && <PublicAudit />}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-black/50 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Flow Visualization */}
          <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
            <FlowStep label="Donate" color="teal" />
            <ArrowRight className="w-5 h-5 text-slate-600" />
            <FlowStep label="Verify" color="cyan" />
            <ArrowRight className="w-5 h-5 text-slate-600" />
            <FlowStep label="Control" color="green" />
            <ArrowRight className="w-5 h-5 text-slate-600" />
            <FlowStep label="Deliver" color="teal" />
            <ArrowRight className="w-5 h-5 text-slate-600" />
            <FlowStep label="Audit" color="cyan" />
          </div>

          {/* Quote */}
          <blockquote className="text-center text-lg text-slate-300 italic max-w-3xl mx-auto border-l-4 border-teal-500 pl-4">
            "We don't distribute money. We distribute verified survival value."
          </blockquote>

          <p className="text-center text-slate-500 text-sm mt-6">
            Powered by Blockchain Technology • Transparent • Immutable • Auditable
          </p>
        </div>
      </footer>
    </div>
  );
}

function FlowStep({ label, color }: { label: string; color: string }) {
  const colorClasses = {
    teal: 'from-teal-500 to-teal-600',
    cyan: 'from-cyan-500 to-cyan-600',
    green: 'from-green-500 to-green-600',
  };

  return (
    <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]} text-white text-sm font-medium shadow-lg`}>
      {label}
    </div>
  );
}
