import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 2C17.5237 2 22 6.47778 22 12C22 17.5222 17.5237 22 12 22',
  d2: 'M9 21.5C7.81163 21.0953 6.69532 20.5107 5.72302 19.7462M5.72302 4.25385C6.69532 3.50059 7.81163 2.90473 9 2.5M2 10.2461C2.21607 9.08813 2.66019 7.96386 3.29638 6.94078M2 13.7539C2.21607 14.9119 2.66019 16.0361 3.29638 17.0592',
  d3: 'M11.9961 11.5H12.0024',
  d4: 'M12 7C14.4353 7 16.5 9.01649 16.5 11.4629C16.5 13.9482 14.4017 15.6924 12.4635 16.8783C12.3223 16.9581 12.1625 17 12 17C11.8375 17 11.6777 16.9581 11.5365 16.8783C9.60195 15.6808 7.5 13.9568 7.5 11.4629C7.5 9.01649 9.56472 7 12 7Z',
  d5: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16.5 11.4629C16.5 9.01649 14.4353 7 12 7C9.56472 7 7.5 9.01649 7.5 11.4629C7.5 13.9568 9.60195 15.6808 11.5365 16.8783C11.6777 16.9581 11.8375 17 12 17C12.1625 17 12.3223 16.9581 12.4635 16.8783C14.4017 15.6924 16.5 13.9482 16.5 11.4629Z',
  d6: 'M11.999 6.25C9.15881 6.25 6.74902 8.59305 6.74902 11.4629C6.74902 12.9384 7.3754 14.1598 8.22312 15.1457C9.06388 16.1236 10.1481 16.9016 11.1408 17.516L11.1536 17.524L11.1668 17.5315C11.4208 17.6748 11.7076 17.75 11.999 17.75C12.2905 17.75 12.5772 17.6748 12.8312 17.5315L12.8427 17.525L12.854 17.5181C13.8519 16.9074 14.9366 16.1268 15.7771 15.1459C16.6239 14.1576 17.249 12.9337 17.249 11.4629C17.249 8.59305 14.8392 6.25 11.999 6.25ZM11.9896 9.75C11.0261 9.75 10.2451 10.5335 10.2451 11.5C10.2451 12.4665 11.0261 13.25 11.9896 13.25H12.0006C12.9641 13.25 13.7451 12.4665 13.7451 11.5C13.7451 10.5335 12.9641 9.75 12.0006 9.75H11.9896Z',
  d7: 'M11.0239 2.22727C11.0239 1.68754 11.4614 1.25 12.0012 1.25C17.9391 1.25 22.7512 6.06364 22.7512 12C22.7512 17.9364 17.9391 22.75 12.0012 22.75C11.4614 22.75 11.0239 22.3125 11.0239 21.7727C11.0239 21.233 11.4614 20.7955 12.0012 20.7955C16.8595 20.7955 20.7966 16.8571 20.7966 12C20.7966 7.14292 16.8595 3.20455 12.0012 3.20455C11.4614 3.20455 11.0239 2.76701 11.0239 2.22727ZM9.4686 2.54417C9.66691 3.04615 9.42074 3.61385 8.91876 3.81216C8.03102 4.16287 7.19994 4.63334 6.46534 5.20245C6.03867 5.533 5.42482 5.45508 5.09427 5.02841C4.76372 4.60174 4.84164 3.98789 5.26831 3.65734C6.15349 2.97158 7.14669 2.41068 8.20061 1.99433C8.70259 1.79602 9.27029 2.04219 9.4686 2.54417ZM4.01141 6.22586C4.46975 6.51088 4.61026 7.11349 4.32524 7.57183C3.76483 8.47304 3.37703 9.45814 3.18912 10.4652C3.09012 10.9958 2.57975 11.3457 2.04917 11.2467C1.51859 11.1477 1.16873 10.6373 1.26773 10.1067C1.50213 8.85047 1.98238 7.63814 2.66544 6.5397C2.95046 6.08136 3.55307 5.94085 4.01141 6.22586ZM2.04917 12.7533C2.57975 12.6543 3.09012 13.0042 3.18912 13.5348C3.37703 14.5419 3.76483 15.527 4.32524 16.4282C4.61026 16.8865 4.46975 17.4891 4.01141 17.7741C3.55307 18.0592 2.95046 17.9186 2.66544 17.4603C1.98238 16.3619 1.50213 15.1495 1.26773 13.8933C1.16873 13.3627 1.51859 12.8523 2.04917 12.7533ZM5.09859 18.9661C5.4322 18.5418 6.04659 18.4683 6.47088 18.8019C7.19964 19.3749 8.0272 19.8382 8.91701 20.1878C9.41937 20.3851 9.66663 20.9523 9.46929 21.4547C9.27194 21.9571 8.70472 22.2043 8.20236 22.007C7.1505 21.5938 6.15379 21.0389 5.26278 20.3383C4.83849 20.0047 4.76498 19.3903 5.09859 18.9661Z',
  d8: 'M11.999 11H12.0054',
  d9: 'M12 7C9.79086 7 8 8.80893 8 11.0404C8 12.3163 8.5 13.3084 9.5 14.1945C10.2049 14.8192 11.4873 16.159 12 17C12.5386 16.1757 13.7951 14.8192 14.5 14.1945C15.5 13.3084 16 12.3163 16 11.0404C16 8.80893 14.2091 7 12 7Z',
  d10: 'M20.7939 12C20.7939 7.14292 16.8538 3.20455 11.9917 3.20455V1.25C17.9343 1.25 22.75 6.06364 22.75 12C22.75 17.9364 17.9343 22.75 11.9917 22.75V20.7955C16.8538 20.7955 20.7939 16.8571 20.7939 12ZM9.37293 3.641C8.30978 4.00281 7.31442 4.53454 6.45162 5.20245L5.25367 3.65734C6.29274 2.85298 7.48096 2.22008 8.74231 1.79082L9.37293 3.641ZM4.30987 7.57183C3.74903 8.47304 3.36092 9.45814 3.17287 10.4652L1.25 10.1067C1.48458 8.85047 1.9652 7.63814 2.64879 6.5397L4.30987 7.57183ZM2.64879 17.4603C1.9652 16.3619 1.48458 15.1495 1.25 13.8933L3.17287 13.5348C3.36092 14.5419 3.74903 15.527 4.30987 16.4282L2.64879 17.4603ZM6.45716 18.8019C7.31297 19.4743 8.3048 19.9955 9.37294 20.359L8.74231 22.2092C7.48594 21.7816 6.29418 21.1602 5.24813 20.3383L6.45716 18.8019Z',
  d11: 'M12.0029 6.25C9.3725 6.25 7.25293 8.40183 7.25293 11.0404C7.25293 12.5592 7.86735 13.7473 9.00551 14.7559C9.69174 15.364 10.9082 16.6451 11.3625 17.3904C11.4965 17.6102 11.7338 17.7459 11.9912 17.7499C12.2485 17.7539 12.49 17.6257 12.6308 17.4103C13.1217 16.659 14.3275 15.3521 15.0003 14.7559C16.1385 13.7473 16.7529 12.5592 16.7529 11.0404C16.7529 8.40183 14.6334 6.25 12.0029 6.25ZM11.9935 9.25C11.03 9.25 10.249 10.0335 10.249 11C10.249 11.9665 11.03 12.75 11.9935 12.75H12.0046C12.968 12.75 13.749 11.9665 13.749 11C13.749 10.0335 12.968 9.25 12.0046 9.25H11.9935Z',
};

