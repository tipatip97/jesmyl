import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 11C4.3317 8.55783 7.64323 8.44283 10 11M8.49509 4.5C8.49509 5.88071 7.37421 7 5.99153 7C4.60885 7 3.48797 5.88071 3.48797 4.5C3.48797 3.11929 4.60885 2 5.99153 2C7.37421 2 8.49509 3.11929 8.49509 4.5Z',
  d2: 'M14 22C16.3317 19.5578 19.6432 19.4428 22 22M20.4951 15.5C20.4951 16.8807 19.3742 18 17.9915 18C16.6089 18 15.488 16.8807 15.488 15.5C15.488 14.1193 16.6089 13 17.9915 13C19.3742 13 20.4951 14.1193 20.4951 15.5Z',
  d3: 'M3 14C3 17.87 6.13 21 10 21L9 19',
  d4: 'M15 3H21M15 6H21M15 9H18.5',
  d5: 'M8.49541 4.5C8.49541 5.88071 7.37452 7 5.99184 7C4.60916 7 3.48828 5.88071 3.48828 4.5C3.48828 3.11929 4.60916 2 5.99184 2C7.37452 2 8.49541 3.11929 8.49541 4.5Z',
  d6: 'M20.4954 15.5C20.4954 16.8807 19.3745 18 17.9918 18C16.6092 18 15.4883 16.8807 15.4883 15.5C15.4883 14.1193 16.6092 13 17.9918 13C19.3745 13 20.4954 14.1193 20.4954 15.5Z',
  d7: 'M2.73797 4.5C2.73797 2.70407 4.19565 1.25 5.99153 1.25C7.78742 1.25 9.24509 2.70407 9.24509 4.5C9.24509 6.29593 7.78742 7.75 5.99153 7.75C4.19565 7.75 2.73797 6.29593 2.73797 4.5Z',
  d8: 'M10.3362 10.2671C10.6148 10.5463 10.75 10.9173 10.75 11.2809C10.75 12.0922 10.0922 12.75 9.28085 12.75H2.71392C1.90542 12.75 1.25 12.0946 1.25 11.2861C1.25 10.9151 1.39121 10.5376 1.68015 10.2579C2.92651 9.05165 4.43767 8.38926 5.98919 8.37523C7.54499 8.36115 9.07137 8.99999 10.3362 10.2671Z',
  d9: 'M14.738 14.5C14.738 12.7041 16.1956 11.25 17.9915 11.25C19.7874 11.25 21.2451 12.7041 21.2451 14.5C21.2451 16.2959 19.7874 17.75 17.9915 17.75C16.1956 17.75 14.738 16.2959 14.738 14.5Z',
  d10: 'M22.3362 20.2671C22.6148 20.5463 22.75 20.9173 22.75 21.2809C22.75 22.0922 22.0922 22.75 21.2809 22.75H14.7139C13.9054 22.75 13.25 22.0946 13.25 21.2861C13.25 20.9151 13.3912 20.5376 13.6802 20.2579C14.9265 19.0517 16.4377 18.3893 17.9892 18.3752C19.545 18.3612 21.0714 19 22.3362 20.2671Z',
  d11: 'M5 14.75C5 14.1977 4.55228 13.75 4 13.75C3.44772 13.75 3 14.1977 3 14.75C3 19.1723 6.57772 22.75 11 22.75C11.3466 22.75 11.6684 22.5705 11.8507 22.2757C12.0329 21.9809 12.0494 21.6128 11.8944 21.3028L10.8944 19.3028C10.6474 18.8088 10.0468 18.6086 9.55279 18.8556L8.29808 20.1103C6.34038 19.1231 5 17.0953 5 14.75Z',
  d12: 'M14 2.25C14 1.69772 14.4477 1.25 15 1.25H21C21.5523 1.25 22 1.69772 22 2.25C22 2.80228 21.5523 3.25 21 3.25H15C14.4477 3.25 14 2.80228 14 2.25ZM14 5.25C14 4.69772 14.4477 4.25 15 4.25H21C21.5523 4.25 22 4.69772 22 5.25C22 5.80228 21.5523 6.25 21 6.25H15C14.4477 6.25 14 5.80228 14 5.25ZM14 8.25C14 7.69772 14.4477 7.25 15 7.25H18.5C19.0523 7.25 19.5 7.69772 19.5 8.25C19.5 8.80228 19.0523 9.25 18.5 9.25H15C14.4477 9.25 14 8.80228 14 8.25Z',
  d13: 'M3 14C3 17.87 6.13 21 10 21V18.5',
  d14: 'M3.03043 5C3.03043 3.20407 4.4881 1.75 6.28399 1.75C8.07987 1.75 9.53755 3.20407 9.53755 5C9.53755 6.79593 8.07987 8.25 6.28399 8.25C4.4881 8.25 3.03043 6.79593 3.03043 5Z',
  d15: 'M2.83491 12.0179L1.75 10.9821C3.03524 9.63595 4.6316 8.892 6.27543 8.87529C7.92449 8.85852 9.5381 9.57482 10.844 10.9917L9.74096 12.0083L2.83491 12.0179Z',
  d16: 'M14.4367 15.2319C14.4367 13.436 15.8944 11.9819 17.6902 11.9819C19.4861 11.9819 20.9438 13.436 20.9438 15.2319C20.9438 17.0279 19.4861 18.4819 17.6902 18.4819C15.8944 18.4819 14.4367 17.0279 14.4367 15.2319Z',
  d17: 'M14.2412 22.2499L13.1562 21.214C14.4415 19.8679 16.0378 19.1239 17.6817 19.1072C19.3307 19.0905 20.9443 19.8068 22.2502 21.2237L21.1472 22.2402L14.2412 22.2499Z',
  d18: 'M8.75195 20.7056C5.65074 20.3359 3.25195 17.7019 3.25195 14.5H1.75195C1.75195 18.7842 5.21774 22.25 9.50195 22.25H10.252V19H8.75195V20.7056Z',
  d19: 'M20.502 4.25H14.502V2.75H20.502V4.25ZM20.502 7.25H14.502V5.75H20.502V7.25ZM18.002 10.25H14.502V8.75H18.002V10.25Z',
};

