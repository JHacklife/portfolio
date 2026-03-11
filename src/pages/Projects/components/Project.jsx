import React from "react"
import { Link, Stack, Typography, Box, Chip } from "@mui/material"
import { motion } from 'framer-motion'
import toolsData from "../../../pages/LangsAndTools/tools.json"
import Atropos from 'atropos/react';
import 'atropos/css';
import { COLORS } from '../../../components/CyberComponents'

/**
 * Project Card - Vibrant Cyberpunk project showcase
 * 
 * Features:
 * - Atropos 3D tilt effect (no shadows, centered content)
 * - Neon color accents
 * - Glitch-style hover effects
 * - Clean, immersive layout
 */

const Project = ({ img, title = "Project", description = "Project description", type, tools = [], url }) => {
  const herramientas = toolsData.filter((tool) => tools.includes(tool.nombre))

  return (
    <Atropos 
      activeOffset={40} 
      shadow={false}
      highlight={false}
      rotateXMax={12}
      rotateYMax={12}
      className="project-atropos"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Link 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        sx={{ textDecoration: "none", display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}
      >
        <Box
          sx={{
            position: "relative",
            width: '100%',
            height: { xs: "280px", sm: "320px", md: "360px" },
            borderRadius: '4px',
            overflow: 'hidden',
            border: `1px solid ${COLORS.primary}30`,
            transition: 'all 0.3s ease',
            background: COLORS.darkAccent,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '&:hover': {
              borderColor: `${COLORS.primary}70`,
              boxShadow: `0 0 30px ${COLORS.primary}25, 0 0 60px ${COLORS.primary}10`,
              '& .project-overlay': {
                background: `linear-gradient(180deg, transparent 10%, ${COLORS.dark}F5 100%)`,
              },
              '& .project-image': {
                transform: 'scale(1.08)',
              },
              '& .project-corner': {
                opacity: 1,
              },
              '& .project-top-line': {
                opacity: 1,
              }
            }
          }}
        >
          {/* Top neon line */}
          <Box
            className="project-top-line"
            sx={{
              position: 'absolute',
              top: 0,
              left: '10%',
              right: '10%',
              height: '2px',
              background: `linear-gradient(90deg, transparent, ${COLORS.primary}, transparent)`,
              opacity: 0,
              transition: 'opacity 0.3s ease',
              zIndex: 5,
            }}
          />

          {/* Corner accent */}
          <Box
            className="project-corner"
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '35px',
              height: '35px',
              borderTop: `2px solid ${COLORS.neonGreen}`,
              borderRight: `2px solid ${COLORS.neonGreen}`,
              opacity: 0,
              transition: 'opacity 0.3s ease',
              zIndex: 5,
            }}
          />

          {/* Background Image */}
          <Box
            component="img"
            className="project-image"
            src={img}
            alt={title}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              transition: 'transform 0.5s ease',
            }}
          />

          {/* Gradient Overlay */}
          <Box
            className="project-overlay"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `linear-gradient(180deg, transparent 20%, ${COLORS.dark}E8 100%)`,
              transition: 'background 0.3s ease',
            }}
          />

          {/* Scanline effect overlay */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(0, 0, 0, 0.05) 2px,
                rgba(0, 0, 0, 0.05) 4px
              )`,
              pointerEvents: 'none',
              zIndex: 3,
            }}
          />

          {/* Content */}
          <Stack
            justifyContent="flex-end"
            alignItems="flex-start"
            height="100%"
            width="100%"
            sx={{ 
              position: 'relative', 
              zIndex: 4,
              p: 2.5,
            }}
            data-atropos-offset="5"
          >
            {/* Type Badge */}
            <Chip
              label={type}
              size="small"
              sx={{
                backgroundColor: `${COLORS.primary}20`,
                border: `1px solid ${COLORS.primary}50`,
                color: COLORS.primary,
                fontSize: '0.65rem',
                fontFamily: 'BlenderPro-Medium, monospace',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                height: '22px',
                mb: 1.5,
              }}
            />

            {/* Title */}
            <Typography
              variant="h6"
              data-atropos-offset="8"
              sx={{
                color: COLORS.white,
                fontFamily: 'BlenderPro-Bold',
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                lineHeight: 1.2,
                mb: 0.5,
                textShadow: `0 0 20px ${COLORS.primary}40`,
              }}
            >
              {title}
            </Typography>

            {/* Description */}
            <Typography
              variant="body2"
              sx={{
                color: COLORS.whiteMuted,
                fontSize: '0.85rem',
                lineHeight: 1.5,
                mb: 2,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {description}
            </Typography>

            {/* Tech Stack */}
            <Stack 
              direction="row" 
              spacing={1.5}
              flexWrap="wrap"
              sx={{ gap: 1 }}
              data-atropos-offset="3"
            >
              {herramientas.slice(0, 5).map((tool, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, y: -3 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <Box
                    sx={{
                      color: COLORS.primary,
                      opacity: 0.9,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        opacity: 1,
                        filter: `drop-shadow(0 0 8px ${COLORS.primary})`,
                      }
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
                    color: COLORS.gray,
                    alignSelf: 'center',
                  }}
                >
                  +{herramientas.length - 5}
                </Typography>
              )}
            </Stack>
          </Stack>
        </Box>
      </Link>
    </Atropos>
  )
}

export default Project
