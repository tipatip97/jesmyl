import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8 15L6 22M16 15L18 22',
  d2: 'M12 11C10.4783 11 8.86931 11.2925 7.60803 11.6838C6.6583 11.9784 5.89434 13.322 6.01199 14.4128C6.05558 14.8169 6.36877 15 6.69807 15H17.3019C17.6312 15 17.9444 14.8169 17.988 14.4128C18.1057 13.322 17.3417 11.9784 16.392 11.6838C15.1307 11.2925 13.5217 11 12 11Z',
  d3: 'M7 12L7.6398 5.60199C7.81099 3.89012 7.89658 3.03419 8.46796 2.51709C9.03935 2 9.89955 2 11.62 2H12.38C14.1005 2 14.9607 2 15.532 2.51709C16.1034 3.03419 16.189 3.89012 16.3602 5.60199L17 12',
  d4: 'M11.9986 11C10.4768 11 8.86787 11.2925 7.60659 11.6838C7.3848 11.7526 7.17314 11.8786 6.98047 12.0452L6.99857 12L7.63837 5.60199C7.80955 3.89012 7.89515 3.03419 8.46653 2.51709C9.03791 2 9.89811 2 11.6185 2H12.3786C14.099 2 14.9592 2 15.5306 2.51709C16.102 3.03419 16.1876 3.89012 16.3588 5.60199L16.9986 12V12.0298C16.8108 11.8708 16.6054 11.7504 16.3905 11.6838C15.1293 11.2925 13.5203 11 11.9986 11Z',
  d5: 'M16.3944 11.6838C16.6093 11.7504 16.8147 11.8708 17.0025 12.0298V12L16.3627 5.60199C16.1915 3.89012 16.1059 3.03419 15.5345 2.51709C14.9631 2 14.1029 2 12.3825 2H11.6224C9.90202 2 9.04182 2 8.47044 2.51709C7.89905 3.03419 7.81346 3.89012 7.64227 5.60199L7.00247 12L6.98438 12.0452',
  d6: 'M8.27498 13.7887C8.80601 13.9405 9.11351 14.4939 8.96178 15.025L6.96178 22.025C6.81006 22.556 6.25657 22.8635 5.72554 22.7118C5.1945 22.5601 4.88701 22.0066 5.03873 21.4755L7.03873 14.4755C7.19046 13.9445 7.74394 13.637 8.27498 13.7887ZM15.7255 13.7887C16.2566 13.637 16.8101 13.9445 16.9618 14.4755L18.9618 21.4755C19.1135 22.0066 18.806 22.5601 18.275 22.7118C17.7439 22.8635 17.1905 22.556 17.0387 22.025L15.0387 15.025C14.887 14.4939 15.1945 13.9405 15.7255 13.7887Z',
  d7: 'M12 15.75H6.69811C6.40087 15.75 6.07014 15.6679 5.79002 15.4519C5.49593 15.2252 5.30907 14.8892 5.26636 14.4932C5.18694 13.7569 5.40392 12.9897 5.76087 12.3737C6.11338 11.7654 6.67129 11.1891 7.38584 10.9674C8.70822 10.5572 10.3924 10.25 12 10.25C13.6077 10.25 15.2919 10.5572 16.6142 10.9674C17.3288 11.1891 17.8867 11.7654 18.2392 12.3737C18.5962 12.9897 18.8132 13.7569 18.7337 14.4932C18.691 14.8892 18.5042 15.2252 18.2101 15.4519C17.9299 15.6679 17.5992 15.75 17.302 15.75H12Z',
  d8: 'M12.0002 9C10.2493 9 8.43984 9.33173 7.01562 9.77358C6.91757 9.804 6.86855 9.81921 6.85165 9.8224C6.65001 9.86041 6.49914 9.73721 6.49611 9.53203C6.49585 9.51484 6.49988 9.47454 6.50794 9.39394L6.89946 5.47874C6.98088 4.66426 7.04908 3.98198 7.17427 3.4421C7.30677 2.87065 7.52289 2.36182 7.96579 1.96101C8.40868 1.5602 8.93648 1.39578 9.51828 1.32079C10.0679 1.24995 10.7536 1.24997 11.5721 1.25H12.43C13.2485 1.24997 13.9342 1.24995 14.4839 1.32079C15.0657 1.39578 15.5935 1.5602 16.0364 1.96101C16.4793 2.36182 16.6954 2.87065 16.8279 3.4421C16.9531 3.98198 17.0213 4.66424 17.1027 5.47871L17.4941 9.39284C17.5023 9.47484 17.5064 9.51583 17.5061 9.53346C17.5025 9.73788 17.3524 9.8604 17.1514 9.82311C17.1341 9.81989 17.0843 9.80445 16.9848 9.77358C15.5606 9.33173 13.7511 9 12.0002 9Z',
  d9: 'M17.3259 15.75L18.9618 21.4755C19.1135 22.0065 18.806 22.56 18.275 22.7117C17.7439 22.8634 17.1905 22.5559 17.0387 22.0249L15.246 15.7502H17.302C17.3099 15.7502 17.3179 15.7501 17.3259 15.75Z',
  d10: 'M8.75456 15.7502L6.96178 22.0249C6.81006 22.5559 6.25657 22.8634 5.72554 22.7117C5.1945 22.56 4.88701 22.0065 5.03873 21.4755L6.67458 15.75C6.68245 15.7501 6.69029 15.7502 6.69811 15.7502H8.75456Z',
  d11: 'M6 15H18V14C18 12.3431 16.8487 11 15.4286 11H8.57143C7.15127 11 6 12.3431 6 14V15Z',
  d12: 'M7 11.5L8 2.00001L16 2L17 11.5',
  d13: 'M6.76015 16.2498L5.25 21.7009L7.11462 22.2504L8.77698 16.2498H15.223L16.8854 22.2504L18.75 21.7009L17.2398 16.2498H18.75V14.4998C18.75 12.5413 17.3672 10.7498 15.4286 10.7498H8.57143C6.63275 10.7498 5.25 12.5413 5.25 14.4998V16.2498H6.76015Z',
  d14: 'M6.45068 10.0535C7.06228 9.70445 7.77451 9.49976 8.57139 9.49976H15.4285C16.2254 9.49976 16.9376 9.70445 17.5492 10.0535L16.7458 2.42124C16.7057 2.03953 16.3838 1.74976 16 1.74976L7.99996 1.74976C7.61614 1.74976 7.29426 2.03954 7.25408 2.42125L6.45068 10.0535Z',
};

export const IconChair01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chair-01-stroke-rounded IconChair01StrokeRounded"
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

export const IconChair01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chair-01-duotone-rounded IconChair01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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

export const IconChair01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chair-01-twotone-rounded IconChair01TwotoneRounded"
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

export const IconChair01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chair-01-solid-rounded IconChair01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconChair01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chair-01-bulk-rounded IconChair01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconChair01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chair-01-stroke-sharp IconChair01StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconChair01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chair-01-solid-sharp IconChair01SolidSharp"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfChair01: TheIconSelfPack = {
  name: 'Chair01',
  StrokeRounded: IconChair01StrokeRounded,
  DuotoneRounded: IconChair01DuotoneRounded,
  TwotoneRounded: IconChair01TwotoneRounded,
  SolidRounded: IconChair01SolidRounded,
  BulkRounded: IconChair01BulkRounded,
  StrokeSharp: IconChair01StrokeSharp,
  SolidSharp: IconChair01SolidSharp,
};