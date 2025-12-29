import { QrCode, Fingerprint, CheckCircle2, XCircle, Store, Shield, AlertCircle } from 'lucide-react';

export function MerchantPayment() {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-2">Verified Vendor Payment</h2>
          <p className="text-slate-400">Smart contract-enabled merchant interface</p>
        </div>
        <div className="px-4 py-2 rounded-lg border border-cyan-500/50 bg-cyan-500/20 flex items-center gap-2">
          <Store className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-cyan-400">Verified Merchant</span>
        </div>
      </div>

      {/* Merchant Info */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 border border-cyan-500/50 shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-4 rounded-xl bg-cyan-500/20 border border-cyan-500/50">
            <Store className="w-8 h-8 text-cyan-400" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Kerala Medical Supplies</h3>
            <p className="text-sm text-slate-400">Authorized Relief Vendor</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-950/50 rounded-lg p-3 border border-slate-700">
            <p className="text-xs text-slate-400 mb-1">Vendor ID</p>
            <p className="text-sm font-mono text-white">VEN-KL-00423</p>
          </div>
          <div className="bg-slate-950/50 rounded-lg p-3 border border-slate-700">
            <p className="text-xs text-slate-400 mb-1">Category</p>
            <p className="text-sm text-white">Medicine & Medical</p>
          </div>
          <div className="bg-slate-950/50 rounded-lg p-3 border border-slate-700">
            <p className="text-xs text-slate-400 mb-1">Verification Status</p>
            <div className="flex items-center gap-1">
              <Shield className="w-3 h-3 text-green-400" />
              <p className="text-sm text-green-400">Verified</p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Screens */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* QR Code Scan */}
        <div className="bg-slate-900 rounded-xl p-6 border border-teal-500/30 shadow-lg">
          <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <QrCode className="w-5 h-5 text-teal-400" />
            Scan Beneficiary QR Code
          </h4>
          
          {/* QR Code Display */}
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl opacity-20 blur-lg"></div>
            <div className="relative bg-white rounded-xl p-8 flex items-center justify-center">
              <div className="w-48 h-48 border-4 border-slate-900 rounded-lg relative overflow-hidden">
                {/* QR Code Pattern */}
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <rect x="5" y="5" width="20" height="20" fill="#000" />
                  <rect x="30" y="5" width="5" height="5" fill="#000" />
                  <rect x="40" y="5" width="10" height="5" fill="#000" />
                  <rect x="75" y="5" width="20" height="20" fill="#000" />
                  <rect x="5" y="30" width="5" height="5" fill="#000" />
                  <rect x="15" y="30" width="5" height="5" fill="#000" />
                  <rect x="30" y="30" width="15" height="5" fill="#000" />
                  <rect x="50" y="30" width="5" height="5" fill="#000" />
                  <rect x="75" y="30" width="5" height="5" fill="#000" />
                  <rect x="85" y="30" width="5" height="5" fill="#000" />
                  <rect x="5" y="40" width="5" height="10" fill="#000" />
                  <rect x="15" y="40" width="5" height="5" fill="#000" />
                  <rect x="30" y="40" width="5" height="5" fill="#000" />
                  <rect x="40" y="45" width="10" height="5" fill="#000" />
                  <rect x="55" y="40" width="15" height="5" fill="#000" />
                  <rect x="75" y="40" width="5" height="10" fill="#000" />
                  <rect x="85" y="45" width="5" height="5" fill="#000" />
                  <rect x="5" y="75" width="20" height="20" fill="#000" />
                  <rect x="30" y="75" width="5" height="5" fill="#000" />
                  <rect x="40" y="80" width="10" height="5" fill="#000" />
                  <rect x="55" y="75" width="5" height="10" fill="#000" />
                  <rect x="75" y="75" width="20" height="20" fill="#000" />
                </svg>
                {/* Corner Markers */}
                <div className="absolute top-2 left-2 w-6 h-6 border-4 border-teal-500"></div>
                <div className="absolute top-2 right-2 w-6 h-6 border-4 border-teal-500"></div>
                <div className="absolute bottom-2 left-2 w-6 h-6 border-4 border-teal-500"></div>
              </div>
            </div>
          </div>

          <p className="text-sm text-slate-400 text-center">
            Beneficiary scans this QR code to initiate payment
          </p>
        </div>

        {/* Biometric Authentication */}
        <div className="bg-slate-900 rounded-xl p-6 border border-cyan-500/30 shadow-lg">
          <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Fingerprint className="w-5 h-5 text-cyan-400" />
            Biometric Authentication
          </h4>

          {/* Fingerprint Display */}
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl opacity-20 blur-lg"></div>
            <div className="relative bg-gradient-to-br from-slate-950 to-slate-800 rounded-xl p-8 flex items-center justify-center border border-cyan-500/30">
              <div className="relative">
                <Fingerprint className="w-32 h-32 text-cyan-400" strokeWidth={1} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 border-2 border-cyan-500 rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-slate-400 text-center mb-4">
            Place finger on scanner for identity verification
          </p>

          <div className="bg-slate-950/50 rounded-lg p-3 border border-slate-700">
            <div className="flex items-center justify-center gap-2 text-sm">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-400">Waiting for biometric input...</span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Selection */}
      <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
        <h4 className="text-lg font-semibold mb-4">Transaction Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm text-slate-400 mb-2">Spending Category</label>
            <select className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-teal-500 focus:outline-none">
              <option>Medicine & Healthcare</option>
              <option>Food & Water</option>
              <option>Shelter Supplies</option>
              <option>Emergency Items</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-2">Amount (RSC)</label>
            <input
              type="number"
              placeholder="Enter amount"
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-teal-500 focus:outline-none"
              defaultValue="250"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-2">Item Description</label>
          <input
            type="text"
            placeholder="e.g., Essential medications"
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-teal-500 focus:outline-none"
            defaultValue="Antibiotics and pain relief medication"
          />
        </div>
      </div>

      {/* Payment States */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Success State */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/50 p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-green-500/20 border border-green-500 flex-shrink-0">
              <CheckCircle2 className="w-8 h-8 text-green-400" />
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-semibold text-green-400 mb-2">Payment Approved</h4>
              <p className="text-slate-300 mb-4">
                Transaction successfully processed for essential category
              </p>
              <div className="bg-slate-950/50 rounded-lg p-4 border border-slate-700 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Transaction ID</span>
                  <span className="font-mono text-green-400">TXN-2024-0847291</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Amount</span>
                  <span className="text-white">250 RSC</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Category</span>
                  <span className="text-white">Medicine & Healthcare</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Status</span>
                  <span className="text-green-400">Confirmed on Blockchain</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Error State */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-red-500/10 to-rose-500/10 border border-red-500/50 p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-red-500/20 border border-red-500 flex-shrink-0">
              <XCircle className="w-8 h-8 text-red-400" />
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-semibold text-red-400 mb-2">Transaction Blocked</h4>
              <p className="text-slate-300 mb-4">
                Payment rejected - Non-essential category detected
              </p>
              <div className="bg-slate-950/50 rounded-lg p-4 border border-slate-700 space-y-3">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="text-red-400 font-semibold mb-1">Category Violation</p>
                    <p className="text-slate-400">
                      Attempted purchase: Electronics (Non-Essential)
                    </p>
                  </div>
                </div>
                <div className="text-xs text-slate-500 bg-slate-900/50 rounded p-2">
                  Smart contract rules prevent spending on non-essential items
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Smart Contract Rules */}
      <div className="bg-slate-900 rounded-xl p-6 border border-teal-500/30">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-5 h-5 text-teal-400" />
          <h4 className="text-lg font-semibold">Smart Contract Protection</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-green-400">✓ Allowed Categories</p>
            <ul className="text-sm text-slate-300 space-y-1 ml-4">
              <li>• Food & Water</li>
              <li>• Medicine & Healthcare</li>
              <li>• Shelter Materials</li>
              <li>• Emergency Supplies</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-semibold text-red-400">✗ Blocked Categories</p>
            <ul className="text-sm text-slate-300 space-y-1 ml-4">
              <li>• Electronics</li>
              <li>• Luxury Goods</li>
              <li>• Entertainment</li>
              <li>• Cash Withdrawal</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
