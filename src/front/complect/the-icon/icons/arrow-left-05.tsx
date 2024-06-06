import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4 5.99951L4.00003 18.0002',
  d2: 'M12.4968 12.0109V12.3814C12.5373 15.3525 12.4024 16.3847 11.1518 15.9055L10.8438 15.7236L10.5952 15.5508L10.06 15.1378L9.05958 14.2685L8.03669 13.4047L7.53669 12.9516L7.31404 12.7251L7.05187 12.346L6.99805 12.0097L7.05187 11.6757L7.31404 11.2967L7.53669 11.0701L8.03669 10.617L9.05958 9.75323L10.06 8.8839L10.5952 8.47091L10.8438 8.29813L11.1518 8.11621C12.4024 7.63699 12.5373 8.66922 12.4968 11.6403V12.0109ZM12.4968 12.0109H19.9997',
  d3: 'M8.2963 10.3974L9.1822 9.63612C10.6175 8.40264 11.3352 7.7859 11.9176 8.06721C12.5 8.34853 12.5 9.31191 12.5 11.2387V12.7613C12.5 14.6881 12.5 15.6515 11.9176 15.9328C11.3352 16.2141 10.6175 15.5974 9.1822 14.3639L8.29631 13.6026C7.4321 12.8599 7 12.4885 7 12C7 11.5115 7.4321 11.1401 8.2963 10.3974Z',
  d4: 'M4 6L4.00003 18',
  d5: 'M12.4968 12.0111V12.3811C12.5374 15.3521 12.4024 16.3851 11.1518 15.9051L10.8438 15.7241L10.5952 15.5511L10.06 15.1381L9.05958 14.2682L8.03669 13.4051L7.53669 12.9521L7.31404 12.7251L7.05187 12.3461L6.99805 12.0101L7.05187 11.6761L7.31404 11.2971L7.53669 11.0701L8.03669 10.6172L9.05958 9.75314L10.06 8.88415L10.5952 8.47112L10.8438 8.29815L11.1518 8.11614C12.4024 7.63714 12.5374 8.66913 12.4968 11.6401V12.0111ZM12.4968 12.0111H19.9997',
  d6: 'M4.75 6C4.75 5.58579 4.41421 5.25 4 5.25C3.58579 5.25 3.25 5.58579 3.25 6L4.75 6ZM3.25 18C3.25 18.4142 3.58579 18.75 4 18.75C4.41421 18.75 4.75 18.4142 4.75 18L3.25 18ZM3.25 6L3.25 18L4.75 18L4.75 6L3.25 6Z',
  d7: 'M9.1822 9.63612L8.69337 9.06731L8.69337 9.06731L9.1822 9.63612ZM8.2963 10.3974L8.78513 10.9663L8.78513 10.9663L8.2963 10.3974ZM8.29631 13.6026L7.80748 14.1714V14.1714L8.29631 13.6026ZM9.1822 14.3639L8.69338 14.9327L9.1822 14.3639ZM12.5 12.7613H13.25H12.5ZM12.5 11.2387H11.75H12.5ZM11.9176 15.9328L11.5914 15.2574L11.5914 15.2574L11.9176 15.9328ZM11.9176 8.06721L11.5914 8.74256L11.5914 8.74256L11.9176 8.06721ZM12.5 11.25C12.0858 11.25 11.75 11.5858 11.75 12C11.75 12.4142 12.0858 12.75 12.5 12.75V11.25ZM20 12.75C20.4142 12.75 20.75 12.4142 20.75 12C20.75 11.5858 20.4142 11.25 20 11.25V12.75ZM8.69337 9.06731L7.80748 9.82864L8.78513 10.9663L9.67103 10.2049L8.69337 9.06731ZM7.80748 14.1714L8.69338 14.9327L9.67103 13.7951L8.78513 13.0337L7.80748 14.1714ZM8.69338 14.9327C9.39142 15.5326 9.97923 16.0403 10.4686 16.3501C10.9453 16.6518 11.5801 16.9287 12.2438 16.6081L11.5914 15.2574C11.6726 15.2182 11.6575 15.3274 11.2709 15.0827C10.897 14.846 10.4083 14.4287 9.67103 13.7951L8.69338 14.9327ZM11.75 12.7613C11.75 13.7494 11.7482 14.4076 11.6845 14.8595C11.6182 15.3302 11.521 15.2914 11.5914 15.2574L12.2438 16.6081C12.8966 16.2928 13.0906 15.6317 13.1699 15.0687C13.2518 14.4868 13.25 13.7 13.25 12.7613H11.75ZM7.80748 9.82864C7.39277 10.185 7.01935 10.5036 6.75982 10.8C6.48551 11.1132 6.25 11.4984 6.25 12H7.75C7.75 11.9961 7.7492 11.9895 7.76 11.9665C7.77427 11.9361 7.80818 11.8796 7.88833 11.7881C8.0609 11.591 8.33564 11.3526 8.78513 10.9663L7.80748 9.82864ZM8.78513 13.0337C8.33564 12.6474 8.0609 12.409 7.88833 12.2119C7.80818 12.1204 7.77427 12.0639 7.76 12.0335C7.7492 12.0105 7.75 12.0039 7.75 12H6.25C6.25 12.5016 6.48551 12.8868 6.75982 13.2C7.01935 13.4964 7.39277 13.815 7.80748 14.1714L8.78513 13.0337ZM9.67103 10.2049C10.4083 9.57134 10.897 9.15399 11.2709 8.91734C11.6575 8.67263 11.6726 8.7818 11.5914 8.74256L12.2438 7.39187C11.5801 7.07131 10.9453 7.3482 10.4686 7.6499C9.97923 7.95966 9.39142 8.46743 8.69337 9.06731L9.67103 10.2049ZM13.25 11.2387C13.25 10.3 13.2518 9.51315 13.1699 8.93129C13.0906 8.36832 12.8966 7.70719 12.2438 7.39187L11.5914 8.74256C11.521 8.70856 11.6182 8.66977 11.6845 9.14051C11.7482 9.59237 11.75 10.2506 11.75 11.2387H13.25ZM13.25 12.7613V11.2387H11.75V12.7613H13.25ZM12.5 12.75H20V11.25H12.5V12.75Z',
  d8: 'M4 5C4.55228 5 5 5.44772 5 6L5 18C5 18.5523 4.55228 19 4 19C3.44771 19 3 18.5523 3 18L3 6C3 5.44772 3.44772 5 4 5Z',
  d9: 'M20.0001 11.0004C20.5524 11.0004 21.0001 11.4481 21.0001 12.0004C21.0001 12.5527 20.5524 13.0004 20.0001 13.0004L13 13.0004L13 14.0873C13.0002 14.4666 13.0003 14.8599 12.9523 15.1717C12.901 15.505 12.7447 16.0844 12.136 16.37C11.5337 16.6526 10.995 16.412 10.7026 16.2367C10.4349 16.0763 10.1375 15.8276 9.85386 15.5904L9.80684 15.5511C9.2337 15.0722 8.58598 14.4986 8.07369 13.9529C7.81903 13.6817 7.57512 13.3935 7.38867 13.1093C7.22743 12.8635 7 12.4621 7 12C7 11.5379 7.22743 11.1366 7.38867 10.8908C7.57511 10.6066 7.81902 10.3184 8.07367 10.0471C8.58596 9.50146 9.23367 8.92787 9.8068 8.44896L9.85382 8.40965C10.1375 8.17242 10.4348 7.92375 10.7025 7.76333C10.995 7.58805 11.5337 7.34739 12.136 7.62998C12.7447 7.91554 12.901 8.49501 12.9523 8.82833C13.0003 9.14007 13.0001 9.53339 13 9.91274L13 11.0004L20.0001 11.0004Z',
  d10: 'M3.99902 6L3.99902 18',
  d11: 'M11.999 12L19.999 12',
  d12: 'M6.99902 12L11.999 16L11.999 8L6.99902 12Z',
  d13: 'M3.5 18L3.5 6L5.5 6L5.5 18H3.5Z',
  d14: 'M13.4506 11L20.5 11V13L13.4506 13L13.4505 17.5L7.5 11.9999L13.4506 6.5L13.4506 11Z',
};

export const IconArrowLeft05StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-left-05-stroke-rounded IconArrowLeft05StrokeRounded"
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

export const IconArrowLeft05DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-left-05-duotone-rounded IconArrowLeft05DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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

export const IconArrowLeft05TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-left-05-twotone-rounded IconArrowLeft05TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowLeft05SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-left-05-solid-rounded IconArrowLeft05SolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconArrowLeft05BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-left-05-bulk-rounded IconArrowLeft05BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowLeft05StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-left-05-stroke-sharp IconArrowLeft05StrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowLeft05SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-left-05-solid-sharp IconArrowLeft05SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfArrowLeft05: TheIconSelfPack = {
  name: 'ArrowLeft05',
  StrokeRounded: IconArrowLeft05StrokeRounded,
  DuotoneRounded: IconArrowLeft05DuotoneRounded,
  TwotoneRounded: IconArrowLeft05TwotoneRounded,
  SolidRounded: IconArrowLeft05SolidRounded,
  BulkRounded: IconArrowLeft05BulkRounded,
  StrokeSharp: IconArrowLeft05StrokeSharp,
  SolidSharp: IconArrowLeft05SolidSharp,
};