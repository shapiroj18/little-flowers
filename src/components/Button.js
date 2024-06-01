export function Button({ title, link }) {
  return (
    <a
      href={link}
      className="button rounded p-1 text-2xl bg-tiffany-blue text-white"
    >
      {title}
    </a>
  );
}
