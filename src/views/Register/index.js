import { React, useState} from 'react';
import api from '../../services/api';
import { Link, useHistory } from 'react-router-dom';
import { Container, TextField, Button, Stack } from '@material-ui/core'; 
import { ArrowBackTwoTone } from '@material-ui/icons';
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
        <Stack 
        direction={{ xs: 'column' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        component="form"
        onSubmit={handleRegister}
        maxWidth='700px'
        padding='30px'
        gap='14px'
        margin='auto'
        >
            <Button variant="outlined" href='/login' sx={{ width: 90, height: 40 }}>
                <ArrowBackTwoTone
                color='primary'
                sx={{ fontSize: 40, fontWeight: 800 }}
                />
            </Button>

            <h1>Cadastro</h1>
            <TextField id="outlined-basic" onChange={e => setFirstName(e.target.value)} label="First Name" type="text" variant="outlined" />
            <TextField id="outlined-basic" onChange={e => setMidleName(e.target.value)} label="Midle Name" type="text" variant="outlined"/>
            <TextField id="outlined-basic" onChange={e => setAge(e.target.value)} label="Age" type="text" variant="outlined"/>
            <TextField id="outlined-basic" onChange={e => setCity(e.target.value)} label="City" type="text" variant="outlined"/>
            <TextField id="outlined-basic" onChange={e => setUf(e.target.value)} label="State" type="text" variant="outlined"/>
            <TextField id="outlined-basic" onChange={e => setEmail(e.target.value)} label="E-mail" type="text" variant="outlined"/>
            <TextField id="outlined-basic" onChange={e => setPassword(e.target.value)} label="Password" type="password" variant="outlined"/>
            <Button sx={{ height: 60, fontSize: 20 }} type="submit" variant="contained">Register</Button>
        </Stack>
    )
}
