"use client";

import React, { useState, useEffect } from 'react';

export default function WaitlistAdmin() {
  const [waitlistData, setWaitlistData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [adminKey, setAdminKey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const fetchWaitlistData = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/waitlist', {
        headers: {
          'Authorization': `Bearer ${adminKey}`
        }
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch waitlist data');
      }
      
      const { data } = await response.json();
      setWaitlistData(data);
      setIsAuthenticated(true);
    } catch (err) {
      console.error('Error fetching waitlist data:', err);
      setError(err.message);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWaitlistData();
  };

  return (
    <div className="min-h-screen bg-dark-200 text-light-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Waitlist Admin</h1>
        
        {!isAuthenticated ? (
          <div className="bg-dark-300 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-bold mb-4">Authentication Required</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="adminKey" className="block text-sm font-medium mb-2">
                  Admin Key
                </label>
                <input
                  type="password"
                  id="adminKey"
                  value={adminKey}
                  onChange={(e) => setAdminKey(e.target.value)}
                  className="w-full bg-dark-200 border border-dark-100 rounded-lg p-3 text-light-100"
                  required
                />
              </div>
              {error && (
                <div className="bg-red-500/20 border border-red-500/30 p-3 rounded-lg text-red-200 mb-4">
                  {error}
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-light-100 py-3 rounded-lg transition-colors"
                disabled={isLoading}
              >
                {isLoading ? 'Loading...' : 'Access Waitlist Data'}
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-dark-300 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Waitlist Entries ({waitlistData.length})</h2>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="bg-dark-100 hover:bg-dark-100/80 text-light-100 px-4 py-2 rounded-lg text-sm"
              >
                Logout
              </button>
            </div>
            
            {waitlistData.length === 0 ? (
              <p className="text-center py-8 text-light-100/60">No waitlist entries found.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-dark-100">
                      <th className="text-left py-3 px-4">Name</th>
                      <th className="text-left py-3 px-4">Email</th>
                      <th className="text-left py-3 px-4">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {waitlistData.map((entry) => (
                      <tr key={entry.id} className="border-b border-dark-100/30 hover:bg-dark-200/50">
                        <td className="py-3 px-4">{entry.name}</td>
                        <td className="py-3 px-4">{entry.email}</td>
                        <td className="py-3 px-4">{new Date(entry.created_at).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => {
                  const csv = [
                    ['Name', 'Email', 'Date'].join(','),
                    ...waitlistData.map(entry => [
                      entry.name,
                      entry.email,
                      new Date(entry.created_at).toLocaleString()
                    ].join(','))
                  ].join('\n');
                  
                  const blob = new Blob([csv], { type: 'text/csv' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.setAttribute('href', url);
                  a.setAttribute('download', `waitlist-${new Date().toISOString().split('T')[0]}.csv`);
                  a.click();
                }}
                className="bg-primary hover:bg-primary/90 text-light-100 px-4 py-2 rounded-lg text-sm"
              >
                Export CSV
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 