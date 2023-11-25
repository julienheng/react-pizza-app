import { Link, useNavigate } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
  to: string;
};

export default function LinkButton({ children, to }: Props) {
  const navigate = useNavigate();
  const className = 'text-sm text-blue-500 hover:text-blue-600 hover:underline';

  if (to === '-1')
    return <button onClick={() => navigate(-1)}>&larr; Go back</button>;

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}
