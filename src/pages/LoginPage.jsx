import { Login } from "../components/Login"

export const LoginPage = () => {
    return (
        <>
             <h1 className="text-center m-4">Welcome, please Login user! </h1>
            <section className="container d-flex justify-content-center">
                <Login />
            </section>
        </>
    )
}
