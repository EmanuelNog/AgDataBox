import React,{useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './styles.css';

import api from '../../services/api';

export default function Login(){
    const [id,setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();
        
        try{
            const response = await api.post('login',{ id })

            localStorage.setItem('userId',id);
            localStorage.setItem('userName',response.data.Name);

            history.push('/menu');
        } catch(err){
            alert('Falha no login, tente novamente');
        }
    }

    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>

                <form onSubmit={handleLogin} >
                    <h1> Faca seu logon</h1>

                    <input placeholder="Sua ID"
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

            <img src={heroesImg}/>
        </div>
    );
}