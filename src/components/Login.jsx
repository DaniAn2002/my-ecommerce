import { useForm } from "react-hook-form"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { emailValidation, minPassword, maxPassword } from "../utils/validators"
import { app } from "../firebase"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const auth = getAuth(app)
    const nav = useNavigate()
    const [error, setError] = useState()

    const LoginUser = async (data) => {
        try {
            const res = await signInWithEmailAndPassword(auth, data.email, data.password)
            nav('/auth/products')

        } catch (error) {
            setError(error.message.replace('Firebase:', ''))

        }
    }

  return (
    <>
    <div className="card bg-personalized " style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">
                        Login User
                    </h5>
                    <form onSubmit={handleSubmit(LoginUser)}>
                        <div className="mb-3">
                            <input type="text"
                                name="email"
                                {...register('email', { required: 'Email is required', pattern: emailValidation })}
                                className="form-control"
                                placeholder="Type your email address: " />
                            {
                                errors.email && <span className="text-danger">{errors.email.message}</span>
                            }
                        </div>
                        <div className="mb-3">
                            <input type="password"
                                name="password"
                                {...register('password', { required: 'Password is required', minLength: minPassword, maxLength: maxPassword })}
                                className="form-control"
                                placeholder="Type your password: " />
                            {
                                errors.password && <span className="text-danger">{errors.password.message}</span>
                            }
                        </div>
                        <div className="mb-3 d-grid gap-2">
                            <button type="submit" className="btn btn-info">
                                Login
                            </button>
                        </div>
                    </form>
                    {
                        error && <span className="text-danger">{error}</span>
                    }
                </div>
            </div>
    </>
  )
}
