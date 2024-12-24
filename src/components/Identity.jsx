import { useState } from 'react';

export default function Identity() {
  const [identityData, setIdentityData] = useState({
    name: '',
    email: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Will implement identity storage logic here
    console.log('Identity data:', identityData);
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">Manage Identity</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={identityData.name}
            onChange={(e) => setIdentityData({...identityData, name: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={identityData.email}
            onChange={(e) => setIdentityData({...identityData, email: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={identityData.description}
            onChange={(e) => setIdentityData({...identityData, description: e.target.value})}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
        >
          Save Identity
        </button>
      </form>
    </div>
  );
} 