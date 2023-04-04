/* eslint-disable no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';
import UserCard from './UserCard';

export default function User({ userId, onCancel }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [user, setUser] = useState();

  /* your code here (hint: useEffect) */
  useEffect(() => {
    async function fetchList() {
      let ignore = false;
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const jsonData = await response.json();
        if (!ignore) {
          console.log('My jsonData:', jsonData)
          setIsLoading(false)
          return setUser(jsonData)
        }
        throw new Error('There was an error', error)
      }
      catch {
        setError(true)
      }
      return () => {
        ignore = true;
      }
    }
    fetchList()
  }, [error, userId])

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    console.error('Fetch error:', error);
    return <p>Error! {error.message}</p>;
  }

  return (
    <div>
      <button onClick={() => onCancel()}>Close</button>
      <UserCard user={user} />
    </div>
  );
}
