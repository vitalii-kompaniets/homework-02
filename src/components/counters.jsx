import React, { useState } from "react";
import Counter from "./counter";

const Counters = () => {
  const initialState = [
    { value: 0, id: 1, name: "Ложка" },
    { value: 0, id: 2, name: "Вилка" },
    { value: 0, id: 3, name: "Тарелка" },
    { value: 0, id: 4, name: "Стартовый набор минималиста" },
    { value: 0, id: 5, name: "Ненужные вещи" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (counterId) => {
    const newCounters = counters.filter((c) => c.id !== counterId);
    setCounters(newCounters);
  };

  const handleIncrement = (counterId) => {
    const newCountersValue = counters.map((counter) => {
      if (counter.id === counterId) {
        counter.value += 1;
      }
      return counter;
    });
    setCounters(newCountersValue);
  };

  const handleDecrement = (counterId) => {
    const newCountersValue = counters.map((counter) => {
      if (counter.id === counterId && counter.value > 0) {
        counter.value -= 1;
      }
      return counter;
    });
    setCounters(newCountersValue);
  };

  const handleReset = () => setCounters(initialState);
  return (
    <div>
      <button onClick={handleReset} className="btn btn-primary btn-sm m-2">
        Сброс
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...counter}
        />
      ))}
    </div>
  );
};

export default Counters;
