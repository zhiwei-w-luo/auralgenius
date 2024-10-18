import { api } from '@/convex/_generated/api';
import { preloadQuery } from 'convex/nextjs';
import ManageAccountItem from './account';
import { getAuthToken } from '../auth';

const ServerDashboardHomePage = async () => {
  const token = await getAuthToken();

  const preloadedNotes = await preloadQuery(api.notes.getNotes, {}, { token });

  return <ManageAccountItem preloadedNotes={preloadedNotes} />;

};

export default ServerDashboardHomePage;