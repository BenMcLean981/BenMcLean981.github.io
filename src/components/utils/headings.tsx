export function H1(props: React.PropsWithChildren<{}>) {
  return (
    <h1 className="text-6xl font-medium my-2 dark:text-white">
      {props.children}
    </h1>
  );
}

export function H2(props: React.PropsWithChildren<{}>) {
  return (
    <h2 className="text-4xl font-medium my-2 dark:text-white">
      {props.children}
    </h2>
  );
}

export function H3(props: React.PropsWithChildren<{}>) {
  return (
    <h3 className="text-3xl font-medium my-2 dark:text-white">
      {props.children}
    </h3>
  );
}

export function H4(props: React.PropsWithChildren<{}>) {
  return (
    <h4 className="text-lg font-medium my-2 dark:text-white">
      {props.children}
    </h4>
  );
}

export function H5(props: React.PropsWithChildren<{}>) {
  return (
    <h5 className="text-md font-medium my-2 dark:text-white">
      {props.children}
    </h5>
  );
}

export function H6(props: React.PropsWithChildren<{}>) {
  return (
    <h6 className="text-sm font-medium my-2 dark:text-white">
      {props.children}
    </h6>
  );
}
