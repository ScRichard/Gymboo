export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-6">The page you're looking for doesn't exist.</p>
      <a href="/" className="text-blue-600 hover:underline">
        Back to Home
      </a>
    </div>
  );
}
