import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="container mx-auto my-5 flex h-16 flex-col items-center justify-between space-y-3 border-t px-3 pt-4 text-center sm:h-20 sm:flex-row sm:pt-2 md:text-lg">
      <div>
        Powered by{' '}
        <a
          href="https://www.convex.dev"
          target="_blank"
          className="font-bold transition hover:text-black/50"
        >
          Convex,{' '}
        </a>
        <a
          href="https://www.together.ai"
          target="_blank"
          className="font-bold transition hover:text-black/50"
        >
          Together
        </a>
        , and{' '}
        <a
          href="https://www.replicate.com"
          target="_blank"
          className="font-bold transition hover:text-black/50"
        >
          Replicate
        </a>
      </div>
      <div className="flex space-x-4 pb-4 sm:pb-0">
        <Link
          href="https://twitter.com/auralgenius"
          className="group"
          aria-label="Twitter"
        >
          <svg
            aria-hidden="true"
            className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
          >
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.615 11.615 0 0 0 6.29 1.84" />
          </svg>
        </Link>
      </div>
    </footer>
  );
}
