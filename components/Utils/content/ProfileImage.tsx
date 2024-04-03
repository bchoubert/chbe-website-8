import { FC, memo } from 'react';

const ProfileImage: FC = () => (
  <>
    <div className="root">
      <div className="myself-wrapper">
        <amp-img
          alt=""
          width="600"
          height="600"
          src="images/bertrandx600.png"
          className="myself"
          layout="responsive"
        />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="300 0 1200 900">
        <g fillOpacity="0" strokeMiterlimit="10">
          <g stroke="#AAA" strokeWidth="13.63">
            <path
              transform="translate(-196.7 27.6) rotate(12.6 1409 581)"
              d="M1409 581 1450.35 511 1490 581z"
            />
            <circle
              strokeWidth="11"
              transform="translate(477.5 131) rotate(23.8 800 450)"
              cx="500"
              cy="100"
              r="40"
            />
            <path
              transform="translate(168.3 -253.5) rotate(222.5 401 736)"
              d="M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z"
            />
          </g>
          <g stroke="#444" strokeWidth="11.1">
            <path
              transform="translate(986 -21.4) rotate(5.35 150 345) scale(0.9279)"
              d="M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z"
            />
            <rect
              strokeWidth="12"
              transform="translate(-353.5 -343) rotate(248.4 1089 759)"
              x="1039"
              y="709"
              width="100"
              height="100"
            />
            <path
              transform="translate(-392.4 187.6) rotate(41.4 1400 132) scale(0.845)"
              d="M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z"
            />
          </g>
        </g>
      </svg>
    </div>
    <style jsx>{`
      .root {
        padding-top: 5rem;
        width: 40vw;
        height: 40vw;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 100%;
      }
      .myself-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
      }
      .myself {
        width: 15rem;
      }
    `}</style>
  </>
);

export default memo(ProfileImage);
