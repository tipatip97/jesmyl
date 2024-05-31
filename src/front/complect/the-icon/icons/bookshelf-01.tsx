import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5.5 20V22M19.5 20V22',
  d2: 'M3 11L21 11',
  d3: 'M3 14V8C3 5.17157 3 3.75736 3.93037 2.87868C4.86073 2 6.35814 2 9.35294 2H14.6471C17.6419 2 19.1393 2 20.0696 2.87868C21 3.75736 21 5.17157 21 8V14C21 16.8284 21 18.2426 20.0696 19.1213C19.1393 20 17.6419 20 14.6471 20H9.35294C6.35814 20 4.86073 20 3.93037 19.1213C3 18.2426 3 16.8284 3 14Z',
  d4: 'M13.5 11L11.5 6',
  d5: 'M7 11V6',
  d6: 'M8 19.5V15',
  d7: 'M12 20V15',
  d8: 'M17 11V6',
  d9: 'M16 20L17 15',
  d10: 'M14.6471 20H9.35294C6.35814 20 4.86073 20 3.93037 19.1213C3 18.2426 3 16.8284 3 14V11H21V14V14C21 16.8284 21 18.2426 20.0696 19.1213C19.1393 20 17.6419 20 14.6471 20Z',
  d11: 'M5.5 18.75C6.05228 18.75 6.5 19.1977 6.5 19.75V21.75C6.5 22.3023 6.05228 22.75 5.5 22.75C4.94772 22.75 4.5 22.3023 4.5 21.75V19.75C4.5 19.1977 4.94772 18.75 5.5 18.75ZM19.5 18.75C20.0523 18.75 20.5 19.1977 20.5 19.75V21.75C20.5 22.3023 20.0523 22.75 19.5 22.75C18.9477 22.75 18.5 22.3023 18.5 21.75V19.75C18.5 19.1977 18.9477 18.75 19.5 18.75Z',
  d12: 'M17.7354 16.1472C17.8167 15.7411 17.5533 15.3459 17.1471 15.2647C16.7409 15.1835 16.3458 15.4469 16.2646 15.8531L15.3815 20.2682C15.3354 20.4987 15.3124 20.614 15.2294 20.682C15.1465 20.75 15.029 20.75 14.7942 20.75C14.7628 20.75 14.7312 20.75 14.6996 20.75H13.35C13.0672 20.75 12.9257 20.75 12.8379 20.6621C12.75 20.5743 12.75 20.4328 12.75 20.15V16.0001C12.75 15.5859 12.4142 15.2501 12 15.2501C11.5858 15.2501 11.25 15.5859 11.25 16.0001V20.15C11.25 20.4328 11.25 20.5743 11.1621 20.6621C11.0743 20.75 10.9328 20.75 10.65 20.75H9.30043C9.06524 20.75 8.94764 20.75 8.86663 20.6874C8.84639 20.6718 8.8282 20.6536 8.81257 20.6334C8.75 20.5524 8.75 20.4347 8.75 20.1993V16.0001C8.75 15.5859 8.41421 15.2501 8 15.2501C7.58579 15.2501 7.25 15.5859 7.25 16.0001L7.25 20.1167C7.25 20.4087 7.25 20.5547 7.15624 20.6435C7.06248 20.7323 6.91958 20.7244 6.63379 20.7087C6.32504 20.6918 6.03845 20.6679 5.77302 20.6342C4.83238 20.5148 4.04447 20.2607 3.4154 19.6666C2.78029 19.0667 2.50307 18.3057 2.37378 17.3975C2.24996 16.5277 2.24998 15.4229 2.25 14.0576V14.0576V12.35C2.25 12.0672 2.25 11.9257 2.33787 11.8379C2.42574 11.75 2.56716 11.75 2.85 11.75H6.98254L7 11.7502L7.01746 11.75L13.4759 11.75C13.4921 11.7505 13.5083 11.7505 13.5246 11.75H16.9825L17 11.7502L17.0175 11.75H21.15C21.4328 11.75 21.5743 11.75 21.6621 11.8379C21.75 11.9257 21.75 12.0672 21.75 12.35V14.0577C21.75 15.4229 21.75 16.5277 21.6262 17.3975C21.4969 18.3057 21.2197 19.0667 20.5846 19.6666C19.9555 20.2607 19.1676 20.5148 18.227 20.6342C18.0216 20.6603 17.8035 20.6805 17.5723 20.6961C17.23 20.7193 17.0589 20.7309 16.9611 20.6195C16.8633 20.5081 16.8977 20.3359 16.9666 19.9915L17.7354 16.1472ZM2.85 10.25H5.65C5.93284 10.25 6.07426 10.25 6.16213 10.1621C6.25 10.0743 6.25 9.93284 6.25 9.65V6.0002C6.25 5.58599 6.58579 5.2502 7 5.2502C7.41421 5.2502 7.75 5.58599 7.75 6.0002V9.65C7.75 9.93284 7.75 10.0743 7.83787 10.1621C7.92574 10.25 8.06716 10.25 8.35 10.25L11.5059 10.25C11.9075 10.25 12.1082 10.25 12.1975 10.1182C12.2867 9.98638 12.2121 9.79997 12.063 9.42717L10.8036 6.27874C10.6498 5.89415 10.8369 5.45768 11.2215 5.30384C11.606 5.15001 12.0425 5.33707 12.1964 5.72166L13.8568 9.87283C13.9299 10.0555 13.9664 10.1468 14.0426 10.1984C14.1188 10.25 14.2172 10.25 14.4139 10.25H15.65C15.9328 10.25 16.0743 10.25 16.1621 10.1621C16.25 10.0743 16.25 9.93284 16.25 9.65V6.0002C16.25 5.58599 16.5858 5.2502 17 5.2502C17.4142 5.2502 17.75 5.58599 17.75 6.0002V9.65C17.75 9.93284 17.75 10.0743 17.8379 10.1621C17.9257 10.25 18.0672 10.25 18.35 10.25H21.15C21.4328 10.25 21.5743 10.25 21.6621 10.1621C21.75 10.0743 21.75 9.93284 21.75 9.65V7.94234C21.75 6.57713 21.75 5.47231 21.6262 4.60249C21.4969 3.69426 21.2197 2.93325 20.5846 2.33342C19.9555 1.73931 19.1676 1.48525 18.227 1.36581C17.3147 1.24997 16.1524 1.24998 14.6997 1.25H14.6996H9.3004H9.30036C7.84759 1.24998 6.68529 1.24997 5.77302 1.36581C4.83238 1.48525 4.04447 1.73931 3.4154 2.33342C2.78029 2.93325 2.50307 3.69426 2.37378 4.60249C2.24996 5.47231 2.24998 6.57712 2.25 7.94232V7.94236L2.25 9.65C2.25 9.93284 2.25 10.0743 2.33787 10.1621C2.42574 10.25 2.56716 10.25 2.85 10.25Z',
  d13: 'M14.6996 1.25C16.1524 1.24998 17.3147 1.24997 18.227 1.36581C19.1676 1.48525 19.9555 1.73931 20.5846 2.33342C21.2197 2.93325 21.4969 3.69426 21.6262 4.60249C21.75 5.47231 21.75 6.57713 21.75 7.94234V9.65C21.75 9.93284 21.75 10.0743 21.6621 10.1621C21.5743 10.25 21.4328 10.25 21.15 10.25H2.85C2.56716 10.25 2.42574 10.25 2.33787 10.1621C2.25 10.0743 2.25 9.93284 2.25 9.65V7.94236C2.24998 6.57714 2.24996 5.47232 2.37378 4.60249C2.50307 3.69426 2.78028 2.93325 3.4154 2.33342C4.04447 1.73931 4.83237 1.48525 5.77302 1.36581C6.6853 1.24997 7.84761 1.24998 9.3004 1.25H14.6996Z',
  d14: 'M21.75 14.0577C21.75 15.4229 21.75 16.5277 21.6262 17.3975C21.4969 18.3057 21.2197 19.0667 20.5846 19.6666C19.9555 20.2607 19.1676 20.5148 18.227 20.6342C17.3147 20.75 16.1524 20.75 14.6996 20.75H9.30043C7.84761 20.75 6.68531 20.75 5.77302 20.6342C4.83238 20.5148 4.04447 20.2607 3.4154 19.6666C2.78028 19.0667 2.50307 18.3057 2.37378 17.3975C2.24996 16.5277 2.24998 15.4228 2.25 14.0576V12.35C2.25 12.0672 2.25 11.9257 2.33787 11.8379C2.42574 11.75 2.56716 11.75 2.85 11.75H21.15C21.4328 11.75 21.5743 11.75 21.6621 11.8379C21.75 11.9257 21.75 12.0672 21.75 12.35V14.0577Z',
  d15: 'M4.5 20.3357C4.88712 20.4832 5.3117 20.5742 5.77302 20.6328C5.9997 20.6615 6.24182 20.6832 6.5 20.6994V21.7486C6.5 22.3008 6.05228 22.7486 5.5 22.7486C4.94772 22.7486 4.5 22.3008 4.5 21.7486V20.3357Z',
  d16: 'M20.5 19.7422C20.5 19.7443 20.5 19.7464 20.5 19.7486V21.7486C20.5 22.3008 20.0523 22.7486 19.5 22.7486C18.9477 22.7486 18.5 22.3008 18.5 21.7486V20.5934C19.2806 20.4666 19.9486 20.226 20.5 19.7422Z',
  d17: 'M13.5154 11.7502C13.5053 11.7505 13.4952 11.7505 13.4851 11.7502H13.5154Z',
  d18: 'M6.25 10.2502H7.75V6.0002C7.75 5.58599 7.41421 5.2502 7 5.2502C6.58579 5.2502 6.25 5.58599 6.25 6.0002V10.2502Z',
  d19: 'M16.25 10.2502H17.75V6.0002C17.75 5.58599 17.4142 5.2502 17 5.2502C16.5858 5.2502 16.25 5.58599 16.25 6.0002V10.2502Z',
  d20: 'M14.0078 10.2502L12.1964 5.72166C12.0425 5.33707 11.606 5.15001 11.2215 5.30384C10.8369 5.45768 10.6498 5.89416 10.8036 6.27874L12.3922 10.2502H14.0078Z',
  d21: 'M17.7354 16.1472C17.8167 15.7411 17.5533 15.3459 17.1471 15.2647C16.7409 15.1835 16.3458 15.4469 16.2646 15.8531L15.2852 20.7499C15.8423 20.7491 16.3525 20.7455 16.8186 20.7316L17.7354 16.1472Z',
  d22: 'M12.75 20.7502V16.0001C12.75 15.5859 12.4142 15.2501 12 15.2501C11.5858 15.2501 11.25 15.5859 11.25 16.0001V20.7502H12.75Z',
  d23: 'M8.75 20.75V16.0001C8.75 15.5859 8.41421 15.2501 8 15.2501C7.58579 15.2501 7.25 15.5859 7.25 16.0001V20.7336C7.70729 20.7461 8.20646 20.7492 8.75 20.75Z',
  d24: 'M5 19V22M19 19V22',
  d25: 'M3 10.5L21 10.5',
  d26: 'M3 19V2H21V19H3Z',
  d27: 'M8 18.5V14',
  d28: 'M12 19V14',
  d29: 'M13.5 10.5L11.5 5.5M7 10.5V5.5M17 10.5V5.5',
  d30: 'M16 19L17 14',
  d31: 'M4 22.25V19.25H6V22.25H4ZM18 22.25V19.25H20V22.25H18Z',
  d32: 'M21.75 11.75L2.25 11.75L2.25 19.5C2.25 19.9142 2.58579 20.25 3 20.25L21 20.25C21.4142 20.25 21.75 19.9142 21.75 19.5V11.75ZM21 1.75L3 1.75C2.58579 1.75 2.25 2.08579 2.25 2.5L2.25 10.25L21.75 10.25L21.75 2.5C21.75 2.30109 21.671 2.11032 21.5303 1.96967C21.3897 1.82902 21.1989 1.75 21 1.75ZM7.25 18.75H8.75V14.103H7.25L7.25 18.75ZM12.75 18.75H11.25V14.103H12.75V18.75ZM16.8346 18.75H15.3049L16.2637 13.9561L17.7345 14.2502L16.8346 18.75ZM7.75 8.74986H6.25V3.99941H7.75V8.74986ZM12.5233 8.74986H14.1389L12.1964 3.89355L10.8036 4.45064L12.5233 8.74986ZM16.25 8.74986H17.75V3.99941L16.25 3.99941V8.74986Z',
} as const;

export const IconBookshelf01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bookshelf-01-stroke-rounded IconBookshelf01StrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBookshelf01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bookshelf-01-duotone-rounded IconBookshelf01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBookshelf01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bookshelf-01-twotone-rounded IconBookshelf01TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBookshelf01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bookshelf-01-solid-rounded IconBookshelf01SolidRounded"
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

export const IconBookshelf01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bookshelf-01-bulk-rounded IconBookshelf01BulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBookshelf01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bookshelf-01-stroke-sharp IconBookshelf01StrokeSharp"
    >
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d25} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d26} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d27} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d28} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d29} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d30} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBookshelf01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="bookshelf-01-solid-sharp IconBookshelf01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d31} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d32} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBookshelf01: TheIconSelfPack = {
  name: 'Bookshelf01',
  StrokeRounded: IconBookshelf01StrokeRounded,
  DuotoneRounded: IconBookshelf01DuotoneRounded,
  TwotoneRounded: IconBookshelf01TwotoneRounded,
  SolidRounded: IconBookshelf01SolidRounded,
  BulkRounded: IconBookshelf01BulkRounded,
  StrokeSharp: IconBookshelf01StrokeSharp,
  SolidSharp: IconBookshelf01SolidSharp,
};