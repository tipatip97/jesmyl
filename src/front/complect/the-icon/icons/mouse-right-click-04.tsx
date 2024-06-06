import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10.5 6V2',
  d2: 'M10.5 22C16.5 22 18 17.49 18 12C18 6.50998 16.5 2 10.5 2C4.49993 2 3 6.50996 3 12C3 17.49 4.49993 22 10.5 22Z',
  d3: 'M12 7.5C12 7.03406 12 6.80109 11.9239 6.61732C11.8224 6.37229 11.6277 6.17761 11.3827 6.07612C11.1989 6 10.9659 6 10.5 6C10.0341 6 9.80109 6 9.61732 6.07612C9.37229 6.17761 9.17761 6.37229 9.07612 6.61732C9 6.80109 9 7.03406 9 7.5V9.5C9 9.96594 9 10.1989 9.07612 10.3827C9.17761 10.6277 9.37229 10.8224 9.61732 10.9239C9.80109 11 10.0341 11 10.5 11C10.9659 11 11.1989 11 11.3827 10.9239C11.6277 10.8224 11.8224 10.6277 11.9239 10.3827C12 10.1989 12 9.96594 12 9.5V7.5Z',
  d4: 'M19 2C20.0547 3.13158 20.7646 4.50113 21 6',
  d5: 'M18 12C18 17.49 16.5 22 10.5 22C4.49993 22 3 17.49 3 12C3 6.50996 4.49993 2 10.5 2C16.5 2 18 6.50998 18 12ZM11.9239 6.61732C12 6.80109 12 7.03406 12 7.5V9.5C12 9.96594 12 10.1989 11.9239 10.3827C11.8224 10.6277 11.6277 10.8224 11.3827 10.9239C11.1989 11 10.9659 11 10.5 11C10.0341 11 9.80109 11 9.61732 10.9239C9.37229 10.8224 9.17761 10.6277 9.07612 10.3827C9 10.1989 9 9.96594 9 9.5V7.5C9 7.03406 9 6.80109 9.07612 6.61732C9.17761 6.37229 9.37229 6.17761 9.61732 6.07612C9.80109 6 10.0341 6 10.5 6C10.9659 6 11.1989 6 11.3827 6.07612C11.6277 6.17761 11.8224 6.37229 11.9239 6.61732Z',
  d6: 'M18.068 1.51848C17.664 1.89504 17.6418 2.52781 18.0183 2.93182C18.9509 3.93237 19.5605 5.12282 19.762 6.40518C19.8477 6.95077 20.3594 7.32359 20.905 7.23789C21.4506 7.15219 21.8234 6.64043 21.7377 6.09483C21.4683 4.37945 20.6582 2.83081 19.4814 1.56819C19.1048 1.16418 18.472 1.14192 18.068 1.51848Z',
  d7: 'M11.25 1.59283C11.25 1.41966 11.3967 1.28205 11.5691 1.29816C14.2027 1.5443 16.0047 2.71957 17.1374 4.54579C18.3752 6.54139 18.75 9.21514 18.75 11.9999C18.75 14.7846 18.3752 17.4584 17.1374 19.454C15.8575 21.5175 13.7232 22.7499 10.5 22.7499C7.27687 22.7499 5.14257 21.5175 3.86265 19.454C2.62485 17.4584 2.25 14.7846 2.25 11.9999C2.25 9.21515 2.62485 6.5414 3.86265 4.5458C4.99538 2.7196 6.79729 1.54432 9.4309 1.29817C9.60332 1.28205 9.75 1.41966 9.75 1.59284V5.01146C9.75 5.16248 9.63647 5.28621 9.49116 5.32737C9.43797 5.34243 9.38425 5.36075 9.3303 5.38309C8.9015 5.56071 8.56082 5.90139 8.38321 6.33019C8.30099 6.52869 8.27337 6.72403 8.26125 6.90167C8.24997 7.067 8.24998 7.26384 8.25 7.47812V9.52164C8.24998 9.73592 8.24997 9.93277 8.26125 10.0981C8.27337 10.2757 8.30099 10.4711 8.38321 10.6696C8.56082 11.0984 8.9015 11.4391 9.3303 11.6167C9.52881 11.6989 9.72415 11.7265 9.90179 11.7386C10.0671 11.7499 10.264 11.7499 10.4782 11.7499H10.4782H10.5218H10.5218C10.736 11.7499 10.9329 11.7499 11.0982 11.7386C11.2759 11.7265 11.4712 11.6989 11.6697 11.6167C12.0985 11.4391 12.4392 11.0984 12.6168 10.6696C12.699 10.4711 12.7266 10.2757 12.7387 10.0981C12.75 9.93276 12.75 9.73592 12.75 9.52164V7.47813V7.47812C12.75 7.26385 12.75 7.067 12.7387 6.90167C12.7266 6.72403 12.699 6.52869 12.6168 6.33019C12.4392 5.90139 12.0985 5.56071 11.6697 5.38309C11.6157 5.36075 11.562 5.34243 11.5088 5.32737C11.3635 5.28621 11.25 5.16248 11.25 5.01146V1.59283ZM11.2341 6.92438C11.2317 6.90885 11.2269 6.89376 11.2194 6.87997C11.1964 6.83799 11.1619 6.80346 11.1199 6.78051C11.1061 6.77298 11.091 6.76817 11.0755 6.76579C11.0591 6.76328 11.0337 6.76022 10.9961 6.75766C10.8881 6.75029 10.7432 6.74988 10.5 6.74988C10.2568 6.74988 10.1119 6.75029 10.0039 6.75766C9.9663 6.76022 9.94086 6.76328 9.92449 6.76579C9.90896 6.76817 9.89388 6.77298 9.88009 6.78051C9.83811 6.80346 9.80358 6.83799 9.78063 6.87997C9.77309 6.89376 9.76829 6.90885 9.7659 6.92438C9.76339 6.94075 9.76034 6.96618 9.75777 7.00378C9.7504 7.11179 9.75 7.25665 9.75 7.49988V9.49988C9.75 9.74311 9.7504 9.88798 9.75777 9.99598C9.76034 10.0336 9.76339 10.059 9.7659 10.0754C9.76829 10.0909 9.77309 10.106 9.78063 10.1198C9.80357 10.1618 9.83811 10.1963 9.88009 10.2192C9.89388 10.2268 9.90896 10.2316 9.9245 10.234C9.94086 10.2365 9.9663 10.2395 10.0039 10.2421C10.1119 10.2495 10.2568 10.2499 10.5 10.2499C10.7432 10.2499 10.8881 10.2495 10.9961 10.2421C11.0337 10.2395 11.0591 10.2365 11.0755 10.234C11.091 10.2316 11.1061 10.2268 11.1199 10.2193C11.1619 10.1963 11.1964 10.1618 11.2194 10.1198C11.2269 10.106 11.2317 10.0909 11.2341 10.0754C11.2366 10.059 11.2397 10.0336 11.2422 9.99598C11.2496 9.88798 11.25 9.74311 11.25 9.49988V7.49988C11.25 7.25665 11.2496 7.11179 11.2422 7.00378C11.2397 6.96618 11.2366 6.94075 11.2341 6.92438Z',
  d8: 'M17.1374 4.54591C15.8575 2.48241 13.7232 1.25 10.5 1.25C7.27687 1.25 5.14257 2.48242 3.86265 4.54592C2.62485 6.54152 2.25 9.21527 2.25 12C2.25 14.7847 2.62485 17.4585 3.86265 19.4541C5.14257 21.5176 7.27687 22.75 10.5 22.75C13.7232 22.75 15.8575 21.5176 17.1374 19.4541C18.3752 17.4585 18.75 14.7847 18.75 12C18.75 9.21526 18.3752 6.54151 17.1374 4.54591Z',
  d9: 'M11.25 1.27328C11.0069 1.25783 10.7569 1.25 10.5 1.25C10.2431 1.25 9.99318 1.25783 9.75 1.27328V5.27578C9.6154 5.29292 9.47368 5.32382 9.33031 5.38321C8.90151 5.56083 8.56083 5.90151 8.38321 6.33031C8.30099 6.52881 8.27338 6.72415 8.26126 6.90179C8.24998 7.06712 8.24999 7.26396 8.25 7.47824V9.52176C8.24999 9.73604 8.24998 9.93288 8.26126 10.0982C8.27338 10.2759 8.30099 10.4712 8.38321 10.6697C8.56083 11.0985 8.90151 11.4392 9.33031 11.6168C9.52881 11.699 9.72415 11.7266 9.90179 11.7387C10.0671 11.75 10.264 11.75 10.4782 11.75H10.5218C10.736 11.75 10.9329 11.75 11.0982 11.7387C11.2759 11.7266 11.4712 11.699 11.6697 11.6168C12.0985 11.4392 12.4392 11.0985 12.6168 10.6697C12.699 10.4712 12.7266 10.2759 12.7387 10.0982C12.75 9.93288 12.75 9.73603 12.75 9.52176V7.47824C12.75 7.26397 12.75 7.06712 12.7387 6.90179C12.7266 6.72415 12.699 6.52881 12.6168 6.33031C12.4392 5.90151 12.0985 5.56083 11.6697 5.38321C11.5263 5.32382 11.3846 5.29292 11.25 5.27578V1.27328ZM11.2297 6.90131C11.2044 6.84248 11.1575 6.79558 11.0987 6.7703C11.0913 6.76844 11.0629 6.76233 10.9961 6.75778C10.8881 6.75041 10.7432 6.75 10.5 6.75C10.2568 6.75 10.1119 6.75041 10.0039 6.75778C9.93707 6.76234 9.90867 6.76844 9.90131 6.7703C9.84248 6.79558 9.79558 6.84248 9.77031 6.90131C9.76844 6.90867 9.76234 6.93707 9.75778 7.0039C9.75041 7.11191 9.75 7.25677 9.75 7.5V9.5C9.75 9.74323 9.75041 9.8881 9.75778 9.9961C9.76234 10.0629 9.76844 10.0913 9.77031 10.0987C9.79558 10.1575 9.84248 10.2044 9.90131 10.2297C9.90867 10.2316 9.93707 10.2377 10.0039 10.2422C10.1119 10.2496 10.2568 10.25 10.5 10.25C10.7432 10.25 10.8881 10.2496 10.9961 10.2422C11.0629 10.2377 11.0913 10.2316 11.0987 10.2297C11.1575 10.2044 11.2044 10.1575 11.2297 10.0987C11.2316 10.0913 11.2377 10.0629 11.2422 9.9961C11.2496 9.8881 11.25 9.74323 11.25 9.5V7.5C11.25 7.25677 11.2496 7.11191 11.2422 7.0039C11.2377 6.93707 11.2316 6.90867 11.2297 6.90131Z',
  d10: 'M12 6H9V10H12V6Z',
  d11: 'M9.75 1.27344V5.25016H9C8.58579 5.25016 8.25 5.58595 8.25 6.00016V10.5002C8.25 10.9144 8.58579 11.2502 9 11.2502H12C12.4142 11.2502 12.75 10.9144 12.75 10.5002V6.00016C12.75 5.58595 12.4142 5.25016 12 5.25016H11.25V1.27344C14.0579 1.45187 15.9595 2.64702 17.1374 4.54607C18.3752 6.54167 18.75 9.21542 18.75 12.0002C18.75 14.7849 18.3752 17.4586 17.1374 19.4542C15.8575 21.5177 13.7232 22.7502 10.5 22.7502C7.27687 22.7502 5.14257 21.5177 3.86265 19.4542C2.62485 17.4586 2.25 14.7849 2.25 12.0002C2.25 9.21542 2.62485 6.54168 3.86265 4.54608C5.04056 2.64704 6.94209 1.45189 9.75 1.27344Z',
  d12: 'M11.25 6.75016V9.75016H9.75V6.75016H11.25Z',
  d13: 'M21.7497 5.77664C21.4802 4.06126 20.6701 2.51262 19.4933 1.25L18.0303 2.61363C18.9628 3.61418 19.5725 4.80463 19.7739 6.08699L21.7497 5.77664Z',
};

