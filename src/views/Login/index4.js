import { React,useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';


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
    useEffect(()=>{
        history.push('/login')
    },[])

    return(
        <>
            <form onSubmit={handleLogin} className="mb-2">
                <h1>Login</h1>
                <input type="email" className="form-control" onChange={(e)=> setEmail(e.target.value)} placeholder="E-mail"/>
                <input type="password" onChange={(e)=> setPassword(e.target.value)} placeholder="Password"/>

                <Link to='/register'>
                    <button>Cadastrar</button>
                </Link>
                <Link to='/register'>
                    <button>Entrar</button>
                </Link>
                <Button variant="contained" color="primary">
                    Hello World
                </Button>
            </form>
        </>
    )
}
