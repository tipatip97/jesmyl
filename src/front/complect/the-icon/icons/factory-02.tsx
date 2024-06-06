import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.05702 19.874L4.00488 4.70063C4.18289 3.31398 4.53457 3 5.95624 3C7.37791 3 7.72959 3.31398 7.90759 4.70063L10 21H3.05991C2.52521 21 2.25787 21 2.10693 20.8305C1.95599 20.6611 1.98967 20.3987 2.05702 19.874Z',
  d2: 'M10.1537 21H21C21.4714 21 21.7071 21 21.8536 20.8536C22 20.7071 22 20.4714 22 20V7L17.6402 10.6332C16.9306 11.2245 16.5758 11.5201 16.2879 11.3853C16 11.2504 16 10.7886 16 9.86496V7L11.552 10.2349C11.0304 10.6143 10.7696 10.8039 10.4681 10.902C10.1666 11 9.84419 11 9.19926 11H9',
  d3: 'M4 6H8',
  d4: 'M12 15L14 15',
  d5: 'M17 15H19',
  d6: 'M16 7L11.552 10.2349C11.0304 10.6143 10.7696 10.8039 10.4681 10.902C10.1666 11 9.84419 11 9.19926 11H9L10.1537 21H21C21.4714 21 21.7071 21 21.8536 20.8536C22 20.7071 22 20.4714 22 20V7L17.6402 10.6332C16.9306 11.2245 16.5758 11.5201 16.2879 11.3853C16 11.2504 16 10.7886 16 9.86496V7Z',
  d7: 'M5.9563 3C7.37796 3 7.72964 3.31398 7.90765 4.70063L8.07446 6H3.83813L4.00494 4.70063C4.18295 3.31398 4.53463 3 5.9563 3Z',
  d8: 'M5.95623 2.25C5.24916 2.25 4.53908 2.31208 4.02038 2.76582C3.49987 3.22114 3.34955 3.91518 3.26098 4.60513L3.23611 4.79882C3.20914 5.00893 3.19565 5.11398 3.25538 5.18187C3.31512 5.24976 3.42103 5.24976 3.63286 5.24976H8.2796C8.49143 5.24976 8.59734 5.24976 8.65707 5.18187C8.7168 5.11398 8.70331 5.00893 8.67634 4.79882L8.65148 4.60513C8.56291 3.91518 8.41258 3.22114 7.89208 2.76582C7.37338 2.31208 6.6633 2.25 5.95623 2.25Z',
  d9: 'M8.9716 7.09882C8.95026 6.93257 8.93959 6.84945 8.88294 6.7996C8.82628 6.74976 8.74248 6.74976 8.57486 6.74976H3.3376C3.16998 6.74976 3.08617 6.74976 3.02952 6.7996C2.97287 6.84945 2.9622 6.93257 2.94085 7.09882L1.30828 19.8161C1.27879 20.0451 1.24742 20.2888 1.25017 20.4955C1.25337 20.7358 1.30149 21.0539 1.54686 21.3294C1.79092 21.6034 2.1 21.6889 2.33634 21.7217C2.5415 21.7502 2.78821 21.7501 3.02227 21.75L9.99999 21.75C10.2155 21.75 10.4207 21.6573 10.5631 21.4954C10.7055 21.3336 10.7713 21.1183 10.7439 20.9045L8.9716 7.09882Z',
  d10: 'M22.3173 6.32082C22.5808 6.44425 22.7492 6.709 22.7492 7.00001L22.7492 20.0344C22.7492 20.0361 22.7493 20.4617 22.7242 20.6486C22.6947 20.8679 22.6188 21.1481 22.383 21.3839C22.1472 21.6197 21.8671 21.6955 21.6477 21.725C21.4605 21.7502 21.2387 21.7501 21.0336 21.75L12.6862 21.75C12.4434 21.75 12.322 21.75 12.2625 21.685C12.203 21.6201 12.2155 21.4796 12.2404 21.1987C12.2546 21.0385 12.2517 20.8759 12.2308 20.7136L10.852 9.97303C10.8371 9.85663 10.8296 9.79842 10.852 9.74755C10.8744 9.69668 10.9223 9.66286 11.0182 9.59522L15.5669 6.38713C15.7958 6.22566 16.0956 6.20523 16.3443 6.33415C16.593 6.46308 16.7492 6.71987 16.7492 7.00001L16.7514 9.53991C16.7517 9.9088 16.7519 10.0933 16.8669 10.1471C16.982 10.201 17.1238 10.083 17.4073 9.84697L21.519 6.42384C21.7426 6.23754 22.0537 6.19738 22.3173 6.32082ZM14.2491 15C14.2491 14.5858 14.5849 14.25 14.9991 14.25H15.9991C16.4133 14.25 16.7491 14.5858 16.7491 15C16.7491 15.4142 16.4133 15.75 15.9991 15.75H14.9991C14.5849 15.75 14.2491 15.4142 14.2491 15ZM18.9991 14.25C18.5849 14.25 18.2491 14.5858 18.2491 15C18.2491 15.4142 18.5849 15.75 18.9991 15.75H19.9991C20.4133 15.75 20.7491 15.4142 20.7491 15C20.7491 14.5858 20.4133 14.25 19.9991 14.25H18.9991Z',
  d11: 'M8.97162 7.09907C8.95027 6.93282 8.9396 6.84969 8.88295 6.79984C8.8263 6.75 8.74249 6.75 8.57487 6.75H3.33758C3.16996 6.75 3.08616 6.75 3.0295 6.79984C2.97285 6.84969 2.96218 6.93282 2.94084 7.09907L1.30828 19.8162C1.27879 20.0452 1.24742 20.2889 1.25017 20.4956C1.25337 20.7359 1.30149 21.054 1.54686 21.3295C1.79092 21.6035 2.1 21.689 2.33634 21.7218C2.5415 21.7503 2.78821 21.7502 3.02227 21.7501L9.99999 21.7501C10.2155 21.7501 10.4207 21.6574 10.5631 21.4955C10.7055 21.3337 10.7713 21.1184 10.7439 20.9046L8.97162 7.09907Z',
  d12: 'M5.95593 2.25C5.24887 2.25 4.53878 2.31208 4.02008 2.76582C3.49958 3.22114 3.34926 3.91518 3.26068 4.60513L3.2358 4.79894C3.20883 5.00904 3.19535 5.1141 3.25508 5.18198C3.31481 5.24987 3.42072 5.24987 3.63255 5.24987H8.27932C8.49115 5.24987 8.59706 5.24987 8.65679 5.18198C8.71652 5.1141 8.70304 5.00904 8.67607 4.79894L8.65119 4.60513C8.56262 3.91518 8.41229 3.22114 7.89179 2.76582C7.37309 2.31208 6.663 2.25 5.95593 2.25Z',
  d13: 'M22.3173 6.32082C22.5808 6.44425 22.7492 6.709 22.7492 7.00001L22.7492 20.0344C22.7492 20.0361 22.7493 20.4617 22.7242 20.6486C22.6947 20.8679 22.6188 21.1481 22.383 21.3839C22.1472 21.6197 21.8671 21.6955 21.6477 21.725C21.4605 21.7502 21.2387 21.7501 21.0336 21.75L12.6862 21.75C12.4434 21.75 12.322 21.75 12.2625 21.685C12.203 21.6201 12.2155 21.4796 12.2404 21.1987C12.2546 21.0385 12.2517 20.8759 12.2308 20.7136L10.852 9.97303C10.8371 9.85663 10.8296 9.79842 10.852 9.74755C10.8744 9.69668 10.9223 9.66286 11.0182 9.59522L15.5669 6.38713C15.7958 6.22566 16.0956 6.20523 16.3443 6.33415C16.593 6.46308 16.7492 6.71987 16.7492 7.00001L16.7514 9.53991C16.7517 9.9088 16.7519 10.0933 16.8669 10.1471C16.982 10.201 17.1238 10.083 17.4073 9.84697L21.519 6.42384C21.7426 6.23754 22.0537 6.19738 22.3173 6.32082Z',
  d14: 'M14.25 15C14.25 14.5858 14.5858 14.25 15 14.25L16 14.25C16.4142 14.25 16.75 14.5858 16.75 15C16.75 15.4142 16.4142 15.75 16 15.75L15 15.75C14.5858 15.75 14.25 15.4142 14.25 15Z',
  d15: 'M18.25 15C18.25 14.5858 18.5858 14.25 19 14.25H20C20.4142 14.25 20.75 14.5858 20.75 15C20.75 15.4142 20.4142 15.75 20 15.75H19C18.5858 15.75 18.25 15.4142 18.25 15Z',
  d16: 'M8.98853 11.0285L15.9952 7.03955V11.0285L22.0003 7.03955L21.9997 21.0009H10.1438',
  d17: 'M3.98315 6.05029H7.98315',
  d18: 'M11.9919 15.0171H13.9937',
  d19: 'M16.9958 15.0171H18.9976',
  d20: 'M3.99905 3.00774L1.99976 20.9974H10.0215L7.98126 3.00772C7.98069 3.00267 7.97641 2.99885 7.97133 2.99885H4.00899C4.00389 2.99885 3.99961 3.00268 3.99905 3.00774Z',
  d21: 'M4.08138 2.25C3.7 2.25 3.3796 2.53736 3.33749 2.91719L3.07888 5.24988H9.07592L8.81709 2.91719C8.77498 2.53736 8.45459 2.25001 8.07321 2.25001L4.08138 2.25Z',
  d22: 'M9.24236 6.74988H2.91259L1.24963 21.75H10.9067L9.24236 6.74988Z',
  d23: 'M22.7502 5.59857L22.7495 21.75H12.4067C12.4067 21.6951 12.4037 21.6399 12.3975 21.5848L11.0018 9.00589L16.7624 5.70767V9.59861L22.7502 5.59857ZM16.0192 15.7501H14.0233L14.0233 14.2501H16.0192V15.7501ZM18.0116 15.7501H20.0075V14.2501H18.0116V15.7501Z',
};

export const IconFactory02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="factory-02-stroke-rounded IconFactory02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconFactory02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="factory-02-duotone-rounded IconFactory02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
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
    </TheIconWrapper>
  );
};

export const IconFactory02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="factory-02-twotone-rounded IconFactory02TwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconFactory02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="factory-02-solid-rounded IconFactory02SolidRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconFactory02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="factory-02-bulk-rounded IconFactory02BulkRounded"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFactory02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="factory-02-stroke-sharp IconFactory02StrokeSharp"
    >
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFactory02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="factory-02-solid-sharp IconFactory02SolidSharp"
    >
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFactory02: TheIconSelfPack = {
  name: 'Factory02',
  StrokeRounded: IconFactory02StrokeRounded,
  DuotoneRounded: IconFactory02DuotoneRounded,
  TwotoneRounded: IconFactory02TwotoneRounded,
  SolidRounded: IconFactory02SolidRounded,
  BulkRounded: IconFactory02BulkRounded,
  StrokeSharp: IconFactory02StrokeSharp,
  SolidSharp: IconFactory02SolidSharp,
};