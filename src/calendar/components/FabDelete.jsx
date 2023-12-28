import { useCalendarStore } from '../../hooks';

export const FabDelete = () => {
  const { startDeleteEvent, hasEventSelected } = useCalendarStore();

  const handleDelete = () => {
    startDeleteEvent();
  };

  return (
    <button
      onClick={handleDelete}
      className='btn btn-danger fab-danger'
      style={{ display: hasEventSelected ? '' : 'none' }}
    >
      <i className='fas fa-trash-alt'></i>
    </button>
  );
};
