import { HTMLAttributes } from 'react';

export default function JImage(props: { src: string } & HTMLAttributes<HTMLImageElement>) {
  return <img alt="" {...props} src={require(`../resource/imgs/${props.src}`)} />;
}
