export function UL(props: React.PropsWithChildren<{}>) {
  return <ul className="ml-6 list-disc">{props.children}</ul>;
}

export function ULI(props: React.PropsWithChildren<{}>) {
  return (
    <li className="text-xl font-medium dark:text-white">{props.children}</li>
  );
}
