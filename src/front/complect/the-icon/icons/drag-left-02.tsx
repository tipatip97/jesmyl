import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8.50768 13.6528L10.4781 15.3722V6.50065C10.4781 5.67186 11.1513 5 11.9817 5C12.8116 5 13.4846 5.67107 13.4853 6.49935L13.4885 11.263L16.1301 11.6903C17.8352 11.9492 18.6878 12.0786 19.2883 12.4427C20.2802 13.0441 20.9988 14 20.9988 15.2657C20.9988 16.1841 20.7746 16.8002 20.2293 18.4556C19.8833 19.5059 19.7104 20.0311 19.4283 20.4469C18.9639 21.1313 18.2788 21.6311 17.4903 21.8605C17.0114 21.9999 16.4644 21.9999 15.3703 21.9999H14.443C12.9885 21.9999 12.2612 21.9999 11.6138 21.7298C11.4977 21.6814 11.3843 21.6267 11.2739 21.566C10.6585 21.2278 10.2 20.6566 9.28274 19.5142L6.31351 15.8158C5.85724 15.2474 5.85419 14.4341 6.3062 13.8622C6.84948 13.175 7.84737 13.08 8.50768 13.6528Z',
  d2: 'M13.9229 9.5C15.155 8.81764 15.9889 7.50601 15.9889 6C15.9889 3.79086 14.1945 2 11.981 2C9.76754 2 7.97314 3.79086 7.97314 6C7.97314 7.50601 8.80708 8.81764 10.0392 9.5',
  d3: 'M7.81799 6.02265H3.00146M3.00146 6.02265C3.00146 6.49277 3.51571 6.71697 3.83751 7.01135L5.01766 8.00993M3.00146 6.02265C3.00146 5.55252 3.5238 5.29858 3.83751 5.00137L5.01766 3.98999',
  d4: 'M8.51382 13.6528L10.4833 15.3722V6.50065C10.4833 5.67186 11.1562 5 11.9862 5C12.8157 5 13.4884 5.67107 13.4891 6.49935L13.4924 11.263L16.1327 11.6903C17.837 11.9492 18.6892 12.0786 19.2894 12.4427C20.2809 13.0441 20.9991 14 20.9991 15.2657C20.9991 16.1841 20.775 16.8002 20.23 18.4556C19.8842 19.5059 19.7113 20.0311 19.4294 20.4469C18.9652 21.1313 18.2803 21.6311 17.4923 21.8605C17.0135 21.9999 16.4668 21.9999 15.3733 21.9999H14.4464C12.9925 21.9999 12.2656 21.9999 11.6185 21.7298C11.5025 21.6814 11.3891 21.6267 11.2787 21.566C10.6636 21.2278 10.2053 20.6566 9.28852 19.5142L6.32068 15.8158C5.86461 15.2474 5.86157 14.4341 6.31337 13.8622C6.85639 13.175 7.85382 13.08 8.51382 13.6528Z',
  d5: 'M13.9264 9.5C15.158 8.81764 15.9915 7.50601 15.9915 6C15.9915 3.79086 14.1979 2 11.9855 2C9.77305 2 7.97949 3.79086 7.97949 6C7.97949 7.50601 8.81303 8.81764 10.0446 9.5',
  d6: 'M7.60456 6.02271H3.00098M3.00098 6.02271C3.14024 6.45808 3.51931 6.72198 3.84365 7.01845L5.03316 8.02414M3.00098 6.02271C3.11433 5.57994 3.52745 5.2935 3.84365 4.99417L5.03316 3.97559',
  d7: 'M8.52896 13.6528L10.4966 15.3722V6.50065C10.4966 5.67186 11.1688 5 11.998 5C12.8267 5 13.4988 5.67107 13.4995 6.49935L13.5027 11.263L16.1405 11.6903C17.8432 11.9492 18.6945 12.0786 19.2942 12.4427C20.2847 13.0441 21.0023 14 21.0023 15.2657C21.0023 16.1841 20.7784 16.8002 20.2339 18.4556C19.8884 19.5059 19.7157 20.0311 19.434 20.4469C18.9703 21.1313 18.2861 21.6311 17.4988 21.8605C17.0205 21.9999 16.4743 21.9999 15.3818 21.9999H14.4558C13.0033 21.9999 12.2771 21.9999 11.6307 21.7298C11.5147 21.6814 11.4015 21.6267 11.2912 21.566C10.6767 21.2278 10.2188 20.6566 9.30291 19.5142L6.33793 15.8158C5.8823 15.2474 5.87926 14.4341 6.33062 13.8622C6.87313 13.175 7.8696 13.08 8.52896 13.6528Z',
  d8: 'M13.9254 9.5C15.1582 8.81764 15.9925 7.50601 15.9925 6C15.9925 3.79086 14.1972 2 11.9825 2C9.7678 2 7.97242 3.79086 7.97242 6C7.97242 7.50601 8.80682 8.81764 10.0396 9.5M7.81719 6.02265H2.99805M2.99805 6.02265C2.99805 6.49277 3.51258 6.71697 3.83455 7.01135L5.01534 8.00993M2.99805 6.02265C2.99805 5.55252 3.52067 5.29858 3.83455 5.00137L5.01534 3.98999',
  d9: 'M9.75 6.62565C9.75 5.38265 10.7576 4.375 12.0006 4.375C13.2429 4.375 14.2502 5.38147 14.2513 6.62371L14.2541 10.7497L16.2801 11.0779C17.1086 11.2039 17.767 11.3041 18.2916 11.4196C18.8261 11.5374 19.2805 11.6827 19.6822 11.9267C20.8364 12.6278 21.75 13.8 21.75 15.3907C21.75 16.375 21.5147 17.0875 21.0618 18.4592L21.0618 18.4592C20.7523 19.4015 20.3947 20.4886 20.0536 20.9924C19.493 21.8202 18.6645 22.4267 17.7083 22.7055C17.1259 22.8753 16.4788 22.8752 15.5015 22.8749H15.5015L14.3038 22.8749C13.0006 22.8754 12.1312 22.8757 11.3442 22.5468C11.2036 22.488 11.0661 22.4216 10.9324 22.348C10.186 21.937 9.6397 21.2547 8.81796 20.2284L5.7583 16.4097C5.08461 15.5689 5.08017 14.3686 5.74748 13.5227C6.5537 12.5008 8.04177 12.3568 9.02546 13.2118L9.0271 13.2132L9.75 13.8452V6.62565Z',
  d10: 'M12 3.125C10.3431 3.125 9 4.46815 9 6.125C9 7.25318 9.62233 8.23739 10.5472 8.7506C11.0301 9.01857 11.2044 9.62729 10.9364 10.1102C10.6684 10.5931 10.0597 10.7674 9.57679 10.4994C8.04224 9.64788 7 8.00884 7 6.125C7 3.36358 9.23858 1.125 12 1.125C14.7614 1.125 17 3.36358 17 6.125C17 8.00884 15.9578 9.64788 14.4232 10.4994C13.9403 10.7674 13.3316 10.5931 13.0636 10.1102C12.7956 9.62729 12.9699 9.01857 13.4528 8.7506C14.3777 8.23739 15 7.25318 15 6.125C15 4.46815 13.6569 3.125 12 3.125Z',
  d11: 'M4.51307 3.55456C4.82813 3.28565 5.30152 3.32305 5.57044 3.6381C5.72316 3.81703 5.77708 4.04702 5.73746 4.26162V5.125H8C8.55228 5.125 9 5.57272 9 6.125C9 6.67728 8.55228 7.125 8 7.125H5.73746V7.9884C5.77708 8.20301 5.72316 8.433 5.57044 8.61193C5.30153 8.92698 4.82813 8.96438 4.51307 8.69547L3.3092 7.66791C3.06116 7.45628 2.82041 7.25086 2.64792 7.0579C2.45842 6.8459 2.24999 6.54052 2.24999 6.12502C2.24999 5.70951 2.45841 5.40413 2.64792 5.19213C2.8204 4.99917 3.06116 4.79376 3.30919 4.58213L3.3092 4.58212L4.51307 3.55456Z',
  d12: 'M9 6.125C9 4.46815 10.3431 3.125 12 3.125C13.6569 3.125 15 4.46815 15 6.125C15 6.88377 14.7185 7.57741 14.2528 8.10644L14.2545 10.5738C14.3119 10.5546 14.3684 10.5298 14.4232 10.4994C15.9578 9.64788 17 8.00884 17 6.125C17 3.36358 14.7614 1.125 12 1.125C9.23858 1.125 7 3.36358 7 6.125C7 8.00884 8.04224 9.64788 9.57679 10.4994C9.63322 10.5307 9.69137 10.556 9.75049 10.5754V8.11015C9.28282 7.58066 9 6.88554 9 6.125Z',
  d13: 'M9.07196 13.5776L11.0373 15.297V6.42545C11.0373 5.59666 11.7088 4.9248 12.537 4.9248C13.3648 4.9248 14.0361 5.59587 14.0368 6.42415L14.04 11.9248H18.0331C19.4129 11.9248 20.5316 13.0441 20.5316 14.4248V19.4247C20.5316 20.8054 19.4129 21.9247 18.0331 21.9247H11.537L6.88343 15.7406C6.42833 15.1722 6.42529 14.3589 6.87613 13.787C7.41802 13.0998 8.41334 13.0048 9.07196 13.5776Z',
  d14: 'M14.473 9.4248C15.7019 8.74244 16.5337 7.43081 16.5337 5.9248C16.5337 3.71566 14.7439 1.9248 12.5362 1.9248C10.3284 1.9248 8.53857 3.71566 8.53857 5.9248C8.53857 7.43081 9.37036 8.74244 10.5993 9.4248',
  d15: 'M8.00868 5.92421H3.12977M5.54658 2.91992L2.53125 5.92421L5.53787 8.93081',
  d16: 'M10.75 6.50065C10.75 5.25765 11.7576 4.25 13.0006 4.25C14.2429 4.25 15.2502 5.25647 15.2513 6.49871L15.2541 11.25H18.5C20.2949 11.25 21.75 12.7051 21.75 14.5V19.4999C21.75 21.2948 20.2949 22.7499 18.5 22.7499H11.6259L6.75058 16.275C6.08458 15.4347 6.08273 14.2403 6.74748 13.3977C7.5537 12.3758 9.04177 12.2318 10.0255 13.0868L10.0271 13.0882L10.75 13.7202V6.50065Z',
  d17: 'M5.78033 2.46973L6.84099 3.53039L5.12132 5.25006H9.31066V6.75006H5.12132L6.84099 8.46973L5.78033 9.53039L2.25 6.00006L5.78033 2.46973Z',
  d18: 'M13 2.75C11.2051 2.75 9.75 4.20507 9.75 6C9.75 7.22264 10.4248 8.2887 11.4259 8.8442L10.6981 10.1558C9.23975 9.34657 8.25 7.78939 8.25 6C8.25 3.37665 10.3766 1.25 13 1.25C15.6234 1.25 17.75 3.37665 17.75 6C17.75 7.78939 16.7602 9.34657 15.3019 10.1558L14.5741 8.8442C15.5752 8.2887 16.25 7.22264 16.25 6C16.25 4.20507 14.7949 2.75 13 2.75Z',
};

export const IconDragLeft02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="drag-left-02-stroke-rounded IconDragLeft02StrokeRounded"
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

export const IconDragLeft02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="drag-left-02-duotone-rounded IconDragLeft02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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

export const IconDragLeft02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="drag-left-02-twotone-rounded IconDragLeft02TwotoneRounded"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDragLeft02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="drag-left-02-solid-rounded IconDragLeft02SolidRounded"
    >
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
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDragLeft02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="drag-left-02-bulk-rounded IconDragLeft02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDragLeft02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="drag-left-02-stroke-sharp IconDragLeft02StrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconDragLeft02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="drag-left-02-solid-sharp IconDragLeft02SolidSharp"
    >
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfDragLeft02: TheIconSelfPack = {
  name: 'DragLeft02',
  StrokeRounded: IconDragLeft02StrokeRounded,
  DuotoneRounded: IconDragLeft02DuotoneRounded,
  TwotoneRounded: IconDragLeft02TwotoneRounded,
  SolidRounded: IconDragLeft02SolidRounded,
  BulkRounded: IconDragLeft02BulkRounded,
  StrokeSharp: IconDragLeft02StrokeSharp,
  SolidSharp: IconDragLeft02SolidSharp,
};