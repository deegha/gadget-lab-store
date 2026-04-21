export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
        <div className="mb-8">
          <h1 className="text-xl font-semibold text-gray-900">Gadget Lab</h1>
          <p className="text-sm text-gray-500 mt-1">Sign in to the admin panel</p>
        </div>

        {/* Form wired up in Step 9 */}
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              placeholder="deegha@codewavelabs.io"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  )
}
