import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { SearchBar, Styles } from './Components/SearchBar';

function App() {
  const [text, setText] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam odio ut sapien mollis hendrerit. Fusce in lectus ex. In hac habitasse platea dictumst. Duis aliquam sed arcu at sagittis. Pellentesque suscipit elit a elit dignissim, ornare mattis libero convallis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque in dictum augue, nec consectetur enim. Pellentesque quis quam ultricies, volutpat nulla sit amet, egestas est. Praesent accumsan ante non dui sollicitudin convallis. Etiam facilisis finibus lectus, euismod gravida ipsum ultricies at.'
  );
  const text2 = 'jlloe';

  return (
    <div className="App">
      <SearchBar
        placeHolder="RedColor"
        searchText={text}
        onResults={setText}
        styleFont={Styles.RedColor}
      />
      <SearchBar
        placeHolder="Underlined"
        searchText={text}
        onResults={setText}
        styleFont={Styles.Underlined}
      />
      <SearchBar
        placeHolder="Bolded"
        searchText={text}
        onResults={setText}
        styleFont={Styles.Bolded}
      />

      {/* {text} */}
    </div>
  );
}

export default App;
