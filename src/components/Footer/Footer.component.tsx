import React from 'react';

import { Hidden } from '@mui/material';
import { Box } from '@mui/system';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import './footer.styles.scss';

export const Footer: React.FC = () => (
  <footer className="footer">
    {/* Título */}
    <Hidden smUp>
      <Logo className="logo" style={{ width: '200px' }} />

      <Box display="flex" flexDirection="column" className="txt-center">
        <span> Teste Deveopness </span>
        <h2>©2022 Nicollas Santos</h2>
        <span>Todos os Direitos Reservados </span>
        <small>v.1.0.0</small>
      </Box>
    </Hidden>

    <Hidden xsDown>
      <div className="logo-container">
        <Logo className="logo" />

        <div>
          <h3>Teste</h3>
          <span> Sistema para Teste </span>
        </div>
      </div>

      {/* Licença do Sistema */}
      <div className="txt-center">
        <h2>©2022 Nicollas Santos</h2>
        <span>Todos os Direitos Reservados </span>
      </div>

      {/* Versão do sistema */}
      <small className="txt-end">v.1.0.0</small>
    </Hidden>
  </footer>
);
