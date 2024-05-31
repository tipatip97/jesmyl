import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8.19915 15.8008L15.8008 8.19915M8.19915 15.8008C7.75558 15.3573 8.19018 13.2652 8.19915 12.6335M8.19915 15.8008C8.64273 16.2444 10.7348 15.8098 11.3665 15.8008M15.8008 8.19915C15.3573 7.75558 13.2652 8.19018 12.6335 8.19916M15.8008 8.19915C16.2444 8.64273 15.8098 10.7348 15.8008 11.3665',
  d2: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d3: 'M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059ZM13.4541 7.00899C13.0405 6.98728 12.6876 7.30499 12.6658 7.71864C12.6542 7.93959 12.7395 8.14321 12.8845 8.28829L13.5916 8.99539L8.99539 13.5916L8.28829 12.8845C8.14321 12.7395 7.93959 12.6542 7.71864 12.6658C7.30499 12.6876 6.98728 13.0405 7.00899 13.4541C7.01334 13.5369 7.00665 13.6968 6.99267 13.9559L6.9896 14.0126C6.97729 14.2395 6.96262 14.51 6.95831 14.7782C6.9537 15.0655 6.9601 15.3822 7.00178 15.6677C7.03703 15.9092 7.11925 16.3116 7.40441 16.5968C7.68957 16.882 8.09203 16.9642 8.33353 16.9994C8.61902 17.0411 8.93575 17.0475 9.22301 17.0429C9.4912 17.0386 9.76168 17.0239 9.98853 17.0116L9.9886 17.0116L10.0453 17.0085C10.3044 16.9946 10.4643 16.9879 10.5471 16.9922C10.9607 17.0139 11.3136 16.6962 11.3354 16.2826C11.347 16.0618 11.2618 15.8583 11.117 15.7132L10.4096 15.0058L15.0058 10.4096L15.7132 11.117C15.8583 11.2618 16.0618 11.347 16.2826 11.3354C16.6962 11.3136 17.0139 10.9607 16.9922 10.5471C16.9879 10.4643 16.9946 10.3044 17.0085 10.0453L17.0116 9.98862C17.0239 9.76175 17.0386 9.49123 17.0429 9.22301C17.0475 8.93575 17.0411 8.61902 16.9994 8.33353C16.9642 8.09203 16.882 7.68957 16.5968 7.40441C16.3116 7.11925 15.9092 7.03703 15.6677 7.00178C15.3822 6.9601 15.0655 6.9537 14.7782 6.95831C14.51 6.96262 14.2395 6.97729 14.0126 6.9896L13.9559 6.99267C13.6968 7.00665 13.5369 7.01334 13.4541 7.00899Z',
  d4: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d5: 'M12.6658 7.71864C12.6876 7.30499 13.0405 6.98727 13.4541 7.00899C13.5369 7.01334 13.6968 7.00665 13.9559 6.99267L14.0127 6.9896C14.2395 6.97729 14.51 6.96262 14.7782 6.95831C15.0655 6.9537 15.3822 6.9601 15.6677 7.00178C15.9092 7.03703 16.3116 7.11925 16.5968 7.40441C16.882 7.68957 16.9642 8.09203 16.9994 8.33353C17.0411 8.61902 17.0475 8.93575 17.0429 9.22301C17.0386 9.49123 17.0239 9.76175 17.0116 9.98862L17.0085 10.0453C16.9946 10.3044 16.9879 10.4643 16.9922 10.5471C17.0139 10.9607 16.6962 11.3136 16.2826 11.3354C16.0618 11.347 15.8583 11.2618 15.7132 11.117L15.0058 10.4096L10.4096 15.0058L11.117 15.7132C11.2618 15.8583 11.347 16.0618 11.3354 16.2826C11.3136 16.6962 10.9607 17.0139 10.5471 16.9922C10.4643 16.9879 10.3044 16.9946 10.0453 17.0085L9.9886 17.0116C9.76173 17.0239 9.49122 17.0386 9.22301 17.0429C8.93575 17.0475 8.61902 17.0411 8.33353 16.9994C8.09203 16.9642 7.68957 16.882 7.40441 16.5968C7.11925 16.3116 7.03703 15.9092 7.00178 15.6677C6.9601 15.3822 6.9537 15.0655 6.95831 14.7782C6.96262 14.51 6.97729 14.2395 6.98961 14.0126L6.99267 13.9559C7.00665 13.6968 7.01334 13.5369 7.00899 13.4541C6.98728 13.0405 7.30499 12.6876 7.71864 12.6658C7.93959 12.6542 8.14321 12.7395 8.28829 12.8845L8.99539 13.5916L13.5916 8.99539L12.8845 8.28829C12.7395 8.14321 12.6542 7.93959 12.6658 7.71864Z',
  d6: 'M13 7H17V11M11 17H7V13M16.6299 7.37008L7.33279 16.6672',
  d7: 'M21 3V21H3V3H21Z',
  d8: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM17.75 6.25H13V7.75H15.1893L7.75 15.1893V13H6.25V17.75H11V16.25H8.81066L16.25 8.81066V11H17.75V6.25Z',
} as const;

export const IconSquareArrowDiagonal01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-diagonal-01-stroke-rounded IconSquareArrowDiagonal01StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowDiagonal01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-diagonal-01-duotone-rounded IconSquareArrowDiagonal01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
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
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowDiagonal01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-diagonal-01-twotone-rounded IconSquareArrowDiagonal01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowDiagonal01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-diagonal-01-solid-rounded IconSquareArrowDiagonal01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowDiagonal01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-diagonal-01-bulk-rounded IconSquareArrowDiagonal01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowDiagonal01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-diagonal-01-stroke-sharp IconSquareArrowDiagonal01StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowDiagonal01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-diagonal-01-solid-sharp IconSquareArrowDiagonal01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSquareArrowDiagonal01: TheIconSelfPack = {
  name: 'SquareArrowDiagonal01',
  StrokeRounded: IconSquareArrowDiagonal01StrokeRounded,
  DuotoneRounded: IconSquareArrowDiagonal01DuotoneRounded,
  TwotoneRounded: IconSquareArrowDiagonal01TwotoneRounded,
  SolidRounded: IconSquareArrowDiagonal01SolidRounded,
  BulkRounded: IconSquareArrowDiagonal01BulkRounded,
  StrokeSharp: IconSquareArrowDiagonal01StrokeSharp,
  SolidSharp: IconSquareArrowDiagonal01SolidSharp,
};