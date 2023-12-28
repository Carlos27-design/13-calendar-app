import { useDispatch, useSelector } from 'react-redux';
import {
  onAddNewEvent,
  onDeleteEvent,
  onSetActiveEvent,
  onUpdateEvent,
} from '../store/calendar/calendarSlice';

export const useCalendarStore = () => {
  const dispatch = useDispatch();

  const { events, activeEvent } = useSelector((state) => state.calendar);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    if (calendarEvent._id) {
      dispatch(onUpdateEvent({ ...calendarEvent }));
      //Actualizando
    } else {
      //creando
      dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
    }
  };

  const startDeleteEvent = () => {
    //Todo llegar al backend
    dispatch(onDeleteEvent());
  };

  return {
    //Propiedades
    activeEvent,
    events,
    hasEventSelected: !!activeEvent,
    //Metodos
    setActiveEvent,
    startSavingEvent,
    startDeleteEvent,
  };
};
