interface NavbarLinkButtonProps {
  label: string;
  onClick: () => void;
  active?: boolean;
}

export default function NavbarLinkButton({ label, onClick, active }: NavbarLinkButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`group uppercase relative text-md font-semibold transition-all duration-300 bg-transparent border-none cursor-pointer ${active ? 'text-primary' : 'text-white/80 hover:text-primary'}`}
    >
      <span>{label}</span>
      <div className={`absolute block bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-orange-400 transform transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
    </button>
  );
}
