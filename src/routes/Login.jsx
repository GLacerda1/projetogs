import {useRef, useState,useEffect} from 'react'
import {useNavigate, Link} from 'react-router-dom'



const Login =()=>{
    const usuario =useRef();
    const senha =useRef();

    const [usuarios,setUsuarios]=useState([]);
    const navigate = useNavigate();

    function validade(){
        for(let i =0; i <usuarios.length; i++){
            if(
                usuarios[i].usuario ==usuario.current.value &&
                usuarios[i].senha == senha.current.value
            ){
                return true;
            }
        }
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(validade()){
            //criando a autenticação 
            let token =
                Math.random().toString(16).substring(2)+
                Math.random().toString(16).substring(2)
                sessionStorage.setItem("usuario",usuario.current.value);
                sessionStorage.setItem("senha", token);
                //chama o componente dashboard ao logar corretamente.
                navigate("/Dashboard")       
        }else{
            alert("usuario/senha inválidos")
        }
    }

    //Hook- useEffect vai buscar os dados para o login

    useEffect(()=>{
        //url que o json server criou (API)
        fetch("http://localhost:5000/usuarios/")
        //promise
        .then((res)=>{
            return res.json();
        })
        //setUsuarios recebe as alterações 
        .then((res)=>{
            setUsuarios(res);
        })
        //retorna um array vazio
    },[])

    return(
        <section className="container">
            <div className="container-login">
            <div className="login">
                <form className="login-form" onSubmit={handleSubmit}>
                    <span className="titulo-login">Faça seu Login</span>
                    <div className="w-input">
                        <input
                            type="text"
                            className="input-form"
                            id="usuario"
                            ref={usuario}                        
                        />
                        <span placeholder="usuario"></span>
                    </div>
                    <div className="w-input">
                        <input
                            type="password"
                            className="input-form"
                            id="senha"
                            ref={senha}
                        />
                        <span placeholder="Senha"></span>
                    </div>
                    <div className="login-btn">
                        <button type="submit" className="login-form-btn">Login</button>
                    </div>
                    <ul className="utilidades">
                        <li>
                            <span className="text1">Esqueçeu sua senha?</span>
                        </li>

                        <li>
                            <span className="text1">Não tem conta?</span>
                           <Link to="/cadastrar" className="text2">
                                Criar
                           </Link>
                        </li>
                    </ul>
                </form>
            </div>
            </div>
        </section>
    )
}
export default Login
