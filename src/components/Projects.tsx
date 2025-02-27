import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import whistleblower from "../img/Whistleblower.jpg";
import wachenheim from "../img/Wachenheim.jpeg";
import kinderkunstschule from "../img/Kinderkunstschule.jpeg";
import jenVerlag from "../img/JenVerlag.jpg"
import {getRandomSnesButtonColor} from "./utilities/snesRandomColors";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
  link: string;
  linkName: string;
}

const projects: FeatureProps[] = [
  {
    title: "Whistleblower Tool",
    description:
        "The Whistleblower tool by bitExpert allows for the secure and anonymous reporting of misconduct, fraud, ethical violations, and other issues. This tool helps companies mitigate risks, increase employee satisfaction, and ensure compliance with legal regulations.",
    image: whistleblower,
    link: "https://www.bitexpert.de/de/produkte/whistleblower",
    linkName: "go to",
  },
  {
    title: "Website for SSV-Wachenheim",
    description:
        "I have set up a website for the Wachenheim Shooting Club. This site was only available in very old HTML and CSS code. First I started to rewrite the website in React. Then I decided to do it with GRAV so that the owner can easily edit the content of the site in a simple CMS.",
    image: wachenheim,
    link: "http://www.ssv-wachenheim.de/",
    linkName: "Go to",
  },
  {
    title: "Kinderkunstschule",
    description:
        "This page was created with Wix.com. The design is self-made. The children's art school is run by Ulrike Göhring. She also offers art therapy. The German slogan is : Kleine Künstler, große Ideen!",
    image: kinderkunstschule,
    link: "https://kinderkunstschule-hg.de/",
    linkName: "go to",
  },
  {
    "title": "Welt des Erbens",
    "description": "World of Inheritance is a site for mourners. Here I have built some templates, overview pages, an advisor search and much more.",
    "image": jenVerlag,
    "link": "https://www.weltdeserbens.de/de",
    "linkName": "go to"
  }

];

export const Projects = () => {
  return (
      <section
          id="projects"
          className="container py-20"
      >
        <h2 className="snes-container-title has-ocean-underline mb-8">
          Projects
        </h2>
        <h3 className="mb-8">
          A few projects I have done.
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map(({title, description, image, link, linkName}) => (
              <Card key={title}>
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                </CardHeader>

                <CardContent>
                  {description}
                  <img
                      src={image}
                      alt={title}
                      className="object-cover object-center w-full max-h-[290px] mx-auto snes-image mt-6"
                  />
                </CardContent>
                <CardFooter>
                  <a
                      rel="noreferrer noopener"
                      href={link}
                        target="_blank"
                        className={`p-1 truncate mx-auto ${getRandomSnesButtonColor()}`}
                    >
                      {linkName}
                    </a>
                </CardFooter>
              </Card>
          ))}
        </div>
      </section>
);
};
