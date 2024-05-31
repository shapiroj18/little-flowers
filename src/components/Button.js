export function Button({ title, link }) {
  return (
    <a href={link} class="button">
      {title}
    </a>
  );
}
