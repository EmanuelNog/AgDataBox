import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();
        const data = {
            name,
            email,
            phone_number,
            password,
            city,
            uf
        };
        console.log(data); 
        try {
            const response = await api.post('register', data);
            alert(`Seu ID de acesso: ${response.data.id}`)
            history.push('/');
        } catch (err) {
            alert('Erro no cadastro tente novamente')
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the hero" />

                    <h1>Cadastro</h1>
                    <p>Faca seu cadastro, bla bla bla</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Ja possuo cadastro, voltar a tela de login
                    </Link>

                </section>
                <form onSubmit={handleRegister}>

                    <input placeholder="Nome"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

                    <input type="Email" placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input placeholder="Numero de Telefone"
                        value={phone_number}
                        onChange={e => setPhone(e.target.value)}
                    />
                    <input placeholder="senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <div className="input-group">

                        <input placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />

                        <input placeholder="Uf" style={{ width: 80 }}
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />

                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}