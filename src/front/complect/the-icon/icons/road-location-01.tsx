import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18.5 15L16.5 15M13 15L11 15M7.5 15L5.5 15',
  d2: 'M12 2C9.79086 2 8 3.80892 8 6.04033C8 7.31626 8.5 8.30834 9.5 9.1945C10.2049 9.81911 11.0588 10.8566 11.5714 11.6975C11.8173 12.1008 12.165 12.1008 12.4286 11.6975C12.9672 10.8733 13.7951 9.81911 14.5 9.1945C15.5 8.30834 16 7.31626 16 6.04033C16 3.80892 14.2091 2 12 2Z',
  d3: 'M12 6H12.009',
  d4: 'M19 8C19.7745 8.14988 20.3588 8.40002 20.8284 8.81749C22 9.85903 22 11.5353 22 14.888C22 18.2406 22 19.9169 20.8284 20.9585C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.9585C2 19.9169 2 18.2406 2 14.888C2 11.5353 2 9.85902 3.17157 8.81749C3.64118 8.40002 4.2255 8.14988 5 8',
  d5: 'M8.5013 8.00293C8.7452 8.42787 9.0781 8.8206 9.5 9.19447C10.2049 9.81909 11.0588 10.8565 11.5714 11.6975C11.8173 12.1008 12.165 12.1008 12.4286 11.6975C12.9672 10.8733 13.7951 9.81909 14.5 9.19447C14.9219 8.8206 15.2548 8.42787 15.4987 8.00293C18.2934 8.02073 19.8236 8.14585 20.8284 9.0251C22 10.0502 22 11.7001 22 15C22 18.2998 22 19.9497 20.8284 20.9749C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34314 22 3.17157 20.9748C2 19.9497 2 18.2998 2 15C2 11.7001 2 10.0502 3.17157 9.0251C4.17644 8.14584 5.7066 8.02073 8.5013 8.00293Z',
  d6: 'M4.97342 7.26782C5.50332 7.16618 6.01602 7.50959 6.11856 8.03487C6.22111 8.56014 5.87466 9.06837 5.34476 9.17001C4.69971 9.29375 4.30985 9.48078 4.02153 9.73486C3.67982 10.036 3.45999 10.4482 3.33668 11.2565C3.20716 12.1054 3.20455 13.237 3.20455 14.8916C3.20455 16.5462 3.20716 17.6777 3.33668 18.5266C3.45999 19.3349 3.67982 19.7472 4.02153 20.0483C4.37975 20.364 4.89663 20.5777 5.8721 20.6932C6.86504 20.8109 8.17806 20.8125 10.0455 20.8125H13.9545C15.8219 20.8125 17.135 20.8109 18.1279 20.6932C19.1034 20.5777 19.6202 20.364 19.9785 20.0483C20.3202 19.7472 20.54 19.3349 20.6633 18.5266C20.7928 17.6777 20.7955 16.5462 20.7955 14.8916C20.7955 13.237 20.7928 12.1054 20.6633 11.2565C20.54 10.4482 20.3202 10.036 19.9785 9.73486C19.6901 9.48078 19.3003 9.29375 18.6552 9.17001C18.1253 9.06837 17.7789 8.56014 17.8814 8.03487C17.984 7.50959 18.4967 7.16618 19.0266 7.26782C19.8953 7.43447 20.6476 7.73208 21.2771 8.28685C22.0803 8.99469 22.433 9.89888 22.5959 10.9668C22.7501 11.9774 22.75 13.2562 22.75 14.8144V14.9686C22.75 16.5269 22.7501 17.8057 22.5959 18.8164C22.433 19.8843 22.0803 20.7885 21.2771 21.4963C20.4904 22.1896 19.5134 22.4804 18.3599 22.617C17.2373 22.75 15.8071 22.75 14.0191 22.75H9.9809C8.19294 22.75 6.76272 22.75 5.64014 22.617C4.48661 22.4804 3.50964 22.1896 2.72291 21.4963C1.91968 20.7885 1.56703 19.8843 1.40411 18.8164C1.24993 17.8058 1.24996 16.5269 1.25 14.9687V14.8144C1.24996 13.2562 1.24993 11.9774 1.40411 10.9668C1.56703 9.89888 1.91968 8.99469 2.72291 8.28685C3.35245 7.73208 4.10468 7.43447 4.97342 7.26782Z',
  d7: 'M5 15C5 14.4477 5.44772 14 6 14L7 14C7.55228 14 8 14.4477 8 15C8 15.5523 7.55228 16 7 16H6C5.44772 16 5 15.5523 5 15ZM10.5 15C10.5 14.4477 10.9477 14 11.5 14L12.5 14C13.0523 14 13.5 14.4477 13.5 15C13.5 15.5523 13.0523 16 12.5 16H11.5C10.9477 16 10.5 15.5523 10.5 15ZM16 15C16 14.4477 16.4477 14 17 14L18 14C18.5523 14 19 14.4477 19 15C19 15.5523 18.5523 16 18 16H17C16.4477 16 16 15.5523 16 15Z',
  d8: 'M11.9902 1.25C9.35981 1.25 7.24023 3.40181 7.24023 6.04033C7.24023 7.55919 7.85466 8.74722 8.99282 9.75581C9.6373 10.3269 10.4442 11.3054 10.9213 12.0879C11.1128 12.402 11.4636 12.75 11.9836 12.75C12.4952 12.75 12.848 12.4118 13.0466 12.1078C13.566 11.313 14.352 10.3191 14.9877 9.75581C16.1258 8.74722 16.7402 7.55919 16.7402 6.04033C16.7402 3.40181 14.6207 1.25 11.9902 1.25ZM11.9824 4.25C11.0202 4.25 10.2402 5.0335 10.2402 6C10.2402 6.9665 11.0202 7.75 11.9824 7.75H11.9981C12.9602 7.75 13.7402 6.9665 13.7402 6C13.7402 5.0335 12.9602 4.25 11.9981 4.25H11.9824Z',
  d9: 'M6.11857 8.03487C6.01602 7.50959 5.50332 7.16618 4.97342 7.26782C4.10468 7.43447 3.35245 7.73208 2.72291 8.28685C1.91968 8.99469 1.56704 9.89888 1.40411 10.9668C1.24993 11.9774 1.24996 13.2562 1.25 14.8144V14.9687C1.24996 16.5269 1.24993 17.8058 1.40411 18.8164C1.56703 19.8843 1.91968 20.7885 2.72291 21.4963C3.50964 22.1896 4.48661 22.4804 5.64014 22.617C6.76272 22.75 8.19294 22.75 9.9809 22.75H14.0191C15.8071 22.75 17.2373 22.75 18.3599 22.617C19.5134 22.4804 20.4904 22.1896 21.2771 21.4963C22.0803 20.7885 22.433 19.8843 22.5959 18.8164C22.7501 17.8057 22.75 16.5269 22.75 14.9686V14.8144C22.75 13.2562 22.7501 11.9774 22.5959 10.9668C22.433 9.89888 22.0803 8.99469 21.2771 8.28685C20.6476 7.73208 19.8953 7.43447 19.0266 7.26782C18.4967 7.16618 17.984 7.50959 17.8814 8.03487C17.7789 8.56014 18.1253 9.06837 18.6552 9.17001C19.3003 9.29375 19.6901 9.48078 19.9785 9.73486C20.3202 10.036 20.54 10.4482 20.6633 11.2565C20.7928 12.1054 20.7955 13.237 20.7955 14.8916C20.7955 16.5462 20.7928 17.6777 20.6633 18.5266C20.54 19.3349 20.3202 19.7472 19.9785 20.0483C19.6203 20.364 19.1034 20.5777 18.1279 20.6932C17.135 20.8109 15.8219 20.8125 13.9545 20.8125H10.0455C8.17806 20.8125 6.86504 20.8109 5.8721 20.6932C4.89663 20.5777 4.37975 20.364 4.02153 20.0483C3.67982 19.7472 3.45999 19.3349 3.33668 18.5266C3.20716 17.6777 3.20455 16.5462 3.20455 14.8916C3.20455 13.237 3.20716 12.1054 3.33668 11.2565C3.45999 10.4482 3.67982 10.036 4.02153 9.73486C4.30985 9.48078 4.69971 9.29375 5.34476 9.17001C5.87467 9.06837 6.22111 8.56014 6.11857 8.03487ZM6 14C5.44772 14 5 14.4477 5 15C5 15.5523 5.44772 16 6 16H7C7.55229 16 8 15.5523 8 15C8 14.4477 7.55229 14 7 14H6ZM11.5 14C10.9477 14 10.5 14.4477 10.5 15C10.5 15.5523 10.9477 16 11.5 16H12.5C13.0523 16 13.5 15.5523 13.5 15C13.5 14.4477 13.0523 14 12.5 14H11.5ZM17 14C16.4477 14 16 14.4477 16 15C16 15.5523 16.4477 16 17 16H18C18.5523 16 19 15.5523 19 15C19 14.4477 18.5523 14 18 14H17Z',
  d10: 'M19 15H16M13.5 15H10.5M8 15H5',
  d11: 'M16 6.05C16 9.2 12 11 12 11C12 11 8 9.2 8 6.05C8 3.81325 9.79086 2 12 2C14.2091 2 16 3.81325 16 6.05Z',
  d12: 'M18 8L22 8V22H2L2 8L6 8',
  d13: 'M1.25 8.21875C1.25 7.68372 1.68754 7.25 2.22727 7.25L6.13636 7.25V9.1875L3.20455 9.1875L3.20455 20.8125H20.7955V9.1875L17.8636 9.1875V7.25L21.7727 7.25C22.3125 7.25 22.75 7.68372 22.75 8.21875V21.7812C22.75 22.3163 22.3125 22.75 21.7727 22.75H2.22727C1.96808 22.75 1.71951 22.6479 1.53624 22.4663C1.35296 22.2846 1.25 22.0382 1.25 21.7812L1.25 8.21875Z',
  d14: 'M4.99219 14H7.99219V16H4.99219V14ZM10.4922 14H13.4922V16H10.4922V14ZM15.9922 14H18.9922V16H15.9922V14Z',
  d15: 'M10.9903 11.318C11.1918 11.4351 11.3609 11.5246 11.4816 11.5856L11.9922 11.8224L12.5028 11.5856C12.6235 11.5246 12.7926 11.4351 12.9941 11.318C13.3954 11.0847 13.9338 10.7368 14.4758 10.2795C15.5361 9.38489 16.7422 7.95681 16.7422 6.05C16.7422 3.40784 14.6243 1.25 11.9922 1.25C9.36008 1.25 7.24219 3.40784 7.24219 6.05C7.24219 7.95681 8.4483 9.38489 9.50853 10.2795C10.0506 10.7368 10.589 11.0847 10.9903 11.318ZM11.9844 4.25C11.0222 4.25 10.2422 5.0335 10.2422 6C10.2422 6.9665 11.0222 7.75 11.9844 7.75H12C12.9622 7.75 13.7422 6.9665 13.7422 6C13.7422 5.0335 12.9622 4.25 12 4.25H11.9844Z',
};

