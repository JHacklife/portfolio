import React from "react"
import { Link, Stack, Typography } from "@mui/material"
import toolsData from "../../../pages/Projects/tools.json"
import Atropos from 'atropos/react';

const Project = ({ img, title = "Proyecto", description = "Descripción del proyecto", tools = [], url }) => {

  const herramientas = toolsData.filter((tool, index) => tools.includes(tool.nombre))
  console.log(title, herramientas)
  return (
    <Atropos activeOffset={40} shadowScale={1.05} shadow highlight >
      <Link href={url} target="_blank" sx={{ textDecoration: "none" }}>
        <Stack alignItems="center"
          height="60vh"
          sx={{
            position: "relative",
            /* border: "1px solid white", */
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            bgcolor: "info.main"
          }}>
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            backgroundImage: "linear-gradient(to top, #0c0c0c, transparent)",
          }} />

          <img src={img} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute" }} />

          <Stack id="data" p={3} justifyContent="end" alignItems="center" height="100%" sx={{ zIndex: 2 }}>
            <Typography variant="h6" bgcolor="tertiary.main" color="black.main" align="left" px={1} width="fit-content" data-atropos-offset="10">
              {title}
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "400" }} data-atropos-offset="5">{description}</Typography>
            <Stack direction="row" justifyContent="center" spacing={1} sx={{ backgroundColor: "#0000000", backdropFilter: "blur(2px)", border: "1px solid cyan", borderRadius: "10px", p: 1 }} data-atropos-offset="15">
              {herramientas.map((tool, index) => <Link key={index} href={tool.url} target="_blank" sx={{ textDecoration: "none" }} className="scale">
                <i className={`${tool.icono}`} style={{ fontSize: "2rem" }}></i>
              </Link>)}
            </Stack>
          </Stack>
        </Stack>
      </Link>
    </Atropos>
  )
}

export default Project