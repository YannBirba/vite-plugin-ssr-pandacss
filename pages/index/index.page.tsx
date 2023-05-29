import { Counter } from "./Counter";
import { css } from "../../panda/css";

export { Page };

function Page() {
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul
        className={css({
          "& li": {
            listStyle: "none",
            "&:before": {
              content: '"👉"',
              marginRight: 10,
            },
          },
        })}
      >
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  );
}
