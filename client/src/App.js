import './App.css'

function App() {
  return (
    <main>
      <header>
        <a className='logo' href='/'>
          My blog
        </a>
        <nav>
          <a href='/'>Login</a>
          <a href='/'>Register</a>
        </nav>
      </header>
      <div className='post'>
        <div className='image'>
          <img
            src='https://miro.medium.com/v2/resize:fit:1100/format:webp/1*EfbQeLKWVCDaEV_hSCkEYw.jpeg'
            alt=''
          />
        </div>
        <div className='texts'>
          <h2>Lorem ipsum dolor, sit amet consectetur</h2>
          <p>
            adipisicing elit. Delectus illo cum quidem. Itaque alias id mollitia
            praesentium officia vitae, excepturi, distinctio dolores perferendis
            cumque natus. Qui accusamus quia error dignissimos?
          </p>
        </div>
      </div>
      <div className='post'>
        <div className='image'>
          <img
            src='https://miro.medium.com/v2/resize:fit:1100/format:webp/1*EfbQeLKWVCDaEV_hSCkEYw.jpeg'
            alt=''
          />
        </div>
        <div className='texts'>
          <h2>Lorem ipsum dolor, sit amet consectetur</h2>
          <p>
            adipisicing elit. Delectus illo cum quidem. Itaque alias id mollitia
            praesentium officia vitae, excepturi, distinctio dolores perferendis
            cumque natus. Qui accusamus quia error dignissimos?
          </p>
        </div>
      </div>
      <div className='post'>
        <div className='image'>
          <img
            src='https://miro.medium.com/v2/resize:fit:1100/format:webp/1*EfbQeLKWVCDaEV_hSCkEYw.jpeg'
            alt=''
          />
        </div>
        <div className='texts'>
          <h2>Lorem ipsum dolor, sit amet consectetur</h2>
          <p>
            adipisicing elit. Delectus illo cum quidem. Itaque alias id mollitia
            praesentium officia vitae, excepturi, distinctio dolores perferendis
            cumque natus. Qui accusamus quia error dignissimos?
          </p>
        </div>
      </div>
    </main>
  )
}

export default App
