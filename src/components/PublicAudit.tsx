import { Box, ArrowRight, Search, Download, Shield, ExternalLink } from 'lucide-react';

export function PublicAudit() {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-2">Public Audit Trail</h2>
          <p className="text-slate-400">Immutable, transparent, blockchain-verified records</p>
        </div>
        <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-500/50">
          <Box className="w-10 h-10 text-cyan-400" />
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard
          label="Total Transactions"
          value="45,673"
          color="teal"
        />
        <StatCard
          label="Total Distributed"
          value="₹12.5 Cr"
          color="cyan"
        />
        <StatCard
          label="Active Beneficiaries"
          value="12,547"
          color="green"
        />
        <StatCard
          label="Verified Vendors"
          value="1,234"
          color="teal"
        />
      </div>

      {/* Search and Filter */}
      <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm text-slate-400 mb-2">Search Transaction</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Transaction ID, Wallet Address, or Hash"
                className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-10 pr-4 py-3 text-white focus:border-teal-500 focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-2">Category</label>
            <select className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-teal-500 focus:outline-none">
              <option>All Categories</option>
              <option>Food & Water</option>
              <option>Medicine</option>
              <option>Shelter</option>
              <option>Emergency</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-2">Date Range</label>
            <select className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-teal-500 focus:outline-none">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
              <option>All Time</option>
            </select>
          </div>
        </div>
        <div className="mt-4 flex gap-3">
          <button className="px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-600 text-white transition-colors flex items-center gap-2">
            <Search className="w-4 h-4" />
            Search
          </button>
          <button className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        </div>
      </div>

      {/* Transaction List */}
      <div className="bg-slate-900 rounded-xl border border-slate-700 overflow-hidden">
        <div className="p-6 border-b border-slate-700">
          <h4 className="text-lg font-semibold flex items-center gap-2">
            <Shield className="w-5 h-5 text-teal-400" />
            Recent Transactions
          </h4>
        </div>
        <div className="divide-y divide-slate-700">
          <TransactionRow
            txHash="0x7a9f...7a6e"
            from="Donor Pool"
            to="BEN-KL-082547"
            amount="2,500"
            category="Relief Token Issuance"
            timestamp="Dec 29, 2024 - 14:32"
            blockNumber="18,945,892"
          />
          <TransactionRow
            txHash="0x3c2e...5d4b"
            from="BEN-KL-082547"
            to="VEN-KL-00423"
            amount="250"
            category="Medicine"
            timestamp="Dec 29, 2024 - 12:15"
            blockNumber="18,945,847"
          />
          <TransactionRow
            txHash="0x1b8d...3a2e"
            from="BEN-MH-071234"
            to="VEN-MH-00891"
            amount="350"
            category="Food & Water"
            timestamp="Dec 29, 2024 - 11:48"
            blockNumber="18,945,821"
          />
          <TransactionRow
            txHash="0x4f6a...1f0d"
            from="Government Authority"
            to="BEN-KL-083621"
            amount="3,000"
            category="Relief Token Issuance"
            timestamp="Dec 29, 2024 - 10:22"
            blockNumber="18,945,782"
          />
          <TransactionRow
            txHash="0x5e9c...9c8b"
            from="BEN-TN-054789"
            to="VEN-TN-00567"
            amount="180"
            category="Medicine"
            timestamp="Dec 29, 2024 - 09:55"
            blockNumber="18,945,756"
          />
          <TransactionRow
            txHash="0x2d1b...8b7a"
            from="BEN-KL-082547"
            to="VEN-KL-00234"
            amount="450"
            category="Shelter Supplies"
            timestamp="Dec 29, 2024 - 08:30"
            blockNumber="18,945,712"
          />
        </div>
      </div>

      {/* Blockchain Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 border border-cyan-500/50 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-lg bg-cyan-500/20">
              <Box className="w-6 h-6 text-cyan-400" />
            </div>
            <h4 className="text-lg font-semibold">Blockchain Network</h4>
          </div>
          <div className="space-y-3">
            <InfoRow label="Network" value="Polygon (Layer 2)" />
            <InfoRow label="Block Time" value="~2 seconds" />
            <InfoRow label="Smart Contract" value="0xRSC...9a2f" link />
            <InfoRow label="Total Blocks" value="18,945,892" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 border border-teal-500/50 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-lg bg-teal-500/20">
              <Shield className="w-6 h-6 text-teal-400" />
            </div>
            <h4 className="text-lg font-semibold">Audit Features</h4>
          </div>
          <div className="space-y-3 text-sm">
            <AuditFeature text="Real-time transaction monitoring" />
            <AuditFeature text="Immutable record keeping" />
            <AuditFeature text="Public accessibility & transparency" />
            <AuditFeature text="Smart contract verification" />
          </div>
        </div>
      </div>

      {/* Transparency Statement */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-green-500/10 border border-teal-500/30 p-8">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        <div className="relative">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-4 rounded-full bg-teal-500/30 border border-teal-500">
              <Box className="w-8 h-8 text-teal-400" />
            </div>
            <div>
              <h4 className="text-2xl font-semibold text-white mb-3">
                Immutable, Public, Audit-Ready Records
              </h4>
              <p className="text-slate-300 text-lg">
                Every transaction is permanently recorded on the blockchain, ensuring complete transparency and accountability. 
                Anyone can verify the flow of funds from donors to beneficiaries.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Feature
              title="Tamper-Proof"
              description="Blockchain ensures no transaction can be altered or deleted"
            />
            <Feature
              title="Real-Time Tracking"
              description="Monitor fund distribution as it happens"
            />
            <Feature
              title="Open Access"
              description="Public audit trail accessible to all stakeholders"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, color }: { label: string; value: string; color: string }) {
  const colorClasses = {
    teal: 'from-teal-500/20 to-teal-600/20 border-teal-500/50',
    cyan: 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/50',
    green: 'from-green-500/20 to-green-600/20 border-green-500/50',
  };

  const textColors = {
    teal: 'text-teal-400',
    cyan: 'text-cyan-400',
    green: 'text-green-400',
  };

  return (
    <div className={`bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} rounded-xl p-6 border`}>
      <p className="text-sm text-slate-400 mb-2">{label}</p>
      <p className={`text-3xl font-bold ${textColors[color as keyof typeof textColors]}`}>{value}</p>
    </div>
  );
}

