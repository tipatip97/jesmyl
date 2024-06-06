import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7.6525 4.7864L7.47496 5.34293C7.32949 5.79895 7.25675 6.02697 7.31268 6.20705C7.35794 6.35273 7.45729 6.47831 7.59267 6.56093C7.76001 6.66306 8.01314 6.66306 8.51941 6.66306H8.78875C10.5021 6.66306 11.3588 6.66306 11.7634 7.15531C11.8097 7.21157 11.8508 7.27139 11.8864 7.33414C12.1977 7.88315 11.8438 8.62273 11.136 10.1019C10.4865 11.4593 10.1617 12.138 9.55868 12.5375C9.50031 12.5761 9.44032 12.6126 9.37886 12.6468C8.74403 13 7.95744 13 6.38427 13H6.04306C4.13715 13 3.18419 13 2.59209 12.4432C2 11.8864 2 10.9902 2 9.19784V8.56787C2 7.62594 2 7.15498 2.17223 6.72392C2.34445 6.29285 2.67424 5.93842 3.3338 5.22955L6.06141 2.29801C6.12982 2.22449 6.16403 2.18772 6.19418 2.16225C6.47569 1.92448 6.91015 1.95124 7.15627 2.22152C7.18264 2.25047 7.21145 2.29112 7.26908 2.37241C7.35922 2.49956 7.40429 2.56314 7.44357 2.62613C7.79522 3.19003 7.90162 3.85988 7.74053 4.4958C7.72254 4.56683 7.69918 4.64006 7.6525 4.7864Z',
  d2: 'M16.3475 19.2136L16.525 18.6571C16.6705 18.201 16.7433 17.973 16.6873 17.793C16.6421 17.6473 16.5427 17.5217 16.4073 17.4391C16.24 17.3369 15.9869 17.3369 15.4806 17.3369H15.2113C13.4979 17.3369 12.6412 17.3369 12.2366 16.8447C12.1903 16.7884 12.1492 16.7286 12.1136 16.6659C11.8023 16.1168 12.1562 15.3773 12.864 13.8981C13.5135 12.5407 13.8383 11.862 14.4413 11.4625C14.4997 11.4239 14.5597 11.3874 14.6211 11.3532C15.256 11 16.0426 11 17.6157 11H17.9569C19.8629 11 20.8158 11 21.4079 11.5568C22 12.1136 22 13.0098 22 14.8022V15.4321C22 16.3741 22 16.845 21.8278 17.2761C21.6555 17.7071 21.3258 18.0616 20.6662 18.7705L17.9386 21.702C17.8702 21.7755 17.836 21.8123 17.8058 21.8378C17.5243 22.0755 17.0898 22.0488 16.8437 21.7785C16.8174 21.7495 16.7885 21.7089 16.7309 21.6276C16.6408 21.5004 16.5957 21.4369 16.5564 21.3739C16.2048 20.81 16.0984 20.1401 16.2595 19.5042C16.2775 19.4332 16.3008 19.3599 16.3475 19.2136Z',
  d3: 'M5.71034 1.58924C6.29588 1.09467 7.18963 1.14406 7.71091 1.71651C7.79746 1.82422 7.99246 2.07756 8.08007 2.22922C8.53818 2.96382 8.67964 3.84316 8.46768 4.67992C8.44399 4.77344 8.41407 4.86722 8.37342 4.99457L8.08468 5.90857L8.84054 5.91301C9.65313 5.91298 10.3356 5.91296 10.8625 5.98066C11.4032 6.05012 11.9568 6.20925 12.3429 6.67901C12.4163 6.76823 12.4819 6.86359 12.5389 6.96417C12.848 7.50937 12.7696 8.08366 12.6088 8.59441C12.4547 9.08398 12.1701 9.67869 11.8368 10.375C11.5259 11.0248 11.2279 11.6476 10.9701 12.0698C10.6985 12.5145 10.3972 12.8816 9.973 13.1627C9.89842 13.2121 9.8219 13.2586 9.74361 13.3021C9.30183 13.5479 8.83302 13.6531 8.30331 13.7026C7.79564 13.75 7.17629 13.75 6.41968 13.75H6.41967H5.99364H5.99363C5.08286 13.75 4.32863 13.75 3.73093 13.6744C3.10533 13.5953 2.53839 13.4221 2.0784 12.9895C1.61189 12.5508 1.41882 11.9995 1.33167 11.3899C1.25004 10.819 1.25007 10.1019 1.25011 9.25195L1.25005 8.44338C1.2495 7.62275 1.24909 7.01319 1.47587 6.44561C1.70106 5.88197 2.12271 5.42938 2.69783 4.81203L5.52783 1.77049C5.57829 1.71608 5.64375 1.64549 5.71034 1.58924Z',
  d4: 'M18.2898 22.4107C17.7042 22.9053 16.8105 22.8559 16.2892 22.2835C16.2027 22.1757 16.0077 21.9224 15.92 21.7707C15.4619 21.0361 15.3205 20.1568 15.5324 19.32C15.5561 19.2265 15.586 19.1327 15.6267 19.0054L15.9154 18.0914L15.1596 18.0869C14.347 18.087 13.6645 18.087 13.1376 18.0193C12.597 17.9498 12.0433 17.7907 11.6572 17.3209C11.5839 17.2317 11.5182 17.1364 11.4612 17.0358C11.1521 16.4906 11.2305 15.9163 11.3913 15.4056C11.5454 14.916 11.83 14.3213 12.1633 13.625C12.4742 12.9752 12.7722 12.3524 13.0301 11.9302C13.3017 11.4855 13.6029 11.1183 14.0271 10.8373C14.1017 10.7879 14.1782 10.7414 14.2565 10.6978C14.6983 10.452 15.1671 10.3469 15.6968 10.2974C16.2045 10.25 16.8238 10.25 17.5804 10.25H18.0065C18.9173 10.25 19.6715 10.25 20.2692 10.3255C20.8948 10.4046 21.4617 10.5779 21.9217 11.0105C22.3882 11.4492 22.5813 12.0004 22.6684 12.61C22.7501 13.181 22.75 13.8981 22.75 14.748L22.7501 15.5566C22.7506 16.3772 22.751 16.9868 22.5242 17.5544C22.2991 18.118 21.8774 18.5706 21.3023 19.1879L18.4723 22.2295C18.4218 22.2839 18.3564 22.3545 18.2898 22.4107Z',
  d5: 'M2 6.5L6.5 2L8 4L7 6.5H12L10 13H2V6.5Z',
  d6: 'M22 17.5L17.5 22L16 20L17 17.5H12L14 11H22V17.5Z',
  d7: 'M6.55317 1.25189C6.77004 1.2673 6.96955 1.37607 7.1 1.55L8.6 3.55C8.75705 3.7594 8.79357 4.03552 8.69636 4.27855L8.10777 5.75H12C12.238 5.75 12.4619 5.86297 12.6033 6.05443C12.7447 6.24588 12.7868 6.49308 12.7168 6.72057L10.7168 13.2206C10.62 13.5353 10.3293 13.75 10 13.75H2C1.58579 13.75 1.25 13.4142 1.25 13V6.5C1.25 6.30109 1.32902 6.11032 1.46967 5.96967L5.96967 1.46967C6.12341 1.31593 6.3363 1.23648 6.55317 1.25189Z',
  d8: 'M13.2832 10.7794C13.38 10.4647 13.6708 10.25 14 10.25H22C22.4142 10.25 22.75 10.5858 22.75 11V17.5C22.75 17.6989 22.671 17.8897 22.5303 18.0303L18.0303 22.5303C17.8766 22.6841 17.6637 22.7635 17.4468 22.7481C17.23 22.7327 17.0305 22.6239 16.9 22.45L15.4 20.45C15.243 20.2406 15.2064 19.9645 15.3036 19.7215L15.8922 18.25H12C11.762 18.25 11.5381 18.137 11.3967 17.9456C11.2553 17.7541 11.2132 17.5069 11.2832 17.2794L13.2832 10.7794Z',
};

