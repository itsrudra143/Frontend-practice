import { faComment, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { SectionHeader, FeatureItem } from "./Constants";

const featuresData = [
  {
    title: "Feature One",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius odit soluta maiores perferendis id, nisi quo exercitationem suscipit alias animi laboriosam.",
    icon: faPenToSquare,
  },
  {
    title: "Feature Two",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius odit soluta maiores perferendis id, nisi quo exercitationem suscipit alias animi laboriosam.",
    icon: faPenToSquare,
  },
  {
    title: "Feature Three",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius odit soluta maiores perferendis id, nisi quo exercitationem suscipit alias animi laboriosam.",
    icon: faMagnifyingGlass,
  },
  {
    title: "Feature Four",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius odit soluta maiores perferendis id, nisi quo exercitationem suscipit alias animi laboriosam.",
    icon: faComment,
  },
];
const Features = () => {
  return (
    <div
      id="features"
      className="w-full h-max bg-[#11749e] flex flex-col items-center justify-center gap-4 py-8 sm:py-5"
    >
      <SectionHeader letter="W" sentence="We are an awesome agency" />
      <div className="flex gap-10 flex-wrap justify-center md:grid md:grid-cols-2 md:px-4 lg:grid lg:grid-cols-2 lg:px-4">
        {featuresData.map((feature, index) => (
          <FeatureItem
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
