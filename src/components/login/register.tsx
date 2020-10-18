import React, { Component } from 'react'
import ILogin from './interface/ilogin'
import IRegister from './interface/iregister'

interface IState extends ILogin, IRegister { }

class Register extends Component<any, IState> {
    constructor(props: any) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    changeRegister = (event: React.FormEvent<HTMLInputElement>): void => {
        const { name, value } = event.currentTarget
        this.setState<never>({
            [name]: value
        })
    }

    register(event: any) {
        const target = event.target
        localStorage.setItem('lg', target.email + "/" + target.password)
    }

    render() {
        const { name, email, password, confirmPassword } = this.state

        return (
            <form onSubmit={this.register} className="fr center">
                <div>
                    <label htmlFor="name" className="lbl">Name</label>
                    <input type="text" name="name" value={name} onChange={this.changeRegister} className="in" placeholder="jonh" required />
                </div>
                <div>
                    <label htmlFor="name" className="lbl">Email</label>
                    <input type="email" name="email" value={email} onChange={this.changeRegister} className="in" placeholder="jonh@doe.com" required />
                </div>
                <div>
                    <label htmlFor="name" className="lbl">Password</label>
                    <input type="password" name="password" value={password} onChange={this.changeRegister} className="in" placeholder="password" required />
                </div>
                <div>
                    <label htmlFor="name" className="lbl">Confirm Password</label>
                    <input type="password" name="confirmPassword" value={confirmPassword} onChange={this.changeRegister} className="in" placeholder="confirm password" required />
                </div>
                <div className="m1">
                    <input type="submit" value="Register" className="bt bt-large" />
                </div>
            </form>
        )
    }
}

export default Register
