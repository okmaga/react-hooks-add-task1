import { useWindowScroll } from "./useWindowScroll";

function App() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <div style={{ height: "200vh", width: "200vw" }}>
      <p>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </p>
      <button onClick={() => scrollTo({ y: 0 })} style={{ position: "fixed" }}>
        Scroll to top
      </button>
    </div>
  );
}

export default App;
