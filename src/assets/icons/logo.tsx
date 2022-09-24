interface ILogoProps {
  width?: number | string;
  height?: number | string;
}

const Logo: React.FC<ILogoProps> = ({ width = 110, height = 46 }) => (
  <svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 110 46"
  >
    <path fill="url(#a)" d="M.934.078h102v46h-102z" />
    <defs>
      <pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b" transform="scale(.0098 .02174)" />
      </pattern>
      <image
        id="b"
        width={width}
        height={height}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default Logo;
