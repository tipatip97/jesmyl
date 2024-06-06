import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 6L12.9536 9.85977C13.119 10.5295 13.72 11 14.4098 11H20',
  d2: 'M2 6H13.0689C14.6176 6 15.3919 6 16.0484 6.34597C16.705 6.69194 17.1427 7.33069 18.0182 8.60818C18.6321 9.50396 19.2765 10.1542 20.1826 10.7326C21.0949 11.315 21.5287 11.5996 21.7694 12.0566C22 12.4942 22 13.0125 22 14.049C22 15.4156 22 16.0989 21.5875 16.5331C21.5699 16.5517 21.5517 16.5699 21.5331 16.5875C21.0989 17 20.4156 17 19.049 17M5 17C4.67926 17 4.38501 17 4.22939 16.9666C4.07377 16.9332 3.92752 16.8674 3.63503 16.7358L2 16C2 12.8056 2.47904 10.9623 3.10557 9.44992C3.5164 8.45825 3.72182 7.96241 3.63686 7.52064C3.5519 7.07887 2.5 6 2.5 6M9 17H15',
  d3: 'M2.5 6H12L12.9536 9.85977C13.119 10.5295 13.72 11 14.4098 11H20C21.5331 11.5 21.5287 11.5996 21.7694 12.0566C22 12.4942 22 13.0125 22 14.049C22 15.4156 22 16.0989 21.5875 16.5331C21.5699 16.5517 21.5517 16.5699 21.5331 16.5875C21.0989 17 20.4156 17 19.049 17H19C19 15.8954 18.1046 15 17 15C15.8954 15 15 15.8954 15 17H9C9 15.8954 8.10457 15 7 15C5.89543 15 5 15.8954 5 17C4.67926 17 4.38501 17 4.22939 16.9666C4.07379 16.9332 3.92747 16.8674 3.63503 16.7358L2 16C2 12.8056 2.47904 10.9623 3.10557 9.44992C3.5164 8.45825 3.72182 7.96241 3.63686 7.52064C3.5519 7.07887 2.5 6 2.5 6Z',
  d4: 'M2.22727 5.125C1.68754 5.125 1.25 5.5555 1.25 6.08654C1.25 6.61758 1.68754 7.04808 2.22727 7.04808C2.31144 7.04808 2.58635 7.39955 2.74674 7.61469C2.86289 7.77048 2.86518 7.78265 2.80111 7.96956C2.71249 8.22811 2.54815 8.69543 2.40486 9.03576C1.73859 10.6181 1.25 12.5171 1.25 15.7019C1.25 16.0882 1.4849 16.4369 1.84643 16.5874L2.98307 17.0607C3.1105 17.1137 3.25 17.013 3.25 16.875C3.25 14.8039 4.92893 13.125 7 13.125C9.07107 13.125 10.75 14.8039 10.75 16.875C10.75 17.047 10.7384 17.2162 10.716 17.382C10.6989 17.5086 10.7921 17.625 10.9198 17.625L13.0802 17.625C13.2079 17.625 13.3011 17.5086 13.284 17.382C13.2616 17.2162 13.25 17.047 13.25 16.875C13.25 14.8039 14.9289 13.125 17 13.125C19.089 13.125 20.8116 14.9048 20.7482 16.991C20.7398 17.2694 20.7356 17.4086 20.8208 17.4708C20.906 17.5329 21.0158 17.4941 21.2354 17.4163C21.5358 17.3098 21.8293 17.1345 22.0782 16.8767C22.4794 16.4611 22.6275 15.9636 22.6914 15.4806C22.7501 15.0373 22.7501 14.491 22.75 13.8832C22.75 13.4439 22.7586 13.0021 22.7177 12.5642C22.6827 12.1891 22.6054 11.8231 22.412 11.462C22.0482 10.7826 21.3993 10.3761 20.6422 9.90175C19.8614 9.41217 19.2155 8.80882 18.6875 8.05084C18.335 7.54458 17.9889 7.029 17.5907 6.55686C17.2485 6.15118 16.8856 5.81409 16.412 5.56856C15.9385 5.32302 15.4507 5.21903 14.9172 5.17065C14.4135 5.12497 13.8077 5.12499 13.0876 5.125H2.22727ZM12.8007 7.04824C13.5358 7.04964 14.4149 7.05607 14.738 7.08538C15.1216 7.12016 15.333 7.1825 15.501 7.26963C15.6691 7.35676 15.8409 7.4931 16.0869 7.78475C16.3456 8.09153 16.6377 8.50924 17.0755 9.13774C17.3193 9.48783 17.5706 9.80626 17.8406 10.1003C18.1683 10.4572 18.3321 10.6357 18.2796 10.7552C18.227 10.8748 17.9957 10.8748 17.5329 10.8748H14.41C13.7202 10.8748 13.1193 10.4043 12.9538 9.73454L12.4126 7.54379C12.3561 7.31529 12.3279 7.20104 12.3881 7.1243C12.4483 7.04757 12.5658 7.04779 12.8007 7.04824Z',
  d5: 'M2.22727 5.125C1.68754 5.125 1.25 5.5555 1.25 6.08654C1.25 6.61758 1.68754 7.04808 2.22727 7.04808C2.31144 7.04808 2.58635 7.39955 2.74674 7.61469C2.86289 7.77048 2.86518 7.78265 2.80111 7.96956C2.71249 8.22811 2.54815 8.69543 2.40486 9.03576C1.73859 10.6181 1.25 12.5171 1.25 15.7019C1.25 16.0882 1.4849 16.4369 1.84643 16.5874L2.98307 17.0607C3.1105 17.1137 3.25 17.013 3.25 16.875C3.25 14.8039 4.92893 13.125 7 13.125C9.07107 13.125 10.75 14.8039 10.75 16.875C10.75 17.047 10.7384 17.2162 10.716 17.382C10.6989 17.5086 10.7921 17.625 10.9198 17.625L13.0802 17.625C13.2079 17.625 13.3011 17.5086 13.284 17.382C13.2616 17.2162 13.25 17.047 13.25 16.875C13.25 14.8039 14.9289 13.125 17 13.125C19.089 13.125 20.8116 14.9048 20.7482 16.991C20.7398 17.2694 20.7356 17.4086 20.8208 17.4708C20.906 17.5329 21.0158 17.4941 21.2354 17.4163C21.5358 17.3098 21.8293 17.1345 22.0782 16.8767C22.4794 16.4611 22.6275 15.9636 22.6914 15.4806C22.7501 15.0373 22.7501 14.491 22.75 13.8832C22.75 13.4439 22.7586 13.0021 22.7177 12.5642C22.6827 12.1891 22.6054 11.8231 22.412 11.462C22.0482 10.7826 21.3993 10.3761 20.6422 9.90175C19.8614 9.41217 19.2155 8.80882 18.6875 8.05084C18.335 7.54458 17.9889 7.029 17.5907 6.55686C17.2485 6.15118 16.8856 5.81409 16.412 5.56856C15.9385 5.32302 15.4507 5.21903 14.9172 5.17065C14.4135 5.12497 13.8078 5.12499 13.0876 5.125H13.0876H2.22727Z',
  d6: 'M12.8018 7.04694C13.5368 7.04834 14.4159 7.05478 14.7391 7.08408C15.1226 7.11886 15.334 7.1812 15.5021 7.26833C15.6701 7.35546 15.8419 7.4918 16.0879 7.78345C16.3467 8.09023 16.6388 8.50795 17.0765 9.13644C17.3204 9.48653 17.5717 9.80496 17.8416 10.099C18.1693 10.4559 18.3331 10.6344 18.2806 10.7539C18.2281 10.8735 17.9967 10.8735 17.534 10.8735H14.4111C13.7212 10.8735 13.1203 10.403 12.9549 9.73325L12.4136 7.54249C12.3572 7.31399 12.3289 7.19974 12.3891 7.123C12.4493 7.04627 12.5668 7.04649 12.8018 7.04694Z',
  d7: 'M10 6L13.5 11H19',
  d8: 'M1.5 6L15 6L19 11.0004L22 12.5V17.0004H19M3 6.00041L3.5 8L2 14L3 17.0004H5M9 17.0004H15',
  d9: 'M2.44145 6.67301H1.27918V4.75H14.9318C15.2287 4.75 15.5095 4.88279 15.695 5.11089L19.4699 9.75387L22.2097 11.1012C22.5408 11.2641 22.75 11.5971 22.75 11.9613V16.2885C22.75 16.8195 22.3125 17.25 21.7727 17.25H20.7171C20.7388 17.0867 20.75 16.9202 20.75 16.751C20.75 14.6799 19.0711 13.001 17 13.001C14.9289 13.001 13.25 14.6799 13.25 16.751C13.25 16.9202 13.2612 17.0867 13.2829 17.25H10.7171C10.7388 17.0867 10.75 16.9202 10.75 16.751C10.75 14.6799 9.07107 13.001 7 13.001C4.92893 13.001 3.25 14.6799 3.25 16.751C3.25 16.9202 3.2612 17.0867 3.28291 17.25H3.20455C2.78388 17.25 2.41042 16.9852 2.27741 16.5925L1.30014 13.7076C1.24137 13.5341 1.2341 13.3477 1.27918 13.1704L2.68583 7.63454L2.44145 6.67301ZM14.4613 6.67285L17.5732 10.5003H13.4995L10.8203 6.67285H14.4613Z',
  d10: 'M19.502 16.751C19.502 18.1317 18.3827 19.251 17.002 19.251C15.6212 19.251 14.502 18.1317 14.502 16.751C14.502 15.3703 15.6212 14.251 17.002 14.251C18.3827 14.251 19.502 15.3703 19.502 16.751Z',
  d11: 'M9.50195 16.751C9.50195 18.1317 8.38267 19.251 7.00195 19.251C5.62124 19.251 4.50195 18.1317 4.50195 16.751C4.50195 15.3703 5.62124 14.251 7.00195 14.251C8.38267 14.251 9.50195 15.3703 9.50195 16.751Z',
};

