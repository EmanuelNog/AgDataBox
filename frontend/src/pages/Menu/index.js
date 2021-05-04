import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Menu() {

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the hero" />

                    <h1>Menu</h1>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        voltar
                    </Link>
                </section>
            </div>
        </div>
    );
}