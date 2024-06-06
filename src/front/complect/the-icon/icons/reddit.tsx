import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M15.5 16.7803C14.5149 17.548 13.3062 18.0002 12 18.0002C10.6938 18.0002 9.48512 17.548 8.5 16.7803',
  d2: 'M18 10.0694C18.3687 9.43053 19.0634 9 19.8595 9C21.0417 9 22 9.94921 22 11.1201C22 11.937 21.5336 12.6459 20.8502 13',
  d3: 'M6 10.0694C5.63125 9.43053 4.93663 9 4.14048 9C2.95833 9 2 9.94921 2 11.1201C2 11.937 2.4664 12.6459 3.14981 13',
  d4: 'M17 4C14.643 4 13.4645 4 12.7322 4.73223C12 5.46447 12 6.64298 12 9',
  d5: 'M9.00801 13L8.99902 13',
  d6: 'M15.008 13L14.999 13',
  d7: 'M15.5 16.7812C14.5149 17.549 13.3062 18.0011 12 18.0011C10.6938 18.0011 9.48512 17.549 8.5 16.7812',
  d8: 'M19 1.25C17.4812 1.25 16.25 2.48122 16.25 4C16.25 5.51878 17.4812 6.75 19 6.75C20.5188 6.75 21.75 5.51878 21.75 4C21.75 2.48122 20.5188 1.25 19 1.25Z',
  d9: 'M4.14048 8.25C2.55089 8.25 1.25 9.52826 1.25 11.1201C1.25 12.2307 1.88487 13.1893 2.80481 13.6659L3.29924 13.9221L6.9331 10.1856L6.64955 9.69441C6.1511 8.83088 5.21302 8.25 4.14048 8.25Z',
  d10: 'M19.86 8.25C18.7875 8.25 17.8494 8.83088 17.3509 9.69441L17.0674 10.1856L20.7012 13.9221L21.1957 13.6659C22.1156 13.1893 22.7505 12.2307 22.7505 11.1201C22.7505 9.52826 21.4496 8.25 19.86 8.25Z',
  d11: 'M16.9463 3.25L17 3.25C17.4142 3.25 17.75 3.58579 17.75 4C17.75 4.41422 17.4142 4.75 17 4.75C15.8003 4.75 14.976 4.75159 14.3568 4.83484C13.7591 4.91519 13.4661 5.05902 13.2626 5.26256C13.059 5.4661 12.9152 5.75914 12.8348 6.35676C12.7516 6.97595 12.75 7.80029 12.75 9C12.75 9.41422 12.4142 9.75 12 9.75C11.5858 9.75 11.25 9.41422 11.25 9L11.25 8.94631C11.25 7.81348 11.25 6.88775 11.3482 6.15689C11.4509 5.39294 11.6732 4.7306 12.2019 4.2019C12.7306 3.67321 13.3929 3.45093 14.1569 3.34822C14.8877 3.24996 15.8135 3.24998 16.9463 3.25Z',
  d12: 'M12 8.25C9.37459 8.25 6.96692 9.01746 5.19692 10.2958C3.42791 11.5734 2.25 13.4037 2.25 15.5C2.25 17.5963 3.42791 19.4266 5.19692 20.7042C6.96692 21.9825 9.37459 22.75 12 22.75C14.6254 22.75 17.0331 21.9825 18.8031 20.7042C20.5721 19.4266 21.75 17.5963 21.75 15.5C21.75 13.4037 20.5721 11.5734 18.8031 10.2958C17.0331 9.01746 14.6254 8.25 12 8.25ZM7.90846 17.289C8.16308 16.9623 8.63434 16.9038 8.96106 17.1585C9.82307 17.8302 10.8715 18.2199 12 18.2199C13.1286 18.2199 14.177 17.8302 15.039 17.1585C15.3657 16.9038 15.837 16.9623 16.0916 17.289C16.3462 17.6157 16.2878 18.087 15.9611 18.3416C14.8528 19.2053 13.4839 19.7199 12 19.7199C10.5162 19.7199 9.14724 19.2053 8.03901 18.3416C7.71229 18.087 7.65385 17.6157 7.90846 17.289ZM9 12C8.17157 12 7.5 12.6716 7.5 13.5C7.5 14.3284 8.17157 15 9 15H9.00897C9.8374 15 10.509 14.3284 10.509 13.5C10.509 12.6754 9.82084 12 9 12ZM14.991 12C14.1626 12 13.491 12.6716 13.491 13.5C13.491 14.3284 14.1626 15 14.991 15H15C15.8284 15 16.5 14.3284 16.5 13.5C16.5 12.6754 15.8119 12 14.991 12Z',
  d13: 'M11.2509 8.27096C9.5153 8.36843 7.89654 8.8021 6.52241 9.49386C6.00101 8.74215 5.1277 8.25 4.14048 8.25C2.55089 8.25 1.25 9.52826 1.25 11.1201C1.25 12.1475 1.79326 13.0448 2.6029 13.5508C2.37434 14.1659 2.25 14.8189 2.25 15.5C2.25 17.5963 3.42791 19.4266 5.19692 20.7042C6.96692 21.9825 9.37459 22.75 12 22.75C14.6254 22.75 17.0331 21.9825 18.8031 20.7042C20.5721 19.4266 21.75 17.5963 21.75 15.5C21.75 14.819 21.6257 14.1661 21.3972 13.551C22.2071 13.0451 22.7505 12.1477 22.7505 11.1201C22.7505 9.52826 21.4496 8.25 19.86 8.25C18.8727 8.25 17.9993 8.74223 17.478 9.49404C16.1042 8.80243 14.486 8.36875 12.751 8.27107C12.7545 7.45258 12.7696 6.84174 12.8348 6.35676C12.9152 5.75914 13.059 5.4661 13.2626 5.26257C13.4661 5.05902 13.7591 4.91519 14.3568 4.83484C14.976 4.75159 15.8003 4.75 17 4.75C17.4142 4.75 17.75 4.41422 17.75 4C17.75 3.58579 17.4142 3.25 17 3.25L16.9463 3.25H16.9462C15.8134 3.24998 14.8877 3.24996 14.1569 3.34822C13.3929 3.45093 12.7306 3.67321 12.2019 4.2019C11.6732 4.7306 11.4509 5.39293 11.3482 6.15689C11.2702 6.73684 11.2542 7.43949 11.2509 8.27096Z',
  d14: 'M7.90846 17.289C8.16308 16.9623 8.63434 16.9038 8.96106 17.1585C9.82307 17.8302 10.8715 18.2199 12 18.2199C13.1286 18.2199 14.177 17.8302 15.039 17.1585C15.3657 16.9038 15.837 16.9623 16.0916 17.289C16.3462 17.6157 16.2878 18.087 15.9611 18.3416C14.8528 19.2053 13.4839 19.7199 12 19.7199C10.5162 19.7199 9.14724 19.2053 8.03901 18.3416C7.71229 18.087 7.65385 17.6157 7.90846 17.289Z',
  d15: 'M7.5 13.5C7.5 12.6716 8.17157 12 9 12C9.82084 12 10.509 12.6754 10.509 13.5C10.509 14.3284 9.8374 15 9.00897 15H9C8.17157 15 7.5 14.3284 7.5 13.5ZM13.491 13.5C13.491 12.6716 14.1626 12 14.991 12C15.8119 12 16.5 12.6754 16.5 13.5C16.5 14.3284 15.8284 15 15 15H14.991C14.1626 15 13.491 14.3284 13.491 13.5Z',
  d16: 'M12 9V4H17',
  d17: 'M12 3.25C11.5858 3.25 11.25 3.58579 11.25 4V9H12.75V4.75H16.3535C16.68 5.90425 17.7412 6.75 19 6.75C20.5188 6.75 21.75 5.51878 21.75 4C21.75 2.48122 20.5188 1.25 19 1.25C17.7412 1.25 16.68 2.09575 16.3535 3.25H12Z',
  d18: 'M6.52242 9.49386C6.00101 8.74214 5.1277 8.25 4.14048 8.25C2.55089 8.25 1.25 9.52826 1.25 11.1201C1.25 12.1475 1.79326 13.0448 2.6029 13.5508C2.37434 14.1659 2.25 14.8189 2.25 15.5C2.25 17.5963 3.42791 19.4266 5.19692 20.7042C6.96692 21.9825 9.37459 22.75 12 22.75C14.6254 22.75 17.0331 21.9825 18.8031 20.7042C20.5721 19.4266 21.75 17.5963 21.75 15.5C21.75 14.8189 21.6257 14.1659 21.3971 13.5508C22.2067 13.0448 22.75 12.1475 22.75 11.1201C22.75 9.52826 21.4491 8.25 19.8595 8.25C18.8723 8.25 17.999 8.74215 17.4776 9.49386C15.9075 8.70347 14.0181 8.25 12 8.25C9.98191 8.25 8.09247 8.70347 6.52242 9.49386ZM12.0001 17.2499C10.8716 17.2499 9.82312 16.8603 8.96111 16.1885L8.03906 17.3716C9.14729 18.2353 10.5162 18.7499 12.0001 18.7499C13.4839 18.7499 14.8529 18.2353 15.9611 17.3716L15.0391 16.1885C14.177 16.8603 13.1286 17.2499 12.0001 17.2499ZM10.0078 13C10.0078 13.5523 9.5601 14 9.00781 14H8.99883C8.44655 14 7.99883 13.5523 7.99883 13C7.99883 12.4477 8.44655 12 8.99883 12H9.00781C9.5601 12 10.0078 12.4477 10.0078 13ZM15.0078 14C15.5601 14 16.0078 13.5523 16.0078 13C16.0078 12.4477 15.5601 12 15.0078 12H14.9988C14.4465 12 13.9988 12.4477 13.9988 13C13.9988 13.5523 14.4465 14 14.9988 14H15.0078Z',
};