function TransactionRow({ txHash, from, to, amount, category, timestamp, blockNumber }: {
  txHash: string;
  from: string;
  to: string;
  amount: string;
  category: string;
  timestamp: string;
  blockNumber: string;
}) {
  const getCategoryColor = (cat: string) => {
    if (cat.includes('Food')) return 'bg-green-500/20 text-green-400';
    if (cat.includes('Medicine')) return 'bg-cyan-500/20 text-cyan-400';
    if (cat.includes('Issuance')) return 'bg-teal-500/20 text-teal-400';
    if (cat.includes('Shelter')) return 'bg-yellow-500/20 text-yellow-400';
    return 'bg-slate-500/20 text-slate-400';
  };

  return (
    <div className="p-6 hover:bg-slate-800/50 transition-colors">
      <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
        <div className="flex-1 min-w-[200px]">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs text-slate-500">TX Hash</span>
            <span className="font-mono text-sm text-teal-400">{txHash}</span>
            <button className="p-1 hover:bg-slate-700 rounded transition-colors">
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </button>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-slate-400">{from}</span>
            <ArrowRight className="w-4 h-4 text-slate-600" />
            <span className="text-white">{to}</span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xl font-semibold text-white mb-1">{amount} RSC</p>
          <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(category)}`}>
            {category}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span>{timestamp}</span>
        <span>Block #{blockNumber}</span>
      </div>
    </div>
  );
}

function InfoRow({ label, value, link }: { label: string; value: string; link?: boolean }) {
  return (
    <div className="flex justify-between items-center text-sm">
      <span className="text-slate-400">{label}</span>
      <div className="flex items-center gap-2">
        <span className="text-white">{value}</span>
        {link && <ExternalLink className="w-3 h-3 text-slate-400" />}
      </div>
    </div>
  );
}

function AuditFeature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
      <span className="text-slate-300">{text}</span>
    </div>
  );
}

function Feature({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
      <h5 className="font-semibold text-white mb-1">{title}</h5>
      <p className="text-sm text-slate-400">{description}</p>
    </div>
  );
}
