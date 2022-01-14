export function P(props: React.PropsWithChildren<{}>) {
  return (
    <p className="text-xl font-medium dark:text-white">{props.children}</p>
  );
}
