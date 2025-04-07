import { BrowserRouter , Routes , Route } from "react-router-dom";
import Body from "./components/Body";

import store from "./utils/store";
import { Provider } from "react-redux";
import WatchPage from "./components/WatchPage";
import VideoContainer from "./components/VideoContainer";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body/>}>
            <Route path="/" element={<VideoContainer/>}/>
            <Route path="/watch" element={<WatchPage/>}></Route>
          </Route >
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