export const IconRoadLocation01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="road-location-01-stroke-rounded IconRoadLocation01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconRoadLocation01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="road-location-01-duotone-rounded IconRoadLocation01DuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconRoadLocation01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="road-location-01-twotone-rounded IconRoadLocation01TwotoneRounded"
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRoadLocation01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="road-location-01-solid-rounded IconRoadLocation01SolidRounded"
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

export const IconRoadLocation01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="road-location-01-bulk-rounded IconRoadLocation01BulkRounded"
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

export const IconRoadLocation01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="road-location-01-stroke-sharp IconRoadLocation01StrokeSharp"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconRoadLocation01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="road-location-01-solid-sharp IconRoadLocation01SolidSharp"
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

export const iconPackOfRoadLocation01: TheIconSelfPack = {
  name: 'RoadLocation01',
  StrokeRounded: IconRoadLocation01StrokeRounded,
  DuotoneRounded: IconRoadLocation01DuotoneRounded,
  TwotoneRounded: IconRoadLocation01TwotoneRounded,
  SolidRounded: IconRoadLocation01SolidRounded,
  BulkRounded: IconRoadLocation01BulkRounded,
  StrokeSharp: IconRoadLocation01StrokeSharp,
  SolidSharp: IconRoadLocation01SolidSharp,
};