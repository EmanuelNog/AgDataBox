import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';
import './styles.css';

//<img src={logoImg} alt="Be The Hero"/>

import heroesImg from '../../assets/landing.svg';
import logoImg from '../../assets/logo.svg';
import box from '../../assets/box.svg';
import api from '../../services/api';

export default function Login(){
    const [id,setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){      
        e.preventDefault();
        
        try{
            const response = await api.post('login',{ id }) //é basicamente o comando que faz o mesmo que o insomnia

            localStorage.setItem('userId',id);
            localStorage.setItem('userName',response.data.name);

            history.push('/menu');
        } catch(err){
            alert('Falha no login, tente novamente!');
        }
    }

    return (
        <div className="login-container">
        
            <section className="form">
            <img src={box}/>
                <form onSubmit={handleLogin} >
                    <h1> DataBox Login </h1>

                    <input placeholder="ID"
                    value={id}
                    onChange={e=> setId(e.target.value)}
                    />
                    
                    <button className="button" type="submit">Entrar</button>
                    
                    <Link className = "back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Nao tenho cadastro
                    </Link>
                    
                </form>
            </section>

        </div>
    );
}