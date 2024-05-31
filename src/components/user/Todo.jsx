function Todo({ darkMode,task }) {

  return (
    <div
      className={` w-[95%] px-4  h-[90px] mx-auto my-1  flex justify-between items-center rounded-xl ${
        darkMode ? "bg-sky-950" : "bg-gray-300"
      }`}
    >
      <div>
        <p className="font-bold">{task.time}</p>
        <p>{task.text}</p>
      </div>
      <div className="flex space-x-2">
        <button className="p-2 bg-yellow-500 mask mask-hexagon">✔️</button>
        <button className="p-2 bg-red-500 mask mask-hexagon">🗑️</button>
      </div>
    </div>
  );
}
export default Todo;
