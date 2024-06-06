import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9.5 18L8.38792 17.0607C7.79597 16.5607 7.5 16.3107 7.5 16C7.5 15.6893 7.79597 15.4393 8.38792 14.9393L9.5 14M14.5 14L15.6121 14.9393C16.204 15.4393 16.5 15.6893 16.5 16C16.5 16.3107 16.204 16.5607 15.6121 17.0607L14.5 18',
  d2: 'M3 11.8584C3 7.28199 3 4.99376 4.38674 3.54394C4.43797 3.49038 4.49038 3.43797 4.54394 3.38674C5.99376 2 8.28199 2 12.8584 2C13.943 2 14.4655 2.00376 14.9628 2.18936C15.4417 2.3681 15.8429 2.70239 16.6452 3.37099L18.8411 5.20092C19.9027 6.08561 20.4335 6.52795 20.7168 7.13266C21 7.73737 21 8.42833 21 9.81025V13C21 16.7497 21 18.6246 20.0451 19.9389C19.7367 20.3634 19.3634 20.7367 18.9389 21.0451C17.6246 22 15.7497 22 12 22C8.25027 22 6.3754 22 5.06107 21.0451C4.6366 20.7367 4.26331 20.3634 3.95491 19.9389C3 18.6246 3 16.7497 3 13V11.8584Z',
  d3: 'M12.9389 1.25001C13.9301 1.24984 14.59 1.24973 15.2251 1.48672C15.8256 1.71086 16.3202 2.12335 17.0324 2.71738L19.4453 4.72812C20.3864 5.51149 21.0408 6.05619 21.396 6.81456C21.7512 7.57292 21.7507 8.42434 21.7501 9.64878L21.75 13.0454C21.75 14.8819 21.75 16.3214 21.6263 17.4635C21.5 18.6291 21.2377 19.5735 20.6518 20.3798C20.2972 20.8679 19.8679 21.2972 19.3798 21.6519C18.5734 22.2377 17.6291 22.5 16.4635 22.6263C15.3214 22.75 13.8818 22.75 12.0453 22.75H11.9547C10.1182 22.75 8.67859 22.75 7.53648 22.6263C6.37094 22.5 5.42656 22.2377 4.62024 21.6519C4.13209 21.2972 3.70281 20.8679 3.34815 20.3798C2.76232 19.5735 2.50001 18.6291 2.37373 17.4635C2.24999 16.3214 2.24999 14.8818 2.25 13.0453V11.8028C2.24999 9.56175 2.24998 7.80539 2.42968 6.43146C2.61352 5.02584 2.99689 3.91198 3.84475 3.02555C3.90366 2.96396 3.96394 2.90368 4.02554 2.84476C4.91196 1.99691 6.02582 1.61354 7.43144 1.42969C8.80538 1.25 10.5617 1.25001 12.8028 1.25002L12.9389 1.25001ZM10.2639 13.3547C10.6203 13.7767 10.5672 14.4076 10.1453 14.764L9.0332 15.7033C8.95707 15.7676 8.919 15.7998 8.8947 15.8375C8.8325 15.9339 8.8325 16.0661 8.8947 16.1626C8.919 16.2003 8.95706 16.2324 9.03319 16.2967L9.0332 16.2967L10.1453 17.2361C10.5672 17.5925 10.6203 18.2234 10.2639 18.6453C9.90757 19.0672 9.27663 19.1203 8.85472 18.764L7.70296 17.7911C7.44186 17.5707 7.1742 17.3448 6.9799 17.1297C6.76356 16.8902 6.5 16.5178 6.5 16C6.5 15.4823 6.76356 15.1099 6.9799 14.8704C7.1742 14.6553 7.44186 14.4293 7.70295 14.2089L8.85472 13.2361C9.27663 12.8797 9.90757 12.9328 10.2639 13.3547ZM13.7361 13.3547C14.0924 12.9328 14.7234 12.8797 15.1453 13.2361L16.297 14.2089C16.5581 14.4293 16.8258 14.6553 17.0201 14.8704C17.2364 15.1099 17.5 15.4823 17.5 16C17.5 16.5178 17.2364 16.8902 17.0201 17.1297C16.8258 17.3448 16.5581 17.5707 16.297 17.7911L15.1453 18.764C14.7234 19.1203 14.0924 19.0672 13.7361 18.6453C13.3797 18.2234 13.4328 17.5925 13.8547 17.2361L14.9668 16.2967C15.0429 16.2324 15.081 16.2003 15.1053 16.1626C15.1675 16.0661 15.1675 15.9339 15.1053 15.8375C15.081 15.7998 15.0429 15.7676 14.9668 15.7033L13.8547 14.764C13.4328 14.4076 13.3797 13.7767 13.7361 13.3547Z',
  d4: 'M15.2251 1.48672C14.59 1.24973 13.9301 1.24984 12.9389 1.25001L12.8028 1.25002C10.5617 1.25001 8.80538 1.25 7.43144 1.42969C6.02582 1.61354 4.91196 1.99691 4.02554 2.84476C3.96394 2.90368 3.90366 2.96396 3.84475 3.02555C2.99689 3.91198 2.61352 5.02584 2.42968 6.43146C2.24998 7.80539 2.24999 9.56175 2.25 11.8028V13.0453C2.24999 14.8818 2.24999 16.3214 2.37373 17.4635C2.50001 18.6291 2.76232 19.5735 3.34815 20.3798C3.70281 20.8679 4.13209 21.2972 4.62024 21.6519C5.42656 22.2377 6.37094 22.5 7.53648 22.6263C8.67859 22.75 10.1182 22.75 11.9547 22.75H12.0453C13.8818 22.75 15.3214 22.75 16.4635 22.6263C17.6291 22.5 18.5734 22.2377 19.3798 21.6519C19.8679 21.2972 20.2972 20.8679 20.6518 20.3798C21.2377 19.5735 21.5 18.6291 21.6263 17.4635C21.75 16.3214 21.75 14.8819 21.75 13.0454L21.7501 9.64878C21.7507 8.42434 21.7512 7.57292 21.396 6.81456C21.0408 6.05619 20.3864 5.51149 19.4453 4.72812L17.0324 2.71738C16.3202 2.12335 15.8256 1.71086 15.2251 1.48672Z',
  d5: 'M10.1453 14.764C10.5672 14.4076 10.6203 13.7767 10.2639 13.3547C9.90757 12.9328 9.27663 12.8797 8.85472 13.2361L7.70295 14.2089C7.44186 14.4293 7.1742 14.6553 6.9799 14.8704C6.76356 15.1099 6.5 15.4823 6.5 16C6.5 16.5178 6.76356 16.8902 6.9799 17.1297C7.1742 17.3448 7.44186 17.5707 7.70296 17.7911L8.85472 18.764C9.27663 19.1203 9.90757 19.0672 10.2639 18.6453C10.6203 18.2234 10.5672 17.5925 10.1453 17.2361L9.0332 16.2967C8.95707 16.2324 8.919 16.2003 8.8947 16.1626C8.8325 16.0661 8.8325 15.9339 8.8947 15.8375C8.919 15.7998 8.95707 15.7676 9.0332 15.7033L10.1453 14.764ZM15.1453 13.2361C14.7234 12.8797 14.0924 12.9328 13.7361 13.3547C13.3797 13.7767 13.4328 14.4076 13.8547 14.764L14.9668 15.7033C15.0429 15.7676 15.081 15.7998 15.1053 15.8375C15.1675 15.9339 15.1675 16.0661 15.1053 16.1626C15.081 16.2003 15.0429 16.2324 14.9668 16.2967L13.8547 17.2361C13.4328 17.5925 13.3797 18.2234 13.7361 18.6453C14.0924 19.0672 14.7234 19.1203 15.1453 18.764L16.297 17.7911C16.5581 17.5707 16.8258 17.3448 17.0201 17.1297C17.2364 16.8902 17.5 16.5178 17.5 16C17.5 15.4823 17.2364 15.1099 17.0201 14.8704C16.8258 14.6553 16.5581 14.4293 16.297 14.2089L15.1453 13.2361Z',
  d6: 'M9.98938 18.4788L7.49316 15.9821L9.98938 13.4854M13.9833 13.4854L16.4795 15.9821L13.9833 18.4788',
  d7: 'M3.02269 2.10179L2.99137 21.9047C2.99128 21.96 3.03608 22.0049 3.09137 22.0049H20.8943C20.9496 22.0049 20.9945 21.9599 20.9943 21.9045L20.9418 7.00897L14.9759 2.00195H3.12269C3.06753 2.00195 3.02278 2.04663 3.02269 2.10179Z',
  d8: 'M21 7.00006V22.0001H3V2H15L21 7.00006ZM13.4678 14.0304L15.4375 16.0001L13.4678 17.9697L14.5285 19.0304L17.5588 16.0001L14.5285 12.9697L13.4678 14.0304ZM10.5285 14.0304L8.55882 16.0001L10.5285 17.9697L9.46783 19.0304L6.4375 16.0001L9.46783 12.9697L10.5285 14.0304Z',
};

export const IconSimcard01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="simcard-01-stroke-rounded IconSimcard01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconSimcard01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="simcard-01-duotone-rounded IconSimcard01DuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconSimcard01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="simcard-01-twotone-rounded IconSimcard01TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconSimcard01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="simcard-01-solid-rounded IconSimcard01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSimcard01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="simcard-01-bulk-rounded IconSimcard01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconSimcard01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="simcard-01-stroke-sharp IconSimcard01StrokeSharp"
    >
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

export const IconSimcard01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="simcard-01-solid-sharp IconSimcard01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSimcard01: TheIconSelfPack = {
  name: 'Simcard01',
  StrokeRounded: IconSimcard01StrokeRounded,
  DuotoneRounded: IconSimcard01DuotoneRounded,
  TwotoneRounded: IconSimcard01TwotoneRounded,
  SolidRounded: IconSimcard01SolidRounded,
  BulkRounded: IconSimcard01BulkRounded,
  StrokeSharp: IconSimcard01StrokeSharp,
  SolidSharp: IconSimcard01SolidSharp,
};