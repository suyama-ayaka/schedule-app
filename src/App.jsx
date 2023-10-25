import { useEffect } from 'react';
import './css/App.css';
import $ from 'jquery';

function App() {
    // is-activeがついていたら削除
    useEffect(() => {
      // クリックイベントの処理
      $('.sidebar-list').on('click', function() {
        if ($(this).hasClass('is-active')) {
          $(this).removeClass('is-active');
        } else {
          $(this).addClass('is-active');
        }
      });

      // コンポーネントのアンマウント時にクリックイベントを削除
      return () => {
        $('.sidebar-list').off('click');
      };
    }, []);

  return (
    <div className="wrap">
      <div className="sidebar">
        <div className='sidebar-items'>
          <div className='sidebar-header'>
            <div className='user'>
              <div className='user-icon'></div>
              <p>user</p>
            </div>
            <button className='sideber-close-btn' type='button'>
              <span className="material-symbols-rounded">keyboard_double_arrow_left</span>
            </button>
          </div>
          <ul className='sidebar-lists'>
            <li className="sidebar-list is-active">
              <a className="sidebar-link" href='#'>
                <span className="material-symbols-rounded icon">calendar_month</span>
                <p>カレンダー</p>
              </a>
            </li>
            <li className="sidebar-list">
              <a className="sidebar-link" href='#'>
              <span className="material-symbols-rounded icon">edit_note</span>
                <p>家計簿</p>
              </a>
            </li>
            <li className="sidebar-list">
              <a className="sidebar-link" href='#'>
              <span className="material-symbols-rounded icon">book_2</span>
                <p>日記</p>
              </a>
            </li>
            <li className="sidebar-list">
              <a className="sidebar-link" href='#'>
              <span className="material-symbols-rounded icon">checklist</span>
                <p>やること</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="main-wrapper">
          {/* ヘッダー */}
          <header className="header">
              <button id="prev">
                <div className="prev_arrow"></div>
              </button>
              <h1 id="header">ヘッダー年月日表示</h1>
              <button id="next">
              <div className="next_arrow"></div>
              </button>
          </header>
          {/* カレンダー */}
          <div id="calendar">カレンダー部分</div>
      </div>
    </div>
  );
}

export default App;