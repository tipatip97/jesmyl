import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M15 7.5C15 7.5 15.5 7.5 16 8.5C16 8.5 17.5882 6 19 5.5',
  d2: 'M22 7C22 9.76142 19.7614 12 17 12C14.2386 12 12 9.76142 12 7C12 4.23858 14.2386 2 17 2C19.7614 2 22 4.23858 22 7Z',
  d3: 'M3.60746 21.0095L4.07229 20.4209L3.60746 21.0095ZM3.0528 20.4875L3.61262 19.9884L3.0528 20.4875ZM20.9472 20.4875L20.3874 19.9884L20.9472 20.4875ZM20.3925 21.0095L19.9277 20.4209L20.3925 21.0095ZM3.60746 6.99127L3.14263 6.40268L3.60746 6.99127ZM3.0528 7.5133L3.61262 8.0124L3.0528 7.5133ZM22.75 13.2445C22.7493 12.8302 22.4129 12.495 21.9987 12.4958C21.5845 12.4965 21.2493 12.8329 21.25 13.2471L22.75 13.2445ZM9.06582 6.75292C9.48003 6.75057 9.81391 6.41289 9.81157 5.99869C9.80922 5.58448 9.47154 5.2506 9.05734 5.25294L9.06582 6.75292ZM13.5 21.2504H10.5V22.7504H13.5V21.2504ZM10.5 21.2504C8.60311 21.2504 7.24353 21.2493 6.19895 21.1313C5.16816 21.0148 4.54359 20.7931 4.07229 20.4209L3.14263 21.5981C3.926 22.2168 4.86842 22.4905 6.03058 22.6218C7.17896 22.7515 8.63832 22.7504 10.5 22.7504V21.2504ZM1.25 14.0004C1.25 15.7493 1.24857 17.1321 1.38762 18.2226C1.52932 19.3337 1.82681 20.2394 2.49298 20.9866L3.61262 19.9884C3.22599 19.5547 2.99708 18.9856 2.87558 18.0328C2.75143 17.0593 2.75 15.789 2.75 14.0004H1.25ZM4.07229 20.4209C3.90545 20.2892 3.7517 20.1444 3.61262 19.9884L2.49298 20.9866C2.69068 21.2084 2.90811 21.4129 3.14263 21.5981L4.07229 20.4209ZM21.25 14.0004C21.25 15.789 21.2486 17.0593 21.1244 18.0328C21.0029 18.9856 20.774 19.5547 20.3874 19.9884L21.507 20.9866C22.1732 20.2394 22.4707 19.3337 22.6124 18.2226C22.7514 17.1321 22.75 15.7493 22.75 14.0004H21.25ZM13.5 22.7504C15.3617 22.7504 16.821 22.7515 17.9694 22.6218C19.1316 22.4905 20.074 22.2168 20.8574 21.5981L19.9277 20.4209C19.4564 20.7931 18.8318 21.0148 17.801 21.1313C16.7565 21.2493 15.3969 21.2504 13.5 21.2504V22.7504ZM20.3874 19.9884C20.2483 20.1444 20.0946 20.2892 19.9277 20.4209L20.8574 21.5981C21.0919 21.4129 21.3093 21.2084 21.507 20.9866L20.3874 19.9884ZM2.75 14.0004C2.75 12.2118 2.75143 10.9415 2.87558 9.96799C2.99708 9.01519 3.22599 8.44606 3.61262 8.0124L2.49298 7.0142C1.82681 7.76141 1.52932 8.66709 1.38762 9.77825C1.24857 10.8687 1.25 12.2515 1.25 14.0004H2.75ZM3.14263 6.40268C2.90811 6.58789 2.69068 6.79245 2.49298 7.0142L3.61262 8.0124C3.7517 7.8564 3.90545 7.71161 4.07229 7.57986L3.14263 6.40268ZM22.75 14.0004C22.75 13.7412 22.7504 13.4875 22.75 13.2445L21.25 13.2471C21.2504 13.4885 21.25 13.7376 21.25 14.0004H22.75ZM9.05734 5.25294C7.64978 5.26091 6.50411 5.29333 5.56558 5.44144C4.61301 5.59178 3.81862 5.86882 3.14263 6.40268L4.07229 7.57986C4.47956 7.25822 5.00124 7.04907 5.79942 6.92311C6.61164 6.79492 7.65139 6.76092 9.06582 6.75292L9.05734 5.25294Z',
  d4: 'M10 18H11.5',
  d5: 'M14.5 18L18 18',
  d6: 'M2.5 11H10',
  d7: 'M13.9995 11H2.03914C1.99976 11.8316 1.99976 12.8168 1.99976 13.9999C1.99976 17.5374 1.99976 19.3061 3.05256 20.487C3.22094 20.6759 3.40653 20.8506 3.60721 21.009C4.86189 21.9999 6.74118 21.9999 10.4998 21.9999H13.4998C17.2583 21.9999 19.1376 21.9999 20.3923 21.009C20.593 20.8506 20.7786 20.6759 20.947 20.487C21.9998 19.3061 21.9998 17.5374 21.9998 13.9999C21.9998 11.5702 21.9997 9.92373 21.6862 8.74658C21.8487 9.35695 21.927 10.0935 21.9647 11H20C19.1643 11.6278 18.1255 11.9998 16.9998 11.9998C15.8741 11.9998 14.8352 11.6278 13.9995 11Z',
  d8: 'M3.60746 21.009L4.07229 20.4205L3.60746 21.009ZM3.0528 20.487L3.61262 19.9879L3.0528 20.487ZM20.9472 20.487L20.3874 19.9879L20.9472 20.487ZM20.3925 21.009L19.9277 20.4205L20.3925 21.009ZM3.60746 6.99078L3.14263 6.4022L3.60746 6.99078ZM3.0528 7.51281L3.61262 8.01191L3.0528 7.51281ZM22.75 13.244C22.7493 12.8298 22.4129 12.4946 21.9987 12.4953C21.5845 12.496 21.2493 12.8324 21.25 13.2466L22.75 13.244ZM9.06582 6.75243C9.48003 6.75009 9.81391 6.4124 9.81157 5.9982C9.80922 5.58399 9.47154 5.25011 9.05734 5.25245L9.06582 6.75243ZM13.5 21.2499H10.5V22.7499H13.5V21.2499ZM10.5 21.2499C8.60311 21.2499 7.24353 21.2488 6.19895 21.1308C5.16816 21.0144 4.54359 20.7927 4.07229 20.4205L3.14263 21.5976C3.926 22.2163 4.86842 22.49 6.03058 22.6213C7.17896 22.751 8.63832 22.7499 10.5 22.7499V21.2499ZM1.25 13.9999C1.25 15.7488 1.24857 17.1317 1.38762 18.2221C1.52932 19.3332 1.82681 20.2389 2.49298 20.9861L3.61262 19.9879C3.22599 19.5543 2.99708 18.9851 2.87558 18.0323C2.75143 17.0588 2.75 15.7885 2.75 13.9999H1.25ZM4.07229 20.4205C3.90545 20.2887 3.7517 20.1439 3.61262 19.9879L2.49298 20.9861C2.69068 21.2079 2.90811 21.4124 3.14263 21.5976L4.07229 20.4205ZM21.25 13.9999C21.25 15.7885 21.2486 17.0588 21.1244 18.0323C21.0029 18.9851 20.774 19.5543 20.3874 19.9879L21.507 20.9861C22.1732 20.2389 22.4707 19.3332 22.6124 18.2221C22.7514 17.1317 22.75 15.7488 22.75 13.9999H21.25ZM13.5 22.7499C15.3617 22.7499 16.821 22.751 17.9694 22.6213C19.1316 22.49 20.074 22.2163 20.8574 21.5976L19.9277 20.4205C19.4564 20.7927 18.8318 21.0144 17.801 21.1308C16.7565 21.2488 15.3969 21.2499 13.5 21.2499V22.7499ZM20.3874 19.9879C20.2483 20.1439 20.0946 20.2887 19.9277 20.4205L20.8574 21.5976C21.0919 21.4124 21.3093 21.2079 21.507 20.9861L20.3874 19.9879ZM2.75 13.9999C2.75 12.2113 2.75143 10.9411 2.87558 9.9675C2.99708 9.0147 3.22599 8.44557 3.61262 8.01191L2.49298 7.01371C1.82681 7.76092 1.52932 8.6666 1.38762 9.77776C1.24857 10.8682 1.25 12.251 1.25 13.9999H2.75ZM3.14263 6.4022C2.90811 6.5874 2.69068 6.79196 2.49298 7.01371L3.61262 8.01191C3.7517 7.85591 3.90545 7.71113 4.07229 7.57937L3.14263 6.4022ZM22.75 13.9999C22.75 13.7407 22.7504 13.487 22.75 13.244L21.25 13.2466C21.2504 13.488 21.25 13.7371 21.25 13.9999H22.75ZM9.05734 5.25245C7.64978 5.26042 6.50411 5.29284 5.56558 5.44096C4.61301 5.59129 3.81862 5.86833 3.14263 6.4022L4.07229 7.57937C4.47956 7.25773 5.00124 7.04859 5.79942 6.92262C6.61164 6.79443 7.65139 6.76043 9.06582 6.75243L9.05734 5.25245Z',
  d9: 'M14.9656 7.51579C14.9656 7.51579 15.4682 7.51579 15.9708 8.51881C15.9708 8.51881 17.5674 6.01127 18.9866 5.50977',
  d10: 'M22.0024 7.01458C22.0024 9.78432 19.7521 12.0296 16.9762 12.0296C14.2003 12.0296 11.95 9.78432 11.95 7.01458C11.95 4.24484 14.2003 1.99951 16.9762 1.99951C19.7521 1.99951 22.0024 4.24484 22.0024 7.01458Z',
  d11: 'M9.93921 18.0479H11.4471',
  d12: 'M14.4636 18.0479H17.982',
  d13: 'M2.40015 11.0264H9.93948',
  d14: 'M21.938 13.2777C21.938 13.2777 22.1314 16.0229 21.7794 18.7459C21.5255 20.7103 19.7394 21.9341 17.7589 21.9611C14.4528 22.006 9.32985 22.0408 5.78557 21.9C3.54974 21.8111 2.11054 19.9784 2.07665 17.7411C2.03889 15.2479 1.94205 12.3588 2.041 9.91626C2.10767 8.27026 3.12751 6.77717 4.72965 6.39386C5.89445 6.11519 7.22473 5.99268 9.0268 5.99268',
  d15: 'M17 1.25C13.8244 1.25 11.25 3.82436 11.25 7C11.25 10.1756 13.8244 12.75 17 12.75C20.1756 12.75 22.75 10.1756 22.75 7C22.75 3.82436 20.1756 1.25 17 1.25ZM19.2504 6.20717C19.6408 6.06889 19.8453 5.64027 19.707 5.24982C19.5687 4.85937 19.1401 4.65495 18.7496 4.79323C18.2675 4.96399 17.8199 5.28384 17.4411 5.61601C17.0546 5.955 16.6963 6.34574 16.3947 6.70726C16.2485 6.88246 16.1135 7.05341 15.9928 7.21192C15.9046 7.12935 15.8162 7.05964 15.7285 7.00117C15.5696 6.89522 15.3292 6.7502 15 6.7502C14.5858 6.7502 14.25 7.08599 14.25 7.5002C14.25 7.87492 14.5248 8.18546 14.8839 8.24127C14.8875 8.2434 14.8917 8.24603 14.8965 8.24924C14.9522 8.28637 15.1237 8.42459 15.3292 8.83561C15.4501 9.07738 15.6917 9.2354 15.9616 9.24922C16.2315 9.26304 16.4882 9.13018 16.6332 8.90213C16.796 8.67148 17.276 7.9924 17.5465 7.66815C17.8184 7.34217 18.1219 7.01416 18.4302 6.74377C18.7463 6.46657 19.0266 6.28642 19.2504 6.20717Z',
  d16: 'M9.96187 5.25293C9.82345 5.81246 9.75 6.3976 9.75 6.99991C9.75 8.16842 10.0264 9.27236 10.5175 10.2499H1.3381C1.35223 10.0863 1.36861 9.92978 1.38763 9.78068C1.52932 8.66953 1.82681 7.76385 2.49298 7.01663C2.69068 6.79489 2.90811 6.59033 3.14263 6.40512C3.926 5.78646 4.86842 5.51271 6.03058 5.38144C7.06593 5.26448 8.35404 5.25388 9.96187 5.25293ZM11.5226 11.7499C12.8519 13.2814 14.8129 14.2499 17 14.2499C19.1871 14.2499 21.1481 13.2814 22.4774 11.7499H22.7345C22.75 12.4481 22.75 13.2209 22.75 14.0531C22.75 15.7771 22.75 17.143 22.6124 18.2225C22.4707 19.3336 22.1732 20.2393 21.507 20.9865C21.3093 21.2083 21.0919 21.4128 20.8574 21.598C20.074 22.2167 19.1316 22.4904 17.9694 22.6217C16.8308 22.7503 15.3865 22.7503 13.5475 22.7503H10.4525C8.61349 22.7503 7.16919 22.7503 6.03058 22.6217C4.86842 22.4904 3.926 22.2167 3.14263 21.598C2.90811 21.4128 2.69068 21.2083 2.49298 20.9865C1.82681 20.2393 1.52932 19.3336 1.38763 18.2225C1.24998 17.143 1.24999 15.7771 1.25 14.0531V14.0531V14.053C1.24999 13.2208 1.24999 12.4481 1.26547 11.7499H11.5226ZM9.25 18C9.25 17.5858 9.58579 17.25 10 17.25H11.5C11.9142 17.25 12.25 17.5858 12.25 18C12.25 18.4142 11.9142 18.75 11.5 18.75H10C9.58579 18.75 9.25 18.4142 9.25 18ZM14.5 17.25C14.0858 17.25 13.75 17.5858 13.75 18C13.75 18.4142 14.0858 18.75 14.5 18.75H18C18.4142 18.75 18.75 18.4142 18.75 18C18.75 17.5858 18.4142 17.25 18 17.25H14.5Z',
  d17: 'M9.9619 5.25293C9.82348 5.81246 9.75003 6.3976 9.75003 6.99991C9.75003 8.16842 10.0265 9.27236 10.5175 10.2499H1.33813C1.35226 10.0863 1.36864 9.92978 1.38766 9.78068C1.52935 8.66953 1.82684 7.76385 2.49301 7.01663C2.69071 6.79489 2.90814 6.59033 3.14266 6.40512C3.92603 5.78646 4.86845 5.51271 6.03061 5.38144C7.06596 5.26448 8.35407 5.25388 9.9619 5.25293Z',
  d18: 'M11.5226 11.75C12.8519 13.2815 14.8129 14.25 17 14.25C19.1871 14.25 21.1481 13.2815 22.4774 11.75H22.7345C22.75 12.4482 22.75 13.221 22.75 14.0532C22.75 15.7772 22.75 17.1431 22.6124 18.2226C22.4707 19.3337 22.1732 20.2394 21.507 20.9866C21.3093 21.2084 21.0919 21.4129 20.8574 21.5981C20.074 22.2168 19.1316 22.4905 17.9694 22.6218C16.8308 22.7504 15.3865 22.7504 13.5475 22.7504H10.4525C8.61349 22.7504 7.16919 22.7504 6.03058 22.6218C4.86842 22.4905 3.926 22.2168 3.14263 21.5981C2.90811 21.4129 2.69068 21.2084 2.49298 20.9866C1.82681 20.2394 1.52932 19.3337 1.38763 18.2226C1.24998 17.1431 1.24999 15.7771 1.25 14.0532C1.24999 13.221 1.24999 12.4482 1.26547 11.75H11.5226Z',
  d19: 'M9.25 18C9.25 17.5858 9.58579 17.25 10 17.25H11.5C11.9142 17.25 12.25 17.5858 12.25 18C12.25 18.4142 11.9142 18.75 11.5 18.75H10C9.58579 18.75 9.25 18.4142 9.25 18Z',
  d20: 'M13.75 18C13.75 17.5858 14.0858 17.25 14.5 17.25L18 17.25C18.4142 17.25 18.75 17.5858 18.75 18C18.75 18.4142 18.4142 18.75 18 18.75L14.5 18.75C14.0858 18.75 13.75 18.4142 13.75 18Z',
  d21: 'M10 18H12M14 18H18',
  d22: 'M2.5 11H9.5',
  d23: 'M9.5 6H2V22H22V12.5',
  d24: 'M14.75 7L16.25 8.5L19.25 5.5M22 7C22 9.76142 19.7614 12 17 12C14.2386 12 12 9.76142 12 7C12 4.23858 14.2386 2 17 2C19.7614 2 22 4.23858 22 7Z',
  d25: 'M9.75 7C9.75 6.39661 9.82371 5.81044 9.96262 5.25H2C1.58579 5.25 1.25 5.58579 1.25 6V10.25H10.5175C10.0264 9.27245 9.75 8.16851 9.75 7ZM17 14.25C14.8129 14.25 12.8519 13.2815 11.5226 11.75H1.25V22C1.25 22.4142 1.58579 22.75 2 22.75H22C22.4142 22.75 22.75 22.4142 22.75 22V11.75H22.4774C21.1481 13.2815 19.1871 14.25 17 14.25ZM10 18.75H12V17.25H10V18.75ZM14 18.75H18V17.25H14V18.75Z',
  d26: 'M17 1.25C13.8244 1.25 11.25 3.82436 11.25 7C11.25 10.1756 13.8244 12.75 17 12.75C20.1756 12.75 22.75 10.1756 22.75 7C22.75 3.82436 20.1756 1.25 17 1.25ZM19.7804 6.03039L18.7197 4.96973L16.2501 7.4394L15.2804 6.46973L14.2197 7.53039L16.2501 9.56072L19.7804 6.03039Z',
};

