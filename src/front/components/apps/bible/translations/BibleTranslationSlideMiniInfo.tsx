interface Props {
  addressText: string;
}

export default function BibleTranslationSlideMiniInfo({ addressText }: Props): JSX.Element {
  return <span>{addressText}</span>;
}
