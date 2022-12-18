import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getCart } from "../../Redux/cart/actions"
import Header from "../Navbar/Header"

function Navbar(){
    const dispatch = useDispatch()
    useEffect(() => {
    dispatch(getCart())
    }, [])
    
    return <Header />
}
export default Navbar