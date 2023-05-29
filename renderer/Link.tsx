import { usePageContext } from "./usePageContext";
import { cx } from "../panda/css";
import { panda, type HTMLPandaProps } from "../panda/jsx";
import { link, type LinkVariant } from "../panda/recipes";

export type LinkProps = LinkVariant & HTMLPandaProps<"a">;

export { Link };

function Link({ href, className, children, variant, ...props }: LinkProps) {
  const pageContext = usePageContext();
  const comptutedClassName = [
    className,
    pageContext.urlPathname === href && "is-active",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <panda.a href={href} className={cx(comptutedClassName, link({ variant }))} {...props}>
      {children}
    </panda.a>
  );
}
