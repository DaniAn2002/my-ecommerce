import { SignIn } from "../components/SignIn"

export const HomePage = () => {



    return (
        <>
            <h1 className="text-center m-4">Welcome, please create a new user! </h1>
            <section className="container d-flex justify-content-center">
                <SignIn />
            </section>
        </>
    )
}
