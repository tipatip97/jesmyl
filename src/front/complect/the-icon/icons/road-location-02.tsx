import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18.5 15.082L16.5 15.082M13 15.082L11 15.082M7.5 15.082L5.5 15.082',
  d2: 'M16 5.93261C16 8.60703 13.0435 10.548 12.214 11.0244C12.0802 11.1012 11.9198 11.1012 11.786 11.0244C10.9565 10.548 8 8.60703 8 5.93261C8 3.88203 9.79086 2.08203 12 2.08203C14.2091 2.08203 16 3.88203 16 5.93261Z',
  d3: 'M12 6.08203H12.009',
  d4: 'M19 8.08203C19.7745 8.23191 20.3588 8.48205 20.8284 8.89953C22 9.94106 22 11.6174 22 14.97C22 18.3227 22 19.999 20.8284 21.0405C19.6569 22.082 17.7712 22.082 14 22.082H10C6.22876 22.082 4.34315 22.082 3.17157 21.0405C2 19.999 2 18.3226 2 14.97C2 11.6174 2 9.94106 3.17157 8.89952C3.64118 8.48205 4.2255 8.23191 5 8.08203',
  d5: 'M8.59055 8.00195C5.73908 8.01772 4.18709 8.13608 3.17157 9.02466C2 10.0498 2 11.6997 2 14.9995C2 18.2994 2 19.9493 3.17157 20.9744C4.34314 21.9995 6.22876 21.9995 10 21.9995H14C17.7712 21.9995 19.6569 21.9995 20.8284 20.9744C22 19.9493 22 18.2994 22 14.9995C22 11.6997 22 10.0498 20.8284 9.02466C19.8129 8.13608 18.2609 8.01772 15.4094 8.00195C14.5027 9.58417 12.8097 10.6818 12.214 11.0239C12.0802 11.1008 11.9198 11.1008 11.786 11.0239C11.1903 10.6818 9.49735 9.58417 8.59055 8.00195Z',
  d6: 'M4.97342 7.26782C5.50332 7.16618 6.01602 7.50959 6.11856 8.03487C6.22111 8.56014 5.87466 9.06837 5.34476 9.17001C4.69971 9.29375 4.30985 9.48078 4.02153 9.73486C3.67982 10.036 3.45999 10.4482 3.33668 11.2565C3.20716 12.1054 3.20455 13.237 3.20455 14.8916C3.20455 16.5462 3.20716 17.6777 3.33668 18.5266C3.45999 19.3349 3.67982 19.7472 4.02153 20.0483C4.37975 20.364 4.89663 20.5777 5.8721 20.6932C6.86504 20.8109 8.17806 20.8125 10.0455 20.8125H13.9545C15.8219 20.8125 17.135 20.8109 18.1279 20.6932C19.1034 20.5777 19.6202 20.364 19.9785 20.0483C20.3202 19.7472 20.54 19.3349 20.6633 18.5266C20.7928 17.6777 20.7955 16.5462 20.7955 14.8916C20.7955 13.237 20.7928 12.1054 20.6633 11.2565C20.54 10.4482 20.3202 10.036 19.9785 9.73486C19.6901 9.48078 19.3003 9.29375 18.6552 9.17001C18.1253 9.06837 17.7789 8.56014 17.8814 8.03487C17.984 7.50959 18.4967 7.16618 19.0266 7.26782C19.8953 7.43447 20.6476 7.73208 21.2771 8.28685C22.0803 8.99469 22.433 9.89888 22.5959 10.9668C22.7501 11.9774 22.75 13.2562 22.75 14.8144V14.9686C22.75 16.5269 22.7501 17.8057 22.5959 18.8164C22.433 19.8843 22.0803 20.7885 21.2771 21.4963C20.4904 22.1896 19.5134 22.4804 18.3599 22.617C17.2373 22.75 15.8071 22.75 14.0191 22.75H9.9809C8.19294 22.75 6.76272 22.75 5.64014 22.617C4.48661 22.4804 3.50964 22.1896 2.72291 21.4963C1.91968 20.7885 1.56703 19.8843 1.40411 18.8164C1.24993 17.8058 1.24996 16.5269 1.25 14.9687V14.8144C1.24996 13.2562 1.24993 11.9774 1.40411 10.9668C1.56703 9.89888 1.91968 8.99469 2.72291 8.28685C3.35245 7.73208 4.10468 7.43447 4.97342 7.26782Z',
  d7: 'M5 15C5 14.4477 5.44772 14 6 14L7 14C7.55228 14 8 14.4477 8 15C8 15.5523 7.55228 16 7 16H6C5.44772 16 5 15.5523 5 15ZM10.5 15C10.5 14.4477 10.9477 14 11.5 14L12.5 14C13.0523 14 13.5 14.4477 13.5 15C13.5 15.5523 13.0523 16 12.5 16H11.5C10.9477 16 10.5 15.5523 10.5 15ZM16 15C16 14.4477 16.4477 14 17 14L18 14C18.5523 14 19 14.4477 19 15C19 15.5523 18.5523 16 18 16H17C16.4477 16 16 15.5523 16 15Z',
  d8: 'M11.9902 1.25C9.38433 1.25 7.24023 3.36855 7.24023 5.85058C7.24023 7.4688 8.13036 8.80059 9.03079 9.73978C9.94065 10.6888 10.9529 11.3344 11.4027 11.5927C11.7678 11.8024 12.2127 11.8024 12.5778 11.5927C13.0276 11.3344 14.0398 10.6888 14.9497 9.73978C15.8501 8.80059 16.7402 7.4688 16.7402 5.85058C16.7402 3.36855 14.5961 1.25 11.9902 1.25ZM11.9824 4.16797C11.0202 4.16797 10.2402 4.95147 10.2402 5.91797C10.2402 6.88447 11.0202 7.66797 11.9824 7.66797H11.9981C12.9602 7.66797 13.7402 6.88447 13.7402 5.91797C13.7402 4.95147 12.9602 4.16797 11.9981 4.16797H11.9824Z',
  d9: 'M6.11857 8.03487C6.01602 7.50959 5.50332 7.16618 4.97342 7.26782C4.10468 7.43447 3.35245 7.73208 2.72291 8.28685C1.91968 8.99469 1.56704 9.89888 1.40411 10.9668C1.24993 11.9774 1.24996 13.2562 1.25 14.8144V14.9687C1.24996 16.5269 1.24993 17.8058 1.40411 18.8164C1.56703 19.8843 1.91968 20.7885 2.72291 21.4963C3.50964 22.1896 4.48661 22.4804 5.64014 22.617C6.76272 22.75 8.19294 22.75 9.9809 22.75H14.0191C15.8071 22.75 17.2373 22.75 18.3599 22.617C19.5134 22.4804 20.4904 22.1896 21.2771 21.4963C22.0803 20.7885 22.433 19.8843 22.5959 18.8164C22.7501 17.8057 22.75 16.5269 22.75 14.9686V14.8144C22.75 13.2562 22.7501 11.9774 22.5959 10.9668C22.433 9.89888 22.0803 8.99469 21.2771 8.28685C20.6476 7.73208 19.8953 7.43447 19.0266 7.26782C18.4967 7.16618 17.984 7.50959 17.8814 8.03487C17.7789 8.56014 18.1253 9.06837 18.6552 9.17001C19.3003 9.29375 19.6901 9.48078 19.9785 9.73486C20.3202 10.036 20.54 10.4482 20.6633 11.2565C20.7928 12.1054 20.7955 13.237 20.7955 14.8916C20.7955 16.5462 20.7928 17.6777 20.6633 18.5266C20.54 19.3349 20.3202 19.7472 19.9785 20.0483C19.6203 20.364 19.1034 20.5777 18.1279 20.6932C17.135 20.8109 15.8219 20.8125 13.9545 20.8125H10.0455C8.17806 20.8125 6.86504 20.8109 5.8721 20.6932C4.89663 20.5777 4.37975 20.364 4.02153 20.0483C3.67982 19.7472 3.45999 19.3349 3.33668 18.5266C3.20716 17.6777 3.20455 16.5462 3.20455 14.8916C3.20455 13.237 3.20716 12.1054 3.33668 11.2565C3.45999 10.4482 3.67982 10.036 4.02153 9.73486C4.30985 9.48078 4.69971 9.29375 5.34476 9.17001C5.87467 9.06837 6.22111 8.56014 6.11857 8.03487ZM6 14C5.44772 14 5 14.4477 5 15C5 15.5523 5.44772 16 6 16H7C7.55229 16 8 15.5523 8 15C8 14.4477 7.55229 14 7 14H6ZM11.5 14C10.9477 14 10.5 14.4477 10.5 15C10.5 15.5523 10.9477 16 11.5 16H12.5C13.0523 16 13.5 15.5523 13.5 15C13.5 14.4477 13.0523 14 12.5 14H11.5ZM17 14C16.4477 14 16 14.4477 16 15C16 15.5523 16.4477 16 17 16H18C18.5523 16 19 15.5523 19 15C19 14.4477 18.5523 14 18 14H17Z',
  d10: 'M12 2C9.79086 2 8 3.80892 8 6.04033C8 7.31626 8.5 8.30834 9.5 9.1945C10.2049 9.81911 11.4873 11.159 12 11.9999C12.5386 11.1757 13.7951 9.81911 14.5 9.1945C15.5 8.30834 16 7.31626 16 6.04033C16 3.80892 14.2091 2 12 2Z',
  d11: 'M19 15H16M13.5 15H10.5M8 15H5',
  d12: 'M18 8L22 8V22H2L2 8L6 8',
  d13: 'M11.9922 1.25C9.36176 1.25 7.24219 3.40181 7.24219 6.04033C7.24219 7.55919 7.85661 8.74722 8.99477 9.75581C9.681 10.3639 10.8974 11.645 11.3518 12.3903C11.4858 12.6101 11.7231 12.7458 11.9804 12.7498C12.2378 12.7539 12.4792 12.6257 12.62 12.4102C13.111 11.6589 14.3168 10.352 14.9896 9.75581C16.1278 8.74722 16.7422 7.55919 16.7422 6.04033C16.7422 3.40181 14.6226 1.25 11.9922 1.25ZM11.9844 4.33154C11.0222 4.33154 10.2422 5.11504 10.2422 6.08154C10.2422 7.04804 11.0222 7.83154 11.9844 7.83154H12C12.9622 7.83154 13.7422 7.04804 13.7422 6.08154C13.7422 5.11504 12.9622 4.33154 12 4.33154H11.9844Z',
  d14: 'M4.99219 14H7.99219V16H4.99219V14ZM10.4922 14H13.4922V16H10.4922V14ZM15.9922 14H18.9922V16H15.9922V14Z',
  d15: 'M1.25 8.21875C1.25 7.68372 1.68754 7.25 2.22727 7.25L6.13636 7.25V9.1875L3.20455 9.1875L3.20455 20.8125H20.7955V9.1875L17.8636 9.1875V7.25L21.7727 7.25C22.3125 7.25 22.75 7.68372 22.75 8.21875V21.7812C22.75 22.3163 22.3125 22.75 21.7727 22.75H2.22727C1.96808 22.75 1.71951 22.6479 1.53624 22.4663C1.35296 22.2846 1.25 22.0382 1.25 21.7812L1.25 8.21875Z',
} as const;

export const IconRoadLocation02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="road-location-02-stroke-rounded IconRoadLocation02StrokeRounded"
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

export const IconRoadLocation02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="road-location-02-duotone-rounded IconRoadLocation02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconRoadLocation02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="road-location-02-twotone-rounded IconRoadLocation02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRoadLocation02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="road-location-02-solid-rounded IconRoadLocation02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRoadLocation02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="road-location-02-bulk-rounded IconRoadLocation02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRoadLocation02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="road-location-02-stroke-sharp IconRoadLocation02StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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

export const IconRoadLocation02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="road-location-02-solid-sharp IconRoadLocation02SolidSharp"
    >
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

export const iconPackOfRoadLocation02: TheIconSelfPack = {
  name: 'RoadLocation02',
  StrokeRounded: IconRoadLocation02StrokeRounded,
  DuotoneRounded: IconRoadLocation02DuotoneRounded,
  TwotoneRounded: IconRoadLocation02TwotoneRounded,
  SolidRounded: IconRoadLocation02SolidRounded,
  BulkRounded: IconRoadLocation02BulkRounded,
  StrokeSharp: IconRoadLocation02StrokeSharp,
  SolidSharp: IconRoadLocation02SolidSharp,
};