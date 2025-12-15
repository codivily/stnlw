import { createEffect, createMemo, createSignal, onCleanup, onMount } from "solid-js";




const Ticker = function() {
  const [tick, setTick] = createSignal(Date.now());
  let count = createMemo(() => (new Date(tick())).toLocaleTimeString());
  let timer = null;
  onMount(() => {
    timer = setInterval(() => setTick(Date.now()), 250);
  });

  onCleanup(() => {
    clearInterval(timer);
    timer = null;
  });

  return <div>{count()}</div>
};


const App = () => {
  return (
    <div>
      <div class="text-center absolute top-0 bottom-0 left-0 right-0 font-bold flex items-center justify-center align-center">
        <Ticker/>
      </div>
    </div>
  );
};

export default App;
