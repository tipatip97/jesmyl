import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 7.5L9.94202 9.23943C11.6572 10.2535 12.3428 10.2535 14.058 9.23943L17 7.5',
  d2: 'M21.996 10C21.9933 9.63328 21.9894 9.77017 21.9842 9.5265C21.9189 6.46005 21.8862 4.92682 20.7551 3.79105C19.6239 2.65528 18.0497 2.61571 14.9012 2.53658C12.9607 2.48781 11.0393 2.48781 9.09882 2.53657C5.95033 2.6157 4.37608 2.65526 3.24495 3.79103C2.11382 4.92681 2.08114 6.46003 2.01576 9.52648C1.99474 10.5125 1.99475 11.4926 2.01577 12.4786C2.08114 15.5451 2.11383 17.0783 3.24496 18.2141C4.37608 19.3498 5.95033 19.3894 9.09883 19.4685C9.7068 19.4838 10.4957 19.4943 11 19.5',
  d3: 'M15.586 18.6482C14.9572 19.0167 13.3086 19.7693 14.3127 20.711C14.8032 21.171 15.3495 21.5 16.0364 21.5H19.9556C20.6424 21.5 21.1887 21.171 21.6792 20.711C22.6834 19.7693 21.0347 19.0167 20.4059 18.6482C18.9314 17.7839 17.0605 17.7839 15.586 18.6482Z',
  d4: 'M19.996 14C19.996 15.1046 19.1005 16 17.996 16C16.8914 16 15.996 15.1046 15.996 14C15.996 12.8954 16.8914 12 17.996 12C19.1005 12 19.996 12.8954 19.996 14Z',
  d5: 'M3.24496 18.2094C2.11383 17.0739 2.08114 15.5412 2.01577 12.4756C1.99475 11.4899 1.99474 10.5101 2.01576 9.52438C2.08114 6.45885 2.11382 4.92608 3.24495 3.79065C4.37608 2.65521 5.95033 2.61566 9.09882 2.53656C11.0393 2.48781 12.9607 2.48781 14.9012 2.53657C18.0497 2.61568 19.6239 2.65523 20.7551 3.79066C21.8862 4.92609 21.9189 6.45886 21.9842 9.52439C22.0053 10.5101 22.0053 11.4899 21.9842 12.4756C21.9189 15.5411 21.8862 17.0739 20.7551 18.2094C20.6122 18.3528 20.4622 18.4787 20.3029 18.5895C18.845 17.7844 17.0264 17.804 15.5861 18.6482C15.5236 18.6848 15.451 18.7253 15.3719 18.7694C15.0489 18.9493 14.6179 19.1893 14.325 19.4765C12.5798 19.5117 10.8471 19.5074 9.09883 19.4634C5.95033 19.3843 4.37608 19.3448 3.24496 18.2094ZM17.9961 16C19.1007 16 19.9961 15.1046 19.9961 14C19.9961 12.8954 19.1007 12 17.9961 12C16.8915 12 15.9961 12.8954 15.9961 14C15.9961 15.1046 16.8915 16 17.9961 16Z',
  d6: 'M15.5861 18.6482C14.9573 19.0167 13.3087 19.7693 14.3128 20.711C14.8033 21.171 15.3496 21.5 16.0365 21.5H19.9557C20.6425 21.5 21.1888 21.171 21.6794 20.711C22.6835 19.7693 21.0348 19.0167 20.4061 18.6482C18.9316 17.7839 17.0606 17.7839 15.5861 18.6482Z',
  d7: 'M19.9961 14C19.9961 15.1046 19.1007 16 17.9961 16C16.8915 16 15.9961 15.1046 15.9961 14C15.9961 12.8954 16.8915 12 17.9961 12C19.1007 12 19.9961 12.8954 19.9961 14Z',
  d8: 'M9.07998 1.7868C11.033 1.73773 12.967 1.73773 14.92 1.78681L14.9782 1.78827C16.503 1.82656 17.73 1.85737 18.7133 2.02862C19.7428 2.20791 20.5795 2.55179 21.2864 3.26134C21.9903 3.96792 22.3324 4.79261 22.5082 5.80542C22.6757 6.76979 22.7012 7.96683 22.7328 9.44967L22.7341 9.5084C22.7521 10.3554 22.7548 11.1981 22.7422 12.0438C22.7401 12.1868 22.739 12.2582 22.7135 12.3149C22.6829 12.3827 22.6274 12.4374 22.5591 12.4669C22.5021 12.4916 22.4301 12.4916 22.2862 12.4916C22.1817 12.4916 22.1294 12.4916 22.0865 12.4784C22.0312 12.4615 21.9906 12.4357 21.9519 12.3928C21.9217 12.3595 21.897 12.3066 21.8475 12.2009C21.1701 10.753 19.7002 9.75 17.996 9.75C15.6488 9.75 13.746 11.6528 13.746 14C13.746 14.9759 14.0749 15.8751 14.628 16.5925C14.7523 16.7537 14.7042 16.9959 14.5239 17.0904L14.5033 17.1006C14.2123 17.245 13.3599 17.6677 12.8339 18.1239C12.5123 18.4028 11.8861 19.028 11.7655 20.0057C11.7488 20.1411 11.638 20.2495 11.5017 20.2489C10.6959 20.2455 9.88959 20.2335 9.07999 20.2132L9.02177 20.2117C7.49697 20.1735 6.27001 20.1426 5.2867 19.9714C4.2572 19.7921 3.42048 19.4482 2.71362 18.7387C2.00972 18.0321 1.66764 17.2074 1.49176 16.1946C1.32429 15.2302 1.29878 14.0332 1.26719 12.5504L1.26594 12.4916C1.24469 11.4953 1.24469 10.5047 1.26593 9.50839L1.26719 9.44965C1.29878 7.9668 1.32429 6.76978 1.49176 5.8054C1.66764 4.7926 2.00971 3.9679 2.71362 3.26132C3.42048 2.55177 4.2572 2.20789 5.2867 2.0286C6.27002 1.85735 7.49699 1.82655 9.02182 1.78826L9.07998 1.7868ZM7.38182 6.36623C7.02527 6.15543 6.56533 6.27358 6.35452 6.63013C6.14371 6.98669 6.26186 7.44663 6.61841 7.65744L9.56043 9.39687C10.4313 9.91175 11.1827 10.2618 12.0001 10.2618C12.8175 10.2618 13.569 9.91175 14.4398 9.39687L17.3818 7.65744C17.7384 7.44663 17.8565 6.98669 17.6457 6.63013C17.4349 6.27358 16.975 6.15543 16.6184 6.36623L13.6764 8.10567C12.832 8.60488 12.3831 8.76184 12.0001 8.76184C11.6171 8.76184 11.1682 8.60488 10.3238 8.10567L7.38182 6.36623Z',
  d9: 'M15.2071 18.426C16.9158 17.5247 19.0768 17.5247 20.7855 18.426C21.095 18.5801 21.8018 18.9329 22.1756 19.2571C22.4085 19.4591 22.6865 19.7713 22.7381 20.1894C22.795 20.6509 22.5579 21.0489 22.1926 21.3573C21.633 21.8296 20.9114 22.25 19.9559 22.25H16.0367C15.0812 22.25 14.3596 21.8296 13.8 21.3573C13.4347 21.0489 13.1976 20.6509 13.2545 20.1894C13.3061 19.7712 13.5841 19.4591 13.8169 19.2571C14.1908 18.9329 14.8975 18.5801 15.2071 18.426Z',
  d10: 'M15.2463 14C15.2463 12.4812 16.4775 11.25 17.9963 11.25C19.5151 11.25 20.7463 12.4812 20.7463 14C20.7463 15.5188 19.5151 16.75 17.9963 16.75C16.4775 16.75 15.2463 15.5188 15.2463 14Z',
  d11: 'M14.92 1.78681C12.967 1.73773 11.033 1.73773 9.07999 1.7868L9.02182 1.78826C7.497 1.82655 6.27002 1.85735 5.2867 2.0286C4.2572 2.20789 3.42048 2.55177 2.71362 3.26132C2.00971 3.9679 1.66764 4.7926 1.49176 5.8054C1.32429 6.76978 1.29878 7.9668 1.26719 9.44965L1.26593 9.50839C1.24469 10.5047 1.24469 11.4953 1.26594 12.4916L1.26719 12.5504C1.29879 14.0332 1.32429 15.2302 1.49176 16.1946C1.66764 17.2074 2.00972 18.0321 2.71362 18.7387C3.42048 19.4482 4.2572 19.7921 5.2867 19.9714C6.27001 20.1426 7.49697 20.1735 9.02177 20.2117L9.07999 20.2132C9.88959 20.2335 10.6959 20.2455 11.5017 20.2489C11.638 20.2495 11.7488 20.1411 11.7655 20.0057C11.8861 19.028 12.5123 18.4028 12.8339 18.1239C13.3599 17.6677 14.2123 17.245 14.5033 17.1006L14.5239 17.0904C14.7042 16.9959 14.7523 16.7537 14.628 16.5925C14.0749 15.8751 13.746 14.9759 13.746 14C13.746 11.6528 15.6488 9.75 17.996 9.75C19.7002 9.75 21.1701 10.753 21.8475 12.2009C21.897 12.3066 21.9217 12.3595 21.9519 12.3928C21.9906 12.4357 22.0312 12.4615 22.0865 12.4784C22.1294 12.4916 22.1817 12.4916 22.2862 12.4916C22.4301 12.4916 22.5021 12.4916 22.5591 12.4669C22.6274 12.4374 22.6829 12.3827 22.7135 12.3149C22.739 12.2582 22.7401 12.1868 22.7422 12.0438C22.7548 11.1981 22.7521 10.3554 22.7341 9.5084L22.7328 9.44967C22.7012 7.96683 22.6757 6.76979 22.5082 5.80542C22.3324 4.79261 21.9903 3.96792 21.2864 3.26134C20.5795 2.55179 19.7428 2.20791 18.7133 2.02862C17.73 1.85737 16.503 1.82656 14.9782 1.78827L14.92 1.78681Z',
  d12: 'M6.13935 6.50294C6.42043 6.02753 7.03369 5.86999 7.5091 6.15107L10.4511 7.8905C11.2914 8.38734 11.6898 8.51188 12.0002 8.51188C12.3105 8.51188 12.7089 8.38734 13.5492 7.8905L16.4912 6.15107C16.9666 5.86999 17.5799 6.02753 17.861 6.50294C18.142 6.97835 17.9845 7.5916 17.5091 7.87268L14.5671 9.61211C13.6916 10.1298 12.8898 10.5119 12.0002 10.5119C11.1105 10.5119 10.3088 10.1298 9.43323 9.61211L6.49122 7.87268C6.01581 7.5916 5.85828 6.97835 6.13935 6.50294Z',
  d13: 'M22 10.5V2.5H2V19.5H12',
  d14: 'M6 7L12 11L18 7',
  d15: 'M22 21.5H15C15 19.567 16.567 18 18.5 18C20.433 18 22 19.567 22 21.5Z',
  d16: 'M20.25 14.25C20.25 15.2165 19.4665 16 18.5 16C17.5335 16 16.75 15.2165 16.75 14.25C16.75 13.2835 17.5335 12.5 18.5 12.5C19.4665 12.5 20.25 13.2835 20.25 14.25Z',
  d17: 'M1.25 2.5C1.25 2.08579 1.58579 1.75 2 1.75H22C22.4142 1.75 22.75 2.08579 22.75 2.5V18.0087C22.3408 17.5111 21.846 17.0867 21.288 16.758C21.886 16.0936 22.25 15.2143 22.25 14.25C22.25 12.1789 20.5711 10.5 18.5 10.5C16.4289 10.5 14.75 12.1789 14.75 14.25C14.75 15.2143 15.114 16.0936 15.712 16.758C14.4345 17.5107 13.4878 18.7649 13.1427 20.25H2C1.58579 20.25 1.25 19.9142 1.25 19.5V2.5ZM6.41603 6.37598L5.58398 7.62405L12 11.9014L18.416 7.62405L17.584 6.37598L12 10.0986L6.41603 6.37598Z',
  d18: 'M16 14.25C16 12.8693 17.1193 11.75 18.5 11.75C19.8807 11.75 21 12.8693 21 14.25C21 15.6307 19.8807 16.75 18.5 16.75C17.1193 16.75 16 15.6307 16 14.25Z',
  d19: 'M14.25 21.5C14.25 19.1528 16.1528 17.25 18.5 17.25C20.8472 17.25 22.75 19.1528 22.75 21.5V22.25H14.25V21.5Z',
};

export const IconMailAccount02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-account-02-stroke-rounded IconMailAccount02StrokeRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMailAccount02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-account-02-duotone-rounded IconMailAccount02DuotoneRounded"
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMailAccount02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-account-02-twotone-rounded IconMailAccount02TwotoneRounded"
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
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconMailAccount02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-account-02-solid-rounded IconMailAccount02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconMailAccount02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-account-02-bulk-rounded IconMailAccount02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
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

export const IconMailAccount02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-account-02-stroke-sharp IconMailAccount02StrokeSharp"
    >
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
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMailAccount02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-account-02-solid-sharp IconMailAccount02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMailAccount02: TheIconSelfPack = {
  name: 'MailAccount02',
  StrokeRounded: IconMailAccount02StrokeRounded,
  DuotoneRounded: IconMailAccount02DuotoneRounded,
  TwotoneRounded: IconMailAccount02TwotoneRounded,
  SolidRounded: IconMailAccount02SolidRounded,
  BulkRounded: IconMailAccount02BulkRounded,
  StrokeSharp: IconMailAccount02StrokeSharp,
  SolidSharp: IconMailAccount02SolidSharp,
};