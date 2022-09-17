import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home({ employees }) {

  const route = useRouter();

  useEffect(() => {
    route.push('/employee/list')
  }, [])
  

  return (
    <div>
      <h1>React App</h1>
    </div>
  )
}