type Props = {
  children: React.ReactNode;
  isSubmitting: boolean;
};

export default function Button({ children, isSubmitting }: Props) {
  return (
    <button
      disabled={isSubmitting}
      className="inline-block rounded-full bg-yellow-500 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-200 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4"
    >
      {children}
    </button>
  );
}
