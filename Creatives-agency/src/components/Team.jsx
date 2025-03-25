import { SectionHeader } from "./Constants";
const Team = () => {
  const teamMembers = [
    {
      name: "John Snow",
      post: "CEO",
      pfp: "/Images/team-img-1.png",
    },
    {
      name: "Lady Sansa",
      post: "WebDesigner",
      pfp: "/Images/team-img-2.png",
    },
    {
      name: "David Smith",
      post: "Photographer",
      pfp: "/Images/team-img-3.png",
    },
    {
      name: "Lady Sansa",
      post: "Photographer",
      pfp: "/Images/team-img-4.png",
    },
  ];
  return (
    <div id="about" className="bg-white w-full pb-16">
      <SectionHeader letter="T" sentence="Our Team" color="black">
        <p className="text-3xl leading-9 text-[#222222] font-gotham md:text-2xl">
          sales long tail influencer pitch release niche market
        </p>
      </SectionHeader>
      <div className="flex items-center justify-center gap-8 mt-6 sm:flex-col lg:grid md:grid grid-cols-2 md:px-8 lg:px-20">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-center"
          >
            <img src={member.pfp} alt="" className="relative" />
            <div className="absolute translate-y-8 bottom-0 w-4/5 h-24 bg-white flex flex-col items-center justify-center">
              <p className="text-xl leading-6 uppercase text-[#11749e] font-medium font-gotham">
                {member.name}
              </p>
              <p className="text-sm leading-6 font-medium font-gotham">
                {member.post}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
