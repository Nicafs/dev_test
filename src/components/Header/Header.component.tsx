import React from 'react';
import { Link } from 'react-router-dom';

import { Box } from '@mui/system';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import './header.styles.scss';

export const Header: React.FC = () => {
  return (
    <header className="headerApp">
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <div className="sistema-container">
          <Link className="logo-container" to="/">
            <Logo className="logo" style={{ width: '100%', height: '100%' }} />
          </Link>

          <h1>Sistema de Teste</h1>
        </div>
      </Box>
    </header>
  );
};
