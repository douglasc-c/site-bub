// LoadingIndicator.jsx
export function LoadingIndicator() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-64 h-4 bg-gray-300 rounded-full">
        <div className="w-16 h-full bg-blue-500 rounded-full animate-loading-bar"></div>
      </div>
    </div>
  )
}
