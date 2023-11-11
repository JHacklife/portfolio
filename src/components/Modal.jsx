import React, { useState, useMemo } from 'react'
import { createPortal } from 'react-dom'
import { IconButton, Card, CardHeader, CardContent, CardActions, Box, Modal } from '@mui/material'
import { Close } from '@mui/icons-material'

/**
 * Renderiza un componente de modal personalizado.
 *
 * @param {boolean} isShowing - Indica si el modal se está mostrando actualmente.
 * @param {function} hide - Función para ocultar el modal.
 * @param {JSX.Element} avatar - El elemento avatar que se mostrará en el encabezado del modal.
 * @param {string} header - El texto del encabezado del modal.
 * @param {string} subheader - El texto del subencabezado del modal.
 * @param {JSX.Element} action - El elemento de acción que se mostrará en el encabezado del modal.
 * @param {JSX.Element} content - El elemento de contenido del modal.
 * @param {JSX.Element} actions - El elemento de acciones del modal.
 * @return {JSX.Element} El componente de modal renderizado.
*/
const ModalCustom = ({ isShowing, hide, avatar, header, subheader, action, content, actions, size = "auto" }) => isShowing ? createPortal(<>
  <Modal disableEnforceFocus={true}
    open={isShowing}
    onClose={hide}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description">
    <Card sx={{ width: { xs: "80%", md: size }, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', boxShadow: 24, borderRadius: 2 }}>
      {header && <CardHeader
        avatar={avatar}
        title={header}
        subheader={subheader}
        action={action ?? <IconButton size="small" onClick={hide} sx={{ backgroundColor: "primary.main", color: "primary.contrastText", ml: 2 }}><Close /></IconButton>}>
      </CardHeader>}
      {content && <CardContent>{content}</CardContent>}
      {actions && <CardActions sx={{ display: "flex", justifyContent: "center" }}>{actions}</CardActions>}
    </Card>
  </Modal>
</>, document.body) : null

export default ModalCustom
