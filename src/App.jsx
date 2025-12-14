import { createEffect, createMemo, createSignal, onCleanup, onMount } from "solid-js";




const Ticker = function() {
  const [tick, setTick] = createSignal(0);
  let count = createMemo(() => tick() * 2);
  let timer = null;
  onMount(() => {
    timer = setInterval(() => setTick((v) => v + 1), 1000);
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
      <p class="text-4xl text-green-700 text-center py-20">Hello tailwind!</p>
      <div class="text-center font-bold flex justify-center align-center">
        <Ticker/>
      </div>
    </div>
  );
};

export default App;
