import { React, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();
        await api.post('login', { email, password })
        .then(success => {
            localStorage.setItem('UserData', JSON.stringify(success.data));
            const userData = JSON.parse(localStorage.getItem('UserData'));
            window.alert(`Welcome ${userData.firstName}`)
            history.push('/feed');        

        })
        .catch(error => window.alert(error.response.data.msgClient))
    }

    return(
        <div>
            <form onSubmit={handleLogin}>
                <h1>Login</h1>
                    <input type="text" onChange={(e)=> setEmail(e.target.value)} placeholder="E-mail"/>
                    <input type="password" onChange={(e)=> setPassword(e.target.value)} placeholder="Password"/>
                <button>Entrar</button>
            </form>
        </div>
    )
}
