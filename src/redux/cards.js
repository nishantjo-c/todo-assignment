import { createSlice, nanoid } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "card",
  initialState: {
    listcard: [],
    listtitle: [],
    lists: [
      // {
      //   title: "list1",
      //   listcards: [],
      //   id: nanoid(),
      // },
    ],
  },
  reducers: {
    setListCard: (state, action) => {
      state.listcard = action.payload;
      // console.log(action.payload)
    },

    setListTitle: (state, action) => {
      state.listtitle = action.payload;
      // console.log(...state.listtitle, action.payload)
    },

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
    updateCard: (state, action) => {},
  },
});

export const {
  setListCard,
  setListTitle,
  createList,
  createCard,
  updateList,
  updateCard,
} = counterSlice.actions;
export default counterSlice.reducer;
