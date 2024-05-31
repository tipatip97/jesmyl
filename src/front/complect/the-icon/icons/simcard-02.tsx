import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3 11.8584C3 7.28199 3 4.99376 4.38674 3.54394C4.43797 3.49038 4.49038 3.43797 4.54394 3.38674C5.99376 2 8.28199 2 12.8584 2C13.943 2 14.4655 2.00376 14.9628 2.18936C15.4417 2.3681 15.8429 2.70239 16.6452 3.37099L18.8411 5.20092C19.9027 6.08561 20.4335 6.52795 20.7168 7.13266C21 7.73737 21 8.42833 21 9.81025V13C21 16.7497 21 18.6246 20.0451 19.9389C19.7367 20.3634 19.3634 20.7367 18.9389 21.0451C17.6246 22 15.7497 22 12 22C8.25027 22 6.3754 22 5.06107 21.0451C4.6366 20.7367 4.26331 20.3634 3.95491 19.9389C3 18.6246 3 16.7497 3 13V11.8584Z',
  d2: 'M7 14.5C7 16.1499 7 16.9749 7.43934 17.4874C7.87868 18 8.58579 18 10 18H14C15.4142 18 16.1213 18 16.5607 17.4874C17 16.9749 17 16.1499 17 14.5M7 14.5C7 12.8501 7 12.0251 7.43934 11.5126C7.87868 11 8.58579 11 10 11H14C15.4142 11 16.1213 11 16.5607 11.5126C17 12.0251 17 12.8501 17 14.5M7 14.5H9M17 14.5H15',
  d3: 'M4.38674 3.54394C3 4.99376 3 7.28199 3 11.8584V13C3 16.7497 3 18.6246 3.95491 19.9389C4.26331 20.3634 4.6366 20.7367 5.06107 21.0451C6.3754 22 8.25027 22 12 22C15.7497 22 17.6246 22 18.9389 21.0451C19.3634 20.7367 19.7367 20.3634 20.0451 19.9389C21 18.6246 21 16.7497 21 13V9.81025C21 8.42833 21 7.73737 20.7168 7.13266C20.4335 6.52795 19.9027 6.08561 18.8411 5.20092L16.6452 3.37099C15.8429 2.70239 15.4417 2.3681 14.9628 2.18936C14.4655 2.00376 13.943 2 12.8584 2C8.28199 2 5.99376 2 4.54394 3.38674C4.49038 3.43797 4.43797 3.49038 4.38674 3.54394ZM10 11H14C15.4142 11 16.1213 11 16.5607 11.5126C17 12.0251 17 12.8501 17 14.5C17 16.1499 17 16.9749 16.5607 17.4874C16.1213 18 15.4142 18 14 18H10C8.58579 18 7.87868 18 7.43934 17.4874C7 16.9749 7 16.1499 7 14.5C7 12.8501 7 12.0251 7.43934 11.5126C7.87868 11 8.58579 11 10 11Z',
  d4: 'M12.9389 1.25001C13.9301 1.24984 14.59 1.24973 15.2251 1.48672C15.8256 1.71086 16.3202 2.12335 17.0324 2.71738L19.4453 4.72812C20.3864 5.51149 21.0408 6.05619 21.396 6.81456C21.7512 7.57292 21.7507 8.42434 21.7501 9.64878L21.75 13.0454C21.75 14.8819 21.75 16.3214 21.6263 17.4635C21.5 18.6291 21.2377 19.5735 20.6518 20.3798C20.2972 20.8679 19.8679 21.2972 19.3798 21.6519C18.5734 22.2377 17.6291 22.5 16.4635 22.6263C15.3214 22.75 13.8818 22.75 12.0453 22.75H11.9547C10.1182 22.75 8.67859 22.75 7.53648 22.6263C6.37094 22.5 5.42656 22.2377 4.62024 21.6519C4.13209 21.2972 3.70281 20.8679 3.34815 20.3798C2.76232 19.5735 2.50001 18.6291 2.37373 17.4635C2.24999 16.3214 2.24999 14.8818 2.25 13.0453V11.8028C2.24999 9.56175 2.24998 7.80539 2.42968 6.43146C2.61352 5.02584 2.99689 3.91198 3.84475 3.02555C3.90366 2.96396 3.96394 2.90368 4.02554 2.84476C4.91196 1.99691 6.02582 1.61354 7.43144 1.42969C8.80538 1.25 10.5617 1.25001 12.8028 1.25002L12.9389 1.25001ZM15.7621 10.3231C15.2952 10.2499 14.715 10.2499 14.0554 10.25H9.9446C9.28504 10.2499 8.7048 10.2499 8.23787 10.3231C7.72301 10.4039 7.24474 10.5872 6.8699 11.0245C6.50935 11.4451 6.37217 11.9532 6.30985 12.4939C6.24996 13.0136 6.24998 13.7133 6.25 14.5C6.24998 15.2867 6.24996 15.9864 6.30985 16.5061C6.37217 17.0469 6.50935 17.5549 6.8699 17.9755C7.24474 18.4129 7.72301 18.5961 8.23787 18.6769C8.7048 18.7501 9.28504 18.7501 9.9446 18.75H14.0554C14.715 18.7501 15.2952 18.7501 15.7621 18.6769C16.277 18.5961 16.7553 18.4129 17.1301 17.9755C17.4907 17.5549 17.6278 17.0469 17.6902 16.5061C17.75 15.9864 17.75 15.2867 17.75 14.5C17.75 13.7133 17.75 13.0136 17.6902 12.4939C17.6278 11.9532 17.4907 11.4451 17.1301 11.0245C16.7553 10.5872 16.277 10.4039 15.7621 10.3231Z',
  d5: 'M8.47 11.805C8.16792 11.8524 8.07297 11.9254 8.00847 12.0007C7.92968 12.0926 7.84719 12.2533 7.79967 12.6656C7.77468 12.8825 7.76217 13.1372 7.75592 13.4474C7.75256 13.614 7.88765 13.75 8.05435 13.75H8.99969C9.4139 13.75 9.74969 14.0858 9.74969 14.5C9.74969 14.9142 9.4139 15.25 8.99969 15.25H8.05435C7.88765 15.25 7.75256 15.386 7.75592 15.5526C7.76217 15.8628 7.77468 16.1175 7.79967 16.3344C7.84719 16.7467 7.92968 16.9074 8.00847 16.9993C8.07297 17.0746 8.16792 17.1476 8.47 17.195C8.80698 17.2478 9.26796 17.25 9.99969 17.25H13.9997C14.7314 17.25 15.1924 17.2478 15.5294 17.195C15.8315 17.1476 15.9264 17.0746 15.9909 16.9993C16.0697 16.9074 16.1522 16.7467 16.1997 16.3344C16.2247 16.1175 16.2372 15.8628 16.2435 15.5526C16.2468 15.386 16.1117 15.25 15.945 15.25H14.9997C14.5855 15.25 14.2497 14.9142 14.2497 14.5C14.2497 14.0858 14.5855 13.75 14.9997 13.75H15.945C16.1117 13.75 16.2468 13.614 16.2435 13.4474C16.2372 13.1372 16.2247 12.8825 16.1997 12.6656C16.1522 12.2533 16.0697 12.0926 15.9909 12.0007C15.9264 11.9254 15.8315 11.8524 15.5294 11.805C15.1924 11.7522 14.7314 11.75 13.9997 11.75H9.99969C9.26796 11.75 8.80698 11.7522 8.47 11.805Z',
  d6: 'M7 14.5H9.5M17 14.5H14.5M7 18H17V11H7V18Z',
  d7: 'M3.02269 2.10179L2.99137 21.9047C2.99128 21.96 3.03608 22.0049 3.09137 22.0049H20.8943C20.9496 22.0049 20.9945 21.9599 20.9943 21.9045L20.9418 7.00897L14.9759 2.00195H3.12269C3.06753 2.00195 3.02278 2.04663 3.02269 2.10179Z',
  d8: 'M21 7.00006V22.0001H3V2H15L21 7.00006ZM7 10.25C6.58579 10.25 6.25 10.5858 6.25 11V18C6.25 18.4142 6.58579 18.75 7 18.75H17C17.4142 18.75 17.75 18.4142 17.75 18V11C17.75 10.8011 17.671 10.6103 17.5303 10.4697C17.3897 10.329 17.1989 10.25 17 10.25H7ZM7.75 13.75V11.75H16.25V13.75H14.5V15.25H16.25V17.25H7.75V15.25H9.5V13.75H7.75Z',
} as const;

export const IconSimcard02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="simcard-02-stroke-rounded IconSimcard02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconSimcard02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="simcard-02-duotone-rounded IconSimcard02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
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
    </TheIconWrapper>
  );
};

export const IconSimcard02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="simcard-02-twotone-rounded IconSimcard02TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconSimcard02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="simcard-02-solid-rounded IconSimcard02SolidRounded"
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

export const IconSimcard02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="simcard-02-bulk-rounded IconSimcard02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconSimcard02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="simcard-02-stroke-sharp IconSimcard02StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSimcard02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="simcard-02-solid-sharp IconSimcard02SolidSharp"
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

export const iconPackOfSimcard02: TheIconSelfPack = {
  name: 'Simcard02',
  StrokeRounded: IconSimcard02StrokeRounded,
  DuotoneRounded: IconSimcard02DuotoneRounded,
  TwotoneRounded: IconSimcard02TwotoneRounded,
  SolidRounded: IconSimcard02SolidRounded,
  BulkRounded: IconSimcard02BulkRounded,
  StrokeSharp: IconSimcard02StrokeSharp,
  SolidSharp: IconSimcard02SolidSharp,
};