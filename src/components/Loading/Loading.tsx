export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="p-8 flex flex-col items-center">
        <div className="h-24 w-24 border-t-transparent border-solid animate-spin rounded-full border-blue-400 border-4" />
      </div>
    </div>
  );
}
