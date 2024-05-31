import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12104 13.2453 4 14.3624 4 15.5C4 16.6376 4.12104 17.7547 4.26781 18.8447Z',
  d2: 'M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C13.9593 2 15.5 3.5 16 5',
  d3: 'M11.9961 15.5H12.0051',
  d4: 'M12 3.25C10.067 3.25 8.5 4.817 8.5 6.75V9.25C8.5 9.80228 8.05228 10.25 7.5 10.25C6.94772 10.25 6.5 9.80228 6.5 9.25V6.75C6.5 3.71243 8.96243 1.25 12 1.25C14.4806 1.25 16.3437 3.11878 16.9487 4.93377C17.1233 5.45772 16.8402 6.02404 16.3162 6.19868C15.7923 6.37333 15.226 6.09017 15.0513 5.56623C14.6563 4.38122 13.4381 3.25 12 3.25Z',
  d5: 'M12 8.25C10.4042 8.25 8.95364 8.28422 7.52522 8.34988C5.46716 8.4445 3.79609 10.0382 3.52452 12.0552C3.37636 13.1556 3.25 14.3118 3.25 15.5C3.25 16.6882 3.37636 17.8444 3.52452 18.9448C3.79609 20.9618 5.46716 22.5555 7.52522 22.6501C8.95364 22.7158 10.4042 22.75 12 22.75C13.5958 22.75 15.0464 22.7158 16.4748 22.6501C18.5328 22.5555 20.2039 20.9618 20.4755 18.9448C20.6236 17.8444 20.75 16.6882 20.75 15.5C20.75 14.3118 20.6236 13.1556 20.4755 12.0552C20.2039 10.0382 18.5328 8.4445 16.4748 8.34989C15.0464 8.28422 13.5958 8.25 12 8.25ZM11.9933 14C11.1686 14 10.5 14.6716 10.5 15.5C10.5 16.3284 11.1686 17 11.9933 17H12.0067C12.8314 17 13.5 16.3284 13.5 15.5C13.5 14.6716 12.8314 14 12.0067 14H11.9933Z',
  d6: 'M7.52522 8.34988C8.95364 8.28422 10.4042 8.25 12 8.25C13.5958 8.25 15.0464 8.28422 16.4748 8.34989C18.5328 8.4445 20.2039 10.0382 20.4755 12.0552C20.6236 13.1556 20.75 14.3118 20.75 15.5C20.75 16.6882 20.6236 17.8444 20.4755 18.9448C20.2039 20.9618 18.5328 22.5555 16.4748 22.6501C15.0464 22.7158 13.5958 22.75 12 22.75C10.4042 22.75 8.95364 22.7158 7.52522 22.6501C5.46716 22.5555 3.79609 20.9618 3.52452 18.9448C3.37636 17.8444 3.25 16.6882 3.25 15.5C3.25 14.3118 3.37636 13.1556 3.52452 12.0552C3.79609 10.0382 5.46716 8.4445 7.52522 8.34988Z',
  d7: 'M10.5 15.5C10.5 14.6716 11.1686 14 11.9933 14H12.0067C12.8314 14 13.5 14.6716 13.5 15.5C13.5 16.3284 12.8314 17 12.0067 17H11.9933C11.1686 17 10.5 16.3284 10.5 15.5Z',
  d8: 'M8.5 6.75C8.5 4.817 10.067 3.25 12 3.25C13.4381 3.25 14.6563 4.38122 15.0513 5.56623C15.226 6.09017 15.7923 6.37333 16.3162 6.19868C16.8402 6.02404 17.1233 5.45772 16.9487 4.93377C16.3437 3.11878 14.4806 1.25 12 1.25C8.96243 1.25 6.5 3.71243 6.5 6.75V8.52712C6.82676 8.42712 7.17023 8.3662 7.52522 8.34988C7.84854 8.33502 8.17299 8.32177 8.5 8.31016V6.75Z',
  d9: 'M11.9912 15.5H12.0002',
  d10: 'M16.0018 4.99495C15.4642 3.33417 13.8284 2.09779 12.21 2.00654C10.3348 1.9008 7.60339 3.30209 7.51329 6.30218L7.47206 9.02315M7.47206 9.02315H4V21.999H20V9.02315H7.47206Z',
  d11: 'M20.75 8.25H3.25V22.75H20.75V8.25ZM13.5 14H10.5V17H13.5V14Z',
  d12: 'M12 3.25C10.067 3.25 8.5 4.817 8.5 6.75V9.25H6.5V6.75C6.5 3.71243 8.96243 1.25 12 1.25C14.4806 1.25 16.3437 3.11878 16.9487 4.93377L15.0513 5.56623C14.6563 4.38122 13.4381 3.25 12 3.25Z',
} as const;

export const IconSquareUnlock01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-unlock-01-stroke-rounded IconSquareUnlock01StrokeRounded"
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

export const IconSquareUnlock01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-unlock-01-duotone-rounded IconSquareUnlock01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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

export const IconSquareUnlock01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-unlock-01-twotone-rounded IconSquareUnlock01TwotoneRounded"
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

export const IconSquareUnlock01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-unlock-01-solid-rounded IconSquareUnlock01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareUnlock01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-unlock-01-bulk-rounded IconSquareUnlock01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareUnlock01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-unlock-01-stroke-sharp IconSquareUnlock01StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareUnlock01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-unlock-01-solid-sharp IconSquareUnlock01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSquareUnlock01: TheIconSelfPack = {
  name: 'SquareUnlock01',
  StrokeRounded: IconSquareUnlock01StrokeRounded,
  DuotoneRounded: IconSquareUnlock01DuotoneRounded,
  TwotoneRounded: IconSquareUnlock01TwotoneRounded,
  SolidRounded: IconSquareUnlock01SolidRounded,
  BulkRounded: IconSquareUnlock01BulkRounded,
  StrokeSharp: IconSquareUnlock01StrokeSharp,
  SolidSharp: IconSquareUnlock01SolidSharp,
};