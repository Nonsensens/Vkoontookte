const SEND_MESSAGE = "SEND_MESSAGE";
let initialState = {
  Nav_messages: [
    { id_user: "Nikita", id_message: 1 },
    { id_user: "Anya", id_message: 2 },
    { id_user: "Slava", id_message: 3 },
    { id_user: "Dasha", id_message: 4 },
    { id_user: "Alexander", id_message: 5 },
  ],
  Container_content: [
    { content: "hu" },
    { content: "hu" },
    { content: "hu" },
    { content: "hu" },
    { content: "hu" },
  ],
};
export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let value = action.area_messages;
      return {
        ...state,
        Nav_messages: [
          ...state.Nav_messages,
          { id_user: "Sender", id_message: 6 },
        ],
        Container_content: [...state.Container_content, { content: value }],
      };
    }
    default:
      return state;
  }
};

export const sendMessageCreator = (area_messages) => {
  return {
    type: SEND_MESSAGE,
    area_messages,
  };
};
