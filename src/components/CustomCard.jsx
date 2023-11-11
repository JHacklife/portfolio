﻿import React, { useState } from "react"

/* COMPONENTES */
import { Card, CardHeader, CardContent, CardActions } from "@mui/material"
import { Collapse, Avatar, Typography } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import ExpandMore from "@mui/material/IconButton"

/* ICONOS */
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { MoreVert, DeleteForever } from "@mui/icons-material"

/**
 * Renderiza un componente de tarjeta personalizada con opciones de personalización.
 *
 * @param {string} avatar - El avatar de la tarjeta.
 * @param {string} titulo - El título de la tarjeta.
 * @param {string} subtitulo - El subtítulo de la tarjeta.
 * @param {string} description - La descripción de la tarjeta.
 * @param {string} imagen - La imagen de la tarjeta.
 * @param {ReactNode} content - El contenido de la tarjeta.
 * @param {ReactNode} opciones - Las opciones de la tarjeta.
 * @param {ReactNode} acciones - Las acciones de la tarjeta.
 * @param {Object} sx - Los estilos de la tarjeta.
 * @param {string} size - El tamaño de la tarjeta.
 * @param {ReactNode} children - Los elementos secundarios de la tarjeta.
 *
 * @return {ReactNode} El componente de tarjeta personalizada.
 */
export default function CustomCard({ avatar, titulo, subtitulo, description, imagen, content, opciones, acciones, sx, children }) {

  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card sx={sx}>
      {titulo && <CardHeader
        avatar={avatar && <Avatar aria-label="avatar">{avatar}</Avatar>}
        action={opciones}
        title={<Typography variant="h6">{titulo}</Typography>}
        subheader={subtitulo}
        sx={{ width: "100%" }}
      />}

      {imagen}

      {description && <CardContent>
        <Typography variant="body2" color="text.secondary">{description}</Typography>
      </CardContent>}

      {acciones && <CardActions disableSpacing sx={{ justifyContent: "space-between" }}>
        {acciones}
        {content && <ExpandMore
          expand={`${expanded}`}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Mostrar más"
        ><ExpandMoreIcon />
        </ExpandMore>}
      </CardActions>}

      {content && <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>{content}</CardContent>
      </Collapse>}

      {children && <CardContent>{children}</CardContent>}
    </Card>
  )
}
