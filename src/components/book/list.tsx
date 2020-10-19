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
                    id: 1,
                    name: 'Jonh Doe',
                    telephone: '(10) 9999-8888'
                },
                {
                    id: 2,
                    name: 'Doe Jonh',
                    telephone: '(10) 4444-2222'
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

    addContact = (contact: IBook): void => {
        this.setState((state) => ({
            showAddEdit: !state.showAddEdit,
            contacts: [...state.contacts, contact]
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

        const { id, name, telephone } = event.target
        const contact: IBook = { id: id.value, name: name.value, telephone: telephone.value }
        const contacts = this.state.contacts

        if (contact.id != 0) {
            let index = Number.NaN

            contacts.filter((x, i) => {
                index = x.id.toString() === contact.id.toString() ? i : 0
            })

            contacts[index].name = contact.name
            contacts[index].telephone = contact.telephone

            this.setState((state) => ({
                showAddEdit: !state.showAddEdit,
                contacts: contacts
            }))
        }
        else {
            contact.id = contacts.length + 1
            this.addContact(contact)
        }
    }

    render() {
        const { showAddEdit, contact, contacts } = this.state
        const user = AUTH.isAuthenticated() ? '' : 'hid'

        return (
            <>
                <div className="tb-m">
                    <button type="submit" onClick={() => this.changeContact({ id: 0, name: '', telephone: '' })} className="bt bt-medium ad" >Adicionar</button>
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

                { showAddEdit && <AddEdit contact={contact} bookSubmit={this.bookSubmit} changeContact={this.changeContact} />}
            </>
        )
    }
}

export default List
