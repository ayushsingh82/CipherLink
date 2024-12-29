import { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini API
const genAI = new GoogleGenerativeAI('YOUR_GEMINI_API_KEY');

export default function ContractConverter() {
  const [inputContract, setInputContract] = useState('');
  const [outputContract, setOutputContract] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const convertContract = async () => {
    try {
      setLoading(true);
      setError(null);

      // Initialize the model
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const prompt = `
        Convert this Starknet smart contract to a privacy-enabled Calimero contract.
        Add necessary privacy features and data protection mechanisms.
        Original contract:
        ${inputContract}
        
        Please provide a detailed explanation of the privacy features added.
      `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      setOutputContract(text);
    } catch (err) {
      setError('Error converting contract: ' + err.message);
      console.error('Conversion error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Contract Privacy Converter
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Input Contract (Starknet)</h2>
            <textarea
              value={inputContract}
              onChange={(e) => setInputContract(e.target.value)}
              className="w-full h-96 p-4 bg-gray-800 text-white rounded-lg font-mono"
              placeholder="Paste your Starknet contract here..."
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Output Contract (Calimero)</h2>
            <div className="relative">
              <textarea
                value={outputContract}
                readOnly
                className="w-full h-96 p-4 bg-gray-800 text-white rounded-lg font-mono"
                placeholder="Converted contract will appear here..."
              />
              {loading && (
                <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center rounded-lg">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                </div>
              )}
            </div>
          </div>
        </div>

        {error && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <div className="mt-8 text-center">
          <button
            onClick={convertContract}
            disabled={loading || !inputContract}
            className={`
              px-8 py-4 rounded-lg text-white font-semibold
              ${loading || !inputContract 
                ? 'bg-gray-500 cursor-not-allowed' 
                : 'bg-blue-500 hover:bg-blue-600'}
            `}
          >
            {loading ? 'Converting...' : 'Convert Contract'}
          </button>
        </div>
      </div>
    </div>
  );
} 