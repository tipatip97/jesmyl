import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11.5 10H6.5C4.62513 10 3.6877 10 3.03054 10.4775C2.8183 10.6317 2.63166 10.8183 2.47746 11.0305C2 11.6877 2 12.6251 2 14.5C2 16.3749 2 17.3123 2.47746 17.9695C2.63166 18.1817 2.8183 18.3683 3.03054 18.5225C3.6877 19 4.62513 19 6.5 19H17.5C19.3749 19 20.3123 19 20.9695 18.5225C21.1817 18.3683 21.3683 18.1817 21.5225 17.9695C22 17.3123 22 16.3749 22 14.5C22 12.6251 22 11.6877 21.5225 11.0305C21.3683 10.8183 21.1817 10.6317 20.9695 10.4775C20.5172 10.1488 19.9321 10.0464 19 10.0145',
  d2: 'M5.49981 13.5H5.50879',
  d3: 'M6.5 19L5 22',
  d4: 'M17.5 19L19 22',
  d5: 'M12.5 5L11.5 4M19.5 4L18.5 5M15.5 4V2',
  d6: 'M12 10.001L11.5 10H6.5C4.62513 10 3.6877 10 3.03054 10.4775C2.8183 10.6317 2.63166 10.8183 2.47746 11.0305C2 11.6877 2 12.6251 2 14.5C2 16.3749 2 17.3123 2.47746 17.9695C2.63166 18.1817 2.8183 18.3683 3.03054 18.5225C3.6877 19 4.62513 19 6.5 19H17.5C19.3749 19 20.3123 19 20.9695 18.5225C21.1817 18.3683 21.3683 18.1817 21.5225 17.9695C22 17.3123 22 16.3749 22 14.5C22 12.6251 22 11.6877 21.5225 11.0305C21.3683 10.8183 21.1817 10.6317 20.9695 10.4775C20.5172 10.1488 19.9321 10.0464 19 10.0145C18.9922 11.9408 17.4282 13.5 15.5 13.5C13.5673 13.5 12.0005 11.9335 12 10.001Z',
  d7: 'M9.47354 9.26553C9.4127 9.25 9.32413 9.25 9.14699 9.25H6.45756H6.45754C5.55614 9.24999 4.81917 9.24997 4.22777 9.31405C2.58407 9.49213 1.48874 10.6148 1.31397 12.2278C1.2499 12.8192 1.24991 13.5562 1.24993 14.4576C1.24993 14.5785 1.24946 14.6996 1.24899 14.8208C1.24647 15.4716 1.24393 16.1257 1.31397 16.7722C1.49206 18.4159 2.61468 19.5112 4.22778 19.686C4.81918 19.75 5.55616 19.75 6.45759 19.75H17.5423C18.4437 19.75 19.1807 19.75 19.7721 19.686C21.4158 19.5079 22.5111 18.3852 22.6859 16.7722C22.7559 16.1257 22.7534 15.4716 22.7509 14.8208C22.7504 14.6996 22.7499 14.5785 22.7499 14.4576C22.7499 14.3356 22.7507 14.2119 22.7514 14.0872C22.7608 12.5578 22.7711 10.8594 21.4102 9.8707L21.3958 9.86032C21.2896 9.78418 21.1499 9.86935 21.1499 10.0001C21.1499 13.1205 18.6203 15.6501 15.4999 15.6501C12.3795 15.6501 9.8499 13.1205 9.8499 10.0001C9.8499 9.7915 9.8499 9.68721 9.83438 9.62636C9.78514 9.43343 9.66648 9.31476 9.47354 9.26553ZM4.99988 12C4.44759 12 3.99988 12.4477 3.99988 13C3.99988 13.5523 4.44759 14 4.99988 14H5.00886C5.56114 14 6.00886 13.5523 6.00886 13C6.00886 12.4477 5.56114 12 5.00886 12H4.99988Z',
  d8: 'M15.5 5.75C13.1528 5.75 11.25 7.65279 11.25 10C11.25 12.3472 13.1528 14.25 15.5 14.25C17.8472 14.25 19.75 12.3472 19.75 10C19.75 7.65279 17.8472 5.75 15.5 5.75Z',
  d9: 'M6.94743 18.1058C7.44141 18.3528 7.64164 18.9535 7.39465 19.4474L5.89465 22.4474C5.64766 22.9414 5.04698 23.1416 4.55301 22.8946C4.05903 22.6477 3.8588 22.047 4.10579 21.553L5.60579 18.553C5.85278 18.059 6.45345 17.8588 6.94743 18.1058Z',
  d10: 'M17.0528 18.1058C16.5588 18.3528 16.3586 18.9535 16.6056 19.4474L18.1056 22.4474C18.3526 22.9414 18.9533 23.1416 19.4472 22.8946C19.9412 22.6477 20.1414 22.047 19.8945 21.553L18.3945 18.553C18.1475 18.059 17.5468 17.8588 17.0528 18.1058Z',
  d11: 'M15.5 1C16.0523 1 16.5 1.44772 16.5 2V4C16.5 4.55228 16.0523 5 15.5 5C14.9477 5 14.5 4.55228 14.5 4V2C14.5 1.44772 14.9477 1 15.5 1ZM10.7929 3.29289C11.1834 2.90237 11.8166 2.90237 12.2071 3.29289L13.2071 4.29289C13.5976 4.68342 13.5976 5.31658 13.2071 5.70711C12.8166 6.09763 12.1834 6.09763 11.7929 5.70711L10.7929 4.70711C10.4024 4.31658 10.4024 3.68342 10.7929 3.29289ZM18.7929 3.29289C19.1834 2.90237 19.8166 2.90237 20.2071 3.29289C20.5976 3.68342 20.5976 4.31658 20.2071 4.70711L19.2071 5.70711C18.8166 6.09763 18.1834 6.09763 17.7929 5.70711C17.4024 5.31658 17.4024 4.68342 17.7929 4.29289L18.7929 3.29289Z',
  d12: 'M9.14699 9.25C9.32413 9.25 9.4127 9.25 9.47354 9.26553C9.66648 9.31476 9.78514 9.43343 9.83438 9.62636C9.8499 9.68721 9.8499 9.7915 9.8499 10.0001C9.8499 13.1205 12.3795 15.6501 15.4999 15.6501C18.6203 15.6501 21.1499 13.1205 21.1499 10.0001C21.1499 9.86935 21.2896 9.78418 21.3958 9.86032C21.4007 9.86376 21.4054 9.86722 21.4102 9.8707C22.8821 10.9401 22.75 12.8396 22.7499 14.4576C22.7499 15.2277 22.769 16.0053 22.6859 16.7722C22.5111 18.3852 21.4158 19.5079 19.7721 19.686C19.1807 19.75 18.4437 19.75 17.5423 19.75H6.45759C5.55616 19.75 4.81918 19.75 4.22778 19.686C2.61468 19.5112 1.49206 18.4159 1.31397 16.7722C1.23089 16.0053 1.24993 15.2277 1.24993 14.4576C1.24991 13.5562 1.2499 12.8192 1.31397 12.2278C1.48874 10.6148 2.58407 9.49213 4.22777 9.31405C4.81917 9.24997 5.55615 9.24999 6.45756 9.25H9.14699Z',
  d13: 'M4 13C4 12.4477 4.44772 12 5 12H5.00898C5.56127 12 6.00898 12.4477 6.00898 13C6.00898 13.5523 5.56127 14 5.00898 14H5C4.44772 14 4 13.5523 4 13Z',
  d14: 'M16.7566 19.75H17.5423C18.0808 19.75 18.5607 19.75 18.9859 19.7363L19.8942 21.553C20.1412 22.047 19.941 22.6476 19.447 22.8946C18.953 23.1416 18.3523 22.9414 18.1054 22.4474L16.7566 19.75ZM5.01411 19.7363C5.43927 19.75 5.91908 19.75 6.45759 19.75H7.24336L5.89465 22.4474C5.64766 22.9414 5.04698 23.1416 4.55301 22.8946C4.05903 22.6476 3.8588 22.047 4.10579 21.553L5.01411 19.7363Z',
  d15: 'M16.5 2C16.5 1.44772 16.0523 1 15.5 1C14.9477 1 14.5 1.44772 14.5 2V4C14.5 4.55228 14.9477 5 15.5 5C16.0523 5 16.5 4.55228 16.5 4V2ZM12.2071 3.29289C11.8166 2.90237 11.1834 2.90237 10.7929 3.29289C10.4024 3.68342 10.4024 4.31658 10.7929 4.70711L11.7929 5.70711C12.1834 6.09763 12.8166 6.09763 13.2071 5.70711C13.5976 5.31658 13.5976 4.68342 13.2071 4.29289L12.2071 3.29289ZM20.2071 3.29289C19.8166 2.90237 19.1834 2.90237 18.7929 3.29289L17.7929 4.29289C17.4024 4.68342 17.4024 5.31658 17.7929 5.70711C18.1834 6.09763 18.8166 6.09763 19.2071 5.70711L20.2071 4.70711C20.5976 4.31658 20.5976 3.68342 20.2071 3.29289ZM11.25 10C11.25 7.65279 13.1528 5.75 15.5 5.75C17.8472 5.75 19.75 7.65279 19.75 10C19.75 12.3472 17.8472 14.25 15.5 14.25C13.1528 14.25 11.25 12.3472 11.25 10Z',
  d16: 'M12 10H2V19L22 19V10H19',
  d17: 'M12.5 5L11 3.5M20 3.5L18.5 5M15.5 4V2',
  d18: 'M10 9.75C10 9.4956 10.0173 9.24523 10.0507 9H2C1.58579 9 1.25 9.33579 1.25 9.75V18.75C1.25 19.1642 1.58579 19.5 2 19.5L22 19.5C22.1989 19.5 22.3897 19.421 22.5303 19.2803C22.671 19.1397 22.75 18.9489 22.75 18.75V9.75C22.75 9.33579 22.4142 9 22 9H20.9493C20.9827 9.24523 21 9.4956 21 9.75C21 12.7876 18.5376 15.25 15.5 15.25C12.4624 15.25 10 12.7876 10 9.75ZM6.5 12.25H4.5V14.25H6.5V12.25Z',
  d19: 'M11.25 9.75C11.25 7.40279 13.1528 5.5 15.5 5.5C17.8472 5.5 19.75 7.40279 19.75 9.75C19.75 12.0972 17.8472 14 15.5 14C13.1528 14 11.25 12.0972 11.25 9.75Z',
  d20: 'M4.10547 21.3556L5.60547 18.3556L7.39432 19.25L5.89432 22.25L4.10547 21.3556ZM18.1055 22.25L16.6055 19.25L18.3943 18.3556L19.8943 21.3556L18.1055 22.25Z',
  d21: 'M16.5001 1.75V3.75H14.5001V1.75H16.5001ZM11.7072 2.54289L13.2072 4.04289L11.793 5.45711L10.293 3.95711L11.7072 2.54289ZM17.793 4.04289L19.293 2.54289L20.7072 3.95711L19.2072 5.45711L17.793 4.04289Z',
} as const;

