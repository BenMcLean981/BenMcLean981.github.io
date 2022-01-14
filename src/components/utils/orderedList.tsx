export function OL(props: React.PropsWithChildren<{}>) {
  return <ol className="list-decimal ml-6">{props.children}</ol>;
}

export function OLI(props: React.PropsWithChildren<{}>) {
  return (
    <li className="text-xl font-medium dark:text-white">{props.children}</li>
  );
}
