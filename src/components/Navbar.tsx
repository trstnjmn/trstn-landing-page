import { useTheme } from "@/components/theme-provider.tsx";

const goToTop = () => {
  window.scroll({
    top: 0,
    left: 0,
  });
};

const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  const targetId = event.target.value;
  const element = document.getElementById(targetId);
  if (element) {
    const yOffset = -120; // Offset in Pixeln (Anpassung nach Bedarf)
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};


export const Navbar = () => {
  // useTheme Hook wird jetzt innerhalb der Komponente aufgerufen
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value as "light" | "dark");
  };

  // Bestimme den initialen Wert für das Dropdown
  const themeValue = theme === "system"
      ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      : theme;

  return (
      <header className="sticky top-0 z-40 w-full bg-card">
        <div className="md:py-4 py-6 md:px-8 w-[95vw] flex justify-between flex flex-col md:flex-row gap-4">
          <div>
            <h1 className="ml-8 my-auto font-bold md:text-4xl text-base text-snes-nature dark:text-snes-grey">
              <a rel="noreferrer noopener" onClick={goToTop}>
                TrstnJmn
              </a>
            </h1>
          </div>

          <div className="flex flex-row gap-8 ml-8">
            <div className="snes-form-group w-[360px]">
              <div className="snes-input is-success dark:bg-snes-grey">
                <select onChange={handleChange}>
                  <option value="" disabled selected>Select Navi</option>
                  <option value="hero">Start</option>
                  <option value="skills">Skills</option>
                  <option value="projects">Projects</option>
                  <option value="gameboy">Gameboy</option>
                  <option value="certifications">Certifications</option>
                  <option value="footer">End</option>
                </select>
              </div>
            </div>

            <div className="snes-form-group w-[180px]">
              <div className="snes-input is-warning dark:bg-snes-grey">
                <select onChange={handleThemeChange} value={themeValue}>
                  <option value="light">Light</option>
                  <option value="dark">Night</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <hr className="bg-black h-1"/>
      </header>
  );
};
