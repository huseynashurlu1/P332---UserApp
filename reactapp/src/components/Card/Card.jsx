import React, { useContext } from 'react'
import './card.css'
import { IoLocationOutline } from "react-icons/io5";
import { UserContext } from '../../context/UserContext';

const Card = (props) => {
    const context = useContext(UserContext)
    const existUser = context.user.find(item => item.login.uuid === props.data.login.uuid)


  return (
    <div className='col-lg-10 mx-auto mb-4'>
        <div className="user-card">
            <div className="left">
                <div className="user-image">
                    <img src={props.data.picture.thumbnail} alt="" />
                </div>
                <div className="user-data">
                    <h5>{props.data.name.title} {props.data.name.first} {props.data.name.last}</h5>
                    <p><IoLocationOutline /> {props.data.location.country}, {props.data.location.city}</p>
                </div>
            </div>
            <div className="right">
                <button onClick={() => existUser === undefined ? context.followUser({
                    login: {
                        uuid: props.data.login.uuid
                    },
                    picture: {
                        thumbnail: props.data.picture.thumbnail
                    },
                    name: {
                         title: props.data.name.title,
                         first: props.data.name.first,
                         last: props.data.name.last
                    },
                    location: {
                        country: props.data.location.country,
                        city: props.data.location.city
                    }
                }) : context.unFollowUser(props.data.login.uuid)} className={existUser === undefined ? 'btn btn-sm btn-success' : 'btn btn-sm btn-primary'}>{existUser === undefined ? 'Follow' : 'Unfollow'}</button>
            </div>
        </div>
    </div>
  )
}

export default Card