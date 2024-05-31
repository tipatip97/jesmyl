import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16.5 3.26621C17.3444 3.25421 20.1409 2.67328 20.7338 3.26621C21.3267 3.85913 20.7458 6.65559 20.7338 7.5',
  d2: 'M3.26621 16.5C3.25421 17.3444 2.67328 20.1409 3.26621 20.7338C3.85913 21.3267 6.65559 20.7458 7.5 20.7338',
  d3: 'M3.89551 20.0577L20.1046 3.94238',
  d4: 'M16.5 3.26575C17.3444 3.25375 20.1409 2.67275 20.7338 3.26575C21.3267 3.85875 20.7458 6.65575 20.7338 7.49975M3.26621 16.4997C3.25421 17.3437 2.67328 20.1407 3.26621 20.7337C3.85913 21.3267 6.65559 20.7457 7.50003 20.7337M3.8955 20.0578L20.1045 3.94174',
  d5: 'M17.4087 2.17312C17.9677 2.10571 18.6876 2.01892 19.3307 2.00274C19.6707 1.99419 20.0317 2.0037 20.361 2.05922C20.6542 2.10866 21.1023 2.22163 21.4403 2.55967C21.7784 2.89771 21.8913 3.34581 21.9408 3.63904C21.9963 3.96834 22.0058 4.32933 21.9973 4.66933C21.9811 5.31243 21.8943 6.0322 21.8269 6.59123L21.8108 6.72504C21.7897 6.90163 21.764 7.11699 21.721 7.29027L21.72 7.29443C21.6896 7.4176 21.5497 7.98409 20.9545 8.18987C20.3609 8.39511 19.9029 8.03927 19.8015 7.96051L19.7995 7.95897C19.6591 7.8499 19.5069 7.69752 19.3837 7.57417L18.6119 6.80235L6.80243 18.6118L7.57417 19.3836C7.69753 19.5068 7.84989 19.6589 7.95897 19.7994L7.9605 19.8013C8.03926 19.9027 8.39511 20.3608 8.18987 20.9544C7.98409 21.5495 7.41761 21.6894 7.29443 21.7199L7.29027 21.7209C7.11698 21.7638 6.90153 21.7896 6.72494 21.8107L6.59128 21.8267C6.03224 21.8941 5.31246 21.9809 4.66933 21.9971C4.32933 22.0057 3.96834 21.9962 3.63904 21.9406C3.34581 21.8912 2.89771 21.7782 2.55967 21.4402C2.22163 21.1021 2.10866 20.654 2.05922 20.3608C2.0037 20.0315 1.99419 19.6705 2.00274 19.3305C2.01892 18.6874 2.10571 17.9676 2.17312 17.4086L2.18919 17.2749C2.21029 17.0983 2.23603 16.8829 2.27896 16.7096L2.27998 16.7054C2.31041 16.5822 2.45032 16.0158 3.04548 15.81C3.63908 15.6047 4.09714 15.9606 4.19851 16.0394L4.20049 16.0409C4.34095 16.15 4.49309 16.3023 4.61626 16.4257L5.38821 17.1976L17.1977 5.38814L16.4258 4.61626C16.3025 4.49309 16.1501 4.34095 16.041 4.20049L16.0395 4.19851C15.9607 4.09713 15.6049 3.63907 15.8101 3.04548C16.0159 2.45032 16.5824 2.31041 16.7056 2.27998L16.7097 2.27896C16.883 2.23605 17.0985 2.21029 17.275 2.18919L17.4087 2.17312Z',
  d6: 'M5.38672 17.1962L17.1962 5.38672L18.6104 6.80093L6.80093 18.6104L5.38672 17.1962Z',
  d7: 'M17.4087 2.17312C17.9677 2.10571 18.6876 2.01892 19.3307 2.00274C19.6707 1.99419 20.0317 2.0037 20.361 2.05922C20.6542 2.10866 21.1023 2.22163 21.4403 2.55967C21.7784 2.89771 21.8913 3.34581 21.9408 3.63904C21.9963 3.96834 22.0058 4.32933 21.9973 4.66933C21.9811 5.31243 21.8943 6.0322 21.8269 6.59123L21.8108 6.72504C21.7897 6.90163 21.764 7.11699 21.721 7.29027L21.72 7.29443C21.6896 7.4176 21.5497 7.98409 20.9545 8.18987C20.3609 8.39511 19.9029 8.03927 19.8015 7.96051L19.7995 7.95897C19.6591 7.8499 19.5069 7.69752 19.3837 7.57417L18.6119 6.80235L16.4258 4.61626C16.3025 4.49309 16.1501 4.34095 16.041 4.20049L16.0395 4.19851C15.9607 4.09713 15.6049 3.63907 15.8101 3.04548C16.0159 2.45032 16.5824 2.31041 16.7056 2.27998L16.7097 2.27896C16.883 2.23605 17.0985 2.21029 17.275 2.18919L17.4087 2.17312Z',
  d8: 'M2.27998 16.7054C2.31041 16.5822 2.45032 16.0158 3.04548 15.81C3.63908 15.6047 4.09714 15.9606 4.19851 16.0394L4.20049 16.0409C4.34095 16.15 4.49309 16.3023 4.61626 16.4257L6.80243 18.6118L7.57417 19.3836C7.69753 19.5068 7.84989 19.6589 7.95897 19.7994L7.9605 19.8013C8.03926 19.9027 8.39511 20.3608 8.18987 20.9544C7.98409 21.5495 7.41761 21.6894 7.29443 21.7199L7.29027 21.7209C7.11698 21.7638 6.90153 21.7896 6.72494 21.8107L6.59128 21.8267C6.03224 21.8941 5.31246 21.9809 4.66933 21.9971C4.32933 22.0057 3.96834 21.9962 3.63904 21.9406C3.34581 21.8912 2.89771 21.7782 2.55967 21.4402C2.22163 21.1021 2.10866 20.654 2.05922 20.3608C2.0037 20.0315 1.99419 19.6705 2.00274 19.3305C2.01892 18.6874 2.10571 17.9676 2.17312 17.4086L2.18919 17.2749C2.21029 17.0983 2.23603 16.8829 2.27896 16.7096L2.27998 16.7054Z',
  d9: 'M15 3H21V9M9 21H3V15M20.8541 3.14594L3.25011 20.7499',
  d10: 'M15 2H22V9H20V5.41431L5.41431 20H9V22H2V15H4V18.5859L18.5859 4H15V2Z',
} as const;

