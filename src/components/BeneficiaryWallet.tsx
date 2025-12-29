import { Wallet, CheckCircle, Clock, ShieldCheck, Apple, Pill, Home, Zap } from 'lucide-react';

export function BeneficiaryWallet() {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-2">Beneficiary Relief Wallet</h2>
          <p className="text-slate-400">Identity-bound digital relief tokens</p>
        </div>
        <div className="px-4 py-2 rounded-lg border border-green-500/50 bg-green-500/20 flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-green-400" />
          <span className="text-sm text-green-400">Identity Verified</span>
        </div>
      </div>

      {/* Main Wallet Card */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-green-500 rounded-2xl opacity-20 blur-xl"></div>
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 border border-teal-500/50 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-teal-500/20 border border-teal-500/50">
              <Wallet className="w-8 h-8 text-teal-400" />
            </div>
            <div>
              <p className="text-sm text-slate-400">Available Balance</p>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
                2,500 RSC
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-950/50 rounded-lg p-4 border border-slate-700">
              <p className="text-xs text-slate-400 mb-1">Beneficiary ID</p>
              <p className="text-sm font-mono text-white">BEN-2024-KL-082547</p>
            </div>
            <div className="bg-slate-950/50 rounded-lg p-4 border border-slate-700">
              <p className="text-xs text-slate-400 mb-1">Disaster Relief</p>
              <p className="text-sm text-white">Kerala Floods 2024</p>
            </div>
            <div className="bg-slate-950/50 rounded-lg p-4 border border-slate-700">
              <p className="text-xs text-slate-400 mb-1">Wallet Type</p>
              <p className="text-sm text-white">Identity-Bound</p>
            </div>
          </div>
        </div>
      </div>

      {/* Allowed Categories */}
      <div className="bg-slate-900 rounded-xl p-6 border border-green-500/30">
        <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-green-400" />
          Allowed Spending Categories
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <CategoryCard
            icon={<Apple className="w-5 h-5" />}
            name="Food & Water"
            status="Allowed"
            color="green"
          />
          <CategoryCard
            icon={<Pill className="w-5 h-5" />}
            name="Medicine"
            status="Allowed"
            color="green"
          />
          <CategoryCard
            icon={<Home className="w-5 h-5" />}
            name="Shelter Supplies"
            status="Allowed"
            color="green"
          />
          <CategoryCard
            icon={<Zap className="w-5 h-5" />}
            name="Emergency Items"
            status="Allowed"
            color="green"
          />
        </div>
        <p className="text-sm text-slate-400 mt-4 flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
          <span>Non-cash, identity-bound relief tokens ensure funds are used only for essential survival needs</span>
        </p>
      </div>

      {/* Token Expiry */}
      <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl p-6 border border-yellow-500/30">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-yellow-500/20 border border-yellow-500/50 flex-shrink-0">
            <Clock className="w-6 h-6 text-yellow-400" />
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-yellow-400 mb-2">Token Expiry Notice</h4>
            <p className="text-slate-300 mb-3">
              Relief tokens expire in 90 days to ensure timely utilization and prevent misuse
            </p>
            <div className="bg-slate-950/50 rounded-lg p-4 border border-slate-700">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-slate-400">Days Remaining</span>
                <span className="text-lg font-semibold text-yellow-400">68 days</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
        <h4 className="text-lg font-semibold mb-4">Recent Transactions</h4>
        <div className="space-y-3">
          <TransactionItem
            vendor="Ration Shop - Ernakulam"
            category="Food & Water"
            amount={350}
            date="Dec 28, 2024"
            status="Completed"
          />
          <TransactionItem
            vendor="Medical Store - Kerala"
            category="Medicine"
            amount={180}
            date="Dec 27, 2024"
            status="Completed"
          />
          <TransactionItem
            vendor="Relief Supply Center"
            category="Shelter Supplies"
            amount={450}
            date="Dec 26, 2024"
            status="Completed"
          />
          <TransactionItem
            vendor="Emergency Goods Depot"
            category="Emergency Items"
            amount={220}
            date="Dec 25, 2024"
            status="Completed"
          />
        </div>
      </div>

      {/* Security Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-900 rounded-xl p-6 border border-cyan-500/30">
          <div className="flex items-center gap-3 mb-3">
            <ShieldCheck className="w-5 h-5 text-cyan-400" />
            <h4 className="font-semibold">Identity Verification</h4>
          </div>
          <p className="text-sm text-slate-400 mb-4">
            Biometric authentication ensures tokens cannot be transferred or misused
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-slate-300">Aadhaar Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-slate-300">Fingerprint Registered</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-slate-300">Face Recognition Active</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 border border-teal-500/30">
          <div className="flex items-center gap-3 mb-3">
            <Wallet className="w-5 h-5 text-teal-400" />
            <h4 className="font-semibold">Non-Transferable</h4>
          </div>
          <p className="text-sm text-slate-400 mb-4">
            Tokens are locked to your identity and cannot be sold or transferred
          </p>
          <div className="bg-slate-950/50 rounded-lg p-3 border border-slate-700">
            <p className="text-xs text-slate-400 mb-1">Protection Level</p>
            <p className="text-sm text-teal-400 font-semibold">Maximum Security</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CategoryCard({ icon, name, status, color }: {
  icon: React.ReactNode;
  name: string;
  status: string;
  color: string;
}) {
  return (
    <div className={`bg-slate-950/50 rounded-lg p-4 border border-${color}-500/30 hover:border-${color}-500/60 transition-all`}>
      <div className={`p-2 rounded-lg bg-${color}-500/20 w-fit mb-2`}>
        <span className={`text-${color}-400`}>{icon}</span>
      </div>
      <p className="text-sm font-semibold text-white mb-1">{name}</p>
      <span className={`text-xs px-2 py-1 rounded-full bg-${color}-500/20 text-${color}-400`}>
        {status}
      </span>
    </div>
  );
}

function TransactionItem({ vendor, category, amount, date, status }: {
  vendor: string;
  category: string;
  amount: number;
  date: string;
  status: string;
}) {
  return (
    <div className="bg-slate-950/50 rounded-lg p-4 border border-slate-700 hover:border-slate-600 transition-colors">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h5 className="font-semibold text-white mb-1">{vendor}</h5>
          <p className="text-xs text-slate-400">{category}</p>
        </div>
        <div className="text-right">
          <p className="font-semibold text-teal-400">-{amount} RSC</p>
          <p className="text-xs text-slate-400">{date}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">
          {status}
        </span>
      </div>
    </div>
  );
}
