import React, { useState } from "react"
import { Stack, Typography, Box, Chip } from "@mui/material"
import { motion } from 'framer-motion'
import toolsData from "../../../pages/LangsAndTools/tools.json"
import Atropos from 'atropos/react'
import 'atropos/css'

/**
 * Tarjeta de Proyecto - Presentación Cyberpunk Mejorada con Atropos 3D
 * 
 * Características:
 * - Efecto parallax Atropos 3D avanzado con capas de efecto glitch
 * - Paleta cyberpunk cian/magenta neón
 * - Efectos de escaneo y brillo digital
 * - Animaciones de hover dinámicas con capas de profundidad
 * - Diseño de glass morphism multi-capas
 */

const Project = ({ img, title = "Proyecto", description = "Descripción del proyecto", type, tools = [], url }) => {
  const herramientas = toolsData.filter((tool) => tools.includes(tool.nombre))
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      style={{ width: '100%' }}
    >
      <Box
        component="a"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{
          display: 'block',
          textDecoration: 'none',
          width: '100%',
          maxHeight: { xs: '280px', sm: '320px', md: '360px' },
          overflow: 'hidden',
          '&:focus-visible': {
            outline: '2px solid rgba(0, 212, 255, 0.8)',
            outlineOffset: '4px',
          }
        }}
      >
        <Atropos
          activeOffset={50}
          shadow={false}
          highlight={false}
          rotateXMax={15}
          rotateYMax={15}
          scaleMax={1.02}
          onEnter={() => setIsHovered(true)}
          onLeave={() => setIsHovered(false)}
          className="project-atropos"
        >
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: { xs: '280px', sm: '320px', md: '360px' },
              borderRadius: '6px',
              overflow: 'hidden',
              background: 'linear-gradient(135deg, #0d0d14 0%, #1a1a24 100%)',
              cursor: 'pointer',
              perspective: '1000px',

              // Neon border glow
              border: isHovered
                ? '2px solid rgba(0, 212, 255, 0.8)'
                : '1px solid rgba(0, 212, 255, 0.2)',
              boxShadow: isHovered
                ? `0 0 40px rgba(0, 212, 255, 0.4), 
                   0 0 80px rgba(0, 212, 255, 0.15),
                   inset 0 0 30px rgba(0, 212, 255, 0.05)`
                : '0 0 20px rgba(0, 212, 255, 0.1)',

              transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',

              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.1), transparent)',
                transition: 'left 0.6s ease',
                zIndex: 10,
                pointerEvents: 'none',
              },

              '&:hover::before': {
                left: '100%',
              },
            }}
          >
            {/* Imagen de fondo con parallax mejorado */}
            <Box
              component="img"
              className="project-image"
              src={img}
              alt={title}
              data-atropos-offset="15"
              sx={{
                position: 'absolute',
                top: '-10%',
                left: '-10%',
                width: '120%',
                height: '120%',
                objectFit: 'cover',
                transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                filter: isHovered ? 'brightness(1.1) saturate(1.2)' : 'brightness(0.85) saturate(0.95)',
                ...(isHovered && {
                  transform: 'scale(1.04)',
                }),
              }}
            />

            {/* Línea neón superior */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, transparent, #00d4ff, transparent)',
                boxShadow: `0 0 15px rgba(0, 212, 255, 0.6)`,
                zIndex: 5,
                opacity: isHovered ? 1 : 0.4,
                transition: 'opacity 0.3s ease',
              }}
            />

            {/* Superposición de gradiente - Multi-capa con cyberpunk mejorado */}
            <Box
              className="project-overlay"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: isHovered
                  ? 'linear-gradient(180deg, rgba(0, 20, 30, 0.4) 0%, rgba(0, 10, 15, 0.85) 60%, rgba(0, 0, 0, 0.92) 100%)'
                  : 'linear-gradient(180deg, rgba(0, 10, 15, 0.3) 0%, rgba(0, 5, 10, 0.7) 50%, rgba(0, 0, 0, 0.88) 100%)',
                transition: 'background 0.4s ease',
                backdropFilter: 'blur(2px)',
                zIndex: 3,
              }}
            />

            {/* Capa de efecto glitch */}
            {isHovered && (
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 4,
                  opacity: 0.15,
                  animation: 'glitch 0.3s ease-in-out',
                  '@keyframes glitch': {
                    '0%, 100%': {
                      background: 'linear-gradient(0deg, rgba(255, 0, 127, 0.3) 0%, transparent 50%, rgba(0, 255, 200, 0.3) 100%)',
                      backgroundPosition: '0 0',
                    },
                    '50%': {
                      background: 'linear-gradient(0deg, rgba(0, 255, 200, 0.3) 0%, transparent 50%, rgba(255, 0, 127, 0.3) 100%)',
                      backgroundPosition: '0 2px',
                    },
                  },
                }}
              />
            )}

            {/* Contenedor de contenido con capas de profundidad */}
            <Stack
              justifyContent="space-between"
              sx={{
                position: 'relative',
                height: '100%',
                width: '100%',
                p: 2.5,
                zIndex: 5,
              }}
              data-atropos-offset="8"
            >
              {/* Área de badge superior */}
              <Box>
                <Chip
                  label={type}
                  size="small"
                  data-atropos-offset="4"
                  sx={{
                    alignSelf: 'flex-start',
                    backgroundColor: isHovered
                      ? 'rgba(0, 212, 255, 0.35)'
                      : 'rgba(0, 0, 0, 0.6)',
                    border: `1.5px solid rgba(0, 212, 255, 0.8)`,
                    color: '#00d4ff',
                    fontSize: '0.65rem',
                    fontFamily: 'BlenderPro-Medium, monospace',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    height: '24px',
                    fontWeight: 600,
                    boxShadow: `0 0 20px rgba(0, 212, 255, ${isHovered ? 0.5 : 0.2}), 0 2px 8px rgba(0, 0, 0, 0.6)`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                    }
                  }}
                />
              </Box>

              {/* Área de contenido */}
              <Stack spacing={1.2}>
                {/* Título con brillo de texto */}
                <Typography
                  variant="h3"
                  data-atropos-offset="12"
                  sx={{
                    color: '#ffffff',
                    fontFamily: 'BlenderPro-Bold, monospace',
                    fontWeight: 700,
                    lineHeight: 1.2,
                    textShadow: isHovered
                      ? '0 0 20px rgba(0, 212, 255, 0.6), 0 0 40px rgba(0, 212, 255, 0.3), 0 2px 10px rgba(0, 0, 0, 0.8)'
                      : '0 0 12px rgba(0, 212, 255, 0.4), 0 2px 8px rgba(0, 0, 0, 0.7)',
                    transition: 'text-shadow 0.3s ease',
                    letterSpacing: '0.02em',
                  }}
                >
                  {title}
                </Typography>

                {/* Descripción */}
                <Typography
                  variant="body1"
                  data-atropos-offset="6"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    lineHeight: 1.6,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    transition: 'color 0.3s ease',
                    textShadow: '0 1px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  {description}
                </Typography>
              </Stack>

              {/* Iconos de pila de tecnología con estilo mejorado */}
              <Stack
                direction="row"
                spacing={1}
                flexWrap="wrap"
                sx={{ gap: 1 }}
                data-atropos-offset="7"
              >
                {herramientas.slice(0, 5).map((tool, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -3, scale: 1.15 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <Box
                      sx={{
                        color: '#00d4ff',
                        opacity: 0.85,
                        transition: 'all 0.3s ease',
                        textShadow: '0 0 10px rgba(0, 212, 255, 0.3)',
                        filter: 'drop-shadow(0 0 8px rgba(0, 212, 255, 0.2))',
                        '&:hover': {
                          opacity: 1,
                          textShadow: '0 0 20px rgba(0, 212, 255, 0.6)',
                          filter: 'drop-shadow(0 0 12px rgba(0, 212, 255, 0.5))',
                        },
                      }}
                    >
                      <i
                        className={tool.icono}
                        style={{ fontSize: '1.4rem' }}
                        aria-label={tool.nombre}
                      />
                    </Box>
                  </motion.div>
                ))}
                {herramientas.length > 5 && (
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'rgba(0, 212, 255, 0.6)',
                      alignSelf: 'center',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                      border: '1px solid rgba(0, 212, 255, 0.3)',
                      padding: '2px 6px',
                      borderRadius: '2px',
                      backgroundColor: 'rgba(0, 212, 255, 0.05)',
                    }}
                  >
                    +{herramientas.length - 5}
                  </Typography>
                )}
              </Stack>
            </Stack>

            {/* Acento de esquina - Superior izquierda */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '24px',
                height: '24px',
                zIndex: 6,
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '2px',
                  background: isHovered
                    ? 'linear-gradient(90deg, #00d4ff, rgba(0, 212, 255, 0.3))'
                    : 'linear-gradient(90deg, rgba(0, 212, 255, 0.5), rgba(0, 212, 255, 0.1))',
                  boxShadow: isHovered ? `0 0 15px rgba(0, 212, 255, 0.6)` : '0 0 8px rgba(0, 212, 255, 0.2)',
                  transition: 'all 0.3s ease',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '2px',
                  height: '100%',
                  background: isHovered
                    ? 'linear-gradient(180deg, #00d4ff, rgba(0, 212, 255, 0.3))'
                    : 'linear-gradient(180deg, rgba(0, 212, 255, 0.5), rgba(0, 212, 255, 0.1))',
                  boxShadow: isHovered ? `0 0 15px rgba(0, 212, 255, 0.6)` : '0 0 8px rgba(0, 212, 255, 0.2)',
                  transition: 'all 0.3s ease',
                },
              }}
            />

            {/* Acento de esquina - Inferior derecha */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '24px',
                height: '24px',
                zIndex: 6,
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: '100%',
                  height: '2px',
                  background: isHovered
                    ? 'linear-gradient(90deg, rgba(0, 212, 255, 0.3), #00d4ff)'
                    : 'linear-gradient(90deg, rgba(0, 212, 255, 0.1), rgba(0, 212, 255, 0.5))',
                  boxShadow: isHovered ? `0 0 15px rgba(0, 212, 255, 0.6)` : '0 0 8px rgba(0, 212, 255, 0.2)',
                  transition: 'all 0.3s ease',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: '2px',
                  height: '100%',
                  background: isHovered
                    ? 'linear-gradient(180deg, rgba(0, 212, 255, 0.3), #00d4ff)'
                    : 'linear-gradient(180deg, rgba(0, 212, 255, 0.1), rgba(0, 212, 255, 0.5))',
                  boxShadow: isHovered ? `0 0 15px rgba(0, 212, 255, 0.6)` : '0 0 8px rgba(0, 212, 255, 0.2)',
                  transition: 'all 0.3s ease',
                },
              }}
            />
          </Box>
        </Atropos>
      </Box>
    </motion.div>
  )
}

export default Project
