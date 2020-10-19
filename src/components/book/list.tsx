import React, { Component } from 'react'
import IBook from './interface/ibook'
import AddEdit from './addEdit'
import * as AUTH from '../../const/auth'

interface IState {
    showAddEdit: boolean,
    contact: IBook,
    contacts: Array<IBook>
}

class List extends Component<any, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            showAddEdit: false,
            contact: {
                id: Number.NaN,
                name: '',
                telephone: ''
            },
            contacts: [
                {
                    id: 0,
                    name: 'Jonh Doe',
                    telephone: '12955224466'
                },
                {
                    id: 10,
                    name: 'Doe Jonh',
                    telephone: '12988552233'
                }
            ]
        }

        this.changeContact = this.changeContact.bind(this)
        this.removeContact = this.removeContact.bind(this)
        this.bookSubmit = this.bookSubmit.bind(this)
    }

    changeContact = (contact: IBook): void => {
        this.setState((state) => ({
            showAddEdit: !state.showAddEdit,
            contact: contact
        }))
    }

    removeContact = (contact: IBook): void => {
        const id = contact.id
        const contacts = this.state.contacts.filter((x) => x.id !== id)

        this.setState({
            contacts: contacts
        })
    }

    bookSubmit = (event: any): void => {
        event.preventDefault();

        const target = event.target
        let index = Number.NaN
        let contacts = this.state.contacts

        this.state.contacts.filter((x, i) => {
            index = x.id.toString() === target.id.value ? i : 0
        })

        console.log(index)
        contacts[index].name = target.name.value
        contacts[index].telephone = target.telephone.value

        this.setState({
            contacts: contacts
        })
    }

    render() {
        const { showAddEdit, contact, contacts } = this.state
        const user = AUTH.isAuthenticated() ? '' : 'hid'

        return (
            <>
                <div className="tb-m">
                    <table className="tb center">
                        <thead className="tbhead">
                            <tr>
                                <th className="tbbd">Name</th>
                                <th className="tbbd">Telephone</th>
                                <th className={`tbbd ${user}`}></th>
                                <th className={`tbbd ${user}`}></th>
                            </tr>
                        </thead>
                        <tbody className="tbbody">
                            {
                                contacts.map((contact: IBook) =>
                                    <tr className="tbrow" key={contact.id}>
                                        <td className="tbbd">{contact.name}</td>
                                        <td className="tbbd">{contact.telephone}</td>
                                        <td className={`tbbd ${user}`}><button type="submit" onClick={() => this.removeContact(contact)} className="bt bt-medium" >Remove</button></td>
                                        <td className={`tbbd ${user}`}><button type="submit" onClick={() => this.changeContact(contact)} className="bt bt-medium" >Change</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div >

                { showAddEdit && <AddEdit contact={contact} bookSubmit={this.bookSubmit} changeContact={this.changeContact} />
                }

            </>
        )
    }
}

export default List
