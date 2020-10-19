import React, { useState } from 'react'

function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const register = (event: any): void => {
        const target = event.target
        localStorage.setItem('lg', target.email + "/" + target.password)
    }

    return (
        <form onSubmit={register} className="fr center">
            <div>
                <label htmlFor="name" className="lbl">Name</label>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="in" placeholder="jonh" required />
            </div>
            <div>
                <label htmlFor="name" className="lbl">Email</label>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="in" placeholder="jonh@doe.com" required />
            </div>
            <div>
                <label htmlFor="name" className="lbl">Password</label>
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="in" placeholder="password" required />
            </div>
            <div>
                <label htmlFor="name" className="lbl">Confirm Password</label>
                <input type="password" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="in" placeholder="confirm password" required />
            </div>
            <div className="m1">
                <input type="submit" value="Register" className="bt bt-large" />
            </div>
        </form>
    )
}

export default Register