import { Section } from "../Section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Wrench } from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

// Helper for SVG icons
const createSvgIcon = (svg: string): ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>> => {
  const SvgIcon = (props: LucideProps) => (
    <span dangerouslySetInnerHTML={{ __html: svg }} {...props} />
  );
  return SvgIcon as any;
};

// Define SVGs for icons
const icons = {
  javascript: createSvgIcon(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4"><path d="M0 0H24V24H0V0Z" fill="#F7DF1E"/><path d="M5.13233 17.6881H8.76633L9.13833 13.6141H6.15633L6.36633 11.4181H9.34833L9.81033 6.34209H12.4383L11.9763 11.4181H14.9583L15.4203 6.34209H18.0483L17.5863 11.4181H19.3323L18.8703 17.6881H12.9303L12.5583 21.3H9.57633L9.94833 17.6881H5.13233Z" fill="black"/></svg>`),
  typescript: createSvgIcon(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4"><path d="M0 0H24V24H0V0Z" fill="#3178C6"/><path d="M12.012 16.5H5.41199V14.052H8.21999V6.528H10.668V14.052H12.012V16.5ZM17.112 16.632C18.156 16.632 18.9 16.14 19.344 15.156L17.34 14.1C17.208 14.412 16.896 14.628 16.404 14.628C15.84 14.628 15.468 14.28 15.276 13.608L20.1 11.664C20.088 11.532 20.076 11.4 20.064 11.268C20.016 10.452 19.536 9.38399 18.624 8.71199C17.76 8.08799 16.692 7.78799 15.42 7.78799C13.26 7.78799 11.82 9.16799 11.82 11.388C11.82 14.1 13.596 15.552 15.72 16.32C16.332 16.536 16.716 16.632 17.112 16.632ZM15.54 12.396C15.996 12.024 16.752 11.712 16.752 10.98C16.752 10.38 16.332 10.02 15.756 10.02C15.156 10.02 14.688 10.368 14.508 10.956L15.54 12.396Z" fill="white"/></svg>`),
  react: createSvgIcon(`<svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4"><circle cx="12.5" cy="12.5" r="2.5" fill="#61DAFB"/><ellipse cx="12.5" cy="12.5" rx="11.5" ry="4.5" stroke="#61DAFB" stroke-width="1"/><ellipse cx="12.5" cy="12.5" rx="4.5" ry="11.5" transform="rotate(60 12.5 12.5)" stroke="#61DAFB" stroke-width="1"/><ellipse cx="12.5" cy="12.5" rx="4.5" ry="11.5" transform="rotate(-60 12.5 12.5)" stroke="#61DAFB" stroke-width="1"/></svg>`),
  nodejs: createSvgIcon(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4"><path d="M11.3753 3.49C11.6257 3.037 12.3743 3.037 12.6247 3.49L22.2136 21.054C22.4734 21.521 22.0895 22.125 21.5889 22.125H2.4111C1.91049 22.125 1.52664 21.521 1.78641 21.054L11.3753 3.49Z" fill="#8CC84B"/><path d="M12.0003 4.875L3.81836 20.625H20.1824L12.0003 4.875Z" fill="#231F20"/><path d="M10.8711 15.687C10.5911 15.939 10.2311 16.065 9.8711 16.065C9.0791 16.065 8.5151 15.513 8.5151 14.481V10.197C8.5151 9.165 9.0911 8.601 9.8591 8.601C10.2191 8.601 10.5671 8.715 10.8431 8.979L11.5511 7.773C11.0231 7.293 10.2791 7.029 9.4271 7.029C7.8851 7.029 6.8111 8.085 6.8111 10.137V14.541C6.8111 16.593 7.8851 17.649 9.4271 17.649C10.2911 17.649 11.0351 17.385 11.5511 16.905L10.8711 15.687ZM17.1895 14.805C17.1895 15.429 16.8175 15.753 16.2775 15.753C15.8215 15.753 15.4855 15.549 15.2695 15.141L15.2215 10.329H13.5415V15.753C13.5415 17.061 14.4415 17.649 15.8215 17.649C16.6375 17.649 17.3575 17.313 17.8015 16.581L17.1895 14.805Z" fill="#8CC84B"/></svg>`),
  sass: createSvgIcon(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4"><rect width="24" height="24" rx="4" fill="#CD6799"/><path d="M12.7801 16.035C12.3851 16.32 11.9201 16.465 11.3851 16.465C9.9701 16.465 8.9401 15.68 8.9401 14.115C8.9401 12.64 9.8701 11.755 11.2351 11.755C11.7451 11.755 12.1851 11.89 12.5651 12.16L12.9801 10.98C12.4451 10.65 11.7851 10.465 11.0051 10.465C8.8051 10.465 7.0751 11.965 7.0751 14.16C7.0751 16.31 8.7151 17.845 11.1001 17.845C11.8951 17.845 12.6101 17.645 13.1901 17.225L12.7801 16.035ZM14.9781 17.635L15.2431 15.82H13.6281L13.7881 14.53H15.4031L15.6831 12.235L17.4831 12.355L17.2031 14.65L18.8181 14.53L18.6581 15.82H17.0431L16.7781 17.635H14.9781ZM12.7801 9.40003C12.3851 9.68503 11.9201 9.83003 11.3851 9.83003C9.9701 9.83003 8.9401 9.04503 8.9401 7.48003C8.9401 6.00503 9.8701 5.12003 11.2351 5.12003C11.7451 5.12003 12.1851 5.25503 12.5651 5.52503L12.9801 4.34503C12.4451 4.01503 11.7851 3.83003 11.0051 3.83003C8.8051 3.83003 7.0751 5.33003 7.0751 7.52503C7.0751 9.67503 8.7151 11.21 11.1001 11.21C11.8951 11.21 12.6101 11.01 13.1901 10.59L12.7801 9.40003Z" fill="white"/></svg>`),
  bootstrap: createSvgIcon(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" fill="#7952B3"/><path d="M16.526 6.05263H7.47368V17.9474H16.526V6.05263ZM12.1579 16.0526H9.36842V7.94737H12.1579V16.0526ZM14.6316 13.6316C14.0526 14.1053 13.2632 14.3421 12.1579 14.3421V9.63158C13.2632 9.63158 14.0526 9.86842 14.6316 10.3421C15.2105 10.7632 15.5 11.4737 15.5 12C15.5 12.5263 15.2105 13.2105 14.6316 13.6316Z" fill="white"/></svg>`),
  styled: createSvgIcon(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4"><path d="M16.143 4.28594C12.8574 4.28594 11.1432 6.00022 11.1432 8.57165V12.8574H12.8574V17.1431H8.57171V12.8574H4.28594V8.57165L8.57171 4.28594H16.143ZM15.2859 17.1431C15.2859 16.6859 15.4716 16.2288 15.843 15.8574C16.2145 15.4859 16.6716 15.2859 17.143 15.2859C17.6145 15.2859 18.0716 15.4859 18.443 15.8574C18.8145 16.2288 19.0145 16.6859 19.0145 17.1431C19.0145 17.6002 18.8145 18.0574 18.443 18.4288C18.0716 18.8002 17.6145 19.0002 17.143 19.0002C16.6716 19.0002 16.2145 18.8002 15.843 18.4288C15.4716 18.0574 15.2859 17.6002 15.2859 17.1431Z" fill="#DB7093"/></svg>`),
  semantic: createSvgIcon(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#35BDB2"/><path d="M12 5C8.13 5 5 8.13 5 12C5 15.87 8.13 19 12 19C15.87 19 19 15.87 19 12C19 8.13 15.87 5 12 5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17Z" fill="#35BDB2"/></svg>`),
  mysql: createSvgIcon(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4"><path d="M12.35 15.3H10.51V11.26L9.04998 12.01V10.42L12.16 8.5H12.35V15.3Z" fill="#00758F"/><path d="M16 15.5C14.33 15.5 13.25 14.49 13.25 12.7C13.25 10.98 14.28 10.02 15.83 9.87V8.5H18.94V9.89C20.7 10.06 21.75 10.96 21.75 12.74C21.75 14.52 20.65 15.5 18.92 15.5H16ZM16.03 14.21H18.65C19.52 14.21 20.02 13.78 20.02 12.75C20.02 11.75 19.55 11.23 18.66 11.13V11.11C18.11 11.03 17.5 11 17.26 11H16.03V14.21Z" fill="#00758F"/><path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM6.44 19.56C3.997 17.117 2.455 13.911 2.455 10.4C2.455 6.889 3.997 3.683 6.44 1.24C8.883 3.683 12.089 5.225 15.6 5.225C19.111 5.225 22.317 3.683 24.76 1.24C22.317 3.683 20.775 6.889 20.775 10.4C20.775 13.911 22.317 17.117 24.76 19.56C22.317 17.117 19.111 15.575 15.6 15.575C12.089 15.575 8.883 17.117 6.44 19.56Z" fill="#E48E00"/></svg>`),
  postgres: createSvgIcon(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.5 17H13.5V13.5H11.5V11H13.5V7H15.5V11H17.5V13.5H15.5V17ZM8.5 17H6.5V7H8.5V17Z" fill="#336791"/></svg>`),
  git: createSvgIcon(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4"><path d="M21.3691 10.3551L13.6449 2.63086C13.1119 2.09785 12.3023 2.09785 11.7693 2.63086L4.04504 10.3551C2.38575 12.0144 2.38575 14.7144 4.04504 16.3737L11.7693 24.0979C12.3023 24.6309 13.1119 24.6309 13.6449 24.0979L21.3691 16.3737C23.0284 14.7144 23.0284 12.0144 21.3691 10.3551ZM12.7071 22.0979L5.04504 14.4358C4.26447 13.6552 4.26447 12.3852 5.04504 11.6046L12.7071 3.9425C12.7071 3.9425 12.7071 13.3737 12.7071 22.0979ZM19.9549 14.4358L14.7071 19.6836V6.37366L19.9549 11.6215C20.7355 12.402 20.7355 13.672 19.9549 14.4526V14.4358Z" fill="#F05033"/></svg>`),
  github: createSvgIcon(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.15 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 20.025 9.5125 19.225C6.7375 19.725 6.1375 17.8875 6.1375 17.8875C5.6875 16.775 5.0375 16.475 5.0375 16.475C4.15 15.875 5.1125 15.8875 5.1125 15.8875C6.075 15.9625 6.575 16.825 6.575 16.825C7.425 18.2875 8.8875 17.85 9.35 17.625C9.425 17.025 9.6875 16.6375 9.9625 16.4C7.65 16.15 5.2375 15.275 5.2375 11.6625C5.2375 10.5875 5.6125 9.725 6.225 9.0375C6.125 8.7875 5.8125 7.8 6.325 6.6375C6.325 6.6375 7.15 6.375 9.5125 7.9625C10.3125 7.75 11.1625 7.6375 12 7.6375C12.8375 7.6375 13.6875 7.75 14.4875 7.9625C16.85 6.375 17.675 6.6375 17.675 6.6375C18.1875 7.8 17.875 8.7875 17.775 9.0375C18.3875 9.725 18.7625 10.5875 18.7625 11.6625C18.7625 15.2875 16.35 16.15 13.9375 16.4C14.275 16.7 14.5875 17.25 14.5875 18.125C14.5875 19.3625 14.575 20.35 14.575 20.675C14.575 20.9375 14.75 21.225 15.2625 21.1375C19.2375 19.8625 22 16.3375 22 12C22 6.475 17.525 2 12 2Z" fill="black"/></svg>`),
  trello: createSvgIcon(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4"><rect width="24" height="24" rx="4" fill="#0079BF"/><path d="M9.01604 5.37598H12.912C13.248 5.37598 13.52 5.64798 13.52 5.98398V14.168C13.52 14.504 13.248 14.776 12.912 14.776H9.01604C8.68004 14.776 8.40804 14.504 8.40804 14.168V5.98398C8.40804 5.64798 8.68004 5.37598 9.01604 5.37598Z" fill="white"/><path d="M14.76 5.37598H18.656C18.992 5.37598 19.264 5.64798 19.264 5.98398V11.128C19.264 11.464 18.992 11.736 18.656 11.736H14.76C14.424 11.736 14.152 11.464 14.152 11.128V5.98398C14.152 5.64798 14.424 5.37598 14.76 5.37598Z" fill="white"/></svg>`),
  npm: createSvgIcon(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4"><path d="M24 0H0V24H24V0Z" fill="#CB3837"/><path d="M20 4H4V20H20V4Z" fill="white"/><path d="M18 6H6V18H18V6Z" fill="#CB3837"/><path d="M10.5 8H7.5V16H10.5V10H12V16H15V8H10.5Z" fill="white"/></svg>`),
  html5: createSvgIcon(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4"><path d="M2 21.875L3.875 2H22.125L20.25 21.875L12 24.5L2 21.875Z" fill="#E44D26"/><path d="M12 4.125V22.5125L18.5 20.6L20.25 4.125H12Z" fill="#F16529"/><path d="M7.75 8.375H12V10.5H9.5L9.75 12.625H12V14.75H7.5L7 8.375Z" fill="#EBEBEB"/><path d="M7.875 17H10L10.125 18.375L12 19L13.875 18.375L14.125 15.875H7.75L8 19.375L12 20.75L16 19.375L16.5 13.75H12V15.875H14.25L14 17.5L12 18.125L10 17.5L9.875 16H7.875V17Z" fill="white"/><path d="M12 8.375V10.5H16.25L15.75 14.75H12V12.625H14.5L14.75 10.5H12V8.375H16.75L17 6.25H12V8.375Z" fill="white"/></svg>`),
  css3: createSvgIcon(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4"><path d="M2 21.875L3.875 2H22.125L20.25 21.875L12 24.5L2 21.875Z" fill="#1572B6"/><path d="M12 4.125V22.5L18.5 20.6L20.25 4.125H12Z" fill="#33A9DC"/><path d="M7.625 8.375H12V10.5H9.875L10.125 12.625H12V14.75H7.5L7.125 8.375Z" fill="white"/><path d="M12 8.375H16.375L16.125 10.5H12V8.375ZM12 12.625H14.25L14 14.75L12 15.375V12.625Z" fill="#EBEBEB"/><path d="M7.875 17H10L10.125 18.375L12 19L13.875 18.375L14.125 15.875H10.125L10 17H7.875Z" fill="white"/></svg>`),
  redux: createSvgIcon(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4"><path d="M12.0001 22.9688C18.0689 22.9688 22.9689 18.0688 22.9689 12C22.9689 5.93122 18.0689 1.03125 12.0001 1.03125C5.93131 1.03125 1.03134 5.93122 1.03134 12C1.03134 18.0688 5.93131 22.9688 12.0001 22.9688Z" fill="#764ABC"/><path d="M8.28311 14.8624C6.39365 13.9116 5.8679 11.666 6.81867 9.77651C7.76944 7.88705 9.99268 7.33898 11.8821 8.28975L13.6267 7.50275C11.1352 6.27838 8.01633 7.04306 6.79196 9.53452C5.56759 12.026 6.33227 15.1448 8.82373 16.3692L8.28311 14.8624ZM15.717 9.13754C17.6065 10.0883 18.1322 12.334 17.1815 14.2234C16.2307 16.1129 14.0075 16.661 12.118 15.7102L10.3734 16.4972C12.8649 17.7216 15.9838 16.9569 17.2081 14.4654C18.4325 11.974 17.6678 8.85514 15.1764 7.63077L15.717 9.13754Z" fill="white"/></svg>`),
  zustand: createSvgIcon(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#4A4A4A"/><path d="M12 4C10.5 4 8 5.5 8 8C8 10.5 12 12.5 12 12.5C12 12.5 16 10.5 16 8C16 5.5 13.5 4 12 4Z" fill="white"/><path d="M12 13.5C12 13.5 8 11.5 8 9C8 8.5 8.125 8.125 8.25 7.75C8.5 10.25 12 12 12 12V13.5Z" fill="#CCCCCC"/><path d="M12 20C13.5 20 16 18.5 16 16C16 13.5 12 11.5 12 11.5C12 11.5 8 13.5 8 16C8 18.5 10.5 20 12 20Z" fill="white"/><path d="M12 10.5C12 10.5 16 12.5 16 15C16 15.5 15.875 15.875 15.75 16.25C15.5 13.75 12 12 12 12V10.5Z" fill="#CCCCCC"/></svg>`),
};


const technicalSkills = [
    { name: "JavaScript", icon: icons.javascript, color: "bg-[#F7DF1E] text-black" },
    { name: "TypeScript", icon: icons.typescript, color: "bg-[#3178C6] text-white" },
    { name: "React", icon: icons.react, color: "bg-[#20232A] text-[#61DAFB]" },
    { name: "Node.js", icon: icons.nodejs, color: "bg-[#339933] text-white" },
    { name: "HTML5", icon: icons.html5, color: "bg-[#E34F26] text-white" },
    { name: "CSS3", icon: icons.css3, color: "bg-[#1572B6] text-white" },
    { name: "Sass", icon: icons.sass, color: "bg-[#CD6799] text-white" },
    { name: "Bootstrap", icon: icons.bootstrap, color: "bg-[#7952B3] text-white" },
    { name: "Styled-Components", icon: icons.styled, color: "bg-[#DB7093] text-white" },
    { name: "Semantic UI React", icon: icons.semantic, color: "bg-[#35BDB2] text-white" },
    { name: "MySQL", icon: icons.mysql, color: "bg-[#4479A1] text-white" },
    { name: "Postgres", icon: icons.postgres, color: "bg-[#336791] text-white" },
    { name: "Git", icon: icons.git, color: "bg-[#F05033] text-white" },
    { name: "GitHub", icon: icons.github, color: "bg-black text-white" },
    { name: "NPM", icon: icons.npm, color: "bg-[#CB3837] text-white" },
    { name: "Trello", icon: icons.trello, color: "bg-[#0079BF] text-white" },
    { name: "Context-API", icon: icons.react, color: "bg-[#20232A] text-[#61DAFB]" },
    { name: "React Router", icon: icons.react, color: "bg-[#CA4245] text-white" },
    { name: "React Hook Form", icon: icons.react, color: "bg-[#EC5990] text-white" },
    { name: "Zustand", icon: icons.zustand, color: "bg-[#4A4A4A] text-white" },
    { name: "Redux", icon: icons.redux, color: "bg-[#764ABC] text-white" },
];

const softSkills = [
  { name: "Resolución de problemas", color: "bg-primary/90" },
  { name: "Proactividad y adaptabilidad", color: "bg-accent/90" },
  { name: "Trabajo en equipo ágil", color: "bg-primary/80" },
  { name: "Gestión del tiempo", color: "bg-accent/80" },
  { name: "Atención al detalle", color: "bg-primary/70" },
  { name: "Aprendizaje rápido", color: "bg-accent/70" }
];

export default function Skills() {
  return (
    <Section id="habilidades">
      <Card className="shadow-lg">
          <CardHeader>
              <CardTitle className="flex items-center gap-3 font-headline text-3xl font-bold text-primary justify-center">
                  <Wrench className="w-8 h-8" />
                  Habilidades
              </CardTitle>
          </CardHeader>
          <Separator className="w-1/2 mx-auto" />
          <CardContent className="space-y-8 pt-6">
            <div className="space-y-6">
                <h3 className="text-xl font-semibold text-center">
                Habilidades Técnicas
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                    {technicalSkills.map(skill => (
                        <Badge key={skill.name} className={`text-sm px-3 py-1.5 ${skill.color} flex items-center gap-2`}>
                            {skill.icon && <skill.icon />}
                            {skill.name}
                        </Badge>
                    ))}
                </div>
            </div>
            
            <Separator />

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-center">
                Habilidades Blandas
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                  {softSkills.map(skill => (
                    <Badge key={skill.name} variant="default" className={`${skill.color} text-primary-foreground text-sm px-3 py-1`}>{skill.name}</Badge>
                  ))}
              </div>
            </div>
          </CardContent>
      </Card>
    </Section>
  );
}