export const IconProjector01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="projector-01-stroke-rounded IconProjector01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="15.5" 
        cy="10" 
        r="3.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconProjector01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="projector-01-duotone-rounded IconProjector01DuotoneRounded"
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
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="15.5" 
        cy="10" 
        r="3.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconProjector01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="projector-01-twotone-rounded IconProjector01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="15.5" 
        cy="10" 
        r="3.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconProjector01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="projector-01-solid-rounded IconProjector01SolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconProjector01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="projector-01-bulk-rounded IconProjector01BulkRounded"
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

export const IconProjector01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="projector-01-stroke-sharp IconProjector01StrokeSharp"
    >
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="15.5" 
        cy="10" 
        r="3.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
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
    </TheIconWrapper>
  );
};

export const IconProjector01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="projector-01-solid-sharp IconProjector01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfProjector01: TheIconSelfPack = {
  name: 'Projector01',
  StrokeRounded: IconProjector01StrokeRounded,
  DuotoneRounded: IconProjector01DuotoneRounded,
  TwotoneRounded: IconProjector01TwotoneRounded,
  SolidRounded: IconProjector01SolidRounded,
  BulkRounded: IconProjector01BulkRounded,
  StrokeSharp: IconProjector01StrokeSharp,
  SolidSharp: IconProjector01SolidSharp,
};