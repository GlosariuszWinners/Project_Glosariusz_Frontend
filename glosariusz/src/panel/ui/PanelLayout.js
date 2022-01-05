import { Layout } from 'react-admin';
import { PanelMenu } from '.';

const PanelLayout = (props) => <Layout {...props} menu={PanelMenu} />;

export default PanelLayout;