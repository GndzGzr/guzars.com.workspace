

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default async function DefaultPage() {
  // First try to get language from cookies
  const cookieStore = await cookies();
  const langCookie = cookieStore.get('NEXT_LOCALE');
  
  // If no cookie, we'll redirect to 'en' and client-side code will handle any stored preference
  const initialLang = langCookie?.value || 'en';
  
  redirect(`/${initialLang}`);
}

