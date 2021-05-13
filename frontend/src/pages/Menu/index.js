import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
  const [machines, setMachines] = useState([]);

  const history = useHistory();

  //const ongId = localStorage.getItem('ongId');
  //const ongName = localStorage.getItem('ongName');

  useEffect(() => {
    api.get('machine', {}).then(response => {
        setMachines(response.data);
    })
  }, []);

  async function handleDeleteMachine(id) {
    try {
      await api.delete(`machine/${id}`);
      history.go(0);
    } catch (err) {
      alert('Erro ao deletar a maquina, tente novamente.');
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <div className="profile-container">
      <header>
        <h1> </h1>
        <Link className="button" to="/machineProfile">Cadastrar Novo</Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Maquinarios Cadastrados</h1>

      <ul>
        {machines.map(machine => (
          <li key={machine.id}>
            <strong>Nome:</strong>
            <p>{machine.name}</p>

            <strong>Ano:</strong>
            <p>{machine.year}</p>

            <button onClick={() => handleDeleteMachine(machine.id)} type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}