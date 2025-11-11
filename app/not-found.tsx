export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="mx-auto text-center p-8 rounded-lg">
        <div className="mb-6 flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 14 14"
            className="text-green-900"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M2 6a4 4 0 1 1 8 0a4 4 0 0 1-8 0m4-6a6 6 0 1 0 3.476 10.89l2.817 2.817a1 1 0 0 0 1.414-1.414l-2.816-2.816A6 6 0 0 0 6 0"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-green-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          Sorry, we couldn&apos;t find the product you&apos;re looking for.
        </p>
      </div>
    </div>
  );
}
