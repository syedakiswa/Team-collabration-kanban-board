
// Signup Component
function SignupPage({ onSignup, onNavigate }) {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignup({ email, name: username, joinDate: 'January 2026' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "linear-gradient(to bottom, #160a28, #261643)" }}>
      <div className="text-center w-full max-w-md px-6">
        <div className="w-28 h-28 mx-auto mb-4 bg-white rounded-full flex items-center justify-center text-4xl">
          📋
        </div>
        <h2 className="text-white font-bold text-5xl">Sign Up</h2>

        <form className="mt-8 space-y-6 w-full" onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Your Username"
            className="w-full py-3 px-4 bg-white/10 text-white rounded-md focus:outline-none border border-purple-500/30"
            required
          />

          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="w-full pl-4 pr-12 py-3 bg-white/10 text-white rounded-md focus:outline-none border border-purple-500/30"
              required
            />
            <MailIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full pl-4 pr-12 py-3 bg-white/10 text-white rounded-md focus:outline-none border border-purple-500/30"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </button>
          </div>

          <button type="submit" className="w-full py-3 text-white text-xl bg-gradient-to-r from-purple-600 to-purple-800 rounded-md cursor-pointer hover:from-purple-700 hover:to-purple-900">
            Sign Up
          </button>

          <span className="text-gray-400 font-semibold">
            Already have an account?{' '}
            <button type="button" onClick={() => onNavigate('login')} className="text-purple-400 hover:underline">
              Log In
            </button>
          </span>
        </form>
      </div>
    </div>
  );
}