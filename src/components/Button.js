export function Button({ variant, title, link }) {
  const variants = ["primary", "secondary"];

  if (!variants.includes(variant)) {
    throw new Error(`button variant must be in ${variants.join(", ")}`);
  }

  let variantColors;
  if (variant === "primary") {
    variantColors = "bg-tiffany-blue text-white";
  }
  if (variant === "secondary") {
    variantColors = "border-2 border-atomic-tangerine text-atomic-tangerine";
  }

  return (
    <a
      href={link}
      className={`button rounded px-2 py-1 text-2xl ${variantColors} hover:border-carribean-current border-2`}
    >
      {title}
    </a>
  );
}
