import React, { Component } from 'react'
import InputMask from "react-input-mask";
import IBook from './interface/ibook';

interface IProp {
    contact: IBook,
    bookSubmit: any,
    changeContact: any
}

interface IState extends IBook {
    bookSubmit: any
}

class AddEdit extends Component<IProp, IState> {
    constructor(props: IProp) {
        super(props)

        this.state = {
            id: 0,
            name: '',
            telephone: '',
            bookSubmit: ''
        }

        this.bookChange = this.bookChange.bind(this)
    }

    componentDidMount() {
        const contact = this.props.contact ? this.props.contact : { id: 0, name: '', telephone: '' }

        this.setState({
            id: contact.id,
            name: contact.name,
            telephone: contact.telephone
        })
    }

    bookChange = (event: React.FormEvent<HTMLInputElement>): void => {
        const { name, value } = event.currentTarget
        this.setState<never>({
            [name]: value
        })
    }

    render() {
        const { id, name, telephone } = this.state

        return (
            <div className="back">
                <div className="frbook alt">
                    <form onSubmit={this.props.bookSubmit} className="fr center">
                        <input type="hidden" name="id" value={id} onChange={this.bookChange} />
                        <div className="m1">
                            <label htmlFor="name" className="lbl">Name</label>
                            <input type="text" name="name" value={name} onChange={this.bookChange} className="in" required />
                        </div>
                        <div className="m1">
                            <label htmlFor="telephone" className="lbl">Telephone</label>
                            {<InputMask name="telephone" value={telephone} onChange={this.bookChange} className="in" mask="(99) 9999-9999" required />
                            }
                        </div>
                        <div className="m1">
                            <input type="submit" value="Save" className="bt bt-large" />
                        </div>
                        <div>
                            <span onClick={this.props.changeContact} className="bt-cancel">Cancel</span>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddEdit