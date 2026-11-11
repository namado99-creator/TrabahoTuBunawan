import React, { createContext, useContext, useState } from 'react';
import { initialApplications } from '../data/mockData';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  const [savedIds, setSavedIds] = useState([1]);
  const [applications, setApplications] = useState(initialApplications);

  const toggleSaved = (jobId) =>
    setSavedIds((cur) => (cur.includes(jobId) ? cur.filter((i) => i !== jobId) : [...cur, jobId]));

  const hasApplied = (jobId) =>
    applications.some((a) => a.jobId === jobId && a.status !== 'withdrawn');

  const addApplication = ({ jobId, name, phone, message }) => {
    const id = applications.length + 1;
    setApplications([{ id, jobId, name, phone, message, status: 'pending', appliedAt: new Date().toISOString().slice(0, 10) }, ...applications]);
    return id;
  };

  const withdrawApplication = (id) =>
    setApplications((cur) => cur.map((a) => (a.id === id ? { ...a, status: 'withdrawn' } : a)));

  return (
    <AppContext.Provider value={{ user, setUser, savedIds, toggleSaved, applications, hasApplied, addApplication, withdrawApplication }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
