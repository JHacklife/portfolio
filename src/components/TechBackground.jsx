import React, { useEffect, useRef, useCallback } from 'react';
import { Box } from '@mui/material';

/**
 * Vibrant Cyberpunk Tech Background
 * 
 * An animated network visualization with neon colors (#0bc5ea, #00ff41).
 * Creates an immersive tech atmosphere with glowing nodes and connections.
 * 
 * Respects prefers-reduced-motion for accessibility.
 */

// Color constants
const COLORS = {
  primary: '#0bc5ea',
  neonGreen: '#00ff41',
  neonRed: '#ff003c',
  dark: '#0a0a0f',
};

const TechBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const nodesRef = useRef([]);

  const initializeNodes = useCallback((canvas) => {
    const maxNodes = 60; // Slightly more for visual impact
    const nodes = [];
    
    for (let i = 0; i < maxNodes; i++) {
      // Assign random neon color to each node
      const colorChoice = Math.random();
      let color;
      if (colorChoice < 0.6) {
        color = COLORS.primary; // Majority cyan
      } else if (colorChoice < 0.85) {
        color = COLORS.neonGreen; // Some green
      } else {
        color = COLORS.neonRed; // Few red accents
      }
      
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        color: color,
        glowIntensity: Math.random() * 0.5 + 0.5,
      });
    }
    
    return nodes;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      nodesRef.current = initializeNodes(canvas);
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const nodes = nodesRef.current;
    const maxDistance = 120; // Connection distance

    // Convert hex to RGB for line drawing
    const hexToRgb = (hex) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
      ] : [11, 197, 234]; // fallback to cyan
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Update position (skip if reduced motion)
        if (!prefersReducedMotion) {
          node.x += node.vx;
          node.y += node.vy;

          // Bounce off edges smoothly
          if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
          if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

          // Keep nodes in bounds
          node.x = Math.max(0, Math.min(canvas.width, node.x));
          node.y = Math.max(0, Math.min(canvas.height, node.y));
          
          // Subtle glow pulsing
          node.glowIntensity = 0.5 + Math.sin(Date.now() * 0.002 + i) * 0.3;
        }

        // Draw node with glow effect
        const rgb = hexToRgb(node.color);
        
        // Outer glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2);
        const glowGradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius * 3
        );
        glowGradient.addColorStop(0, `rgba(${rgb.join(',')}, ${0.3 * node.glowIntensity})`);
        glowGradient.addColorStop(1, 'transparent');
        ctx.fillStyle = glowGradient;
        ctx.fill();
        
        // Core node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb.join(',')}, ${0.8 * node.glowIntensity})`;
        ctx.fill();

        // Draw connections (only to nearby nodes)
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - node.x;
          const dy = nodes[j].y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            
            // Opacity based on distance
            const opacity = (1 - distance / maxDistance) * 0.25;
            
            // Gradient line between two node colors
            const gradient = ctx.createLinearGradient(
              node.x, node.y, nodes[j].x, nodes[j].y
            );
            const rgb1 = hexToRgb(node.color);
            const rgb2 = hexToRgb(nodes[j].color);
            gradient.addColorStop(0, `rgba(${rgb1.join(',')}, ${opacity})`);
            gradient.addColorStop(1, `rgba(${rgb2.join(',')}, ${opacity})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation or draw static frame
    if (prefersReducedMotion) {
      // Just draw once for reduced motion
      nodes.forEach((node, i) => {
        const rgb = hexToRgb(node.color);
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb.join(',')}, 0.7)`;
        ctx.fill();
      });
    } else {
      animate();
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [initializeNodes]);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        backgroundColor: COLORS.dark,
        // Vibrant gradient overlays
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(ellipse at 50% 0%, ${COLORS.primary}15 0%, transparent 50%),
            radial-gradient(ellipse at 20% 80%, ${COLORS.neonGreen}08 0%, transparent 40%),
            radial-gradient(ellipse at 80% 60%, ${COLORS.neonRed}05 0%, transparent 40%),
            radial-gradient(ellipse at 10% 40%, ${COLORS.primary}06 0%, transparent 30%)
          `,
          zIndex: 1,
          pointerEvents: 'none',
        }
      }}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      />
    </Box>
  );
};

export default TechBackground;
