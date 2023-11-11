import { useState } from 'react'
import { Stepper, Step, StepLabel } from '@mui/material'

/**
 * Renderiza un componente de paso personalizado.
 *
 * @param {Object} { labels, activeStep } - El objeto de parámetros que contiene las etiquetas y el paso activo.
 * @param {Array} labels - Un array de etiquetas para cada paso.
 * @param {number} activeStep - El índice del paso activo.
 * @return {JSX.Element} El componente de paso personalizado.
 */
export default function CustomStepper({ labels, activeStep }) {
  return (
    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
      {labels.map((label, index) => (
        <Step key={index}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  )
}
