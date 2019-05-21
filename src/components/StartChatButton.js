// import React from 'react'
// import ReactDOM from 'react-dom'
// import { ActionCable } from 'react-actioncable-provider';
// import { API_ROOT } from '../constants';
//
// class StartChatButton extends React.Component {
//
// //
// //   fetchToWebsocket = (route, bodyData) => {
// //         fetch(`${API_ROOT}/${route}`, {
// //             method: 'POST',
// //             headers: {
// //                 "Accept": "application/json",
// //                 "Content-Type": "application/json",
// // // Only, if we are saving JWT token in localStorage
// //                 "Authorization": `Bearer ${localStorage.getItem("token")}`
// //               },
// //             body: JSON.stringify(bodyData)
// //         })
// // }
// // handleClick = () => {
// //         let body = {
// //             title: "PRIVATE",
// //             sender_id: this.props.user_sender_id,
// //             receiver_id: this.props.user_receiver_id
// //         };
// // // If the conversation already exists, execute exit function or do nothing. Otherwise, fetch conversation to WebSockets.
// //         if (conversationExists(this.props.user_receiver_id)) {
// //             props.exit();
// //         }
// //         else {
// //             fetchToWebsocket("conversations", body);
// //             props.exit();
// //         }
// //     };
//
//   render () {
//     console.log(this.props)
//     return <div className='start-chat-btn'>
//       <button>send a message</button>
//     </div>
//   }
// }
//
// export default StartChatButton;