export const IconMouseRightClick04StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-right-click-04-stroke-rounded IconMouseRightClick04StrokeRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMouseRightClick04DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-right-click-04-duotone-rounded IconMouseRightClick04DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d1} 
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
    </TheIconWrapper>
  );
};

export const IconMouseRightClick04TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-right-click-04-twotone-rounded IconMouseRightClick04TwotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMouseRightClick04SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-right-click-04-solid-rounded IconMouseRightClick04SolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconMouseRightClick04BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-right-click-04-bulk-rounded IconMouseRightClick04BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMouseRightClick04StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-right-click-04-stroke-sharp IconMouseRightClick04StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMouseRightClick04SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mouse-right-click-04-solid-sharp IconMouseRightClick04SolidSharp"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMouseRightClick04: TheIconSelfPack = {
  name: 'MouseRightClick04',
  StrokeRounded: IconMouseRightClick04StrokeRounded,
  DuotoneRounded: IconMouseRightClick04DuotoneRounded,
  TwotoneRounded: IconMouseRightClick04TwotoneRounded,
  SolidRounded: IconMouseRightClick04SolidRounded,
  BulkRounded: IconMouseRightClick04BulkRounded,
  StrokeSharp: IconMouseRightClick04StrokeSharp,
  SolidSharp: IconMouseRightClick04SolidSharp,
};