import { Link } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
  isSubmitting: boolean;
  to: string;
  type: string;
};

export default function Button({ children, isSubmitting, to, type }: Props) {
  const base =
    'inline-block text-sm rounded-full bg-yellow-500 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-200 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed';

  const styles = {
    primary: base + 'px-4 py-3 sm:px-6 sm:py-4',
    small: base + 'py-2 md:px-5 md:py-2.5 px-4 text-xs',
    secondary:
      'inline-block text-sm -full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-200 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={isSubmitting} className={styles[type]}>
      {children}
    </button>
  );
}
