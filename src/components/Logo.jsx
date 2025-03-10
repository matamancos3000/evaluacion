import { useTheme } from 'next-themes';
import { useNavigate } from "react-router-dom";


function Logo(props) {
    const navigate = useNavigate();

  const { theme } = useTheme();

  const handleSmallButtonClick = () => {
    // Redirige a la ruta deseada cuando se hace clic en el botón "Small"
    navigate("/");
  };

  return (
    
<a onClick={handleSmallButtonClick}>
    <svg
      version="1.1"
      id="LogoHSBC"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 141.6 38"
      style={{ enableBackground: 'new 0 0 141.6 38' }}
      xmlSpace="preserve"
      className={`h-8 w-auto transition-transform transform hover:scale-125`}
    >
      <style type="text/css">
        {theme === 'dark'
          ? '.st0{fill:#FFFFFF;}.st1{fill:#FFFFFF;}.st2{fill:#DB0011;}'
          : '.st1{fill:#FFFFFF;}.st0{fill:#000000;}.st2{fill:#DB0011;}'}
      </style>
      <g>
        <path className="st0" d="M92.3,20.1h-6.7v6.6h-3.4V11.2h3.4v6.3h6.7v-6.3h3.4v15.5h-3.4V20.1z" />
        <path className="st0" d="M103.8,27c-3.3,0-6.1-1.3-6.2-5h3.4c0,1.7,1,2.6,2.9,2.6c1.4,0,2.9-0.7,2.9-2.2c0-1.2-1.1-1.6-2.8-2.1
		l-1.1-0.3c-2.4-0.7-4.9-1.7-4.9-4.4c0-3.5,3.2-4.6,6.2-4.6s5.6,1.1,5.6,4.5h-3.4c-0.1-1.4-0.9-2.2-2.5-2.2c-1.2,0-2.5,0.7-2.5,2
		c0,1.1,1,1.5,3.2,2.2l1.3,0.4c2.7,0.8,4.3,1.8,4.3,4.3C110.2,25.7,106.8,27,103.8,27z" />
        <path className="st0" d="M112.1,11.2h5.4c1.7,0,2.4,0,3,0.2c1.9,0.4,3.3,1.7,3.3,3.7s-1.3,3-3.1,3.5c2.1,0.4,3.6,1.5,3.6,3.8
		c0,3.5-3.5,4.3-6.2,4.3H112L112.1,11.2L112.1,11.2z M117.5,17.7c1.5,0,3-0.3,3-2.1c0-1.6-1.4-2-2.8-2h-2.4v4.1H117.5z M117.9,24.4
		c1.6,0,3.1-0.4,3.1-2.3c0-1.8-1.3-2.3-2.9-2.3h-2.7v4.5L117.9,24.4L117.9,24.4z" />
        <path className="st0" d="M133.2,27c-5,0-7.3-3.2-7.3-7.9s2.5-8.2,7.4-8.2c3.1,0,6.1,1.4,6.2,4.9H136c-0.2-1.5-1.2-2.4-2.7-2.4
		c-3,0-3.9,3.3-3.9,5.7c0,2.5,0.9,5.3,3.8,5.3c1.5,0,2.6-0.8,2.9-2.4h3.5C139.2,25.7,136.4,27,133.2,27z" />
        <g>
          <rect x="20.5" y="0.5" className="st1" width="37" height="37" />
          <polygon className="st2" points="57.6,37.5 76.1,19 57.6,0.5 57.6,0.5" />
          <polygon className="st2" points="20.5,37.5 2,19 20.5,0.5 20.5,0.5" />
          <polygon className="st2" points="57.6,0.5 39,19 20.5,0.5 20.5,0.5" />
          <polygon className="st2" points="20.5,37.5 39,19 57.6,37.5 57.6,37.5" />
        </g>
      </g>
    </svg>
</a>

  );
}

export default Logo;
