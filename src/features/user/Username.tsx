/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from 'react-redux';

export default function Username() {
  const username = useSelector((state: any) => state.user.username);

  if (!username) return null;

  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}
