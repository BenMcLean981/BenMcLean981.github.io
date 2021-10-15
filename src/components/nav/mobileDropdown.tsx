import { mergeClasses } from "@utils/mergeClasses";

interface Props {
  handleToggle: VoidFunction;
  open: boolean;
}

export function MobileDropdown(props: Props) {
  function getButtonColor(): string {
    const base = "w-6 h-6 transition duration-300";

    if (props.open) return mergeClasses(base, "text-white");
    else return mergeClasses(base, "text-gray-500");
  }

  return (
    <div className="md:hidden flex items-center">
      <button
        className="outline-none mobile-menu-button"
        onClick={props.handleToggle}
      >
        <svg
          className={getButtonColor()}
          x-show="!showMenu"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  );
}
