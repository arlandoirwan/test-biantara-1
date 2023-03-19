import axios from 'axios'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import { useState } from 'react'

export default function Login() {
  const [input, setInput] = useState({
    email: '',
    password: '',
  })
  const handleChange = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value })

  const handleRegister = async (e) => {
    e.preventDefault()
    //console.log(input)

    let { email, password } = input

    const result = await axios({
      method: 'POST',
      url: `https://reqres.in/api/login`,
      data: { email, password },
    })
    console.log('result =>', result)

    let { token } = result.data
    let { users } = result.data

    if (token !== 'admin') {
      Cookies.set('token', token, { expires: 1 })
      Cookies.set('users', JSON.stringify(users), { expires: 1 })
      window.location = '/'
    } else {
      alert('akun kamu bukan users')
    }
  }

  console.log(input)
  return (
    <div>
      <div className=" h-screen  w-full flex items-center justify-center">
        <form className=" w-1/2" onSubmit={handleRegister}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              email : eve.holt@reqres.in
            </label>
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              password :cityslicka
            </label>
          </div>

          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            isilah email dan password di bawah sesuai dengan email dan password
            di atas <br></br>
            <br></br>*mohon maaf di karenakan jwt di api ini tidak bisa
            digunakan , oleh karena itu saya tidak dapat membuat fitur logout
          </label>
        </form>
      </div>
      <div className="h-5 w-full flex items-center justify-center">
        <form className=" w-1/2" onSubmit={handleRegister}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              name="email"
              value={input.email}
              type="email"
              id="email"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              name="password"
              value={input.password}
              type="password"
              id="password"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