export const IconCreditCardValidationStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-validation-stroke-rounded IconCreditCardValidationStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeMiterlimit="10" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeMiterlimit="10" 
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
    </TheIconWrapper>
  );
};

export const IconCreditCardValidationDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-validation-duotone-rounded IconCreditCardValidationDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
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
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeMiterlimit="10" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeMiterlimit="10" 
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
    </TheIconWrapper>
  );
};

export const IconCreditCardValidationTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-validation-twotone-rounded IconCreditCardValidationTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeMiterlimit="10" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeMiterlimit="10" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCreditCardValidationSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-validation-solid-rounded IconCreditCardValidationSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCreditCardValidationBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-validation-bulk-rounded IconCreditCardValidationBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCreditCardValidationStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-validation-stroke-sharp IconCreditCardValidationStrokeSharp"
    >
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeMiterlimit="10" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCreditCardValidationSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-validation-solid-sharp IconCreditCardValidationSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCreditCardValidation: TheIconSelfPack = {
  name: 'CreditCardValidation',
  StrokeRounded: IconCreditCardValidationStrokeRounded,
  DuotoneRounded: IconCreditCardValidationDuotoneRounded,
  TwotoneRounded: IconCreditCardValidationTwotoneRounded,
  SolidRounded: IconCreditCardValidationSolidRounded,
  BulkRounded: IconCreditCardValidationBulkRounded,
  StrokeSharp: IconCreditCardValidationStrokeSharp,
  SolidSharp: IconCreditCardValidationSolidSharp,
};