import './App.scss';
import {FaCalendar, FaCalendarAlt, FaHome, FaInbox} from 'react-icons/fa';
import Header from '../component/Header';
import Listitem from '../component/Listitem';

function App() {
  return (
    <div className='todo'>
        <div className="todo__header">
          <Header />
        </div>
        <div className="todo__sidebar">
          <aside className='sidebar'>
            <section className='sidebar_category'>
              <ul className='list'>
                <Listitem 
                text='Inbox' 
                icon={<FaInbox className='list__item__icon'/>}
                />
                <Listitem 
                text='Today' 
                icon={<FaCalendar className='list__item__icon'/>}
                />
                <Listitem 
                text='Next 7 days' 
                icon={<FaCalendarAlt className='list__item__icon'/>}
                />
              </ul>
            </section>
            <section className='sidebar_category'>2</section>
          </aside>
        </div>
        <div classNAme="todo__content">TodoContent</div>
    </div>
  );
}

export default App;
