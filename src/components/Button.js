import classNames from 'classnames';
import { useCurrentNumberUpdate } from '../StateProvider';

const Button = ({ id, label, type }) => {

  const updateCurrentNumber = useCurrentNumberUpdate();

  const btnClass = classNames('flex flex-col justify-center text-center border border-slate-900 rounded-md', {
    'bg-red-400 col-start-1 col-end-3 font-bold': type === 'reset',
    'bg-yellow-100 font-bold': type === 'symbol',
    'bg-amber-500 row-start-6 col-start-1 col-end-3': type === 'number' && id === '0',
    'bg-amber-500': type === 'number',
    'bg-teal-500 row-span-2 font-bold': type === 'equal'
  })

  const btnClick = () => {
    console.log(id)
    switch (type) {
      case 'number':
        updateCurrentNumber(id)
        break;
      case 'symbol':
        break;
      case 'clear':
        break;
      case 'equal':
        break
      default:
        break;
    }
  }

  return (
    <div
      className={btnClass}
      id={id}
      onClick={btnClick}
    >
      {label}
    </div>
  )
}

export default Button