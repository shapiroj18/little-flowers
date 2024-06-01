import { Button } from "./components/Button";

export function Entrypoint() {
  return (
    <div className="bg-[url('./assets/images/floral_background.png')] bg-48 bg-right bg-no-repeat">
      <div className="flex h-screen">
        <div className="m-auto">
          <h1 className="flex justify-center py-2 text-8xl text-carribean-current">
            Little Flowers
          </h1>
          <p className="flex justify-center pb-8 text-3xl text-atomic-tangerine">
            A tiny React tutorial
          </p>
          <div className="flex justify-center">
            <Button title="Get Started" link="https://google.com" />
          </div>
        </div>
      </div>
    </div>
  );
}
