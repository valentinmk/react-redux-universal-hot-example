export const SOCKETS_CONNECTING = 'SOCKETS_CONNECTING';
export const SOCKETS_CONNECT = 'SOCKETS_CONNECT';
export const SOCKETS_CONNECTED = 'SOCKETS_CONNECTED';
export const SOCKETS_DISCONNECTING = 'SOCKETS_DISCONNECTING';
export const SOCKETS_DISCONNECT = 'SOCKETS_DISCONNECT';
export const SOCKETS_DISCONNECTED = 'SOCKETS_DISCONNECTED';
export const SOCKETS_MESSAGE_SENDING = 'SOCKETS_MESSAGE_SENDING';
export const SOCKETS_MESSAGE_SEND = 'SOCKETS_MESSAGE_SEND';
export const SOCKETS_MESSAGE_RECEIVING = 'SOCKETS_MESSAGE_RECEIVING';
export const SOCKETS_MESSAGE_RECEIVE = 'SOCKETS_MESSAGE_RECEIVE';

const initialState = {
  loaded: false,
  message: 'Just created',
  connected: false,
  history: [],
  message_history: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SOCKETS_CONNECTING:
      return Object.assign({}, state, {
        loaded: true,
        message: 'Connecting...',
        connected: false,
        history: [
          ...state.history,
          {
            loaded: true,
            message: 'Connecting...',
            connected: false
          }
        ]
      });
    case SOCKETS_CONNECTED:
      return Object.assign({}, state, {
        loaded: true,
        message: 'Connected. All system online.',
        connected: true,
        history: [
          ...state.history,
          {
            loaded: true,
            message: 'Connected. All system online.',
            connected: false
          }
        ]
      });
    case SOCKETS_DISCONNECTING:
      return Object.assign({}, state, {
        loaded: true,
        message: 'Disconnecting...',
        connected: true,
        history: [
          ...state.history,
          {
            loaded: true,
            message: 'Disconnecting...',
            connected: true
          }
        ]
      });
    case SOCKETS_DISCONNECTED:
      return Object.assign({}, state, {
        loaded: true,
        message: 'Disconnected',
        connected: false,
        history: [
          ...state.history,
          {
            loaded: true,
            message: 'Disconnected',
            connected: false
          }
        ]
      });
    case SOCKETS_MESSAGE_SENDING:
      return Object.assign({}, state, {
        loaded: true,
        message: 'Send message',
        connected: true,
        message_history: [
          ...state.message_history,
          {
            direction: '->',
            message: action.message_send
          }
        ]
      });
    case SOCKETS_MESSAGE_RECEIVING:
      return Object.assign({}, state, {
        loaded: true,
        message: 'Message receive',
        connected: true,
        message_history: [
          ...state.message_history,
          {
            direction: '<-',
            message: action.message_receive
          }
        ]
      });
    default:
      return state;
  }
}

export function socketsConnecting() {
  return {type: SOCKETS_CONNECTING};
}
export function socketsConnect() {
  return {type: SOCKETS_CONNECT};
}
export function socketsConnected() {
  return {type: SOCKETS_CONNECTED};
}
export function socketsDisconnecting() {
  return {type: SOCKETS_DISCONNECTING};
}
export function socketsDisconnect() {
  return {type: SOCKETS_DISCONNECT};
}
export function socketsDisconnected() {
  return {type: SOCKETS_DISCONNECTED};
}

export function socketsMessageSending(sendMessage) {
  return {type: SOCKETS_MESSAGE_SENDING, message_send: sendMessage};
}
export function socketsMessageSend(sendMessage) {
  return {type: SOCKETS_MESSAGE_SEND, message_send: sendMessage};
}
export function socketsMessageReceiving(receiveMessage) {
  return {type: SOCKETS_MESSAGE_RECEIVING, message_receive: receiveMessage};
}
