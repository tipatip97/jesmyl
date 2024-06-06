import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14.6897 18.5H9.31035C8.63048 18.5 8.00273 18.8846 7.66542 19.5077L7.12621 20.5039C6.76535 21.1705 7.22133 22 7.94867 22H16.0513C16.7787 22 17.2347 21.1705 16.8738 20.5039L16.3346 19.5077C15.9973 18.8846 15.3695 18.5 14.6897 18.5Z',
  d2: 'M12 12V18.5',
  d3: 'M12 2C9.51472 2 7.5 3.17807 7.5 5.84619C7.5 8.18121 9.5105 8.74889 10.5152 10.9489C10.6595 11.2648 10.7316 11.4227 10.7782 11.4936C10.9831 11.8056 11.1795 11.9309 11.5517 11.9872C11.6363 12 11.7575 12 11.9999 12C12.2423 12 12.3636 12 12.4481 11.9873C12.8204 11.9311 13.0162 11.8063 13.2214 11.4945C13.268 11.4236 13.3404 11.2655 13.4853 10.9491C14.4901 8.75415 16.5 8.20205 16.5 5.84619C16.5 3.15386 14.4853 2 12 2Z',
  d4: 'M7.00257 19.1507C7.46434 18.2982 8.33856 17.75 9.30858 17.75H14.6914C15.6614 17.75 16.5357 18.2982 16.9974 19.1507L17.537 20.1468C18.1362 21.253 17.4175 22.75 16.054 22.75H7.94601C6.58247 22.75 5.86384 21.253 6.463 20.1468L7.00257 19.1507Z',
  d5: 'M12.0007 11C12.5533 11 13.0013 11.4477 13.0013 12V18.5C13.0013 19.0523 12.5533 19.5 12.0007 19.5C11.448 19.5 11 19.0523 11 18.5V12C11 11.4477 11.448 11 12.0007 11Z',
  d6: 'M8.35728 2.32865C9.34442 1.56785 10.6508 1.25 11.9997 1.25C13.3454 1.25 14.6523 1.56039 15.6407 2.3185C16.6584 3.09911 17.2531 4.29027 17.2531 5.84619C17.2531 7.29387 16.61 8.19404 15.9324 8.95615C15.7972 9.10816 15.664 9.25232 15.5337 9.3932L15.5337 9.39322L15.5337 9.39322C15.0033 9.96709 14.5232 10.4866 14.1683 11.2613C14.057 11.5048 13.9286 11.7856 13.8488 11.9068C13.7114 12.1153 13.5415 12.316 13.301 12.4692C13.0609 12.6221 12.8071 12.6916 12.5601 12.7289C12.4173 12.7504 11.9995 12.75 11.9995 12.75C11.9995 12.75 11.5817 12.7503 11.4389 12.7288C11.1915 12.6914 10.9377 12.6216 10.6976 12.4686C10.4571 12.3152 10.2871 12.1143 10.1498 11.9054C10.07 11.7841 9.94211 11.5036 9.83122 11.2605C9.47489 10.4807 8.99158 9.95576 8.45918 9.37749C8.33082 9.23807 8.19962 9.09556 8.06665 8.94564C7.391 8.18382 6.74622 7.28473 6.74622 5.84619C6.74622 4.30059 7.34214 3.11103 8.35728 2.32865Z',
  d7: 'M8.35728 2.32865C9.34442 1.56785 10.6508 1.25 11.9997 1.25C13.3454 1.25 14.6523 1.56039 15.6407 2.3185C16.6584 3.09911 17.2531 4.29027 17.2531 5.84619C17.2531 7.29387 16.61 8.19404 15.9324 8.95615C15.7972 9.10816 15.664 9.25232 15.5338 9.3932L15.5337 9.39322L15.5337 9.39322C15.0033 9.96709 14.5232 10.4866 14.1683 11.2613C14.057 11.5048 13.9286 11.7856 13.8488 11.9068C13.7114 12.1153 13.5415 12.316 13.301 12.4692C13.0609 12.6221 12.8071 12.6916 12.5601 12.7289C12.4173 12.7504 11.9995 12.75 11.9995 12.75C11.9995 12.75 11.5817 12.7503 11.4389 12.7288C11.1915 12.6914 10.9377 12.6216 10.6976 12.4686C10.4571 12.3152 10.2871 12.1143 10.1498 11.9054C10.07 11.7841 9.94211 11.5036 9.83122 11.2605C9.47489 10.4807 8.99158 9.95576 8.45918 9.37749C8.33083 9.23807 8.19962 9.09556 8.06665 8.94564C7.391 8.18382 6.74622 7.28473 6.74622 5.84619C6.74622 4.30059 7.34214 3.11103 8.35728 2.32865Z',
  d8: 'M7 21.9999L8.5 18.4998H15.5L16.9996 21.9999H7Z',
  d9: 'M12 2C9.51472 2 7.5 3.17807 7.5 5.84619C7.5 8.18121 9.5105 8.74889 10.5152 10.9489L11 12H13L13.4853 10.9491C14.4901 8.75415 16.5 8.20205 16.5 5.84619C16.5 3.15386 14.4853 2 12 2Z',
  d10: 'M7.81151 18.2046C7.92969 17.9288 8.20085 17.75 8.50087 17.75H11.0009V12.75H10.5209L9.83502 11.263L9.83384 11.2605C9.47774 10.4807 8.99475 9.95576 8.4627 9.37748C8.33443 9.23807 8.20331 9.09556 8.07043 8.94564C7.39523 8.18382 6.75087 7.28473 6.75087 5.84619C6.75087 4.30059 7.3464 3.11103 8.36087 2.32865C9.34736 1.56785 10.6529 1.25 12.0009 1.25C13.3457 1.25 14.6517 1.56039 15.6395 2.3185C16.6566 3.09911 17.2509 4.29027 17.2509 5.84619C17.2509 7.29387 16.6081 8.19404 15.931 8.95614C15.7959 9.10816 15.6628 9.25231 15.5326 9.39319C15.0026 9.96705 14.5227 10.4866 14.1681 11.2613L14.167 11.2635L13.4807 12.75H13.0009V17.75H15.5009C15.8009 17.75 16.0721 17.9288 16.1903 18.2046L17.6898 21.7048C17.7891 21.9366 17.7653 22.2026 17.6265 22.4131C17.4878 22.6235 17.2525 22.7502 17.0004 22.7502H7.00087C6.74877 22.7502 6.51353 22.6235 6.37475 22.4131C6.23596 22.2026 6.2122 21.9365 6.31151 21.7048L7.81151 18.2046Z',
};

export const IconPunchingBall02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="punching-ball-02-stroke-rounded IconPunchingBall02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPunchingBall02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="punching-ball-02-duotone-rounded IconPunchingBall02DuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPunchingBall02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="punching-ball-02-twotone-rounded IconPunchingBall02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPunchingBall02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="punching-ball-02-solid-rounded IconPunchingBall02SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPunchingBall02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="punching-ball-02-bulk-rounded IconPunchingBall02BulkRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPunchingBall02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="punching-ball-02-stroke-sharp IconPunchingBall02StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPunchingBall02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="punching-ball-02-solid-sharp IconPunchingBall02SolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPunchingBall02: TheIconSelfPack = {
  name: 'PunchingBall02',
  StrokeRounded: IconPunchingBall02StrokeRounded,
  DuotoneRounded: IconPunchingBall02DuotoneRounded,
  TwotoneRounded: IconPunchingBall02TwotoneRounded,
  SolidRounded: IconPunchingBall02SolidRounded,
  BulkRounded: IconPunchingBall02BulkRounded,
  StrokeSharp: IconPunchingBall02StrokeSharp,
  SolidSharp: IconPunchingBall02SolidSharp,
};