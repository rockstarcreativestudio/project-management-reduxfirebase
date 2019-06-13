import React from 'react'
import moment from 'moment'

const Notifications = (props) => {
    const { notes } = props;
    return (
        <div className="section">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">
                        Notifications
                        </span>
                        <ul className="notifications">
                            {
                                notes && notes.map(
                                    item => {
                                      return (
                                          <li key={item.id}>
                                            <span className="purple-text">{item.user}&emsp; </span>
                                            <span>{item.content}</span>
                                            <div className="grey-text note-date">
                                                <p className="grey-text text-lighten-1">{moment(item.time.toDate()).fromNow()}</p>
                                            </div>
                                          </li>
                                      )
                                    }
                                    
                                )
                            }
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default Notifications;