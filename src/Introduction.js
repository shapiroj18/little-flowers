import { Link } from "./components/Link";
import { Navigation } from "./components/Navigation";

export function Introduction() {
  return (
    <>
      <Navigation currentTab={"introduction"} />
      <div className="flex flex-row">
        <div className="basis-3/4">
          <h1 className="mx-6 my-5 text-6xl text-atomic-tangerine">
            Introduction
          </h1>
          <p className="mx-12 text-2xl text-carribean-current">
            Welcome to your tiny React journey
          </p>
          <br />
          <h2 className="mx-6 my-5 text-4xl text-atomic-tangerine">
            What is React?
          </h2>
          <p className="mx-12 text-2xl text-carribean-current">
            React is a library to build <i>components</i> in an application.
            Components are defined as "a piece of the UI (user interface) that
            has its own logic and appearance."
            <br />
            <br />
            Basically any isolated "thing" on a website can be thought of /
            built as a component! This can mean something like a button, or an
            entire screen. And even more, it can do stuff! And even more, you
            can build components with other components!!
            <br />
            <br />
            <strong>Confused? That's okay - let's look at an example!</strong>
            <p>
              Wordle is a popular game amongst <i>*ahem*</i> empty nesters.
              Despite the tyranical NYTimes has taken over this majestic game,
              we luckily have sites like{" "}
              <Link
                href={"https://wordleonline.com/"}
                text={"wordle online"}
                target={"_blank"}
              />{" "}
              to play <i>4 free</i>.
              <br />
              <br />
              From this game, we can imagine a bunch of different "pieces" - the
              board, the keyboard, the letters. Each of these "pieces" will have
              content (html), a look (css), and even potentially interactivity
              (javascript).
              <br />
              <br />
              If we were to build a <strong>Letter</strong> component, we could
              imagine that it could contain any alphabetical character, would
              need to be bolded, and have a grey/yellow/green state based on
              correctness of the letter the user entered.
            </p>
            {/* to do get a font for code and start writing jsx! */}
            <br />
            <br />
          </p>
        </div>
        {/* TODO - floral patterns in other 1/4 of screen? */}
      </div>
    </>
  );
}
