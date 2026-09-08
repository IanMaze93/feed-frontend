export default function LoginForm() {
  return (
    <form className="flex gap-4 self-center rounded-md border-2 border-[#ff6a00] p-4 shadow-md flex-col items-start">
      <div className="flex items-center">
        <label className="w-25 font-bold">UserName:</label>
        <input
          className="rounded border-1 border-[#ff6a00]"
          type="text"
          placeholder="Username"
        />
      </div>

      <div className="flex items-center">
        <label className="w-25 font-bold">Password:</label>
        <input
          className="rounded border-1 border-[#ff6a00]"
          type="password"
          placeholder="Password"
        />
      </div>

      <div className="flex gap-4 self-center">
        <button
          className="rounded border-1 border-[#ff6a00] p-2 hover:bg-[#ff6a00] font-bold hover:text-white"
          type="submit"
        >
          Login
        </button>
        <button
          className="rounded border-1 border-[#ff6a00] p-2 hover:bg-[#ff6a00] font-bold hover:text-white"
          type="button"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}
