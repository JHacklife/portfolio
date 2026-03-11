import React from "react"
import { Link, Stack, Typography, Box, Chip } from "@mui/material"
import toolsData from "../../../pages/LangsAndTools/tools.json"
import Atropos from 'atropos/react';

/**
 * Project Card - Professional project showcase component
 * 
 * Features:
 * - Elegant 3D tilt effect with Atropos
 * - Professional glass overlay with gradient
 * - Subtle hover animations
 * - Clean typography hierarchy
 */

const Project = ({ img, title = "Project", description = "Project description", type, tools = [], url }) => {
  const herramientas = toolsData.filter((tool) => tools.includes(tool.nombre))

  return (
    <Atropos 
      activeOffset={30} 
      shadowScale={1.02} 
      shadow={true}
      highlight={false}
      className="project-atropos"
    >
      <Link 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        sx={{ textDecoration: "none", display: 'block' }}
      >
        <Box
          sx={{
            position: "relative",
            height: { xs: "280px", sm: "320px", md: "360px" },
            borderRadius: '8px',
            overflow: 'hidden',
            border: '1px solid rgba(141, 186, 245, 0.15)',
            transition: 'all 0.3s ease',
            '&:hover': {
              borderColor: 'rgba(141, 186, 245, 0.35)',
              '& .project-overlay': {
                background: 'linear-gradient(180deg, transparent 20%, rgba(10, 10, 15, 0.95) 100%)',
              },
              '& .project-image': {
                transform: 'scale(1.05)',
              }
            }
          }}
        >
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
              background: 'linear-gradient(180deg, transparent 30%, rgba(10, 10, 15, 0.9) 100%)',
              transition: 'background 0.3s ease',
            }}
          />

          {/* Content */}
          <Stack
            justifyContent="flex-end"
            alignItems="flex-start"
            height="100%"
            sx={{ 
              position: 'relative', 
              zIndex: 2,
              p: 2.5,
            }}
            data-atropos-offset="3"
          >
            {/* Type Badge */}
            <Chip
              label={type}
              size="small"
              sx={{
                backgroundColor: 'rgba(141, 186, 245, 0.15)',
                border: '1px solid rgba(141, 186, 245, 0.3)',
                color: '#8DBAF5',
                fontSize: '0.65rem',
                fontFamily: 'BlenderPro-Medium',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                height: '22px',
                mb: 1.5,
              }}
            />

            {/* Title */}
            <Typography
              variant="h6"
              sx={{
                color: '#f0f4f8',
                fontFamily: 'BlenderPro-Bold',
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                lineHeight: 1.2,
                mb: 0.5,
              }}
            >
              {title}
            </Typography>

            {/* Description */}
            <Typography
              variant="body2"
              sx={{
                color: '#a0b0c0',
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
            >
              {herramientas.slice(0, 5).map((tool, index) => (
                <Box
                  key={index}
                  sx={{
                    color: '#8DBAF5',
                    opacity: 0.8,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      opacity: 1,
                      transform: 'translateY(-2px)',
                    }
                  }}
                >
                  <i 
                    className={tool.icono} 
                    style={{ fontSize: '1.4rem' }}
                    aria-label={tool.nombre}
                  />
                </Box>
              ))}
              {herramientas.length > 5 && (
                <Typography
                  variant="caption"
                  sx={{
                    color: '#808898',
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