export const IconShareLocation02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="share-location-02-stroke-rounded IconShareLocation02StrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconShareLocation02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="share-location-02-duotone-rounded IconShareLocation02DuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconShareLocation02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="share-location-02-twotone-rounded IconShareLocation02TwotoneRounded"
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
        strokeLinecap="round" 
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
      />
    </TheIconWrapper>
  );
};

export const IconShareLocation02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="share-location-02-solid-rounded IconShareLocation02SolidRounded"
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

export const IconShareLocation02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="share-location-02-bulk-rounded IconShareLocation02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShareLocation02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="share-location-02-stroke-sharp IconShareLocation02StrokeSharp"
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
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShareLocation02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="share-location-02-solid-sharp IconShareLocation02SolidSharp"
    >
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

export const iconPackOfShareLocation02: TheIconSelfPack = {
  name: 'ShareLocation02',
  StrokeRounded: IconShareLocation02StrokeRounded,
  DuotoneRounded: IconShareLocation02DuotoneRounded,
  TwotoneRounded: IconShareLocation02TwotoneRounded,
  SolidRounded: IconShareLocation02SolidRounded,
  BulkRounded: IconShareLocation02BulkRounded,
  StrokeSharp: IconShareLocation02StrokeSharp,
  SolidSharp: IconShareLocation02SolidSharp,
};