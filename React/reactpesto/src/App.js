
import Booklist from './Components/Booklist';
import BooklistClassComponent from './Components/BooklistClassComponent';

function App() {
  const style={"display":"flex","justifyContent": "center"}
  return (
    <div style={style}>
      <Booklist/>
      {/* <BooklistClassComponent/> */}
    </div>
  );
}

export default App;
