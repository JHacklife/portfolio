import React, { useState } from 'react'
import { useMediaQuery, useTheme, Stack, Typography, Box, Stepper, Step, StepButton, Button } from '@mui/material'

export default function CustomStepper({ steps, activeStep, setActiveStep, completed, setCompleted }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const totalSteps = () => {
    return steps?.length
  }

  const completedSteps = () => {
    return Object.keys(completed).length
  }

  const isLastStep = () => {
    return activeStep === totalSteps() - 1
  }

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps()
  }

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
        // find the first step that has been completed
        steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1
    setActiveStep(newActiveStep)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleStep = (step) => () => {
    setActiveStep(step)
  }

  const handleComplete = () => {
    const newCompleted = completed
    newCompleted[activeStep] = true
    setCompleted(newCompleted)
    handleNext()
  }

  const handleReset = () => {
    setActiveStep(0)
    setCompleted({})
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep} alternativeLabel={!isMobile} orientation={isMobile ? 'vertical' : 'horizontal'}>
        {steps?.map((label, index) => (
          <Step key={index} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>{label}</StepButton>
          </Step>
        ))}
      </Stepper>
      {/* <Stack>
        {allStepsCompleted()
          ? <Stack>
            <Typography sx={{ mt: 2, mb: 1 }}>Todos los pasos completados - ya ha terminado</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Resetear</Button>
            </Box>
          </Stack>

          : <Stack>
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>Paso {activeStep + 1}</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}>
                Atrás
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Adelante
              </Button>
              {activeStep !== steps?.length &&
                (completed[activeStep]
                  ? null
                  : <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1 ? 'Terminado' : 'Paso completo'}
                  </Button>
                )}
            </Box>
          </Stack>
        }
      </Stack> */}
    </Box>
  )
}
