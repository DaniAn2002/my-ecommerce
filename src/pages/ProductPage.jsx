import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"
import { app } from '../firebase'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const ProductPage = () => {
    const auth = getAuth(app)
    const nav = useNavigate()
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        {
            const authentication = onAuthStateChanged(auth, (user) => {
                if (user) {
                    console.log("Sesion iniciada correctamente");
                } else {
                    nav('/login')
                }
                setLoading(false)
            })
            return () => {
                authentication()
            }
        }

    }, [auth, nav])

    const logout = async () => {
        console.log("click");
        const user = await signOut(auth)
        console.log(user);
    }

    if (loading) return <h2>Cargando...</h2>

    return (
        <>
            <h1>Esta es una ruta protegida</h1>
            <button type="button" onClick={logout}>Cerrar sesion</button>
        </>
    )
}
