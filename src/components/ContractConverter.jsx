import { useState } from 'react';
import { motion } from 'framer-motion';
import { GoogleGenerativeAI } from '@google/generative-ai';

export default function ContractConverter() {
  const [inputContract, setInputContract] = useState('');
  const [outputContract, setOutputContract] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Initialize Gemini API inside the component
  const initializeAI = () => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('API key is missing');
    }
    return new GoogleGenerativeAI(apiKey);
  };

  const convertContract = async () => {
    try {
      setLoading(true);
      setError(null);

      const genAI = initializeAI();
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      console.log('API Key:', import.meta.env.VITE_GEMINI_API_KEY); // Temporary for debugging

      const prompt = `
        Convert this Starknet smart contract to a privacy-enabled Calimero contract.
        Add necessary privacy features and data protection mechanisms.
        Original contract:
        ${inputContract}
        
        Please provide a detailed explanation of the privacy features added.
        Focus on:
        1. Data encryption mechanisms
        2. Access control features
        3. Privacy-preserving state management
        4. Secure communication channels
      `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      setOutputContract(text);
    } catch (err) {
      console.error('Conversion error:', err);
      if (err.message.includes('API_KEY_INVALID') || err.message.includes('API key is missing')) {
        setError('Invalid or missing API key. Please check your environment configuration.');
      } else {
        setError('Error converting contract: ' + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  // Floating elements data
  const floatingElements = [
    { icon: '🔒', className: 'bg-blue-500/10 border-blue-500/20', delay: 0 },
    { icon: '⚡', className: 'bg-purple-500/10 border-purple-500/20', delay: 0.2 },
    { icon: '🛡️', className: 'bg-pink-500/10 border-pink-500/20', delay: 0.4 },
    { icon: '🔐', className: 'bg-indigo-500/10 border-indigo-500/20', delay: 0.6 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-[100px]"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-[100px]"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Floating elements around boxes */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute hidden md:flex items-center justify-center w-12 h-12 
            ${element.className} rounded-lg backdrop-blur-sm`}
          style={{
            top: `${20 + (index * 25)}%`,
            left: index % 2 === 0 ? '5%' : '90%',
          }}
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span className="text-2xl">{element.icon}</span>
        </motion.div>
      ))}

      {/* Code lines animation */}
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={`line-${index}`}
          className="absolute hidden md:block h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
          style={{
            width: '100px',
            left: index % 2 === 0 ? '15%' : '80%',
            top: `${30 + (index * 10)}%`,
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            width: ['0%', '100%', '0%'],
          }}
          transition={{
            duration: 3,
            delay: index * 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Decorative circles between boxes */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-20 h-20 rounded-full border border-blue-500/20 relative">
          <div className="absolute inset-0.5 rounded-full border border-purple-500/20" />
          <div className="absolute inset-1 rounded-full border border-pink-500/20" />
          <div className="absolute inset-1.5 rounded-full border border-indigo-500/20" />
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Contract Privacy Converter
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Transform your Starknet contracts into privacy-enabled Calimero contracts
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 relative">
            {/* Connecting line animation */}
            <motion.div
              className="absolute top-1/2 left-1/2 w-16 h-1 -translate-x-1/2 -translate-y-1/2 hidden md:block"
              style={{
                background: 'linear-gradient(90deg, #3B82F6 0%, #8B5CF6 100%)'
              }}
              animate={{
                opacity: [0.5, 1, 0.5],
                width: ['0%', '100%', '0%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Input Contract */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300 relative"
            >
              <h2 className="text-xl font-semibold mb-4 text-white flex items-center">
                <span className="text-blue-400 mr-2">📝</span>
                Input Contract (Starknet)
              </h2>
              <textarea
                value={inputContract}
                onChange={(e) => setInputContract(e.target.value)}
                className="w-full h-[500px] p-4 bg-gray-900/50 text-white rounded-lg font-mono text-sm resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Paste your Starknet contract here..."
              />
              {/* Small floating elements near input box */}
              <motion.div
                className="absolute -top-6 -right-6 w-12 h-12 bg-blue-500/10 rounded-full backdrop-blur-sm flex items-center justify-center"
                animate={{
                  y: [-5, 5, -5],
                  x: [-5, 5, -5],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-2xl">⚡</span>
              </motion.div>
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-500/30 rounded-full"
                  style={{
                    top: `${20 + i * 30}%`,
                    right: '-10px',
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
              <motion.div
                className="absolute -right-4 top-1/2 w-8 h-[1px] bg-gradient-to-r from-blue-500/50 to-transparent"
                animate={{
                  scaleX: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Output Contract */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 transition-all duration-300 relative"
            >
              <h2 className="text-xl font-semibold mb-4 text-white flex items-center">
                <span className="text-purple-400 mr-2">🔒</span>
                Output Contract (Calimero)
              </h2>
              <div className="relative">
                <textarea
                  value={outputContract}
                  readOnly
                  className="w-full h-[500px] p-4 bg-gray-900/50 text-white rounded-lg font-mono text-sm resize-none"
                  placeholder="Your privacy-enabled contract will appear here..."
                />
                {loading && (
                  <div className="absolute inset-0 bg-gray-900/80 flex items-center justify-center rounded-lg backdrop-blur-sm">
                    <div className="text-center">
                      <motion.div 
                        className="h-16 w-16 border-4 border-blue-500 rounded-full border-t-transparent"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <p className="text-blue-400 mt-4">Converting...</p>
                    </div>
                  </div>
                )}
              </div>
              {/* Small floating elements near output box */}
              <motion.div
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-500/10 rounded-full backdrop-blur-sm flex items-center justify-center"
                animate={{
                  y: [5, -5, 5],
                  x: [5, -5, 5],
                  rotate: [0, -10, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-2xl">🔒</span>
              </motion.div>
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-500/30 rounded-full"
                  style={{
                    top: `${20 + i * 30}%`,
                    right: '-10px',
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
              <motion.div
                className="absolute -right-4 top-1/2 w-8 h-[1px] bg-gradient-to-r from-blue-500/50 to-transparent"
                animate={{
                  scaleX: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>

          {error && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-red-900/50 text-red-200 rounded-lg border border-red-700"
            >
              <p className="flex items-center">
                <span className="text-red-500 mr-2">⚠️</span>
                {error}
              </p>
            </motion.div>
          )}

          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.button
              onClick={convertContract}
              disabled={loading || !inputContract}
              className={`
                px-8 py-4 rounded-lg text-white font-semibold
                relative overflow-hidden
                ${loading || !inputContract 
                  ? 'bg-gray-700 cursor-not-allowed opacity-50' 
                  : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'}
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {loading ? 'Converting...' : 'Convert Contract'}
              
              {/* Button shine effect */}
              <motion.div
                className="absolute inset-0 bg-white/20"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 