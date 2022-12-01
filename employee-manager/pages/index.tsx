import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {

  const route = useRouter();

  // Redirect to the main employee listing page on load
  useEffect(() => {
    route.push('/employee/list')
  }, []);
  

  return (
    <div>
      <h1>Redirecting...</h1>
    </div>
  )
}