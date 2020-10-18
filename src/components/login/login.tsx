import React, { Component } from 'react'
import ILogin from './interface/ilogin'
import './login.scss'
interface IState extends ILogin { }


class Login extends Component<any, IState> {
    constructor(props: any) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    changeLogin = (event: React.FormEvent<HTMLInputElement>): void => {
        const { name, value } = event.currentTarget
        this.setState<never>({
            [name]: value
        })
    }

    login(event: any) {
        const target = event.target
        localStorage.setItem('lg', target.email + "/" + target.password)
    }

    render() {
        const { email, password } = this.state

        return (
            <form onSubmit={this.login} className="fr center">
                <div className="m1">
                    <label htmlFor="email" className="lbl">Email</label>
                    <input type="email" name="email" value={email} onChange={this.changeLogin} className="in" placeholder="jonh@doe.com" required />
                </div>
                <div className="m1">
                    <label htmlFor="password" className="lbl">Password</label>
                    <input type="password" name="password" value={password} onChange={this.changeLogin} className="in" placeholder="password" required />
                </div>
                <div className="m1">
                    <input type="submit" value="Login" className="bt bt-large" />
                </div>
            </form>
        )
    }
}

export default Login
