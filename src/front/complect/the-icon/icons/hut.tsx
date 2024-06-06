import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6 12H18L20 22H4L6 12Z',
  d2: 'M9 22L9.67845 18.7008C9.83237 17.9522 9.90934 17.578 10.1858 17.3575C10.7623 16.8979 13.1953 16.8641 13.8142 17.3575C14.0907 17.578 14.1676 17.9522 14.3216 18.7008L15 22',
  d3: 'M12 3.2L5.54446 8.43826C3.71745 9.92076 2.80395 10.662 3.03531 11.331C3.26667 12 4.43653 12 6.77624 12H17.2238C19.5635 12 20.7333 12 20.9647 11.331C21.1961 10.662 20.2826 9.92076 18.4555 8.43826L12 3.2ZM12 3.2L13.4789 2M12 3.2L10.5211 2',
  d4: 'M12 12L12 9',
  d5: 'M8 12L8 10.5',
  d6: 'M16 12L16 10.5',
  d7: 'M2 22H22',
  d8: 'M18 12H6L4 22H9L9.67845 18.7008C9.83237 17.9522 9.90934 17.578 10.1858 17.3575C10.7623 16.8979 13.1953 16.8641 13.8142 17.3575C14.0907 17.578 14.1676 17.9522 14.3216 18.7008L15 22H20L18 12Z',
  d9: 'M10.4133 18.8516C10.4942 18.4585 10.5421 18.2322 10.5965 18.0725C10.6572 17.8939 10.7958 17.8719 10.9601 17.8459C10.9888 17.8413 11.0182 17.8367 11.0481 17.831C11.3137 17.781 11.645 17.7518 11.9886 17.7499C12.3323 17.748 12.6647 17.7735 12.9331 17.8224C12.9502 17.8255 12.9676 17.8285 12.9851 17.8315C13.1569 17.861 13.343 17.8929 13.4041 18.0725C13.4584 18.2322 13.5064 18.4585 13.5872 18.8516L14.2656 22.1509C14.3354 22.49 14.624 22.7283 14.9538 22.7485H9.04672C9.37656 22.7283 9.66515 22.49 9.7349 22.1509L10.4133 18.8516ZM8.95532 22.7485C8.92016 22.7464 8.88471 22.7417 8.8492 22.7344C8.44348 22.651 8.18221 22.2544 8.26564 21.8487L8.94409 18.5495L8.95198 18.5111C9.02208 18.17 9.08799 17.8492 9.17641 17.5893C9.27535 17.2985 9.42739 17.003 9.71852 16.7709C10.0156 16.534 10.4337 16.4204 10.7703 16.357C11.1424 16.2868 11.5661 16.2522 11.9802 16.2499C12.3941 16.2476 12.8221 16.2775 13.2019 16.3466C13.5499 16.41 13.9746 16.5258 14.282 16.7709C14.5731 17.003 14.7252 17.2985 14.8241 17.5893C14.9125 17.8492 14.9785 18.17 15.0485 18.511L15.0486 18.5111L15.0565 18.5495L15.7349 21.8487C15.8183 22.2544 15.5571 22.651 15.1513 22.7344C15.1158 22.7417 15.0804 22.7464 15.0452 22.7485L20.0001 22.7485C20.2248 22.7485 20.4377 22.6478 20.5801 22.474C20.7226 22.3003 20.7796 22.0718 20.7356 21.8514L19.257 14.4587C19.2108 14.2278 19.1877 14.1123 19.1048 14.0443C19.0219 13.9763 18.9041 13.9763 18.6687 13.9763H18.6687L5.33159 13.9764C5.09613 13.9764 4.9784 13.9764 4.89545 14.0444C4.81251 14.1124 4.78942 14.2278 4.74324 14.4587L3.26469 21.8514C3.22063 22.0718 3.27767 22.3003 3.42012 22.474C3.56258 22.6478 3.77543 22.7485 4.00013 22.7485H8.95532Z',
  d10: 'M12.7501 9C12.7501 8.58579 12.4143 8.25 12.0001 8.25C11.5859 8.25 11.2501 8.58579 11.2501 9V12.15C11.2501 12.4329 11.2501 12.5743 11.1623 12.6622C11.0744 12.75 10.933 12.75 10.6501 12.75H9.35012C9.06728 12.75 8.92586 12.75 8.83799 12.6622C8.75012 12.5743 8.75012 12.4329 8.75012 12.15V10.5C8.75012 10.0858 8.41434 9.75 8.00012 9.75C7.58591 9.75 7.25012 10.0858 7.25012 10.5V12.2139C7.25012 12.4352 7.25012 12.5458 7.19462 12.6239C7.17518 12.6512 7.1513 12.6751 7.12397 12.6945C7.04591 12.75 6.93528 12.75 6.71402 12.75C5.59694 12.7501 4.67845 12.7501 4.01381 12.6595C3.39185 12.5748 2.59885 12.364 2.3264 11.5762C2.05597 10.7942 2.53942 10.1347 2.97193 9.67551C3.43446 9.18442 4.15107 8.60297 5.02415 7.89456L10.2354 3.66594C10.5008 3.4506 10.6335 3.34293 10.6335 3.20002C10.6335 3.05712 10.5008 2.94945 10.2354 2.73411L10.0485 2.58241C9.72683 2.32142 9.67766 1.8491 9.93866 1.52745C10.1997 1.20581 10.672 1.15664 10.9936 1.41764L11.6218 1.92741C11.8029 2.07436 11.8935 2.14783 11.9999 2.14783C12.1063 2.14783 12.1969 2.07436 12.378 1.9274L13.0062 1.41764C13.3278 1.15664 13.8002 1.20581 14.0612 1.52745C14.3221 1.8491 14.273 2.32142 13.9513 2.58241L13.7644 2.73411C13.499 2.94945 13.3663 3.05712 13.3663 3.20002C13.3663 3.34293 13.499 3.4506 13.7644 3.66594L18.9756 7.89454C19.8487 8.60296 20.5653 9.18442 21.0279 9.67551C21.4604 10.1347 21.9438 10.7942 21.6734 11.5762C21.401 12.364 20.608 12.5748 19.986 12.6595C19.3214 12.7501 18.4029 12.7501 17.2859 12.75C17.0649 12.75 16.9545 12.75 16.8765 12.6947C16.849 12.6752 16.825 12.6511 16.8055 12.6236C16.7501 12.5457 16.7501 12.4352 16.7501 12.2143V10.5C16.7501 10.0858 16.4143 9.75 16.0001 9.75C15.5859 9.75 15.2501 10.0858 15.2501 10.5V12.15C15.2501 12.4329 15.2501 12.5743 15.1623 12.6622C15.0744 12.75 14.933 12.75 14.6501 12.75H13.3501C13.0673 12.75 12.9259 12.75 12.838 12.6622C12.7501 12.5743 12.7501 12.4329 12.7501 12.15V9Z',
  d11: 'M1.25012 21.75C1.25012 21.1977 1.68766 20.75 2.22739 20.75H21.7729C22.3126 20.75 22.7501 21.1977 22.7501 21.75C22.7501 22.3023 22.3126 22.75 21.7729 22.75H2.22739C1.68766 22.75 1.25012 22.3023 1.25012 21.75Z',
  d12: 'M18.6687 13.9766C18.9041 13.9766 19.0219 13.9766 19.1048 14.0446C19.1877 14.1126 19.2108 14.228 19.257 14.4589L20.7356 21.8517C20.7796 22.072 20.7226 22.3005 20.5801 22.4742C20.4377 22.648 20.2248 22.7487 20.0001 22.7487H4.00013C3.77543 22.7487 3.56258 22.648 3.42012 22.4742C3.27767 22.3005 3.22063 22.072 3.26469 21.8517L4.74324 14.4589C4.78942 14.228 4.81251 14.1126 4.89545 14.0446C4.9784 13.9766 5.09613 13.9766 5.33159 13.9766L18.6687 13.9766Z',
  d13: 'M10.5965 18.0727C10.5421 18.2324 10.4942 18.4587 10.4133 18.8518L9.7349 22.1511C9.65147 22.5568 9.25493 22.8181 8.8492 22.7346C8.44348 22.6512 8.18221 22.2547 8.26564 21.8489L8.94409 18.5497C8.94673 18.5369 8.94936 18.5241 8.95198 18.5113C9.02208 18.1702 9.08799 17.8495 9.17641 17.5895C9.27535 17.2987 9.42739 17.0032 9.71852 16.7711C10.0156 16.5342 10.4337 16.4206 10.7703 16.3572C11.1424 16.2871 11.5661 16.2524 11.9802 16.2501C12.3941 16.2478 12.8221 16.2777 13.2019 16.3469C13.5499 16.4102 13.9746 16.526 14.282 16.7711C14.5731 17.0032 14.7252 17.2987 14.8241 17.5895C14.9126 17.8494 14.9785 18.1702 15.0486 18.5113C15.0512 18.5241 15.0538 18.5369 15.0565 18.5497L15.7349 21.8489C15.8183 22.2547 15.5571 22.6512 15.1513 22.7346C14.7456 22.8181 14.3491 22.5568 14.2656 22.1511L13.5872 18.8518C13.5064 18.4587 13.4584 18.2324 13.4041 18.0727C13.3367 17.8748 13.1177 17.8562 12.9331 17.8226C12.6647 17.7737 12.3323 17.7482 11.9886 17.7501C11.645 17.752 11.3137 17.7812 11.0481 17.8312C10.8465 17.8692 10.6678 17.863 10.5965 18.0727Z',
  d14: 'M9 22L10 17L14 17L15 22',
  d15: 'M12 3.2L3.00037 12H21L12 3.2ZM12 3.2L13.4789 2M12 3.2L10.5212 2',
  d16: 'M12 12L12 8',
  d17: 'M8 12L8 10',
  d18: 'M16 12L16 10',
  d19: 'M19.1813 14.0824L4.81867 14.0824L3.26457 21.8529C3.2205 22.0732 3.27755 22.3017 3.42 22.4755C3.56245 22.6493 3.77531 22.75 4.00001 22.75L20 22.75C20.2247 22.75 20.4376 22.6493 20.58 22.4755C20.7225 22.3017 20.7795 22.0732 20.7354 21.8529L19.1813 14.0824ZM9.99912 16.25C9.6416 16.25 9.33379 16.5024 9.26367 16.853L8.26367 21.853L9.73454 22.1471L10.614 17.75L13.3843 17.7501L14.2637 22.1472L15.7345 21.853L14.7345 16.853C14.6644 16.5024 14.3566 16.2501 13.9991 16.2501L9.99912 16.25Z',
  d20: 'M7.25 12.5824H3.00002C2.69515 12.5824 2.42061 12.3978 2.30552 12.1155C2.19042 11.8332 2.25769 11.5093 2.47568 11.2961L10.8736 3.08451L10.0483 2.41478L10.9934 1.25L11.9997 2.06654L13.006 1.25L13.9511 2.41478L13.1258 3.0845L21.524 11.2961C21.742 11.5093 21.8093 11.8332 21.6942 12.1155C21.5791 12.3978 21.3046 12.5824 20.9997 12.5824H16.75V10H15.25V12.5824H12.75V8H11.25V12.5824H8.75V10H7.25V12.5824Z',
  d21: 'M22 22.75H2V20.75H22V22.75Z',
};

export const IconHutStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hut-stroke-rounded IconHutStrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHutDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hut-duotone-rounded IconHutDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHutTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hut-twotone-rounded IconHutTwotoneRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHutSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hut-solid-rounded IconHutSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconHutBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hut-bulk-rounded IconHutBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
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

export const IconHutStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hut-stroke-sharp IconHutStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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

export const IconHutSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hut-solid-sharp IconHutSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHut: TheIconSelfPack = {
  name: 'Hut',
  StrokeRounded: IconHutStrokeRounded,
  DuotoneRounded: IconHutDuotoneRounded,
  TwotoneRounded: IconHutTwotoneRounded,
  SolidRounded: IconHutSolidRounded,
  BulkRounded: IconHutBulkRounded,
  StrokeSharp: IconHutStrokeSharp,
  SolidSharp: IconHutSolidSharp,
};