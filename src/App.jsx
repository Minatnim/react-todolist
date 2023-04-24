// import logo from "./logo.svg";
import "./App.scss";
// import {
//   FaHome,
//   FaInbox,
//   FaCalendar,
//   FaCalendarAlt,
//   FaChevronDown,
// } from "react-icons/fa";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { TodoContent } from "./components/Todo/TodoContent";

function App() {
  const mockTodo = Array.from({ length: 50 }, (el, idx) => idx + 1);
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <TodoContent />
      {/* <header className="header">
        <span>
          <FaHome />
        </span>
        <div>CC-Todolist</div>
      </header> */}
      {/* <aside className="sidebar">
        <section className="sidebar__generic">
          <ul className="generic__lists">
            <li className="active">
              <span>
                <FaInbox />
              </span>
              <h6>Inbox</h6>
            </li>

            <li>
              <span>
                <FaCalendar />
              </span>
              <h6>Today</h6>
            </li>

            <li>
              <span>
                <FaCalendarAlt />
              </span>
              <h6>Next 7 days</h6>
            </li>
          </ul>
        </section>
        <section className="sidebar__middle">
          <span>
            <FaChevronDown />
          </span>
          <h6>Projects</h6>
          <section className="sidebar__projects">
            <li className="project__lists">
              <span>
                <FaInbox />
              </span>
              <h6>Project-A</h6>
            </li>

            <li>
              <span>
                <FaInbox />
              </span>
              <h6>Project-B</h6>
            </li>

            <li>
              <span>
                <FaInbox />
              </span>
              <h6>Project-C</h6>
            </li>
          </section>
        </section>
      </aside> */}
      {/* <main className="content">
        Content
        <div>Head</div>
        <div>Add todo</div>
        <ul>
          {mockTodo.map((el) => (
            <li key={el}>{`item-${el}`}</li>
          ))}
        </ul>
      </main> */}
    </div>
  );
}
export default App;
