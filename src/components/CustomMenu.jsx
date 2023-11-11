import React, { useState } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import { MoreVert } from '@mui/icons-material'
import { Divider, IconButton } from '@mui/material'

export default function CustomMenu({ icon, options, altOptions, onSelect }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}>
        {icon ? icon : <MoreVert />}
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        {options.map((option, index) => (
          <MenuItem key={option.label} onClick={() => {
            onSelect(option)
            handleClose()
          }}>
            {option.icon && (
              <ListItemIcon>{option.icon}</ListItemIcon>
            )}
            {option.label}
          </MenuItem>
        ))}
        {altOptions && <Divider />}
        {altOptions?.map((option, index) => (
          <MenuItem key={option.label} onClick={() => {
            onSelect(option)
            handleClose()
          }}>
            {option.icon && (
              <ListItemIcon>{option.icon}</ListItemIcon>
            )}
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}
