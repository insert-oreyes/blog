import './App.css'
import PostCard from './components/PostCard'

const postDetails = [
  {
    image:
      'https://techcrunch.com/wp-content/uploads/2021/07/tumblr-apocalypse.jpg?w=730&crop=1',
    title: 'Lorem ipsum dolor, sit amet consectetur',
    author: 'John Doe',
    time: '2024-02-23 - 15:19',
    paragraph:
      'adipisicing elit. Delectus illo cum quidem. Itaque alias id mollitia praesentium officia vitae, excepturi, distinctio dolores perferendis cumque natus. Qui accusamus quia error dignissimos?',
  },
]

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
      {postDetails.map((post) => (
        <PostCard
          image={post.image}
          title={post.title}
          author={post.author}
          time={post.time}
          paragraph={post.paragraph}
        />
      ))}
    </main>
  )
}

export default App
