import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M15 11L16.8284 9.17157C17.4065 8.59351 17.6955 8.30448 17.8478 7.93694C18 7.5694 18 7.16065 18 6.34315V3',
  d3: 'M17.1973 9C17.7078 9.88252 18 10.9071 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C12.8922 6 13.7389 6.19474 14.5 6.54404',
  d4: 'M9 13C9.3294 13.932 10.068 14.6706 11 15',
  d5: 'M3.89124 3.89124C2.5 5.28249 2.5 7.52166 2.5 12C2.5 16.4783 2.5 18.7175 3.89124 20.1088C5.28249 21.5 7.52166 21.5 12 21.5C16.4783 21.5 18.7175 21.5 20.1088 20.1088C21.5 18.7175 21.5 16.4783 21.5 12C21.5 7.52166 21.5 5.28249 20.1088 3.89124C18.7175 2.5 16.4783 2.5 12 2.5C7.52166 2.5 5.28249 2.5 3.89124 3.89124ZM12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6Z',
  d6: 'M12.0572 1.75C14.0819 1.74999 15.7051 1.74998 17 1.89256V6.34315C17 7.24224 16.9823 7.41322 16.9239 7.55426C16.8809 7.65813 16.8107 7.75787 16.5228 8.05721C15.4229 6.79655 13.8044 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 11.2317 17.8556 10.4971 17.5924 9.8219L17.6338 9.78062C18.1145 9.30137 18.5412 8.87602 18.7716 8.31962C19.0021 7.76322 19.0012 7.16077 19.0001 6.48197L19 6.34315V2.32683C19.6229 2.55862 20.1665 2.88833 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H11.9428C9.75214 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75213 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d7: 'M8.66703 12.0574C9.18774 11.8734 9.75907 12.1463 9.94311 12.667C10.1718 13.3141 10.6864 13.8287 11.3335 14.0574C11.8542 14.2415 12.1272 14.8128 11.9431 15.3335C11.7591 15.8542 11.1877 16.1272 10.667 15.9431C9.45022 15.513 8.48751 14.5503 8.05743 13.3335C7.87339 12.8128 8.14631 12.2415 8.66703 12.0574Z',
  d8: 'M17.5924 9.82329L17.5355 9.88007L15.7071 11.7085C15.3166 12.099 14.6834 12.099 14.2929 11.7085C13.9024 11.318 13.9024 10.6848 14.2929 10.2943L16.1213 8.46585C16.2888 8.29833 16.4197 8.16569 16.5228 8.05859C16.9744 8.57625 17.3386 9.17215 17.5924 9.82329Z',
  d9: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d10: 'M19.0006 1C19.0006 0.447715 18.5529 0 18.0006 0C17.4483 0 17.0006 0.447715 17.0006 1V6.34315C17.0006 7.24224 16.9829 7.41322 16.9245 7.55426C16.8815 7.65813 16.8114 7.75786 16.5234 8.05717C16.9751 8.57483 17.3393 9.17074 17.5931 9.82188L17.6344 9.78062C18.1152 9.30137 18.5418 8.87603 18.7723 8.31962C19.0027 7.76322 19.0018 7.16078 19.0008 6.48197L19.0006 6.34315V1Z',
  d11: 'M18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C13.8038 6 15.4217 6.79599 16.5216 8.05589C16.4188 8.16277 16.2882 8.29505 16.1213 8.46195L14.2929 10.2904C13.9024 10.6809 13.9024 11.3141 14.2929 11.7046C14.6834 12.0951 15.3166 12.0951 15.7071 11.7046L17.5355 9.87616L17.5917 9.82009C17.8553 10.4958 18 11.231 18 12ZM8.66703 12.0574C9.18774 11.8734 9.75907 12.1463 9.94311 12.667C10.1718 13.3141 10.6864 13.8287 11.3335 14.0574C11.8542 14.2415 12.1272 14.8128 11.9431 15.3335C11.7591 15.8542 11.1877 16.1272 10.667 15.9431C9.45022 15.513 8.48751 14.5503 8.05743 13.3335C7.87339 12.8128 8.14631 12.2415 8.66703 12.0574Z',
  d12: 'M3 21H21V3H3V21Z',
  d13: 'M15 11L18 8V3',
  d14: 'M17.0001 2.25H3C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H19.0001V8C19.0001 8.26522 18.8947 8.51957 18.7072 8.70711L17.5924 9.82187C17.8556 10.4971 18 11.2317 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C13.8059 6 15.4255 6.79788 16.5255 8.06035L17.0001 7.58579V2.25Z',
  d15: 'M15.7072 11.7073L14.293 10.2931L16.5255 8.06055C16.9759 8.57745 17.3392 9.17225 17.5925 9.82205L15.7072 11.7073Z',
  d16: 'M10.4433 12.167C10.672 12.8141 11.1866 13.3287 11.8337 13.5574L11.1672 15.4431C9.9504 15.013 8.9877 14.0503 8.55762 12.8335L10.4433 12.167Z',
};

export const IconVynil03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="vynil-03-stroke-rounded IconVynil03StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconVynil03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="vynil-03-duotone-rounded IconVynil03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconVynil03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="vynil-03-twotone-rounded IconVynil03TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconVynil03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="vynil-03-solid-rounded IconVynil03SolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconVynil03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="vynil-03-bulk-rounded IconVynil03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconVynil03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="vynil-03-stroke-sharp IconVynil03StrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconVynil03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="vynil-03-solid-sharp IconVynil03SolidSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfVynil03: TheIconSelfPack = {
  name: 'Vynil03',
  StrokeRounded: IconVynil03StrokeRounded,
  DuotoneRounded: IconVynil03DuotoneRounded,
  TwotoneRounded: IconVynil03TwotoneRounded,
  SolidRounded: IconVynil03SolidRounded,
  BulkRounded: IconVynil03BulkRounded,
  StrokeSharp: IconVynil03StrokeSharp,
  SolidSharp: IconVynil03SolidSharp,
};