export const IconThumbsUpDownStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="thumbs-up-down-stroke-rounded IconThumbsUpDownStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconThumbsUpDownDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="thumbs-up-down-duotone-rounded IconThumbsUpDownDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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
    </TheIconWrapper>
  );
};

export const IconThumbsUpDownTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="thumbs-up-down-twotone-rounded IconThumbsUpDownTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconThumbsUpDownSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="thumbs-up-down-solid-rounded IconThumbsUpDownSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconThumbsUpDownBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="thumbs-up-down-bulk-rounded IconThumbsUpDownBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconThumbsUpDownStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="thumbs-up-down-stroke-sharp IconThumbsUpDownStrokeSharp"
    >
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

export const IconThumbsUpDownSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="thumbs-up-down-solid-sharp IconThumbsUpDownSolidSharp"
    >
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

export const iconPackOfThumbsUpDown: TheIconSelfPack = {
  name: 'ThumbsUpDown',
  StrokeRounded: IconThumbsUpDownStrokeRounded,
  DuotoneRounded: IconThumbsUpDownDuotoneRounded,
  TwotoneRounded: IconThumbsUpDownTwotoneRounded,
  SolidRounded: IconThumbsUpDownSolidRounded,
  BulkRounded: IconThumbsUpDownBulkRounded,
  StrokeSharp: IconThumbsUpDownStrokeSharp,
  SolidSharp: IconThumbsUpDownSolidSharp,
};