export const IconVanStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="van-stroke-rounded IconVanStrokeRounded"
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
      <circle 
        cx="17" 
        cy="17" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="7" 
        cy="17" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconVanDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="van-duotone-rounded IconVanDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
      <circle 
        cx="17" 
        cy="17" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="7" 
        cy="17" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconVanTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="van-twotone-rounded IconVanTwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="17" 
        cy="17" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="7" 
        cy="17" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconVanSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="van-solid-rounded IconVanSolidRounded"
    >
      <circle 
        cx="17" 
        cy="16.875" 
        r="2.5" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="7" 
        cy="16.875" 
        r="2.5" 
        fill="var(--icon-fill)"></circle>
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconVanBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="van-bulk-rounded IconVanBulkRounded"
    >
      <circle 
        cx="17" 
        cy="16.875" 
        r="2.5" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="7" 
        cy="16.875" 
        r="2.5" 
        fill="var(--icon-fill)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconVanStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="van-stroke-sharp IconVanStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="17" 
        cy="17" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="7" 
        cy="17" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconVanSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="van-solid-sharp IconVanSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfVan: TheIconSelfPack = {
  name: 'Van',
  StrokeRounded: IconVanStrokeRounded,
  DuotoneRounded: IconVanDuotoneRounded,
  TwotoneRounded: IconVanTwotoneRounded,
  SolidRounded: IconVanSolidRounded,
  BulkRounded: IconVanBulkRounded,
  StrokeSharp: IconVanStrokeSharp,
  SolidSharp: IconVanSolidSharp,
};