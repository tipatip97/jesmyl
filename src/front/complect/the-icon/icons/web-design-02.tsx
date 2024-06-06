import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20 10.128C20 6.29644 20 4.38064 18.8284 3.19032C17.6569 2 15.7712 2 12 2H10C6.22876 2 4.34315 2 3.17157 3.19032C2 4.38064 2 6.29644 2 10.128C2 13.9596 2 15.8754 3.17157 17.0657C3.64118 17.5428 4.2255 17.8287 5 18',
  d2: 'M22 17.5C22 15.6251 22 14.6877 21.5225 14.0305C21.3683 13.8183 21.1817 13.6317 20.9695 13.4775C20.3123 13 19.3749 13 17.5 13H12.5C10.6251 13 9.6877 13 9.03054 13.4775C8.8183 13.6317 8.63166 13.8183 8.47746 14.0305C8 14.6877 8 15.6251 8 17.5C8 19.3749 8 20.3123 8.47746 20.9695C8.63166 21.1817 8.8183 21.3683 9.03054 21.5225C9.6877 22 10.6251 22 12.5 22H17.5C19.3749 22 20.3123 22 20.9695 21.5225C21.1817 21.3683 21.3683 21.1817 21.5225 20.9695C22 20.3123 22 19.3749 22 17.5Z',
  d3: 'M16.5 16L17.4199 16.7929C17.8066 17.1262 18 17.2929 18 17.5C18 17.7071 17.8066 17.8738 17.4199 18.2071L16.5 19',
  d4: 'M13.5 16L12.5801 16.7929C12.1934 17.1262 12 17.2929 12 17.5C12 17.7071 12.1934 17.8738 12.5801 18.2071L13.5 19',
  d5: 'M2.5 6H19.5',
  d6: 'M8.00033 17.9751C5.69166 17.9088 4.31197 17.6658 3.35591 16.7757C2.04089 15.5514 2.04089 13.5809 2.04089 9.63997C2.04089 9.04238 2.02845 8.53326 2.01729 8.07664C1.99807 7.28991 1.98266 6.65903 2.04123 6H19.8152C19.8187 6.03934 19.8222 6.07857 19.8257 6.11775C19.9146 7.11582 20 8.07421 20 9.63997C20 11.0129 20 12.1467 19.9444 13.0932C19.3595 13 18.5874 13 17.5 13H12.5C10.6251 13 9.6877 13 9.03054 13.4775C8.8183 13.6317 8.63166 13.8183 8.47746 14.0305C8 14.6877 8 15.6251 8 17.5C8 17.6655 8 17.8237 8.00033 17.9751Z',
  d7: 'M17.5424 12.25H17.5424H17.5424H12.4576H12.4576H12.4576C11.5562 12.25 10.8192 12.25 10.2278 12.314C9.61317 12.3806 9.06744 12.5236 8.5897 12.8707C8.31379 13.0712 8.07115 13.3138 7.8707 13.5897C7.5236 14.0674 7.38064 14.6132 7.31405 15.2278C7.24997 15.8192 7.24999 16.5562 7.25 17.4576V17.4576V17.4576V17.5424V17.5424V17.5424C7.24999 18.4438 7.24997 19.1808 7.31405 19.7722C7.38064 20.3868 7.5236 20.9326 7.8707 21.4103C8.07115 21.6862 8.31379 21.9288 8.5897 22.1293C9.06744 22.4764 9.61317 22.6194 10.2278 22.686C10.8192 22.75 11.5562 22.75 12.4576 22.75H17.5424C18.4438 22.75 19.1808 22.75 19.7722 22.686C20.3868 22.6194 20.9326 22.4764 21.4103 22.1293C21.6862 21.9288 21.9288 21.6862 22.1293 21.4103C22.4764 20.9326 22.6194 20.3868 22.686 19.7722C22.75 19.1808 22.75 18.4438 22.75 17.5424V17.4576C22.75 16.5562 22.75 15.8192 22.686 15.2278C22.6194 14.6132 22.4764 14.0674 22.1293 13.5897C21.9288 13.3138 21.6862 13.0712 21.4103 12.8707C20.9326 12.5236 20.3868 12.3806 19.7722 12.314C19.1808 12.25 18.4438 12.25 17.5424 12.25ZM13.6529 16.7575C14.0712 16.3969 14.118 15.7655 13.7575 15.3471C13.3969 14.9288 12.7655 14.882 12.3471 15.2426L11.4272 16.0354L11.3953 16.0629C11.2308 16.2045 11.0391 16.3696 10.8962 16.531C10.7308 16.7179 10.5 17.0411 10.5 17.5C10.5 17.9589 10.7308 18.2821 10.8962 18.4691C11.0391 18.6305 11.2308 18.7955 11.3953 18.9371L11.3953 18.9371L11.4272 18.9646L12.3471 19.7575C12.7655 20.1181 13.3969 20.0712 13.7575 19.6529C14.118 19.2346 14.0712 18.6031 13.6529 18.2426L12.7914 17.5L13.6529 16.7575ZM16.3471 16.7575C15.9288 16.3969 15.882 15.7655 16.2425 15.3471C16.6031 14.9288 17.2345 14.882 17.6529 15.2426L18.5728 16.0354L18.6047 16.0629C18.7692 16.2045 18.9609 16.3696 19.1038 16.531C19.2692 16.7179 19.5 17.0411 19.5 17.5C19.5 17.9589 19.2692 18.2821 19.1038 18.4691C18.9609 18.6305 18.7692 18.7955 18.6047 18.9371L18.5728 18.9646L17.6529 19.7575C17.2345 20.1181 16.6031 20.0712 16.2425 19.6529C15.882 19.2346 15.9288 18.6031 16.3471 18.2426L17.2086 17.5L16.3471 16.7575Z',
  d8: 'M12.0473 1.25H9.95269C8.17568 1.24997 6.74175 1.24995 5.61368 1.4036C4.44069 1.56337 3.45425 1.9054 2.67241 2.69748C1.89268 3.48742 1.55794 4.48047 1.40121 5.66142C1.24996 6.80119 1.24998 8.25122 1.25 10.0541V10.1947C1.24998 11.9975 1.24996 13.4475 1.40121 14.5873C1.55794 15.7683 1.89268 16.7613 2.67241 17.5512C3.29565 18.1827 4.05283 18.5313 4.93946 18.7269C5.46523 18.8428 5.98572 18.5118 6.102 17.9875C6.21828 17.4633 5.88632 16.9443 5.36054 16.8283C4.7369 16.6908 4.35465 16.4836 4.06217 16.1873C3.69961 15.82 3.46321 15.3031 3.33436 14.3322C3.20201 13.3349 3.2 12.014 3.2 10.1244C3.2 9.00435 3.20071 8.08412 3.22884 7.31266C3.23844 7.0496 3.24323 6.91808 3.33039 6.83404C3.41755 6.75 3.5516 6.75 3.81971 6.75H18.1803C18.4484 6.75 18.5825 6.75 18.6696 6.83404C18.7568 6.91808 18.7616 7.0496 18.7712 7.31266C18.7993 8.08412 18.8 9.00435 18.8 10.1244C18.8 10.6613 19.2365 11.0966 19.775 11.0966C20.3135 11.0966 20.75 10.6613 20.75 10.1244V10.0541C20.75 8.25124 20.75 6.8012 20.5988 5.66142C20.4421 4.48047 20.1073 3.48742 19.3276 2.69748C18.5458 1.9054 17.5593 1.56337 16.3863 1.4036C15.2583 1.24995 13.8243 1.24997 12.0473 1.25Z',
  d9: 'M20 10V2H2V18L5 18',
  d10: 'M8 13V22L22 22V13H8Z',
  d11: 'M16.5 15.5L18.5 17.5L16.5 19.5M13.5 15.5L11.5 17.5L13.5 19.5',
  d12: 'M8 12.25C7.58579 12.25 7.25 12.5858 7.25 13V22C7.25 22.4142 7.58579 22.75 8 22.75L22 22.75C22.1989 22.75 22.3897 22.671 22.5303 22.5303C22.671 22.3897 22.75 22.1989 22.75 22V13C22.75 12.5858 22.4142 12.25 22 12.25H8ZM14.0304 16.0304L12.9698 14.9697L10.4395 17.5001L12.9698 20.0304L14.0304 18.9697L12.5608 17.5001L14.0304 16.0304ZM15.9698 16.0304L17.4395 17.5001L15.9698 18.9697L17.0304 20.0304L19.5608 17.5001L17.0304 14.9697L15.9698 16.0304Z',
  d13: 'M2.225 1.25C1.68652 1.25 1.25 1.68528 1.25 2.22222V17.7778C1.25 18.3147 1.68652 18.75 2.225 18.75L5.15 18.75L5.15 16.8056L3.2 16.8056V6.75H18.8V10H20.75V2.22222C20.75 1.68528 20.3135 1.25 19.775 1.25H2.225Z',
};

export const IconWebDesign02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="web-design-02-stroke-rounded IconWebDesign02StrokeRounded"
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

export const IconWebDesign02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="web-design-02-duotone-rounded IconWebDesign02DuotoneRounded"
    >
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

export const IconWebDesign02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="web-design-02-twotone-rounded IconWebDesign02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconWebDesign02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="web-design-02-solid-rounded IconWebDesign02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconWebDesign02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="web-design-02-bulk-rounded IconWebDesign02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWebDesign02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="web-design-02-stroke-sharp IconWebDesign02StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconWebDesign02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="web-design-02-solid-sharp IconWebDesign02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWebDesign02: TheIconSelfPack = {
  name: 'WebDesign02',
  StrokeRounded: IconWebDesign02StrokeRounded,
  DuotoneRounded: IconWebDesign02DuotoneRounded,
  TwotoneRounded: IconWebDesign02TwotoneRounded,
  SolidRounded: IconWebDesign02SolidRounded,
  BulkRounded: IconWebDesign02BulkRounded,
  StrokeSharp: IconWebDesign02StrokeSharp,
  SolidSharp: IconWebDesign02SolidSharp,
};