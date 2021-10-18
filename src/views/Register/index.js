import { React, useState} from 'react';
import './style.css';
import api from '../../services/api';
import { Link, useHistory } from 'react-router-dom';
 
export default function Register(){

    const [firstName, setFirstName] = useState('');
    const [midleName, setMidleName] = useState('');
    const [age, setAge] = useState(0);
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();
        const dataToRegister = { name:firstName, midleName, age, city, uf, email, password };
        await api.post('register', dataToRegister)
            .then(success => {
                window.alert(success.data.msgClient);
                history.push('/login');
            })
            .catch(error => window.alert(error.response.data.msgClient));
    }
    return(
        <div>
            <form onSubmit={handleRegister}>
                <h1>Cadastro</h1>
                <input onChange={e => setFirstName(e.target.value)} type="text"  placeholder="Nome"/>
                <input onChange={e => setMidleName(e.target.value)} type="text" placeholder="Sobrenome"/>
                <input onChange={e => setAge(e.target.value)} type="number" placeholder="Idade"/>
                <input onChange={e => setCity(e.target.value)} type="text" placeholder="Cidade"/>
                <input onChange={e => setUf(e.target.value)} type="text" placeholder="UF"/>
                <input onChange={e => setEmail(e.target.value)} type="text" placeholder="E-mail"/>
                <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Senha"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
