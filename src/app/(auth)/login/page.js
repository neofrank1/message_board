import Link from 'next/link'
import { login, signup } from '../actions/actions'
import { HiArrowSmLeft } from "react-icons/hi";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <div className='flex flex-row justify-between items-center'>
            <Link href="/"><HiArrowSmLeft className='text-2xl'/></Link>
            <h2 className="card-title">Login</h2>
            <div className='w-6'></div>
          </div>
          <form>
            <div className='flex flex-col gap-4 mt-3'>
              <label className="input validator">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </g>
                </svg>
                <input
                  type="email"
                  required
                  name="email"
                  placeholder="Email"
                  minLength="3"
                  maxLength="30"
                />
              </label>
              <p className="validator-hint hidden">
                Must be 3 to 30 characters
                <br />containing only letters, numbers or dash
              </p>
              <label className="input validator">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                    ></path>
                    <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                  </g>
                </svg>
                <input
                  type="password"
                  required
                  name="password"
                  placeholder="Password"
                  minLength="7"
                  title="Must be more than 8 characters"
                />
              </label>
              <p className="validator-hint hidden">
                Must be more than 8 characters
              </p>
              <p>Still not registered? <Link href="/signup" className='text-gray-400 underline'>Sign up</Link></p>
            </div>
            <div className="card-actions justify-end">
              <button
                type="submit"
                className="btn btn-primary"
                formAction={login}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}