export const IconShareKnowledgeStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="share-knowledge-stroke-rounded IconShareKnowledgeStrokeRounded"
    >
      <path 
        d={d.d1} 
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
    </TheIconWrapper>
  );
};

export const IconShareKnowledgeDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="share-knowledge-duotone-rounded IconShareKnowledgeDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
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
    </TheIconWrapper>
  );
};

export const IconShareKnowledgeTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="share-knowledge-twotone-rounded IconShareKnowledgeTwotoneRounded"
    >
      <path 
        d={d.d1} 
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShareKnowledgeSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="share-knowledge-solid-rounded IconShareKnowledgeSolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShareKnowledgeBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="share-knowledge-bulk-rounded IconShareKnowledgeBulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      </g>
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShareKnowledgeStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="share-knowledge-stroke-sharp IconShareKnowledgeStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconShareKnowledgeSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="share-knowledge-solid-sharp IconShareKnowledgeSolidSharp"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfShareKnowledge: TheIconSelfPack = {
  name: 'ShareKnowledge',
  StrokeRounded: IconShareKnowledgeStrokeRounded,
  DuotoneRounded: IconShareKnowledgeDuotoneRounded,
  TwotoneRounded: IconShareKnowledgeTwotoneRounded,
  SolidRounded: IconShareKnowledgeSolidRounded,
  BulkRounded: IconShareKnowledgeBulkRounded,
  StrokeSharp: IconShareKnowledgeStrokeSharp,
  SolidSharp: IconShareKnowledgeSolidSharp,
};