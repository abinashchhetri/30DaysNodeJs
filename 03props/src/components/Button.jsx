export default function Button({ text, color }) {
  return (
    <span
      className={`px-11 py-3 rounded-[2rem] text-white text-2xl  flex justify-center items-center`}
    >
      {text}
    </span>
  );
}
