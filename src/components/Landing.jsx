import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Privacy-First Smart Contracts
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Convert your Starknet contracts to privacy-enabled Calimero contracts instantly
          </p>
          <Link 
            to="/converter"
            className="bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            Start Converting
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="text-blue-400 text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-3">Privacy Guaranteed</h3>
            <p className="text-gray-400">
              Your contracts are converted with privacy-first principles using Calimero's technology
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="text-blue-400 text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-3">Instant Conversion</h3>
            <p className="text-gray-400">
              AI-powered conversion process ensures quick and accurate results
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="text-blue-400 text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-semibold mb-3">Security First</h3>
            <p className="text-gray-400">
              Built on Starknet's security with Calimero's privacy features
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex-1 max-w-sm">
              <div className="bg-gray-800 p-6 rounded-xl h-full">
                <div className="text-2xl mb-4">1️⃣</div>
                <h3 className="text-lg font-semibold mb-2">Paste Your Contract</h3>
                <p className="text-gray-400">Input your Starknet smart contract code</p>
              </div>
            </div>
            <div className="flex-1 max-w-sm">
              <div className="bg-gray-800 p-6 rounded-xl h-full">
                <div className="text-2xl mb-4">2️⃣</div>
                <h3 className="text-lg font-semibold mb-2">AI Processing</h3>
                <p className="text-gray-400">Our AI analyzes and converts your contract</p>
              </div>
            </div>
            <div className="flex-1 max-w-sm">
              <div className="bg-gray-800 p-6 rounded-xl h-full">
                <div className="text-2xl mb-4">3️⃣</div>
                <h3 className="text-lg font-semibold mb-2">Get Private Contract</h3>
                <p className="text-gray-400">Receive your privacy-enabled Calimero contract</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 