export const IconRedditStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="reddit-stroke-rounded IconRedditStrokeRounded"
    >
      <ellipse 
        cx="12" 
        cy="15.5" 
        rx="9" 
        ry="6.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <circle 
        cx="19" 
        cy="4" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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
    </TheIconWrapper>
  );
};

export const IconRedditDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="reddit-duotone-rounded IconRedditDuotoneRounded"
    >
      <ellipse 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="15.5" 
        rx="9" 
        ry="6.5" 
        fill="var(--icon-fill)"></ellipse>
      <ellipse 
        cx="12" 
        cy="15.5" 
        rx="9" 
        ry="6.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <circle 
        cx="19" 
        cy="4" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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
    </TheIconWrapper>
  );
};

export const IconRedditTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="reddit-twotone-rounded IconRedditTwotoneRounded"
    >
      <ellipse 
        cx="12" 
        cy="15.5" 
        rx="9" 
        ry="6.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <circle 
        cx="19" 
        cy="4" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRedditSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="reddit-solid-rounded IconRedditSolidRounded"
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
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconRedditBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="reddit-bulk-rounded IconRedditBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d8} 
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

export const IconRedditStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="reddit-stroke-sharp IconRedditStrokeSharp"
    >
      <ellipse 
        cx="12" 
        cy="15.5" 
        rx="9" 
        ry="6.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></ellipse>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <circle 
        cx="19" 
        cy="4" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconRedditSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="reddit-solid-sharp IconRedditSolidSharp"
    >
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

export const iconPackOfReddit: TheIconSelfPack = {
  name: 'Reddit',
  StrokeRounded: IconRedditStrokeRounded,
  DuotoneRounded: IconRedditDuotoneRounded,
  TwotoneRounded: IconRedditTwotoneRounded,
  SolidRounded: IconRedditSolidRounded,
  BulkRounded: IconRedditBulkRounded,
  StrokeSharp: IconRedditStrokeSharp,
  SolidSharp: IconRedditSolidSharp,
};