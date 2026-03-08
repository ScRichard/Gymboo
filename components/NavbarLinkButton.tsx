interface NavbarLinkButtonProps {
  href: string;
  label: string;
}

export default function NavbarLinkButton({ href, label }: NavbarLinkButtonProps) {
  return (
    <a href={href} className="group text-white relative text-lg font-bold hover:text-[#FEBA53] transition-all">
      <span>{label}</span>
      <div className="absolute block bottom-0 left-0 right-0 h-0.5 w-full bg-white transform transition-all scale-x-0 group-hover:bg-[#FEBA53] group-hover:scale-x-100"></div>
    </a>
  );
}
