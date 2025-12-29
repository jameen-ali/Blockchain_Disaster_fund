import { Shield, CheckCircle, Users, Coins, Lock, AlertTriangle } from 'lucide-react';

export function GovernmentPanel() {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-2">Disaster Authority Console</h2>
          <p className="text-slate-400">Government-authorized disaster management interface</p>
        </div>
        <div className="p-4 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/50">
          <Shield className="w-10 h-10 text-green-400" />
        </div>
      </div>

      {/* Wallet Status */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 border border-green-500/50 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <Lock className="w-5 h-5 text-green-400" />
          <h4 className="text-lg font-semibold">Authorized Government Wallet</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-950/50 rounded-lg p-4 border border-slate-700">
            <p className="text-xs text-slate-400 mb-1">Wallet Address</p>
            <p className="text-sm font-mono text-green-400">0xGOV...4f3a2c1b</p>
          </div>
          <div className="bg-slate-950/50 rounded-lg p-4 border border-slate-700">
            <p className="text-xs text-slate-400 mb-1">Authority Level</p>
            <p className="text-sm text-white">National Disaster Response Force</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ActionButton
          icon={<AlertTriangle className="w-6 h-6" />}
          title="Verify Disaster"
          description="Authenticate disaster event on blockchain"
          color="cyan"
          status="Active"
        />
        <ActionButton
          icon={<Users className="w-6 h-6" />}
          title="Approve Beneficiary List"
          description="Verify and approve relief recipients"
          color="teal"
          status="Pending"
        />
        <ActionButton
          icon={<Coins className="w-6 h-6" />}
          title="Issue Relief Tokens"
          description="Distribute RSC tokens to beneficiaries"
          color="green"
          status="Ready"
        />
      </div>

      {/* Security Notice */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 border border-yellow-500/30 p-6">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-yellow-500/20 border border-yellow-500/50 flex-shrink-0">
            <Shield className="w-6 h-6 text-yellow-400" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-yellow-400 mb-2">Multi-Signature Authorization Required</h4>
            <p className="text-slate-300">
              Only authorized government wallets can issue relief tokens. All actions are logged on the blockchain and require multi-signature approval from designated authorities.
            </p>
          </div>
        </div>
      </div>

      {/* Current Operations */}
      <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
        <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-teal-400" />
          Current Operations
        </h4>
        <div className="space-y-3">
          <OperationItem
            operation="Kerala Floods 2024"
            status="Active"
            beneficiaries={12547}
            tokensIssued={125470000}
            verified={true}
          />
          <OperationItem
            operation="Cyclone Michaung Relief"
            status="In Progress"
            beneficiaries={8932}
            tokensIssued={89320000}
            verified={true}
          />
          <OperationItem
            operation="Earthquake Response - Uttarakhand"
            status="Pending Verification"
            beneficiaries={0}
            tokensIssued={0}
            verified={false}
          />
        </div>
      </div>

      {/* Blockchain Integration */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-900 rounded-xl p-6 border border-cyan-500/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-cyan-500/20">
              <Shield className="w-5 h-5 text-cyan-400" />
            </div>
            <h4 className="font-semibold">Smart Contract</h4>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-400">Contract Address</span>
              <span className="font-mono text-cyan-400">0xRSC...9a2f</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Network</span>
              <span className="text-white">Polygon</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Gas Optimized</span>
              <span className="text-green-400">Yes</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 border border-green-500/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-green-500/20">
              <Coins className="w-5 h-5 text-green-400" />
            </div>
            <h4 className="font-semibold">Token Economics</h4>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-400">Total Supply</span>
              <span className="text-white">500M RSC</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">In Circulation</span>
              <span className="text-green-400">214.7M RSC</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Locked in Escrow</span>
              <span className="text-yellow-400">285.3M RSC</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ActionButton({ icon, title, description, color, status }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  status: string;
}) {
  const colorClasses = {
    cyan: 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/50 hover:border-cyan-500',
    teal: 'from-teal-500/20 to-teal-600/20 border-teal-500/50 hover:border-teal-500',
    green: 'from-green-500/20 to-green-600/20 border-green-500/50 hover:border-green-500',
  };

  const statusColors = {
    'Active': 'text-green-400',
    'Pending': 'text-yellow-400',
    'Ready': 'text-cyan-400',
  };

  return (
    <button className={`relative bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} rounded-xl p-6 border transition-all hover:scale-105 hover:shadow-xl text-left group`}>
      <div className="flex items-start justify-between mb-3">
        <div className={`p-3 rounded-lg bg-${color}-500/30 text-${color}-400 group-hover:scale-110 transition-transform`}>
          {icon}
        </div>
        <span className={`text-xs px-2 py-1 rounded-full bg-slate-950/50 ${statusColors[status as keyof typeof statusColors]}`}>
          {status}
        </span>
      </div>
      <h4 className="text-lg font-semibold mb-1 text-white">{title}</h4>
      <p className="text-sm text-slate-400">{description}</p>
    </button>
  );
}

function OperationItem({ operation, status, beneficiaries, tokensIssued, verified }: {
  operation: string;
  status: string;
  beneficiaries: number;
  tokensIssued: number;
  verified: boolean;
}) {
  const statusColors = {
    'Active': 'bg-green-500/20 text-green-400 border-green-500/50',
    'In Progress': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50',
    'Pending Verification': 'bg-slate-500/20 text-slate-400 border-slate-500/50',
  };

  return (
    <div className="bg-slate-950/50 rounded-lg p-4 border border-slate-700 hover:border-slate-600 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h5 className="font-semibold text-white">{operation}</h5>
            {verified && <CheckCircle className="w-4 h-4 text-green-400" />}
          </div>
          <span className={`text-xs px-2 py-1 rounded-full border ${statusColors[status as keyof typeof statusColors]}`}>
            {status}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-slate-400">Beneficiaries</p>
          <p className="text-white">{beneficiaries.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-slate-400">Tokens Issued</p>
          <p className="text-white">{tokensIssued.toLocaleString()} RSC</p>
        </div>
      </div>
    </div>
  );
}
