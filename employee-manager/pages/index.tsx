import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {

  const route = useRouter();

  // Redirect to the main employee listing page
  useEffect(() => {
    route.push('/employee/list')
  }, []);
  

  return (
    <div>
      <h1>React App</h1>
    </div>
  )
}