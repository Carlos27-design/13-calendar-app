import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

// const tempEvent = {
//   _id: new Date().getTime(),
//   title: 'Cumpleaños del jefe',
//   notes: 'Hay que comprar la carne',
//   start: new Date(),
//   end: addHours(new Date(), 2),
//   user: {
//     _id: 'ABC123',
//     name: 'Carlos Coronado',
//   },
// };

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    isLoadingEvents: true,
    events: [],
    activeEvent: null,
  },
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
    onAddNewEvent: (state, { payload }) => {
      state.events.push(payload);
      state.activeEvent = null;
    },
    onUpdateEvent: (state, { payload }) => {
      state.events = state.events.map((event) => {
        if (event.id === payload.id) {
          return payload;
        }
        return event;
      });
    },
    onDeleteEvent: (state) => {
      if (state.activeEvent) {
        state.events = state.events.filter(
          (event) => event.id !== state.activeEvent.id
        );
        state.activeEvent = null;
      }
    },
    onLoadingEvents: (state, { payload = [] }) => {
      state.isLoadingEvents = false;
      // state.events = payload;
      payload.forEach((event) => {
        const exists = state.events.some((dbEvent) => dbEvent.id === event.id);
        if (!exists) {
          state.events.push(event);
        }
      });
    },

    onlogoutCalendar: (state) => {
      state.isLoadingEvents = true;
      state.events = [];
      state.activeEvent = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  onSetActiveEvent,
  onAddNewEvent,
  onUpdateEvent,
  onDeleteEvent,
  onLoadingEvents,
  onlogoutCalendar,
} = calendarSlice.actions;
