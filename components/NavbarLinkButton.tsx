interface NavbarLinkButtonProps {
  label: string;
  onClick: () => void;
}

export default function NavbarLinkButton({ label, onClick }: NavbarLinkButtonProps) {
  return (
    <button onClick={onClick} className="group text-white/80 uppercase relative text-md font-semibold hover:text-primary transition-all duration-300 bg-transparent border-none cursor-pointer">
      <span>{label}</span>
      <div className="absolute block bottom-0 left-0 right-0 h-0.5 w-0 bg-gradient-to-r from-primary to-orange-400 transform transition-all duration-300 group-hover:w-full"></div>
    </button>
  );
}