export const IconArrowDiagonalStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-diagonal-stroke-rounded IconArrowDiagonalStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowDiagonalDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-diagonal-duotone-rounded IconArrowDiagonalDuotoneRounded"
    >
      <path 
        opacity="0.5" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowDiagonalTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-diagonal-twotone-rounded IconArrowDiagonalTwotoneRounded"
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
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowDiagonalSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-diagonal-solid-rounded IconArrowDiagonalSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowDiagonalBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-diagonal-bulk-rounded IconArrowDiagonalBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconArrowDiagonalStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-diagonal-stroke-sharp IconArrowDiagonalStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowDiagonalSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-diagonal-solid-sharp IconArrowDiagonalSolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfArrowDiagonal: TheIconSelfPack = {
  name: 'ArrowDiagonal',
  StrokeRounded: IconArrowDiagonalStrokeRounded,
  DuotoneRounded: IconArrowDiagonalDuotoneRounded,
  TwotoneRounded: IconArrowDiagonalTwotoneRounded,
  SolidRounded: IconArrowDiagonalSolidRounded,
  BulkRounded: IconArrowDiagonalBulkRounded,
  StrokeSharp: IconArrowDiagonalStrokeSharp,
  SolidSharp: IconArrowDiagonalSolidSharp,
};