import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Landing() {
  // Animation variants
  const floatingAnimation = {
    y: [-10, 10],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section with Enhanced Animation */}
      <div className="relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-40 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <div className="container mx-auto px-4 py-24 relative">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Privacy-First Smart Contracts
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Bridging Starknet's scalability with Calimero's privacy features to create the next generation of secure, private smart contracts
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/converter"
                className="inline-flex items-center px-8 py-4 rounded-lg text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Converting
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Platform Features */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700">
              <div className="text-blue-400 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Starknet Powered</h3>
              <p className="text-gray-400">
                Leverage Starknet's powerful Layer 2 scaling solution with zero-knowledge proofs for high-performance smart contracts
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700">
              <div className="text-purple-400 text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-3">Calimero Privacy</h3>
              <p className="text-gray-400">
                Enhance your contracts with Calimero's advanced privacy features, ensuring data confidentiality and secure transactions
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700">
              <div className="text-pink-400 text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Conversion</h3>
              <p className="text-gray-400">
                Seamlessly convert your contracts using advanced AI while maintaining security and functionality
              </p>
            </div>
          </motion.div>

          {/* How It Works Section */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              How It Works
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <motion.div 
                className="flex-1 max-w-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gray-800/50 p-8 rounded-xl h-full backdrop-blur-sm border border-gray-700">
                  <div className="text-2xl mb-4">1️⃣</div>
                  <h3 className="text-lg font-semibold mb-2">Paste Your Contract</h3>
                  <p className="text-gray-400">Input your Starknet smart contract code in our converter</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex-1 max-w-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gray-800/50 p-8 rounded-xl h-full backdrop-blur-sm border border-gray-700">
                  <div className="text-2xl mb-4">2️⃣</div>
                  <h3 className="text-lg font-semibold mb-2">AI Processing</h3>
                  <p className="text-gray-400">Our AI analyzes and adds privacy features to your contract</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex-1 max-w-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gray-800/50 p-8 rounded-xl h-full backdrop-blur-sm border border-gray-700">
                  <div className="text-2xl mb-4">3️⃣</div>
                  <h3 className="text-lg font-semibold mb-2">Get Private Contract</h3>
                  <p className="text-gray-400">Receive your privacy-enhanced Calimero contract instantly</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Additional Features Section */}
          <motion.div 
            className="my-24 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Why Choose Our Platform?
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <motion.div 
                className="p-6 bg-gray-800/30 rounded-xl border border-gray-700"
                whileHover={{ scale: 1.02 }}
                animate={floatingAnimation}
              >
                <div className="text-3xl mb-4">🔐</div>
                <h3 className="text-xl font-semibold mb-3">Enhanced Privacy</h3>
                <p className="text-gray-400">
                  State-of-the-art encryption and privacy features powered by Calimero's technology
                </p>
              </motion.div>
              
              <motion.div 
                className="p-6 bg-gray-800/30 rounded-xl border border-gray-700"
                whileHover={{ scale: 1.02 }}
                animate={floatingAnimation}
              >
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
                <p className="text-gray-400">
                  Instant contract conversion with Starknet's scalability
                </p>
              </motion.div>
              
              <motion.div 
                className="p-6 bg-gray-800/30 rounded-xl border border-gray-700"
                whileHover={{ scale: 1.02 }}
                animate={floatingAnimation}
              >
                <div className="text-3xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold mb-3">AI-Powered</h3>
                <p className="text-gray-400">
                  Advanced AI algorithms ensure accurate and secure contract conversion
                </p>
              </motion.div>
              
              <motion.div 
                className="p-6 bg-gray-800/30 rounded-xl border border-gray-700"
                whileHover={{ scale: 1.02 }}
                animate={floatingAnimation}
              >
                <div className="text-3xl mb-4">🛡️</div>
                <h3 className="text-xl font-semibold mb-3">Battle-Tested</h3>
                <p className="text-gray-400">
                  Built on proven technologies from Starknet and Calimero
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Footer Section */}
        <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800 mt-20">
          <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  CipherLink
                </h3>
                <p className="text-gray-400">
                  Empowering privacy in smart contracts through AI-driven solutions
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/converter" className="hover:text-white transition-colors">Converter</Link></li>
                  <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                  <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="https://docs.starknet.io" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Starknet Docs</a></li>
                  <li><a href="https://docs.calimero.network" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Calimero Docs</a></li>
                  <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Connect</h4>
                <div className="flex space-x-4">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                  </a>
                  <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"></path></svg>
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path></svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>© 2024 CipherLink. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
} 