import { Text } from '@chakra-ui/react';
// const logoProps = {width: 831px;
//     height: 69px;
//     margin: 85px 52px 61px 304px;
//     font-family: Ubuntu;
//     font-size: 60px;
//     font-weight: normal;
//     font-stretch: condensed;
//     font-style: normal;
//     line-height: normal;
//     letter-spacing: normal;
//     text-align: left;
//     color: #fff;
// }
const Logo = () => {
	return (
		<div className="Logo">
			<Text width='60vw' height="7vw" fontFamily="Ubuntu" fontSize="2xl" fontWeight="light" textAlign="left"  color='#fff'>Polsko - Angielski Słownik Biologiczny</Text>
		</div>
	);
};

export default Logo;