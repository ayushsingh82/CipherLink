import { useState } from 'react';
import { connect, disconnect } from 'get-starknet';

export default function Wallet() {
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const connectWallet = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Connect to Argent wallet
      const wallet = await connect({
        modalMode: 'alwaysAsk',
        modalTheme: 'light',
        wallets: ['argentX'],
        include: ['argentX']
      });

      if (!wallet?.isConnected) {
        throw new Error('Failed to connect to ArgentX');
      }

      // Get the account
      const address = wallet.selectedAddress;
      setAccount(address);
      
      console.log('Connected to wallet:', address);
      
    } catch (error) {
      console.error('Connection failed:', error);
      setError('Failed to connect: ' + (error.message || 'Unknown error'));
    } finally {
      setLoading(false);
    }
  };

  const disconnectWallet = async () => {
    try {
      await disconnect();
      setAccount(null);
    } catch (error) {
      console.error('Disconnect failed:', error);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">Starknet Wallet</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      {!account ? (
        <button 
          onClick={connectWallet}
          disabled={loading}
          className={`w-full bg-blue-500 text-white px-6 py-3 rounded-lg
            ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
        >
          {loading ? 'Connecting...' : 'Connect ArgentX Wallet'}
        </button>
      ) : (
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">Connected Account</p>
            <p className="font-mono">{account.slice(0,6)}...{account.slice(-4)}</p>
          </div>
          <button
            onClick={disconnectWallet}
            className="w-full bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600"
          >
            Disconnect Wallet
          </button>
        </div>
      )}
    </div>
  );
} 