import { useState, useEffect } from 'react';

export default function Starknet() {
  const [strkPrice, setStrkPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStrkPrice = async () => {
      try {
        // Using CoinGecko API to fetch STRK price
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=starknet&vs_currencies=usd');
        const data = await response.json();
        setStrkPrice(data.starknet.usd);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch STRK price');
        setLoading(false);
        console.error('Error fetching STRK price:', err);
      }
    };

    fetchStrkPrice();
    // Refresh price every 60 seconds
    const interval = setInterval(fetchStrkPrice, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">STRK/USD Price</h2>
      {loading ? (
        <div className="text-gray-600">Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <div className="flex items-center">
          <span className="text-2xl font-bold text-green-600">
            ${strkPrice ? strkPrice.toFixed(2) : 'N/A'}
          </span>
          <span className="ml-2 text-gray-500">USD</span>
        </div>
      )}
      <p className="mt-2 text-sm text-gray-500">
        Last updated: {new Date().toLocaleTimeString()}
      </p>
    </div>
  );
}