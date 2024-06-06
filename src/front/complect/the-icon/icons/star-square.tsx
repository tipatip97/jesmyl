import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 12C2 7.52166 2 5.28249 3.39124 3.89124C4.78249 2.5 7.02166 2.5 11.5 2.5C15.9783 2.5 18.2175 2.5 19.6088 3.89124C21 5.28249 21 7.52166 21 12C21 16.4783 21 18.7175 19.6088 20.1088C18.2175 21.5 15.9783 21.5 11.5 21.5C7.02166 21.5 4.78249 21.5 3.39124 20.1088C2 18.7175 2 16.4783 2 12Z',
  d2: 'M12.3638 7.72209L13.2437 9.49644C13.3637 9.74344 13.6837 9.98035 13.9536 10.0257L15.5485 10.2929C16.5684 10.4643 16.8083 11.2103 16.0734 11.9462L14.8335 13.1964C14.6236 13.4081 14.5086 13.8164 14.5736 14.1087L14.9285 15.6562C15.2085 16.8812 14.5636 17.355 13.4887 16.7148L11.9939 15.8226C11.7239 15.6613 11.2789 15.6613 11.004 15.8226L9.50913 16.7148C8.43925 17.355 7.78932 16.8761 8.06929 15.6562L8.42425 14.1087C8.48925 13.8164 8.37426 13.4081 8.16428 13.1964L6.92442 11.9462C6.1945 11.2103 6.42947 10.4643 7.44936 10.2929L9.04419 10.0257C9.30916 9.98035 9.62912 9.74344 9.74911 9.49644L10.629 7.72209C11.109 6.7593 11.8889 6.7593 12.3638 7.72209Z',
  d3: 'M3.39124 3.89124C2 5.28249 2 7.52166 2 12C2 16.4783 2 18.7175 3.39124 20.1088C4.78249 21.5 7.02166 21.5 11.5 21.5C15.9783 21.5 18.2175 21.5 19.6088 20.1088C21 18.7175 21 16.4783 21 12C21 7.52166 21 5.28249 19.6088 3.89124C18.2175 2.5 15.9783 2.5 11.5 2.5C7.02166 2.5 4.78249 2.5 3.39124 3.89124ZM13.2437 9.49644L12.3638 7.72209C11.8889 6.7593 11.109 6.7593 10.629 7.72209L9.74911 9.49644C9.62912 9.74343 9.30916 9.98035 9.04419 10.0257L7.44936 10.2929C6.42947 10.4643 6.1945 11.2103 6.92442 11.9462L8.16428 13.1964C8.37426 13.4081 8.48925 13.8164 8.42425 14.1087L8.06929 15.6562C7.78932 16.8761 8.43925 17.355 9.50913 16.7148L11.004 15.8226C11.2789 15.6613 11.7239 15.6613 11.9939 15.8226L13.4887 16.7148C14.5636 17.355 15.2085 16.8812 14.9285 15.6562L14.5736 14.1087C14.5086 13.8164 14.6236 13.4081 14.8335 13.1964L16.0734 11.9462C16.8083 11.2103 16.5684 10.4643 15.5485 10.2929L13.9536 10.0257C13.6837 9.98035 13.3637 9.74343 13.2437 9.49644Z',
  d4: 'M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059ZM13.2841 7.24584C13.0018 6.67388 12.5598 6.25 11.9986 6.25C11.438 6.25 10.9946 6.67311 10.7097 7.24459L10.7093 7.24534L9.76811 9.14336L9.76667 9.14629C9.73804 9.20523 9.67012 9.28823 9.56843 9.36426C9.46693 9.44014 9.36877 9.48142 9.30628 9.49226L9.30574 9.49236L7.60118 9.7779C6.98455 9.88152 6.46905 10.1839 6.30236 10.7102C6.13616 11.235 6.38082 11.7807 6.82111 12.2246L8.14739 13.5618C8.19992 13.6148 8.25876 13.7146 8.29566 13.8446C8.33232 13.9737 8.33557 14.0912 8.31895 14.1672L8.31872 14.1683L7.93962 15.821C7.78186 16.5084 7.8366 17.1894 8.3215 17.5461C8.80845 17.9044 9.473 17.7485 10.0768 17.3873L11.6728 16.4346L11.6738 16.4341C11.7453 16.3924 11.8631 16.3604 12.0013 16.3604C12.1405 16.3604 12.2558 16.3929 12.3229 16.433L13.9221 17.3875C14.5266 17.7475 15.192 17.9061 15.6789 17.5482C16.1641 17.1916 16.2162 16.5093 16.059 15.8213L15.6798 14.1683L15.6796 14.1672C15.6629 14.0912 15.6662 13.9737 15.7028 13.8446C15.7397 13.7146 15.7986 13.6148 15.8511 13.5618L17.1764 12.2256L17.1769 12.2251C17.62 11.7812 17.8655 11.2351 17.6979 10.7095C17.5302 10.1835 17.0137 9.88148 16.3975 9.77793L14.6915 9.49215C14.626 9.48114 14.5264 9.43938 14.4246 9.3637C14.3228 9.28793 14.2551 9.20511 14.2265 9.14629L13.2841 7.24584Z',
  d5: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d6: 'M11.9986 6.25C12.5598 6.25 13.0018 6.67388 13.2841 7.24584L14.2265 9.14629C14.2551 9.20511 14.3228 9.28793 14.4246 9.3637C14.5264 9.43938 14.626 9.48114 14.6915 9.49215L16.3975 9.77793C17.0137 9.88148 17.5302 10.1835 17.6979 10.7095C17.8655 11.2351 17.62 11.7812 17.1769 12.2251L17.1764 12.2256L15.8511 13.5618C15.7986 13.6148 15.7397 13.7146 15.7028 13.8446C15.6662 13.9737 15.6629 14.0912 15.6796 14.1672L15.6798 14.1683L16.059 15.8213C16.2162 16.5093 16.1641 17.1916 15.6789 17.5482C15.192 17.9061 14.5266 17.7475 13.9221 17.3875L12.3229 16.433C12.2558 16.3929 12.1405 16.3604 12.0013 16.3604C11.8631 16.3604 11.7453 16.3924 11.6738 16.4341L11.6728 16.4346L10.0768 17.3873C9.473 17.7485 8.80845 17.9044 8.3215 17.5461C7.8366 17.1894 7.78186 16.5084 7.93962 15.821L8.31872 14.1683L8.31895 14.1672C8.33557 14.0912 8.33232 13.9737 8.29566 13.8446C8.25876 13.7146 8.19992 13.6148 8.14739 13.5618L6.82111 12.2246C6.38082 11.7807 6.13616 11.235 6.30236 10.7102C6.46905 10.1839 6.98455 9.88152 7.60118 9.7779L9.30574 9.49236L9.30628 9.49226C9.36877 9.48142 9.46693 9.44014 9.56843 9.36426C9.67012 9.28823 9.73804 9.20523 9.76667 9.14629L9.76811 9.14336L10.7093 7.24534L10.7097 7.24459C10.9946 6.67311 11.438 6.25 11.9986 6.25Z',
  d7: 'M21 3V21H3V3H21Z',
  d8: 'M11.9712 7.09448C12.0117 7.0324 12.0982 7.03229 12.1389 7.09426L13.8273 10.0273L17.0028 10.8223C17.0736 10.8429 17.0878 10.8637 17.0419 10.9245L14.8317 13.2773L15.6706 16.9613C15.6719 16.9667 15.6727 16.9723 15.6728 16.9778C15.6743 17.0462 15.6539 17.062 15.5874 17.0361L12.0684 15.5633L8.54299 17.0361C8.47684 17.062 8.45313 16.9774 8.45511 16.904C8.45527 16.8983 8.45608 16.8925 8.45734 16.8869L9.27907 13.2993L7.09264 10.9452C7.04681 10.8845 7.06792 10.8302 7.13859 10.8095L10.2838 10.0263L11.9712 7.09448Z',
  d9: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM12.6478 6.6221C12.5134 6.39168 12.2668 6.25 12 6.25C11.7333 6.25 11.4866 6.39168 11.3522 6.6221L9.76099 9.34985L6.81661 10.0924C6.55988 10.1572 6.35631 10.3525 6.281 10.6063C6.20568 10.8602 6.26979 11.1349 6.44966 11.3292L8.43203 13.4704L7.67799 16.836C7.61669 17.1096 7.71312 17.3946 7.92799 17.5747C8.14286 17.7549 8.44026 17.8001 8.69898 17.692L12 16.3128L15.3011 17.692C15.5598 17.8001 15.8572 17.7549 16.072 17.5747C16.2869 17.3946 16.3833 17.1096 16.322 16.836L15.568 13.4704L17.5504 11.3292C17.7302 11.1349 17.7943 10.8602 17.719 10.6063C17.6437 10.3525 17.4402 10.1572 17.1834 10.0924L14.239 9.34985L12.6478 6.6221Z',
} as const;

export const IconStarSquareStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="star-square-stroke-rounded IconStarSquareStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStarSquareDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="star-square-duotone-rounded IconStarSquareDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStarSquareTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="star-square-twotone-rounded IconStarSquareTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconStarSquareSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="star-square-solid-rounded IconStarSquareSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStarSquareBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="star-square-bulk-rounded IconStarSquareBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconStarSquareStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="star-square-stroke-sharp IconStarSquareStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconStarSquareSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="star-square-solid-sharp IconStarSquareSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfStarSquare: TheIconSelfPack = {
  name: 'StarSquare',
  StrokeRounded: IconStarSquareStrokeRounded,
  DuotoneRounded: IconStarSquareDuotoneRounded,
  TwotoneRounded: IconStarSquareTwotoneRounded,
  SolidRounded: IconStarSquareSolidRounded,
  BulkRounded: IconStarSquareBulkRounded,
  StrokeSharp: IconStarSquareStrokeSharp,
  SolidSharp: IconStarSquareSolidSharp,
};