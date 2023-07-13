'use client';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export default function Login() {
  const login = async (email: string, password: string) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      if (response.user) {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  };
  function handleForm(e: any) {
    e.preventDefault();
    login(e.target.email.value, e.target.password.value);
  }

  return (
    <form
      method="post"
      className="flex flex-col mx-auto text-center border px-5 pt-2 pb-3 my-2 w-2/3 lg:w-1/3"
      onSubmit={(e) => handleForm(e)}
    >
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        className="border rounded-sm focus:outline outline-2 focus:outline-rose-500"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        className="border rounded-sm focus:outline outline-2 focus:outline-rose-500"
      />
      <input
        type="submit"
        value="Login"
        className="hover:cursor-pointer w-fit bg-rose-300 rounded-lg px-2 py-1 mx-auto mt-2"
      />
    </form>
  );
}
