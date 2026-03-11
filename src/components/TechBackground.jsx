import React, { useEffect, useRef, useCallback } from 'react';
import { Box } from '@mui/material';

/**
 * Professional Tech Background
 * 
 * A subtle animated network visualization that creates depth
 * without being distracting. Uses reduced particle count and
 * muted colors for a professional appearance.
 * 
 * Respects prefers-reduced-motion for accessibility.
 */

const TechBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const nodesRef = useRef([]);

  const initializeNodes = useCallback((canvas) => {
    const maxNodes = 50; // Reduced for subtlety
    const nodes = [];
    
    for (let i = 0; i < maxNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3, // Slower movement
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5, // Smaller particles
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
    const maxDistance = 100; // Connection distance
    
    // Professional color - muted blue
    const nodeColor = 'rgba(141, 186, 245, 0.6)';
    const lineColorBase = [141, 186, 245]; // RGB values

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
        }

        // Draw node (subtle glow effect)
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = nodeColor;
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
            
            // Opacity based on distance - very subtle
            const opacity = (1 - distance / maxDistance) * 0.15;
            ctx.strokeStyle = `rgba(${lineColorBase.join(',')}, ${opacity})`;
            ctx.lineWidth = 0.5;
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
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = nodeColor;
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
        backgroundColor: '#0a0a0f',
        // Subtle gradient overlay
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(ellipse at 50% 0%, rgba(141, 186, 245, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 20% 80%, rgba(141, 186, 245, 0.03) 0%, transparent 40%),
            radial-gradient(ellipse at 80% 60%, rgba(141, 186, 245, 0.02) 0%, transparent 40%)
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
