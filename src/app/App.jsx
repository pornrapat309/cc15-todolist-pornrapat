import './App.scss';
import {FaCalendar, FaCalendarAlt, FaChevronDown, FaHome, FaInbox} from 'react-icons/fa';
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
                icon={<FaInbox />}
                active={true}
                />
                <Listitem 
                text='Today' 
                icon={<FaCalendar />}
                active={false}
                />
                <Listitem 
                text='Next 7 days' 
                icon={<FaCalendarAlt />}
                active={false}
                />
              </ul>
            </section>
            <section className='sidebar_category'>
              <div className='accordion'>
                <div className='accordion__toggle'>
                  <li className='accordion__item'>
                    <FaChevronDown className='accordion__item__icon accordion__item__active' />
                    <p className='accordion__item__text'>Projects</p>
                  </li>
                  <ul className='list'>
                    <Listitem text='A' icon={<FaInbox/>} active={true}/>
                    <Listitem text='B' icon={<FaInbox/>} active={false}/>
                  </ul>
                </div>
              </div>
            </section>
          </aside>
        </div>
        <div classNAme="todo__content">TodoContent</div>
    </div>
  );
}

export default App;
