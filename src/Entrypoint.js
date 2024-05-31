import { Button } from "./components/Button";

export function Entrypoint() {
  return (
    <>
      <h1 className="flex justify-center text-6xl text-carribean-current">
        Little Flowers
      </h1>
      <p className="flex justify-center text-2xl text-tiffany-blue">
        A tiny React tutorial
      </p>
      <div className="flex justify-center">
        <Button title="Get Started" link="https://google.com" />
      </div>
    </>
  );
}
