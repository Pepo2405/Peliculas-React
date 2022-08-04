import { BiAtom } from "react-icons/bi";
import '../styles/Loading.css'

export function Loading() {
  return (
    <div className="loading">
        <BiAtom className='Icono' size={400}></BiAtom>
    </div>
  )
}
