interface NavbarLinkButtonProps {
  href: string;
  label: string;
}

export default function NavbarLinkButton({ href, label }: NavbarLinkButtonProps) {
  return (
    <a href={href} className="group text-white/80 uppercase relative text-md font-semibold hover:text-primary transition-all duration-300">
      <span>{label}</span>
      <div className="absolute block bottom-0 left-0 right-0 h-0.5 w-0 bg-gradient-to-r from-primary to-orange-400 transform transition-all duration-300 group-hover:w-full"></div>
    </a>
  );
}
