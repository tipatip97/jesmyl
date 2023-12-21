import WelcomePage from './WelcomePage';

export default function WelcomePageList({ list }: { list: Record<string, unknown>[] }) {
  return (
    <>
      {list.map((bag, bagi) => (
        <WelcomePage
          key={`bagi${bagi}`}
          bag={bag}
        />
      ))}
    </>
  );
}
