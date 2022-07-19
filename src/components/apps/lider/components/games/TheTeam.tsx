import HumanFace from "../people/HumanFace";
import RandomTwiceName from "../RandomTwiseName";
import Team from "./Team";

export default function TheTeam({ team }: { team: Team }) {
  const [pronoun, noun] = team.name.split(" ");
  return (
    <div className="padding-giant-gap">
      <RandomTwiceName
        pronoun={pronoun}
        noun={noun}
        className="inline-block margin-gap-v"
        onNameChange={(name) => (team.name = name)}
      />
      {" (сила - " +
        team.humans.reduce((acc, { ufp }) => acc + ufp, 0).toFixed(1) +
        ") "}
      {team.humans.map((human, humani) => {
        return <HumanFace key={`human ${humani}`} human={human} />;
      })}
    </div>
  );
}
