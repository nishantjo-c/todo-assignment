import { createSlice, nanoid } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "card",
  initialState: {
    lists: [
      // {
      //   title: "list1",
      //   listcards: [],
      //   id: nanoid(),
      // },
    ],
    cardID: "",
    listID: "",
  },

  reducers: {
    createCard: (state, action) => {
      const { title, description, listId } = action.payload;
      const card = {
        title,
        description,
        id: nanoid(),
      };

      // const index = state.lists.findIndex((element) => element.id === listId);
      // console.log(index);
      // const list = state.lists[index];
      // state.lists[index] = { ...list, listcards: [...list.listcards, card] };
      // console.log(list);

      state.lists = state.lists.map((list) => {
        if (list.id === listId) {
          return {
            ...list,
            listcards: [...list.listcards, card],
          };
        }

        return list;
      });

      // console.log(state.lists);
    },
    createList: (state, action) => {
      const list = {
        title: action.payload,
        listcards: [],
        id: nanoid(),
      };
      state.lists.push(list);
      // console.log();
    },
    updateList: (state, action) => {},
    updateCard: (state, action) => {
      const { title, description, listID, cardID } = action.payload;

      state.lists.map((list) => {
        if (list.id === listID) {
          console.log("ok");
          list.listcards.map((card) => {
            if (card.id === cardID) {
              console.log("ok");
              card.title = title;
              card.description = description;
            }
          });
        }
      });
    },

    deleteCard: (state, action) => {
      // const { listID, cardID } = action.payload;
      console.log(state.listID, state.cardID);
      state.lists.map((list) => {
        if (list.id === state.listID) {
          list.listcards = list.listcards.filter((card) => {
            return card.id !== state.cardID;
          });
        }
      });
    },
    setCardID: (state, action) => {
      state.cardID = action.payload;
      // console.log(action.payload);
    },
    setListID: (state, action) => {
      state.listID = action.payload;
      // console.log(action.payload);
    },
  },
});

export const {
  createList,
  createCard,
  updateList,
  updateCard,
  setCardID,
  setListID,
  deleteCard,
} = counterSlice.actions;
export default counterSlice.reducer;
