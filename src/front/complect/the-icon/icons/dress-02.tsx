import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9.5 9C8.0449 8.5 7.26946 7.98853 7.5 6C7.62989 4.87968 8 4 7 3L9.5 2C9.66667 3.16667 10.5 4.5 12 5C13.5 4.5 14.3333 3.16667 14.5 2L17 3C16 4 16.3701 4.87968 16.5 6C16.7305 7.98853 15.9551 8.5 14.5 9',
  d2: 'M8.5 12H15.5C15 11 15 10 15 9H9C9 10 9 11 8.5 12Z',
  d3: 'M16.3124 21.4483C17.5989 22.1839 19.2888 22.1672 20.5946 21.4316C20.9541 21.2254 21.142 20.7479 20.8721 20.4605C18.9447 18.4075 17.4975 15.9016 16.4925 13.3545C16.2273 12.6825 16.0947 12.3465 15.8401 12.1732C15.5855 12 15.2432 12 14.5585 12H9.44152C8.75684 12 8.41451 12 8.1599 12.1732C7.90529 12.3465 7.77271 12.6825 7.50755 13.3545C6.50254 15.9016 5.05527 18.4075 3.12788 20.4605C2.85805 20.7479 3.04595 21.2254 3.40544 21.4316C4.71122 22.1672 6.40105 22.1839 7.68763 21.4483C8.49414 20.9969 9.51189 20.9969 10.2992 21.4483C10.8231 21.7434 11.4622 22 12 22C12.5378 22 13.1769 21.7434 13.7008 21.4483C14.4881 20.9969 15.5059 20.9969 16.3124 21.4483Z',
  d4: 'M9.5 9C8.0449 8.5 7.26946 7.98853 7.5 6C7.62989 4.87968 8 4 7 3L9.5 2C9.66667 3.16667 10.5 4.5 12 5C13.5 4.5 14.3333 3.16667 14.5 2L17 3C16 4 16.3701 4.87968 16.5 6C16.7305 7.98853 15.9551 8.5 14.5 9H9.5Z',
  d5: 'M9.8754 1.35071C10.0746 1.46588 10.2099 1.66613 10.2425 1.89394C10.3666 2.76312 10.9597 3.74705 12 4.19781C13.0403 3.74705 13.6334 2.76312 13.7576 1.89394C13.7901 1.66613 13.9254 1.46588 14.1246 1.35071C14.3238 1.23553 14.5649 1.21818 14.7786 1.30364L17.2786 2.30364C17.5126 2.39727 17.684 2.60224 17.7347 2.8492C17.7854 3.09616 17.7086 3.35206 17.5303 3.53033C17.1662 3.89446 17.0858 4.18321 17.0759 4.47998C17.0701 4.65385 17.0892 4.84669 17.1248 5.09085C17.1349 5.15986 17.1471 5.23719 17.16 5.31977L17.16 5.31982C17.1888 5.50301 17.2217 5.71207 17.245 5.91363C17.3706 6.99675 17.2449 7.85985 16.7205 8.52327C16.2241 9.15136 15.4692 9.46002 14.7437 9.70929C14.6653 9.73625 14.5829 9.75 14.5 9.75H9.50001C9.41708 9.75 9.33472 9.73625 9.25629 9.70929C8.53086 9.46002 7.77594 9.15136 7.2795 8.52327C6.75514 7.85985 6.62943 6.99675 6.755 5.91363C6.77837 5.71206 6.81121 5.50299 6.83998 5.31979C6.85296 5.2372 6.8651 5.15986 6.87518 5.09085C6.91084 4.84669 6.92996 4.65385 6.92414 4.47998C6.9142 4.18321 6.83381 3.89446 6.46968 3.53033C6.29142 3.35206 6.21464 3.09616 6.26533 2.8492C6.31602 2.60224 6.48739 2.39727 6.72147 2.30364L9.22147 1.30364C9.43512 1.21818 9.67619 1.23553 9.8754 1.35071Z',
  d6: 'M9.00016 8.25C9.41438 8.25 9.75016 8.58579 9.75016 9C9.75016 9.01749 9.75017 9.03504 9.75017 9.05266C9.75036 10.023 9.75059 11.1762 9.17098 12.3354C8.98574 12.7059 8.53524 12.8561 8.16475 12.6708C7.79427 12.4856 7.6441 12.0351 7.82934 11.6646C8.23922 10.8448 8.25016 10.0189 8.25016 9C8.25016 8.58579 8.58595 8.25 9.00016 8.25ZM15.0002 8.25C15.4144 8.25 15.7502 8.58579 15.7502 9C15.7502 10.0189 15.7611 10.8448 16.171 11.6646C16.3562 12.0351 16.2061 12.4856 15.8356 12.6708C15.4651 12.8561 15.0146 12.7059 14.8293 12.3354C14.2497 11.1762 14.25 10.023 14.2502 9.05266C14.2502 9.03504 14.2502 9.01749 14.2502 9C14.2502 8.58579 14.586 8.25 15.0002 8.25Z',
  d7: 'M9.40728 11.25L9.44092 11.25L14.5915 11.25C14.9049 11.25 15.1963 11.2499 15.4395 11.2759C15.7073 11.3045 15.9929 11.3704 16.2614 11.5532C16.535 11.7394 16.7027 11.9902 16.8279 12.2322C16.9438 12.4563 17.0552 12.7389 17.1772 13.0481L17.1895 13.0793C18.1675 15.5579 19.5689 17.9773 21.4183 19.9472C21.7826 20.3352 21.8033 20.8308 21.6828 21.206C21.5659 21.5698 21.3046 21.8887 20.967 22.0822L20.9621 22.085C19.4363 22.9446 17.4669 22.971 15.943 22.1013C15.3616 21.7772 14.626 21.782 14.0733 22.0989L14.0683 22.1017C13.5105 22.416 12.7333 22.75 11.9994 22.75C11.2655 22.75 10.4884 22.416 9.93048 22.1017L9.92554 22.0989C9.37285 21.782 8.63726 21.7772 8.05595 22.1013C6.53196 22.971 4.56253 22.9446 3.03672 22.085L3.03178 22.0822C2.69424 21.8887 2.43293 21.5698 2.31602 21.206C2.19546 20.8308 2.2162 20.3352 2.58049 19.9472C4.42988 17.9773 5.83128 15.5579 6.8093 13.0793L6.82157 13.0481C6.94356 12.7389 7.05505 12.4563 7.17095 12.2322C7.29615 11.9902 7.46379 11.7394 7.73738 11.5532C8.00595 11.3704 8.2915 11.3045 8.55928 11.2759C8.80256 11.2499 9.09393 11.25 9.40728 11.25Z',
  d8: 'M9.74823 9C9.74823 8.58579 9.41244 8.25 8.99823 8.25C8.58401 8.25 8.24823 8.58579 8.24823 9C8.24823 9.92714 8.23916 10.6945 7.92871 11.4429C8.13893 11.3415 8.35432 11.2978 8.55929 11.2759C8.80257 11.2499 9.09395 11.25 9.40729 11.25H9.4073L9.44094 11.25H9.56164C9.74852 10.4696 9.74837 9.7181 9.74823 9.05266L9.74823 9ZM16.0672 11.4414C15.8579 11.3411 15.6436 11.2977 15.4395 11.2759C15.1963 11.2499 14.9049 11.25 14.5916 11.25H14.5915H14.4348C14.2479 10.4696 14.2481 9.7181 14.2482 9.05266L14.2482 9C14.2482 8.58579 14.584 8.25 14.9982 8.25C15.4124 8.25 15.7482 8.58579 15.7482 9C15.7482 9.92655 15.7573 10.6936 16.0672 11.4414Z',
  d9: 'M7.5 6L8.24501 6.08637L7.5 6ZM9.25627 9.70929C9.648 9.8439 10.0747 9.63546 10.2093 9.24373C10.3439 8.852 10.1355 8.42531 9.74373 8.29071L9.25627 9.70929ZM7 3L6.72146 2.30364C6.48738 2.39727 6.31601 2.60224 6.26532 2.8492C6.21463 3.09616 6.2914 3.35206 6.46967 3.53033L7 3ZM9.5 2L10.0762 1.51986C9.86817 1.27027 9.52312 1.18298 9.22146 1.30364L9.5 2ZM16.5 6L15.755 6.08637L16.5 6ZM14.2563 8.29071C13.8645 8.42531 13.6561 8.852 13.7907 9.24373C13.9253 9.63546 14.352 9.8439 14.7437 9.70929L14.2563 8.29071ZM17 3L17.5303 3.53033C17.7086 3.35206 17.7854 3.09616 17.7347 2.8492C17.684 2.60224 17.5126 2.39727 17.2785 2.30364L17 3ZM14.5 2L14.7785 1.30364C14.4769 1.18298 14.1318 1.27027 13.9238 1.51986L14.5 2ZM12 5L11.4238 5.48014L12 6.17154L12.5762 5.48014L12 5ZM6.75499 5.91363C6.62942 6.99675 6.75512 7.85985 7.27949 8.52327C7.77593 9.15136 8.53085 9.46002 9.25627 9.70929L9.74373 8.29071C9.01405 8.03998 8.6537 7.84291 8.45628 7.59313C8.28678 7.37868 8.14004 6.99179 8.24501 6.08637L6.75499 5.91363ZM6.46967 3.53033C6.8338 3.89446 6.91419 4.18321 6.92413 4.47997C6.92995 4.65384 6.91083 4.84669 6.87517 5.09085C6.84273 5.31295 6.7889 5.62118 6.75499 5.91363L8.24501 6.08637C8.27605 5.81866 8.31719 5.59681 8.35942 5.30763C8.39844 5.04051 8.4337 4.74088 8.42329 4.42979C8.40075 3.75663 8.1662 3.10554 7.53033 2.46967L6.46967 3.53033ZM7.27854 3.69636L9.77854 2.69636L9.22146 1.30364L6.72146 2.30364L7.27854 3.69636ZM15.755 6.08637C15.86 6.99179 15.7132 7.37868 15.5437 7.59313C15.3463 7.84291 14.9859 8.03998 14.2563 8.29071L14.7437 9.70929C15.4691 9.46002 16.2241 9.15136 16.7205 8.52327C17.2449 7.85985 17.3706 6.99675 17.245 5.91363L15.755 6.08637ZM16.4697 2.46967C15.8338 3.10554 15.5992 3.75663 15.5767 4.42979C15.5663 4.74088 15.6016 5.04051 15.6406 5.30763C15.6828 5.59681 15.724 5.81866 15.755 6.08637L17.245 5.91363C17.2111 5.62118 17.1573 5.31295 17.1248 5.09085C17.0892 4.84669 17.0701 4.65384 17.0759 4.47997C17.0858 4.18321 17.1662 3.89446 17.5303 3.53033L16.4697 2.46967ZM17.2785 2.30364L14.7785 1.30364L14.2215 2.69636L16.7215 3.69636L17.2785 2.30364ZM13.9238 1.51986L11.4238 4.51986L12.5762 5.48014L15.0762 2.48014L13.9238 1.51986ZM12.5762 4.51986L10.0762 1.51986L8.92383 2.48014L11.4238 5.48014L12.5762 4.51986Z',
  d10: 'M9 12H15V9H9V12Z',
  d11: 'M16.3124 21.4483C17.5989 22.1839 19.6279 22 21 21C19.0726 18.947 17.005 14.5471 16 12H8C6.995 14.5471 4.92739 18.947 3 21C4.37212 22 6.40105 22.1839 7.68763 21.4483C8.49414 20.9969 9.51189 20.9969 10.2992 21.4483C10.8231 21.7434 11.4622 22 12 22C12.5378 22 13.1769 21.7434 13.7008 21.4483C14.4881 20.9969 15.5059 20.9969 16.3124 21.4483Z',
  d12: 'M9.22147 1.30368C9.52313 1.18302 9.86818 1.27031 10.0762 1.5199L12 3.8285L13.9238 1.5199C14.1318 1.27031 14.4769 1.18302 14.7786 1.30368L17.2786 2.30368C17.5126 2.39731 17.684 2.60228 17.7347 2.84924C17.7854 3.0962 17.7086 3.3521 17.5303 3.53037C17.1662 3.8945 17.0858 4.18325 17.0759 4.48002C17.0701 4.65389 17.0892 4.84673 17.1248 5.09089C17.1349 5.1599 17.1471 5.23722 17.16 5.31981L17.16 5.31986C17.1888 5.50305 17.2217 5.71211 17.245 5.91367C17.3706 6.99679 17.2449 7.85989 16.7205 8.52331C16.2241 9.1514 15.4692 9.46006 14.7437 9.70933C14.6653 9.73629 14.5829 9.75004 14.5 9.75004H9.50001C9.41708 9.75004 9.33472 9.73629 9.25629 9.70933C8.53086 9.46006 7.77594 9.1514 7.2795 8.52331C6.75514 7.85989 6.62943 6.99679 6.755 5.91367C6.77837 5.7121 6.81121 5.50302 6.83998 5.31982C6.85296 5.23724 6.8651 5.1599 6.87518 5.09089C6.91084 4.84673 6.92996 4.65389 6.92414 4.48002C6.9142 4.18325 6.83381 3.8945 6.46968 3.53037C6.29142 3.3521 6.21464 3.0962 6.26533 2.84924C6.31602 2.60228 6.48739 2.39731 6.72147 2.30368L9.22147 1.30368Z',
  d13: 'M9.75 9V12H8.25V9H9.75ZM14.25 12V9H15.75V12H14.25Z',
  d14: 'M7.30235 11.7247C7.41538 11.4383 7.69204 11.25 8 11.25H16C16.308 11.25 16.5846 11.4383 16.6977 11.7247C17.1915 12.9762 17.9484 14.6877 18.8175 16.3354C19.6938 17.9969 20.6547 19.5364 21.5468 20.4867C21.694 20.6435 21.7668 20.8559 21.7467 21.0701C21.7266 21.2842 21.6156 21.4794 21.4417 21.6061C19.8703 22.7514 17.5254 23.0035 15.9436 22.1014C15.3623 21.7772 14.6266 21.782 14.0739 22.0989L14.0689 22.1017C13.5111 22.416 12.7339 22.75 12 22.75C11.2661 22.75 10.489 22.416 9.93107 22.1017L9.92614 22.0989C9.37341 21.782 8.63778 21.7772 8.05645 22.1013C6.47464 23.0035 4.12972 22.7514 2.55827 21.6061C2.38445 21.4794 2.27338 21.2842 2.25328 21.0701C2.23319 20.8559 2.306 20.6435 2.45321 20.4867C3.34535 19.5364 4.3062 17.9969 5.18251 16.3354C6.05158 14.6877 6.80855 12.9762 7.30235 11.7247Z',
} as const;

export const IconDress02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dress-02-stroke-rounded IconDress02StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconDress02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dress-02-duotone-rounded IconDress02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
      />
    </TheIconWrapper>
  );
};

export const IconDress02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dress-02-twotone-rounded IconDress02TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDress02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dress-02-solid-rounded IconDress02SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDress02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dress-02-bulk-rounded IconDress02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
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

export const IconDress02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dress-02-stroke-sharp IconDress02StrokeSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDress02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dress-02-solid-sharp IconDress02SolidSharp"
    >
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
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDress02: TheIconSelfPack = {
  name: 'Dress02',
  StrokeRounded: IconDress02StrokeRounded,
  DuotoneRounded: IconDress02DuotoneRounded,
  TwotoneRounded: IconDress02TwotoneRounded,
  SolidRounded: IconDress02SolidRounded,
  BulkRounded: IconDress02BulkRounded,
  StrokeSharp: IconDress02StrokeSharp,
  SolidSharp: IconDress02SolidSharp,
};