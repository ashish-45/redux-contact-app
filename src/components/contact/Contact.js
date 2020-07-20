import React from 'react'
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom'
import { deleteContact } from '../../actions/contactAction';
import { useDispatch } from 'react-redux'

const Contact = ({ contact, selectAll }) => {
    const dispatch = useDispatch();
    const { name, phone, email, id } = contact;
    return (

        <tr>
            <td>
                <div className="custom-control custom-checkbox">
                    <input checked={selectAll} type="checkbox" className="custom-control-input" />
                    <label className="custom-control-label"></label>
                </div>
            </td>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td className="actions">
                <Link to={`/editcontact/${id}`}>
                    <span className='material-icons mr-2 text-danger'>edit</span>
                </Link>
                <span className='material-icons' onClick={() => dispatch(deleteContact(id))}>remove_circle</span>
            </td>

        </tr>

    )
}

export default Contact;
