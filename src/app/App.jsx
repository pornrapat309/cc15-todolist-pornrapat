import './App.scss';
import {FaCalendar, FaCalendarAlt, FaChevronDown, FaHome, FaInbox} from 'react-icons/fa';
import Header from '../component/Header';
import Listitem from '../component/Listitem';
import Lists from '../component/Lists';

function App() {

  const generalLists = [
    {id:1, text:'Inbox', icon: < FaInbox/>, active: true},
    {id:2, text:'Today', icon: < FaCalendar/>, active: false},
    {id:3, text:'Next 7 days', icon: < FaCalendarAlt/>, active: false},  
  ];

  const projectLists = [
    {id:4, text:'A', icon: <FaInbox />, active: true},
    {id:5, text:'B', icon: <FaInbox />, active: false},
  ];

  return (
    <div className='todo'>
        <div className="todo__header">
          <Header />
        </div>
        <div className="todo__sidebar">
          <aside className='sidebar'>
            <section className='sidebar_category'>
              <Lists data={generalLists}/>
            </section>
            <section className='sidebar_category'>
              <div className='accordion'>
                <div className='accordion__toggle'>
                  <li className='accordion__item'>
                    <FaChevronDown className='accordion__item__icon accordion__item__active' />
                    <p className='accordion__item__text'>Projects</p>
                  </li>
                </div>
                  <Lists data={projectLists} />
              </div>
            </section>
          </aside>
        </div>
        <div classNAme="todo__content">TodoContent</div>
    </div>
  );
}

export default App;
