import { useState , useEffect } from "react"
import { db } from "../firebase";
import { collection, setDoc , getDocs , doc , onSnapshot , /* updateDoc */ } from "firebase/firestore"
import { useSelector , useDispatch } from "react-redux";
import {authState , getDetailsUser} from "../Redux/Actions/index"
import { useParams } from "react-router-dom";

function Chat () {
    const [mensajes , setMensajes] = useState();
    const [inputMensaje , setInputMensaje] = useState();
    const user = useSelector(obj => obj.userState);
    const userReceptor = useSelector(obj => obj.detailsUser);
    const params = useParams();
    const dispatch = useDispatch();
    
    
    const submitForm = (e) => {
        e.preventDefault();
        const docuRef = doc(db , `mensajes/chat/${user.email}/${new Date().getTime()}`)
        setDoc(docuRef , {
            id : new Date().getTime(),
            texto : inputMensaje,
            receptor : userReceptor.email,
            emisor : user.email
        })
        setInputMensaje(" ");
        getMensajes();
        const unsub = onSnapshot(doc(db, "mensajes","chat"  ), (doc) => {
            console.log("Current data: ", doc.data());
        });
        console.log(unsub)
    }

    const handleChange = (e) => {
        setInputMensaje(e.target.value)
    }
    
    
    async function getMensajes  ()  {

        const arrayEnviados = [];

        const collectionRef = collection(db,"mensajes/chat/" + user.email);
        console.log(collectionRef)
        const mensajesCifrados = await getDocs(collectionRef);
        console.log(mensajesCifrados)
        mensajesCifrados.forEach(element => {
            arrayEnviados.push(element.data());
        });

        const arrayEnviadosFiltrados = arrayEnviados.filter(obj =>
            obj.receptor === userReceptor.email)

        let arrayRecibidos = [];
        
        const collectionRecibidos = collection(db,"mensajes/chat/" + userReceptor.email);
        const mensajesRecibidos = await getDocs(collectionRecibidos)
        console.log(mensajesRecibidos)

        mensajesRecibidos.forEach(element => {
            arrayRecibidos.push(element.data());
        });

        const arrayRecibidosFiltrados = arrayRecibidos.filter(obj =>
            obj.receptor === user.email)

        console.log(arrayEnviadosFiltrados);
        console.log(arrayRecibidosFiltrados)

        const array = arrayEnviadosFiltrados.concat(arrayRecibidosFiltrados)

            
    
        const newArray = array.filter(obj => 
            obj.receptor ===  user.email || obj.emisor ===  user.email 
           // || obj.emisor === userReceptor.email || obj.receptor === userReceptor.email
        )
        
        newArray.sort((a,b)=>{
            return (a.id - b.id)
        })

        console.log(newArray)
        setMensajes(newArray); 
   
        
    }

    const showMensajes = () => {
        getMensajes()
    }

    /* useEffect(()=>{
        getMensajes()
    },[]) */

    useEffect(()=>{

        dispatch(authState())  
        dispatch(getDetailsUser(params.id))   

    },[dispatch , params.id])

    return (
        <div>
            {
                mensajes ? mensajes.map((obj)=>{
                    return <div key={obj.id}>
                        <p>{obj ? obj.emisor : "user"} :</p>
                        <p>{obj.texto}</p>
                    </div>
                }) : null
            }
            <form onSubmit={submitForm}>
                <input 
                    type="text" 
                    placeholder="Esriba su mensaje"
                    value={inputMensaje}
                    onChange={handleChange} />
                <button>Enviar</button>
            </form>
                <button onClick={showMensajes}>{ mensajes ?  "Actualizar chat" : "Mostrar historial de chat"}</button>
        </div>
    )
}

export default Chat