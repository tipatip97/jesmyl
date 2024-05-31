import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5 15C5 11.134 8.02208 8 11.75 8H12.25C15.9779 8 19 11.134 19 15C19 18.866 15.9779 22 12.25 22H11.75C8.02208 22 5 18.866 5 15Z',
  d2: 'M10.5 13.1179C10.5804 12.3326 11.1075 12 11.6575 12H12.3238C12.8738 12 13.401 12.3326 13.4814 13.1179C13.5062 13.3608 13.5062 13.6392 13.4814 13.8821C13.4151 14.5297 12.9713 15 12.4904 15M10.5 16.8821C10.5804 17.6674 11.1075 18 11.6575 18L12.3238 18C12.8738 18 13.401 17.6674 13.4814 16.8821C13.5062 16.6392 13.5062 16.3608 13.4814 16.1179C13.4151 15.4703 12.9713 15 12.4904 15M12.4904 15H12.431',
  d3: 'M13.5601 2L11 7.89783M18 2L15.1786 8.5',
  d4: 'M10.4399 2L12 5.59405M6 2L8.82144 8.5',
  d5: 'M10.5 13.1179C10.5804 12.3326 11.1075 12 11.6575 12H12.3238C12.8738 12 13.401 12.3326 13.4814 13.1179C13.5062 13.3608 13.5062 13.6392 13.4814 13.8821C13.4151 14.5297 12.9713 15 12.4904 15M12.4904 15C12.9713 15 13.4151 15.4703 13.4814 16.1179C13.5062 16.3608 13.5062 16.6392 13.4814 16.8821C13.401 17.6674 12.8738 18 12.3238 18H11.6575C11.1075 18 10.5804 17.6674 10.5 16.8821M12.4904 15H12.431',
  d6: 'M11.75 7C7.58239 7 4.25 10.4957 4.25 14.75C4.25 19.0043 7.58239 22.5 11.75 22.5H12.25C16.4176 22.5 19.75 19.0043 19.75 14.75C19.75 10.4957 16.4176 7 12.25 7H11.75ZM11.6572 11.1016C11.2536 11.1016 10.8258 11.2242 10.4782 11.5234C10.124 11.8284 9.90762 12.27 9.85304 12.8033C9.81649 13.1604 10.0764 13.4795 10.4335 13.5161C10.7906 13.5526 11.1097 13.2928 11.1463 12.9356C11.1721 12.6836 11.2594 12.5663 11.3264 12.5086C11.4 12.4452 11.5108 12.4016 11.6572 12.4016H12.3235C12.4699 12.4016 12.5806 12.4452 12.6543 12.5086C12.7212 12.5663 12.8086 12.6836 12.8344 12.9356C12.8547 13.1346 12.8547 13.3686 12.8344 13.5675C12.8144 13.7632 12.7392 13.9106 12.6587 13.9997C12.5768 14.0904 12.5114 14.1016 12.4901 14.1016H12.4306C12.0716 14.1016 11.7806 14.3926 11.7806 14.7516C11.7806 15.1105 12.0716 15.4016 12.4306 15.4016H12.4901C12.5114 15.4016 12.5768 15.4127 12.6587 15.5034C12.7392 15.5925 12.8144 15.74 12.8344 15.9356C12.8547 16.1346 12.8547 16.3686 12.8344 16.5675C12.8086 16.8195 12.7212 16.9369 12.6543 16.9945C12.5806 17.0579 12.4699 17.1016 12.3235 17.1016H11.6572C11.5108 17.1016 11.4 17.0579 11.3264 16.9945C11.2594 16.9369 11.1721 16.8195 11.1463 16.5675C11.1097 16.2104 10.7906 15.9505 10.4335 15.987C10.0764 16.0236 9.81649 16.3427 9.85304 16.6998C9.90762 17.2332 10.124 17.6748 10.4782 17.9797C10.8258 18.2789 11.2536 18.4016 11.6572 18.4016L12.3235 18.4016C12.7271 18.4016 13.1549 18.2789 13.5025 17.9797C13.8566 17.6748 14.0731 17.2332 14.1276 16.6998C14.157 16.4129 14.157 16.0902 14.1276 15.8033C14.0892 15.4275 13.9469 15.0531 13.7209 14.7516C13.9469 14.45 14.0892 14.0757 14.1276 13.6998C14.157 13.4129 14.157 13.0902 14.1276 12.8033C14.0731 12.27 13.8566 11.8284 13.5025 11.5234C13.1549 11.2242 12.7271 11.1016 12.3235 11.1016H11.6572Z',
  d7: 'M5.60208 1.58294C6.1087 1.36304 6.69766 1.59546 6.91756 2.10208L9.73901 8.60208C9.95891 9.1087 9.72649 9.69766 9.21987 9.91756C8.71325 10.1375 8.12429 9.90504 7.90439 9.39843L5.08294 2.89843C4.86304 2.39181 5.09546 1.80285 5.60208 1.58294ZM10.042 1.58294C10.5486 1.36304 11.1376 1.59546 11.3575 2.10208L12.0003 3.58284L12.643 2.10208C12.8629 1.59546 13.4519 1.36304 13.9585 1.58294C14.4651 1.80285 14.6975 2.39181 14.4776 2.89843L12.9185 6.49025C12.9178 6.49186 12.9171 6.49348 12.9164 6.49509L11.9176 8.79626C11.6977 9.30288 11.1087 9.5353 10.6021 9.3154C10.0955 9.09549 9.86304 8.50653 10.0829 7.99991L10.9101 6.0943L9.52288 2.89843C9.30298 2.39181 9.5354 1.80285 10.042 1.58294ZM18.3984 1.58294C18.905 1.80285 19.1375 2.39181 18.9176 2.89843L16.0961 9.39843C15.8762 9.90504 15.2873 10.1375 14.7806 9.91756C14.274 9.69766 14.0416 9.1087 14.2615 8.60208L17.0829 2.10208C17.3028 1.59546 17.8918 1.36304 18.3984 1.58294Z',
  d8: 'M4.25 14.75C4.25 10.4957 7.58239 7 11.75 7H12.25C16.4176 7 19.75 10.4957 19.75 14.75C19.75 19.0043 16.4176 22.5 12.25 22.5H11.75C7.58239 22.5 4.25 19.0043 4.25 14.75Z',
  d9: 'M10.4782 11.5234C10.8258 11.2242 11.2536 11.1016 11.6572 11.1016H12.3235C12.7271 11.1016 13.1549 11.2242 13.5025 11.5234C13.8566 11.8284 14.0731 12.27 14.1276 12.8033C14.157 13.0902 14.157 13.4129 14.1276 13.6998C14.0892 14.0757 13.9469 14.45 13.7209 14.7516C13.9469 15.0531 14.0892 15.4275 14.1276 15.8033C14.157 16.0902 14.157 16.4129 14.1276 16.6998C14.0731 17.2332 13.8566 17.6748 13.5025 17.9797C13.1549 18.2789 12.7271 18.4016 12.3235 18.4016L11.6572 18.4016C11.2536 18.4016 10.8258 18.2789 10.4782 17.9797C10.124 17.6748 9.90762 17.2332 9.85304 16.6998C9.81649 16.3427 10.0764 16.0236 10.4335 15.987C10.7906 15.9505 11.1097 16.2104 11.1463 16.5675C11.1721 16.8195 11.2594 16.9369 11.3264 16.9945C11.4 17.0579 11.5108 17.1016 11.6572 17.1016L12.3235 17.1016C12.4699 17.1016 12.5806 17.0579 12.6543 16.9945C12.7212 16.9369 12.8086 16.8195 12.8344 16.5675C12.8547 16.3686 12.8547 16.1346 12.8344 15.9356C12.8144 15.74 12.7392 15.5925 12.6587 15.5034C12.5768 15.4127 12.5114 15.4016 12.4901 15.4016H12.4306C12.0716 15.4016 11.7806 15.1105 11.7806 14.7516C11.7806 14.3926 12.0716 14.1016 12.4306 14.1016H12.4901C12.5114 14.1016 12.5768 14.0904 12.6587 13.9997C12.7392 13.9106 12.8144 13.7632 12.8344 13.5675C12.8547 13.3686 12.8547 13.1346 12.8344 12.9356C12.8086 12.6836 12.7212 12.5663 12.6543 12.5086C12.5806 12.4452 12.4699 12.4016 12.3235 12.4016H11.6572C11.5108 12.4016 11.4 12.4452 11.3264 12.5086C11.2594 12.5663 11.1721 12.6836 11.1463 12.9356C11.1097 13.2928 10.7906 13.5526 10.4335 13.5161C10.0764 13.4795 9.81649 13.1604 9.85304 12.8033C9.90762 12.27 10.124 11.8284 10.4782 11.5234Z',
  d10: 'M6.91756 2.10208C6.69766 1.59546 6.1087 1.36304 5.60208 1.58294C5.09546 1.80285 4.86304 2.39181 5.08294 2.89843L7.46549 8.3873C8.00738 7.99664 8.60199 7.67791 9.23672 7.44492L6.91756 2.10208ZM12.6916 7.01315C12.5455 7.00443 12.3983 7 12.25 7H11.75C11.3126 7 10.8843 7.03851 10.4682 7.11237L10.9101 6.0943L9.52288 2.89843C9.30298 2.39181 9.5354 1.80285 10.042 1.58294C10.5486 1.36304 11.1376 1.59546 11.3575 2.10208L12.0003 3.58284L12.643 2.10208C12.8629 1.59546 13.4519 1.36304 13.9585 1.58294C14.4651 1.80285 14.6975 2.39181 14.4776 2.89843L12.9185 6.49025L12.9164 6.49509L12.6916 7.01315ZM16.5349 8.38758C15.993 7.99688 15.3984 7.67811 14.7637 7.44508L17.0829 2.10208C17.3028 1.59546 17.8918 1.36304 18.3984 1.58294C18.905 1.80285 19.1375 2.39181 18.9176 2.89843L16.5349 8.38758Z',
  d11: 'M4.5 14.5C4.5 10.3579 7.73794 7 11.7321 7H12.2679C16.2621 7 19.5 10.3579 19.5 14.5C19.5 18.6421 16.2621 22 12.2679 22H11.7321C7.73794 22 4.5 18.6421 4.5 14.5Z',
  d12: 'M13.56 2L11.5 7M17.9999 2L15.5 8',
  d13: 'M8.49995 8L6 2M10.4399 2L11.8819 5.5',
  d14: 'M9.5 11.5H13.5V14.5M13.5 14.5H10.5M13.5 14.5V17.5H9.5',
  d15: 'M16.9239 8.38631L19.4238 2.01726L17.5776 1.24805L15.0777 7.6171L16.9239 8.38631Z',
  d16: 'M11.6634 6.8627L10.8638 7.19214L9.01459 2.01726L10.8638 1.25539L11.9589 4.32004L13.1362 1.25172L14.9854 2.01359L12.9254 7.38264L11.6634 6.8627Z',
  d17: 'M8.92274 7.6171L6.42233 1.25172L4.57617 2.02094L7.07658 8.38632L8.92274 7.6171Z',
  d18: 'M11.7054 6.25195C7.31173 6.25195 3.75 9.9456 3.75 14.502C3.75 19.0583 7.31173 22.752 11.7054 22.752H12.2946C16.6883 22.752 20.25 19.0583 20.25 14.502C20.25 9.9456 16.6883 6.25195 12.2946 6.25195H11.7054ZM9.5 12.252H12.75V13.752H10.5V15.252H12.75V16.752H9.5V18.252H14.25V10.752H9.5V12.252Z',
} as const;

export const IconMedalThirdPlaceStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-third-place-stroke-rounded IconMedalThirdPlaceStrokeRounded"
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

export const IconMedalThirdPlaceDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-third-place-duotone-rounded IconMedalThirdPlaceDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
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

export const IconMedalThirdPlaceTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-third-place-twotone-rounded IconMedalThirdPlaceTwotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMedalThirdPlaceSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-third-place-solid-rounded IconMedalThirdPlaceSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMedalThirdPlaceBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-third-place-bulk-rounded IconMedalThirdPlaceBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMedalThirdPlaceStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-third-place-stroke-sharp IconMedalThirdPlaceStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMedalThirdPlaceSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="medal-third-place-solid-sharp IconMedalThirdPlaceSolidSharp"
    >
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMedalThirdPlace: TheIconSelfPack = {
  name: 'MedalThirdPlace',
  StrokeRounded: IconMedalThirdPlaceStrokeRounded,
  DuotoneRounded: IconMedalThirdPlaceDuotoneRounded,
  TwotoneRounded: IconMedalThirdPlaceTwotoneRounded,
  SolidRounded: IconMedalThirdPlaceSolidRounded,
  BulkRounded: IconMedalThirdPlaceBulkRounded,
  StrokeSharp: IconMedalThirdPlaceStrokeSharp,
  SolidSharp: IconMedalThirdPlaceSolidSharp,
};